#!/usr/bin/env python3
"""Assemble every chunk + derived dataset into data/data.js.

Emits the two globals the multi-page shell reads:
    window.SITE_META  = { title, subtitle, footer }
    window.SITE_PAGES = [ { slug, layout, icon, title, subtitle, ...layoutData } ]

The site is single-language (Traditional Chinese), so text values are plain
strings (the shell's t() helper returns plain strings as-is). Only `categories`
stay {key, zh, en} because the gallery/glossary renderers read c[lang].

Run with uv:  uv run python data/_assemble.py
"""
from __future__ import annotations

import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
CHUNKS = os.path.join(HERE, "chunks")
DERIVED = os.path.join(HERE, "derived")
OUT = os.path.join(HERE, "data.js")


def load(path: str):
    return json.load(open(path, encoding="utf-8"))


def chunk(name: str):
    return load(os.path.join(CHUNKS, name + ".json"))


def chunk_opt(name: str):
    p = os.path.join(CHUNKS, name + ".json")
    return load(p) if os.path.exists(p) else {}


def attach_sources(items: list, smap: dict) -> list:
    """Attach a `sources` list ([{title,url}]) to each gallery item by slug."""
    for it in items:
        srcs = smap.get(it["slug"])
        if srcs:
            it["sources"] = srcs
    return items


def sources_for(prefix: str) -> list:
    """All de-duplicated sources whose research file starts with `prefix`."""
    seen, out = set(), []
    for s in load(os.path.join(DERIVED, "sources.json")):
        if s.get("file", "").startswith(prefix) and s["url"] not in seen:
            seen.add(s["url"])
            out.append({"title": s["title"], "url": s["url"]})
    return out


def ref_section(prefix: str) -> dict:
    """A '參考來源' appendix section for an article, built from its file's sources."""
    links = sources_for(prefix)
    return {
        "id": "references", "heading": "參考來源",
        "blocks": [
            {"type": "p", "text": f"本頁內容彙整自下列公開來源（{len(links)} 筆）；點擊可前往原始出處。"},
            {"type": "links", "items": links},
        ],
    }


# --- glossary filter categories (page-level) ------------------------------ #
GLOSSARY_CATS = [
    {"key": "law", "zh": "法規政策", "en": "Law & Policy"},
    {"key": "standard", "zh": "標準框架", "en": "Standards"},
    {"key": "org", "zh": "機構組織", "en": "Organisations"},
    {"key": "ethics", "zh": "倫理原則", "en": "Ethics"},
    {"key": "tech", "zh": "技術概念", "en": "Technical"},
    {"key": "concept", "zh": "治理概念", "en": "Concepts"},
    {"key": "ipbiz", "zh": "智財商業", "en": "IP & Business"},
]

# --- timeline event categories (seal red = binding, treaty blue = soft) ---- #
TIMELINE_CATS = [
    {"key": "law", "zh": "法律・命令"},
    {"key": "soft", "zh": "標準・政策"},
    {"key": "forum", "zh": "峰會・機構"},
    {"key": "court", "zh": "訴訟・執法"},
    {"key": "industry", "zh": "產業・研究"},
]

# --- the site is organised like a code of law: 編 (volumes) group the pages - #
VOLUMES = [
    {"no": "第一編", "name": "規範與標準", "pages": ["regulation", "standards"]},
    {"no": "第二編", "name": "原則與實務", "pages": ["ethics", "corporate", "ip"]},
    {"no": "第三編", "name": "在地與地緣", "pages": ["taiwan", "geopolitics"]},
    {"no": "第四編", "name": "判例與紀事", "pages": ["cases", "timeline"]},
    {"no": "附錄", "name": "工具與出處", "pages": ["glossary", "learn", "sources"]},
]

# --- home: the four regulatory approaches, from binding to soft law ------- #
APPROACHES = [
    {
        "region": "歐盟", "approach": "立法導向", "force": "binding",
        "body": "《AI 法》依風險分四級，違反禁止規定最高罰全球年營收 7%；2024 年生效，2026 年高風險義務全面適用。",
        "href": "regulation.html#eu-ai-act-risk-tiers",
    },
    {
        "region": "中國", "approach": "分類規範", "force": "binding",
        "body": "演算法推薦、深度合成、生成式 AI、內容標識各訂專門規章，搭配演算法備案與標識義務。",
        "href": "regulation.html#cn-generative-ai",
    },
    {
        "region": "美國", "approach": "行政命令", "force": "mixed",
        "body": "聯邦層級靠總統行政命令與 NIST 自願框架，政權更替即翻轉；科羅拉多、加州等州法補位。",
        "href": "regulation.html#us-eo-14179",
    },
    {
        "region": "台灣・日本・英國", "approach": "原則導向", "force": "soft",
        "body": "以基本法或白皮書宣示原則、不直接設罰則，細則交由各目的事業主管機關訂定。",
        "href": "taiwan.html#ai-basic-act",
    },
]

# --- map research file -> a topic label for the sources table ------------- #
FILE_TOPIC = {
    "01-global-regulation.md": "全球法規",
    "02-international-standards.md": "國際標準",
    "03-ethics-safety.md": "倫理與安全",
    "04-corporate-governance.md": "企業治理",
    "05-ip-governance.md": "智財治理",
    "06-taiwan.md": "台灣治理",
    "07-geopolitics-timeline-cases-glossary.md": "地緣政治與案例",
}


def build_sources_page() -> dict:
    rows = []
    for s in load(os.path.join(DERIVED, "sources.json")):
        rows.append({
            "title": s["title"],
            "topic": FILE_TOPIC.get(s.get("file", ""), "其他"),
            "url": s["url"],
        })
    return {
        "columns": [
            {"key": "title", "label": "來源標題", "type": "text"},
            {"key": "topic", "label": "領域", "type": "tag", "filter": True},
            {"key": "url", "label": "連結", "type": "link"},
        ],
        "rows": rows,
    }


def main() -> None:
    reg = chunk("regulation")
    std = chunk("standards")
    ethics = chunk("ethics")
    corp = chunk("corporate")
    ip = chunk("ip")
    tw = chunk("taiwan")
    geo = chunk("geopolitics")
    cases = chunk("cases")
    timeline = chunk("timeline")          # list of {date,title,body,url}
    glossary = chunk("glossary")          # list of {term,def,cat}
    learn = chunk("learn")                # {quiz, cards}
    sources = build_sources_page()

    # ---- attach per-item reference links to gallery cards ----
    attach_sources(reg["items"], chunk_opt("regulation_sources"))
    attach_sources(std["items"], chunk_opt("standards_sources"))
    attach_sources(cases["items"], chunk_opt("cases_sources"))

    # ---- append a '參考來源' appendix to each long-form article ----
    ethics["sections"].append(ref_section("03"))
    corp["sections"].append(ref_section("04"))
    ip["sections"].append(ref_section("05"))
    tw["sections"].append(ref_section("06"))
    geo["sections"].append(ref_section("07"))

    # ---- hub stats (animated counters) ----
    n_frameworks = len(reg["items"]) + len(std["items"])
    stats = [
        {"value": 7, "label": "治理面向"},
        {"value": n_frameworks, "label": "法規與標準"},
        {"value": len(glossary), "label": "收錄術語"},
        {"value": len(timeline), "label": "大事紀里程碑"},
        {"value": len(cases["items"]), "label": "案例研究"},
        {"value": len(sources["rows"]), "label": "引用來源"},
    ]

    SITE_META = {
        "title": "AI 治理百科",
        "subtitle": "從全球法規、國際標準、倫理安全到台灣在地——人工智慧治理的全景地圖。",
        "footer": "AI 治理百科 · 資料彙整自公開官方文件與權威來源，僅供教育與研究參考；內容截至 2026 年 6 月。純靜態網站，無建置流程。",
    }

    pages = [
        {
            "slug": "home", "layout": "hub", "icon": "travel_explore",
            "title": "首頁",
            "subtitle": "全球人工智慧治理的法規、標準、判例與台灣在地發展，彙編成一部可查閱的中文百科。",
            "dateline": "內容截至 2026 年 6 月",
            "stats": stats, "approaches": APPROACHES, "volumes": VOLUMES,
        },
        {
            "slug": "regulation", "layout": "gallery", "icon": "account_balance",
            "title": "全球法規",
            "subtitle": reg.get("subtitle", ""),
            "categories": reg["categories"], "items": reg["items"],
        },
        {
            "slug": "standards", "layout": "gallery", "icon": "public",
            "title": "國際標準",
            "subtitle": std.get("subtitle", ""),
            "categories": std["categories"], "items": std["items"],
        },
        {
            "slug": "ethics", "layout": "article", "icon": "balance",
            "title": "倫理與安全",
            "subtitle": ethics.get("subtitle", ""), "sections": ethics["sections"],
        },
        {
            "slug": "corporate", "layout": "article", "icon": "corporate_fare",
            "title": "企業治理",
            "subtitle": corp.get("subtitle", ""), "sections": corp["sections"],
        },
        {
            "slug": "ip", "layout": "article", "icon": "copyright",
            "title": "智財治理",
            "subtitle": ip.get("subtitle", ""), "sections": ip["sections"],
        },
        {
            "slug": "taiwan", "layout": "article", "icon": "flag",
            "title": "台灣治理",
            "subtitle": tw.get("subtitle", ""), "sections": tw["sections"],
        },
        {
            "slug": "geopolitics", "layout": "article", "icon": "language",
            "title": "地緣政治",
            "subtitle": geo.get("subtitle", ""), "sections": geo["sections"],
        },
        {
            "slug": "cases", "layout": "gallery", "icon": "gavel",
            "title": "案例研究",
            "subtitle": cases.get("subtitle", ""),
            "categories": cases["categories"], "items": cases["items"],
        },
        {
            "slug": "timeline", "layout": "timeline", "icon": "timeline",
            "title": "大事紀",
            "subtitle": "AI 治理重要里程碑（2016–2027），含法規、標準、峰會、產業與訴訟。",
            "categories": TIMELINE_CATS, "events": timeline,
        },
        {
            "slug": "glossary", "layout": "glossary", "icon": "menu_book",
            "title": "術語表",
            "subtitle": f"{len(glossary)} 個 AI 治理關鍵術語，可搜尋、可依類別篩選；中英對照。",
            "categories": GLOSSARY_CATS, "terms": glossary,
        },
        {
            "slug": "learn", "layout": "learn", "icon": "school",
            "title": "自我測驗",
            "subtitle": "用隨堂測驗檢驗理解，用字卡複習關鍵概念。作答與分數只活在本次瀏覽。",
            "quiz": learn["quiz"], "cards": learn["cards"],
        },
        {
            "slug": "sources", "layout": "table", "icon": "link",
            "title": "資料來源",
            "subtitle": f"{len(sources['rows'])} 筆引用來源，可搜尋、可依領域篩選。資料彙整自官方與權威網站。",
            "columns": sources["columns"], "rows": sources["rows"],
        },
    ]

    # ---- tag every content page with the 編 (volume) it belongs to ----
    for vol in VOLUMES:
        for p in pages:
            if p["slug"] in vol["pages"]:
                p["volume"] = {"no": vol["no"], "name": vol["name"]}

    def dump(obj):
        return json.dumps(obj, ensure_ascii=False, indent=2)

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("/* Generated by data/_assemble.py — edit the chunks, not this file. */\n")
        f.write("window.SITE_META = " + dump(SITE_META) + ";\n\n")
        f.write("window.SITE_PAGES = " + dump(pages) + ";\n")

    # report
    print(f"Wrote {OUT}")
    print(f"  pages: {len(pages)}")
    for p in pages:
        extra = ""
        if "items" in p: extra = f"items={len(p['items'])}"
        elif "sections" in p: extra = f"sections={len(p['sections'])}"
        elif "events" in p: extra = f"events={len(p['events'])}"
        elif "terms" in p: extra = f"terms={len(p['terms'])}"
        elif "rows" in p: extra = f"rows={len(p['rows'])}"
        elif "quiz" in p: extra = f"quiz={len(p['quiz'])} cards={len(p['cards'])}"
        elif "stats" in p: extra = f"stats={len(p['stats'])}"
        print(f"    {p['slug']:12s} {p['layout']:10s} {extra}")
    print(f"  data.js size: {os.path.getsize(OUT)//1024} KB")


if __name__ == "__main__":
    main()
