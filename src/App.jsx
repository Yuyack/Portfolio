import { useEffect, useRef, useState } from "react";
import cameraSvg from "./assets/camera.svg";
import clickHereSvg from "./assets/click-here.svg";
import frame7Svg from "./assets/frame-7.svg";
import lensSvg from "./assets/lens.svg";
import portfolioSvg from "./assets/portfolio.svg";
import { caseStudyTemplate } from "./caseStudyTemplate.js";
import { ZoomableImage } from "./ZoomableImage.jsx";
import detailHomeImage from "./assets/shared/backtohome.png";
import designWorksTitleSvg from "./assets/shared/portfolio.svg";
import aboutMeTitleSvg from "./assets/shared/aboutme.svg";
import filmRollSvg from "./assets/shared/film.svg";
import filmTopSvg from "./assets/shared/top.svg";
import workCover1 from "./assets/shared/1.svg";
import workCover2 from "./assets/shared/2.svg";
import workCover3 from "./assets/shared/3.svg";
import workCover4 from "./assets/shared/4.svg";
import workCover5 from "./assets/shared/5.svg";
import workCover6 from "./assets/shared/6.svg";
import workCover7 from "./assets/shared/7.svg";
import nomiLongImage from "./assets/shared/NOMI.png";
import fangjianLongImage from "./assets/shared/房见.jpg";
import zhongkeLongImage from "./assets/shared/中可.jpg";
import translateWorkImage from "./assets/shared/translate.png";
import translationLongImage from "./assets/shared/cello.jpg";
import motionLongImage from "./assets/shared/动效.png";
import visualLongImage from "./assets/shared/视觉.jpg";
import fangjianCaseImage from "./assets/fangjian-case.jpg";
import zhongkeCaseImage from "./assets/zhongke-case.jpg";
import zheguangji01 from "./assets/shared/6.svg";
import zheguangji02 from "./assets/shared/视觉.jpg";
import zheguangji04 from "./assets/shared/6.svg";
import zheguangji05 from "./assets/shared/视觉.jpg";
import zheguangji07 from "./assets/shared/6.svg";
import zheguangji08 from "./assets/shared/视觉.jpg";
import zheguangji09 from "./assets/shared/6.svg";
import zheguangji10 from "./assets/shared/视觉.jpg";
import zheguangji11 from "./assets/shared/6.svg";
import zheguangji12 from "./assets/shared/视觉.jpg";
import zheguangji13 from "./assets/shared/6.svg";

import nomiCapture from "./assets/shared/NOMI.png";
import nomiCover from "./assets/shared/NOMI.png";
import nomiGeneratePrompt from "./assets/shared/NOMI.png";
import nomiGenerateLoading from "./assets/shared/NOMI.png";
import nomiGenerateResult from "./assets/shared/NOMI.png";
import nomiModelEntry from "./assets/shared/NOMI.png";
import nomiModelStyleA from "./assets/shared/NOMI.png";
import nomiModelStyleB from "./assets/shared/NOMI.png";
import nomiModelStyleC from "./assets/shared/NOMI.png";
import nomiWearEntry from "./assets/shared/NOMI.png";
import nomiWearSelect from "./assets/shared/NOMI.png";
import nomiWearPreview from "./assets/shared/NOMI.png";
import nomiCommunityEntry from "./assets/shared/NOMI.png";
import nomiCommunityFeedA from "./assets/shared/NOMI.png";
import nomiCommunityFeedB from "./assets/shared/NOMI.png";
import nomiCommunityFeedC from "./assets/shared/NOMI.png";
import nomiCommunityDetailA from "./assets/shared/NOMI.png";
import nomiCommunityDetailB from "./assets/shared/NOMI.png";
import nomiCommunityPostA from "./assets/shared/NOMI.png";
import nomiCommunityPostB from "./assets/shared/NOMI.png";
import nomiCommunityPostC from "./assets/shared/NOMI.png";
import nomiPublishA from "./assets/shared/NOMI.png";
import nomiPublishB from "./assets/shared/NOMI.png";
import nomiAssetCenter from "./assets/shared/NOMI.png";
import nomiCommunityHome from "./assets/shared/NOMI.png";
import nomiCommunityLong from "./assets/shared/NOMI.png";
import nomiCommunityPost from "./assets/shared/NOMI.png";
import nomiTryOn from "./assets/shared/NOMI.png";
import nomiProfile from "./assets/shared/NOMI.png";
import nomiPersonaA from "./assets/shared/NOMI.png";
import nomiPersonaB from "./assets/shared/NOMI.png";
import nomiPersonaC from "./assets/shared/NOMI.png";
import nomiPersonaD from "./assets/shared/NOMI.png";
import nomiPersonaE from "./assets/shared/NOMI.png";
import nomiPersonaF from "./assets/shared/NOMI.png";
import nomiPersonaG from "./assets/shared/NOMI.png";

const filmFrames = [
  { id: "one", label: "NOMI 个性化定制 01" },
  { id: "translation", label: caseStudyTemplate.projectName, image: frame7Svg },
  { id: "three", label: "移动端工具 03" },
  { id: "four", label: "服务体验改版 04" },
  { id: "five", label: "文件翻译 05" },
  { id: "six", label: "动效设计 06" },
  { id: "seven", label: "视觉设计 07" },
];

const workCoverImages = [workCover1, workCover2, workCover3, workCover4, workCover5, workCover6, workCover7];

const zheguangjiImages = [
  zheguangji01,
  zheguangji02,
  zheguangji04,
  zheguangji05,
  zheguangji07,
  zheguangji08,
  zheguangji09,
  zheguangji10,
  zheguangji11,
  zheguangji12,
  zheguangji13,
];

const workMeta = {
  one: {
    projectName: "NOMI 个性化智能辅助平台 + 社区",
    projectType: "0-1 应用设计",
    heroTagline: "让车主用智能生成能力创建、试戴、发布和交易自己的 NOMI 个性形象。",
    base: "#071715",
    middle: "#0d2c2a",
    accent: "rgba(0, 225, 221, 0.22)",
    cool: "rgba(255, 255, 255, 0.12)",
  },
  translation: {
    projectName: caseStudyTemplate.projectName,
    projectType: caseStudyTemplate.projectType,
    heroTagline: caseStudyTemplate.heroTagline,
    base: "#f8fbff",
    middle: "#eef5ff",
    accent: "rgba(21, 112, 239, 0.12)",
    cool: "rgba(15, 23, 42, 0.06)",
  },
  three: {
    projectName: "房见",
    projectType: "UIUX 设计",
    heroTagline: "楼市行情数据化分析与全国房产数据库体验设计",
    base: "#eefaff",
    middle: "#d8f2f8",
    accent: "rgba(24, 139, 165, 0.2)",
    cool: "rgba(255, 178, 70, 0.16)",
  },
  four: {
    projectName: "中粮可口可乐",
    projectType: "UIUX 设计",
    heroTagline: "即时促销 / 裂变互动 UI 设计",
    base: "#fff6e8",
    middle: "#ffe7cf",
    accent: "rgba(255, 176, 44, 0.22)",
    cool: "rgba(230, 76, 86, 0.16)",
  },
  five: {
    projectName: "文件翻译",
    projectType: "UIUX 设计",
    heroTagline: "文件翻译工作流与智能提问体验设计。",
    base: "#f8fbff",
    middle: "#edf4ff",
    accent: "rgba(21, 112, 239, 0.16)",
    cool: "rgba(15, 23, 42, 0.08)",
  },
  six: {
    projectName: "动效设计",
    projectType: "Motion Design",
    heroTagline: "用动效连接状态变化、操作反馈与产品节奏。",
    base: "#f8fafc",
    middle: "#eef4f8",
    accent: "rgba(255, 190, 88, 0.14)",
    cool: "rgba(92, 146, 255, 0.1)",
  },
  seven: {
    projectName: "视觉设计",
    projectType: "Visual Design",
    heroTagline: "品牌视觉、界面氛围与关键页面表达。",
    base: "#fbfaf7",
    middle: "#ece8df",
    accent: "rgba(196, 69, 54, 0.14)",
    cool: "rgba(42, 91, 140, 0.12)",
  },
};

const fullImageWorks = {
  one: {
    src: nomiLongImage,
    alt: "NOMI 个性化定制作品长图",
  },
  translation: {
    src: translateWorkImage,
    alt: "Hi Translate 文件翻译作品长图",
  },
  three: {
    src: fangjianLongImage,
    alt: "房见楼市行情数据化分析与全国房产数据库作品长图",
  },
  four: {
    src: zhongkeLongImage,
    alt: "中粮可口可乐即时促销裂变互动 UI 设计作品长图",
  },
  five: {
    src: translationLongImage,
    alt: "文件翻译作品长图",
  },
  six: {
    src: motionLongImage,
    alt: "动效设计作品长图",
  },
  seven: {
    src: visualLongImage,
    alt: "视觉设计作品长图",
  },
};

const nomiFlowGroups = [
  {
    index: "01",
    label: "智能创作",
    title: "从拍摄 / 上传 NOMI 开始，智能生成可用人格",
    description:
      "用户先用清晰照片完成 NOMI 注册，再通过提示词描述想要的性格、外观和氛围。平台把生成、预览和结果确认放在同一流程里，降低从想法到成品的门槛。",
    screens: [
      [nomiCapture, "拍摄或上传 NOMI", "用实物照片作为个性化生成的起点。"],
      [nomiGeneratePrompt, "输入创作提示", "把角色性格、装扮和使用场景转化为生成条件。"],
      [nomiGenerateLoading, "智能生成中", "用明确进度反馈承接等待，避免任务中断感。"],
      [nomiGenerateResult, "确认生成结果", "生成后可继续调整、保存或进入发布路径。"],
    ],
  },
  {
    index: "02",
    label: "定制平台",
    title: "把外观、配件与试戴集中到定制平台",
    description:
      "NOMI 的个性化不只是一张图，而是可以被选择、搭配和复用的人格资产。平台用模块化入口承接模型、风格、配件和预览，让 0-1 产品具备继续扩展的结构。",
    screens: [
      [nomiModelEntry, "DIY 平台入口", "集中承接用户的个性角色创作与资产管理。"],
      [nomiModelStyleA, "选择人格风格", "以可视化选项帮助用户快速判断角色方向。"],
      [nomiModelStyleB, "细化表情与特征", "把抽象性格转化为可被理解的表情语言。"],
      [nomiModelStyleC, "生成角色预览", "在保存前让用户确认最终视觉效果。"],
    ],
  },
  {
    index: "03",
    label: "试戴",
    title: "同一角色可继续试戴，让创作从生成走向使用",
    description:
      "配件试戴把 DIY 从一次性生成延展为持续玩法。用户可以查看社区作品，也可以把喜欢的造型套用到自己的 NOMI 上，形成创作、消费和分享的闭环。",
    screens: [
      [nomiWearEntry, "选择试戴入口", "从角色详情或社区作品进入试戴路径。"],
      [nomiWearSelect, "挑选可用配件", "围绕帽子、耳朵、翅膀等高识别元素建立趣味分类。"],
      [nomiWearPreview, "试戴到我的 NOMI", "确认造型后可保存、发布或继续编辑。"],
      [nomiTryOn, "社区作品试戴", "把他人的创意转化为自己的可用装扮。"],
    ],
  },
  {
    index: "04",
    label: "社区",
    title: "社区让创作被看见，也让人格资产产生流通价值",
    description:
      "社区首页采用瀑布流展示车主作品，用点赞、作者、收藏和发布入口强化参与感；个人中心则承接积分、已发布、已购买和人格库，形成后续运营空间。",
    screens: [
      [nomiCommunityHome, "社区首页", "推荐、趋势和收藏构成内容分发入口。"],
      [nomiCommunityLong, "作品瀑布流", "用连续卡片强化浏览沉浸感和社区规模感。"],
      [nomiCommunityPost, "发布作品", "把用户生成内容转为可分享的社区资产。"],
      [nomiProfile, "我的 NOMI", "沉淀积分、订单、发布作品和个人 Persona 库。"],
    ],
  },
];

const nomiPersonaLibrary = [
  [nomiPersonaA, "活跃人格"],
  [nomiPersonaB, "人格变体 02"],
  [nomiPersonaC, "人格变体 03"],
  [nomiPersonaD, "人格变体 04"],
  [nomiPersonaE, "人格变体 05"],
  [nomiPersonaF, "人格变体 06"],
  [nomiPersonaG, "人格变体 07"],
];

function VisualPlaceholder({ label, note, wide = false }) {
  return (
    <div className={`visual-placeholder${wide ? " is-wide" : ""}`}>
      <span>{label}</span>
      <p>{note}</p>
      <small>DESIGN ASSET PLACEHOLDER</small>
    </div>
  );
}

function NomiFlowCarousel({ group, onPreview }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelLockRef = useRef(0);
  const activeScreen = group.screens[activeIndex];

  function handleWheel(event) {
    event.preventDefault();

    const now = performance.now();
    if (now - wheelLockRef.current < 140) {
      return;
    }

    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (Math.abs(delta) < 4) {
      return;
    }

    wheelLockRef.current = now;
    setActiveIndex((current) => {
      const direction = delta > 0 ? 1 : -1;
      return (current + direction + group.screens.length) % group.screens.length;
    });
  }

  return (
    <section className="nomi-flow-card">
      <div className="nomi-flow-copy">
        <span>{group.index} / {group.label}</span>
        <h3>{group.title}</h3>
        <p>{group.description}</p>
        <div className="nomi-flow-tabs" aria-label={`${group.title} 页面进度`}>
          {group.screens.map(([, title], index) => (
            <button
              type="button"
              key={title}
              className={index === activeIndex ? "is-active" : undefined}
              onClick={() => setActiveIndex(index)}
              aria-label={`切换到 ${title}`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
      <figure className="nomi-phone-stage" onWheel={handleWheel}>
        <button
          className="nomi-phone-trigger"
          type="button"
          onClick={() => onPreview({ src: activeScreen[0], alt: activeScreen[1] })}
          aria-label={`放大查看 ${activeScreen[1]}`}
        >
          <img src={activeScreen[0]} alt={activeScreen[1]} loading="lazy" />
        </button>
        <figcaption>
          <strong>{activeScreen[1]}</strong>
          <span>{activeScreen[2]}</span>
        </figcaption>
      </figure>
    </section>
  );
}

function NomiCaseStudy({ onPreview }) {
  const problemRows = [
    ["Hat 外观装饰", "个性化停留在表层"],
    ["唤醒名 / 昵称", "缺少人格塑造"],
    ["固定语音风格", "交互缺少变化"],
    ["简单触发行为", "缺少场景适应"],
  ];
  const researchMethods = [
    ["桌面研究", ["NOMI Mate 当前能力", "智能座舱趋势"]],
    ["社交媒体分析", ["小红书招募", "71 条用户反馈"]],
    ["用户访谈", ["4 位 NIO 用户深度访谈"]],
  ];
  const userProfiles = ["4 位用户", "日常通勤", "家庭出行", "休闲驾驶", "不同 NOMI 使用习惯"];
  const insightCards = [
    ["洞察 01", "智能助手需要拥有表达能力", ["可爱的表情", "有趣的互动", "情绪反馈"]],
    ["洞察 02", "智能助手需要理解使用场景", ["通勤陪伴", "家庭互动", "情绪支持"]],
    ["洞察 03", "用户希望拥有属于自己的智能伙伴", ["外观", "声音", "行为"]],
  ];
  const personaScreens = [
    ["基础脸部", "智能生成脸部 / 默认状态", nomiModelStyleC],
    ["表情变化", "开心 / 安慰 / 惊讶", nomiPersonaB],
    ["声音设定", "声音风格 / 口头禅 / 说话方式", nomiPersonaC],
  ];
  const prototypeScreens = [
    ["应用首页", nomiModelEntry],
    ["智能对话流程", nomiGeneratePrompt],
    ["人格编辑页面", nomiPersonaA],
    ["社区广场", nomiCommunityHome],
    ["车机联动", nomiCapture],
  ];
  const designPresentationGroups = [
    {
      index: "01",
      title: "从实物 NOMI 到数字人格生成",
      description: "用户通过拍摄或上传 NOMI 建立创作对象，再用提示词定义角色气质、外观和氛围，系统在同一流程中完成生成、等待反馈与结果确认。",
      screens: [
        [nomiCapture, "1 拍摄或上传 NOMI"],
        [nomiGeneratePrompt, "2.1 输入创作提示"],
        [nomiGenerateLoading, "2.2 智能生成中"],
        [nomiGenerateResult, "2.3 确认生成结果"],
      ],
    },
    {
      index: "02",
      title: "围绕人格资产的定制与试戴",
      description: "定制平台把风格选择、表情细化、角色预览和配件试戴集中在一起，让用户持续调整自己的 NOMI 形象，而不是停留在一次性生成。",
      screens: [
        [nomiModelEntry, "3.1 定制平台入口"],
        [nomiModelStyleA, "3.2.1.1 选择人格风格"],
        [nomiModelStyleB, "3.2.1.2 细化表情与特征"],
        [nomiModelStyleC, "3.2.1.3 生成角色预览"],
        [nomiWearEntry, "3.2.2.1 试戴入口"],
        [nomiWearSelect, "3.2.2.2 选择配件"],
        [nomiWearPreview, "3.2.2.3 试戴到我的 NOMI"],
      ],
    },
    {
      index: "03",
      title: "社区内容分发与创作发布",
      description: "社区承接作品浏览、详情查看、试戴转化和发布管理，让用户生成的 NOMI 形象可以被展示、互动、复用，并沉淀为可管理的数字资产。",
      screens: [
        [nomiCommunityEntry, "4.1 社区入口"],
        [nomiCommunityFeedA, "4.2.1.1 社区信息流"],
        [nomiCommunityFeedB, "4.2.1.2 作品浏览"],
        [nomiCommunityFeedC, "4.2.1.4 作品筛选"],
        [nomiCommunityDetailA, "4.2.3.1 作品详情"],
        [nomiCommunityDetailB, "4.2.3.2 试戴转化"],
        [nomiCommunityPostA, "4.3.2.1 发布编辑"],
        [nomiCommunityPostB, "4.3.2.2 发布设置"],
        [nomiCommunityPostC, "4.3.2.3 发布成功"],
        [nomiPublishA, "5.1 发布结果"],
        [nomiPublishB, "5.2 内容管理"],
        [nomiAssetCenter, "6 资产中心"],
      ],
    },
    {
      index: "04",
      title: "个人中心沉淀长期人格资产",
      description: "个人中心集中管理积分、订单、已发布作品和人格库，让用户能回到自己的 NOMI 资产体系中继续编辑、消费和运营。",
      screens: [
        [nomiProfile, "7.1 我的 NOMI"],
        [nomiPersonaA, "7.2 人格资产"],
        [nomiPersonaB, "7.3 表情资产"],
        [nomiPersonaC, "7.4 声音资产"],
        [nomiPersonaD, "7.5 行为资产"],
        [nomiPersonaE, "7.6 已购买资产"],
        [nomiPersonaF, "7.7 已发布作品"],
        [nomiPersonaG, "7.8 个人资料"],
      ],
    },
  ];

  function renderSection(indexLabel, title, description, children, extraClass = "") {
    return (
      <section className={`nomi-section nomi-chapter ${extraClass}`.trim()}>
        <div className="translation-section-head compact">
          <span>{indexLabel}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {children}
      </section>
    );
  }

  return (
    <article className="nomi-case nomi-case-new">
      <section className="nomi-hero">
        <div className="nomi-hero-topline">
          <span>AI 辅助DIY创意社区平台</span>
          <span>2026</span>
        </div>
        <div className="nomi-hero-copy">
          <h1>NOMI Studio：<br />AI 辅助 DIY 创意社区平台</h1>
          <p>让每位车主都能创建、试戴、发布并交流属于自己的 NOMI 灵感作品</p>
          <span>NOMI Studio AI Assisted DIY Creative Community Platform</span>
        </div>
        <div className="nomi-hero-visual nomi-hero-cover">
          <ZoomableImage src={nomiCover} alt="NOMI Studio 封面" className="image-preview-trigger" onPreview={onPreview} />
        </div>
      </section>

      {renderSection(
        "01 · 问题与目标",
        "让智能助手不止于“完成任务”",
        "随着智能汽车的发展，车载助手逐渐成为人与车辆连接的重要入口。但当前助手仍主要承担功能响应，用户与智能助手之间缺少长期的情感连接与个性化体验。",
        <>
          <div className="nomi-transition-card">
            <div>
              <span>传统座舱</span>
              <strong>功能型助手</strong>
              <p>语音指令、导航、车控、查询等功能响应。</p>
            </div>
            <i aria-hidden="true" />
            <div>
              <span>智能座舱</span>
              <strong>情感型伙伴</strong>
              <p>NIO NOMI Mate 3.0 以可见表情和主动反馈，让智能助手成为车内陪伴角色。</p>
            </div>
          </div>
          <div className="nomi-problem-table">
            {problemRows.map(([current, problem]) => (
              <div key={current}>
                <strong>{current}</strong>
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </>,
      )}

      {renderSection(
        "02 · 用户研究",
        "从用户行为中寻找情感连接机会",
        "通过用户访谈、社交媒体反馈分析和竞品研究，探索用户为什么愿意为 NOMI Mate 付费，以及他们期待怎样的智能陪伴体验。",
        <>
          <div className="nomi-method-grid">
            {researchMethods.map(([title, items]) => (
              <div key={title}>
                <strong>{title}</strong>
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            ))}
          </div>
          <div className="nomi-profile-strip">
            {userProfiles.map((profile) => <span key={profile}>{profile}</span>)}
          </div>
        </>,
      )}

      {renderSection(
        "03 · 洞察",
        "用户购买的不是设备，而是情感价值",
        "研究发现，用户愿意额外购买 NOMI Mate，核心原因并非功能差异，而是它带来的陪伴感、表达性和专属感。",
        <div className="nomi-insight-grid">
          {insightCards.map(([index, title, items]) => (
            <div key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              {items.map((item) => <strong key={item}>{item}</strong>)}
            </div>
          ))}
        </div>,
      )}

      {renderSection(
        "04 · 设计机会",
        "从碎片化设置到完整人格体系",
        "当前 NOMI 的个性化能力分散在外观、称呼和简单设置中，需要建立统一的人格体系，让用户创造真正属于自己的智能助手。",
        <div className="nomi-before-after">
          <div>
            <span>当前状态</span>
            <p><strong>外观</strong> → Hat</p>
            <p><strong>互动</strong> → 固定语气</p>
            <p><strong>行为</strong> → 有限触发</p>
          </div>
          <i aria-hidden="true" />
          <div>
            <span>机会方向</span>
            <h3>人格体系</h3>
            <p>脸部 · 声音 · 行为 · 主动交互</p>
          </div>
        </div>,
      )}

      {renderSection(
        "05 · 设计方案",
        "NOMI Studio：创造属于你的智能伙伴",
        "设计一个由智能生成驱动的人格个性化平台，让用户通过创造、调整和分享，建立与智能助手之间更深层的连接。",
        <>
          <div className="nomi-system-diagram">
            <strong>NOMI Studio</strong>
            <span>智能人格创作</span>
            <span>社区分享</span>
            <span>智能座舱联动</span>
          </div>
          <div className="nomi-value-grid">
            {["个性化表达", "情感陪伴", "社区增长"].map((item) => <strong key={item}>{item}</strong>)}
          </div>
        </>,
      )}

      {renderSection(
        "06 · 设计呈现",
        "从智能生成到社区流通的核心界面系统",
        "NOMI Studio 以生成、定制、试戴、发布和资产沉淀为主链路，让用户把一个灵感逐步转化为可保存、可展示、可复用的个性化智能伙伴。",
        <div className="nomi-presentation-groups">
          {designPresentationGroups.map((group) => (
            <section className="nomi-presentation-group" key={group.index}>
              <header>
                <span>{group.index}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </header>
              <div className="nomi-flow-steps">
                {group.screens.map(([src, title]) => (
                  <figure key={title}>
                    <button type="button" onClick={() => onPreview({ src, alt: title })} aria-label={`放大查看 ${title}`}>
                      <img src={src} alt={title} loading="lazy" />
                    </button>
                    <figcaption><strong>{title}</strong></figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>,
      )}

      {renderSection(
        "07 · 个性化体系",
        "让智能助手拥有独特的外观、声音与表达方式",
        "通过多维度人格定制，让用户不仅改变智能助手的外观，也能定义它的表达习惯和行为方式。",
        <div className="nomi-persona-grid">
          {personaScreens.map(([title, note, src]) => (
            <figure key={title}>
              <button type="button" onClick={() => onPreview({ src, alt: title })} aria-label={`放大查看 ${title}`}>
                <img src={src} alt={title} loading="lazy" />
              </button>
              <figcaption><strong>{title}</strong><span>{note}</span></figcaption>
            </figure>
          ))}
        </div>,
      )}

      {renderSection(
        "08 · 主动交互",
        "让智能助手在正确的时间主动出现",
        "通过场景感知和用户控制机制，让智能助手主动提供陪伴，同时避免造成打扰。",
        <div className="nomi-proactive-grid">
          <div><span>拥堵路况</span><p>“今天路上有点堵，需要听点音乐吗？”</p></div>
          <div><span>长途驾驶</span><p>“已经驾驶一段时间，需要休息吗？”</p></div>
          <div className="nomi-control-panel">
            <strong>用户控制</strong>
            <span>出现时机</span>
            <span>触发频率</span>
            <span>对话风格</span>
          </div>
        </div>,
      )}

      {renderSection(
        "09 · 社区生态",
        "从个人创造到用户共创生态",
        "通过人格分享和交易机制，让用户创造内容，并形成持续增长的智能个性化生态。",
        <>
          <div className="nomi-creator-loop">
            {["创作", "分享", "交易", "复用"].map((item) => <strong key={item}>{item}</strong>)}
          </div>
          <div className="nomi-community-preview">
            <ZoomableImage src={nomiCommunityHome} alt="社区广场" className="image-preview-trigger" onPreview={onPreview} />
            <ZoomableImage src={nomiCommunityPost} alt="社区作品发布" className="image-preview-trigger" onPreview={onPreview} />
          </div>
        </>,
      )}

      {renderSection(
        "10 · 产品原型",
        "串联创作、使用与车机联动的完整体验",
        "产品原型围绕真实使用路径展开：用户创建人格、调整风格、应用到自己的 NOMI，并在社区和座舱场景中继续使用与分享。",
        <VisualPlaceholder
          wide
          label="10 产品原型占位"
          note="这里暂时预留给应用端高保真原型，后续补充关键页面、交互状态和完整任务流。"
        />,
      )}

      {renderSection(
        "11 · 用户测试",
        "用真实反馈优化智能体验边界",
        "通过用户测试验证个性化和主动交互的接受程度，并进一步优化智能主动行为的设计策略。",
        <div className="nomi-testing-grid">
          <div><span>发现 01</span><h3>个性化提升专属感</h3><p>用户认为定制让 NOMI 更像自己的伙伴。</p></div>
          <div><span>发现 02</span><h3>主动交互依赖场景判断</h3><p>主动交流需要减少压力，而不是增加负担。</p></div>
        </div>,
      )}

      {renderSection(
        "12 · 项目结果",
        "重新定义人与智能助手之间的关系",
        "本项目探索了智能生成、个性化设计和智能座舱结合的新型交互模式，让车载助手从功能入口逐渐成为具有情感价值的数字伙伴。",
          <div className="nomi-outcome-grid">
          <div><strong>用户价值</strong><span>更强陪伴感和归属感</span></div>
          <div><strong>产品价值</strong><span>提升智能助手长期使用价值</span></div>
          <div><strong>设计价值</strong><span>探索智能人格产品设计方法</span></div>
        </div>,
      )}
    </article>
  );

  return (
    <article className="nomi-case">
      <section className="nomi-hero">
        <div className="nomi-hero-copy">
          <span>0-1 APP DESIGN / NIO NOMI</span>
          <h1>NOMI 个性 DIY AI 辅助平台 + 社区</h1>
          <p>围绕车主的 NOMI 情感连接，搭建从 AI 生成、装扮试戴、社区发布到个人资产沉淀的一体化 App。</p>
          <div className="nomi-hero-tags">
            <strong>AI Creation</strong>
            <strong>DIY Platform</strong>
            <strong>Community</strong>
            <strong>Persona Library</strong>
          </div>
        </div>
        <div className="nomi-hero-visual">
          <img src={nomiCommunityHome} alt="NOMI 社区首页" loading="lazy" />
          <img src={nomiProfile} alt="我的 NOMI 页面" loading="lazy" />
        </div>
      </section>

      <section className="nomi-section nomi-overview">
        <div>
          <span>01 / BACKGROUND</span>
          <h2>不是单点功能改版，而是从 0 到 1 搭建新的创作生态</h2>
        </div>
        <p>
          NOMI 是蔚来车主熟悉的陪伴型车载形象。这个 App 方向把“给 NOMI 做个性化”从线下装饰和社交晒图，升级为一个可持续的 AI 创作平台：用户可以为自己的 NOMI 生成 Persona、试戴配件、发布到社区，也能保存和购买他人的灵感。
        </p>
      </section>

      <section className="nomi-section nomi-system-map">
        <div className="nomi-system-step">
          <span>CREATE</span>
          <strong>上传 NOMI</strong>
          <p>建立个性化生成对象</p>
        </div>
        <i aria-hidden="true" />
        <div className="nomi-system-step">
          <span>AI DIY</span>
          <strong>生成 Persona</strong>
          <p>通过提示词与风格选择完成创作</p>
        </div>
        <i aria-hidden="true" />
        <div className="nomi-system-step">
          <span>TRY ON</span>
          <strong>试戴装扮</strong>
          <p>让角色具备持续玩法</p>
        </div>
        <i aria-hidden="true" />
        <div className="nomi-system-step">
          <span>COMMUNITY</span>
          <strong>发布流通</strong>
          <p>沉淀社区内容和个人资产</p>
        </div>
      </section>

      <section className="nomi-section">
        <div className="nomi-section-heading">
          <span>02 / CORE FLOWS</span>
          <h2>核心流程展示</h2>
          <p>同一个流程中的多张 App 截图会在同一手机位置切换。鼠标放在手机截图上前后滚动，可以控制当前页数。</p>
        </div>
        <div className="nomi-flow-list">
          {nomiFlowGroups.map((group) => (
            <NomiFlowCarousel key={group.index} group={group} onPreview={onPreview} />
          ))}
        </div>
      </section>

      <section className="nomi-section nomi-visual-language">
        <div>
          <span>03 / VISUAL LANGUAGE</span>
          <h2>深色车机底色 + 青绿色荧光，让 AI 平台更贴近 NOMI 的科技陪伴感</h2>
          <p>
            页面延续截图中的深色渐变背景、半透明玻璃卡片和高亮青绿色行动色。社区卡片保持图片优先，DIY 与资产页则用更强的边框光感承接生成、积分和购买等平台属性。
          </p>
        </div>
        <div className="nomi-palette" aria-label="NOMI 视觉色彩">
          <span style={{ "--swatch": "#071715" }}>Ink</span>
          <span style={{ "--swatch": "#113936" }}>Glass</span>
          <span style={{ "--swatch": "#08d6d1" }}>NOMI Cyan</span>
          <span style={{ "--swatch": "#f4fffb" }}>Soft White</span>
        </div>
      </section>

      <section className="nomi-section nomi-library">
        <div className="nomi-section-heading">
          <span>04 / PERSONA LIBRARY</span>
          <h2>让生成结果成为可管理、可复用、可运营的个人资产</h2>
          <p>个人中心不仅展示积分和订单，也把已创建、已发布、已购买的 Persona 收纳进库，给后续会员、活动和社区交易留下空间。</p>
        </div>
        <div className="nomi-library-grid">
          {nomiPersonaLibrary.map(([src, title]) => (
            <button
              className="nomi-library-item"
              type="button"
              key={title}
              onClick={() => onPreview({ src, alt: title })}
              aria-label={`放大查看 ${title}`}
            >
              <img src={src} alt={title} loading="lazy" />
            </button>
          ))}
        </div>
      </section>
    </article>
  );
}

function FullImageCaseStudy({ work, meta, onPreview }) {
  if (!work) {
    return null;
  }

  return (
    <article className="full-image-case" aria-label={meta.projectName}>
      <button
        className="full-image-preview-trigger"
        type="button"
        onClick={() => onPreview({ src: work.src, alt: work.alt })}
        aria-label={`放大查看 ${meta.projectName}`}
      >
        <img src={work.src} alt={work.alt} loading="lazy" />
      </button>
    </article>
  );
}

function ZheguangjiCaseStudy({ onPreview }) {
  const columns = [
    zheguangjiImages.filter((_, index) => index % 2 === 0),
    zheguangjiImages.filter((_, index) => index % 2 === 1),
  ];

  return (
    <article className="zheguangji-case" aria-label="折光记图片跑马灯">
      <div className="zheguangji-marquee">
        {columns.map((images, columnIndex) => (
          <div className="zheguangji-column" key={columnIndex}>
            <div className="zheguangji-track">
              {[...images, ...images].map((src, imageIndex) => {
                const imageNumber = (imageIndex % images.length) * 2 + columnIndex + 1;
                const alt = `折光记图片 ${String(imageNumber).padStart(2, "0")}`;

                return (
                  <button
                    className="zheguangji-image-button"
                    type="button"
                    key={`${columnIndex}-${imageIndex}`}
                    onClick={() => onPreview({ src, alt })}
                    aria-label={`放大查看 ${alt}`}
                    aria-hidden={imageIndex >= images.length ? "true" : undefined}
                    tabIndex={imageIndex >= images.length ? -1 : undefined}
                  >
                    <img src={src} alt={alt} loading="lazy" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

const educationItems = [
  "本科 / 上海交通大学 / 工业设计",
  "硕士 / 香港理工大学 / 智能系统设计",
];

const capabilityGroups = [
  {
    title: "产品体验设计",
    items: ["用户研究", "需求分析", "信息架构", "交互流程", "体验优化"],
  },
  {
    title: "UIUX设计",
    items: ["界面设计", "设计系统", "视觉规范", "动态效果"],
  },
  {
    title: "智能交互方向",
    items: ["AI产品设计", "多端体验设计", "软硬件协同智能系统设计"],
  },
];

const internshipItems = [
  {
    title: "京东科技 | 产品体验设计实习生",
    date: "2026.7-至今",
    highlights: [
      ["数据洞察与功能设计", "「京通App」用户行为数据分析 / 政务服务场景洞察 / 用户需求挖掘 / 功能方案设计"],
      ["UIUX设计与落地", "GtoC 产品页面设计 / 交互流程优化 / UI与交互方案 / 研发协作 / 设计落地"],
    ],
  },
  {
    title: "传音 Transsion | 体验设计实习生",
    logo: "Transsion传音",
    date: "2026.4-2026.6",
    highlights: [
      ["多端体验迭代", "「Hi Translate」多端设计 / 新视觉风格及组件库建设 / 界面统一性优化"],
      ["AI功能与交互设计", "AI 翻译功能体验优化 / 状态变化及动态反馈强化"],
      ["视觉与运营设计", "App Store商店图设计 / 产品卖点视觉提炼 / 推广视觉素材输出"],
    ],
  },
  {
    title: "驰骛信息科技 | UI 设计实习生",
    date: "2025.6-2025.8",
    highlights: [
      ["运营UI设计", "「快乐会」限时促销、裂变互动/轮播图/二级页头图/贴脸图/配套视觉物料"],
      ["产品UI设计", "「戴森」/「福维克」小程序局部UI优化、设计"],
    ],
  },
  {
    title: "晨曦控股 | 产品 UIUX 设计实习生",
    date: "2025.2-2025.4",
    highlights: [
      ["C端小程序·房见 / 蘑淘好房", "会员充值及邀新解锁功能及UI设计 / 微信分享页设计 / 加载MG动画"],
      ["B端产品·投资研判分析平台AUR", "功能模块地图研判交互原型设计 / 系统升级页UI及3D动效设计"],
      ["C端运营设计", "从0到1搭建冷启动阶段社交媒体视觉体系，制定标准化运营视觉SOP"],
    ],
  },
];

const projectItems = [
  {
    title: "NOMI Studio | 蔚来NIO校企合作项目",
    logos: ["NIO", "POLY U DESIGN"],
    date: "2026.4-2026.6",
    highlights: [
      ["用户洞察与产品设计", "户调研 / 桌面调研 / 社交媒体分析 / 用户需求洞察"],
      ["AI 产品设计", "NOMI Persona AI 辅助定制平台 / AI驱动的角色定制 / 用户需求输入 / 生成与声音定制"],
      ["体验创新设计", "驾驶场景交互 / 用户偏好与控制机制 / HMI中控交互原型 / 社区生态"],
    ],
  },
  {
    title: "手机系统动效隐喻设计评估 | 荣耀Honor校企合作项目",
    date: "2024.9-2025.1",
    highlights: [
      ["竞品分析", "系统动效案例研究 / 动效隐喻分析 / 设计规律洞察"],
      ["实验分析", "眼动追踪实验 / 用户反馈分析 / 体验价值评估"],
    ],
  },
  {
    title: "智能化跌倒预防APP | 复旦大学附属肿瘤医院校企合作项目",
    date: "2024.9-2024.12",
    highlights: [
      ["用户研究", "用户调研 / 数据分析 / 需求洞察"],
      ["产品设计", "功能架构设计 / 高保真原型设计 / 可用性测试"],
    ],
  },
];

function AboutPage({ onBackWorks }) {
  return (
    <article className="about-page" aria-label="关于我" onClick={(event) => event.stopPropagation()}>
      <button className="about-home-button" type="button" onClick={onBackWorks} aria-label="返回设计作品集">
        <img src={detailHomeImage} alt="" draggable="false" aria-hidden="true" />
      </button>
      <section className="about-sheet">
        <div className="about-orbit" aria-hidden="true" />
        <header className="about-hero">
          <div>
            <span>ABOUT ME</span>
            <h1>Designer（蒋语阳）</h1>
          </div>
          <p>以研究建立判断，用界面承接体验，把复杂系统整理成清晰、可感知、愿意继续使用的产品。</p>
        </header>

        <div className="about-grid about-grid-top">
          <section className="about-section">
            <h2>教育经历</h2>
            <div className="about-lines">
              {educationItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <section className="about-section">
            <h2>核心能力</h2>
            <div className="capability-list">
              {capabilityGroups.map((group) => (
                <div className="capability-item" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(" | ")}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="about-grid about-grid-main">
          <section className="about-section">
            <h2>实习经历</h2>
            <ExperienceList items={internshipItems} />
          </section>

          <section className="about-section">
            <h2>项目经验</h2>
            <ExperienceList items={projectItems} compact />
          </section>
        </div>
      </section>
    </article>
  );
}

function ExperienceList({ items, compact = false }) {
  return (
    <div className={`experience-list${compact ? " is-compact" : ""}`}>
      {items.map((item) => (
        <section className="experience-item" key={item.title}>
          <header>
            <div>
              <h3>{item.title}</h3>
              {item.logo ? <strong>{item.logo}</strong> : null}
            </div>
            <time>{item.date}</time>
          </header>
          <div className="experience-points">
            {item.highlights.map(([label, detail]) => (
              <p key={label}>
                <strong>{label}</strong>
                <span>{detail}</span>
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function getPortfolioRoute() {
  const hash = window.location.hash.replace(/^#/, "");

  if (hash === "about") {
    return { isAbout: true, isRevealed: true, activeWork: null };
  }

  if (hash === "works") {
    return { isAbout: false, isRevealed: true, activeWork: null };
  }

  if (hash.startsWith("work/")) {
    const workId = decodeURIComponent(hash.slice(5));
    const hasWork = filmFrames.some((frame) => frame.id === workId);

    if (hasWork) {
      return { isAbout: false, isRevealed: true, activeWork: workId };
    }
  }

  return { isAbout: false, isRevealed: false, activeWork: null };
}

function setPortfolioRoute({ isAbout = false, isRevealed, activeWork }) {
  const nextHash = isAbout ? "#about" : activeWork ? `#work/${encodeURIComponent(activeWork)}` : isRevealed ? "#works" : "";
  const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;

  if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextUrl) {
    window.history.pushState(null, "", nextUrl);
  }
}

export function App() {
  const initialRoute = getPortfolioRoute();
  const [isAbout, setIsAbout] = useState(initialRoute.isAbout);
  const [isRevealed, setIsRevealed] = useState(initialRoute.isRevealed);
  const [activeWork, setActiveWork] = useState(initialRoute.activeWork);
  const [isDetailEntering, setIsDetailEntering] = useState(false);
  const [isDetailScrolling, setIsDetailScrolling] = useState(false);
  const [lensStop, setLensStop] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const lensRef = useRef(null);
  const filmScrollRef = useRef(null);
  const detailScrollRef = useRef(null);
  const detailTimerRef = useRef(0);
  const detailScrollTimerRef = useRef(0);
  const isDetailOpen = activeWork !== null;
  const activeWorkMeta = workMeta[activeWork] ?? workMeta.translation;
  const activeFullImageWork = fullImageWorks[activeWork];

  useEffect(() => {
    const syncRoute = () => {
      const route = getPortfolioRoute();

      window.clearTimeout(detailTimerRef.current);
      setIsDetailEntering(false);
      setIsAbout(route.isAbout);
      setIsRevealed(route.isRevealed);
      setActiveWork(route.activeWork);
      setLensStop(null);
    };

    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);

    return () => {
      window.clearTimeout(detailTimerRef.current);
      window.clearTimeout(detailScrollTimerRef.current);
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
    };
  }, []);

  useEffect(() => {
    if (!isDetailOpen || !filmScrollRef.current) {
      return;
    }

    const scrollArea = filmScrollRef.current;
    let frameId = 0;
    const timeoutIds = [];
    let resizeObserver = null;

    const centerActiveFrame = () => {
      if (isDetailEntering) {
        return;
      }

      const activeFrame = scrollArea.querySelector(".is-active-work");

      if (!activeFrame) {
        return;
      }

      activeFrame.blur();
      const targetTop = activeFrame.offsetTop - (scrollArea.clientHeight - activeFrame.offsetHeight) / 2;
      scrollArea.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    };

    if (isDetailEntering) {
      timeoutIds.push(window.setTimeout(centerActiveFrame, 1360));
      timeoutIds.push(window.setTimeout(centerActiveFrame, 1540));
    } else {
      frameId = requestAnimationFrame(centerActiveFrame);
      timeoutIds.push(window.setTimeout(centerActiveFrame, 360));
      timeoutIds.push(window.setTimeout(centerActiveFrame, 760));
    }

    window.addEventListener("resize", centerActiveFrame);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(centerActiveFrame);
      resizeObserver.observe(scrollArea);
    }

    return () => {
      cancelAnimationFrame(frameId);
      timeoutIds.forEach(window.clearTimeout);
      window.removeEventListener("resize", centerActiveFrame);
      resizeObserver?.disconnect();
    };
  }, [activeWork, isDetailEntering, isDetailOpen]);

  useEffect(() => {
    detailScrollRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeWork]);

  function getCurrentLensAngle() {
    const transform = window.getComputedStyle(lensRef.current).transform;

    if (!transform || transform === "none") {
      return 0;
    }

    const matrix = new DOMMatrixReadOnly(transform);
    const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);

    return angle < 0 ? angle + 360 : angle;
  }

  function revealFilmRoll(event) {
    event.stopPropagation();
    const start = getCurrentLensAngle();

    setLensStop({
      start: `${start}deg`,
      end: `${start + 295}deg`,
    });
    setIsAbout(false);
    setIsRevealed(true);
    setPortfolioRoute({ isRevealed: true, activeWork: null });
  }

  function toggleWorksRoll(event) {
    event.stopPropagation();
    setIsRevealed((current) => {
      if (current) {
        window.clearTimeout(detailTimerRef.current);
        setIsDetailEntering(false);
        setLensStop(null);
        setIsAbout(false);
        setActiveWork(null);
        setPortfolioRoute({ isRevealed: false, activeWork: null });
        return false;
      }

      const start = getCurrentLensAngle();

      setLensStop({
        start: `${start}deg`,
        end: `${start + 295}deg`,
      });
      setPortfolioRoute({ isRevealed: true, activeWork: null });
      return true;
    });
  }

  function openAboutPage(event) {
    event.stopPropagation();
    window.clearTimeout(detailTimerRef.current);
    setIsDetailEntering(false);
    setLensStop(null);
    setActiveWork(null);
    setIsRevealed(true);
    setIsAbout(true);
    setPortfolioRoute({ isAbout: true, isRevealed: true, activeWork: null });
  }

  function keepFilmStripOpen(event) {
    event.stopPropagation();
  }

  function resetFilmRoll() {
    if (isDetailOpen) {
      return;
    }

    if (isRevealed) {
      window.clearTimeout(detailTimerRef.current);
      setIsDetailEntering(false);
      setLensStop(null);
      setIsAbout(false);
      setIsRevealed(false);
      setActiveWork(null);
      setPortfolioRoute({ isRevealed: false, activeWork: null });
    }
  }

  function returnToFirstScreen(event) {
    event.stopPropagation();
    window.clearTimeout(detailTimerRef.current);
    setIsDetailEntering(false);
    setLensStop(null);
    setIsAbout(false);
    setIsRevealed(false);
    setActiveWork(null);
    setPortfolioRoute({ isRevealed: false, activeWork: null });
  }

  function returnToWorksScreen(event) {
    event.stopPropagation();
    window.clearTimeout(detailTimerRef.current);
    setIsDetailEntering(false);
    setLensStop(null);
    setIsAbout(false);
    setIsRevealed(true);
    setActiveWork(null);
    setPortfolioRoute({ isRevealed: true, activeWork: null });
  }

  function handleDetailScroll() {
    setIsDetailScrolling(true);
    window.clearTimeout(detailScrollTimerRef.current);
    detailScrollTimerRef.current = window.setTimeout(() => {
      setIsDetailScrolling(false);
    }, 700);
  }

  function openWorkDetail(event, workId) {
    event.stopPropagation();

    if (isDetailOpen && activeWork === workId) {
      return;
    }

    if (!isRevealed) {
      setIsRevealed(true);
    }
    setIsAbout(false);
    window.clearTimeout(detailTimerRef.current);
    setIsDetailEntering(!isDetailOpen);
    setActiveWork(workId);
    setPortfolioRoute({ isRevealed: true, activeWork: workId });
    detailTimerRef.current = window.setTimeout(() => {
      setIsDetailEntering(false);
    }, 1320);
  }

  return (
    <main
      className={`portfolio-page${isRevealed ? " is-revealed" : ""}${isDetailOpen ? " is-detail" : ""}${
        isAbout ? " is-about" : ""
      }${
        isDetailEntering ? " is-detail-entering" : ""
      }${activeFullImageWork ? " is-full-image-detail" : ""}${
        isDetailScrolling ? " is-detail-scrolling" : ""
      }`}
      aria-label="Portfolio"
      style={
        isDetailOpen
          ? {
              "--detail-bg-base": activeWorkMeta.base,
              "--detail-bg-middle": activeWorkMeta.middle,
              "--detail-bg-accent": activeWorkMeta.accent,
              "--detail-bg-cool": activeWorkMeta.cool,
            }
          : undefined
      }
    >
      <section className="figma-stage" onClick={resetFilmRoll}>
        <img className="portfolio-title" src={portfolioSvg} alt="portfolio" draggable="false" />
        <div className="camera-float-group">
        <img className="camera-body" src={cameraSvg} alt="复古相机" draggable="false" />
        <button className="design-works-title" type="button" onClick={openAboutPage} aria-label="查看关于我">
          <img className="design-title-image design-title-works" src={designWorksTitleSvg} alt="设计作品集" draggable="false" />
          <img className="design-title-image design-title-about" src={aboutMeTitleSvg} alt="关于我" draggable="false" />
        </button>
        <img
          ref={lensRef}
          className="camera-lens"
          src={lensSvg}
          alt=""
          draggable="false"
          aria-hidden="true"
          style={
            lensStop
              ? {
                  "--lens-start": lensStop.start,
                  "--lens-stop": lensStop.end,
                }
              : undefined
          }
        />
        </div>
        <img className="click-hint" src={clickHereSvg} alt="Click Here" draggable="false" />
        <div className="film-strip-mask" onClick={keepFilmStripOpen}>
          <div className="film-roll-scroll" ref={filmScrollRef} aria-label="胶片作品列表">
            <img className="film-roll" src={filmRollSvg} alt="" draggable="false" />
            <img className="film-roll-top" src={filmTopSvg} alt="作品列表 UIUX设计 26.8" draggable="false" />
            <button className="detail-home-button" type="button" aria-label="返回首页" onClick={returnToFirstScreen}>
              <img src={detailHomeImage} alt="" draggable="false" aria-hidden="true" />
            </button>
            <div className="film-frames">
              {filmFrames.map((frame, index) => (
                <button
                  className={`film-frame film-frame-${index + 1}${activeWork === frame.id ? " is-active-work" : ""}`}
                  type="button"
                  key={frame.id}
                  aria-label={`查看 ${frame.label} 作品介绍`}
                  onClick={(event) => openWorkDetail(event, frame.id)}
                >
                  {workCoverImages[index] || frame.image ? (
                    <img src={workCoverImages[index] || frame.image} alt={frame.label} draggable="false" />
                  ) : (
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        <aside className="work-detail-panel" aria-hidden={!isDetailOpen} onClick={keepFilmStripOpen}>
          {activeFullImageWork ? (
            <button className="full-image-home-button" type="button" aria-label="返回首页" onClick={returnToFirstScreen}>
              <img src={detailHomeImage} alt="" draggable="false" aria-hidden="true" />
            </button>
          ) : null}
          <div className="work-detail-scroll" ref={detailScrollRef} onScroll={handleDetailScroll}>
            {activeFullImageWork ? (
              <FullImageCaseStudy work={activeFullImageWork} meta={activeWorkMeta} onPreview={setImagePreview} />
            ) : null}
            {!activeFullImageWork ? <article className="case-study">
              <section className="case-hero" aria-label="项目封面">
                <div className="case-nav">
                  {caseStudyTemplate.processTabs.map((tab) => (
                    <span key={tab}>{tab}</span>
                  ))}
                </div>
                <div className="hero-device" aria-hidden="true">
                  <div className="phone-shell">
                    <div className="phone-banner" />
                    <div className="phone-calendar">
                      <span>2025年7月</span>
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="phone-card" />
                    <div className="phone-card small" />
                  </div>
                </div>
                <div className="case-eyebrow">{activeWorkMeta.projectType} · {caseStudyTemplate.year}</div>
                <h1>{activeWorkMeta.projectName}</h1>
                <p>{activeWorkMeta.heroTagline}</p>
              </section>

              <section className="case-strip">
                <span>目标用户 · Target users</span>
                <strong>{caseStudyTemplate.targetUser}</strong>
              </section>

              <section className="case-panel case-task">
                <div>
                  <span className="section-kicker">设计任务 · Design task</span>
                  <h2>{caseStudyTemplate.designTask}</h2>
                  <p>{caseStudyTemplate.designBrief}</p>
                </div>
                <div className="task-stack">
                  {caseStudyTemplate.changeList.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>

              <section className="case-panel case-objectives">
                <span className="section-kicker">设计目标 · Design goals</span>
                <div className="objective-grid">
                  {caseStudyTemplate.objectives.map((group) => (
                    <div className="objective-row" key={group.term}>
                      <strong>{group.term}</strong>
                      <div>
                        {group.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="case-stage">
                <div className="stage-heading">
                  <h2>深入洞察场景</h2>
                  <span>1 体验&nbsp;&nbsp;2 用户市场分析&nbsp;&nbsp;3 竞品分析</span>
                </div>
                {caseStudyTemplate.researchSections.map((section) => (
                  <div className="case-panel research-card" key={section.label}>
                    <div className="research-label">{section.label}</div>
                    <div>
                      <span className="section-kicker">{section.intro}</span>
                      <h3>{section.title}</h3>
                      {section.points ? (
                        <div className="insight-grid">
                          {section.points.map((point, index) => (
                            <p key={point}>
                              <strong>{String.fromCharCode(65 + index)}</strong>
                              {point}
                            </p>
                          ))}
                        </div>
                      ) : null}
                      {section.table ? (
                        <div className="interview-table">
                          {section.table.map(([label, detail]) => (
                            <div key={label}>
                              <strong>{label}</strong>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                      {section.conclusion ? <div className="case-conclusion">{section.conclusion}</div> : null}
                    </div>
                  </div>
                ))}
              </section>

              <section className="case-panel">
                <span className="section-kicker">调研总结 · Research summary</span>
                <h2>痛点分析</h2>
                <div className="pain-grid">
                  {caseStudyTemplate.painPoints.map((pain) => (
                    <div className="pain-card" key={pain.number}>
                      <span>{pain.number}</span>
                      <h3>{pain.title}</h3>
                      <p>{pain.detail}</p>
                      <strong>{pain.direction}</strong>
                    </div>
                  ))}
                </div>
              </section>

              <section className="case-panel visual-panel">
                <span className="section-kicker">视觉规范 · Visual strategy</span>
                <div className="color-row">
                  {caseStudyTemplate.visualStrategy.colors.map((color) => (
                    <span key={color} style={{ "--swatch": color }} />
                  ))}
                </div>
                <div className="keyword-row">
                  {caseStudyTemplate.visualStrategy.keywords.map((keyword) => (
                    <strong key={keyword}>{keyword}</strong>
                  ))}
                </div>
                <div className="type-row">
                  {caseStudyTemplate.visualStrategy.typography.map((type) => (
                    <span key={type}>{type}</span>
                  ))}
                </div>
              </section>

              <section className="case-panel solution-panel">
                <span className="section-kicker">设计方案展示 · Scheme display</span>
                <h2>从权益露出到路径转化</h2>
                <div className="solution-flow">
                  <div className="wireframe-card" />
                  <span />
                  <div className="banner-card">黑钻免费观看特权</div>
                  <span />
                  <div className="final-card">立即领取</div>
                </div>
                <div className="solution-grid">
                  {caseStudyTemplate.solutionHighlights.map((item) => (
                    <div key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="case-panel testing-panel">
                <span className="section-kicker">用户测试 · User testing</span>
                {caseStudyTemplate.testing.map(([stage, title, detail]) => (
                  <div className="testing-row" key={stage}>
                    <strong>{stage}</strong>
                    <span>{title}</span>
                    <p>{detail}</p>
                  </div>
                ))}
              </section>
            </article> : null}
          </div>
        </aside>
        <button className="shutter-hotspot" type="button" aria-label="打开胶卷作品列表" onClick={revealFilmRoll} />
        <button className="works-hotspot" type="button" aria-label={isRevealed ? "收回作品列表" : "打开作品列表"} onClick={toggleWorksRoll} />
        {isAbout ? <AboutPage onBackWorks={returnToWorksScreen} /> : null}
      </section>
      {imagePreview ? (
        <button className="image-preview-backdrop" type="button" onClick={() => setImagePreview(null)} aria-label="关闭图片预览">
          <img
            src={imagePreview.src}
            alt={imagePreview.alt}
            onClick={(event) => event.stopPropagation()}
            onLoad={(event) => {
              event.currentTarget.style.width = `${event.currentTarget.naturalWidth / 2}px`;
            }}
          />
        </button>
      ) : null}
    </main>
  );
}
