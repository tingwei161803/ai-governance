# 地緣政治、運算治理、時間軸與案例

## 概述

AI 治理已從學術討論演變為地緣政治競爭的核心戰場。2022 年以來，以晶片與算力為核心的技術民族主義急速升溫，使 AI 治理不再只是倫理或法規問題，而是國家安全、經濟競爭力、地緣影響力的綜合博弈。

美中兩國正在從技術標準、出口管制、資料流通到 AI 軍事應用等多個維度展開全面競爭。美國商務部工業安全局（BIS）自 2022 年起多次更新先進晶片出口管制，試圖以算力封鎖減緩中國 AI 發展速度；中國則以稀土、鎵、鍺出口管制反制，並加速自主晶片研發。台灣的台積電（TSMC）因掌握全球超過 90% 最先進晶片製造能力，成為這場競爭中的核心地緣政治籌碼。

運算治理（Compute Governance）作為新興治理工具，主張透過追蹤、登記、設定訓練算力門檻（如美國 EO 的 10²⁶ FLOP、EU AI Act 的 10²⁵ FLOP）來識別高風險 AI 系統。算力的集中性使其天然具備治理槓桿效應——晶片製造高度集中於少數廠商，出口管制能有效切斷算力供應鏈。

資料主權與主權 AI（Sovereign AI）亦是新興治理趨勢，各國政府強調對 AI 全鏈路（資料、模型、基礎設施）的自主控制，避免對外部雲端服務或模型的戰略依賴。國際間，從 GDPR 到 UNESCO 建議書、從 OECD 原則到 EU AI Act，全球 AI 治理框架日趨成形，但美中之間的規範競爭仍是影響全球走向的最大變數。

本章彙整 AI 治理地緣政治面向的核心知識，包括中美脫鉤、運算治理機制、資料主權趨勢、2016–2026 年完整治理時間軸、重大案例研究，以及跨領域核心術語。

---

## 中美 AI 脫鉤與出口管制

### 美國對中晶片出口管制演進（2022–2025）

**2022 年 10 月（第一波管制）**  
美國商務部 BIS 發布史上最嚴晶片出口管制規則，針對中國、澳門禁止出口 NVIDIA A100、H100 等高端 GPU，以及製程設備（14nm 以下）。AMD 等廠商同受限制。此舉標誌美中科技脫鉤從「緊張」升至「正式切斷」階段。

**NVIDIA 的中國客製化晶片策略**  
管制發布後，NVIDIA 推出降規版本：
- **A800**：A100 的 NVLink 頻寬從 600 GB/s 降至 400 GB/s
- **H800**：H100 的互聯頻寬從 900 GB/s 降至約 300 GB/s
- **H20**：霍珀架構大幅降規版本，是當時合規門檻以下的最高端選項

**2023 年 10 月（第二波管制）**  
BIS 更新規則，新增總算力上限與效能密度限制，封堵 A800 與 H800 漏洞。H20 成為唯一仍在管制門檻以下的高端 AI 加速器。同時，管制擴及設備維護、零件供應及軟體更新。

**2025 年 1 月（AI Diffusion Rule）**  
拜登政府於 2025 年 1 月 13 日頒布《人工智慧擴散框架》（Framework for Artificial Intelligence Diffusion），首次對 AI 模型權重（model weights）實施出口管制，並建立三層次國家分組架構：第一層（盟友國）幾乎不受限，第二層（多數國家）有中度限制，第三層（中國等）有嚴格限制。

**2025 年 5 月（Trump 廢除 AI Diffusion Rule）**  
川普政府於 2025 年 5 月 13 日宣布廢除前任 AI Diffusion Rule，承諾另訂替代規則。儘管規則暫停執行，BIS 指出 AI 出口仍有其他管制依據。

**2025 年 8 月（H20 交易安排）**  
美國政府與 NVIDIA、AMD 達成協議，允許向中國銷售部分 AI 晶片（NVIDIA H20、AMD MI308），條件為美國政府抽取 15% 銷售收益。

### 實體清單（Entity List）

美國商務部的實體清單列管被認定有危害美國國家安全或外交政策利益之企業：
- **2019 年**：華為（Huawei）及其 70+ 子公司被列入，限制取得美國技術
- **2020 年 12 月**：中芯國際（SMIC）被列入，鑒於其與中國軍工複合體關聯之實據
- **2022 年後**：更多中國半導體、AI 企業相繼被列入
- **2025 年**：台灣亦將華為、中芯納入本國戰略高科技商品實體清單

### CHIPS 與科學法（CHIPS and Science Act, 2022）

2022 年 8 月 9 日，拜登總統簽署《CHIPS 與科學法》，核心目標為重振美國本土半導體製造：
- **390 億美元**補貼用於美國本土晶片製造
- **25%** 先進製造投資稅收抵免
- **130 億美元**用於半導體研發與人才培育
- **1,740 億美元**用於整體科技研究生態系統

實施成果：帶動超過 4,500 億美元私人投資，覆蓋 90+ 項目；台積電亞利桑那廠取得 66 億美元補貼，預計 2030 年生產全球約 1/5 最先進晶片；Intel、Samsung、Micron 等均有受益。

### 台灣在中間的角色

台積電（TSMC）掌握全球 64% 的晶片代工市場份額（2024 年），生產全球超過 90% 最先進晶片，使台灣成為中美半導體競爭中的關鍵節點：
- **美方視角**：台積電是維持 AI 領先的生命線，CHIPS Act 推動其在美國設廠
- **中方視角**：台灣是獲取先進晶片製造能力的目標，一旦取得台積電，可大幅壓縮中國半導體差距
- **台灣的兩難**：必須在美中之間維持平衡，同時面對「若美國不再依賴台灣晶片，是否仍有保台動機？」的戰略悖論
- TSMC 同時在日本（90 億美元）、德國德勒斯登設廠，降低地緣集中風險

### 中國反制措施

**《出口管制法》（2020 年）**  
中國於 2020 年 10 月正式實施《出口管制法》，建立雙用途商品出口管制體系，賦予政府廣泛的出口管制授權。

**鎵、鍺出口管制（2023 年 7 月）**  
中國商務部宣布對鎵、鍺實施出口許可管制，中國全球鎵供給份額逾 80%、鍺約 60%。此舉被廣泛解讀為對美半導體管制的反制。相關價格應聲上漲：鎵在 2023 年 10 月達每公斤 1,975 元人民幣，較 7 月漲幅逾 18%，全球漲幅達 68%。

**石墨出口管制（2023 年 10 月）**  
對石墨材料實施類似終端用戶許可證管制，石墨是電池（電動車及儲能）的關鍵材料。

**全面出口禁令（2024 年 12 月）**  
緊接美國 2024 年 12 月 2 日新一輪晶片管制後，中國商務部宣布對鎵、鍺、銻及超硬材料實施對美出口禁令，對雙用途石墨材料加強管控。

### 盟友協調：荷蘭 ASML、日本

美國積極協調盟友對中晶片設備出口管制：
- **ASML（荷蘭）**：最先進 EUV（極紫外光）微影機早已禁止出口中國。2024 年 9 月，荷蘭進一步要求 ASML 申請許可證方能出售部分 DUV 浸潤式設備（1970i、1980i）給中國客戶
- **日本**：Tokyo Electron、Nikon 等設備商亦受美日協調出口管制影響
- **2026 年 MATCH Act（提案中）**：美國立法提案要求盟友在 150 天內對齊美國出口管制標準，否則面臨制裁

---

## 運算治理（Compute Governance）

### 概念與原理

運算治理是以算力（computational resources）作為 AI 治理槓桿的新興政策工具。其核心邏輯：訓練前沿 AI 模型需要大量、高度集中的算力，而算力依賴特定晶片（GPU/TPU），後者的製造極度集中（TSMC、NVIDIA 等）。因此，透過管控晶片供應或追蹤算力使用，可識別並監管最高風險 AI 系統的開發。

### 美國：拜登行政命令的算力門檻

**拜登 EO 14110（2023 年 10 月）** 設定 10²⁶ FLOP 作為觸發報告義務的閾值：
- 訓練算力超過 **10²⁶ FLOP** 的模型開發者須向聯邦政府申報
- 訓練算力超過 **10²³ FLOP**（主要用於生物序列資料）的模型亦需申報
- 算力密度超過 **10²⁰ FLOP/秒** 的資料中心叢集須申報
- 閾值設計原則：約比 GPT-4 訓練算力高出 5 倍，「當前模型不觸發，但下一代前沿模型可能觸發」

**2025 年 1 月 20 日**：川普就職首日即廢除 EO 14110，AI 報告義務隨之取消。

### EU AI Act 的 GPAI 算力門檻

EU AI Act 建立兩層算力門檻：
- **10²³ FLOP**：推定為「通用目的 AI 模型」（GPAI），須符合透明度與文件要求
- **10²⁵ FLOP**：推定具「系統性風險」（systemic risk），面臨最嚴格監管義務，包括：
  - 兩週內通知歐盟 AI 辦公室
  - 對抗性測試（adversarial testing）
  - 事件回報義務
  - 維護算力估算方法論記錄（誤差容許 30%）
  
**生效時間表**：
- 2025 年 8 月 2 日：GPAI 模型義務正式生效（2024 年 8 月 1 日後上市的模型即時適用）
- 2026 年 8 月 2 日：歐盟 AI 辦公室的執法權正式啟動

### 算力追蹤與晶片登記

- **晶片水印（chip watermarking）**：部分研究者建議在 GPU 韌體層面嵌入識別標記，追蹤其最終用途
- **雲端算力報告**：拜登 EO 要求雲端供應商在向外國客戶提供算力超過門檻時通知政府
- **境外算力執法**：AI Diffusion Rule（雖已被撤銷）嘗試對模型權重實施出口管制，以防止境外訓練繞過晶片管制

---

## 資料主權與主權 AI

### 資料主權（Data Sovereignty）與在地化

資料主權指個人或國家對其資料的法律主張與控制權，涵蓋資料的蒐集、儲存、處理、跨境傳輸等面向。截至 2023 年，全球已有 **62 個國家** 設有資料本地化或跨境傳輸控制要求。

主要監管框架：
- **GDPR（歐盟，2018）**：第五章規範個人資料的跨境傳輸，需依賴充分性決定（adequacy decision）、標準合約條款（SCC）等機制
- **中國《資料安全法》（2021）**、**《個人資訊保護法》（PIPL，2021）**：對「重要資料」及跨境傳輸設有嚴格限制，敏感資料須在境內存儲
- **印度 DPDP 法（2023）**：建立個人資料治理框架，對資料受託人設有同意義務
- **美國 DOJ 資料安全計畫（2025 年 4 月生效）**：限制「受管轄交易」中敏感美國個人資料流向「受關切國家」（含中、俄）
- **EU 資料法（Data Act，2025 年 9 月生效）**：強化資料主權法律基礎

### 主權 AI（Sovereign AI）

主權 AI 是指一個國家控制整個 AI 價值鏈（資料、模型、基礎設施）的能力與戰略，以避免對外部技術的依賴。

**背景與規模**：
- 主權雲市場 2024 年達 75.9 億美元，預計以每年近 30% 速度成長至 2034 年
- IDC 預測主權雲市場將從 2025 年的 128 億美元成長至 2030 年的 580 億美元（年複合成長率 35.2%）
- Deloitte 2026 年調查：93% 企業主管認為 AI 主權是最重要的技術治理議題（2024 年僅 41%）

**各國主權 AI 行動**：
- **沙烏地阿拉伯**：啟動 1,000 億美元「Project Transcendence」，支持本土 AI 模型 Al-Mujadilah（阿拉伯語 LLM）
- **印度**：訓練 BharatGPT，使用區域資料與多語言框架，與 DPDP 法規對齊
- **法國**：Mistral AI 作為主權 AI 模型旗手，獲 EU 市場優勢定位
- **阿聯酋**：Falcon 系列開源模型，定位中東 AI 主權先鋒

**DeepSeek 案例的主權 AI 啟示**：義大利（2025 年 1 月 30 日）、比利時等國以資料主權為由封鎖 DeepSeek，因其將多數用戶資料存儲於中國境內。此案引發全球對第三方 AI 服務資料主權風險的廣泛關注。

---

## 案例研究

### 案例一：紐約時報 v. OpenAI & Microsoft（NYT v. OpenAI）

**背景**  
2023 年 12 月 27 日，《紐約時報》在紐約南區聯邦地方法院對 Microsoft 和 OpenAI 提起著作權侵權訴訟，指控兩公司未經授權使用「數百萬篇」版權文章訓練 AI 模型。

**爭點**
- 未授權使用版權新聞內容訓練 LLM 是否構成著作權侵權？
- 被告援引「合理使用」（fair use）抗辯是否成立？
- AI 生成內容是否構成對新聞出版商的「市場替代」？
- 原告主張模型在 verbatim（逐字）複製方面表現明顯，提出具體示例佐證

**結果**  
訴訟持續進行中（截至 2025–2026 年），NYT 主張數十億美元損害賠償。此案被廣泛視為 AI 訓練資料版權的標誌性案件。

**治理啟示**  
- 網路爬取訓練資料的版權邊界亟需法律釐清
- AI 生成內容對原創媒體的「市場替代效應」是新興法律理論
- 此案結果將影響全球 AI 訓練資料授權模式

---

### 案例二：Getty Images v. Stability AI

**背景**  
2023 年 2 月 2 日，Getty Images 對 Stability AI 提起訴訟，指控後者侵犯超過 1,200 萬張照片的著作權與商標權，用於訓練 Stable Diffusion 圖像生成模型。

**爭點**
- 以版權圖像訓練生成式 AI 是否構成侵權？
- Stable Diffusion 輸出的圖像有時帶有 Getty 浮水印殘跡，是否構成商標侵權？
- 訴訟管轄地爭議：Getty 原在德拉瓦州提訟，Stability AI 申請移交北加州

**結果**  
案件持續中，2024 年 7 月 Getty 提交第二次修訂訴狀，雙方進行管轄地相關取證程序。

**治理啟示**  
- 圖像生成 AI 的訓練資料版權問題比文字模型更為直觀（浮水印殘留為有力物證）
- 訓練資料授權市場（如 Adobe 的倫理 AI 授權）可能成為主流解決路徑

---

### 案例三：NVIDIA 收購 ARM 失敗（2020–2022）

**背景**  
2020 年 9 月，NVIDIA 宣布以 400 億美元收購英國晶片架構設計商 ARM Limited（由 SoftBank 持有），是半導體史上最大規模交易。ARM 的架構授權被超過 500 家公司採用，覆蓋手機、資料中心、汽車、IoT 等幾乎所有運算領域。

**爭點**
- 垂直整合疑慮：NVIDIA 擁有 ARM 後，是否會對競爭對手（高通、Apple、AMD）差別授權或提高授權費？
- FTC（2021 年 12 月）對此提起訴訟，指控交易損害競爭
- 英國 CMA 進行國家安全及競爭審查
- 歐盟啟動全面反壟斷調查
- 中國監管機構亦持保留態度

**結果**  
2022 年 2 月 8 日，NVIDIA 與 SoftBank 宣布放棄交易。ARM 隨後於 2023 年在納斯達克重新 IPO。

**治理啟示**  
- 晶片架構層（instruction set architecture）是 AI 供應鏈的最底層控制點，反壟斷審查極為嚴格
- 多國聯合監管可有效阻止「贏者全拿」式垂直整合
- AI 時代的反壟斷監管需考量「潛在未來損害」而非僅現有市場份額

---

### 案例四：Clearview AI 人臉辨識罰款

**背景**  
Clearview AI 是一家美國新創公司，透過網路爬取逾 300 億張人臉影像（來自社交媒體、新聞網站等公開網路）建立生物特徵資料庫，並向全球執法機關銷售人臉辨識服務。

**爭點**
- 在無合法依據下蒐集、處理生物特徵資料是否違反 GDPR？
- 資料主體的存取、刪除請求未獲回應是否構成違規？
- Clearview 辯稱爬取公開資料係合法行為

**結果**
- **法國 CNIL**：2022 年 10 月罰款 2,000 萬歐元；2023 年 5 月再罰 520 萬歐元（因未遵從 2021 年的停止令）
- **義大利 Garante**：2022 年 2 月罰款 2,000 萬歐元
- **希臘 HDPA**：2022 年 7 月罰款 2,000 萬歐元（希臘史上最高額）
- **英國 ICO**：2022 年 5 月罰款 752.8 萬英鎊，但 2023 年 10 月上訴仲裁庭推翻裁決（認定 ICO 對境外公司的轄區主張有誤）

**治理啟示**
- 「公開可得資料」不等於「可自由用於 AI 訓練」，GDPR 的合法依據要求仍適用
- 生物特徵資料（biometric data）作為特殊類別資料受到最高保護等級
- 跨境執法能力差距是 AI 治理的重大缺口

---

### 案例五：Amazon 招聘 AI 偏見（2014–2018）

**背景**  
Amazon 自 2014 年起秘密建立 AI 履歷篩選系統，以機器學習自動評分求職者履歷（1–5 星）。系統以過去十年的公司招聘資料訓練，而歷史招聘資料中男性占絕大多數。

**爭點**
- AI 系統習得歷史性別偏見，對「女性」相關詞彙（如「women's chess club」）的履歷降分
- 曾就讀兩所女子大學的申請人被系統排除
- 即使修正特定詞彙，系統仍可能發展出其他歧視性篩選邏輯

**結果**  
Amazon 於 2018 年初解散該團隊，因管理層對專案失去信心。2018 年 10 月，Reuters 報導此事件引發廣泛關注。

**治理啟示**
- 歷史訓練資料中的結構性偏見會被 AI 系統複製和放大
- 高風險決策場景（招聘、信貸、司法）中的 AI 系統需要獨立偏見稽核
- 「AI 沒有偏見」的假設是錯誤的——AI 的公平性是需要主動設計與驗證的

---

### 案例六：荷蘭 SyRI 系統與托兒津貼醜聞

**背景**  
荷蘭發生兩起相互關聯的演算法政府醜聞：

**SyRI（系統風險指示，2003–2020）**：政府部門交換個人的就業、福利、稅務資料，用演算法篩選「高風險個人」進行深入調查，且優先部署於低收入及移民比例較高的社區。

**托兒津貼醜聞（2013–2019）**：稅務局使用自學習演算法偵測托兒津貼詐欺，演算法將雙重國籍和低收入列為高風險因子，導致逾 26,000 個家庭被認定為詐欺者，被要求歸還鉅額補貼，許多家庭因此傾家蕩產、家庭破碎，移民背景家庭受害尤為嚴重。

**爭點**
- 演算法決策是否違反無差別對待原則與隱私權？
- 系統性偏見如何導致對邊緣化群體的歧視性執法？

**結果**
- **2020 年 2 月**：海牙地方法院裁定 SyRI 法規違反歐洲人權公約第 8 條，SyRI 立即停止運作——這是全球首例以人權理由叫停數位福利系統的司法裁決
- **2021 年 1 月 15 日**：魯特第三內閣（Rutte III）因托兒津貼醜聞引發的政治風暴宣布總辭，距 2021 年大選僅兩個月
- 政府啟動大規模補償計畫，每受害家庭獲賠至少 30,000 歐元

**治理啟示**
- 政府 AI 系統可造成真實且系統性的人身損害，尤其對弱勢群體
- 演算法不透明性使受害者難以知悉且申訴決定
- 「歧視性代理變數」（如國籍）即使非明確使用，也可能透過關聯特徵間接進入模型

---

### 案例七：義大利封鎖 ChatGPT（2023 年）

**背景**  
2023 年 3 月下旬，OpenAI 發生 ChatGPT 資料外洩事件，部分用戶可見他人的聊天標題與付費資訊。

**爭點**
- 是否違反 GDPR 透明度義務（用戶未獲告知其資料如何被處理）？
- 訓練 AI 的個人資料處理是否有合法依據？
- 未驗證用戶年齡，導致 13 歲以下兒童可能接觸不當內容

**結果**
- **2023 年 3 月 30 日**：義大利資料保護局（Garante）發布緊急命令，立即暫停 ChatGPT 在義大利的個人資料處理
- 約一個月後，OpenAI 採取改進措施（新增隱私告知、年齡驗證機制），Garante 於 2023 年 4 月底恢復服務
- 此後，德國、法國、愛爾蘭、西班牙等國資料保護機關紛紛啟動調查
- **2024 年 12 月**：Garante 對 OpenAI 以 ChatGPT GDPR 違規開罰 1,500 萬歐元

**治理啟示**
- GDPR 賦予監管機關緊急暫停服務的執法工具，其威嚇力不容小覷
- 生成式 AI 的訓練資料合法依據問題是各國監管機關的共同焦點
- 此案開創「先封鎖後談判」的 AI 執法先例

---

### 案例八：Air Canada 聊天機器人幻覺案（2024 年）

**背景**  
2022 年 11 月，加拿大客戶 Jake Moffatt 在訂購機票前，詢問 Air Canada 網站上的 AI 聊天機器人關於哀傷優惠票的退款政策。聊天機器人告知他可在旅行後 90 天內申請部分退款。Moffatt 信任聊天機器人，購票後才申請退款，但 Air Canada 拒絕，稱聊天機器人提供了錯誤資訊。

**爭點**
- 企業是否須為自家 AI 聊天機器人提供的錯誤資訊負責？
- Air Canada 的抗辯：聊天機器人是「獨立的法律實體」（此論點遭法庭直接駁回）

**結果**  
2024 年 2 月 14 日，英屬哥倫比亞民事裁決法庭裁定 Air Canada 須為聊天機器人的疏失錯誤陳述負責，命令賠償 812.02 加幣（含退款、利息、法庭費）。法庭明確指出：企業對其網站上所有資訊負責，無論來源是靜態頁面或聊天機器人。

**治理啟示**
- AI 聊天機器人的「幻覺」（hallucination）在消費者服務場景中可形成法律責任
- 「AI 是獨立實體」的免責論點不成立，企業需為其部署的 AI 系統行為負責
- 此案為消費者 AI 互動的法律責任建立了重要判例

---

### 案例九：DeepSeek 衝擊（2025 年 1 月）

**背景**  
2025 年 1 月 20 日（美國總統就職日），中國新創公司 DeepSeek 發布 R1 推理模型，聲稱僅用約 600 萬美元訓練成本達到與 OpenAI o1 相當的性能，且宣稱主要使用受出口管制的晶片（H800）而非最新款 H100 進行訓練。

**爭點**
- 美國半導體出口管制是否真的能有效阻礙中國 AI 發展？
- 以更少算力訓練高性能模型是否意味著「算力封鎖」失效？
- DeepSeek 資料儲存於中國，引發全球資料主權疑慮

**結果**
- **市場衝擊**：NVIDIA 單日市值蒸發超過 6,000 億美元，DeepSeek iOS App 躍升美國 App Store 下載第一
- **義大利封鎖**（2025 年 1 月 30 日）：以資料跨境傳輸疑慮為由封鎖 DeepSeek
- **比利時、愛爾蘭**啟動資料保護調查
- **美國回應**：川普政府將此視為「警醒時刻」，加強對算力出口管制的關注
- DeepSeek R1 模型以 MIT 授權開源，部分消除主權依賴疑慮

**治理啟示**
- 算力封鎖策略有效性存在根本限制：效率突破可降低對頂端晶片的依賴
- 開源模型的全球擴散使傳統出口管制工具效力下降
- 中國 AI 能力的實際發展水準可能被西方低估，「算力差距即能力差距」的假設需重新審視

---

## 時間軸事件

以下為 2016–2026 年 AI 治理重大里程碑（至少 30 條），涵蓋監管、技術、外交等維度：

| 日期 | 標題 | 說明 | 來源 |
|------|------|------|------|
| 2016-09-28 | 美國 OSTP 發布 AI 政策備忘錄 | 美國行政院科技政策辦公室（OSTP）發布三份 AI 政策報告，含《人工智慧的未來》白皮書 | https://obamawhitehouse.archives.gov/ostp/ai |
| 2016-09-28 | Partnership on AI 成立 | Amazon、Apple、DeepMind、Facebook、Google、IBM、Microsoft 創立，後擴及學術界與民社 | https://partnershiponai.org |
| 2017-07-08 | 中國《新一代人工智慧發展規劃》 | 國務院發布 AI 強國戰略，目標 2030 年成為全球 AI 領先者 | https://www.gov.cn/zhengce/content/2017-07/20/content_5211996.htm |
| 2018-05-25 | GDPR 正式生效 | 歐盟《通用資料保護規則》生效，要求取得資料主體同意並提供充足透明度，深遠影響 AI 資料治理 | https://gdpr.eu |
| 2019-05-22 | OECD AI 原則採納 | OECD 42 個成員國採納首個政府間 AI 標準，包含可信 AI 五大原則（包容性成長、以人為本、透明、穩健安全、問責） | https://oecd.ai/en/ai-principles |
| 2019-06-28 | G20 人類中心 AI 原則 | G20 大阪峰會採納以人為中心的 AI 原則，基礎參照 OECD 原則 | https://www.g20.org/osaka-summit |
| 2019-06-01 | 歐盟高階專家組《可信 AI 倫理指引》 | 七大要求（human agency、robustness、privacy、transparency、diversity、societal wellbeing、accountability）成為後續 EU AI Act 框架基礎 | https://ec.europa.eu/digital-single-market/en/news/ethics-guidelines-trustworthy-ai |
| 2020-01-01 | 加州 CCPA 生效 | 加州消費者隱私法（CCPA）生效，美國州層級資料隱私的先驅 | https://oag.ca.gov/privacy/ccpa |
| 2020-10-17 | 中國《出口管制法》施行 | 中國建立首個系統性出口管制法律框架，涵蓋軍民兩用商品 | https://www.mofcom.gov.cn |
| 2020-12-18 | 中芯國際（SMIC）列入實體清單 | 美國 BIS 以軍民兩用疑慮將 SMIC 列入 Entity List，衝擊中國晶片製造能力 | https://www.bis.doc.gov |
| 2021-01-20 | 美國 NIST AI RMF 起草啟動 | NIST 開始起草 AI 風險管理框架（AI RMF），廣徵業界意見，奠定後來 1.0 版基礎 | https://www.nist.gov/system/files/documents/2021/07/26/nist-ai-rmf-concept-paper.pdf |
| 2021-04-21 | 歐盟 AI Act 草案發布 | 歐盟委員會發布《人工智慧法》草案，首創風險分級（unacceptable/high/limited/minimal）監管框架 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52021PC0206 |
| 2021-11-23 | UNESCO AI 倫理建議書通過 | 193 個會員國一致通過首個全球性 AI 倫理標準，涵蓋隱私、透明、公平、環境影響等核心原則 | https://www.unesco.org/en/articles/recommendation-ethics-artificial-intelligence |
| 2022-02-08 | NVIDIA-ARM 收購告吹 | NVIDIA 宣布放棄 400 億美元收購 ARM，美英歐中監管機關全線阻撓 | https://nvidianews.nvidia.com/news/nvidia-and-softbank-group-announce-termination-of-nvidias-acquisition-of-arm-limited |
| 2022-08-09 | 美國 CHIPS 與科學法簽署 | 拜登簽署法案，提供 390 億美元補貼振興本土晶片製造，25% 製造投資稅收抵免 | https://www.congress.gov/bill/117th-congress/house-bill/4346 |
| 2022-10-07 | 美國第一波先進晶片出口管制 | BIS 禁止向中國出口 NVIDIA A100、H100 等高端 GPU 及先進晶片製造設備，史上最嚴半導體出口管制 | https://www.bis.doc.gov/index.php/all-articles/17-regulations/1519-october-7-2022-final-rules |
| 2022-11-30 | ChatGPT 發布 | OpenAI 發布 ChatGPT，5 天內突破百萬用戶，2 個月內達 1 億用戶，成為有史以來增長最快的消費應用 | https://openai.com/blog/chatgpt |
| 2023-01-23 | NIST AI RMF 1.0 發布 | NIST 發布 AI 風險管理框架，提供 GOVERN/MAP/MEASURE/MANAGE 四功能架構，廣受業界採用 | https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf |
| 2023-03-14 | GPT-4 發布 | OpenAI 發布多模態 GPT-4，律師資格考試排名前 10%，引爆「AI 軍備競賽」新階段 | https://openai.com/research/gpt-4 |
| 2023-03-30 | 義大利封鎖 ChatGPT | Garante 緊急令暫停 ChatGPT 資料處理，成為全球首個基於 GDPR 封鎖 LLM 服務的案例，一個月後復開 | https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9870847 |
| 2023-06-14 | 歐洲議會通過 AI Act 談判草案 | 歐洲議會以 499:28 票通過談判立場，為 EU AI Act 三方協商定調，含生成式 AI 附加條款 | https://www.europarl.europa.eu/news/en/press-room/20230609IPR96212 |
| 2023-07-03 | 中國鎵鍺出口管制啟動 | 中國商務部宣布鎵、鍺出口許可管制，被視為美國半導體管制的反制措施 | https://www.mofcom.gov.cn |
| 2023-07-21 | 白宮取得七大 AI 公司自願承諾 | Amazon、Anthropic、Google、Inflection、Meta、Microsoft、OpenAI 承諾 AI 安全測試、浮水印標記、共享安全資訊 | https://www.whitehouse.gov/briefing-room/statements-releases/2023/07/21/fact-sheet-biden-harris-administration-secures-voluntary-commitments-from-leading-artificial-intelligence-companies-to-manage-the-risks-posed-by-ai/ |
| 2023-08-15 | 中國《生成式 AI 服務管理暫行辦法》生效 | 網信辦等七部委聯合規定，要求訓練資料合法性、內容符合社會主義核心價值觀、需通過安全評估 | https://www.cac.gov.cn |
| 2023-10-07 | 美國第二波晶片出口管制 | BIS 更新規則封堵 A800/H800 漏洞，新增算力密度限制，管制延伸至設備維護服務 | https://www.bis.doc.gov |
| 2023-10-30 | 拜登 AI 行政命令（EO 14110）簽署 | 史上最全面的 AI 行政命令，設定 10²⁶ FLOP 報告門檻、要求安全測試、成立 AI 安全研究所 | https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/ |
| 2023-10-30 | G7 廣島 AI 進程行為準則 | G7 國家及 EU 通過《先進 AI 系統國際行為準則》，11 條自願性原則，涵蓋安全測試、偏見評估、透明度 | https://digital-strategy.ec.europa.eu/en/library/hiroshima-process-international-code-conduct-advanced-ai-systems |
| 2023-11-01 | 布萊切利宣言（Bletchley Declaration） | 英國 AI 安全峰會，28 國（含美、中）聯合聲明承認前沿 AI 系統性風險，促進國際資訊共享與能力評估 | https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration |
| 2023-12-27 | NYT 對 OpenAI 與 Microsoft 提訴 | 《紐約時報》提起著作權訴訟，主張數十億美元損害賠償，成為 AI 訓練版權最重要訴訟 | https://harvardlawreview.org/blog/2024/04/nyt-v-openai-the-timess-about-face/ |
| 2024-02-14 | Air Canada 聊天機器人案裁決 | 英屬哥倫比亞法庭認定企業須為 AI 聊天機器人幻覺負責，首開具體判賠先例 | https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot |
| 2024-02-08 | 美國 AI 安全研究所聯盟（AISIC）成立 | NIST 主持成立，超過 200 家 AI 利益相關者參與，旨在推進 AI 安全評估標準 | https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence |
| 2024-03-21 | 聯合國通過首個 AI 決議 | 193 個成員國一致通過決議，呼籲推動對人類和可持續發展安全、可靠、可信的 AI | https://news.un.org/en/story/2024/03/1147831 |
| 2024-05-21 | EU AI Act 正式通過 | 歐洲議會以 523:46 票正式通過，建立全球首個全面性 AI 監管框架（Risk-based 四層分級） | https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015 |
| 2024-05-21 | 首爾 AI 安全峰會 | 27 國及 EU 承諾建立 AI 安全研究所網路；《首爾宣言》強調 AI 安全、創新與包容；各國承諾 AI 風險門檻合作 | https://www.gov.uk/government/publications/seoul-declaration |
| 2024-08-01 | EU AI Act 正式生效 | AI Act 於官方公報刊登後 20 天生效，開啟 24 個月分階段實施期程 | https://artificialintelligenceact.eu/implementation-timeline/ |
| 2024-12-02 | 美國第三波晶片管制（含 140 種設備） | BIS 將 140 家中國 AI 相關企業列入實體清單，同時擴大半導體製造設備出口管制 | https://www.bis.doc.gov |
| 2024-12-01 | 中國全面禁止對美出口鎵鍺等材料 | 商務部宣布對美禁止出口鎵、鍺、銻及超硬材料，直接回應美國 12 月 2 日管制 | https://www.mofcom.gov.cn |
| 2025-01-13 | 拜登 AI Diffusion Rule 發布 | BIS 頒布首個 AI 模型權重出口管制規則，三層國家分組架構管制算力擴散 | https://www.federalregister.gov/documents/2025/01/15/2025-00636/framework-for-artificial-intelligence-diffusion |
| 2025-01-20 | 川普撤銷拜登 AI 行政命令 | 就職首日廢除 EO 14110，終止 AI 安全報告義務，發布《消除美國 AI 領導障礙》行政命令 | https://www.whitehouse.gov/presidential-actions/ |
| 2025-01-20 | DeepSeek R1 衝擊全球 | 中國 DeepSeek 發布 R1，聲稱低成本達到 OpenAI o1 水準，NVIDIA 市值單日跌逾 6,000 億美元 | https://www.bruegel.org/first-glance/geopolitics-artificial-intelligence-after-deepseek |
| 2025-02-10 | 巴黎 AI 行動峰會 | 法國主辦，61 國簽署「以人為本、永續 AI」宣言；美英拒簽，法國承諾獲 1,090 億歐元 AI 投資 | https://www.sourcingspeak.com/ai-action-summit-2025-key-takeaways-global-ai-governance/ |
| 2025-05-13 | 川普廢除 AI Diffusion Rule | 商務部宣布廢除拜登政府 AI 模型擴散框架，承諾另訂更具競爭力替代規則 | https://www.bis.gov/press-release/department-commerce-announces-rescission-biden-era-artificial-intelligence-diffusion-rule-strengthens |
| 2025-08-02 | EU AI Act GPAI 義務生效 | 通用目的 AI 模型（含 GPT、Claude、Gemini 等）的透明度與安全義務正式生效 | https://artificialintelligenceact.eu/implementation-timeline/ |
| 2026-02-00 | 印度 AI 峰會主辦 | 印度主辦全球 AI 峰會，強調全球南方在 AI 治理中的聲音，推動更具包容性的 AI 治理框架 | https://www.seriousinsights.net/state-of-ai-2026-april-update/ |

---

## 術語

以下為 AI 治理領域核心術語（至少 25 個），涵蓋技術、政策、倫理等維度：

| 術語（English） | 一句定義 | 分類 |
|---------------|---------|------|
| 基礎模型 Foundation Model | 以大規模資料預訓練、可微調用於多種下游任務的大型神經網路模型，如 GPT、BERT、Stable Diffusion | 技術 |
| 前沿模型 Frontier Model | 當前最先進、能力最強的 AI 模型，可能具備雙用途或危險能力，如 GPT-4o、Claude Opus 4、Gemini Ultra | 技術 |
| 通用目的 AI（GPAI） General-Purpose AI | 可在廣泛任務範圍內運作的 AI 系統，EU AI Act 以此為監管類別，訓練算力超過 10²³ FLOP 者推定屬此類 | 政策 |
| 人工通用智慧 AGI | 假設中能在幾乎所有認知任務上達到或超越人類水準的 AI 系統，目前尚未實現但為長期安全研究核心目標 | 概念 |
| AI 對齊 Alignment | 確保 AI 系統行為符合人類意圖、價值觀與安全約束的研究與工程實踐，防止 AI 追求有害次目標 | 技術 |
| 人類反饋強化學習 RLHF | 透過收集人類對模型輸出的偏好評分訓練獎勵模型、再以強化學習優化 AI 行為的對齊技術，ChatGPT 的核心訓練方法 | 技術 |
| 紅隊測試 Red Teaming | 以對抗性視角、惡意提示或邊緣案例系統性測試 AI 安全性、穩健性與潛在濫用漏洞的方法 | 技術 |
| 幻覺 Hallucination | AI 語言模型生成貌似合理但實際上不正確或完全虛構資訊的現象，模型無法自知其在幻覺，因其僅預測最可能的下一個 token | 技術 |
| 深偽技術 Deepfake | 以深度學習（通常為 GAN 或擴散模型）合成或操縱影音內容的技術，可用於創造逼真的假影片、假聲音 | 技術 |
| 可解釋 AI Explainable AI (XAI) | 使 AI 系統的決策過程對人類可理解、可審計的研究方法與工具集，支援問責與信任建立 | 技術 |
| 運算治理 Compute Governance | 以算力（訓練所需 GPU 叢集、FLOPs）作為 AI 治理槓桿的政策工具，透過晶片管制、算力門檻識別高風險 AI 開發 | 政策 |
| 主權 AI Sovereign AI | 一個國家或地區控制其 AI 開發全鏈路（資料、模型、基礎設施）、降低對外部技術依賴的能力與戰略 | 政策 |
| 出口管制 Export Control | 國家對特定商品、技術（如先進 AI 晶片、設備）的對外銷售或轉移設置許可要求或禁令的法律機制 | 政策 |
| 實體清單 Entity List | 美國 BIS 維護的受管制企業名單，被列入者須取得美國政府許可方能取得受管制的美國商品與技術 | 政策 |
| 資料主權 Data Sovereignty | 個人或國家對其資料的法律管轄主張，涉及資料的儲存地、誰可存取、如何使用及跨境傳輸規範 | 政策 |
| 資料在地化 Data Localization | 要求特定資料必須儲存、處理於特定地理區域（通常為本國境內）的法律要求 | 政策 |
| 風險分級 Risk Classification | EU AI Act 等框架將 AI 系統依潛在危害程度分級（禁止/高風險/有限風險/最低風險），對應差異化監管義務 | 政策 |
| 系統性風險 Systemic Risk | EU AI Act 中指 GPAI 模型因規模或能力可能對歐盟社會造成廣泛負面影響的風險類型，超過 10²⁵ FLOP 訓練的模型推定具此風險 | 政策 |
| 技術中立 Technological Neutrality | 監管框架不指定特定技術實現方式，僅規範效果或風險的立法原則 | 政策 |
| 合理使用 Fair Use | 美國著作權法允許在特定條件下（教育、批評、研究、新聞報導等）使用版權材料而無需授權的法律原則，AI 訓練是否適用仍存爭議 | 政策 |
| 演算法問責 Algorithmic Accountability | 要求 AI 決策系統（尤其影響個人權益者）可受審計、可解釋、可申訴、決策者可問責的治理原則 | 概念 |
| AI 安全 AI Safety | 識別、評估和減輕 AI 系統可能造成的意外或有意傷害的研究與實踐領域，涵蓋近期危害（偏見、隱私）和長期存在性風險 | 概念 |
| 資料出處 Provenance | 資料或內容的來源、創建鏈及真實性追蹤，在 AI 脈絡下指驗證訓練資料合法性或 AI 生成內容的標記機制 | 技術 |
| 內容真實性倡議 C2PA | Adobe、ARM、Intel、Microsoft 等創立的開放技術標準，透過密碼學簽名在數位內容中嵌入創建歷程元資料，對抗深偽與資訊操控 | 技術 |
| 模型評估與基準測試 Model Evaluation | 系統性測量 AI 模型能力、限制與安全特性的方法，AI 安全研究所（AISI）等機構是此領域的重要主體 | 技術 |
| 雙用途 AI Dual-Use AI | 可用於合法民用目的，同時也可能被用於有害或軍事目的的 AI 系統或技術，如人臉辨識、蛋白質折疊預測在生物武器上的潛在應用 | 概念 |
| 算力門檻 Compute Threshold | 觸發特定監管義務的訓練算力值（如拜登 EO 的 10²⁶ FLOP、EU AI Act 的 10²⁵ FLOP），用於識別需要額外安全評估的前沿模型開發 | 政策 |
| 自願承諾 Voluntary Commitments | 企業或政府在無法律強制下自願採納的 AI 安全實踐，如 2023 年白宮七大 AI 公司承諾；批評者認為缺乏執行力 | 政策 |
| AI 安全研究所 AI Safety Institute (AISI) | 政府設立的獨立機構，負責前沿 AI 能力評估、安全測試標準制定，英美在 2023 年 Bletchley 峰會後率先成立，現已擴及多國網路 | 機構 |
| 國際人工智慧安全報告 IAISR | 由英國政府主導、各國 AI 安全研究所協作發布的年度全球 AI 安全現狀報告，首份於 2024 年發布 | 機構 |

---

## 來源清單

- US BIS Export Control Rules (Oct 2022, Oct 2023, Dec 2024) — https://www.bis.doc.gov
- Framework for Artificial Intelligence Diffusion (Final Rule, Jan 2025) — https://www.federalregister.gov/documents/2025/01/15/2025-00636/framework-for-artificial-intelligence-diffusion
- BIS Rescinds AI Diffusion Rule (May 2025) — https://www.bis.gov/press-release/department-commerce-announces-rescission-biden-era-artificial-intelligence-diffusion-rule-strengthens
- CHIPS and Science Act Wikipedia — https://en.wikipedia.org/wiki/CHIPS_and_Science_Act
- Understanding the Biden Administration's Updated Export Controls, CSIS — https://www.csis.org/analysis/understanding-biden-administrations-updated-export-controls
- Timeline: GPU Export Controls & NVIDIA GPU Bans, GamersNexus — https://gamersnexus.net/gpus-news/timeline-gpu-export-controls-nvidia-gpu-bans-ai-gpu-black-market
- U.S. Export Controls and China: Advanced Semiconductors (CRS, Congress.gov) — https://www.congress.gov/crs-product/R48642
- China's Export Controls on Critical Minerals (PIIE, 2024) — https://www.piie.com/blogs/realtime-economics/2024/chinas-export-controls-critical-minerals-arent-starving-united-states
- China Imposes New Export Controls on Gallium and Germanium (Mayer Brown, Jul 2023) — https://www.mayerbrown.com/en/insights/publications/2023/07/china-imposes-new-export-controls-on-two-minerals-critical-to-the-manufacture-of-semiconductors
- China Rare Earth Export Ban (CSET Georgetown, Dec 2024) — https://cset.georgetown.edu/publication/china-rare-earth-export-ban/
- The Role of Compute Thresholds for AI Governance (Law-AI Institute) — https://law-ai.org/the-role-of-compute-thresholds-for-ai-governance/
- Biden AI EO: Companies Must Report Large Compute Deployments (Data Center Dynamics) — https://www.datacenterdynamics.com/en/news/biden-ai-executive-order-says-companies-will-have-to-report-large-compute-deployments-to-us-gov/
- EU AI Act: GPAI Model Obligations in Force (Latham & Watkins, 2025) — https://www.lw.com/en/insights/eu-ai-act-gpai-model-obligations-in-force-and-final-gpai-code-of-practice-in-place
- EU AI Act Implementation Timeline — https://artificialintelligenceact.eu/implementation-timeline/
- EU AI Act Full Text — https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689
- Sovereign AI Agenda (McKinsey, 2025) — https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-forward/the-sovereign-ai-agenda-moving-from-ambition-to-reality
- Sovereign AI: What it is, Country Playbooks (STL Partners, 2025) — https://stlpartners.com/articles/data-centres/sovereign-ai/
- Sovereign AI: What it is, 6 Ways States Are Building It (WEF, 2024) — https://www.weforum.org/stories/2024/04/sovereign-ai-what-is-ways-states-building/
- NYT v. OpenAI: The Times's About-Face (Harvard Law Review, 2024) — https://harvardlawreview.org/blog/2024/04/nyt-v-openai-the-timess-about-face/
- Getty Images v. Stability AI Case Tracker (The Fashion Law) — https://www.thefashionlaw.com/from-chatgpt-to-deepfake-creating-apps-a-running-list-of-key-ai-lawsuits/
- NVIDIA/Arm Transaction Termination (NVIDIA Newsroom, Feb 2022) — https://nvidianews.nvidia.com/news/nvidia-and-softbank-group-announce-termination-of-nvidias-acquisition-of-arm-limited
- French CNIL Fines Clearview AI EUR 20 Million (EDPB, Oct 2022) — https://www.edpb.europa.eu/news/national-news/2022/french-sa-fines-clearview-ai-eur-20-million_en
- Italian Garante Fines Clearview AI EUR 20 Million (EDPB, Feb 2022) — https://www.edpb.europa.eu/news/national-news/2022/facial-recognition-italian-sa-fines-clearview-ai-eur-20-million_en
- Clearview AI Another CNIL Fine (TechCrunch, May 2023) — https://techcrunch.com/2023/05/10/clearview-ai-another-cnil-gspr-fine/
- Amazon Scraps AI Hiring Tool for Being Sexist (Euronews, Oct 2018) — https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women
- Dutch Childcare Benefits Scandal (Wikipedia) — https://en.wikipedia.org/wiki/Dutch_childcare_benefits_scandal
- SyRI Case Landmark Ruling (Privacy International) — https://privacyinternational.org/news-analysis/3363/syri-case-landmark-ruling-benefits-claimants-around-world
- OHCHR: Landmark Ruling Stops Government Algorithm Spy on the Poor (Feb 2020) — https://www.ohchr.org/en/press-releases/2020/02/landmark-ruling-dutch-court-stops-government-attempts-spy-poor-un-expert
- Italy Orders ChatGPT Blocked (TechCrunch, Mar 2023) — https://techcrunch.com/2023/03/31/chatgpt-blocked-italy/
- Italy Fines OpenAI EUR 15 Million for GDPR Violations (The Hacker News, Dec 2024) — https://thehackernews.com/2024/12/italy-fines-openai-15-million-for.html
- Moffatt v. Air Canada (McCarthy LLP, Feb 2024) — https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot
- Air Canada Held Responsible for Chatbot's Hallucinations (AI Business, Feb 2024) — https://aibusiness.com/nlp/air-canada-held-responsible-for-chatbot-s-hallucinations-
- The Geopolitics of AI After DeepSeek (Bruegel, Feb 2025) — https://www.bruegel.org/first-glance/geopolitics-artificial-intelligence-after-deepseek
- DeepSeek, Huawei, Export Controls and Future of US-China AI Race (CSIS, 2025) — https://www.csis.org/analysis/deepseek-huawei-export-controls-and-future-us-china-ai-race
- AI Seoul Summit Key Takeaways (Access Partnership, May 2024) — https://accesspartnership.com/key-takeaways-from-the-ai-seoul-summit-2024/
- Seoul Declaration (Australian Government, May 2024) — https://www.industry.gov.au/publications/seoul-declaration-countries-attending-ai-seoul-summit-21-22-may-2024
- Hiroshima Process International Code of Conduct (G7, Oct 2023) — https://digital-strategy.ec.europa.eu/en/library/hiroshima-process-international-code-conduct-advanced-ai-systems
- Bletchley Declaration (UK Government, Nov 2023) — https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration
- UNESCO Recommendation on the Ethics of AI (Nov 2021) — https://www.unesco.org/en/articles/recommendation-ethics-artificial-intelligence
- 193 Countries Adopt First-Ever Global AI Ethics Agreement (UN News, Nov 2021) — https://news.un.org/en/story/2021/11/1106612
- UN Unanimously Adopts First Resolution on Promoting Safe AI (Mar 2024) — https://www.womblebonddickinson.com/us/insights/alerts/united-nations-unanimously-adopts-first-resolution-promoting-safe-secure-and
- OECD AI Principles (2019) — https://oecd.ai/en/ai-principles
- China's AI Regulations and How They Get Made (Carnegie Endowment, Jul 2023) — https://carnegieendowment.org/research/2023/07/chinas-ai-regulations-and-how-they-get-made
- China Generative AI Measures Finalized (Library of Congress, Jul 2023) — https://www.loc.gov/item/global-legal-monitor/2023-07-18/china-generative-ai-measures-finalized/
- Canada's AIDA Death (Montreal AI Ethics Institute, 2025) — https://montrealethics.ai/the-death-of-canadas-artificial-intelligence-and-data-act-what-happened-and-whats-next-for-ai-regulation-in-canada/
- Trump Revokes Biden AI EO (Wiley Law, Jan 2025) — https://www.wiley.law/alert-President-Trump-Revokes-Biden-Administrations-AI-EO-What-To-Know
- Paris AI Action Summit 2025: Key Takeaways (Sourcing Speak, Feb 2025) — https://www.sourcingspeak.com/ai-action-summit-2025-key-takeaways-global-ai-governance/
- TSMC Role in Geopolitics (GTI, Mar 2025) — https://globaltaiwan.org/2025/03/how-taiwans-chip-industry-navigates-us-industrial-policy-and-export-controls/
- C2PA Content Provenance and Deepfakes (DeepIDV) — https://www.deepidv.com/media/articles/c2pa-content-provenance-digital-watermarks-fight-deepfakes
- White House Voluntary Commitments (Jul 2023) — https://harvardlawreview.org/print/vol-137/voluntary-commitments-from-leading-artificial-intelligence-companies-on-july-21-2023/
