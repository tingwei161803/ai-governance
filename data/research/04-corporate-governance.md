# 企業 AI 治理與風險管理

## 概述

隨著人工智慧從實驗性工具演進為企業核心營運基礎設施，AI 治理（AI Governance）已成為現代企業不可迴避的管理議題。2025 年，72% 的標普 500 企業在年報中揭露至少一項重大 AI 風險，較 2023 年的 12% 大幅攀升，顯示資本市場對 AI 治理的透明度要求正在急速提升。

AI 治理的核心命題，在於如何將「負責任的 AI 使用」從宣示性原則（principles）轉化為可操作的政策（policies）、可執行的流程（processes）、以及可稽核的工具（tools）。這個「原則 → 政策 → 流程 → 工具」的落地鏈條，貫穿了從董事會決策到技術部署的整個組織層級。

從公司治理角度來看，AI 治理的責任鏈從董事會（Board of Directors）延伸至管理層，再到日常的 AI 開發與運營團隊。董事會負有監督 AI 相關風險與機遇的受託義務（fiduciary duty）；管理層（特別是新興的 Chief AI Officer 角色）負責制定策略與治理架構；而跨職能的 AI 治理委員會則協調技術、法律、合規、倫理等不同部門的協作。

AI 治理並非單純的合規負擔，而是建立企業長期 AI 競爭力的前提條件。正如 WilmerHale 在 2026 年初的分析所指出的：「負責任的 AI 治理不是創新與成長的障礙，而是可持續成功的前提。」

本文涵蓋企業 AI 治理的七大核心主題：董事會責任、NIST AI 風險管理框架、Responsible AI 營運模式、模型治理、AI 風險類型、治理工具與角色，以及 ISO/IEC 42001 的導入。

---

## 董事會與治理層級的 AI 責任

### 董事會的核心監督職責

2025 年，40% 的企業已將 AI 監督責任指派給至少一個董事會層級委員會，較 2024 年的 11% 成長近四倍。哈佛大學公司治理論壇 2025 年 5 月的報告指出，僅 31% 的受訪者表示 AI 仍未進入董事會議程（較前一年的 45% 下降），顯示治理意識正在快速提升。

董事會的 AI 監督職責包含四個層次：

1. **策略監督**（Strategic Oversight）：了解企業的 AI 成熟度，審視 AI 部署策略是否符合長期競爭力目標
2. **風險監督**（Risk Oversight）：確保 AI 相關風險（包括聲譽、網路安全、監管與倫理風險）被充分識別與管理
3. **合規監督**（Compliance Oversight）：追蹤 EU AI Act、ISO/IEC 42001、各州 AI 法規等外部合規義務
4. **機會監督**（Opportunity Oversight）：評估 AI 創新機遇，確保企業不因過度保守而失去競爭優勢

WilmerHale 2026 年 1 月發布的《董事會 AI 監督關鍵治理優先事項》提出四步驟框架：①全組織 AI 評估、②建立監督架構、③實施風險管理規程、④賦能團隊善用 AI 機遇。

### 委員會結構

在 Fortune 100 企業中，AI 監督的委員會配置呈現以下分布：
- **審計委員會**（Audit Committee）：最常見的 AI 監督場所，佔 21%
- **風險委員會**（Risk Committee）：適合將 AI 風險整合入既有企業風險管理（ERM）框架
- **ESG / 永續委員會**：負責 AI 的倫理影響與社會責任面向
- **專設 AI 委員會**：部分大型企業另設獨立 AI 治理委員會

董事會成員的 AI 素養需求也在提升：2025 年，44% 的企業在董事能力矩陣中列出 AI 相關經驗，較 2024 年的 26% 顯著增加。

### Chief AI Officer（CAIO）與 Chief AI Ethics Officer

**Chief AI Officer（CAIO）** 是近年快速普及的新興 C-suite 角色。根據調查，超過 76% 的大型組織已設立 CAIO 職位（2025 年這一比例為 26%），歐洲 DAX 大型企業則在 2025 年跟進，主要驅動力為 2026 年 8 月 EU AI Act 的合規截止期。

CAIO 的兩種典型定位：

| 類型 | 報告對象 | 背景 | 核心職責 |
|------|----------|------|----------|
| 策略型 CAIO（Strategy CAIO） | CEO / COO | 商業 / 顧問 | 企業 AI 策略、決策指標、ROI 追蹤 |
| 平台型 CAIO（Platform CAIO） | CTO / CIO | 資料工程 / MLOps | 基礎設施、模型部署、系統可靠性 |

一位 CTO 坦承：「我們在 2024 年聘用了一位 CAIO，花了一年半才意識到實際上需要兩個不同的角色。」

**Chief AI Ethics Officer** 負責日常治理營運，由 **AI Governance Manager** 協調跨職能落地，下設 AI 倫理與合規團隊。

### AI 治理與 ESG 整合

AI 治理正在融入 ESG（環境、社會、治理）框架，形成「Responsible AI」的評估維度：
- **環境（E）**：AI 訓練與推論的碳足跡、能源消耗
- **社會（S）**：AI 對就業、公平性、隱私的影響
- **治理（G）**：AI 決策透明度、問責機制、合規揭露

建議做法：在董事會相關次委員會（風險委員會或 ESG 委員會）的職責中明確納入 Responsible AI 責任，並至少每年向董事會提交結構性 RAI 報告。

### 與既有公司治理框架的整合

**SOX（Sarbanes-Oxley Act）**：AI 正在進入財務報告流程，需評估 AI 賦能對 SOX 控制程序的重大性影響。美國 Schneider Downs 指出，SOX 控制原則正擴展至 ESG 報告、網路風險揭露及 AI 問責等領域。

**董事信義義務**：美國德拉瓦州（Delaware）法院的信義義務標準現在已涵蓋 AI 監督期望，代表怠於 AI 治理可能構成法律責任。

**COBIT / ISACA**：IT 控制目標框架提供補充 SOX ITGC（一般電腦控制）的結構，幫助組織將既有控制環境延伸至 AI 特定風險。

---

## NIST AI 風險管理框架（AI RMF 1.0）

### 框架概述

NIST AI RMF 1.0 於 2023 年 1 月 26 日正式發布，是美國國家標準與技術研究院（NIST）推出的自願性框架，旨在協助組織識別、評估和管理 AI 系統的風險。截至 2025 年，77% 的組織正在積極建立 AI 治理計畫，但僅 36% 採用了 NIST AI RMF 等正式框架。

### 可信任 AI 的七大特性

NIST AI RMF 以七大可信任 AI（Trustworthy AI）特性為核心價值基礎：

1. **有效可靠**（Valid and Reliable）：AI 系統在預期用途下表現一致且準確
2. **安全**（Safe）：避免對人員、財產或環境造成傷害
3. **安全性與韌性**（Secure and Resilient）：能抵抗攻擊並在異常條件下維持功能
4. **可問責與透明**（Accountable and Transparent）：決策過程可追溯，責任歸屬清晰
5. **可解釋與可詮釋**（Explainable and Interpretable）：使用者能理解 AI 輸出的依據
6. **增強隱私**（Privacy-Enhanced）：尊重並保護個人資訊
7. **公平且管理有害偏見**（Fair with Harmful Bias Managed）：避免歧視性結果

### 四大核心功能

| 功能 | 英文 | 類別數 / 子類別數 | 核心目的 |
|------|------|-----------------|----------|
| 治理 | GOVERN | 6 類 / 19 子類 | 建立組織層級的 AI 風險管理責任與文化 |
| 圖繪 | MAP | 5 類 / 18 子類 | 識別並情境化每個 AI 部署的潛在影響 |
| 量測 | MEASURE | 4 類 / 22 子類 | 以量化或質性方法分析與監控 AI 風險 |
| 管理 | MANAGE | 4 類 / 13 子類 | 分配資源應對識別出的風險 |

#### GOVERN（治理）

建立組織問責制的基礎層：
- 定義領導層的 AI 風險責任
- 設定風險容忍度（Risk Tolerance）邊界
- 分配資源與預算
- 制定讓其他三個功能得以運作的政策

#### MAP（圖繪）

為每個 AI 部署建立情境文件：
- 明確 AI 系統的預期用途與利害關係人
- 記錄潛在的直接與間接影響
- 框架強調：「在評估風險之前，必須先了解哪些 AI 系統正在運作」

#### MEASURE（量測）

採用多元方法持續監控 AI 風險：
- 現代實施越來越強調「持續監控」而非僅靠週期性審查
- 包含量化指標（如偏見測量、模型效能指標）
- 也涵蓋質性評估（如倫理影響評估）

#### MANAGE（管理）

針對已識別風險採取行動：
- 制定風險處理計畫（Risk Treatment Plans）
- 建立事件回應機制
- 管理部署後監控
- 規劃退役（Decommissioning）流程

### Generative AI Profile（NIST AI 600-1）

2024 年 7 月，NIST 發布 **NIST AI 600-1**，即「生成式 AI 側寫（Generative AI Profile）」，依據 2023 年美國行政命令 EO 14110 制定，專為大型語言模型（LLM）與 AI 代理人（AI Agent）量身設計。

**12 大生成式 AI 特定風險類別**：

| 類別 | 說明 |
|------|------|
| 1. 幻覺 / 捏造（Confabulation） | 模型以高度自信產生不實或錯誤內容 |
| 2. CBRN 資訊或能力 | 降低取得化學、生物、放射、核武資訊的門檻 |
| 3. 危險與暴力 / 仇恨內容 | 生成有害、煽動性或歧視性內容 |
| 4. 資料隱私（Data Privacy） | 訓練資料或輸出中的個資洩露風險 |
| 5. 環境影響（Environmental Impacts） | 訓練與推論的高能耗碳排放 |
| 6. 有害偏見與同質化 | 系統性偏見及社會觀點同質化的風險 |
| 7. 人機配置（Human-AI Configuration） | 過度依賴 AI 判斷、人機分工不當 |
| 8. 資訊完整性（Information Integrity） | 深偽、錯誤資訊、宣傳內容的生成 |
| 9. 資訊安全（Information Security） | 提示注入（Prompt Injection）、資料投毒 |
| 10. 智慧財產（Intellectual Property） | 輸出內容的版權侵害風險 |
| 11. 猥褻或貶低性內容 | 生成不雅或貶低特定群體的內容 |
| 12. 供應鏈與元件整合 | 第三方元件（資料、模型、API）引入的風險 |

NIST AI 600-1 針對每個風險類別提供超過 200 項具體治理行動，可對應至 AI RMF 的四大功能。

---

## 企業 Responsible AI 營運模式

### 原則 → 政策 → 流程 → 工具的落地鏈條

企業 Responsible AI（負責任 AI，RAI）的落地需要四個層次的轉化：

```
原則（Principles）
    ↓ 轉化為
政策（Policies）— AI 可接受使用政策、資料治理政策
    ↓ 轉化為
流程（Processes）— 風險分級審查、上線核准閘道
    ↓ 轉化為
工具（Tools）— 模型卡、AI 影響評估、監控儀表板
```

**六大 Responsible AI 原則**：
1. **公平性**（Fairness）：偏見緩解，避免歧視
2. **透明性**（Transparency）：揭露 AI 決策依據
3. **問責性**（Accountability）：明確所有權
4. **安全 / 資安**（Safety/Security）：防止傷害
5. **隱私**（Privacy）：資料最小化
6. **人類監督**（Human Oversight）：依風險等級維持人工控制

### 企業 AI 治理四大組成要素

根據 2025–2026 年企業實踐，有效的 AI 治理架構包含：

1. **AI 可接受使用政策**（AI Acceptable Use Policy）：規範員工使用 AI 工具的行為準則、允許的資料類型、所需的監督層級
2. **企業治理**（Corporate Governance）：定義 AI 部署核准權限與例外處理機制
3. **資料治理**（Data Governance）：規定允許的資料來源、品質標準及生命週期管理
4. **風險管理程序**（Risk Management Procedures）：當 AI 輸出偏離合規標準時的回應規程

### 四層風險分級框架

有效的治理採用風險相稱（risk-proportionate）的審查強度：

| 風險等級 | 風險描述 | 應用範例 | 核准層級 |
|----------|----------|----------|----------|
| 第一級（低） | 低風險 | 文件摘要、會議紀錄 | 部門主管審查 |
| 第二級（中） | 中等風險 | 客服輔助、工作流程自動化 | 總監核准 + 測試 |
| 第三級（高） | 高風險 | 招聘輔助、信貸決策、合規文件 | 副總裁核准 + 獨立驗證 |
| 第四級（關鍵） | 關鍵風險 | 醫療診斷輔助、機密分析 | 高層主管 + 外部稽核 |

### AI 治理成熟度模型

企業可依以下五個層次評估治理成熟度：

| 等級 | 名稱 | 特徵 |
|------|------|------|
| 第 1 級 | **臨時（Ad Hoc）** | 非正式、被動應對，僅有基本意識 |
| 第 2 級 | **已定義（Defined）** | 有文件化政策與角色，但執行不一致 |
| 第 3 級 | **已運作（Operationalized）** | 治理嵌入資料與模型管道，有部分自動化 |
| 第 4 級 | **已量測（Measured）** | KPI 與儀表板追蹤合規、偏見與品質 |
| 第 5 級 | **自適應（Adaptive）** | 動態治理，具備自動化回饋迴路與預測性執法 |

**現況**：大多數企業目前運作於第 1 級或第 2 級，目標不必是立即達到第 5 級，而是系統性地與 AI 成熟度同步推進。

**衡量治理成熟度的三項核心指標**：
- **資料完整性指標**（Data Integrity Index）：使用認證資料集的模型比例
- **可解釋性比率**（Explainability Ratio）：可連結到元資料血緣的 AI 決策比例
- **偏見修正時間**（Bias Remediation Time）：識別並修正偏見的平均時間

### 跨職能 AI 治理委員會

典型的跨職能 AI 治理委員會組成：
- **技術代表**：資料科學家、ML 工程師
- **法律與隱私**：隱私顧問、監管法律專家
- **合規**：合規長、風險管理人員
- **倫理**：AI 倫理師、領域專家
- **業務單位聯絡人**：確保治理不與業務脫節

**最常見的失敗點**：僅具建議功能、無執行授權的委員會；缺乏明確的跨部門問責機制；以及與業務單位脫節的孤立治理組織。

---

## 模型治理與 MLOps 治理

### 模型治理的定義

模型治理（Model Governance）是指在 AI / ML 模型的整個生命週期中，系統性管理模型的開發、部署、監控與退役，以確保模型的準確性、公平性、可靠性及合規性的一套組織政策與技術措施。IBM 將其定義為「確保 AI 模型按預期運作、符合倫理標準，並遵守相關法規的一套框架」。

### 模型卡（Model Cards）

**模型卡**（Model Cards）由 Google 的 Margaret Mitchell 等人於 2019 年提出（論文發表於 ACM FAT* 2019 會議），是針對機器學習模型的標準化文件框架，類似食品的「營養標示」，揭露：

- **預期用途**（Intended Use）：模型設計用於哪些使用情境，明確排除哪些用途
- **效能特性**（Performance Characteristics）：在不同人口群體、使用情境下的指標
- **訓練資料**（Training Data）：資料來源、偏見風險
- **評估指標**（Evaluation Metrics）：精確率、召回率、公平性指標
- **倫理考量**（Ethical Considerations）：已知限制與風險
- **版本資訊**：模型版本、維護者

主要平台（Hugging Face、Google Model Garden）均採用模型卡格式。

### 資料集說明書（Datasheets for Datasets）

**Datasheets for Datasets** 由 Timnit Gebru 等人於 2018 年提出，是針對訓練資料集的標準化文件，涵蓋：
- **動機**：資料集的創建目的
- **組成**：資料的內容與格式
- **收集流程**：如何取得資料
- **標記說明**：標籤的含義與標注方式
- **分發**：授權與使用限制
- **維護**：更新責任與計畫

### 模型清冊（Model Inventory）

模型清冊是企業對其所有 AI/ML 模型進行中央化、系統性記錄的資產清單，涵蓋：
- 模型的所有者（Owner）、用途、風險等級
- 部署狀態（開發中 / 生產中 / 已退役）
- 驗證狀態與最後審查日期
- 第三方與供應商模型的識別

**風險分層**（Risk Tiering）將模型依影響力分為高 / 中 / 低，以決定驗證頻率、監控強度及管理關注度的優先順序。

### 模型生命週期管理

完整的模型生命週期治理涵蓋六個階段：

```
1. 開發（Development） → 2. 驗證（Validation）
→ 3. 上線核准（Approval） → 4. 部署（Deployment）
→ 5. 監控（Monitoring） → 6. 退役（Decommissioning）
```

**模型登記系統（Model Registry）** 是實現生命週期管理的技術基礎，可追蹤每個版本的模型文件、訓練參數、相依套件及部署歷史。主流工具包括：MLflow Model Registry、Databricks Unity Catalog、Weights & Biases、AWS/Azure/GCP 原生登記服務。

### 模型監控與漂移

**概念漂移（Concept Drift）**：現實世界的關係隨時間改變，導致模型預測準確性下降

**資料漂移（Data Drift）**：輸入資料的分佈偏離訓練資料

**監控最佳實踐**：
- 持續追蹤效能指標（KPI、精確率、召回率）
- 偵測輸入資料的統計分佈變化
- 設定閾值觸發自動警示與重新訓練流程

### 模型風險管理（SR 11-7）

美國聯準會（Federal Reserve）於 2011 年發布的 **SR 11-7（Model Risk Management Guidance）** 是金融機構模型風險管理的核心監管指引，其四大支柱為：

| 支柱 | 說明 |
|------|------|
| **驗證**（Validation） | 確保模型如預期運作，結果符合機構目標 |
| **治理**（Governance） | 透過明確政策與高層監督建立問責制 |
| **文件化**（Documentation） | 建立可追溯的稽核軌跡，全面理解模型風險 |
| **監控**（Monitoring） | 持續追蹤效能，確認模型仍適合其預期用途 |

雖然 SR 11-7 早於現代 AI，監管機構現已將其原則適用於 AI/ML 及生成式 AI 系統。現代應用需額外納入：可解釋性測試、對抗性輸入的穩健性檢查、偏見緩解策略，以及第三方 / 供應商模型的風險監督。

**機構要求**：維護詳細的模型清冊，追蹤使用中、開發中及已退役的模型；設立獨立的模型風險管理（MRM）委員會，提供獨立監督並向高層管理層呈報議題。

---

## 企業 AI 風險類型

### 1. 偏見與公平性風險（Bias & Fairness Risk）

AI 模型可能在訓練資料或演算法設計中包含偏見，導致對特定群體的系統性不公平結果。

**主要類型**：
- **歷史偏見**：訓練資料反映既有的社會不平等
- **選擇偏見**：訓練資料集不具代表性
- **確認偏見**：AI 系統傾向確認既有假設

**高風險應用場景**：招聘、信貸審核、醫療診斷、刑事司法

**緩解措施**：多樣化訓練資料、定期偏見稽核、採用 Aequitas 等開源偏見評估工具

### 2. 隱私與資料風險（Privacy & Data Risk）

AI 系統的訓練、推論及部署過程中，均存在個人資料遭到不當使用或洩露的風險。

**主要風險**：
- 訓練資料記憶（Training Data Memorization）
- 模型反轉攻擊（Model Inversion Attack）
- 個資重識別（Re-identification）
- 用戶輸入資料外洩給第三方 AI 服務供應商

### 3. 安全性與資安風險（Safety & Security Risk）

**對抗性攻擊（Adversarial Attacks）**：操縱 AI 輸入以誘導錯誤輸出

**提示注入（Prompt Injection）**：惡意指令覆蓋系統提示，導致模型產生非預期行為

**資料投毒（Data Poisoning）**：在訓練階段注入惡意資料，影響模型行為

**供應鏈攻擊**：通過受感染的 AI 元件、預訓練模型或第三方 API 注入漏洞

### 4. 第三方與供應商 AI 風險（Third-Party & Vendor AI Risk）

2025 年，企業最被忽視的關鍵風險之一是第三方供應商生態系統中的 AI 風險：
- AI 供應商往往與 EU AI Act、ISO/IEC 42001 等法規要求不一致
- 近 60% 的組織缺乏對第三方資料交換的全面治理追蹤
- 小型供應商的合規失誤直接成為大型企業客戶的供應鏈漏洞

**應對措施**：AI 特定合約保護條款、供應商盡職調查（AI Due Diligence）、持續供應商監控

### 5. 影子 AI（Shadow AI）

**影子 AI** 是指員工在未獲 IT 或管理層核准的情況下，自行使用 AI 工具處理工作任務（包括生成式 AI 聊天機器人、程式碼助手等）。

**關鍵統計數據（2025）**：
- GenAI 流量於 2024 年激增逾 890%
- Menlo Security 報告企業影子生成式 AI 使用量於 2025 年增加 68%
- 僅 37% 的組織有管理或偵測影子 AI 的政策
- Gartner 預測：到 2030 年，超過 40% 的企業將因未授權的影子 AI 遭遇安全或合規事件

**主要風險**：機密資料外洩（46% 的組織報告過此類事件）、NDA 違約、合規違規、幻覺輸出影響決策品質

**治理應對**：建立 AI 工具登記（AI Tool Registry）記錄核可工具、實施跨職能監督（IT、法務、合規、HR、資安）、定期員工培訓、AI 使用稽核

### 6. 生成式 AI 企業風險（Enterprise GenAI Risks）

**資料外洩（Data Leakage）**：
- 50% 的企業安全主管預期在未來 12 個月內因生成式 AI 工具發生資料外洩事件
- 與影子 AI 相關的資料外洩平均成本達 463 萬美元，比一般洩露事件高約 67 萬美元

**幻覺（Hallucination）**：
- 生成式 AI 以高度自信輸出不實內容，可能導致錯誤決策、客戶誤導

**版權風險（Copyright Risk）**：
- AI 生成的輸出可能無意間近似現有著作，形成版權侵害責任

**過度依賴（Over-Reliance）**：
- NIST AI 600-1 識別的風險：用戶對 AI 判斷的不當依賴，削弱人類監督品質

---

## AI 治理工具與角色

### AI 影響評估（AI Impact Assessment）

AI 影響評估是在部署 AI 系統前，系統性評估其對個人、社會及組織潛在影響的正式流程。

**加拿大 AIA 模型**：加拿大聯邦政府依據《自動化決策指引》開發了演算法影響評估（Algorithmic Impact Assessment, AIA）問卷，強制適用於高影響力 AI 系統，並要求公開結果。

**評估維度**：
- 對個人的影響（隱私、自主性、公平性）
- 對社會的影響（就業、公共服務可及性）
- 法律合規（GDPR、反歧視法）
- 技術風險（模型準確性、魯棒性）

### 演算法影響評估（Algorithmic Impact Assessment, AIA）

演算法影響評估專注於自動化決策系統對受影響群體的辨識與量化，特別關注：
- 差別影響（Disparate Impact）分析
- 相關利害關係人的知情與參與
- 問責機制的建立

### AI 稽核（AI Audit）

AI 稽核是對 AI 系統進行系統性的獨立審查，評估其設計、開發、部署及影響是否符合既定標準。

**主要稽核類型**：
- **技術稽核**：模型效能、準確性、公平性
- **流程稽核**：開發流程、測試方法、部署實踐
- **合規稽核**：符合法規與內部政策
- **倫理稽核**：符合組織 AI 倫理原則

**稽核工具**：
- **Aequitas**：開源偏見稽核工具，評估演算法決策的偏見
- **AI 登記**（AI Registry）：集中記錄已部署 AI 系統的清冊
- **稽核日誌**（Audit Logs）：記錄 AI 系統決策的可追溯記錄

**新興挑戰**：代理式 AI（Agentic AI）由於決策過程往往缺乏清晰的可追蹤性，為稽核與治理帶來重大挑戰（ISACA，2025）。

### AI 政策制定

有效的企業 AI 政策應覆蓋：

1. **範疇定義**：哪些 AI 工具、系統及使用情境受此政策規範
2. **核准機制**：新 AI 系統的評估與部署核准流程
3. **資料使用規則**：允許用於 AI 訓練與推論的資料類型
4. **人類監督要求**：依風險等級規定的人工審查義務
5. **事件報告**：AI 系統失效或不當使用的通報流程
6. **員工培訓**：AI 倫理與合規的教育要求

### 主要治理角色

| 角色 | 主要職責 |
|------|----------|
| 董事會 / 審計委員會 | 最終問責，AI 風險監督 |
| Chief AI Officer（CAIO） | AI 策略與治理架構 |
| Chief AI Ethics Officer | 日常治理營運 |
| AI Governance Manager | 跨職能落地協調 |
| 法務長（GC） | AI 可接受使用政策主要負責人 |
| 資訊長（CIO） | 技術治理與 IT 控制 |
| 資料長（CDO） | 資料治理與品質 |
| 風險長（CRO） | 風險上呈與胃納管理 |
| 模型驗證師 | 獨立模型驗證 |
| AI 倫理師 | 倫理框架應用 |

---

## ISO/IEC 42001 導入

### 標準概述

**ISO/IEC 42001:2023** 是全球第一個可認證的人工智慧管理系統（Artificial Intelligence Management System, AIMS）標準，由國際標準組織（ISO）與國際電工委員會（IEC）於 2023 年 12 月聯合發布。

標準目的：為組織提供一個系統性框架，在整個 AI 生命週期中確保 AI 技術的道德使用、透明度、公平性、問責制及隱私保護。

**認證特性**：ISO/IEC 42001 是可認證的管理系統標準（類似 ISO 9001 品質管理、ISO/IEC 27001 資訊安全），組織可通過認可的第三方認證機構取得正式認證，認證通常有效期三年，並設有年度或半年一次的監督稽核。

### 標準結構：七大核心條款

ISO/IEC 42001 採用高階架構（HLS），包含七個核心條款：

| 條款 | 名稱 | 核心要求 |
|------|------|----------|
| 第 4 條 | 組織情境與範疇 | 定義 AIMS 範疇，識別利害關係人需求 |
| 第 5 條 | 領導力 | 取得管理層承諾，建立 AI 政策 |
| 第 6 條 | 規劃與風險 | 識別風險，執行 AI 影響評估 |
| 第 7 條 | 支持 | 確保資源、技能與文件化 |
| 第 8 條 | 運作 | 管控 AI 開發、部署與監控 |
| 第 9 條 | 績效評估 | 持續監控與稽核 AI 系統 |
| 第 10 條 | 改善 | 透過矯正措施驅動持續改善 |

### 企業導入的六步驟流程

1. **定義組織情境與 AI 範疇**：識別組織使用的 AI 系統類型及其影響
2. **取得高層領導承諾**：AI 政策由高層背書，確保預算與資源
3. **執行全面風險評估**：識別 AI 生命週期中的風險，執行 AI 影響評估
4. **建立運作控制與監督**：開發 / 部署的審批閘道，文件化控制措施
5. **持續績效監控與稽核**：定期內部稽核，維護稽核日誌
6. **驅動持續改善**：作為活的管理系統，隨 AI 技術和法規變化演進

### 與其他標準的對比

| 標準 | 目的 | 焦點 |
|------|------|------|
| ISO/IEC 27001 | 資訊安全管理 | 基礎安全控制 |
| SOC 2 | 客戶服務保障 | 信任服務準則 |
| ISO/IEC 42001 | AI 治理與負責任 AI | 透明度、倫理、合規 |
| NIST AI RMF | AI 風險管理 | 自願性框架，無認證機制 |

### 與 EU AI Act 的連動

ISO/IEC 42001 的 AIMS 要求與 EU AI Act 的高風險 AI 系統義務高度契合，認證機構（如 BSI、DNV）已在向企業推廣以 ISO/IEC 42001 作為 EU AI Act 合規的準備路徑。

BSI 是首個獲得英國 UKAS 認可的 ISO/IEC 42001 認證機構；美國 ANSI 國家認可委員會（ANAB）也已提供認可服務。

### 2025–2026 年主要企業認證案例

- **SAP**：2025 年取得旗下核心 AI 服務的 ISO/IEC 42001 認證
- **Cornerstone**：2025 年 12 月宣布 Cornerstone Galaxy 取得 ISO/IEC 42001 認證
- **Microsoft**：在微軟合規文件中揭露符合 ISO/IEC 42001 的措施

### 導入挑戰與解決方案

| 挑戰 | 解決方案 |
|------|----------|
| 跨部門協調難度高 | 設置有明確規程的專責 AI 治理團隊 |
| 資源投入強度大 | 優先處理高影響力 AI 應用，分階段導入 |
| 詳細模型文件要求 | 採用自動化血緣追蹤與標準化模型卡 |
| 技能缺口 | 實施跨 IT、合規與產品團隊的持續培訓 |
| 法規持續演變 | 與 GDPR、NIST AI RMF 等更廣泛框架整合 |

---

## 時間軸事件

```
2011-00-00 | SR 11-7 發布 | 美國聯準會發布《模型風險管理指引》，奠定金融機構模型風險管理基礎 | https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm
2018-00-00 | Datasheets for Datasets | Timnit Gebru 等人提出資料集說明書概念，推動 AI 文件透明化 | https://www.researchgate.net/publication/324055506_Datasheets_for_Datasets
2019-01-00 | Model Cards 發表 | Margaret Mitchell 等人在 ACM FAT* 2019 發表模型卡框架 | https://arxiv.org/pdf/1810.03993
2023-01-26 | NIST AI RMF 1.0 發布 | NIST 發布自願性 AI 風險管理框架，包含 GOVERN/MAP/MEASURE/MANAGE 四大功能 | https://www.nist.gov/itl/ai-risk-management-framework
2023-12-00 | ISO/IEC 42001:2023 發布 | 全球首個可認證 AI 管理系統標準正式發布 | https://www.iso.org/standard/42001
2024-07-00 | NIST AI 600-1 發布 | NIST 發布生成式 AI 側寫，識別 12 大生成式 AI 特定風險類別 | https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
2025-00-00 | 企業 CAIO 普及 | 逾 76% 大型組織設立 Chief AI Officer，較 2024 年的 26% 大幅躍升 | https://www.digital-chiefs.de/en/chief-ai-officer-2026/
2025-00-00 | 董事會 AI 監督四倍成長 | 40% 企業將 AI 監督指派給董事會委員會，較 2024 年 11% 大幅增加 | https://corpgov.law.harvard.edu/2025/05/27/governance-of-ai-a-critical-imperative-for-todays-boards-2/
2025-00-00 | SAP 取得 ISO/IEC 42001 認證 | SAP 宣布核心 AI 服務取得首批企業級 ISO 42001 認證 | https://community.sap.com/t5/technology-blog-posts-by-sap/iso-42001-certification-the-new-benchmark-for-ai-vendor-selection/ba-p/14331515
2025-12-00 | Cornerstone Galaxy ISO 42001 認證 | Cornerstone 宣布旗艦 AI 平台取得 ISO/IEC 42001 認證 | https://www.cornerstoneondemand.com/resources/article/iso-iec-42001-explained/
2025-00-00 | 影子 AI 成企業頭號隱患 | Menlo Security 報告企業影子生成式 AI 使用量增 68%；平均洩露成本達 463 萬美元 | https://www.isaca.org/resources/news-and-trends/industry-news/2025/the-rise-of-shadow-ai-auditing-unauthorized-ai-tools-in-the-enterprise
2026-01-22 | WilmerHale AI 治理優先事項 | 發布 2026 年董事會 AI 監督關鍵優先事項，強調德拉瓦州信義義務新標準 | https://www.wilmerhale.com/en/insights/client-alerts/20260122-board-oversight-and-artificial-intelligence-key-governance-priorities-for-2026
2026-08-00 | EU AI Act 全面生效（預定） | 高風險 AI 系統義務全面適用，ISO/IEC 42001 成為合規準備路徑 | https://www.digital-chiefs.de/en/chief-ai-officer-2026/
```

---

## 術語

```
AI 治理（AI Governance） | 確保 AI 系統以負責任、可信任且合法方式開發與部署的一套政策、流程與組織機制 | 概念
AI 風險管理框架（AI RMF） | NIST 發布的自願性框架，以 GOVERN/MAP/MEASURE/MANAGE 四大功能組織 AI 風險管理活動 | 框架
可信任 AI（Trustworthy AI） | 符合有效可靠、安全、安全性與韌性、可問責與透明、可解釋、增強隱私、公平七大特性的 AI 系統 | 概念
生成式 AI 側寫（Generative AI Profile, NIST AI 600-1） | NIST 2024 年 7 月發布的補充文件，識別生成式 AI 的 12 大特定風險類別及超過 200 項治理行動 | 框架
模型卡（Model Card） | 由 Mitchell 等人（2019）提出的標準化機器學習模型文件，揭露預期用途、效能特性、倫理考量及限制 | 工具
資料集說明書（Datasheets for Datasets） | 由 Gebru 等人（2018）提出的標準化資料集文件，涵蓋動機、組成、收集流程、分發及維護資訊 | 工具
模型清冊（Model Inventory） | 企業對所有 AI/ML 模型進行中央化記錄的資產清單，包含所有者、用途、風險等級及部署狀態 | 工具
模型登記（Model Registry） | 追蹤 ML 模型版本、元資料、部署進度及稽核日誌的集中化技術系統 | 工具
模型漂移（Model Drift） | 模型效能隨時間衰退的現象，分為概念漂移（現實關係改變）與資料漂移（輸入分佈改變）兩類 | 概念
SR 11-7 | 美國聯準會 2011 年發布的《模型風險管理指引》，要求金融機構對模型進行系統性驗證、文件化與監控 | 框架
ISO/IEC 42001 | 2023 年 12 月發布的全球首個可認證人工智慧管理系統（AIMS）標準，採用高階架構（HLS） | 框架
AI 影響評估（AI Impact Assessment） | 在部署 AI 系統前，系統性評估其對個人、社會及組織潛在影響的正式流程 | 工具
演算法影響評估（Algorithmic Impact Assessment, AIA） | 專注於自動化決策系統對受影響群體影響的正式評估，加拿大聯邦政府已強制實施 | 工具
AI 稽核（AI Audit） | 對 AI 系統進行獨立的系統性審查，評估其設計、開發、部署及影響是否符合既定標準 | 工具
影子 AI（Shadow AI） | 員工在未獲 IT 或管理層核准的情況下，自行使用 AI 工具處理工作任務的現象 | 概念
幻覺（Hallucination / Confabulation） | 生成式 AI 以高度自信輸出不實、捏造或無根據內容的現象 | 概念
提示注入（Prompt Injection） | 通過惡意輸入覆蓋 AI 系統的系統提示，誘導模型產生非預期行為的攻擊手法 | 概念
資料投毒（Data Poisoning） | 在訓練階段注入惡意資料，影響模型學習行為的攻擊手法 | 概念
概念漂移（Concept Drift） | 現實世界的統計關係隨時間改變，導致訓練好的模型預測準確性下降的現象 | 概念
AI 治理成熟度模型（AI Governance Maturity Model） | 以臨時/已定義/已運作/已量測/自適應五個層次評估組織 AI 治理能力進展的框架 | 框架
Chief AI Officer（CAIO） | 負責企業 AI 戰略、治理架構及監管合規的高層主管，可分為策略型與平台型兩種定位 | 角色
Chief AI Ethics Officer | 負責 AI 治理日常營運，確保 AI 開發與部署符合倫理原則與政策的高層主管 | 角色
模型風險管理（MRM） | 識別和管理 AI/ML 模型在設計或使用上的錯誤可能導致不利業務影響的風險管理實踐 | 概念
AI 可接受使用政策（AI Acceptable Use Policy） | 規範組織成員如何合法、合規、合倫理地使用 AI 工具的正式政策文件 | 工具
風險分層（Risk Tiering） | 依據模型或 AI 系統的潛在影響，將其分類為不同風險等級，以決定治理強度的方法 | 概念
人工智慧管理系統（AIMS） | ISO/IEC 42001 定義的管理系統，系統性管理組織開發與使用 AI 的相關政策、流程與控制措施 | 框架
ESG 與 AI 整合 | 將 AI 系統的環境影響、社會影響及治理問責融入 ESG 報告與評估框架的實踐 | 概念
模型驗證（Model Validation） | 獨立評估 AI/ML 模型的概念健全性、持續監控及結果分析，確保模型如預期運作的過程（SR 11-7 核心要求） | 概念
```

---

## 來源清單

- Governance of AI: A Critical Imperative for Today's Boards — https://corpgov.law.harvard.edu/2025/05/27/governance-of-ai-a-critical-imperative-for-todays-boards-2/ （2025-05-27）
- How Boards Can Lead in a World Remade by AI — https://corpgov.law.harvard.edu/2026/02/19/how-boards-can-lead-in-a-world-remade-by-ai/ （2026-02-19）
- Board Oversight and Artificial Intelligence: Key Governance Priorities for 2026, WilmerHale — https://www.wilmerhale.com/en/insights/client-alerts/20260122-board-oversight-and-artificial-intelligence-key-governance-priorities-for-2026 （2026-01-22）
- Chief AI Officer 2026: Real Role or Just Another C-Level Title?, Digital Chiefs — https://www.digital-chiefs.de/en/chief-ai-officer-2026/ （2026）
- NIST AI Risk Management Framework (AI RMF 1.0), NIST — https://www.nist.gov/itl/ai-risk-management-framework （2023-01-26）
- NIST AI 600-1: Artificial Intelligence Risk Management Framework — Generative Artificial Intelligence Profile — https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf （2024-07）
- NIST AI RMF: Enterprise Guide, Witness.AI — https://witness.ai/blog/nist-ai-risk-management-framework/ （2025）
- NIST AI RMF 1.0 Complete Guide, Modulos Docs — https://docs.modulos.ai/frameworks/nist-ai-rmf/index （2025）
- Generative AI Risk Management: Complete Guide to NIST AI 600-1, Libertify — https://www.libertify.com/interactive-library/nist-ai-600-1-generative-ai-profile/ （2025）
- Building a Practical Framework for AI Governance Maturity in the Enterprise, Dataversity — https://www.dataversity.net/articles/building-a-practical-framework-for-ai-governance-maturity-in-the-enterprise/ （2025）
- Enterprise AI Governance Framework: 4 Components, 4 Risk Tiers, Iternal.ai — https://iternal.ai/ai-governance-framework （2026）
- How to Establish an AI Ethics Board and Governance Committee, Agility at Scale — https://agility-at-scale.com/ai/governance/ai-ethics-board-and-governance-committee/ （2025）
- What Is Model Governance?, IBM — https://www.ibm.com/think/topics/model-governance （2025）
- How Model Risk Management Teams Comply with SR 11-7, ValidMind — https://validmind.com/blog/sr-11-7-model-risk-management-compliance/ （2025）
- Model Registry and Governance | MLOps Production AI 2025, Introl — https://introl.com/blog/model-registry-governance-mlops-production-ai-2025 （2025）
- Model Cards for Model Reporting, Mitchell et al. (2019), ACM FAccT — https://arxiv.org/pdf/1810.03993 （2019）
- Datasheets for Datasets, Gebru et al. (2018) — https://www.researchgate.net/publication/324055506_Datasheets_for_Datasets （2018）
- The Rise of Shadow AI: Auditing Unauthorized AI Tools in the Enterprise, ISACA — https://www.isaca.org/resources/news-and-trends/industry-news/2025/the-rise-of-shadow-ai-auditing-unauthorized-ai-tools-in-the-enterprise （2025）
- Shadow AI explained: risks, costs, and enterprise governance, Vectra AI — https://www.vectra.ai/topics/shadow-ai （2025）
- [2026 Update] The Full Scope of Shadow AI Risk, QueryPie — https://www.querypie.com/features/documentation/blog/27/shadow-ai-risk-cxo-countermeasures （2026）
- AI Risk in Third-Party Vendor Tools, Accorian — https://www.accorian.com/ai-risk-in-third-party-vendor-tools/ （2025）
- AI Risk Disclosures in the S&P 500, Harvard Law School Forum on Corporate Governance — https://corpgov.law.harvard.edu/2025/10/15/ai-risk-disclosures-in-the-sp-500-reputation-cybersecurity-and-regulation/ （2025-10-15）
- ISO/IEC 42001:2023, International Organization for Standardization — https://www.iso.org/standard/42001 （2023-12）
- Understanding ISO/IEC 42001: Features, Types & Best Practices, Lasso Security — https://www.lasso.security/blog/iso-iec-42001 （2025）
- ISO 42001 Certification: The New Benchmark for AI Vendor Selection, SAP Community — https://community.sap.com/t5/technology-blog-posts-by-sap/iso-42001-certification-the-new-benchmark-for-ai-vendor-selection/ba-p/14331515 （2025）
- ISO/IEC 42001 explained: Why Responsible AI and AI Governance are critical, Cornerstone — https://www.cornerstoneondemand.com/resources/article/iso-iec-42001-explained/ （2025-12）
- ISO/IEC 42001:2023 Compliance, Microsoft Learn — https://learn.microsoft.com/en-us/compliance/regulatory/offering-iso-42001 （2025）
- The power of AI in efficient SOX compliance, Grant Thornton — https://www.grantthornton.com/insights/articles/advisory/2025/the-power-of-ai-in-efficient-sox-compliance （2025）
- Board Oversight of AI Triples Since '24, Corporate Compliance Insights — https://www.corporatecomplianceinsights.com/news-roundup-october-31-2025/ （2025-10-31）
- What Is an AI Audit?, IBM — https://www.ibm.com/think/topics/ai-audit （2025）
- NIST AI RMF 600-1 12 Official Risk Categories, Modulos Docs — https://docs.modulos.ai/frameworks/nist-ai-rmf/generative-ai-profile （2025）
