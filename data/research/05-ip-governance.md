# AI 時代的智慧財產權治理
# AI-Era Intellectual Property Governance

> 資料截止：2026 年 6 月｜資料來源：美國法院判決、USPTO、US Copyright Office、WIPO、OSI、各律師事務所分析報告

---

## 概述

人工智慧的崛起，從根本上重組了智慧財產權（IP, Intellectual Property）的傳統框架。AI 系統的訓練方式、生成能力與部署模式，在著作權、專利、營業秘密與授權等四個維度，同時引發了前所未有的法律與治理挑戰，使 IP 管理成為現代公司治理的核心課題，而非法務部門的例行作業。

**四大新挑戰如下：**

1. **訓練資料著作權（Training Data Copyright）**：生成式 AI 模型必須以海量文字、圖像、程式碼訓練，但這些資料絕大多數享有著作權保護。開發者援引「合理使用（fair use）」抗辯，而版權持有人——媒體機構、藝術家、法律資料庫——則認為這是大規模的著作權侵害。目前全球已有 160+ 件相關訴訟，多數仍在審理中。

2. **AI 生成內容歸屬（AI-Generated Content Ownership）**：當 AI 系統生成文字、圖像、音樂或程式碼時，誰是「作者」？美國著作權局已明確：AI 不具「人類作者（human authorship）」資格，純 AI 生成物不受著作權保護；但「人機協作」的創作，視人類貢獻程度而定。各國立場尚存分歧。

3. **模型參數作為資產（Model Parameters as IP Assets）**：訓練完成的模型權重（weights）具有極高的商業價值，可作為營業秘密受保護，也可能成為 M&A 盡職調查的重點標的；但一旦外洩（如 Meta LLaMA 的洩漏事件），影響難以逆轉。

4. **開源合規挑戰（Open Source Compliance）**：模型授權條款日趨多元，從傳統 Apache 2.0、MIT、GPL，到 Llama Community License、OpenRAIL、Gemma 等客製授權，企業在使用或基於這些模型開發產品時，面臨複雜的合規義務，OSI 的開源 AI 定義（OSAID 1.0，2024 年 10 月）為此提供了新的評鑑框架。

這四大挑戰在訴訟、監管、標準化與市場交易等層面相互交織，董事會與法務長必須建立系統性的 AI IP 治理機制，方能在合規、創新與價值創造之間取得平衡。

---

## 訓練資料著作權爭議與訴訟
## Training Data Copyright Disputes & Litigation

### 重要背景

截至 2026 年 6 月，美國已有超過 164 件 AI 著作權訴訟（AI Lawsuit Tracker 統計），多數案件仍處於開示（discovery）階段，預計最快在 2026 年夏季才可能出現正式的合理使用摘要判決。唯一已有實質裁決的案件是 Thomson Reuters v. Ross Intelligence（2025 年 2 月）。

### 主要案件概覽

| 案件 | 原告 v 被告 | 主要爭點 | 現況 / 裁決重點 | 年份 |
|------|-------------|----------|----------------|------|
| Thomson Reuters v. Ross Intelligence | Thomson Reuters / Westlaw v. Ross Intelligence（AI 法律研究工具） | 以 Westlaw 頭注（headnotes）訓練 AI 是否構成侵權；合理使用抗辯 | **2025-02-11 判決：首件拒絕合理使用抗辯的聯邦法院判決**。2,200+ 筆頭注直接侵權成立；用途並非轉化性（non-transformative），競爭市場受損。目前上訴至第三巡迴法院。 | 2020 起訴；2025 判決 |
| New York Times v. OpenAI & Microsoft | New York Times v. OpenAI, Microsoft | 數百萬篇報導被用於訓練 ChatGPT；要求超過 10 億美元損害賠償 | **仍在審理中**。2025 年 4 月法官裁定核心侵權主張可繼續進行；OpenAI 因 2000 萬筆匿名聊天紀錄生產令爭議陷入膠著；2026 年 4 月預計進入摘要判決階段。 | 2023-12 起訴 |
| Getty Images v. Stability AI（英國） | Getty Images v. Stability AI | Stable Diffusion 以 Getty 授權圖庫訓練；著作權侵害及商標侵害 | **2025-11-04 英國高等法院裁決（混合結果）**：主要著作權侵害主張失敗（因 Getty 無法證明訓練行為發生於英國境內）；判決模型權重（weights）非著作權法意義下的「複製品」；但水印商標侵害部分成立（Section 10(1) & 10(2) TMA）。Getty 已獲准就次要著作權問題上訴至英國上訴法院。 | 2023 起訴；2025 裁決 |
| Getty Images v. Stability AI（美國） | Getty Images v. Stability AI | 同上，美國境內侵害行為 | **仍在審理中**，美國訴訟進展緩慢，尚無重大更新。 | 2023 起訴 |
| Authors Guild v. OpenAI | Authors Guild（含 George R.R. Martin、David Baldacci 等 17 位知名作家） v. OpenAI | 小說作品被用於訓練；輸出內容（摘要）是否侵害著作權 | **仍在審理中**。2025 年 10 月法官拒絕 OpenAI 撤案動議，裁定原告關於輸出侵害的主張可繼續進行；短篇摘要可能構成侵害。案件進入 discovery。 | 2023-09 起訴 |
| Andersen v. Stability AI, Midjourney, DeviantArt | 視覺藝術家（Sarah Andersen 等）v. Stability AI, Midjourney, DeviantArt | AI 圖像生成器以藝術家作品訓練；直接侵害與誘導侵害 | **仍在審理中**。2024 年 8 月法官拒絕被告撤案動議，核心著作權主張（直接侵害與誘導侵害）均可繼續進行；判決儲存於「算法形式」不能排除侵害指控。**審判預計 2026-09-08 開始**。 | 2023-01 起訴 |

### 合理使用（Fair Use）爭議核心

美國著作權法第 107 條規定四項合理使用判斷因素：
1. **使用目的與性質**（商業性 vs. 轉化性）
2. **著作性質**
3. **使用數量與實質性**
4. **對潛在市場的影響**

Thomson Reuters 案的關鍵判示：AI 訓練使用若與原著相同用途競爭（Ross 的 AI 法律助理直接競爭 Westlaw），且非「轉化性」使用，則市場損害因素極為重要。法院特別注意到 Ross 使用的是「非生成式 AI」，暗示生成式 AI 案件可能有不同分析。

2026 年中前，多個聯邦法院的合理使用摘要判決預計陸續出現，將形塑 AI 產業的訓練資料合規標準。

---

## AI 生成內容的著作權歸屬
## Copyright Ownership of AI-Generated Content

### 美國：人類作者要件（Human Authorship Requirement）

**美國著作權局（US Copyright Office）**的立場明確且一貫：著作權保護需要「人類作者」，AI 系統本身的輸出物不受保護。

#### 著作權局 AI 系列報告

| 報告 | 發布日期 | 重點內容 |
|------|---------|---------|
| AI 政策指引（Policy Guidance） | 2023-03-16 | 含 AI 生成材料之作品登記標準；人類撰寫部分可受保護，AI 生成部分需聲明放棄 |
| 著作權與 AI 第一部分：數位複製人（Digital Replicas） | 2024-07-31 | 建議制定聯邦數位複製人法；聲音與肖像保護 |
| 著作權與 AI 第二部分：可著作權性（Copyrightability） | 2025-01-29 | **人類對 AI 輸出的貢獻如足夠充分，可構成著作權所有人**；純 AI 生成物不可著作；逐案分析 |
| 著作權與 AI 第三部分：生成式 AI 訓練（Generative AI Training） | 2025-05-09（預發布） | 訓練行為在特定情況下可能構成侵害；建議不立即立法干預，讓自願授權市場繼續發展；若市場失靈，考慮延伸集體授權（ECL） |

#### 重要案例

- **Thaler v. Perlmutter**：Stephen Thaler 申請以 AI「創造力機器（Creativity Machine）」的自主輸出《天堂的入口（A Recent Entrance to Paradise）》為著作權人。2025 年 3 月 18 日，**美國哥倫比亞特區巡迴上訴法院一致裁定**：著作權法要求作品「首先由人類創作」，確認著作權局的拒絕登記決定正確。

- **Zarya of the Dawn**（2023-02-21）：圖形小說，AI 生成插圖不可著作，但人類撰寫的文字及圖文整體選取編排可受保護；著作權局要求申請人聲明 AI 生成部分。

- **Allen v. Perlmutter / Théâtre D'opéra Spatial**（2023-09-05）：申請人以 Midjourney 生成圖像後再修改，著作權局拒絕登記，因申請人未識別並聲明放棄 AI 生成部分。

#### 著作權保護實務指引

在人機協作創作情境下，若人類對最終作品有足夠充分的「創意貢獻」（如選取、排列、修改），則人類貢獻的部分可受著作權保護。實務建議：
- 記錄創作過程中人類的選擇與決策
- 申請登記時識別並聲明放棄 AI 生成部分
- 建立 AI 使用日誌（audit log）

### 各國比較：AI 生成著作的態度差異

| 國家/地區 | 立場 | 說明 |
|-----------|------|------|
| 美國 | **不可著作（人類作者為必要條件）** | 哥倫比亞特區巡迴法院 Thaler 案確認；人機協作創作視人類貢獻而定 |
| 英國 | **可能保護（電腦生成作品有特殊條款）** | CDPA 第 9(3) 條：電腦生成作品，「負責其創作安排的人」為作者。但英國政府 2024-12 啟動資料採礦豁免諮詢（2025-02 結束），政策走向未定。 |
| 中國 | **傾向保護（視創意貢獻而定）** | 2023 年北京互聯網法院案例判決 AI 生成圖像的人類使用者為著作權人；強調使用者的「智識創造」投入。 |
| 歐盟 | **探索中（未有統一立場）** | 歐洲議會智庫 2025 年研究報告分析各種方案；EU AI Act 第 50 條規範 AI 生成內容的標示義務，並未直接解決著作權歸屬問題。 |
| 台灣 | **現行法律框架下：人類作者為要件** | 著作權法以「人類創作」為保護前提；智慧財產局（TIPO）尚未發布 AI 著作權專屬指引。 |

---

## AI 與專利
## AI and Patents

### DABUS 案：AI 發明人資格爭議

DABUS（Device for the Autonomous Bootstrapping of Unified Sentience）是 Stephen Thaler 博士開發的 AI 系統。Thaler 以 DABUS 作為唯一發明人，向多個司法管轄區提出專利申請，引發全球「AI 可否作為發明人」的標誌性法律辯論。

#### 各司法管轄區裁決結果

| 管轄區 | 最終裁決 | 說明 |
|--------|---------|------|
| 美國 | **拒絕（AI 不能作為發明人）** | USPTO 拒絕；聯邦法院確認；美國最高法院 2023 年 4 月拒絕聽審 |
| 英國 | **拒絕（AI 不能作為發明人）** | UK 最高法院 2023 年確認：發明人須為自然人；Thaler 以「佔有原則」主張所有權的論點亦被否定。2025 年進一步上訴亦被高等法院及上訴法院駁回。 |
| 歐洲專利局（EPO） | **拒絕（維持傳統自然人要件）** | EPO 審查部門 2024 年 12 月再次拒絕；強調歐洲專利法要求發明人為自然人 |
| 澳大利亞 | **拒絕（2024 年高等法院確認）** | 澳洲最高法院一致裁定：依現行《專利法》及規則，只有自然人可作發明人 |
| 南非 | **授予（特殊情況）** | 2021 年 7 月，南非成為全球首個授予 AI 發明專利的國家（形式審查體制，未作實質審查） |
| 加拿大 | **拒絕（2025 年 6 月）** | 專利上訴委員會 2025 年 2 月聽審後，6 月終局決定拒絕 AI 發明人資格 |
| 瑞士 | **拒絕（2025 年 6 月）** | 聯邦行政法院 2025-06-26 裁定：AI 系統不得作為專利發明人 |
| 日本 | **拒絕（2025 年 1 月）** | 智慧財產高等法院大法庭裁定：生成式 AI DABUS 作為發明人的主張被否定 |

**全球共識**：目前幾乎所有主要司法管轄區均確認，**發明人資格（inventorship）限於自然人**，AI 不具法律人格而無法作為發明人。

### USPTO AI 輔助發明指引的演變

| 日期 | 文件 | 重點 |
|------|------|------|
| 2024-02-13 | USPTO 發明人資格指引（AI 輔助發明）——初版 | 引入 Pannu 因素框架分析 AI 輔助發明的人類發明人認定；要求人類對發明每一項請求項有「重大貢獻（significant contribution）」 |
| 2025-11-28 | **修訂版指引**（取代初版） | 廢除初版；Pannu 因素僅適用於多位自然人聯合發明時；AI 輔助發明回歸傳統「人類構思（human conception）」標準；AI 不得列為聯合發明人 |

### AI 相關專利趨勢（WIPO 數據）

根據 WIPO《生成式 AI 專利地景報告》（2024 年 7 月）：

- 2014 至 2023 年間，生成式 AI 專利家族（patent families）從 733 件成長至超過 14,000 件，增幅超過 800%
- 2014–2023 年累計 54,000 件 GenAI 發明，其中 25% 以上出現在最後一年（2023 年）
- **中國排名第一**：38,000+ 件 GenAI 發明，是排名第二的美國（約 6,300 件）的六倍
- GenAI 專利佔全球 AI 專利的 6%
- 印度以年均 56% 增速居前五名之首
- 應用領域跨越生命科學、製造業、交通運輸、資安與電信

---

## 營業秘密與模型權重
## Trade Secrets and Model Weights

### 模型參數作為營業秘密

AI 模型的核心資產——訓練資料集、神經網路架構、超參數設定（hyperparameter configurations）、精確的權重值（weight values）——均可依據美國《保護營業秘密法（DTSA, Defend Trade Secrets Act）》及各州類似法律受到保護，前提是：

1. **具體描述性（Specificity）**：不能僅稱「我們的機器學習模型」，必須明確說明具體的技術參數
2. **因保密而具有經濟價值（Economic value by virtue of secrecy）**
3. **採取合理的保密措施（Reasonable efforts to maintain secrecy）**

### 模型權重外洩事件與風險

**Meta LLaMA 外洩事件（2023 年 3 月）**：
Meta 最初僅將 LLaMA 權重提供給經過審核的研究人員，但模型權重在發布數日內即在網路上擴散外洩。Meta 決定順勢而為，後來以更寬鬆的商業授權正式發布 Llama 2（2023 年 7 月）。此事件的影響：
- 社群以外洩權重微調出無安全限制的版本，產生有害內容風險
- 中國各 AI 實驗室以 Llama 4 權重為基礎，微調出有競爭力的商業產品
- Google 內部備忘錄（2023 年 5 月外洩）「我們沒有護城河（We Have No Moat）」反映出對開源 AI 擴散的擔憂

### 2025 年法院判決要點

- **不可逆的訓練污染（Irreversible Training Contamination）**：法院認定，一旦竊取的營業秘密被用於訓練模型，損害難以挽回，因模型已「記憶」受保護的資訊，禁制令或返還救濟極為複雜。
- **AI 逆向工程風險**：AI 工具有能力分析公開輸出並推導出專有算法或資料模式，「非顯然可知（not readily ascertainable）」標準面臨挑戰。
- **「重新設計」抗辯失效**：2025 年 8 月，法院拒絕認定所謂「重新設計後的新產品」已擺脫竊取的技術——對企圖以表面修改清洗竊取 AI 技術的行為形成遏制。

### EU AI Act 與營業秘密的張力

EU AI Act 要求 GPAI 模型提供商揭露訓練資料摘要（自 2025-08-02 起生效），這與模型提供商保護訓練資料集作為營業秘密的利益產生張力。赫伯特史密斯律師事務所分析（2025 年 10 月）指出，如何在 AI Act 的透明度義務與歐盟《商業秘密指令（Trade Secrets Directive）》之間取得平衡，仍是待解難題。

---

## 開源授權與合規
## Open Source Licensing and Compliance

### 傳統開源授權在 AI 模型的適用

| 授權 | 類型 | AI 適用特性 | 主要限制 |
|------|------|------------|---------|
| Apache 2.0 | 寬鬆（Permissive） | 最廣泛使用的 OSI 核准授權；允許商業使用 | 須保留著作權聲明；專利授權條款 |
| MIT | 寬鬆（Permissive） | 極簡授權，廣泛採用 | 須保留著作權聲明 |
| GPL v3 | 著作傳授（Copyleft） | 「病毒式」傳染：修改版須以相同授權發布 | 衍生模型若公開發布須開源；商業限制 |
| LGPL | 弱 Copyleft | 允許以動態連結方式使用 | 對模型修改部分仍須 Copyleft |

### 模型專屬授權（Model-Specific Licenses）

| 授權 | 適用模型 | 主要特性 | 是否符合 OSI 開源標準 |
|------|---------|---------|------------------|
| Llama Community License | Meta Llama 2, 3, 3.1 系列 | 月活 7 億用戶以上需商業授權；禁止特定用途；禁止用於訓練競爭性 LLM | **否**（OSI 確認不符合 OSAID） |
| OpenRAIL（開放負責任 AI 授權） | BigScience BLOOM、Stable Diffusion | 允許商業使用但有行為限制（use restrictions）；禁止有害用途 | 視版本而定 |
| Gemma Terms of Use | Google Gemma 系列 | 允許商業使用；禁止用於訓練 Google 競爭性模型 | **否** |
| Apache 2.0（模型） | 部分開放模型 | 符合 OSAID 要求之授權框架 | **是**（視模型完整開放程度） |

### OSI 開源 AI 定義（OSAID 1.0，2024 年 10 月）

2024 年 10 月 28 日，開放原始碼促進會（OSI）發布《開源 AI 定義》1.0 版（OSAID），這是首個正式界定「開源 AI」的標準框架。

**OSAID 對「開源 AI」的四項自由要求**：
1. 以任何目的使用系統，無需取得許可
2. 研究系統運作方式並檢視其組件
3. 以任何目的修改系統，包括改變其輸出
4. 以相同或不同授權與他人分享系統

**OSAID 1.0 要求揭露的三大組件**：
- **程式碼（Code）**：訓練與執行系統的完整原始碼，以 OSI 核准授權發布
- **模型權重與參數（Weights & Parameters）**：以 OSI 核准條款發布
- **訓練資料資訊（Training Data Information）**：須提供充分詳細的資訊，使有能力的人可以建立實質等效的系統——但**不必然要求提供訓練資料本身**

**OSAID 認定通過開源標準的模型**：Pythia（Eleuther AI）、OLMo（AI2）、Amber 和 CrystalCoder（LLM360）、T5（Google）

**OSAID 認定未達開源標準的模型**：Llama 2（Meta）、Grok（X/Twitter）、Phi-2（Microsoft）、Mixtral（Mistral）——因缺少必要組件或授權條款不相容

### 「開放權重」vs「開源」之爭

許多宣稱「開源」的 AI 模型，實際上只是**「開放權重（open weight）」**——僅公開模型參數，但訓練資料、架構細節或程式碼可能受限。OSAID 的發布旨在終結「洗白開源（open washing）」，提供明確評鑑標準。

Simon Willison 等學者指出：Meta 的 Llama 3 在 EU AI Act 架構下，可能因「開源」主張而取得合規豁免，這是 Meta 積極推廣「開源 AI」稱號的潛在動機之一。

---

## 內容來源與水印
## Content Provenance and Watermarking

### C2PA 內容真實性聯盟標準

**C2PA（Coalition for Content Provenance and Authenticity）**是由 Adobe、Microsoft、BBC、Sony、Intel 等創立的開放技術標準，為數位檔案附加**密碼學簽署的元資料（cryptographically signed metadata）**，創建防篡改的內容來源記錄，包括：
- 誰簽署了內容
- 使用了哪些工具
- 是否有 AI 介入

C2PA 的「內容憑證（Content Credentials）」標準已整合進多個主流創作工具（Adobe Firefly、Microsoft Designer 等）。EU AI Act 將 C2PA 列為滿足機器可讀標示要求的技術方案範例。

### Google SynthID

Google DeepMind 開發的 **SynthID** 是一種「不可見浮水印（invisible watermark）」技術，透過修改圖像像素值、音頻波形或文字 token 分布，嵌入可被 SynthID 分類器偵測的隱形信號。特點：
- 對人眼不可見
- 現支援圖像、音訊、影片與文字
- 一般的編輯和重新上傳工作流程不會移除浮水印（與元資料不同）

### 雙層技術標準

業界已形成共識，採用**雙層技術方案**：
1. **C2PA 內容憑證**：簽署元資料（provenance chain）
2. **不可見浮水印**（SynthID 及同類技術）：嵌入內容本身的信號

### EU AI Act 第 50 條：AI 生成內容標示義務

| 要項 | 說明 |
|------|------|
| 法規依據 | EU AI Act Article 50 |
| 生效日期 | **2026-08-02**（EU AI Act 於 2024-08-01 生效後兩年） |
| 義務內容 | AI 生成內容的機器可讀標示成為強制性要求（machine-readable content marking） |
| 技術方案 | C2PA 被列為合規範例之一，SynthID 等互補方案亦可採用 |
| 適用範圍 | 適用於所有提供 AI 生成文字、圖像、音訊、影片的系統部署商 |

### 現況挑戰

2025 年一項 arXiv 研究論文（《Missing the Mark》）分析指出，目前生成式 AI 系統在實務中對浮水印的採用仍不普遍，與 EU AI Act 即將到來的強制要求之間存在顯著落差。

---

## IP 估值與交易/併購
## IP Valuation and M&A Transactions

### AI IP 的三種傳統估值方法

| 方法 | 說明 | AI 應用特性 |
|------|------|------------|
| **成本法（Cost Approach）** | 估算重建或重置 IP 的成本 | 適用於評估訓練資料集、模型重建成本；但難以捕捉模型的市場溢價 |
| **市場法（Market Approach）** | 參考可比交易的市場定價 | AI 領域交易量大但可比性低；授權費率正在形成中 |
| **收益法（Income Approach）** | 估算 IP 產生的未來現金流現值 | 較適合評估 AI 模型 API 授權、SaaS 平台等有明確收益流的資產 |

### IFRS 第 38 號準則（IAS 38）——無形資產

IAS 38 要求符合「可識別性、控制性及未來經濟效益」的無形資產在資產負債表上以取得成本認列。AI 模型在財務報告中的處理：
- **內部研發費用**：通常須費用化（研究階段）或可資本化（開發階段符合特定條件）
- **外部取得的 AI 模型**（如透過 M&A）：以公平價值認列，後續依有限/無限使用年限攤銷或測試減值
- **挑戰**：AI 模型的快速迭代使「有用壽命（useful life）」難以評估

### AI IP 對 M&A 估值的影響（實證數據）

根據 Ocean Tomo / J.S. Held 分析（2025 年）：
- **AI 公司估值溢價**：大型交易中超過 25 倍收入（25.0x revenue）
- **醫療 AI**：6–8 倍收入（vs. 產業平均 4.5–5x）
- **軟體公司（含 AI IP）**：EBITDA 中位數 15.2 倍（2015–2025H1）
- **策略性收購方**：對擁有強健 AI IP 部位的公司，願意支付最高 20% 溢價

### M&A 盡職調查（IP Due Diligence）的 AI 維度

| 重點 | 說明 |
|------|------|
| 訓練資料所有權 | 訓練資料集的授權清單是否清晰？是否存在著作權侵害風險？ |
| 演算法與模型權重所有權 | 核心 IP 是否屬於公司？有無員工離職帶走模型的風險？ |
| 開源授權合規 | 使用的開源組件（含 Copyleft）是否與商業模式衝突？ |
| 監管合規（EU AI Act 等） | 是否建立 AI 治理框架？不合規可能造成估值折扣 |
| 動態風險 | AI 模型的自學習能力可能改變行為，造成不可預期的責任 |

實務建議：在交易前 12–18 個月進行 IP 審計（pre-sale IP audit），可顯著降低估值折扣風險。

### 重要 M&A 案例參考

- **NVIDIA 收購 ARM（2020–2022，失敗）**：提議 400 億美元收購遭美國 FTC、英國 CMA 及歐盟以反壟斷為由阻止，2022 年 2 月宣告失敗。ARM 的 IP 授權商業模式及其在 AI 晶片生態系的關鍵地位，使此案成為 AI 時代 IP 治理的重要案例。
- **AI 授權協議潮流（2023–2025）**：Google、Apple、OpenAI 等公司與新聞媒體機構（如 Associated Press、Axel Springer、News Corp 等）締結訓練資料授權協議，估計金額從數百萬至數億美元不等，形成新興的「AI 訓練資料授權市場」。

---

## WIPO 與台灣 TIPS
## WIPO and Taiwan TIPS

### WIPO 在 AI 與 IP 的政策對話

世界智慧財產組織（WIPO）自 2019 年起啟動「AI 與 IP 對話（WIPO Conversation on Intellectual Property and Frontier Technologies）」系列，聚集各國政府、政策制訂者、創作者、學者與創新者，討論 AI 對 IP 體系的衝擊。

#### 重要里程碑

| 日期 | 事件 | 說明 |
|------|------|------|
| 2019 年起 | WIPO AI 與 IP 系列對話 | 每年召開多輪，討論著作權、專利、商標等各面向 |
| 2024-07 | GenAI 專利地景報告發布 | 首份全面分析生成式 AI 專利趨勢的 WIPO 報告；揭示中國主導地位 |
| 2025-10-28/29 | 第 12 屆 WIPO 對話：IP 與合成媒體 | 聚焦深偽（deepfake）、合成媒體的智財與治理議題 |
| 2025 年 | WIPO 世界智慧財產指標（WIPI 2025） | 2024 年全球專利與設計申請量創新高；商標申請持平 |
| 2026-03-17 | WIPO **AI 基礎設施交流（AIII）**啟動 | 新倡議，促進全球對 AI 在 IP 系統中的技術與操作面向的對話 |

#### WIPO 核心立場

WIPO 不直接制定強制性規範，而是作為：
1. **政策討論平台**：彙集各方利益相關者的分歧立場
2. **數據中心**：提供全球 IP 活動的統計分析
3. **技術援助提供者**：協助開發中國家建立 AI 時代的 IP 能力

WIPO 目前未主張 AI 系統應具有發明人資格，但持續觀察各國法院判決，以評估是否需要國際層面的政策調整。

---

### 台灣 TIPS（台灣智慧財產管理制度）

**TIPS（Taiwan Intellectual Property Management System）**，全稱「台灣智慧財產管理規範」，是由台灣**經濟部智慧財產局（TIPO）**主導、工業技術研究院（ITRI）等機構協助推廣的企業智慧財產管理認證制度。

#### 制度概述

| 面向 | 說明 |
|------|------|
| 性質 | 非強制性認證，企業自願申請 |
| 基礎框架 | 採 ISO 管理系統架構（PDCA 循環），可與現有管理體系整合 |
| 主管機關 | 經濟部智慧財產局（TIPO） |
| 認證機構 | 工業技術研究院資訊與通訊研究所（IIIi）等 |
| 目標 | 協助企業建立系統化 IP 管理，將 IP 管理與營運目標連結 |

#### 認證等級

| 等級 | 說明 | 重點 |
|------|------|------|
| A 級 | 基礎 IP 管理制度建立 | 識別、保護、管理 IP 資產的基本流程 |
| AA 級 | 進階 IP 管理與商業應用 | 強調主動利用 IP 創造商業利益 |
| AAA 級 | 卓越 IP 管理（最高等級） | 目前僅**台積電（TSMC）**通過 |

截至 2023 年，通過 AA 級認證企業：友達光電（AUO）、安盛生醫、Seradigm、環球晶圓（GlobalWafers）、聯華電子（UMC），共五家。

#### 2025 年新發展

台灣智慧財產局 2025 年 7 月在台北、新竹、台中、台南舉辦「2025 智財經營研討班」，議題涵蓋：
- 未來設計（Future Design）專利合案申請
- 女性發明人加速審查
- **電腦軟體相關發明**（與 AI/ML 技術高度相關）

TIPO 正積極將 AI 時代的 IP 管理議題納入 TIPS 框架，包括 AI 生成發明的發明人認定、AI 輔助創作的著作權策略，以及企業 AI 治理與 IP 合規的整合。

---

## 時間軸事件
## Timeline of Key Events

```
2023-02-21 | Zarya of the Dawn 決定 | 美國著作權局裁定 AI 生成插圖不可著作，人類文字可保護 | https://www.copyright.gov/ai/
2023-03-16 | 著作權局 AI 政策指引 | 含 AI 生成材料作品的登記政策發布 | https://www.copyright.gov/ai/ai_policy_guidance.pdf
2023-07-18 | Llama 2 正式開放授權 | Meta 在外洩後正式以商業授權發布 Llama 2 | https://ai.meta.com/llama/
2023-09-05 | Théâtre D'opéra Spatial 案 | 著作權局拒絕以 AI 生成後修改的圖像登記 | https://www.copyright.gov/ai/
2023-09-19 | Authors Guild v. OpenAI 起訴 | George R.R. Martin 等作家集體訴訟 OpenAI | https://ailawsuittracker.com/
2023-10-28 | UK 最高法院 DABUS 裁決 | 確認 AI 不可作為發明人；英國成第三個否定 DABUS 的主要管轄區 | https://www.supremecourt.uk/
2023-12-27 | NYT v. OpenAI & Microsoft 起訴 | 紐約時報提起著作權訴訟，要求賠償超過 10 億美元 | https://www.nytimes.com/
2024-02-13 | USPTO AI 輔助發明人指引（初版） | USPTO 發布 AI 輔助發明的發明人資格指引 | https://www.federalregister.gov/
2024-07-31 | 著作權局 AI 報告第一部分 | 數位複製人問題，建議制定聯邦法律 | https://www.copyright.gov/ai/
2024-08-01 | EU AI Act 正式生效 | 歐盟人工智慧法案生效，開始 2 年遞移期 | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
2024-08-12 | Andersen v. Stability AI 撤案動議駁回 | 法官允許核心著作權主張繼續進行，進入 discovery | https://www.meshiplaw.com/litigation-tracker/andersen-v-stability-ai
2024-10-28 | OSAID 1.0 發布 | OSI 發布首份開源 AI 定義，Llama 等主流模型不符合標準 | https://opensource.org/ai/open-source-ai-definition
2025-01-29 | 著作權局 AI 報告第二部分 | AI 輸出可著作權性分析；人機協作創作視人類貢獻逐案判斷 | https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf
2025-01-05 | NYT v. OpenAI：聊天記錄生產令 | 法官裁定 OpenAI 須交出 2000 萬筆匿名 ChatGPT 記錄 | https://ailawsuittracker.com/
2025-02-11 | Thomson Reuters v. Ross Intelligence 判決 | 首件拒絕 AI 訓練合理使用抗辯的聯邦法院判決 | https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2025/02/reuters-ross-court-ruling-ai-copyright-fair-use
2025-03-18 | Thaler v. Perlmutter DC 巡迴上訴裁決 | 確認 AI 生成物不可著作；人類作者要件確立 | https://www.jonesday.com/en/insights/2025/02/copyrightability-of-ai-outputs-us-copyright-office-analyzes-human-authorship-requirement
2025-04-01 | NYT v. OpenAI：案件可繼續進行 | 法官裁定核心主張不撤銷；案件推進至摘要判決階段 | https://www.axios.com/2025/04/01/nyt-openai-microsoft-lawsuit-advances
2025-05-09 | 著作權局 AI 報告第三部分（預發布） | 訓練資料版權問題；建議允許自願授權市場發展 | https://www.copyright.gov/ai/
2025-08-02 | EU AI Act GPAI 義務生效 | GPAI 模型透明度與著作權合規義務正式適用 | https://www.mayerbrown.com/en/insights/publications/2025/08/eu-ai-act-news-rules-on-general-purpose-ai-start-applying-guidelines-and-template-for-summary-of-training-data-finalized
2025-10-27 | Authors Guild v. OpenAI：撤案動議駁回 | 法官拒絕 OpenAI 撤案動議，短篇摘要可能構成侵害 | https://ailawsuittracker.com/
2025-10-28 | 第 12 屆 WIPO 對話：合成媒體 | WIPO 討論 deepfake 與合成媒體的 IP 議題 | https://www.wipo.int/en/web/frontier-technologies/frontier_conversation
2025-11-04 | Getty v. Stability AI 英國高等法院裁決 | 主要著作權主張失敗；模型權重非著作複製品；商標侵害部分成立 | https://www.lw.com/en/insights/getty-images-v-stability-ai-english-high-court-rejects-secondary-copyright-claim
2025-11-28 | USPTO 修訂 AI 發明指引 | 廢除 2024 年初版；回歸傳統人類構思標準；Pannu 因素不適用單一自然人情境 | https://www.federalregister.gov/documents/2025/11/28/2025-21457/revised-inventorship-guidance-for-ai-assisted-inventions
2026-03-17 | WIPO AIII 倡議啟動 | AI 基礎設施交流新倡議，促進全球 AI 與 IP 系統對話 | https://www.wipo.int/meetings/en/2025/ai-infrastructure-interchange.html
2026-08-02 | EU AI Act 第 50 條生效（預定） | AI 生成內容機器可讀標示義務生效 | https://c2paviewer.com/articles/eu-ai-act-content-credentials
```

---

## 術語
## Glossary

```
合理使用 Fair Use | 著作權法的抗辯事由，依目的、性質、數量、市場影響四因素判斷；Thomson Reuters v. Ross 首次在 AI 訓練語境下被法院否決 | 法律
訓練資料著作權 Training Data Copyright | AI 模型訓練所使用之受著作權保護資料，其使用是否構成侵害的爭議 | 概念
人類作者要件 Human Authorship Requirement | 美國著作權法要求作品須由人類創作方可受保護；AI 生成物不符合此要件 | 法律
Thaler v. Perlmutter | Stephen Thaler v. 美國著作權局局長 Shira Perlmutter；爭議 AI 自主生成圖像的著作權登記；2025 年 DC 巡迴法院一致裁定 AI 生成物不可著作 | 案件
Thomson Reuters v. Ross Intelligence | 法律資料庫案；2025-02-11 首件拒絕 AI 訓練合理使用抗辯的聯邦法院判決 | 案件
NYT v. OpenAI | 紐約時報訴 OpenAI 及 Microsoft；訓練資料著作權侵害；審理中 | 案件
Getty Images v. Stability AI | Getty 圖庫訴 Stability AI；英國 2025-11-04 裁決主要著作權主張失敗 | 案件
Andersen v. Stability AI | 藝術家集體訴訟 Stability AI、Midjourney；2026 年 9 月開庭審判 | 案件
Authors Guild v. OpenAI | 作家集體訴訟 OpenAI；輸出摘要侵害問題；審理中 | 案件
DABUS | Device for the Autonomous Bootstrapping of Unified Sentience；Stephen Thaler 的 AI 系統；全球多國法院確認 AI 不具發明人資格的標誌性案件 | 案件
合理使用四因素 Four Fair Use Factors | 美國著作權法第 107 條：①使用目的與性質 ②著作性質 ③使用數量 ④市場影響 | 法律
轉化性使用 Transformative Use | 合理使用分析的核心因素；使用是否添加新表達、意義或訊息 | 法律
著作傳授/Copyleft | GPL 等授權的核心原則：衍生作品須以相同授權發布；俗稱「病毒式污染」 | 授權
OSAID | Open Source AI Definition；OSI 發布的開源 AI 定義 1.0（2024-10-28）；要求公開程式碼、模型權重及訓練資料資訊 | 授權
開放權重 Open Weight | 僅公開模型參數的 AI 模型，不符合 OSAID 完整開源標準；Meta Llama 系列的典型形式 | 授權
OpenRAIL | Open & Responsible AI License；允許商業使用但設有行為限制的模型授權 | 授權
Llama Community License | Meta Llama 系列模型的客製授權；月活 7 億用戶以上需商業授權；OSI 確認不符合開源標準 | 授權
C2PA | Coalition for Content Provenance and Authenticity；透過密碼學簽署元資料建立內容來源鏈的開放標準 | 概念
SynthID | Google DeepMind 開發的 AI 生成內容不可見浮水印技術；支援圖像、音訊、影片、文字 | 概念
EU AI Act Article 50 | 歐盟 AI 法案第 50 條；2026-08-02 起強制要求 AI 生成內容的機器可讀標示 | 法律
GPAI | General-Purpose AI；通用目的 AI 模型；EU AI Act 設有專章義務（Articles 51-55）自 2025-08-02 生效 | 法律
IAS 38 | IFRS 第 38 號準則：無形資產會計準則；規範 AI 模型等無形資產的認列、衡量與揭露 | 估值
收益法 Income Approach | IP 估值方法：估算 IP 產生的未來現金流現值；適用於 AI 模型 API 授權等有明確收益流的資產 | 估值
市場法 Market Approach | IP 估值方法：參考可比市場交易定價 | 估值
成本法 Cost Approach | IP 估值方法：估算重建或重置 IP 的成本 | 估值
TIPS | Taiwan Intellectual Property Management System；台灣智慧財產管理制度；TIPO 主導的企業 IP 管理認證框架（A/AA/AAA 三級） | 概念
TIPO | Taiwan Intellectual Property Office；台灣經濟部智慧財產局 | 概念
WIPO | World Intellectual Property Organization；世界智慧財產組織；主導全球 IP 政策對話與統計 | 概念
DTSA | Defend Trade Secrets Act；美國 2016 年《保護營業秘密法》；可提出聯邦訴訟保護 AI 模型權重等營業秘密 | 法律
模型權重 Model Weights | 訓練完成後 AI 神經網路的參數值；代表模型「知識」；可作為營業秘密保護 | 概念
延伸集體授權 Extended Collective Licensing (ECL) | 集體管理機制；允許版權集管組織代表所有版權人（包括未明確授權者）簽訂授權協議；著作權局 2025 報告建議在市場失靈時考慮採用 | 法律
TDM | Text and Data Mining；文字與資料採礦；EU 著作權指令 Articles 3-4 設有 TDM 豁免條款；美國尚無同等規定 | 法律
```

---

## 來源清單
## Sources

- New York Times v. OpenAI case tracker — https://ailawsuittracker.com/ (2026)
- Davis Wright Tremaine: Thomson Reuters v. Ross Intelligence ruling analysis — https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2025/02/reuters-ross-court-ruling-ai-copyright-fair-use (2025-02)
- Reed Smith: Court shuts down AI fair use argument in Thomson Reuters v. Ross — https://www.reedsmith.com/en/perspectives/2025/03/court-ai-fair-use-thomson-reuters-enterprise-gmbh-ross-intelligence (2025-03)
- US Copyright Office: AI Reports Index — https://www.copyright.gov/ai/ (2025)
- US Copyright Office: Part 2 Copyrightability Report — https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf (2025-01-29)
- US Copyright Office: AI Policy Guidance — https://www.copyright.gov/ai/ai_policy_guidance.pdf (2023-03-16)
- Skadden: Copyright Office Publishes Report on AI Copyrightability — https://www.skadden.com/insights/publications/2025/02/copyright-office-publishes-report (2025-02)
- Jones Day: Copyrightability of AI Outputs (Thaler v. Perlmutter analysis) — https://www.jonesday.com/en/insights/2025/02/copyrightability-of-ai-outputs-us-copyright-office-analyzes-human-authorship-requirement (2025-02)
- Skadden: Copyright Office Weighs In on AI Training and Fair Use (Part 3) — https://www.skadden.com/insights/publications/2025/05/copyright-office-report (2025-05)
- Crowell & Moring: US Copyright Office Releases Third Report on AI — https://www.crowell.com/en/insights/client-alerts/us-copyright-office-releases-third-report-on-ai-and-copyright-addressing-training-ai-models-with-copyrighted-materials (2025-05)
- Latham & Watkins: Getty Images v. Stability AI: English High Court Rejects Secondary Copyright Claim — https://www.lw.com/en/insights/getty-images-v-stability-ai-english-high-court-rejects-secondary-copyright-claim (2025-11)
- Mayer Brown: Getty Images v Stability AI UK High Court Analysis — https://www.mayerbrown.com/en/insights/publications/2025/11/getty-images-v-stability-ai-what-the-high-courts-decision-means-for-rights-holders-and-ai-developers (2025-11)
- Knowing Machines: Andersen v. Stability AI — https://knowingmachines.org/knowing-legal-machines/legal-explainer/cases/andersen-v-stability-ai (2024)
- Mesh IP Law: Andersen v. Stability AI litigation tracker — https://www.meshiplaw.com/litigation-tracker/andersen-v-stability-ai (2024)
- McKool Smith: AI Infringement Case Updates (multiple dates) — https://www.mckoolsmith.com/newsroom-ailitigation-46 (2025-11)
- Chat GPT Is Eating the World: Status of all 51 copyright lawsuits v. AI (Oct. 8, 2025) — https://chatgptiseatingtheworld.com/2025/10/08/status-of-all-51-copyright-lawsuits-v-ai-oct-8-2025-no-more-decisions-on-fair-use-in-2025/ (2025-10)
- Axios: NYT case against OpenAI and Microsoft can advance — https://www.axios.com/2025/04/01/nyt-openai-microsoft-lawsuit-advances (2025-04)
- USPTO: Revised Inventorship Guidance for AI-Assisted Inventions (Federal Register) — https://www.federalregister.gov/documents/2025/11/28/2025-21457/revised-inventorship-guidance-for-ai-assisted-inventions (2025-11-28)
- IPWatchdog: USPTO AI Guidance Reiterates DABUS Decision — https://ipwatchdog.com/2024/02/12/uspto-ai-guidance-reiterates-dabus-decision/ (2024-02)
- Goodwin: USPTO Issues Revised Inventorship Guidance for AI-Assisted Inventions — https://www.goodwinlaw.com/en/insights/publications/2025/12/alerts-lifesciences-uspto-issues-revised-inventorship-guidance (2025-12)
- DABUS Wikipedia — https://en.wikipedia.org/wiki/DABUS
- JUVE Patent: UK Supreme Court final say on DABUS — https://www.juve-patent.com/cases/uk-supreme-court-dabus-named-inventor-patent-stephen-thaler/ (2023)
- WIPO: China-Based Inventors Filing Most GenAI Patents — https://www.wipo.int/pressroom/en/articles/2024/article_0009.html (2024-07)
- WIPO Patent Landscape Report: Generative AI — https://www.wipo.int/web-publications/patent-landscape-report-generative-artificial-intelligence-genai/en/2-global-patenting-and-research-in-genai.html (2024)
- WIPO: Artificial Intelligence and IP (main page) — https://www.wipo.int/en/web/frontier-technologies/artificial-intelligence/index
- OSI: Open Source AI Definition 1.0 — https://opensource.org/ai/open-source-ai-definition (2024-10-28)
- OSI: Meta's LLaMa license is still not Open Source — https://opensource.org/blog/metas-llama-license-is-still-not-open-source
- TechCrunch: We finally have an 'official' definition for open source AI — https://techcrunch.com/2024/10/28/we-finally-have-an-official-definition-for-open-source-ai/ (2024-10-28)
- C2PA Viewer: EU AI Act and C2PA (Article 50 requirements) — https://c2paviewer.com/articles/eu-ai-act-content-credentials
- Institute PM: AI Content Provenance and Watermarking: C2PA and SynthID guide — https://www.institutepm.com/knowledge-hub/ai-content-provenance-watermarking
- Mayer Brown: EU AI Act GPAI rules start applying (August 2025) — https://www.mayerbrown.com/en/insights/publications/2025/08/eu-ai-act-news-rules-on-general-purpose-ai-start-applying-guidelines-and-template-for-summary-of-training-data-finalized (2025-08)
- Clifford Chance: Copyright compliance under EU AI Act for GPAI — https://www.cliffordchance.com/insights/resources/blogs/ip-insights/2025/10/copyright-compliance-under-the-eu-ai-act-for-gpai-model-providers.html (2025-10)
- Ocean Tomo / J.S. Held: IP and AI Asset Management in M&A Transactions — https://oceantomo.com/insights/increasing-exit-multiples-ip-and-ai-asset-management-in-ma-transactions/ (2025)
- Ocean Tomo: AI as IP Framework — https://oceantomo.com/insights/ai-as-ip-a-framework-for-boards-executives-and-investors/ (2025)
- Houston Harbaugh: A 2025 AI and Trade Secret Law Retrospective — https://hh-law.com/blogs/blog-intellectual-property-litigation-protection-and-prosecution-dtsa-ai-artificial-intelligence-lawyers/ (2025)
- Herbert Smith Freehills: Trade secrets in the AI era — https://www.hsfkramer.com/insights/2025-10/trade-secrets-in-the-ai-ere-navigating-transparency-under-the-eu-ai-act (2025-10)
- DLA Piper: Can AI-generated content be protected by copyright? UK, EU and China — https://www.dlapiper.com/en-us/insights/publications/2026/04/ai-and-copyright-major-issues-and-direction-of-travel-in-the-uk-eu-and-china-in-q2-2026/can-ai-generated-content-be-protected-by-copyright (2026-04)
- European Parliament Think Tank: Copyright of AI-generated works: Approaches in the EU — https://www.europarl.europa.eu/thinktank/en/document/EPRS_BRI(2025)782585 (2025)
- TIPO (Taiwan): TIPS 智慧財產管理制度 — https://www.tipo.gov.tw/tw/cp-1069-953784-dd169-1.html
- TIPS 官方網站 — https://www.tips.org.tw/
- Gilbert's LLP: Canadian Patent Appeal Board says AI Cannot be an Inventor — https://www.gilbertslaw.ca/insights/2025/07/canadian-patent-appeal-board-says-ai-cannot-be-an-inventor/ (2025-07)
- WIPO: AI Infrastructure Interchange (AIII) — https://www.wipo.int/meetings/en/2025/ai-infrastructure-interchange.html (2026-03)
