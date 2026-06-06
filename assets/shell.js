/* =========================================================================
   multipage · shell.js   (vanilla, no build)

   The SHARED CHROME for every page: app bar, cross-page nav, footer and the
   detail <dialog>. It also owns global state (language + theme) and exposes a
   tiny toolkit on window.LDW that each page's app.js reuses.

   Loaded on EVERY page BEFORE app.js. It:
     1. reads persisted lang/theme (localStorage, sandbox-safe),
     2. injects app bar + nav + footer + dialog around <main id="page">,
     3. wires the language / theme toggles,
     4. highlights the current page (from <body data-page="...">),
     5. lets app.js register an onLang() callback so a language switch repaints
        BOTH the chrome AND the page body — nothing is ever left in one language.

   Cross-page persistence is automatic: lang/theme live in localStorage (an
   origin-wide store), so navigating to another .html restores the same state.
   ========================================================================= */
(function () {
  "use strict";

  var META = window.SITE_META || { title: {}, subtitle: {}, footer: {} };
  var PAGES = Array.isArray(window.SITE_PAGES) ? window.SITE_PAGES : [];

  /* ---------- chrome i18n (page content strings live in the data) ---------- */
  var I18N = {
    en: { close: "Close", menu: "Pages", skip: "Skip to content" },
    zh: { close: "關閉", menu: "頁面", skip: "跳到內容" }
  };

  /* ---------- sandbox-safe localStorage ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ---------- global state ----------
     Single-language site (Traditional Chinese). Lang is hard-pinned to "zh"
     and NOT read from localStorage — github.io is a shared origin, so a sibling
     site's lang="en" must never leak in and blank out this zh-only content. */
  var state = {
    lang:  "zh",
    theme: lsGet("theme") || "light"
  };

  /* ---------- helpers shared with app.js ---------- */
  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || obj.zh || "";
  }
  function ui(key) { return (I18N[state.lang] || I18N.en)[key]; }
  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }
  function r(n) { return Math.round(n * 100) / 100; }

  function pageHref(p) { return p.slug === "home" ? "index.html" : p.slug + ".html"; }
  function currentSlug() { return document.body.getAttribute("data-page") || "home"; }
  function currentPage() {
    var slug = currentSlug();
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].slug === slug) return PAGES[i];
    return PAGES[0] || null;
  }

  /* ---------- onLang callback registry (app.js plugs in here) ---------- */
  var langSubscribers = [];
  function onLang(fn) { if (typeof fn === "function") langSubscribers.push(fn); }

  /* =======================================================================
     CHROME INJECTION — app bar, nav, footer, dialog around <main id="page">
     ===================================================================== */
  function injectChrome() {
    var main = document.getElementById("page");
    if (!main) return;

    /* skip link */
    var skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#page";
    skip.id = "skipLink";
    document.body.insertBefore(skip, document.body.firstChild);

    /* app bar */
    var appbar = document.createElement("header");
    appbar.className = "appbar";
    appbar.innerHTML =
      '<div class="appbar__inner">' +
        '<a class="brand" href="index.html">' +
          '<span class="material-symbols-rounded brand__logo">hub</span>' +
          '<span class="brand__name" id="brandName"></span>' +
        '</a>' +
        '<div class="appbar__actions">' +
          '<a class="gh-star" id="ghStar" href="https://github.com/tingwei161803/ai-governance" ' +
            'target="_blank" rel="noopener" data-repo="tingwei161803/ai-governance" ' +
            'title="在 GitHub 上給星" aria-label="在 GitHub 上給此專案 Star">' +
            '<span class="material-symbols-rounded">star</span>' +
            '<span class="gh-star__count" id="ghStarCount">—</span>' +
          '</a>' +
          '<button class="icon-btn" id="themeToggle" type="button" title="切換深淺色主題" aria-label="切換深淺色主題 / Toggle theme">' +
            '<span class="material-symbols-rounded" id="themeIcon">dark_mode</span>' +
          '</button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(appbar, main);

    /* cross-page nav */
    var nav = document.createElement("nav");
    nav.className = "pagenav";
    nav.id = "pageNav";
    nav.innerHTML = '<div class="pagenav__inner" id="pageNavInner"></div>';
    document.body.insertBefore(nav, main);

    /* footer */
    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = '<p id="footerText"></p>';
    main.parentNode.insertBefore(footer, main.nextSibling);

    /* shared detail dialog (used by card layouts) */
    var dialog = document.createElement("dialog");
    dialog.className = "dialog";
    dialog.id = "dialog";
    dialog.setAttribute("aria-labelledby", "dialogTitle");
    dialog.innerHTML =
      '<div class="dialog__bar">' +
        '<span class="dialog__spacer"></span>' +
        '<button class="icon-btn" id="dialogClose" type="button" aria-label="Close / 關閉">' +
          '<span class="material-symbols-rounded">close</span>' +
        '</button>' +
      '</div>' +
      '<div class="dialog__body" id="dialogBody"></div>';
    document.body.appendChild(dialog);

    /* dialog wiring (shared close behaviour; deep links handled by app.js) */
    document.getElementById("dialogClose").addEventListener("click", function () {
      if (dialog.open) dialog.close();
    });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  }

  function paintNav() {
    var inner = document.getElementById("pageNavInner");
    if (!inner) return;
    inner.innerHTML = "";
    var here = currentSlug();
    PAGES.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "navpill" + (p.slug === here ? " navpill--active" : "");
      a.href = pageHref(p);
      if (p.slug === here) a.setAttribute("aria-current", "page");
      a.innerHTML =
        '<span class="material-symbols-rounded" aria-hidden="true">' +
          escapeHtml(p.icon || "label") + "</span>" +
        "<span>" + escapeHtml(t(p.title)) + "</span>";
      inner.appendChild(a);
    });
    /* keep the active pill in view within the scrolling nav */
    var active = inner.querySelector(".navpill--active");
    if (active && active.scrollIntoView) {
      active.scrollIntoView({ block: "nearest", inline: "center" });
    }
  }

  /* ---------- chrome text in the active language ---------- */
  function refreshChrome() {
    document.documentElement.setAttribute("lang", state.lang);
    var page = currentPage();
    var siteTitle = t(META.title);
    var pageTitle = page ? t(page.title) : "";
    document.title = pageTitle ? pageTitle + " · " + siteTitle : siteTitle;

    var brand = document.getElementById("brandName");
    if (brand) brand.textContent = siteTitle;
    var foot = document.getElementById("footerText");
    if (foot) foot.textContent = t(META.footer);
    var skip = document.getElementById("skipLink");
    if (skip) skip.textContent = ui("skip");
    var nav = document.getElementById("pageNav");
    if (nav) nav.setAttribute("aria-label", ui("menu"));
    var dc = document.getElementById("dialogClose");
    if (dc) dc.setAttribute("aria-label", ui("close"));
    paintNav();
  }

  /* =======================================================================
     THEME + LANGUAGE
     ===================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = state.theme === "dark" ? "light_mode" : "dark_mode";
    lsSet("theme", state.theme);
  }
  function applyLangChrome() {
    var label = document.getElementById("langLabel");
    if (label) label.textContent = state.lang === "en" ? "EN" : "中";
    lsSet("lang", state.lang);
  }

  function wire() {
    document.getElementById("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });
  }

  /* =======================================================================
     PUBLIC TOOLKIT (app.js uses this)
     ===================================================================== */
  window.LDW = {
    ready: false,          // flipped true once the chrome (incl. #dialog) is injected
    state: state,
    t: t, ui: ui, escapeHtml: escapeHtml, r: r,
    lsGet: lsGet, lsSet: lsSet,
    pages: PAGES, meta: META,
    currentPage: currentPage, currentSlug: currentSlug, pageHref: pageHref,
    onLang: onLang,
    refreshChrome: refreshChrome,
    dialog: function () { return document.getElementById("dialog"); }
  };

  /* =======================================================================
     INIT
     ===================================================================== */
  /* ---------- live GitHub star count (public API, no auth) ---------- */
  function fetchStars() {
    var el = document.getElementById("ghStar");
    var countEl = document.getElementById("ghStarCount");
    if (!el || !countEl) return;
    var repo = el.getAttribute("data-repo");
    if (!repo) return;
    fetch("https://api.github.com/repos/" + repo)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j || typeof j.stargazers_count !== "number") return;
        var n = j.stargazers_count;
        countEl.textContent = n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n);
      })
      .catch(function () { /* offline / rate-limited: leave the placeholder */ });
  }

  function init() {
    injectChrome();
    applyTheme();
    applyLangChrome();
    refreshChrome();
    wire();
    fetchStars();
    window.LDW.ready = true;
    document.dispatchEvent(new CustomEvent("ldw:shell-ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
