# 全球 AI 法規框架

> 資料查閱日期：2026-06-06｜資料涵蓋期間：截至 2026 年 6 月

---

## 概述

全球 AI 監理格局正在快速分化，形成三種截然不同的路線：歐盟的**立法導向（rule-based）**、美國的**行政命令加各州立法**、中國的**分項規範加黨政主導**，以及英國的**原則導向（principle-based）**。

**歐盟**於 2024 年 8 月通過《AI 法》（EU AI Act，Regulation (EU) 2024/1689），成為全球第一部針對 AI 系統的橫向立法。其核心邏輯是「風險分級」——依 AI 系統對基本權利的潛在危害高低，分為不可接受（禁止）、高風險（嚴格合規）、有限風險（透明義務）、最小風險（自願）四個層次。義務以分期方式自 2025 年起逐步生效，至 2027 年全面落地。

**美國**聯邦層面缺乏統一立法。拜登時期的行政命令 EO 14110（2023）確立了以安全評估為核心的管理框架，但川普於 2025 年 1 月上任首日即撤銷，改以「鬆綁監管、維持 AI 霸主地位」為主旋律。各州則積極立法，科羅拉多、加州等走在前沿；而川普於 2025 年 12 月再簽行政命令，試圖以聯邦框架壓制州法，引發憲法爭議。

**中國大陸**採取「分類分場景立法」策略——先後頒布算法推薦、深度合成、生成式 AI 三項部門規章，形成以網信辦（CAC）為核心的備案監管體系，並於 2025 年 9 月新增 AI 生成內容強制標識義務。全面性《人工智能法》草案仍在研議中，預計最早 2026 年提交全國人大審議。

**英國**維持「親創新、原則導向」立場，以 2023 年白皮書確立的五項跨部門原則為基礎，由現有監管機構（FCA、ICO、CMA 等）在各自領域執行，不設新的 AI 專屬法規。AI Safety Institute（2024 年成立）於 2025 年 2 月更名為 AI Security Institute，聚焦前沿模型的安全評估。

整體而言，法規競爭與「監管套利」已成現實課題：企業需同時應對歐盟的高合規成本、美國的聯邦─州雙軌格局，以及中國的強制備案要求。多邊協調機制（G7 廣島進程、GPAI、OECD AI 原則）仍以軟法為主，尚未形成具法律效力的國際條約。

---

## 歐盟 EU AI Act

### 基本資訊

| 項目 | 內容 |
|------|------|
| 正式名稱 | Regulation (EU) 2024/1689 on Artificial Intelligence（《人工智慧法》） |
| 中文慣稱 | 歐盟 AI 法／EU AI Act |
| 主管機關 | 歐盟 AI 辦公室（EU AI Office，設於歐盟執委會 DG CNECT）；各會員國另設國家主管機關（National Competent Authorities, NCA） |
| 發布日期 | 2024 年 7 月 12 日（官方公報）；2024 年 8 月 1 日生效 |
| 適用對象 | 在歐盟境內投放市場或啟用 AI 系統之提供者（provider）、部署者（deployer），以及受歐盟進口商或授權代表覆蓋的第三國提供者 |

### 風險分級架構

EU AI Act 採四層風險分類（Risk Tiers）：

#### 第一層：不可接受風險（Unacceptable Risk）——全面禁止

依 Article 5，下列 AI 系統自 **2025 年 2 月 2 日**起被完全禁止：

1. **潛意識或欺騙性操控**：以不可察覺或蓄意誤導的方式扭曲個人行為，且可能造成重大傷害。
2. **剝削特定群體脆弱性**：以 AI 利用兒童、身心障礙者等弱勢族群的脆弱性，扭曲其行為。
3. **社會評分系統（Social Scoring）**：政府機關依社會行為或個人特徵對自然人分類，導致不平等對待。
4. **生物特徵類別化（敏感屬性）**：推斷個人種族、政治意見、工會成員身分、宗教信仰、性生活或性取向等。
5. **大規模人臉辨識資料庫建立**：未針對性地爬取網路或 CCTV 影像以建立或擴充人臉辨識資料庫。
6. **職場與教育場所情緒辨識**：在工作場所或教育機構使用情緒識別 AI。
7. **公共場所即時遠端生物識別（執法用途）**：法執機構在公開可進入場所即時使用，僅有極窄的例外（恐怖主義、失蹤兒童、嚴重犯罪追緝）。
8. **AI 犯罪風險預測（基於個人特徵）**：僅憑個人特徵（側寫）預測其犯罪可能性。

> **注意**（2026 年新增）：AI Omnibus 修正案另增一項禁止——自 **2026 年 12 月 2 日**起，禁止非合意親密影像生成（nudifier）應用程式。（此條款尚屬草案，請注意追蹤最終立法。）

#### 第二層：高風險（High Risk）——嚴格合規

Annex III 列舉八大類別高風險 AI 系統，須進行合規評估（conformity assessment）、登記於歐盟資料庫，並符合風險管理、資料治理、日誌紀錄、人工監督等要求：

| 類別 | 典型應用 |
|------|---------|
| 1. 生物特徵辨識 | 身分識別、情緒辨識（非職場/教育場所）|
| 2. 關鍵基礎設施 | 電網、水資源、道路交通安全元件 |
| 3. 教育與職業訓練 | 入學資格評估、考試監控 |
| 4. 就業與工作管理 | 招聘篩選、績效評估、升遷/解僱決策 |
| 5. 基本服務 | 社會救助資格、信用評分、保險、醫療分診 |
| 6. 執法 | 犯罪風險評估、測謊、證據可信度分析 |
| 7. 移民與邊境管控 | 簽證/庇護申請審查、邊境監控 |
| 8. 司法與民主程序 | 司法輔助、選舉影響工具 |

高風險系統若確認不對決策結果造成重大影響，可豁免適用（Article 6 的「去高風險化」條款）。

#### 第三層：有限風險（Limited Risk）——透明義務

- 聊天機器人：必須告知使用者其正在與 AI 互動。
- 深度偽造（deepfake）：生成的影像/影片/音訊須標示為 AI 生成。
- GPAI 提供者：需公開訓練資料摘要。

#### 第四層：最小風險（Minimal Risk）——自願守則

- 垃圾郵件過濾、AI 遊戲、AI 輔助寫作等——無強制義務，歐盟鼓勵自願遵循行為準則。

---

### 通用型 AI（GPAI / Foundation Model）專章義務

《AI 法》Chapter V 及 Article 51–56 針對**通用型 AI 模型（General-Purpose AI Models, GPAI）**設立專屬義務：

**適用定義**：以超過 10²³ FLOPs 訓練、能生成文字/圖像/音訊/視訊等輸出的 AI 模型。

**所有 GPAI 提供者的基本義務**（自 2025 年 8 月 2 日起）：
- 維護詳細技術文件
- 公開訓練資料摘要（含著作權合規說明）
- 遵守歐盟著作權法
- 與下游用戶及主管機關分享必要資訊

**具「系統性風險（Systemic Risk）」的 GPAI 額外義務**：
- 認定標準：訓練使用超過 10²⁵ FLOPs（或由 AI Office 評定具高衝擊能力）
- 須向 AI Office 通報
- 進行對抗性測試（adversarial testing / red-teaming）
- 建立事件報告機制
- 採取網路安全保護措施
- 公開最先進能力評估摘要

**過渡安排**：2025 年 8 月 2 日前已上市的 GPAI 模型，延至 **2027 年 8 月 2 日**前完成合規。

**GPAI 行為準則（GPAI Code of Practice）**：自願性工具，由 AI Office 主導制定，協助 GPAI 提供者（含非歐盟企業）理解及履行義務。

---

### 實施時間表

| 日期 | 里程碑 |
|------|--------|
| 2024-07-12 | 法規刊登歐盟官方公報（OJ） |
| 2024-08-01 | 法規正式生效，開始計算各義務倒計時 |
| 2025-02-02 | **第一波**：不可接受風險禁止措施生效；AI 識讀義務（AI Literacy）生效 |
| 2025-05-02 | 歐盟執委會須完成 GPAI 行為準則 |
| 2025-08-02 | **第二波**：GPAI 義務生效；AI Office 正式運作；罰則框架生效；各會員國須完成國家主管機關指定 |
| 2026-02-02 | 執委會公布 Article 6 高風險分類指引 |
| 2026-08-02 | **第三波**：大部分高風險 AI 義務生效；AI Office 取得完整執法權 |
| 2027-08-02 | **第四波**：Article 6(1) 高風險義務全面適用；2025 年前已上市的 GPAI 須完成合規 |

---

### 罰則（Penalties）

| 違規類型 | 最高罰款 |
|---------|---------|
| 違反不可接受風險禁止規定（Article 5） | **3,500 萬歐元**或全球年營收 **7%**，取較高者 |
| 違反其他義務（如高風險義務） | **1,500 萬歐元**或全球年營收 **3%** |
| 向主管機關提供不實/不完整資訊 | **750 萬歐元**或全球年營收 **1%** |
| 中小企業（SMEs）與新創 | 罰款上限按比例降低 |

> 比較：EU AI Act 頂層罰款（7%）幾乎是 GDPR 上限（4%）的兩倍。

---

### AI Office（歐盟 AI 辦公室）

- **設立依據**：歐盟執委會 2024 年 1 月 24 日決定
- **正式運作**：2025 年 8 月 2 日
- **所屬機構**：歐盟執委會 DG CNECT（通訊網絡、內容與技術總署）
- **核心職能**：
  - 監管及執法（針對 GPAI 模型）
  - 進行 GPAI 模型評估（包括系統性風險模型）
  - 維護 EU AI Act 的技術標準工作
  - 支援各會員國 NCA
- **執法時間**：對 GPAI 的完整執法權自 **2026 年 8 月 2 日**起
- **輔助治理機構**：AI Board（AI 理事會）、Scientific Panel（科學小組）、Advisory Forum（顧問論壇）

---

## 美國 AI 監理

### 拜登政府：行政命令 EO 14110（2023）

- **正式名稱**：Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence
- **簽署日期**：2023 年 10 月 30 日
- **核心內容**：
  - 要求訓練超過特定計算門檻（compute threshold）的基礎模型開發商向聯邦政府提交安全測試結果（依《國防生產法》DPA）
  - 指示 NIST 制訂 AI 安全標準與測試指引
  - 要求商務部（DOC）制訂 AI 生成內容的浮水印/認證機制
  - 涵蓋勞工保護、移民加速、隱私研究等跨領域措施
- **廢止**：川普於 **2025 年 1 月 20 日**就職首日簽署命令，廢止 EO 14110。

---

### 川普政府：新 AI 政策路線（2025 起）

#### EO 14179：移除 AI 領導地位障礙（2025-01-23）

- **正式名稱**：Removing Barriers to American Leadership in Artificial Intelligence
- **核心方向**：
  - 廢除被認為阻礙創新的聯邦 AI 規範
  - 明確將「美國 AI 霸主地位」列為國家優先目標
  - 指示 OMB 取消或修訂不符合新政策的現行指引
  - 促進開源 AI 模型流通
  - 確保聯邦 AI 系統「去意識形態偏見」

#### AI Action Plan「Winning the Race」（2025-07-23）

- 白宮正式發布 90 點政策藍圖，三大支柱：
  1. **加速創新**：移除法規障礙、推動開放模型
  2. **建設 AI 基礎設施**：電力、資料中心、AI 特區
  3. **國際外交與安全領導地位**
- 指示 NIST 修訂 AI RMF，刪除「錯誤資訊（misinformation）」「多元平等與包容（DEI）」「氣候變遷」等用語

#### 聯邦─州爭議：EO「確保國家 AI 政策框架」（2025-12-11）

- 設立 **AI Litigation Task Force**（AI 訴訟特別工作組），自 2026 年 1 月 10 日起，對被認定阻礙聯邦 AI 政策的州法提起聯邦訴訟。
- 指示商務部於 90 天內清查「繁苛」州法
- 以聯邦補助金資格作為誘因，促使各州不採行嚴苛 AI 法規
- **保留豁免**：兒童保護、州政府採購、資料中心基礎設施相關州法不在預先占據（preemption）範圍
- **法律爭議**：行政命令不具聯邦立法效力，各州可能援引憲法商業條款抗辯；訴訟結果高度不確定

---

### NIST AI Risk Management Framework（AI RMF 1.0）

- **主管機關**：美國國家標準暨技術研究院（National Institute of Standards and Technology, NIST）
- **發布日期**：2023 年 1 月
- **文件編號**：NIST AI 100-1
- **性質**：自願性框架（非強制），但聯邦機構及高科技產業普遍採用
- **核心四大功能（Core Functions）**：
  - **Govern（治理）**：跨機構 AI 風險政策、問責體系、文化建立
  - **Map（識別）**：辨識特定 AI 系統的背景脈絡與風險
  - **Measure（衡量）**：以定量或定性方式分析、追蹤風險
  - **Manage（管理）**：分配資源應對風險、回應事件、記錄殘餘風險
- **現況**：川普 AI Action Plan（2025 年 7 月）指示 NIST 修訂 AI RMF，但 RMF 1.0 仍是目前業界主要參考標準；修訂後版本尚未正式發布。

---

### 各州 AI 法規

#### 科羅拉多州 AI 法（Colorado AI Act, SB 24-205）

- **通過時間**：2024 年 5 月簽署
- **生效日期**：2026 年 6 月 30 日（原 2026 年 2 月 1 日，因 SB 25B-004 延後）
- **適用對象**：開發或部署「高風險 AI 系統（high-risk AI systems）」的開發者與部署者
- **涵蓋領域**：就業機會、教育入學、金融/信貸、政府基本服務、醫療、住房、保險、法律服務
- **核心義務**：進行影響評估、向消費者揭露 AI 使用情況、建立申訴機制

#### 加州

- **SB 1047（2024）**：大型 AI 模型安全義務法案，被州長 Newsom **拒絕簽署（否決）**，主因為可能影響創新與設定計算資源門檻的爭議性方法
- **AB 2013（2024）**：要求 AI 開發者於 **2026 年 1 月 1 日**前在官網公開訓練資料來源說明（已生效）
- 加州已有超過 38 項 AI 相關法律，包括數位身分驗證、自動決策系統等

#### 深偽/選舉 AI 法規

- 截至 2025 年，**28 個州**已立法管制深偽（deepfake）用於政治廣播
- **30 個州**已立法保護選舉相關 AI 使用，包含對 AI 生成政治廣告的揭露要求
- 加州 AB 2839（AI 生成選舉素材揭露）於 2024 年 10 月被聯邦法院以第一修正案言論自由理由發布禁制令

#### 整體現況

2025 年全美 50 州共引進 1,208 項 AI 相關法案，其中 145 項已立法通過。

---

### OMB 聯邦機構 AI 指引

- 拜登時期：OMB 發布針對聯邦機構使用 AI 的指引（包含人工監督要求）
- 川普政府：EO 14319 要求 OMB 於 **2025 年 11 月 20 日**前發布「無偏見 AI 原則（Unbiased AI Principles）」政府採購指引；聯邦機構須取消被認為帶有意識形態偏見的 AI 評估要求

---

## 中國大陸 AI 監理

### 整體架構概覽

中國大陸的 AI 監管採「分類分場景」策略，由**國家互聯網信息辦公室（網信辦，CAC）**主導，公安部、工信部、市場監管總局等多部門聯合執法。目前已形成三層規範體系：

| 層次 | 法規 | 生效時間 |
|------|------|---------|
| 算法推薦 | 《互聯網信息服務算法推薦管理規定》 | 2022-03-01 |
| 深度合成 | 《互聯網信息服務深度合成管理規定》 | 2023-01-10 |
| 生成式 AI | 《生成式人工智能服務管理暫行辦法》 | 2023-08-15 |
| AI 生成標識 | 《人工智能生成合成內容標識辦法》 | 2025-09-01 |
| 全面性 AI 法 | （草案研議中） | 預計 2026–2027 |

---

### 一、《互聯網信息服務算法推薦管理規定》

- **英文對照**：Provisions on the Management of Algorithmic Recommendations for Internet Information Services
- **頒布單位**：網信辦、工業和信息化部、公安部、市場監管總局（四部門聯合）
- **頒布日期**：2021 年 12 月 31 日
- **生效日期**：2022 年 3 月 1 日
- **適用對象**：在中國境內提供具有**輿論屬性或社會動員能力**的算法推薦服務之業者
- **核心內容**：
  - 禁止設置誘導用戶沉迷、過度消費的算法模型
  - 提供用戶關閉個性化推薦的選項（用戶控制權）
  - 算法透明度：須向用戶解釋推薦邏輯的基本原則
  - 保護未成年人：未成年人使用算法推薦服務時的特殊保護機制
  - 為老年人、殘障人士提供適齡化/無障礙功能
- **備案要求**：具有輿論屬性或社會動員能力的服務者，須於**提供服務後 10 個工作日**內向網信辦完成算法備案，並報送算法自評估報告、公示內容等

---

### 二、《互聯網信息服務深度合成管理規定》

- **英文對照**：Provisions on the Administration of Deep Synthesis Internet Information Services
- **頒布單位**：網信辦（聯合公安部、工信部等）
- **生效日期**：2023 年 1 月 10 日
- **適用對象**：提供文字、圖片、音訊、視頻、虛擬場景等深度合成技術服務之業者與用戶
- **核心內容**：
  - **實名制**：服務使用者須以手機號碼或身份證件完成實名認證
  - **標識義務**：深度合成服務提供者須對合成的圖片、視頻、音訊內容進行**顯著標識**
  - **技術管控**：禁止使用深度合成技術製作、散布政治謠言、虛假資訊或侵害他人名譽、肖像之內容
  - **備案要求**：具輿論屬性或社會動員能力的深度合成服務提供者，須完成備案，並在服務界面顯著位置標示備案編號

---

### 三、《生成式人工智能服務管理暫行辦法》

- **英文對照**：Interim Measures for the Administration of Generative Artificial Intelligence Services
- **頒布單位**：網信辦等七部門聯合
- **頒布日期**：2023 年 7 月 10 日
- **生效日期**：2023 年 8 月 15 日
- **適用對象**：在中國境內向公衆提供生成式 AI 服務之業者（含境外業者）；企業間（B2B）非向公衆服務者部分豁免
- **核心內容**：
  - **內容安全**：生成內容不得違反「社會主義核心價值觀」，不得危害國家政治安全、社會穩定
  - **訓練資料合規**：訓練資料須符合智慧財產權、個人資訊保護、數據安全等法規
  - **標識要求**：生成圖片、視頻等內容須依《深度合成規定》進行標識
  - **用戶實名**：同算法推薦，服務使用者須完成實名認證
  - **算法備案**：提供具輿論屬性或社會動員能力之服務者，須完成算法備案
  - **安全評估**：生效前，符合條件的服務須先向網信辦完成安全評估
- **備案現況**：截至 2024 年 12 月 31 日，共 302 款生成式 AI 服務已在網信辦完成備案，其中 2024 年新增 238 款

---

### 四、《人工智能生成合成內容標識辦法》

- **英文對照**：Measures for Identification of AI-Generated Synthetic Content
- **頒布單位**：網信辦、工信部、公安部、廣電總局（四部門聯合）
- **頒布日期**：2025 年 3 月 14 日
- **生效日期**：**2025 年 9 月 1 日**
- **核心內容**：
  - **顯式標識（Explicit Labeling）**：在 AI 生成的文字、圖片、音訊、視訊等內容中，以文字、聲音、圖形等使用者可明顯感知的方式標示「AI 生成」
  - **隱式標識（Implicit Labeling）**：以技術手段（浮水印、元資料等）將服務提供者名稱、內容屬性、著作權資訊等嵌入生成內容
  - 配套發布強制性國家標準（GB），具有法律強制效力

---

### 五、全面性《人工智能法》草案進展

- **現況**：截至 2026 年 6 月，中國尚無正式通過的全面性 AI 法律
- **2025 年立法動態**：多名全國人大代表提案推動《人工智能法》立法；2025 年人大常委會立法規劃載明：「人工智能相關立法事項應由相關部門抓緊研究起草，適時安排審議」
- **預期時間**：全國人大已宣布 2026 年優先推進 AI 立法研究，最快可能於 2026–2027 年提出草案
- **現行路線**：中國暫未推出全面 AI 法，而以試點、標準、分類規則管控 AI 風險，同時降低企業合規成本

---

## 英國 AI 監理

### 核心框架

英國目前採取**「親創新、原則導向（pro-innovation, principle-based）」**的 AI 監管路線，不設獨立 AI 專屬立法，由現有部門監管機構在各自職權範圍內執行 AI 治理。

### 2023 年白皮書：親創新 AI 監管方針

- **正式名稱**：A Pro-Innovation Approach to AI Regulation（2023）
- **主管機關**：科學、創新與技術部（DSIT）
- **五大跨部門原則**（Cross-cutting Principles）：
  1. 安全、保障與韌性（Safety, Security & Robustness）
  2. 透明度與可解釋性（Transparency & Explainability）
  3. 公平性（Fairness）
  4. 問責性與治理（Accountability & Governance）
  5. 申訴與救濟（Contestability & Redress）
- **執行模式**：由各部門監管機構（FCA、ICO、CMA、HSE 等）在現有法規框架下執行，非設置新的 AI 專責機構或新法
- **立法走向**：英國政府指出未來可能於 2026 年提出《AI 法案》，惟仍強調「先測試、再立法」的理念

### AI Safety Institute（2024）→ AI Security Institute（2025）

- **成立**：2023 年底宣布、2024 年正式運作
- **更名**：2025 年 2 月由 AI Safety Institute 更名為 **AI Security Institute（AISI）**，反映從「安全風險（safety）」轉向「安全與國家安全（security）」的政策重心
- **資金**：政府於 2025 年支出審查中撥款 **2.4 億英鎊**
- **現況**：AISI 擁有逾 100 名研究員，已對 30 個前沿模型進行測試評估
- **職能**：前沿模型安全評估、對抗性測試、研究 AI 社會影響

### 2025 年 AI Opportunities Action Plan

- **宣布時間**：2025 年 1 月（Keir Starmer 政府）
- **核心**：50 點行動計劃，聚焦 AI 基礎設施與經濟成長
  - 設立「AI 成長特區（AI Growth Zones）」加速資料中心審批
  - 建設政府主導的國家資料中心（目標：2030 年前具備 100,000 GPU）
  - 成立**國家數據圖書館（National Data Library, NDL）**，政府注資逾 1 億英鎊
- **監管立場**：英國明確以「英式 AI 監管（distinctly British AI regulation）」定位，在引進 EU AI Act 以外維持競爭優勢

### 現況與展望

- 英國目前無 AI 專屬立法；現有 GDPR（英國版，UK GDPR）、電腦濫用法等仍適用於 AI 系統
- 政府 2026 年可能提出正式 AI 法案，但「親創新」立場不太可能大幅收緊監管
- 英國脫歐後，不受 EU AI Act 直接管轄，但在歐盟業務仍須適用 EU AI Act

---

## 其他重要法域

### 加拿大

- **AIDA（Artificial Intelligence and Data Act，人工智能與資料法）**：作為 Bill C-27 一部分，於 2022 年提出，2025 年 1 月因國會選舉解散而**廢止（died on the order paper）**。加拿大目前無聯邦層級 AI 專屬法律。
- **省級補充**：安大略省 Bill 194 針對公共部門 AI 系統訂有要求；魁北克省 Law 25 強化隱私保護，間接影響 AI 應用。
- **現況**：聯邦 AI 立法重啟時程不明，但預期新政府仍會推動。

### 巴西

- **Bill 2338/2023（巴西 AI 法案）**：2024 年 12 月 10 日參議院通過，2025 年 3 月移交衆議院（衆議院）審查；截至 2026 年 6 月仍在衆議院委員會審查中，尚未簽署成法。
- **核心內容**：以風險分級方式監管 AI，對高風險系統設更嚴格要求，建立申訴機制，並由巴西國家資料保護局（ANPD）負責監管
- **罰則**：草案包含行政罰款機制（細節尚未最終確定）

### 南韓

- **《人工智能基本法》（AI Basic Act）**：2024 年 12 月 26 日國會通過，**2026 年 1 月 22 日**正式生效，使南韓成為繼歐盟後，全球第二個通過全面 AI 法律的主要法域。
- **核心義務**：高影響力 AI 或生成式 AI 服務提供者須提前通知用戶正在與 AI 互動；建立風險管理系統；進行影響評估；境外提供者須設國內代表人
- **罰則**：最高 3,000 萬韓圓（約 2.2 萬美元）行政罰款；2026 年設有至少一年緩衝執法期（嚴重傷亡或人權侵害案件除外）
- **主管機關**：科學與資訊通信技術部（MSIT）

### 日本

- **核心定位**：「最 AI 友善國家（most AI-friendly country）」，以促進產業應用為優先
- **法規框架**：非強制性《人工智能相關技術研究開發及利用推進法》（**AI 推進法**，2025 年 5 月 28 日國會通過），加上 2024 年 METI/MIC 聯合發布的《AI 事業者指引》（AI Guidelines for Business）
- **特色**：AI 推進法無明文罰則，依賴業界自律與聲譽機制；指引已更新至 1.01 版（2025 年 3 月）
- **G7 Hiroshima AI Process**：日本主導的 G7 廣島 AI 進程確立 11 項國際 AI 指導原則，為全球軟法協調的重要基礎

### 印度

- **現況**：無正式 AI 專屬法律；電子資訊部（MeitY）發布 AI 諮詢文件；2023 年因反彈撤銷草案中的 AI 內容上市前批准要求
- **個人資料保護法（DPDP Act 2023）**：影響 AI 訓練資料的合法使用

### 新加坡

- **方針**：同英國，以原則導向為主，積極推動 AI 治理框架（2020 年 Model AI Governance Framework 2.0）；2024 年更新《可信賴 AI 驗證框架（AI Verify）》，為亞太地區 AI 治理領先者之一

---

## 時間軸事件

```
2021-12-31 | 中國《算法推薦管理規定》頒布 | 全球首部針對算法推薦服務的部門規章，2022-03-01 生效 | https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm
2022-03-01 | 中國《算法推薦管理規定》生效 | 要求算法備案、用戶選擇退出、保護未成年人 | https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm
2022-12-11 | 中國《深度合成管理規定》頒布 | 規範深偽技術，要求實名制與標識義務，2023-01-10 生效 | https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm
2023-01-10 | 中國《深度合成管理規定》生效 | 深偽/換臉服務須標識、備案，用戶須實名 | https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm
2023-01-26 | NIST AI RMF 1.0 發布 | 美國提出自願性 AI 風險管理框架（GOVERN/MAP/MEASURE/MANAGE） | https://www.nist.gov/itl/ai-risk-management-framework
2023-07-10 | 中國《生成式 AI 管理暫行辦法》頒布 | 七部門聯合，規範生成式 AI 服務之內容安全、備案、標識義務 | https://www.cac.gov.cn/2023-07/13/c_1690898326795531.htm
2023-08-15 | 中國《生成式 AI 管理暫行辦法》生效 | 全球首部生成式 AI 專屬法規正式施行 | https://www.cac.gov.cn/2023-07/13/c_1690898326795531.htm
2023-10-30 | 美國拜登簽署 EO 14110 | 要求大型模型安全報告、NIST 標準、AI 浮水印機制等 | https://en.wikipedia.org/wiki/Executive_Order_14110
2024-01-24 | 歐盟 AI Office 設立決定 | 歐盟執委會決定在 DG CNECT 設置 AI Office，監管 GPAI 義務 | https://digital-strategy.ec.europa.eu/en/policies/ai-office
2024-04 | 日本《AI 事業者指引》發布 | METI/MIC 聯合，涵蓋 10 項跨部門原則及使用案例 | https://www.morganlewis.com/blogs/sourcingatmorganlewis/2025/01/the-future-of-artificial-intelligence-in-the-united-kingdom-ai-opportunities-action-plan
2024-05 | 美國科羅拉多 AI Act 簽署 | 全美首部完整 AI 系統立法，涵蓋高風險 AI 八大領域 | https://www.nortonrosefulbright.com/en-us/knowledge/publications/18733d31/colorado-enacts-revised-ai-law
2024-07-12 | EU AI Act 刊登官方公報 | 正式通知各會員國，20 日後生效 | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
2024-08-01 | EU AI Act 生效 | 義務倒計時開始，首波 2025-02-02 適用 | https://artificialintelligenceact.eu/implementation-timeline/
2024-10 | 美國加州 AB 2839 遭禁制令 | 聯邦法院以第一修正案為由，暫停深偽選舉素材揭露法 | https://www.pillsburylaw.com/en/news-and-insights/sb-1047-california-ai-laws.html
2024-12-10 | 巴西參議院通過 AI 法案 Bill 2338 | 通過後移送衆議院，尚未簽署成法 | https://www.loc.gov/item/global-legal-monitor/2025-05-23/brazil-senate-advances-discussions-on-bill-to-regulate-ai-use/
2024-12-26 | 南韓《AI 基本法》通過 | 南韓國會通過，為全球繼歐盟後第二部全面 AI 法，2026-01-22 生效 | https://www.trade.gov/market-intelligence/south-korea-ai-basic-act
2025-01-13 | 英國 AI Opportunities Action Plan 發布 | Starmer 政府 50 點計劃，聚焦 AI Growth Zones 與基礎設施 | https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach
2025-01-20 | 川普撤銷 EO 14110 | 就職首日廢止拜登 AI 行政命令，全面轉向鬆綁政策 | https://www.whitehouse.gov/presidential-actions/2025/01/removing-barriers-to-american-leadership-in-artificial-intelligence/
2025-01-23 | 川普簽署 EO 14179 | 確立美國 AI 領導地位優先，移除聯邦 AI 法規障礙 | https://oecd.ai/en/dashboards/policy-initiatives/executive-order-14179-removing-barriers-to-american-leadership-in-ai
2025-02-02 | EU AI Act 第一波義務生效 | 禁止不可接受風險 AI；AI 識讀義務生效 | https://artificialintelligenceact.eu/implementation-timeline/
2025-02 | 英國 AI Safety Institute 更名 | 改名為 AI Security Institute（AISI），聚焦國家安全風險 | https://www.kpmg.com/xx/en/our-insights/ai-and-technology/the-uk-s-evolving-pro-innovation-approach-to-ai-regulation.html
2025-03-14 | 中國《AI 生成合成內容標識辦法》頒布 | 四部門聯合，強制顯式+隱式雙重標識，2025-09-01 生效 | https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm
2025-05-28 | 日本《AI 推進法》通過 | 國會通過，無明文罰則，定位 AI 為國家戰略資產 | https://fpf.org/blog/understanding-japans-ai-promotion-act-an-innovation-first-blueprint-for-ai-regulation/
2025-07-23 | 美國 AI Action Plan「Winning the Race」發布 | 白宮 90 點政策藍圖，三大支柱：創新、基礎設施、國際領導 | https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf
2025-08-02 | EU AI Act 第二波義務生效 | GPAI 義務、罰則框架、AI Office 正式運作 | https://artificialintelligenceact.eu/implementation-timeline/
2025-09-01 | 中國《AI 生成合成內容標識辦法》生效 | 強制 AI 生成內容雙重標識義務正式施行 | https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm
2025-12-11 | 川普簽署聯邦 AI 框架 EO | 建立 AI 訴訟特別工作組，試圖以聯邦框架壓制州 AI 法 | https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/
2026-01-10 | 美國 AI Litigation Task Force 啟動 | DOJ 開始審查並挑戰各州「阻礙聯邦 AI 政策」的法律 | https://www.gibsondunn.com/president-trump-latest-executive-order-on-ai-seeks-to-preempt-state-laws/
2026-01-22 | 南韓《AI 基本法》正式生效 | 高影響力 AI 提供者開始承擔通知、風險評估等義務 | https://www.trade.gov/market-intelligence/south-korea-artificial-intelligence-ai-basic-act
2026-06-30 | 美國科羅拉多 AI Act 生效 | 高風險 AI 開發者與部署者須完成合規 | https://www.nortonrosefulbright.com/en-us/knowledge/publications/18733d31/colorado-enacts-revised-ai-law
2026-08-02 | EU AI Act 第三波義務生效 | 大部分高風險 AI 系統義務生效；AI Office 取得完整執法權 | https://artificialintelligenceact.eu/implementation-timeline/
2027-08-02 | EU AI Act 第四波義務生效 | Article 6(1) 高風險義務完全適用；舊有 GPAI 模型須合規 | https://artificialintelligenceact.eu/implementation-timeline/
```

---

## 術語

```
EU AI Act（歐盟人工智慧法）| 歐盟 2024 年通過的 AI 橫向監管法規（Regulation (EU) 2024/1689），首部針對 AI 系統的全面性立法，採風險分級框架 | 法規
Risk Classification（風險分級）| EU AI Act 核心機制，依 AI 系統對基本權利的潛在危害分為不可接受、高風險、有限風險、最小風險四層 | 概念
Unacceptable Risk（不可接受風險）| EU AI Act 最高風險級別，涵蓋社會評分、即時生物識別等被完全禁止的 AI 行為 | 概念
High-Risk AI System（高風險 AI 系統）| EU AI Act Annex III 所列八大類別 AI 系統，須進行合規評估、登記及滿足嚴格義務 | 概念
GPAI（General-Purpose AI Model，通用型 AI 模型）| 以大規模訓練算力訓練、可執行多種任務的 AI 模型，如 GPT-4、Gemini 等；EU AI Act Chapter V 另設專屬義務 | 技術
Systemic Risk（系統性風險）| EU AI Act 中對訓練使用超過 10²⁵ FLOPs 的 GPAI 模型的認定，須承擔最高等級的 GPAI 義務 | 概念
AI Office（歐盟 AI 辦公室）| 設於歐盟執委會 DG CNECT 的 GPAI 監管機構，2025 年 8 月 2 日正式運作，2026 年 8 月取得完整執法權 | 機構
Conformity Assessment（合規評估）| 高風險 AI 系統投入市場前須完成的評估程序，確認符合 EU AI Act 要求，包括第三方認證或自我評估 | 概念
Executive Order（行政命令）| 美國總統直接向聯邦行政機構發布的指令，具有政策法律效力但低於國會立法，可被繼任總統撤銷 | 法規
EO 14110 | 拜登政府 2023 年 AI 行政命令，要求基礎模型安全報告及聯邦 AI 標準，2025 年 1 月 20 日被川普撤銷 | 法規
EO 14179 | 川普政府 2025 年 AI 行政命令，以移除 AI 法規障礙、維持美國 AI 主導地位為核心政策 | 法規
NIST AI RMF（美國 AI 風險管理框架）| NIST 於 2023 年 1 月發布的自願性框架（AI 100-1），涵蓋 GOVERN、MAP、MEASURE、MANAGE 四大核心功能 | 法規
AI Litigation Task Force（AI 訴訟特別工作組）| 依川普 2025 年 12 月行政命令設於 DOJ，負責挑戰阻礙聯邦 AI 政策的各州法律 | 機構
Colorado AI Act（科羅拉多 AI 法）| 美國首部完整的州級 AI 法，涵蓋高風險 AI 系統的影響評估、合規義務及申訴機制，2026 年 6 月 30 日生效 | 法規
Deepfake（深偽技術）| 利用 AI 生成或篡改視訊/音訊/影像，使之逼真但不真實的技術；各國 AI 法規普遍要求深偽內容須標識或揭露 | 技術
CAC（網信辦）| 中國國家互聯網信息辦公室（Cyberspace Administration of China），中國 AI 監管的核心主管機關 | 機構
算法備案（Algorithm Registration）| 中國監管制度，要求具輿論屬性或社會動員能力的算法/AI 服務於提供後 10 個工作日內向網信辦完成登記備案 | 概念
《生成式 AI 暫行辦法》（Interim Measures for Generative AI Services）| 中國 2023 年針對生成式 AI 服務的管理辦法，全球首部此類法規，要求內容安全、標識、實名制與備案 | 法規
《AI 生成合成內容標識辦法》（Measures for Identification of AI-Generated Content）| 中國 2025 年 9 月施行，要求 AI 生成內容同時具備顯式標識（使用者可感知）與隱式標識（技術浮水印） | 法規
Pro-Innovation Approach（親創新監管方針）| 英國 AI 監管的核心立場，強調以現有部門監管機構執行原則，避免過度立法阻礙 AI 發展 | 概念
AI Security Institute（AI 安全研究院，AISI）| 英國政府 AI 安全評估機構，原名 AI Safety Institute，2025 年 2 月更名，聚焦前沿模型測試與國家安全風險 | 機構
AI Basic Act（AI 基本法）| 南韓 2024 年 12 月通過、2026 年 1 月生效的 AI 框架法，使南韓成為繼歐盟後第二個通過全面 AI 法律的主要法域 | 法規
AIDA（Artificial Intelligence and Data Act，人工智能與資料法）| 加拿大聯邦 AI 法案（Bill C-27 一部分），2025 年 1 月因國會解散廢止，聯邦 AI 立法重啟時程未定 | 法規
G7 Hiroshima AI Process（G7 廣島 AI 進程）| 日本主導的 G7 AI 政策協調機制（2023），確立 11 項國際 AI 開發與使用指導原則，為全球軟法協調基礎 | 法規
OECD AI Principles（OECD AI 原則）| 2019 年 OECD 提出的 AI 設計與部署原則，強調包容性成長、以人為本、透明度、安全韌性、問責，為多國立法參考基礎 | 概念
Social Scoring（社會評分）| 依據個人社會行為或特徵對其進行系統性評分與分類，並以此決定資源分配的 AI 應用；EU AI Act 明確列為不可接受風險，絕對禁止 | 概念
Regulatory Sandbox（監管沙盒）| EU AI Act 要求各會員國設立的受控實驗環境，允許業者在監管機構監督下測試創新 AI 系統，豁免部分義務 | 概念
FLOPs（浮點運算次數）| 衡量 AI 模型訓練計算量的單位；EU AI Act 以 10²³ FLOPs 作為 GPAI 認定門檻，10²⁵ FLOPs 作為系統性風險認定門檻 | 技術
```

---

## 來源清單

- EU AI Act Full Text (Regulation (EU) 2024/1689) — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai（查閱：2026-06-06）
- EU AI Act Implementation Timeline — https://artificialintelligenceact.eu/implementation-timeline/（查閱：2026-06-06）
- High-level Summary of the AI Act — https://artificialintelligenceact.eu/high-level-summary/（查閱：2026-06-06）
- EU AI Act: GPAI Obligations from August 2025 — Baker McKenzie — https://www.bakermckenzie.com/en/insight/publications/2025/08/general-purpose-ai-obligations（查閱：2026-06-06）
- EU AI Act GPAI Guidelines (European Commission) — https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers（查閱：2026-06-06）
- EU AI Office — https://digital-strategy.ec.europa.eu/en/policies/ai-office（查閱：2026-06-06）
- DLA Piper: Latest wave of EU AI Act obligations, August 2025 — https://www.dlapiper.com/en-us/insights/publications/2025/08/latest-wave-of-obligations-under-the-eu-ai-act-take-effect（查閱：2026-06-06）
- EU AI Act Annex III: High-Risk AI Systems — https://artificialintelligenceact.eu/annex/3/（查閱：2026-06-06）
- Modulos: EU AI Act Prohibited Practices — https://www.modulos.ai/blog/eu-ai-act-prohibited-practices/（查閱：2026-06-06）
- Executive Order 14110 (Biden) — Wikipedia — https://en.wikipedia.org/wiki/Executive_Order_14110（查閱：2026-06-06）
- Trump EO 14179: Removing Barriers to American Leadership in AI — https://www.whitehouse.gov/presidential-actions/2025/01/removing-barriers-to-american-leadership-in-artificial-intelligence/（查閱：2026-06-06）
- OECD.AI: EO 14179 Summary — https://oecd.ai/en/dashboards/policy-initiatives/executive-order-14179-removing-barriers-to-american-leadership-in-ai（查閱：2026-06-06）
- America's AI Action Plan "Winning the Race" (July 2025) — https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf（發布：2025-07-23；查閱：2026-06-06）
- Trump EO on National AI Policy Framework (December 2025) — https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/（發布：2025-12-11；查閱：2026-06-06）
- Gibson Dunn: Trump EO Preempting State AI Laws — https://www.gibsondunn.com/president-trump-latest-executive-order-on-ai-seeks-to-preempt-state-laws/（查閱：2026-06-06）
- NIST AI Risk Management Framework 1.0 — https://www.nist.gov/itl/ai-risk-management-framework（查閱：2026-06-06）
- Colorado AI Act (Norton Rose Fulbright) — https://www.nortonrosefulbright.com/en-us/knowledge/publications/18733d31/colorado-enacts-revised-ai-law（查閱：2026-06-06）
- California AI Laws (Pillsbury) — https://www.pillsburylaw.com/en/news-and-insights/sb-1047-california-ai-laws.html（查閱：2026-06-06）
- State AI Laws 2026 — https://www.ailawsbystate.com/blog/ai-laws-by-state-complete-guide-2026（查閱：2026-06-06）
- Deepfake Legislation Tracker — https://stackcyber.com/posts/ai-deepfake-laws（查閱：2026-06-06）
- 中國《互聯網信息服務算法推薦管理規定》（網信辦官網）— https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm（發布：2021-12-31；查閱：2026-06-06）
- 中國《互聯網信息服務深度合成管理規定》（網信辦官網）— https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm（發布：2022-12-11；查閱：2026-06-06）
- 中國《生成式人工智能服務管理暫行辦法》（網信辦官網）— https://www.cac.gov.cn/2023-07/13/c_1690898326795531.htm（發布：2023-07-13；查閱：2026-06-06）
- 中國《人工智能生成合成內容標識辦法》（網信辦官網）— https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm（發布：2025-03-14；查閱：2026-06-06）
- 聖島智財：中國 AI 生成合成內容標識新制及影響 — https://www.saint-island.com.tw/TW/News/News_Info.aspx?IT=News_1&CID=266&ID=143289（查閱：2026-06-06）
- China's AI Law: Recent Developments (Geopolitechs) — https://www.geopolitechsorg/p/chinas-ai-law-recent-developments（查閱：2026-06-06）
- UK AI Regulation: A Pro-Innovation Approach (GOV.UK) — https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach（查閱：2026-06-06）
- UK AI Opportunities Action Plan: One Year On — https://www.gov.uk/government/publications/ai-opportunities-action-plan-one-year-on（查閱：2026-06-06）
- KPMG: UK's Evolving Pro-Innovation AI Regulation — https://kpmg.com/xx/en/our-insights/ai-and-technology/the-uk-s-evolving-pro-innovation-approach-to-ai-regulation.html（查閱：2026-06-06）
- White & Case: AI Watch - UK — https://www.whitecase.com/insight-our-thinking/ai-watch-global-regulatory-tracker-united-kingdom（查閱：2026-06-06）
- Canada AIDA Overview (ISED) — https://ised-isde.canada.ca/site/innovation-better-canada/en/artificial-intelligence-and-data-act（查閱：2026-06-06）
- Brazil AI Bill 2338 (Library of Congress) — https://www.loc.gov/item/global-legal-monitor/2025-05-23/brazil-senate-advances-discussions-on-bill-to-regulate-ai-use/（發布：2025-05-23；查閱：2026-06-06）
- South Korea AI Basic Act (US ITA) — https://www.trade.gov/market-intelligence/south-korea-artificial-intelligence-ai-basic-act（查閱：2026-06-06）
- OneTrust: South Korea AI Basic Act Compliance — https://www.onetrust.com/blog/south-koreas-new-ai-law-what-it-means-for-organizations-and-how-to-prepare/（查閱：2026-06-06）
- Japan's AI Promotion Act (FPF) — https://fpf.org/blog/understanding-japans-ai-promotion-act-an-innovation-first-blueprint-for-ai-regulation/（查閱：2026-06-06）
- Japan AI Regulation 2025 (Nemko) — https://digital.nemko.com/regulations/ai-regulation-japan（查閱：2026-06-06）
