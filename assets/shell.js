/* =========================================================================
   multipage · shell.js   (vanilla, no build)

   The SHARED CHROME for every page: app bar, cross-page nav, footer and the
   detail <dialog>. It also owns the theme and exposes a tiny toolkit on
   window.LDW that each page's app.js reuses.

   Loaded on EVERY page BEFORE app.js. It:
     1. reads the persisted theme (localStorage, sandbox-safe),
     2. injects app bar + nav + footer + dialog around <main id="page">,
     3. wires the theme toggle,
     4. highlights the current page (from <body data-page="...">).

   This is a single-language site (Traditional Chinese); there is no language
   toggle. Theme persists across pages via localStorage (an origin-wide store),
   so navigating to another .html restores the same state. With no saved
   choice the theme follows the OS (prefers-color-scheme).
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
  var mqDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function systemTheme() { return mqDark && mqDark.matches ? "dark" : "light"; }
  var saved = lsGet("theme");
  var state = {
    lang:  "zh",
    theme: saved === "dark" || saved === "light" ? saved : systemTheme()
  };
  /* paint the theme + "js" flag before the chrome is injected (avoids a flash) */
  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.classList.add("js");

  /* tiny inline icons (replaces the Material Symbols webfont) */
  var ICON = {
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
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

    /* app bar — a seal (印) + the site name, like a gazette nameplate */
    var appbar = document.createElement("header");
    appbar.className = "appbar";
    appbar.innerHTML =
      '<div class="appbar__inner">' +
        '<a class="brand" href="index.html">' +
          '<span class="seal brand__seal" aria-hidden="true">治理</span>' +
          '<span class="brand__name" id="brandName"></span>' +
        '</a>' +
        '<div class="appbar__actions">' +
          '<a class="gh-star" id="ghStar" href="https://github.com/tingwei161803/ai-governance" ' +
            'target="_blank" rel="noopener" data-repo="tingwei161803/ai-governance" ' +
            'title="在 GitHub 上給星" aria-label="在 GitHub 上給此專案 Star">' +
            ICON.star +
            '<span class="gh-star__label">Star</span>' +
            '<span class="gh-star__count" id="ghStarCount" hidden></span>' +
          '</a>' +
          '<button class="icon-btn" id="themeToggle" type="button" title="切換深淺色主題" aria-label="切換深淺色主題">' +
            '<span id="themeIcon"></span>' +
          '</button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(appbar, main);

    /* cross-page nav — plain text links, scrolls sideways on narrow screens */
    var nav = document.createElement("nav");
    nav.className = "pagenav";
    nav.id = "pageNav";
    nav.innerHTML = '<div class="pagenav__inner" id="pageNavInner"></div>';
    document.body.insertBefore(nav, main);

    /* footer — a colophon under a double rule */
    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML =
      '<div class="footer__inner">' +
        '<p class="footer__name"><span class="seal seal--sm" aria-hidden="true">治理</span><span id="footerName"></span></p>' +
        '<p class="footer__text" id="footerText"></p>' +
        '<p class="footer__links"><a href="sources.html">資料來源</a><a href="https://github.com/tingwei161803/ai-governance" target="_blank" rel="noopener">GitHub 原始碼</a></p>' +
      '</div>';
    main.parentNode.insertBefore(footer, main.nextSibling);

    /* shared detail dialog (used by card layouts) */
    var dialog = document.createElement("dialog");
    dialog.className = "dialog";
    dialog.id = "dialog";
    dialog.setAttribute("aria-labelledby", "dialogTitle");
    dialog.innerHTML =
      '<div class="dialog__bar">' +
        '<span class="dialog__spacer"></span>' +
        '<button class="icon-btn" id="dialogClose" type="button" aria-label="關閉">' +
          ICON.close +
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
    var here = currentSlug(), lastVol = null;
    PAGES.forEach(function (p) {
      var vol = p.volume ? p.volume.no : "";
      if (lastVol !== null && vol !== lastVol) {
        var sep = document.createElement("span");
        sep.className = "pagenav__sep";
        sep.setAttribute("aria-hidden", "true");
        inner.appendChild(sep);
      }
      lastVol = vol;
      var a = document.createElement("a");
      a.className = "navlink" + (p.slug === here ? " navlink--active" : "");
      a.href = pageHref(p);
      if (p.slug === here) a.setAttribute("aria-current", "page");
      a.textContent = t(p.title);
      inner.appendChild(a);
    });
    /* keep the active link in view within the scrolling nav (without moving the page) */
    var active = inner.querySelector(".navlink--active");
    if (active && inner.scrollWidth > inner.clientWidth) {
      inner.scrollLeft = active.offsetLeft - (inner.clientWidth - active.offsetWidth) / 2;
    }
    function edges() {
      nav.classList.toggle("pagenav--more-left", inner.scrollLeft > 4);
      nav.classList.toggle("pagenav--more-right", inner.scrollLeft + inner.clientWidth < inner.scrollWidth - 4);
    }
    var nav = document.getElementById("pageNav");
    inner.addEventListener("scroll", edges, { passive: true });
    window.addEventListener("resize", edges);
    edges();
  }

  /* ---------- chrome text ---------- */
  /* <html lang> is declared by the page itself as zh-Hant and is deliberately
     not rewritten here: state.lang is a data-dictionary key ("zh"), not a
     BCP-47 tag, so writing it back downgrades the declared language to a less
     precise code for anything that reads the DOM after scripts have run. */
  function refreshChrome() {
    var page = currentPage();
    var siteTitle = t(META.title);
    /* the <title> is written into each HTML file (and is longer on the home
       page), so it is left alone here */

    var brand = document.getElementById("brandName");
    if (brand) brand.textContent = siteTitle;
    var foot = document.getElementById("footerText");
    if (foot) foot.textContent = t(META.footer);
    var footName = document.getElementById("footerName");
    if (footName) footName.textContent = siteTitle;
    var skip = document.getElementById("skipLink");
    if (skip) skip.textContent = ui("skip");
    var nav = document.getElementById("pageNav");
    if (nav) nav.setAttribute("aria-label", ui("menu"));
    var dc = document.getElementById("dialogClose");
    if (dc) dc.setAttribute("aria-label", ui("close"));
    paintNav();
  }

  /* =======================================================================
     THEME
     ===================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = document.getElementById("themeIcon");
    if (icon) icon.innerHTML = state.theme === "dark" ? ICON.sun : ICON.moon;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", state.theme === "dark" ? "#14161A" : "#F5F1E8");
  }

  function wire() {
    document.getElementById("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      lsSet("theme", state.theme);          /* only an explicit choice is remembered */
      applyTheme();
    });
    /* no saved choice: keep following the OS setting live */
    if (mqDark && mqDark.addEventListener) {
      mqDark.addEventListener("change", function () {
        var v = lsGet("theme");
        if (v === "dark" || v === "light") return;
        state.theme = systemTheme();
        applyTheme();
      });
    }
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
    refreshChrome: refreshChrome,
    dialog: function () { return document.getElementById("dialog"); }
  };

  /* =======================================================================
     INIT
     ===================================================================== */
  /* ---------- live GitHub star count (public API, no auth) ---------- */
  /* Cached per tab session (sessionStorage) so each page view doesn't spend the
     unauthenticated 60 req/h budget; a failure is cached too. The count stays
     hidden unless we have a real, positive number — never a "–" or "0". */
  function ssGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function ssSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  function fetchStars() {
    var el = document.getElementById("ghStar");
    var countEl = document.getElementById("ghStarCount");
    if (!el || !countEl) return;
    var repo = el.getAttribute("data-repo");
    if (!repo) return;
    var key = "gh-stars:" + repo;
    function show(n) {
      if (typeof n !== "number" || !(n > 0)) { countEl.hidden = true; return; }
      countEl.textContent = n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n);
      countEl.hidden = false;
      el.classList.add("gh-star--counted");
    }
    var cached = ssGet(key);
    if (cached !== null) { show(cached === "x" ? null : Number(cached)); return; }
    if (!window.fetch) return;
    fetch("https://api.github.com/repos/" + repo)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        var n = j && typeof j.stargazers_count === "number" ? j.stargazers_count : null;
        ssSet(key, n > 0 ? String(n) : "x");
        show(n);
      })
      .catch(function () { ssSet(key, "x"); show(null); });
  }

  function init() {
    injectChrome();
    applyTheme();
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
