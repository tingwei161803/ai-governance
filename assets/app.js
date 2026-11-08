/* =========================================================================
   AI 治理百科 · app.js   (vanilla, no build)

   The PAGE-LEVEL LAYOUT ENGINE. shell.js has already injected the shared
   chrome and published window.LDW. This script:

     1. reads the current page from <body data-page="..."> (via LDW),
     2. picks a renderer from RENDERERS by that page's `layout`,
     3. paints it into <main id="page"> and wires its interactions.

   Layouts used by this site:
     hub (front page) | gallery | article | timeline | glossary | learn | table
   ========================================================================= */
(function () {
  "use strict";

  function boot() {
    // Wait until shell.js has injected the chrome (app bar, nav, footer, #dialog)
    // and published LDW. End-of-body scripts run while readyState === "loading",
    // so the shell defers its injection to DOMContentLoaded — we must wait for it.
    if (!window.LDW || !window.LDW.ready) {
      document.addEventListener("ldw:shell-ready", boot, { once: true });
      return;
    }
    var L = window.LDW;

    var t = L.t, esc = L.escapeHtml;
    var pageEl = document.getElementById("page");
    var teardowns = [];   // observers / listeners to disconnect before each repaint

    /* ---------- legal force: seal red (硬法) vs treaty blue (軟法) ---------- */
    var FORCE = {
      binding: { label: "硬法", title: "具法律拘束力" },
      soft:    { label: "軟法", title: "原則、標準或自願性框架，不具直接拘束力" },
      pending: { label: "草案", title: "審議中或未完成立法" },
      mixed:   { label: "混合", title: "行政命令與自願框架並行" }
    };
    function stamp(force) {
      var f = FORCE[force];
      if (!f) return "";
      return '<span class="stamp stamp--' + esc(force) + '" title="' + esc(f.title) + '">' + esc(f.label) + "</span>";
    }

    function findPage(slug) {
      return L.pages.filter(function (q) { return q.slug === slug; })[0] || null;
    }

    /* ---------- shared bits ---------- */
    function head(p) {
      var vol = p.volume
        ? '<p class="page-head__vol"><span class="page-head__no">' + esc(p.volume.no) + "</span>" + esc(p.volume.name) + "</p>"
        : "";
      var sub = t(p.subtitle)
        ? '<p class="page-head__sub">' + esc(t(p.subtitle)) + "</p>" : "";
      return '<header class="page-head">' + vol + "<h1>" + esc(t(p.title)) + "</h1>" + sub + "</header>";
    }

    /* how much each page holds, in the unit that fits it */
    function pageCount(q) {
      if (q.items) return q.items.length + " 則";
      if (q.sections) return q.sections.filter(function (s) { return s.id !== "references"; }).length + " 章";
      if (q.events) return q.events.length + " 則";
      if (q.terms) return q.terms.length + " 條";
      if (q.quiz) return q.quiz.length + " 題";
      if (q.rows) return q.rows.length + " 筆";
      return "";
    }

    function tlCats(p) {
      var m = {};
      (p.categories || []).forEach(function (c) { m[c.key] = c.zh; });
      return m;
    }

    /* =====================================================================
       LAYOUT REGISTRY
       ===================================================================== */
    var RENDERERS = {

      /* ---- hub: gazette front page ---- */
      hub: function (p) {
        var stat = {};
        (p.stats || []).forEach(function (s) { stat[t(s.label)] = s.value; });
        function n(label) { return '<b class="num">' + esc(String(stat[label] != null ? stat[label] : "")) + "</b>"; }

        var masthead =
          '<section class="masthead" aria-labelledby="mast-h">' +
            '<div class="masthead__meta">' +
              "<span>" + esc(t(p.dateline)) + "</span>" +
              '<span class="masthead__meta-mid">非官方教育整理</span>' +
              "<span>繁體中文・台灣</span>" +
            "</div>" +
            '<h1 class="masthead__title" id="mast-h">' + esc(t(L.meta.title)) + "</h1>" +
            '<p class="masthead__sub">' + esc(t(p.subtitle)) + "</p>" +
            '<p class="masthead__dateline">本卷收錄 ' + n("法規與標準") + " 部法規與標準、" +
              n("大事紀里程碑") + " 則大事紀、" + n("案例研究") + " 件案例、" +
              n("收錄術語") + " 條術語，引用 " + n("引用來源") + " 筆公開來源。</p>" +
          "</section>";

        var approaches = (p.approaches || []).map(function (a) {
          return '<li class="approach approach--' + esc(a.force) + '">' +
            '<a class="approach__link" href="' + esc(a.href) + '">' +
              '<span class="approach__mark" aria-hidden="true"></span>' +
              '<span class="approach__region">' + esc(a.region) + stamp(a.force) + "</span>" +
              '<span class="approach__name">' + esc(a.approach) + "</span>" +
              '<span class="approach__body">' + esc(a.body) + "</span>" +
            "</a></li>";
        }).join("");
        var spectrum = approaches ?
          '<section class="spectrum" aria-labelledby="spectrum-h">' +
            '<header class="sec-head"><h2 id="spectrum-h">四種監理路線</h2>' +
              "<p>各國管 AI 的方式，從具拘束力的專法，到只宣示原則的基本法。紅印代表硬法，藍環代表軟法。</p></header>" +
            '<div class="spectrum__axis" aria-hidden="true">' +
              '<span class="spectrum__end spectrum__end--hard">硬法・有罰則</span>' +
              '<span class="spectrum__end spectrum__end--soft">軟法・宣示原則</span>' +
            "</div>" +
            '<ol class="spectrum__list">' + approaches + "</ol>" +
          "</section>" : "";

        var vols = (p.volumes || []).map(function (v) {
          var entries = (v.pages || []).map(function (slug) {
            var q = findPage(slug); if (!q) return "";
            return '<li><a class="entry" href="' + esc(L.pageHref(q)) + '">' +
              '<span class="entry__line"><span class="entry__title">' + esc(t(q.title)) + "</span>" +
              '<span class="entry__leader" aria-hidden="true"></span>' +
              '<span class="entry__count">' + esc(pageCount(q)) + "</span></span>" +
              '<span class="entry__sum">' + esc(t(q.subtitle)) + "</span></a></li>";
          }).join("");
          return '<div class="vol"><h3 class="vol__head"><span class="vol__no">' + esc(v.no) + "</span>" +
            esc(v.name) + '</h3><ol class="vol__list">' + entries + "</ol></div>";
        }).join("");

        var tl = findPage("timeline");
        var cats = tl ? tlCats(tl) : {};
        var recent = tl ? (tl.events || []).slice(-6).reverse().map(function (ev) {
          return '<li class="recent__item recent__item--' + esc(ev.cat || "") + '">' +
            '<time class="recent__date" datetime="' + esc(ev.date) + '">' + esc(ev.date) + "</time>" +
            '<span class="recent__cat">' + esc(cats[ev.cat] || "") + "</span>" +
            '<span class="recent__title">' + esc(t(ev.title)) + "</span></li>";
        }).join("") : "";

        return masthead + spectrum +
          '<div class="front">' +
            '<section class="codex" aria-labelledby="codex-h">' +
              '<header class="sec-head"><h2 id="codex-h">本卷目錄</h2></header>' + vols +
            "</section>" +
            (recent ? '<aside class="recent" aria-labelledby="recent-h">' +
              '<header class="sec-head"><h2 id="recent-h">最新紀事</h2></header>' +
              '<ol class="recent__list">' + recent + "</ol>" +
              '<a class="more-link" href="timeline.html">看完整大事紀（2016–2027）</a>' +
            "</aside>" : "") +
          "</div>";
      },

      /* ---- gallery: search + chips + entry list + dialog ---- */
      gallery: function (p) {
        var cats = (p.categories || []).map(function (c) {
          return '<button class="chip" type="button" data-cat="' + esc(c.key) + '">' +
            esc(c[L.state.lang] || c.zh || c.en) + "</button>";
        }).join("");
        var hasForce = (p.items || []).some(function (it) { return it.force; });
        var legend = hasForce ?
          '<p class="force-legend">' + stamp("binding") + "具法律拘束力" + stamp("soft") + "原則或自願性框架" +
            ((p.items || []).some(function (it) { return it.force === "pending"; }) ? stamp("pending") + "審議中或未完成立法" : "") +
          "</p>" : "";
        return head(p) + legend +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" placeholder="搜尋標題、摘要或標籤…" aria-label="搜尋" />' +
            (cats ? '<div class="chips"><button class="chip chip--active" type="button" data-cat="">全部</button>' + cats + "</div>" : "") +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<div class="entries" id="grid"></div>';
      },

      /* ---- article: marginal TOC + serif prose + reading progress ---- */
      article: function (p) {
        var CHRONO = /^(\d{4}\s?年(?:\s?\d{1,2}\s?月)?(?:\s?\d{1,2}\s?日)?)[：:]\s*(.+)$/;
        var num = 0;
        var toc = (p.sections || []).map(function (s) {
          var isRef = s.id === "references";
          if (!isRef) num++;
          return '<a class="toc-link" href="#' + esc(s.id) + '" data-toc="' + esc(s.id) + '">' +
            '<span class="toc-link__no">' + (isRef ? "附" : "§" + num) + "</span>" + esc(t(s.heading)) + "</a>";
        }).join("");
        num = 0;
        var body = (p.sections || []).map(function (s) {
          var isRef = s.id === "references";
          if (!isRef) num++;
          var blocks = (s.blocks || []).map(function (b) {
            if (b.type === "h3") return "<h3>" + esc(t(b.text)) + "</h3>";
            if (b.type === "quote") return '<blockquote class="note"><span class="note__label" aria-label="按語">按</span><p>' + esc(t(b.text)) + "</p></blockquote>";
            if (b.type === "code") return "<pre><code>" + esc(t(b.text)) + "</code></pre>";
            if (b.type === "ul") {
              var arr = (b.items && (b.items[L.state.lang] || b.items.en || b.items.zh)) || [];
              /* a list where every line starts with a date becomes a chronology */
              if (arr.length > 2 && arr.every(function (li) { return CHRONO.test(li); })) {
                return '<ol class="chrono">' + arr.map(function (li) {
                  var m = li.match(CHRONO);
                  return '<li><span class="chrono__date">' + esc(m[1]) + '</span><span class="chrono__text">' + esc(m[2]) + "</span></li>";
                }).join("") + "</ol>";
              }
              return "<ul>" + arr.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
            }
            if (b.type === "links") {
              var ls = b.items || [];
              return '<ul class="ref-list">' + ls.map(function (l) {
                return '<li><a class="ref-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
                  esc(l.title || l.url) + "</a></li>";
              }).join("") + "</ul>";
            }
            return "<p>" + esc(t(b.text)) + "</p>";
          }).join("");
          return '<section class="article-section' + (isRef ? " article-section--refs" : "") + '" id="' + esc(s.id) + '" ' +
            'aria-labelledby="' + esc(s.id) + '-h"><h2 id="' + esc(s.id) + '-h">' +
            '<span class="sec-no" aria-hidden="true">' + (isRef ? "附錄" : "§ " + num) + "</span>" +
            esc(t(s.heading)) + "</h2>" + blocks + "</section>";
        }).join("");
        return '<div class="reading-progress" id="readingProgress" aria-hidden="true"></div>' +
          head(p) +
          '<div class="article-layout">' +
            '<nav class="toc" aria-label="本篇目次"><p class="toc__head">本篇目次</p><div class="toc__inner">' + toc + "</div></nav>" +
            '<div class="article-body prose">' + body + "</div>" +
          "</div>";
      },

      /* ---- timeline: year-grouped register with a density strip ---- */
      timeline: function (p) {
        var cats = tlCats(p);
        var events = p.events || [];
        var years = [], byYear = {};
        events.forEach(function (ev, i) {
          var y = String(ev.date).slice(0, 4);
          if (!byYear[y]) { byYear[y] = []; years.push(y); }
          byYear[y].push({ ev: ev, i: i });
        });
        var maxN = Math.max.apply(null, years.map(function (y) { return byYear[y].length; }).concat([1]));

        /* density strip: one square per event, stacked per year */
        var hist = years.map(function (y) {
          var sq = byYear[y].map(function (o) {
            return '<span class="sq sq--' + esc(o.ev.cat || "") + (o.ev.milestone ? " sq--key" : "") + '"></span>';
          }).join("");
          return '<a class="hist__col" href="#y' + y + '" aria-label="' + y + " 年，" + byYear[y].length + ' 則">' +
            '<span class="hist__n">' + byYear[y].length + "</span>" +
            '<span class="hist__stack" style="--rows:' + maxN + '">' + sq + "</span>" +
            '<span class="hist__year"><span class="hist__cent">' + y.slice(0, 2) + "</span>" + y.slice(2) + "</span></a>";
        }).join("");

        var counts = {};
        events.forEach(function (ev) { counts[ev.cat] = (counts[ev.cat] || 0) + 1; });
        var nKey = events.filter(function (ev) { return ev.milestone; }).length;
        var chips = '<button class="chip chip--active" type="button" data-cat="">全部 <span class="chip__n">' + events.length + "</span></button>" +
          (p.categories || []).map(function (c) {
            return '<button class="chip chip--cat" type="button" data-cat="' + esc(c.key) + '">' +
              '<span class="sw sw--' + esc(c.key) + '" aria-hidden="true"></span>' + esc(c.zh) +
              ' <span class="chip__n">' + (counts[c.key] || 0) + "</span></button>";
          }).join("") +
          '<button class="chip" type="button" data-cat="milestone"><span class="sw sw--key" aria-hidden="true"></span>里程碑 <span class="chip__n">' + nKey + "</span></button>";

        var sections = years.map(function (y) {
          var rows = byYear[y].map(function (o) {
            var ev = o.ev;
            var md = String(ev.date).slice(5) || "";
            var src = ev.url ? '<a class="tl-src" href="' + esc(ev.url) + '" target="_blank" rel="noopener">來源</a>' : "";
            return '<li class="tl-ev tl-ev--' + esc(ev.cat || "") + (ev.milestone ? " tl-ev--key" : "") + '" ' +
                'data-cat="' + esc(ev.cat || "") + '"' + (ev.milestone ? " data-key" : "") + ' id="ev-' + o.i + '">' +
              '<div class="tl-ev__main">' +
                '<p class="tl-ev__meta"><time class="tl-ev__date" datetime="' + esc(ev.date) + '">' + esc(md) + "</time>" +
                  '<span class="tl-ev__cat">' + esc(cats[ev.cat] || "") + "</span>" +
                  (ev.milestone ? '<span class="tl-ev__key">里程碑</span>' : "") + "</p>" +
                '<h3 class="tl-ev__title">' + esc(t(ev.title)) + "</h3>" +
                '<p class="tl-ev__body">' + esc(t(ev.body)) + src + "</p>" +
              "</div></li>";
          }).join("");
          return '<section class="tl-year" id="y' + y + '" aria-labelledby="y' + y + '-h">' +
            '<h2 class="tl-year__head" id="y' + y + '-h"><span class="tl-year__num">' + y + "</span>" +
              '<span class="tl-year__n">' + byYear[y].length + " 則</span></h2>" +
            '<ol class="tl-list">' + rows + "</ol></section>";
        }).join("");

        return head(p) +
          '<div class="tl-overview">' +
            '<nav class="hist" aria-label="依年份跳至">' + hist + "</nav>" +
            '<div class="chips tl-filter" role="group" aria-label="依性質篩選">' + chips + "</div>" +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<div class="tl-years" id="tlYears">' + sections + "</div>";
      },

      /* ---- table: searchable + sortable ---- */
      table: function (p) {
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" placeholder="搜尋來源標題或網址…" aria-label="搜尋" />' +
            '<div class="chips" id="tableChips"></div>' +
          "</div>" +
          '<div class="table-wrap"><table class="data-table" id="dataTable"><thead></thead><tbody></tbody></table></div>';
      },

      /* ---- glossary: searchable + category-filtered term list ---- */
      glossary: function (p) {
        var cats = (p.categories || []).map(function (c) {
          return '<button class="chip" type="button" data-cat="' + esc(c.key) + '">' +
            esc(c[L.state.lang] || c.zh || c.en) + "</button>";
        }).join("");
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="搜尋術語…" aria-label="搜尋術語" />' +
            '<div class="chips"><button class="chip chip--active" type="button" data-cat="">全部</button>' + cats + "</div>" +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<div class="glossary-list" id="glossaryList"></div>';
      },

      /* ---- learn: quiz + flashcards under a segmented toggle ---- */
      learn: function (p) {
        return head(p) +
          '<div class="seg" role="tablist">' +
            '<button class="seg__btn seg__btn--active" type="button" data-view="quiz">隨堂測驗</button>' +
            '<button class="seg__btn" type="button" data-view="cards">字卡複習</button>' +
          "</div>" +
          '<div id="learnView"></div>';
      }
    };

    /* =====================================================================
       WIRING (interactions) — keyed by layout, run after innerHTML is set
       ===================================================================== */
    var WIRE = {
      gallery: function (p) {
        var grid = document.getElementById("grid");
        var search = document.getElementById("search");
        var count = document.getElementById("resultCount");
        var chips = [].slice.call(pageEl.querySelectorAll(".chip"));
        var catMap = {};
        (p.categories || []).forEach(function (c) { catMap[c.key] = c[L.state.lang] || c.zh || c.en; });
        var st = { q: "", cat: "" };

        function matches(item) {
          if (st.cat && item.category !== st.cat) return false;
          if (!st.q) return true;
          var hay = (t(item.title) + " " + t(item.summary) + " " + (item.tags || []).join(" ")).toLowerCase();
          return hay.indexOf(st.q) !== -1;
        }
        function paint() {
          var rows = (p.items || []).filter(matches);
          grid.innerHTML = rows.map(function (item) {
            var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
            return '<article class="card' + (item.force ? " card--" + esc(item.force) : "") + '" tabindex="0" role="button" ' +
                'data-item data-slug="' + esc(item.slug) + '" aria-label="' + esc(t(item.title)) + '">' +
              '<p class="card__meta">' + stamp(item.force) + '<span class="card__cat">' + esc(catMap[item.category] || "") + "</span></p>" +
              '<h3 class="card__title">' + esc(t(item.title)) + "</h3>" +
              '<p class="card__summary">' + esc(t(item.summary)) + "</p>" +
              (tags ? '<p class="card__tags">' + tags + "</p>" : "") + "</article>";
          }).join("");
          if (count) count.textContent = rows.length === (p.items || []).length ? "共 " + rows.length + " 則" : rows.length + " 筆結果";
          wireCards();
        }
        function wireCards() {
          [].forEach.call(grid.querySelectorAll(".card[data-slug]"), function (card) {
            var slug = card.dataset.slug;
            card.addEventListener("click", function () { openItem(slug); });
            card.addEventListener("keydown", function (e) {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openItem(slug); }
            });
          });
        }
        function findItem(slug) {
          return (p.items || []).filter(function (it) { return it.slug === slug; })[0] || null;
        }
        function openItem(slug) {
          var item = findItem(slug); if (!item) return;
          var dlg = L.dialog(), body = document.getElementById("dialogBody");
          var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
          var ov = t(item.overview) || t(item.summary) || "";
          var paras = String(ov).split(/\n+/).filter(Boolean)
            .map(function (para) { return "<p>" + esc(para) + "</p>"; }).join("");
          var srcArr = (item.sources && item.sources.length) ? item.sources
            : (item.url ? [{ url: item.url }] : []);
          var refs = srcArr.length ? '<div class="dialog__src"><h3 class="ref-head">參考來源</h3>' +
            '<ul class="ref-list">' + srcArr.map(function (s) {
              return '<li><a class="ref-link" href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
                esc(s.title || s.url) + "</a></li>";
            }).join("") + "</ul></div>" : "";
          body.innerHTML =
            '<p class="card__meta">' + stamp(item.force) + '<span class="card__cat">' + esc(catMap[item.category] || "") + "</span></p>" +
            '<h2 id="dialogTitle">' + esc(t(item.title)) + "</h2>" +
            (tags ? '<p class="card__tags">' + tags + "</p>" : "") + paras + refs;
          if (!dlg.open) dlg.showModal();
          if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
        }
        function syncHash() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) openItem(slug);
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); });
            chip.classList.add("chip--active");
            st.cat = chip.dataset.cat || "";
            paint();
          });
        });
        /* closing the dialog clears the #slug so the URL returns to clean state
           and a later deep link to the SAME slug fires hashchange again */
        var dlg = L.dialog();
        function onClose() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) history.replaceState(null, "", location.pathname + location.search);
        }
        dlg.addEventListener("close", onClose);
        var onHash = function () { syncHash(); };
        window.addEventListener("hashchange", onHash);
        teardowns.push(function () {
          window.removeEventListener("hashchange", onHash);
          dlg.removeEventListener("close", onClose);
        });
        paint();
        syncHash();
      },

      article: function () {
        var prog = document.getElementById("readingProgress");
        var links = [].slice.call(pageEl.querySelectorAll(".toc-link"));
        var secs = [].slice.call(pageEl.querySelectorAll(".article-section"));
        function onScroll() {
          var h = document.documentElement;
          var max = h.scrollHeight - h.clientHeight;
          if (prog) prog.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        teardowns.push(function () { window.removeEventListener("scroll", onScroll); });
        if ("IntersectionObserver" in window) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (!en.isIntersecting) return;
              links.forEach(function (a) {
                var on = a.dataset.toc === en.target.id;
                a.classList.toggle("toc-link--active", on);
              });
            });
          }, { rootMargin: "-30% 0px -60% 0px" });
          secs.forEach(function (s) { io.observe(s); });
          teardowns.push(function () { io.disconnect(); });
        }
      },

      timeline: function () {
        var chips = [].slice.call(pageEl.querySelectorAll(".tl-filter .chip"));
        var evs = [].slice.call(pageEl.querySelectorAll(".tl-ev"));
        var years = [].slice.call(pageEl.querySelectorAll(".tl-year"));
        var count = document.getElementById("resultCount");
        function apply(cat) {
          var shown = 0;
          evs.forEach(function (li) {
            var hit = !cat || (cat === "milestone" ? li.hasAttribute("data-key") : li.dataset.cat === cat);
            li.hidden = !hit;
            if (hit) shown++;
          });
          years.forEach(function (sec) {
            var n = sec.querySelectorAll(".tl-ev:not([hidden])").length;
            sec.hidden = n === 0;
            var lab = sec.querySelector(".tl-year__n");
            if (lab) lab.textContent = n + " 則";
          });
          pageEl.querySelector(".hist").setAttribute("data-filter", cat || "");
          if (count) count.textContent = cat ? "篩選後 " + shown + " 則" : "";
        }
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); c.setAttribute("aria-pressed", "false"); });
            chip.classList.add("chip--active");
            chip.setAttribute("aria-pressed", "true");
            apply(chip.dataset.cat || "");
          });
        });
      },

      table: function (p) {
        var table = document.getElementById("dataTable");
        var thead = table.querySelector("thead"), tbody = table.querySelector("tbody");
        var search = document.getElementById("search");
        var chipsBox = document.getElementById("tableChips");
        var cols = p.columns || [];
        var st = { q: "", filter: "", sortKey: null, dir: 1 };
        var filterCol = cols.filter(function (c) { return c.filter; })[0];

        function cellText(row, c) { var v = row[c.key]; return typeof v === "object" ? t(v) : String(v == null ? "" : v); }
        function rowMatches(row) {
          if (filterCol && st.filter && cellText(row, filterCol) !== st.filter) return false;
          if (!st.q) return true;
          return cols.some(function (c) { return cellText(row, c).toLowerCase().indexOf(st.q) !== -1; });
        }
        function paintHead() {
          thead.innerHTML = "<tr>" + cols.map(function (c) {
            var arrow = st.sortKey === c.key ? (st.dir > 0 ? " ▲" : " ▼") : "";
            return '<th class="th-sort th--' + esc(c.type || "text") + '" data-key="' + esc(c.key) + '" role="button" tabindex="0" aria-label="依' +
              esc(t(c.label)) + '排序">' + esc(t(c.label)) + esc(arrow) + "</th>";
          }).join("") + "</tr>";
          [].forEach.call(thead.querySelectorAll(".th-sort"), function (th) {
            th.addEventListener("click", function () { sortBy(th.dataset.key); });
            th.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sortBy(th.dataset.key); } });
          });
        }
        function sortBy(key) {
          if (st.sortKey === key) st.dir = -st.dir; else { st.sortKey = key; st.dir = 1; }
          paint();
        }
        function paint() {
          paintHead();
          var col = cols.filter(function (c) { return c.key === st.sortKey; })[0];
          var rows = (p.rows || []).filter(rowMatches).slice();
          if (col) {
            rows.sort(function (a, b) {
              var va = a[col.key], vb = b[col.key];
              if (col.type === "num") return (Number(va) - Number(vb)) * st.dir;
              return String(typeof va === "object" ? t(va) : va).localeCompare(String(typeof vb === "object" ? t(vb) : vb)) * st.dir;
            });
          }
          tbody.innerHTML = rows.map(function (row) {
            return "<tr data-item>" + cols.map(function (c) {
              if (c.type === "link") {
                var u = row[c.key];
                return '<td class="td--link"><a class="row-link" href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(u) + "</a></td>";
              }
              return '<td class="td--' + esc(c.type || "text") + '">' + esc(cellText(row, c)) + "</td>";
            }).join("") + "</tr>";
          }).join("");
        }
        if (filterCol) {
          var vals = [];
          (p.rows || []).forEach(function (row) { var v = cellText(row, filterCol); if (vals.indexOf(v) === -1) vals.push(v); });
          chipsBox.innerHTML = '<button class="chip chip--active" type="button" data-v="">全部</button>' +
            vals.map(function (v) { return '<button class="chip" type="button" data-v="' + esc(v) + '">' + esc(v) + "</button>"; }).join("");
          [].forEach.call(chipsBox.querySelectorAll(".chip"), function (chip) {
            chip.addEventListener("click", function () {
              [].forEach.call(chipsBox.querySelectorAll(".chip"), function (c) { c.classList.remove("chip--active"); });
              chip.classList.add("chip--active");
              st.filter = chip.dataset.v || "";
              paint();
            });
          });
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        paint();
      },

      glossary: function (p) {
        var list = document.getElementById("glossaryList");
        var search = document.getElementById("search");
        var count = document.getElementById("resultCount");
        var chips = [].slice.call(pageEl.querySelectorAll(".chip"));
        var catMap = {};
        (p.categories || []).forEach(function (c) { catMap[c.key] = c[L.state.lang] || c.zh; });
        var st = { q: "", cat: "" };
        function matches(it) {
          if (st.cat && it.cat !== st.cat) return false;
          if (!st.q) return true;
          return (t(it.term) + " " + t(it.def)).toLowerCase().indexOf(st.q) !== -1;
        }
        function paint() {
          var rows = (p.terms || []).filter(matches);
          list.innerHTML = rows.map(function (it) {
            return '<div class="gl-item" data-item>' +
              '<div class="gl-term">' + esc(t(it.term)) +
                '<span class="gl-cat gl-cat--' + esc(it.cat) + '">' + esc(catMap[it.cat] || it.cat) + "</span></div>" +
              '<div class="gl-def">' + esc(t(it.def)) + "</div></div>";
          }).join("");
          if (count) count.textContent = rows.length + " 個術語";
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); });
            chip.classList.add("chip--active");
            st.cat = chip.dataset.cat || "";
            paint();
          });
        });
        paint();
      },

      learn: function (p) {
        var view = document.getElementById("learnView");
        var btns = [].slice.call(pageEl.querySelectorAll(".seg__btn"));
        function quizView() {
          var score = { got: 0, done: 0 };
          var total = (p.quiz || []).length;
          view.innerHTML = '<p class="quiz-score" id="quizScore"></p><div class="quiz">' +
            (p.quiz || []).map(function (q, qi) {
              var opts = (q.options || []).map(function (o, oi) {
                return '<button class="quiz-opt" type="button" data-o="' + oi + '">' +
                  '<span class="quiz-opt__key">' + "ABCDEFGH".charAt(oi) + "</span>" + esc(t(o)) + "</button>";
              }).join("");
              return '<div class="quiz-card" data-item data-answer="' + esc(String(q.answer)) + '">' +
                '<p class="quiz-q"><span class="quiz-n">' + (qi + 1) + "</span>" + esc(t(q.q)) + "</p>" +
                '<div class="quiz-opts">' + opts + "</div>" +
                '<div class="quiz-explain" hidden>' + esc(t(q.explain)) + "</div></div>";
            }).join("") + "</div>";
          var scoreEl = document.getElementById("quizScore");
          function updateScore() { scoreEl.textContent = "答對 " + score.got + " / 已作答 " + score.done + "（共 " + total + " 題）"; }
          updateScore();
          [].forEach.call(view.querySelectorAll(".quiz-opt"), function (btn) {
            btn.addEventListener("click", function () {
              var card = btn.parentNode.parentNode;
              if (card.classList.contains("answered")) return;
              var ans = parseInt(card.dataset.answer, 10);
              var chosen = parseInt(btn.dataset.o, 10);
              card.classList.add("answered");
              [].forEach.call(card.querySelectorAll(".quiz-opt"), function (b, i) {
                if (i === ans) b.classList.add("quiz-opt--correct");
                else if (i === chosen) b.classList.add("quiz-opt--wrong");
                b.disabled = true;
              });
              card.querySelector(".quiz-explain").hidden = false;
              score.done++; if (chosen === ans) score.got++;
              updateScore();
            });
          });
        }
        function cardsView() {
          view.innerHTML = '<div class="flashgrid">' + (p.cards || []).map(function (c) {
            return '<div class="flashcard" tabindex="0" role="button" aria-label="翻卡顯示解答">' +
              '<div class="flashcard__inner">' +
                '<div class="flashcard__face flashcard__front">' + esc(t(c.front)) + "</div>" +
                '<div class="flashcard__face flashcard__back">' + esc(t(c.back)) + "</div>" +
              "</div></div>";
          }).join("") + "</div>";
          [].forEach.call(view.querySelectorAll(".flashcard"), function (fc) {
            function flip() { fc.classList.toggle("flipped"); }
            fc.addEventListener("click", flip);
            fc.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
          });
        }
        btns.forEach(function (b) {
          b.addEventListener("click", function () {
            btns.forEach(function (x) { x.classList.remove("seg__btn--active"); });
            b.classList.add("seg__btn--active");
            if (b.dataset.view === "cards") cardsView(); else quizView();
          });
        });
        quizView();
      }
    };

    /* =====================================================================
       RENDER the current page
       ===================================================================== */
    function render() {
      teardowns.forEach(function (fn) { try { fn(); } catch (e) {} });
      teardowns = [];
      var p = L.currentPage();
      if (!p) { pageEl.innerHTML = '<p class="empty">找不到這一頁的資料。</p>'; return; }
      var fn = RENDERERS[p.layout] || RENDERERS.gallery;
      pageEl.className = "page page--" + p.layout;
      pageEl.innerHTML = fn(p);
      var w = WIRE[p.layout];
      if (w) w(p);
    }

    render();
  }

  boot();
})();
