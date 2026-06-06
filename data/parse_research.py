#!/usr/bin/env python3
"""Parse the 7 research markdown files and extract the three structured
sections that are written in a uniform, pipe-delimited shape:

    ## 時間軸事件   ->  `YYYY[-MM[-DD]] | 標題 | 說明 | 來源URL`
    ## 術語         ->  `術語(English) | 定義 | 分類`
    ## 來源清單     ->  `- 標題 — URL（日期）`

Merge across all files, de-duplicate, sort, and emit clean JSON the
assemble step can fold into data/data.js.

Run with uv (this project mandates uv):  uv run python data/parse_research.py
"""
from __future__ import annotations

import glob
import json
import os
import re
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
RESEARCH = os.path.join(HERE, "research")
DERIVED = os.path.join(HERE, "derived")
os.makedirs(DERIVED, exist_ok=True)


def split_sections(text: str) -> dict[str, str]:
    """Return {heading: body} for every `## heading` block in the file."""
    out: dict[str, str] = {}
    cur = None
    buf: list[str] = []
    for line in text.splitlines():
        m = re.match(r"^##\s+(.*\S)\s*$", line)
        if m:
            if cur is not None:
                out[cur] = "\n".join(buf)
            cur = m.group(1).strip()
            buf = []
        elif cur is not None:
            buf.append(line)
    if cur is not None:
        out[cur] = "\n".join(buf)
    return out


def pipe_rows(body: str, min_parts: int) -> list[list[str]]:
    """Pull `a | b | c ...` rows out of a section body, ignoring code fences,
    blank lines and prose. Handles both plain pipe lines and Markdown table
    rows (leading/trailing `|`, `|---|` separators). Returns trimmed cells."""
    rows: list[list[str]] = []
    for raw in body.splitlines():
        line = raw.strip()
        if not line or line.startswith("```") or line.startswith("#"):
            continue
        line = re.sub(r"^[-*]\s+", "", line)        # drop a leading bullet
        if "|" not in line:
            continue
        line = line.strip("|").strip()              # drop md-table edge pipes
        if re.fullmatch(r"[\s|:\-—–]+", line):       # md-table separator row
            continue
        parts = [p.strip() for p in line.split("|")]
        if len(parts) >= min_parts and parts[0] and not re.fullmatch(r"[-—–:]+", parts[0]):
            rows.append(parts)
    return rows


def norm_key(s: str) -> str:
    """Normalise a string to a dedupe key: fold width, lowercase, keep
    alphanumerics + CJK only."""
    s = unicodedata.normalize("NFKC", s)
    s = s.lower()
    s = re.sub(r"[\s　]+", "", s)
    s = re.sub(r"[（）()【】\[\]「」『』，,。.、・·:：;；/／\\\-—–_\"'’“”]+", "", s)
    return s


# ---- date helpers for the timeline -------------------------------------- #
def date_sort_key(d: str) -> tuple[int, int, int]:
    d = d.strip()
    m = re.match(r"(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?", d)
    if not m:
        return (9999, 99, 99)
    y = int(m.group(1))
    mo = int(m.group(2)) if m.group(2) else 0
    dy = int(m.group(3)) if m.group(3) else 0
    return (y, mo, dy)


# ---- glossary category bucketing ---------------------------------------- #
# Map the many raw category labels the agents used into a compact, filterable
# set for the glossary page.
CAT_BUCKET = {
    "法規": "law", "政策": "law", "法律": "law", "制度": "law",
    "機構": "org", "組織": "org",
    "技術": "tech", "概念": "concept",
    "標準": "standard", "框架": "standard",
    "原則": "ethics",
    "案件": "ipbiz", "授權": "ipbiz", "估值": "ipbiz", "產業": "ipbiz",
    "角色": "ipbiz", "工具": "ipbiz",
}
CAT_FALLBACK = "concept"


def bucket(cat: str) -> str:
    cat = cat.strip()
    return CAT_BUCKET.get(cat, CAT_FALLBACK)


def main() -> None:
    timeline: list[dict] = []
    glossary: list[dict] = []
    sources: list[dict] = []

    tl_seen: dict[str, dict] = {}
    gl_seen: dict[str, dict] = {}
    src_seen: set[str] = set()

    files = sorted(glob.glob(os.path.join(RESEARCH, "*.md")))
    per_file_stats = []
    for fp in files:
        text = open(fp, encoding="utf-8").read()
        secs = split_sections(text)
        fname = os.path.basename(fp)
        n_tl = n_gl = n_src = 0

        # --- timeline ---
        for head, body in secs.items():
            if "時間軸" in head or "timeline" in head.lower():
                for parts in pipe_rows(body, 3):
                    date, title = parts[0], parts[1]
                    desc = parts[2] if len(parts) > 2 else ""
                    url = parts[3] if len(parts) > 3 else ""
                    if not re.match(r"^\d{4}", date):
                        continue  # skip header rows like "日期 | 里程碑"
                    key = norm_key(date + title)
                    if key in tl_seen:
                        continue
                    ev = {"date": date, "title": title, "body": desc, "url": url}
                    tl_seen[key] = ev
                    timeline.append(ev)
                    n_tl += 1

        # --- glossary ---
        for head, body in secs.items():
            if "術語" in head or "glossary" in head.lower():
                for parts in pipe_rows(body, 2):
                    term = parts[0]
                    definition = parts[1] if len(parts) > 1 else ""
                    cat = parts[2] if len(parts) > 2 else ""
                    if term in ("術語(English)", "術語") or "english)" in term.lower():
                        continue
                    key = norm_key(term)
                    if not key or key in gl_seen:
                        continue
                    item = {"term": term, "def": definition, "cat": bucket(cat),
                            "rawcat": cat}
                    gl_seen[key] = item
                    glossary.append(item)
                    n_gl += 1

        # --- sources ---
        for head, body in secs.items():
            if "來源" in head or "sources" in head.lower():
                for raw in body.splitlines():
                    line = raw.strip()
                    # accept bullet (-, *) or numbered (1., 2)) list items
                    if not re.match(r"^([-*]|\d+[.)])\s+", line):
                        continue
                    line = re.sub(r"^([-*]|\d+[.)])\s+", "", line)
                    # split title — url （date）
                    m = re.search(r"https?://[^\s（）()]+", line)
                    if not m:
                        continue
                    url = m.group(0).rstrip("／/.,);")
                    title = line[: m.start()].rstrip(" —-–:：").strip()
                    if not title:
                        title = url
                    ukey = url.lower()
                    if ukey in src_seen:
                        continue
                    src_seen.add(ukey)
                    sources.append({"title": title, "url": url, "file": fname})
                    n_src += 1

        per_file_stats.append((fname, n_tl, n_gl, n_src))

    timeline.sort(key=lambda e: date_sort_key(e["date"]))
    # glossary: sort by category bucket then term
    cat_order = {"law": 0, "standard": 1, "org": 2, "ethics": 3, "tech": 4,
                 "concept": 5, "ipbiz": 6}
    glossary.sort(key=lambda g: (cat_order.get(g["cat"], 9), norm_key(g["term"])))

    json.dump(timeline, open(os.path.join(DERIVED, "timeline.json"), "w",
              encoding="utf-8"), ensure_ascii=False, indent=2)
    json.dump(glossary, open(os.path.join(DERIVED, "glossary.json"), "w",
              encoding="utf-8"), ensure_ascii=False, indent=2)
    json.dump(sources, open(os.path.join(DERIVED, "sources.json"), "w",
              encoding="utf-8"), ensure_ascii=False, indent=2)

    print("Per-file (timeline / glossary / sources):")
    for fname, a, b, c in per_file_stats:
        print(f"  {fname:50s} {a:3d} {b:3d} {c:3d}")
    print(f"\nMERGED  timeline={len(timeline)}  glossary={len(glossary)}  sources={len(sources)}")
    from collections import Counter
    print("Glossary buckets:", dict(Counter(g["cat"] for g in glossary)))


if __name__ == "__main__":
    main()
