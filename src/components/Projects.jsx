import { useState, useRef, useEffect, useCallback } from 'react';
import gameScreenshot1 from '../assets/game-screenshot1.png';
import gameScreenshot2 from '../assets/game-screenshot2.png';

const projects = [
  {
    title: '密码服务平台产品建设',
    subtitle: '云服务密码 · 商业化 · 可视化大屏',
    period: '2021.12 - 2025.01',
    gradient: 'linear-gradient(135deg, #070720 0%, #0a0a2e 50%, #070720 100%)',
    accent: '#f59e0b',
    highlights: [
      '主导云服务密码产品设计，优化密码资源池管理、密钥管理、证书管理、实时监控告警等核心模块，降低技术依赖，节省运维人工成本',
      '构建密码应用效果、接口调用、监控运维、资源池用量等多维度可视化大屏，实现密码服务全链路实时监控与态势感知',
      '搭建云开放平台自助订阅体系，支持多租户授权、计量计费；设计用户分层、功能分层的个性化报价策略',
      '完成密评项目方案与产品支撑，个性化定制支持，落地密改交付50+项目',
    ],
    results: ['年营收破亿', '同比增16%', '落地50+项目', '运维成本降36%'],
  },
  {
    title: 'AI 运维知识库（RAG 系统）',
    subtitle: 'RAG 检索增强生成系统 · 智能运维',
    period: '2025.01 - 2025.10',
    gradient: 'linear-gradient(135deg, #070720 0%, #0a1a35 50%, #070720 100%)',
    accent: '#4a7cff',
    highlights: [
      '对接运维、研发、算法多团队，完成50+用户问卷与访谈，输出PRD及原型设计，明确产品落地方向',
      '主导LLM模型选型（GPT-4+文心一言），设计文档分块策略（滑动窗口+语义分块）、混合检索（向量+关键词）、Reranking重排序、多轮对话上下文管理',
      '完成提示词工程设计与优化（10+场景模板），搭建检索性能、方案质量、系统稳定性、用户行为、成本五大监控体系',
    ],
    results: ['P50=1.8s 检索响应', '方案准确率≥85%', '新人培训周期缩短40%', '节省人力成本23%'],
  },
  {
    title: '政务信创终端监管产品建设',
    subtitle: '信创监管 · 终端管控 · 态势感知',
    period: '2025.10 - 2026.01',
    gradient: 'linear-gradient(135deg, #070720 0%, #0a1a1a 50%, #070720 100%)',
    accent: '#ec4899',
    highlights: [
      '主导与国家密码局、新创监管中心跨单位协作，完成产品需求沟通与0→1上线交付',
      '设计并落地政务信创终端台账梳理与动态管理机制，实现终端资产全覆盖纳管',
      '构建终端安全管控、使用监测与预警态势感知一体化平台',
    ],
    results: ['覆盖百万+终端节点', '信创进程可视化', '安全监管一体化'],
  },
  {
    title: '游戏中心产品迭代与运营创新',
    subtitle: 'C端用户增长 · 游戏分发 · 亿级覆盖',
    period: '2019.06 - 2020.09',
    gradient: 'linear-gradient(135deg, #070720 0%, #1a1a0a 50%, #070720 100%)',
    accent: '#14b8a6',
    highlights: [
      '主导新手引导、试玩资格、排行榜等创新模块设计，策划首发推送精准触达机制',
      '接入算法推荐引擎实现精准推送，搭建全链路用户行为数据埋点体系',
      '建立 AB 测试快速迭代验证机制，数据驱动增长策略持续迭代',
    ],
    results: ['日活500万+', '推荐点击率提升18%', '数据驱动产品迭代'],
  },
  {
    title: '腾讯小游戏专区打造',
    subtitle: '跨平台流量整合 · 亿级用户 · H5游戏',
    period: '2020.09 - 2021.09',
    gradient: 'linear-gradient(135deg, #070720 0%, #1a0a0a 50%, #070720 100%)',
    accent: '#00d4ff',
    highlights: [
      '从0到1推动小游戏SDK接入微视、腾讯体育、片多多等多渠道，跨平台无缝运行',
      '打造中心化小游戏专区，增设智能小助手，整合分散资源位串联H5场景流量',
      '搭建全链路数据看板，数据驱动策略优化',
    ],
    results: ['覆盖用户突破1亿', '核心入口点击率提升20%+', '资源位分发效率提升50%'],
  },
  {
    title: '投资借款端后台、APP 及 PC 官网设计',
    subtitle: '投资理财 · C端用户体验 · 全流程产品设计',
    period: '2016.01 — 2019.05',
    gradient: 'linear-gradient(135deg, #070720 0%, #0a1a2e 50%, #070720 100%)',
    accent: '#8b5cf6',
    highlights: [
      '主导借款端后台管理系统从0到1搭建，完成竞品调研、需求分析、功能规划、原型设计、信息架构与交互流程梳理，实现借款全流程线上化管理',
      '负责移动端APP与PC官网全站优化升级，依据监管备案要求完成功能迭代与合规完善，新增信息披露、风险教育等核心模块',
      '协同市场、运营支撑活动落地，保障跨团队项目按期交付',
    ],
    results: ['借款业务线上化，办理时间2天→0.5天', '付费转化率提升18%', '用户操作流程简化30%'],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [autoPaused, setAutoPaused] = useState(false);
  const trackRef = useRef(null);
  const total = projects.length;

  const goTo = useCallback((index) => {
    setCurrent(Math.max(0, Math.min(index, total - 1)));
  }, [total]);

  useEffect(() => {
    if (hovered || autoPaused) return;
    const timer = setInterval(() => {
      goTo((current + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [current, hovered, autoPaused, goTo, total]);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(-${current * 100}%)`;
  }, [current]);

  const project = projects[current];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header container">
        <div className="section-label">PROJECT CASES</div>
        <h2 className="section-title">项目<span className="highlight">案例</span></h2>
        <p className="section-subtitle">
          从 C 端用户增长到 B 端商业化落地，从 AI 产品创新到政企大客户交付
        </p>
      </div>

      <div
        className="projects-carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="projects-track" ref={trackRef}>
          {projects.map((p, i) => (
            <div key={i} className="project-slide" style={{ background: p.gradient }}>
              <div className={`project-slide-inner container${i === 4 ? ' has-images' : ''}`}>
                <div className="project-slide-content">
                  <div className="project-number" style={{ color: p.accent }}>0{i + 1}</div>
                  <div className="project-period">{p.period}</div>
                  <h3 className="project-slide-title">{p.title}</h3>
                  <p className="project-slide-subtitle" style={{ color: p.accent }}>{p.subtitle}</p>
                  <ul className="project-slide-list">
                    {p.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                  <div className="project-slide-results">
                    {p.results.map((r, j) => (
                      <span key={j} className="project-slide-tag" style={{ borderColor: `${p.accent}30`, color: p.accent }}>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                {i === 4 && (
                  <div className="project-slide-images">
               <div className="project-image-wrapper fan-top">
                  <img src={gameScreenshot1} alt="腾讯小游戏专区 - 游戏截图" />
               </div>
               <div className="project-image-wrapper fan-bottom">
                  <img src={gameScreenshot2} alt="腾讯小游戏专区 - 游戏详情" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`projects-nav${hovered ? ' visible' : ''}`}>
          <button
            className="projects-nav-btn prev"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            className="projects-nav-btn next"
            onClick={() => goTo(current + 1)}
            disabled={current === total - 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className="projects-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`project-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="projects-counter">
          <span className="projects-counter-current">0{current + 1}</span>
          <span className="projects-counter-sep">/</span>
          <span className="projects-counter-total">0{total}</span>
        </div>
      </div>
    </section>
  );
}
