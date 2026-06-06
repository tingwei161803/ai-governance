#!/usr/bin/env python3
"""Generate the 13 page .html files for the multi-page site.

Every page shares one <head> (fonts, SEO meta, GA4) and a near-empty <body>
(data-page + <main id="page">); the shell injects the chrome and app.js renders
the body. Run with uv:  uv run python data/gen_html.py
"""
from __future__ import annotations

import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE_URL = "https://tingwei161803.github.io/ai-governance/"
GA4_ID = "G-D62TNHK13V"

# (slug, nav/SEO title, meta description)
PAGES = [
    ("home", "AI 治理百科", "從全球法規、國際標準、倫理安全、企業治理、智財到台灣在地——人工智慧治理（AI Governance）的全景中文百科，含可搜尋術語表、互動時間軸與案例研究。"),
    ("regulation", "全球法規", "全球 AI 法規框架：歐盟 AI Act、美國行政命令、中國三規章、英國、南韓、日本等法域的監理路線、時程與罰則。"),
    ("standards", "國際標準", "國際 AI 標準與多邊倡議：OECD 原則、UNESCO 倫理建議書、G7 廣島進程、聯合國、歐洲委員會公約、ISO/IEC 42001 與 AI 安全峰會。"),
    ("ethics", "倫理與安全", "AI 倫理原則、演算法公平性與 AI 安全：公平、問責、透明、可解釋、隱私、對齊、紅隊測試與企業 Responsible AI 框架。"),
    ("corporate", "企業治理", "企業 AI 治理與風險管理：董事會責任、NIST AI RMF、模型治理、影子 AI、ISO/IEC 42001 與 AI 稽核。"),
    ("ip", "智財治理", "AI 時代的智慧財產權治理：訓練資料著作權訴訟、AI 生成內容歸屬、專利、營業秘密、開源授權、水印與 IP 估值。"),
    ("taiwan", "台灣治理", "台灣 AI 治理：人工智慧基本法、數位發展部、國科會、TIPS、金管會 AI 指引、TAIDE 與主權 AI。"),
    ("geopolitics", "地緣政治", "AI 地緣政治與運算治理：中美晶片出口管制、CHIPS 法案、算力門檻、資料主權與主權 AI。"),
    ("cases", "案例研究", "AI 治理案例研究：紐約時報 v. OpenAI、Getty v. Stability、NVIDIA-ARM、Clearview、DeepSeek 等重大事件與治理啟示。"),
    ("timeline", "大事紀", "AI 治理大事紀（2016–2027）：法規、標準、安全峰會、產業與訴訟的重要里程碑時間軸。"),
    ("glossary", "術語表", "AI 治理術語表：上百個關鍵術語，可搜尋、可依類別篩選，中英對照。"),
    ("learn", "自我測驗", "AI 治理自我測驗：隨堂測驗與字卡，檢驗並複習人工智慧治理的關鍵概念。"),
    ("sources", "資料來源", "AI 治理資料來源：彙整自官方文件與權威網站的引用清單，可搜尋、可依領域篩選。"),
]

SITE_NAME = "AI 治理百科"

GA4 = f"""  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={GA4_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', '{GA4_ID}');
  </script>
"""

FONTS = (
    '  <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
    '  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@500;600;700&family=Noto+Sans+Mono:wght@400;500&display=swap" rel="stylesheet" />\n'
    '  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet" />\n'
)


def page_html(slug: str, title: str, desc: str) -> str:
    is_home = slug == "home"
    fname = "index.html" if is_home else f"{slug}.html"
    canonical = SITE_URL if is_home else SITE_URL + fname
    full_title = SITE_NAME + "｜全球 AI 治理全景中文百科" if is_home else f"{title} · {SITE_NAME}"
    og_title = full_title

    jsonld = ""
    if is_home:
        jsonld = (
            '  <script type="application/ld+json">\n'
            '  {\n'
            '    "@context": "https://schema.org",\n'
            '    "@type": "WebSite",\n'
            f'    "name": "{SITE_NAME}",\n'
            f'    "url": "{SITE_URL}",\n'
            f'    "description": "{desc}",\n'
            '    "inLanguage": "zh-Hant-TW"\n'
            '  }\n'
            '  </script>\n'
        )

    return f"""<!DOCTYPE html>
<html lang="zh-Hant" data-theme="light">
<head>
  <meta charset="UTF-8" />
{GA4}  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>{full_title}</title>
  <meta name="description" content="{desc}" />
  <meta name="theme-color" content="#355070" />
  <link rel="canonical" href="{canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="{SITE_NAME}" />
  <meta property="og:title" content="{og_title}" />
  <meta property="og:description" content="{desc}" />
  <meta property="og:url" content="{canonical}" />
  <meta property="og:locale" content="zh_TW" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="{og_title}" />
  <meta name="twitter:description" content="{desc}" />
{FONTS}  <link rel="stylesheet" href="assets/styles.css" />
{jsonld}</head>
<body data-page="{slug}">
  <main id="page"></main>
  <script src="data/data.js"></script>
  <script src="assets/shell.js"></script>
  <script src="assets/app.js"></script>
</body>
</html>
"""


def main() -> None:
    written = []
    for slug, title, desc in PAGES:
        fname = "index.html" if slug == "home" else f"{slug}.html"
        with open(os.path.join(ROOT, fname), "w", encoding="utf-8") as f:
            f.write(page_html(slug, title, desc))
        written.append(fname)
    print("Wrote", len(written), "pages:")
    print("  " + ", ".join(written))


if __name__ == "__main__":
    main()
