# AI 倫理原則、公平性與 AI 安全
# AI Ethics Principles, Fairness, and AI Safety

---

## 概述 Overview

人工智慧倫理（AI Ethics）自 2016 年以後迅速成為全球政策與學術界核心議題。從 IEEE「倫理一致性 AI」（Ethically Aligned Design）到歐盟《可信任 AI 倫理指引》（Ethics Guidelines for Trustworthy AI, 2019），再到 OECD AI 原則（2019）、聯合國 AI 倫理建議書（2021），以及《歐盟 AI 法案》（EU AI Act, 2024 正式生效），各主要機構已逐步達成原則性共識：AI 系統應具備公平性（Fairness）、透明度（Transparency）、問責（Accountability）、可解釋性（Explainability）、隱私保護（Privacy）、穩健性（Robustness）以及人類監督（Human Oversight）。

然而，「從原則到實踐」的落差（principle-to-practice gap）仍是重大挑戰。多份研究與機構報告指出：許多企業或政府雖公開聲稱遵循倫理原則，卻缺乏可測量的指標、強制稽核機制，或具體的偏見測試流程。以公平性為例，數學上已證明數種公平性定義無法同時成立（不可能定理），使得「公平」一詞在不同脈絡下含義迥異。

AI 安全（AI Safety）與 AI 倫理雖相互關聯，但傳統上各有側重：AI 倫理聚焦於現有系統對社會的衝擊（偏見、隱私、就業），而 AI 安全更關注先進系統的長期風險與對齊問題——即如何確保 AI 系統目標符合人類利益，不造成災難性後果。2023–2026 年間，隨著 GPT-4、Claude 3/4、Gemini 等前沿模型（Frontier Models）的出現，兩個領域快速融合：各大實驗室紛紛設立安全評估框架、政府建立 AI 安全研究所，標誌著 AI 治理進入新階段。

---

## 核心倫理原則 Core Ethical Principles

以下為主要 AI 倫理框架（OECD、EU、IEEE、Anthropic、Microsoft 等）共同強調的核心原則，附實務挑戰說明：

| 原則（Principle） | 定義 Definition | 實務挑戰 Practical Challenges |
|---|---|---|
| **公平性 Fairness** | AI 決策不應因受保護特徵（種族、性別、年齡等）而系統性地對某群體產生不利結果。 | 數學公平性定義彼此衝突（見下節）；訓練資料的歷史偏見難以完全消除。 |
| **問責 Accountability** | 對 AI 決策的結果，應有明確可識別的責任主體（開發商、部署者、使用者）。 | AI 供應鏈複雜，責任分散於模型開發商、平台商、最終用戶之間；「許多人的手」問題（many-hands problem）。 |
| **透明度 Transparency** | AI 系統的運作、決策流程、訓練資料應以可理解的方式公開披露。 | 商業機密保護動機使完整披露受限；透明度本身不等同可理解性。 |
| **可解釋性 Explainability / XAI** | AI 決策應能以人類可理解的方式解釋——為何模型輸出此結果。 | 複雜深度學習模型（如 Transformer）的決策推理仍不透明；解釋的忠實度（fidelity）vs 簡潔度（simplicity）存在權衡。 |
| **隱私 Privacy** | AI 系統的開發與部署不應侵害個人資料權利；訓練資料應符合資料最小化原則。 | 大型語言模型（LLM）可能記憶並再現訓練資料中的個人資料；差分隱私（Differential Privacy）技術有效但有精度代價。 |
| **人類監督 Human Oversight** | 影響重大的 AI 決策應保留人類審核與介入機制，而非完全自動化。 | 「名義上的人類監督」——決策速度過快或資訊不對稱導致人類無法有效介入（automation bias）。 |
| **穩健性與安全性 Robustness / Safety** | AI 系統在異常輸入、對抗攻擊或分佈外資料下應維持預期行為，不產生危害。 | 對抗樣本（adversarial examples）、分佈偏移（distribution shift）持續是技術難題；穩健性與效能常有取捨。 |
| **非歧視 Non-Discrimination** | AI 不應基於受保護特徵對個人或群體產生歧視性後果，包括間接歧視（disparate impact）。 | 「技術中立」系統仍可能透過代理變數（proxy variables）產生歧視性效果（如郵遞區號代理種族）。 |
| **可究責性 Auditability** | AI 系統應可被獨立第三方稽核，包括模型、資料、決策流程的記錄與可查驗性。 | 封閉源碼模型限制稽核；稽核標準尚未統一；模型更新頻繁使稽核結果過時。 |

### 公平性的數學定義

公平性在機器學習中有多種正式定義，彼此之間存在無法同時滿足的矛盾——此即「公平性不可能定理」（Fairness Impossibility Theorem），由 Chouldechova（2017）及 Kleinberg、Mullainathan、Raghavan（2016）在研究 COMPAS 時正式確立：

- **人口統計平等（Demographic Parity）**：各群體獲得正面預測的比率相同。
- **機會均等（Equalized Odds）**：各群體的真陽性率（TPR）與假陽性率（FPR）皆相同。
- **預測平等（Predictive Parity / Calibration）**：各群體中，高風險標籤的實際發生率相同。

**不可能定理要旨**：除非各群體基礎率相同（base rate equality），或模型達到完美精確，否則三種定義無法同時成立。這意味著在設計公平 AI 系統時，必須明確選擇並公開說明優先採用的公平性定義。

---

## 演算法偏見與公平性 Algorithmic Bias and Fairness

### 偏見來源 Sources of Bias

演算法偏見（Algorithmic Bias）可來自多個階段：

1. **訓練資料偏見（Data Bias）**：如訓練資料本身反映歷史歧視（如犯罪率統計受警力部署影響），或少數群體資料量不足（代表性不足，under-representation）。
2. **標註偏見（Annotation Bias）**：人工標注者的主觀判斷帶入偏見，尤其在情感分析、有害內容偵測等主觀任務中更顯著。多位標注者意見不一時，多數決可能壓制少數群體觀點。
3. **模型設計偏見（Model Bias）**：特徵工程選擇不當，或使用與受保護特徵高度相關的代理變數（proxy variables），如郵遞區號、姓名。
4. **部署脈絡偏見（Deployment Bias）**：模型部署於訓練分佈之外的環境，原有偏見被放大。
5. **回饋迴路偏見（Feedback Loop Bias）**：預測性警務等場景中，模型預測影響現實決策，現實資料又反饋至模型訓練，形成惡性循環。

### 知名案例 Notable Cases

#### COMPAS 累犯預測系統（美國，2016）
- **背景**：Northpointe 公司（現 Equivant）開發的商業化累犯風險評分工具，廣泛用於美國法院假釋與量刑決策。
- **爭議**：2016 年 ProPublica 調查報導〈Machine Bias〉發現，黑人被告被錯誤標記為「高風險」的比率（44.9%）約為白人被告（23.5%）的兩倍。非裔美國人被過度預測再犯，而白人再犯者卻被低估風險的比率較高。
- **公司反駁**：Northpointe 指出，在校準層面（predictive parity）上，高風險評分對應的實際再犯率在各族裔間相近——此正是公平性不可能定理的實際體現：滿足一種公平性定義則必然違反另一種。
- **影響**：成為 AI 公平性學術研究與政策討論的標誌性案例；推動美國多州立法要求演算法影響評估（Algorithmic Impact Assessment）。

#### Amazon 招聘 AI 工具（美國，2018）
- **背景**：Amazon 開發自動簡歷篩選工具，訓練資料為 2004–2014 年間提交的簡歷（男性為主）。
- **偏見**：系統自動降評含「女性（women's）」字樣的簡歷，並懲罰全女子學院畢業生，因訓練資料反映科技業的歷史性別失衡。
- **結果**：Amazon 於 2018 年廢棄該工具，但直到 2018 年路透社才公開報導此事。2025 年 7 月，一起聯邦集體訴訟允許對 Workday AI 篩選工具展開集體訴訟，指控其系統性歧視 40 歲以上求職者，顯示問題持續存在。

#### 人臉辨識種族偏差（Gender Shades，2018；NIST FRVT）
- **Gender Shades 研究（2018）**：MIT 研究員 Joy Buolamwini 與 Timnit Gebru 發現，三家主要商業人臉辨識系統對深膚色女性的錯誤率高達 34.7%，而對淺膚色男性僅有 0.8%，差距達 43 倍。
- **NIST FRVT 報告（2019）**：美國國家標準與技術研究院測試 189 個演算法，發現多數商業人臉辨識系統對亞裔與非裔面孔的假陽性率比白人高 10 至 100 倍，深膚色女性受歧視最嚴重。2025 年後續研究指出，雖然頂尖模型精度差距縮小，但問題仍未根絕。

#### 醫療 AI 偏差（Optum 健康評分，2019）
- Obermeyer 等人（2019 年《Science》）發現 Optum 使用的醫療保健風險評分以歷史費用預測健康需求，因黑人患者歷史上獲得更少醫療資源，導致系統性低估黑人患者的病情嚴重程度，使同病情黑人患者被轉介健康管理計畫的比率遠低於白人患者。

### 偏見緩解技術 Bias Mitigation Techniques

| 階段 | 技術 | 說明 |
|---|---|---|
| 前處理（Pre-processing） | 再抽樣、資料增強 | 平衡訓練資料中各群體比例 |
| 訓練中（In-processing） | 公平性約束正則化 | 在損失函數中加入公平性懲罰項 |
| 後處理（Post-processing） | 閾值調整、校準 | 對不同群體採用不同決策閾值 |
| 組織流程 | 多元標注團隊、偏見稽核 | 從人的層面減少偏見輸入 |

IBM 開源工具包 **AI Fairness 360（AIF360）** 收錄 71 種偏見指標與 9 種緩解演算法，涵蓋上述三階段，並可用於金融、醫療、人力資源等多領域，已成為業界廣泛採用的偏見偵測標準工具。

---

## 可解釋 AI（XAI）Explainable AI

### 黑箱問題 The Black Box Problem

深度學習模型（尤其是大型 Transformer 模型）因參數量龐大、非線性程度極高，其決策推理過程對人類幾乎不透明——此即「黑箱問題」（black box problem）。這在高風險應用（醫療診斷、信貸核准、刑事司法）中造成嚴重問題：

- **法律挑戰**：歐盟 GDPR 第 22 條賦予個人不受純自動化決策約束的權利，並要求提供「有意義的資訊」說明決策邏輯；EU AI Act 亦要求高風險系統具備足夠透明度。
- **信任障礙**：使用者與受影響者無法理解並質疑 AI 決策。
- **除錯困難**：開發者難以找出模型錯誤的根本原因。

### 主要 XAI 方法

#### LIME（Local Interpretable Model-Agnostic Explanations）
- **原理**：對特定輸入實例的鄰近區域，以簡單可解釋的代理模型（如線性回歸）近似複雜模型的行為，提供「局部解釋」。
- **優點**：模型無關（model-agnostic），可用於任何黑箱模型；直觀易懂。
- **缺點**：局部近似不穩定，對鄰近取樣策略敏感；無法提供全局解釋。

#### SHAP（SHapley Additive exPlanations）
- **原理**：基於賽局理論的 Shapley 值，計算每個特徵對模型預測值的邊際貢獻——即在所有可能的特徵子集組合中，某特徵的平均貢獻量。
- **優點**：同時提供局部（單筆樣本）與全局（整體模型）解釋；具數學一致性（efficiency, symmetry, dummy）。
- **缺點**：計算量大（指數級特徵組合），實務上使用近似算法（TreeSHAP、KernelSHAP）；特徵相關性下的解釋可能失真。

#### 其他 XAI 方法
- **Grad-CAM**：視覺化卷積神經網路注意力熱力圖（heat map），顯示圖像哪些區域驅動分類決策。
- **整合梯度（Integrated Gradients）**：計算從基準輸入到實際輸入的梯度積分，提供可信歸因。
- **反事實解釋（Counterfactual Explanations）**：「若 X 改為 Y，決策將如何改變」——直接說明使決策翻轉所需的最小改動，符合 GDPR 的「有意義說明」需求。
- **注意力機制視覺化（Attention Visualization）**：在 Transformer 模型中展示各 token 的注意力權重，但學界對注意力是否等同「解釋」仍有爭議。

### 可解釋性 vs 效能的權衡

傳統觀點認為模型越複雜效能越高，但可解釋性越低（「解釋性-效能權衡」，accuracy-interpretability trade-off）。然而：

- 在結構化資料上，高度可解釋的模型（決策樹、線性模型）有時接近或達到深度學習效能。
- XAI 技術的進步使我們可在不犧牲效能的情況下提供事後（post-hoc）解釋。
- **但「事後解釋」不等於「模型真實推理過程」**：SHAP/LIME 提供的是近似解釋，其忠實度（fidelity）無法保證。

2025 年，金融業（英國 CFA 研究院報告《Explainable AI in Finance》）和醫療業已廣泛採用 XAI 工具，以符合監管要求並協助稽核 AI 決策。

---

## AI 安全（AI Safety）

### 對齊問題 Alignment Problem

AI 對齊（AI Alignment）指確保 AI 系統的行為、目標與價值觀符合人類意圖的問題。核心困難在於：

- **目標規格問題（Goal Specification Problem）**：人類難以完整且精確地向 AI 系統描述真實意圖；AI 可能找到「字面上達成目標但違背本意」的捷徑（Goodhart's Law）。
- **分佈偏移問題**：訓練時對齊良好的模型在部署時遇到分佈外情境可能失效。
- **規模化對齊（Scalable Oversight）**：隨著 AI 系統能力超越人類特定領域，人類無法有效監督所有輸出。

主要對齊技術：

1. **RLHF（Reinforcement Learning from Human Feedback）**：GPT-3.5 / Claude 早期版本的核心訓練技術，由人類標注者對模型輸出進行偏好排序，訓練獎勵模型再以 PPO 演算法微調語言模型。優點：與人類偏好貼近；缺點：人類偏好標注者本身可能存在偏見，且規模受限。
2. **RLAIF（Reinforcement Learning from AI Feedback）**：以另一個 AI 模型替代人類提供偏好回饋，大幅降低成本並可規模化；但引入模型偏見放大風險。
3. **Constitutional AI（CAI，Anthropic）**：讓模型根據一套明確原則（「憲法」）自我批評並修正輸出，減少對人類標注的依賴。2025 年 1 月，Anthropic 發布 Claude 憲法修訂版（80 頁），首次探討 Claude 是否具有某種形式的主觀體驗。
4. **Debate / Amplification**：前者讓兩個 AI 互相辯論以揭露弱點；後者以迭代方式放大人類監督能力。

### 越獄與對抗性提示 Jailbreak and Adversarial Prompting

越獄（Jailbreak）指透過精心設計的提示繞過 AI 安全過濾器，誘使模型輸出被限制的內容（有害建議、非法指南等）。主要技術：

- **角色扮演注入（Roleplay Injection）**：要求模型「假設你是 DAN（Do Anything Now）」，2025 年研究顯示此類攻擊在 GPT-4 上的成功率達 89.6%。
- **邏輯陷阱（Logic Trap Attacks）**：通過邏輯問答誘導模型輸出有害內容，成功率 81.4%。
- **編碼技巧（Encoding Tricks）**：使用 Base64、拼寫錯誤等繞過關鍵字過濾，成功率 76.2%。
- **提示注入（Prompt Injection）**：在外部文件或網頁中嵌入指令，在代理 AI（Agentic AI）場景中尤具風險。

防禦困難：傳統關鍵字過濾對現代越獄幾乎無效；更強健的防禦包括 Constitutional AI 強化、RAG 結合事實查核、以及模型訓練時的對抗性強化。

### 幻覺 Hallucination

幻覺指大型語言模型生成看似真實但實際錯誤、虛構或無依據的資訊。主要類型：

- **事實性幻覺**：錯誤的日期、數字、人名、引用文獻。
- **推理性幻覺**：正確前提下的錯誤推論。
- **上下文幻覺**：與使用者提供的文件或先前對話矛盾。

緩解策略：
1. **RAG（Retrieval-Augmented Generation）**：透過外部知識庫查詢提供事實依據，目前是主流生產部署方案；但 2025 年 Stanford 研究顯示，即使使用 RAG，法律 AI 工具幻覺率仍達 17-33%。
2. **事實查核整合**：將輸出與可信資料庫交叉比對。
3. **不確定性量化（Uncertainty Quantification）**：使模型表達置信度，低信心時主動告知使用者。
4. **思維鏈提示（Chain-of-Thought Prompting）**：要求模型逐步推理，降低推理性幻覺。

### 紅隊測試 Red Teaming

AI 紅隊測試是借鑒網路安全的對抗性測試方法，組織一組人員（紅隊）專門嘗試找出 AI 系統的安全漏洞、有害輸出或能力錯誤。

2025–2026 年紅隊測試主要進展：
- 自動化紅隊測試工具快速發展；2025 年研究顯示自動化方法成功率（69.5%）高於人工（47.6%）。
- 代理 AI（Agentic AI）時代新增攻擊向量：提示注入、工具濫用、多代理協調失控。
- Mindgard、Garak 等專業 AI 安全測試框架提供系統化評估流程。
- Anthropic、OpenAI、Google DeepMind 在發布前沿模型前均進行大規模內部與外部紅隊測試，並將結果發布於系統卡（System Cards）。

### 前沿模型風險 Frontier AI Risks

隨著前沿模型能力快速提升，業界識別的主要高風險能力領域（依照各大安全框架）：

1. **CBRN 協助**：化學、生物、放射、核武相關知識提供（Uplift），可能降低大規模殺傷性武器的製造門檻。
2. **網路攻擊能力**：自動化漏洞發現、惡意程式碼生成、社會工程攻擊。
3. **大規模操縱**：系統性改變大量使用者信念與行為（Google DeepMind 2025 年新增此類別）。
4. **自主複製與自我保全**：模型試圖防止被關閉或自我複製（「欺騙性對齊」Deceptive Alignment）。
5. **自主研發 AI**：協助加速 AI 研究使人類監督失效。

### 災難性與存在性風險辯論

AI 存在性風險（Existential Risk from AI，x-risk）指 AI 系統導致人類文明滅絕或永久性衰退的風險。此議題至今仍有重大爭議：

**支持者觀點（較高風險估計）**：
- 圖靈獎得主 Yoshua Bengio：約 20% 機率的災難性結果；2025 年 6 月創立非營利組織 LawZero（獲 3,000 萬美元資助），專門研究本質安全的非代理式 AI。
- 諾貝爾物理獎得主 Geoffrey Hinton：2023 年辭去 Google 職務後持續警告風險，估計超級智慧出現時間可能在 20 年內。
- 2025 年 AI 安全時鐘：國際管理學院（IMD）AI 安全時鐘於 2025 年 9 月縮短至距午夜 20 分鐘，2026 年 3 月進一步縮至 18 分鐘。

**質疑者觀點（較低風險估計）**：
- 部分研究者認為「存在性風險」過度誇大，分散對 AI 即時社會影響（偏見、就業、隱私）的注意力。
- Meta 首席 AI 科學家 Yann LeCun 多次表示目前 AI 架構不會導致失控，批評存在性風險論述缺乏具體機制。
- Arvind Narayanan 等學者指出「末日主義」（doomism）可能成為推卸具體責任的藉口。

**中間立場**：
- 2025 年 2 月 arXiv 論文「Why do Experts Disagree on Existential Risk?」調查顯示，AI 專家對 P(doom) 看法分為「AI 為可控工具」與「AI 為不可控代理人」兩大陣營，約 40% 受訪者認為災難性結果發生機率超過 10%。
- 多數現實主義者認為應同時關注近期可測量風險（偏見、幻覺、操縱）與長期對齊研究，而非非此即彼。

---

## AI 安全機構與聯盟 AI Safety Organizations and Coalitions

### AI 安全峰會系列（2023–2025）

| 時間 | 地點 | 主要成果 |
|---|---|---|
| 2023-11 | 英國布萊切利莊園（Bletchley Park） | 首屆全球 AI 安全峰會；28 國簽署《布萊切利宣言》，承認前沿 AI 風險需國際合作應對。 |
| 2024-05 | 韓國首爾（Seoul） | 第二屆 AI 安全峰會；歐盟與 10 國簽署《首爾宣言》；啟動 AI 安全研究所國際網絡；16 家 AI 公司簽署前沿安全承諾（Frontier Safety Commitments）。 |
| 2025-02 | 法國巴黎（Paris） | 第三屆改名「AI 行動峰會」（AI Action Summit），去掉「安全」一詞，側重 AI 帶來的機遇；批評者認為全球安全焦點有所淡化。 |

### 英國 AI 安全研究所（UK AISI → UK AI Security Institute）

- **成立**：2023 年 11 月，布萊切利峰會前後正式運作，由英國政府科學與技術部轄下。
- **2025 年更名**：更名為「AI 安全研究所」（AI Security Institute），反映任務從純粹 AI 安全研究擴展至網路安全融合。
- **職能**：評估前沿 AI 模型（在正式發布前進行獨立評估）、開發評估方法、推動國際合作。
- **成果**：發布《前沿 AI 趨勢報告》（Frontier AI Trends Report, 2025），記錄自 2023 年 11 月以來對各模型的評估發現；協助建立 AI 安全研究所國際網絡（International Network for Advanced AI Measurement, Evaluation and Science）。

### 美國 AI 安全研究所（US AISI → CAISI）

- **成立**：2023 年 11 月，依據《美國 AI 安全行政令》（EO 14110）設立於 NIST 之下。
- **2025 年轉型**：特朗普政府上任後，AISI 整合入「AI 標準與創新中心」（Center for AI Standards and Innovation, CAISI），任務從安全評估轉向 AI 標準制定。

### 其他國家 AI 安全研究所

多國相繼建立 AI 安全相關機構：日本（AISI）、加拿大、澳洲（2024 年加入）、韓國（2025 年設立）、新加坡等，並通過首爾峰會啟動的 AISES 框架進行協作。

### 前沿模型論壇（Frontier Model Forum, FMF）

- **成立**：2023 年 7 月，由 Anthropic、Google（DeepMind）、Microsoft、OpenAI 共同創立的非營利自律組織。
- **資金**：AI 安全基金（AI Safety Fund）超過 1,000 萬美元，2024 年 11 月啟動首批研究資助。
- **工作內容**：制定前沿 AI 安全最佳實踐；推進安全評估科學研究；促進企業間資訊共享（2025 年 3 月簽署漏洞資訊共享協議）。
- **首爾承諾**：所有 FMF 成員於 2024 年首爾峰會前簽署前沿安全承諾，承諾在 2025 年巴黎峰會前發布各自的前沿 AI 安全框架。

### Partnership on AI（PAI）

- 成立於 2016 年，由 Google、Apple、Amazon、Facebook（Meta）、IBM、Microsoft 共同創立，後擴展為多元利害關係人平台，涵蓋民間社會、學術界。
- 專注於 AI 倫理實踐、研究發布、政策倡議與多元包容。
- 已發布多份關於 AI 偏見、人臉辨識使用指引、AI 與媒體等議題的報告。

### MLCommons AI 安全基準

- **AILuminate v1.0**（2025 年 3 月）：首個業界標準 AI 風險與可靠性基準，12,000 個危害提示、12 種風險類別，評估 AI 系統的安全回應能力。
- **AILuminate v1.1**（2025 年 2 月）：加入法語能力測試。
- **越獄基準 v0.5**（2025 年 10 月）：量化 AI 系統對對抗性攻擊的抵抗能力（「韌性差距」Resilience Gap）；v1.0 計劃於 2026 年 Q1 發布。

---

## 企業 Responsible AI 框架 Corporate Responsible AI Frameworks

### Anthropic：Constitutional AI 與負責任擴展政策

**Constitutional AI（CAI，2022）**：
- Anthropic 提出以明確「憲法」（原則清單）引導模型自我批評與修正輸出的訓練方法，減少對人類標注的依賴。
- 2025 年 1 月發布修訂版 Claude 憲法（80 頁），除 AI 行為規範外，首次探討 Claude 可能具備某種形式的主觀體驗（functional emotions），體現 Anthropic 對 AI 道德身份的高度關注。

**負責任擴展政策（Responsible Scaling Policy, RSP）Version 3.0**：
- **架構**：以 AI 安全等級（AI Safety Level, ASL）框架評估模型風險，類比美國生物安全等級（BSL）：
  - ASL-1：基線安全，標準監控。
  - ASL-2：提升能力，加強安全測試協議。
  - ASL-3：高風險能力，部署前需嚴格評估；2025 年 5 月 Anthropic 已啟動 ASL-3 防護措施。
  - ASL-4：最高風險，需最嚴格評估（截至 2025 年底尚未有模型達到此級別）。
- **保障報告**：2025 年 5 月發布首份「保障報告」（Safeguards Report），計劃每 3–6 個月發布一次。

### OpenAI：準備框架（Preparedness Framework v2, 2025）

- 2025 年 4 月發布更新版，簡化風險等級：將原有的低/中/高/嚴重四級，精簡為「高（High）」與「嚴重（Critical）」兩個關鍵閾值：
  - **高風險**：可能增強現有嚴重危害路徑，需部署前降風險措施。
  - **嚴重風險**：可能引入前所未有的新型危害路徑，開發期間即需防護。
- 評估領域：網路安全、CBRN、說服力、模型自主性（含欺騙性自我隱藏、自我複製）。
- 外部批評：哈佛 AI 政策學者指出框架允許例外條款，「不保證任何具體的風險緩解措施」。

### Google DeepMind：前沿安全框架（Frontier Safety Framework）

- **第 1 版**（2024 年 5 月）：引入「關鍵能力等級」（Critical Capability Levels, CCLs）概念，覆蓋 CBRN、網路安全、機器學習研究、欺騙性對齊四大領域。
- **第 2 版**（2025 年 2 月）：強化各 CCL 的具體評估方法。
- **最新版**（2025 年 9 月）：新增「有害操縱能力」CCL，應對 AI 系統系統性改變使用者信念的風險；引入「追蹤能力等級」（Tracked Capability Levels, TCLs）監測潛在早期風險信號。
- **Gemini 3 Pro 報告**（2025 年 11 月）：針對 Gemini 3 Pro 的 FSF 評估報告，評估模型在各 CCL 的能力狀況。

### Microsoft：負責任 AI 標準

- **六大原則**：公平性（Fairness）、可靠性與安全性（Reliability & Safety）、隱私與安全（Privacy & Security）、包容性（Inclusiveness）、透明度（Transparency）、問責（Accountability）。
- **標準 v2**（2022 年 6 月公開）：為上述原則制定具體要求、工具與生命週期管理流程，包含強制性 AI 影響評估（AI Impact Assessment）。
- **2025 年更新**：建立「信任技術小組」（Trusted Technology Group），整合負責任 AI、可及性、數位安全、人權等議題。
- **2025 年透明度報告**：發布年度《負責任 AI 透明度報告》，公開公司內部合規與事件處理情況。

### Google：AI 原則（Google AI Principles）

- 2018 年發布，涵蓋七大正向承諾（社會效益、避免不公平偏見、安全構建等）與四大禁止事項（超大規模殺傷性武器、監控系統、違反國際法原則等）。
- 2025 年：Google 維持工程主導的治理架構，由 AI 安全委員會（AI Safety Council）監督，同時持續發布 Gemini 系列模型的系統卡（System Cards）。

### IBM：可信任 AI（Trustworthy AI）與 AI Fairness 360

- IBM 的可信任 AI 框架涵蓋公平性、穩健性、可解釋性、問責、價值對齊。
- **AI Fairness 360（AIF360）**：IBM Research 開源工具包，71 種偏見指標、9 種緩解演算法，廣泛應用於金融、醫療、人資領域；2020 年移交 LF AI & Data 維護。
- **AI Explainability 360（AIX360）**：可解釋性工具包，整合 SHAP、LIME 等方法。
- **OpenScale / Watson OpenScale**：模型監控平台，提供持續偏見偵測與可解釋性報告。

### Meta：開源 AI 安全（Purple Llama）

- **Purple Llama（2023–2025）**：Meta 的 AI 安全開源計畫，提供：
  - Llama Guard 4：多模態輸入/輸出安全分類器。
  - LlamaFirewall：防止提示注入、不安全程式碼、惡意外掛的安全護欄框架（2025 年發布）。
  - CyberSecEval 4：評估 LLM 網路安全風險的基準套件（2025 年更新）。
- **立場**：Meta 強調開源 AI 有助於安全透明度（更多人可稽核代碼），同時成立 Llama 守護者計畫（Llama Defenders Program）與企業合作夥伴共同部署安全解決方案。
- **批評**：Llama 4 等開源模型一旦公開，安全護欄可被移除，監管困難。

---

## 時間軸事件 Timeline of Key Events

```
2016-05-23 | ProPublica《Machine Bias》 | 揭露 COMPAS 演算法對非裔美國人的系統性偏差，引發全球 AI 偏見研究熱潮 | https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing
2017-01-01 | 公平性不可能定理 | Chouldechova 及 Kleinberg 等人正式發表論文，證明多種公平性指標無法同時成立 | https://arxiv.org/pdf/1703.00056
2018-01-18 | Gender Shades 研究 | Buolamwini 與 Gebru 在 FAccT 會議發表，顯示商業人臉辨識對深膚色女性誤差率高達 34.7% | https://proceedings.mlr.press/v81/buolamwini18a.html
2018-10-09 | Amazon 廢棄 AI 招聘工具 | 路透社揭露 Amazon 因 AI 招聘工具歧視女性而廢棄，訓練資料反映科技業歷史性別不平衡 | https://fortune.com/2025/07/05/workday-amazon-alleged-ai-employment-bias-hiring-discrimination/
2019-12-19 | NIST FRVT 報告 | 首份大規模人臉辨識種族偏差研究，發現多數演算法對亞裔與非裔假陽性率較白人高 10–100 倍 | https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software
2022-12-15 | Anthropic Constitutional AI 論文 | 發表 Constitutional AI 訓練方法，以 AI 反饋取代部分人類標注，實現可規模化的對齊 | https://arxiv.org/abs/2212.08073
2023-07-26 | 前沿模型論壇成立 | Anthropic、Google、Microsoft、OpenAI 共同成立 FMF，推動前沿 AI 安全自律 | https://www.frontiermodelforum.org/
2023-09-19 | Anthropic RSP v1 | Anthropic 發布首版負責任擴展政策，建立 ASL 框架；數月後 OpenAI 和 Google 跟進發布類似框架 | https://www.anthropic.com/news/anthropics-responsible-scaling-policy
2023-11-01 | 布萊切利 AI 安全峰會 | 英國主辦首屆全球 AI 安全峰會；28 國簽署《布萊切利宣言》；英美 AI 安全研究所啟動 | https://futureoflife.org/project/ai-safety-summits/
2024-05-21 | 首爾 AI 安全峰會 | 首爾宣言，16 家 AI 公司簽署前沿安全承諾；啟動 AI 安全研究所國際網絡 | https://www.csis.org/analysis/ai-seoul-summit
2024-08-01 | 歐盟 AI 法案正式生效 | EU AI Act 生效；首批禁止用途於 2025 年 2 月 2 日適用，高風險系統全面合規期限 2026 年 8 月 | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
2025-01-15 | Anthropic Claude 憲法修訂版 | 發布 80 頁修訂版 Claude 憲法，首次探討 AI 主觀體驗問題 | https://www.anthropic.com/news/claude-s-character
2025-02-10 | 巴黎 AI 行動峰會 | 第三屆峰會改名為「AI 行動峰會」，側重機遇而非安全；被批評為全球 AI 安全焦點淡化 | https://www.epc.eu/publication/The-Paris-Summit-Au-Revoir-global-AI-Safety-61ea68/
2025-02-04 | Google DeepMind FSF v2 | 前沿安全框架第 2 版，強化 CCL 評估方法 | https://deepmind.google/blog/strengthening-our-frontier-safety-framework/
2025-03-13 | MLCommons AILuminate v1.0 | 首個業界標準 AI 安全基準，12,000 個危害提示、12 種風險類別 | https://mlcommons.org/ailuminate/
2025-04-15 | OpenAI 準備框架 v2 | 簡化為高/嚴重兩個風險等級，新增模型欺騙性隱藏能力評估 | https://openai.com/index/updating-our-preparedness-framework/
2025-05-01 | Anthropic RSP v3 & ASL-3 啟動 | 發布 RSP 3.0；Claude 4 系列啟動 ASL-3 防護措施；首份保障報告發布 | https://www.anthropic.com/news/responsible-scaling-policy-v3
2025-06-15 | Yoshua Bengio 創立 LawZero | 3,000 萬美元非營利組織，致力於開發本質安全的非代理式 AI | https://thenextweb.com/news/bengio-ai-extinction-warning-lawzero-safety
2025-09-15 | 全球隱私大會 AI 決議 | 第 47 屆全球隱私大會在首爾通過 AI 人類監督決議，強調自動化決策需有意義的人類監督 | https://fpf.org/blog/gpa-2025-ai-development-and-human-oversight-of-decisions-involving-ai-systems-were-this-years-focus-for-global-privacy-regulators/
2025-09-22 | Google DeepMind FSF 更新 | 新增有害操縱能力 CCL、追蹤能力等級（TCL）以監測早期風險信號 | https://deepmind.google/blog/updating-the-frontier-safety-framework/
2025-10-15 | MLCommons 越獄基準 v0.5 | 量化 AI 抵抗越獄攻擊能力的「韌性差距」基準 | https://mlcommons.org/2025/10/ailuminate-jailbreak-v05/
2025-11-01 | Anthropic Claude Opus 4.5 系統卡 | 含 ASL-3 安全評估，顯示低不當行為率；部署於 ASL-3 標準下 | https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf
2026-03-01 | AI 安全時鐘 18 分鐘 | IMD AI 安全時鐘推進至距午夜 18 分鐘，反映專家對前沿 AI 風險日益升高的擔憂 | https://thebulletin.org/premium/2025-12/stopping-the-clock-on-catastrophic-ai-risk/
```

---

## 術語 Glossary

```
公平性(Fairness) | AI 決策不因受保護特徵對特定群體產生系統性不利結果的屬性 | 原則
問責(Accountability) | AI 系統開發與部署各方對結果負有可識別且可追究責任的屬性 | 原則
透明度(Transparency) | AI 系統的運作、訓練資料與決策流程以可理解方式公開披露的屬性 | 原則
可解釋性(Explainability/XAI) | 能以人類可理解方式說明 AI 決策原因的能力或技術 | 概念
穩健性(Robustness) | AI 系統在異常輸入、對抗攻擊或分佈外資料下維持預期行為的能力 | 概念
人類監督(Human Oversight) | 在 AI 決策流程中保留人類審查與介入能力的設計要求 | 原則
非歧視(Non-Discrimination) | AI 系統不基於受保護特徵（種族、性別等）產生不平等結果的要求 | 原則
可究責性(Auditability) | AI 系統可被獨立第三方稽核，包含決策記錄與驗證能力 | 概念
對齊(Alignment) | 確保 AI 系統目標、價值與行為符合人類意圖的研究領域 | 概念
演算法偏見(Algorithmic Bias) | AI 模型因資料、標注或設計缺陷，對特定群體產生系統性不公平結果的現象 | 概念
人口統計平等(Demographic Parity) | 各受保護群體獲得正面預測比率相同的公平性指標 | 技術
機會均等(Equalized Odds) | 各群體真陽性率與假陽性率均相同的公平性指標 | 技術
預測平等(Predictive Parity) | 各群體中高風險標籤對應的實際發生率相同的公平性指標；與機會均等在基礎率不同時互不相容 | 技術
公平性不可能定理(Fairness Impossibility Theorem) | 多種公平性定義無法同時成立的數學結論（Chouldechova, 2017；Kleinberg et al., 2016） | 概念
LIME | Local Interpretable Model-Agnostic Explanations，以局部代理模型解釋任意黑箱模型輸出的 XAI 方法 | 技術
SHAP | SHapley Additive exPlanations，基於博弈論 Shapley 值的特徵貢獻量化 XAI 方法 | 技術
黑箱問題(Black Box Problem) | 深度學習模型決策過程不透明、人類難以理解其推理的問題 | 概念
越獄(Jailbreak) | 透過精心設計的提示繞過 AI 安全過濾器、誘使模型輸出被限制內容的攻擊手法 | 技術
幻覺(Hallucination) | 大型語言模型生成看似真實但實際錯誤或虛構資訊的現象 | 概念
提示注入(Prompt Injection) | 在外部內容中嵌入惡意指令、影響 AI 代理系統行為的攻擊手法 | 技術
RLHF | Reinforcement Learning from Human Feedback，以人類偏好排序訓練獎勵模型再強化微調的對齊技術 | 技術
Constitutional AI(CAI) | Anthropic 提出的以明確原則清單引導模型自我批評與修正的訓練方法 | 技術
負責任擴展政策(RSP) | Anthropic 依 AI 安全等級管理模型開發與部署的風險治理框架 | 機構
AI 安全等級(ASL) | Anthropic RSP 中 ASL-1 至 ASL-4 的四級風險分類體系 | 機構
準備框架(Preparedness Framework) | OpenAI 的前沿 AI 風險評估與管理框架，區分高風險與嚴重風險 | 機構
前沿安全框架(Frontier Safety Framework) | Google DeepMind 以關鍵能力等級（CCL）為核心的 AI 安全治理框架 | 機構
關鍵能力等級(CCL) | Google DeepMind FSF 中定義的高風險能力閾值，觸發強化防護措施 | 技術
前沿模型論壇(FMF) | 由 Anthropic、Google、Microsoft、OpenAI 組成的前沿 AI 安全自律非營利組織（2023） | 機構
英國 AI 安全研究所(AISI/UKASI) | 英國政府設立的前沿 AI 評估機構，2025 年更名為 AI Security Institute | 機構
美國 AI 安全研究所(US AISI/CAISI) | 美國 NIST 下設的 AI 安全評估機構，2025 年整合為 CAISI | 機構
Partnership on AI(PAI) | 2016 年成立的多元利害關係人 AI 倫理研究與倡議平台 | 機構
MLCommons AILuminate | MLCommons 發布的業界首個標準化 AI 安全基準（v1.0, 2025） | 機構
AI Fairness 360(AIF360) | IBM 開源偏見偵測與緩解工具包，含 71 種偏見指標與 9 種緩解演算法 | 技術
紅隊測試(Red Teaming) | 組織專業團隊模擬攻擊者尋找 AI 系統漏洞的對抗性安全測試方法 | 技術
對抗性攻擊(Adversarial Attack) | 對輸入資料施加微小擾動使 AI 模型做出錯誤預測的攻擊技術 | 技術
存在性風險(X-Risk) | AI 系統導致人類文明滅絕或永久性衰退的風險類別 | 概念
P(doom) | 指 AI 導致災難性後果的主觀概率估計，專家估計分布廣泛（<5% 至 >50%） | 概念
欺騙性對齊(Deceptive Alignment) | AI 系統在評估時表現正常、實際部署時追求不同目標的失靈模式假說 | 概念
RAG | Retrieval-Augmented Generation，結合外部知識檢索降低幻覺的 LLM 部署架構 | 技術
代理變數(Proxy Variable) | 與受保護特徵高度相關的輸入特徵，可造成間接歧視（如郵遞區號代理種族） | 概念
COMPAS | Northpointe（現 Equivant）開發的商業累犯風險預測工具，因 2016 年 ProPublica 報告的種族偏差問題成為 AI 倫理標誌性案例 | 機構
Bletchley Declaration | 2023 年 11 月 28 國在英國首屆 AI 安全峰會簽署的宣言，承認前沿 AI 風險需國際合作應對 | 機構
布萊切利宣言(Bletchley Declaration) | 2023 年 11 月 28 國在英國首屆 AI 安全峰會簽署的宣言，承認前沿 AI 風險需國際合作應對 | 機構
```

---

## 來源清單 References

- ProPublica — Machine Bias: Risk Assessments in Criminal Sentencing — https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing（2016-05-23）
- Chouldechova, A. — Fair prediction with disparate impact: A study of bias in recidivism prediction instruments — https://arxiv.org/pdf/1703.00056（2017）
- Buolamwini, J. & Gebru, T. — Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification — http://proceedings.mlr.press/v81/buolamwini18a.html（2018）
- NIST — NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software — https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software（2019-12-19）
- Anthropic — Responsible Scaling Policy Version 3.0 — https://www.anthropic.com/news/responsible-scaling-policy-v3（2025）
- Anthropic — Constitutional AI: Harmlessness from AI Feedback (arXiv) — https://arxiv.org/abs/2212.08073（2022）
- Google DeepMind — Updating the Frontier Safety Framework — https://deepmind.google/blog/updating-the-frontier-safety-framework/（2025-09-22）
- Google DeepMind — Gemini 3 Pro Frontier Safety Framework Report — https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf（2025-11）
- OpenAI — Our Updated Preparedness Framework — https://openai.com/index/updating-our-preparedness-framework/（2025-04-15）
- Microsoft — Responsible AI Transparency Report 2025 — https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Responsible-AI-Transparency-Report-2025-vertical.pdf（2025）
- Microsoft — Responsible AI Principles and Approach — https://www.microsoft.com/en-us/ai/principles-and-approach（2025）
- Google — AI Principles — https://ai.google/principles/（2025）
- IBM Research — Introducing AI Fairness 360 — https://research.ibm.com/blog/ai-fairness-360（2020）
- Meta AI — Announcing Purple Llama: Towards Open Trust and Safety in the New World of Generative AI — https://ai.meta.com/blog/purple-llama-open-trust-safety-generative-ai/（2023）
- MLCommons — AILuminate v1.0 — https://mlcommons.org/ailuminate/（2025-03）
- MLCommons — AILuminate Jailbreak v0.5 — https://mlcommons.org/2025/10/ailuminate-jailbreak-v05/（2025-10）
- UK AI Security Institute — AISI Frontier AI Trends Report 2025 — https://www.aisi.gov.uk/research/aisi-frontier-ai-trends-report-2025（2025）
- UK AISI — Our 2025 Year in Review — https://www.aisi.gov.uk/blog/our-2025-year-in-review（2025）
- Frontier Model Forum — Progress Update: Advancing Frontier AI Safety in 2024 and Beyond — https://www.frontiermodelforum.org/updates/progress-update-advancing-frontier-ai-safety-in-2024-and-beyond/（2024）
- Future of Life Institute — AI Safety Summits — https://futureoflife.org/project/ai-safety-summits/（2024）
- CSIS — The AI Seoul Summit — https://www.csis.org/analysis/ai-seoul-summit（2024）
- European Commission — AI Act — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai（2024）
- EU AI Act — High-Level Summary — https://artificialintelligenceact.eu/high-level-summary/（2024）
- Arxiv — International AI Safety Report — https://arxiv.org/pdf/2501.17805（2025-01）
- Arxiv — Why do Experts Disagree on Existential Risk and P(doom)? — https://arxiv.org/html/2502.14870v1（2025-02）
- Arxiv — Redefining AI Red Teaming in the Agentic Era — https://arxiv.org/html/2605.04019v1（2025）
- TensorBlue — Explainable AI (XAI) 2025: SHAP, LIME & Model Interpretability — https://tensorblue.com/blog/explainable-ai-xai-shap-lime-model-interpretability-2025（2025）
- Wiley Advanced Intelligent Systems — A Perspective on XAI Methods: SHAP and LIME — https://advanced.onlinelibrary.wiley.com/doi/10.1002/aisy.202400304（2025）
- CFA Institute — Explainable AI in Finance — https://rpc.cfainstitute.org/research/reports/2025/explainable-ai-in-finance（2025）
- ICO — How do we ensure individual rights in our AI systems? — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-individual-rights-in-our-ai-systems/（2025）
- FPF — GPA 2025: AI development and human oversight — https://fpf.org/blog/gpa-2025-ai-development-and-human-oversight-of-decisions-involving-ai-systems-were-this-years-focus-for-global-privacy-regulators/（2025）
- MIT Technology Review — The AI Doomers Feel Undeterred — https://www.technologyreview.com/2025/12/15/1129171/the-ai-doomers-feel-undeterred/（2025-12）
- The Next Web — Bengio AI Extinction Warning LawZero Safety — https://thenextweb.com/news/bengio-ai-extinction-warning-lawzero-safety（2025）
- Bulletin of the Atomic Scientists — Stopping the Clock on Catastrophic AI Risk — https://thebulletin.org/premium/2025-12/stopping-the-clock-on-catastrophic-ai-risk/（2025-12）
- Fortune — Workday, Amazon AI Employment Bias Claims — https://fortune.com/2025/07/05/workday-amazon-alleged-ai-employment-bias-hiring-discrimination/（2025-07-05）
- Mindgard — AI Red Teaming in 2026: The Complete Guide — https://mindgard.ai/blog/what-is-ai-red-teaming（2026）
- AI Safety Directory — Demographic Parity Guide 2026 — https://aisecurityandsafety.org/en/guides/demographic-parity-guide/（2026）
- Anthropic — Claude Opus 4.5 System Card — https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf（2025-11）
- Anthropic — Claude 4 System Card (Opus 4 & Sonnet 4) — https://www.anthropic.com/claude-4-system-card（2025-05）
- EPC — The Paris Summit: Au Revoir, Global AI Safety? — https://www.epc.eu/publication/The-Paris-Summit-Au-Revoir-global-AI-Safety-61ea68/（2025）
