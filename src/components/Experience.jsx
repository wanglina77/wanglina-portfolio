 import { useState, useEffect } from 'react';
import avatarImg from '../assets/avatar.jpg';

 const jobs = [
   {
     period: '2021.11 — 2026.01',
     company: '北京数字认证股份有限公司',
     role: '高级产品经理',
     tag: '数据安全 · B端产品+解决方案',
     details: [
       '负责产品需求调研分析（市场/竞品分析）、原型设计、研发跟进、验收、迭代管理等产品全生命周期管理',
       '搭建全国售前培训体系，完成8大区300+售前人员培训认证；优化产品报价策略，拓展中小企业用户',
       '主导头部政企项目方案撰写与产品支撑，落地千万级标杆项目',
       '主导云服务密码产品设计，优化密码资源池管理、密钥管理、证书管理、实时监控告警等核心模块',
     ],
     results: ['市场占有率提升9%', '产品线年营收破亿，同比增长16%', '单项目均价2000万+', '运维成本降36%'],
     accent: '#00d4ff',
   },
   {
     period: '2019.04 — 2021.10',
     company: '腾讯科技有限责任公司',
     role: '产品经理',
     tag: '游戏分发 · C端用户增长',
     details: [
       '负责爱玩游戏中心与小游戏专区用户增长，多维度需求分析并跟进研发落地上线，根据上线数据分析进行产品优化，维护需求与版本管理',
       '统筹多部门50+人跨地域团队协作，建立标准化协作流程，敏捷开发',
     ],
     results: ['推动20+次产品迭代按期上线', '付费率提升5%', '精细化运营效率提升'],
     accent: '#8b5cf6',
   },
   {
     period: '2015.12 — 2019.03',
     company: '中投摩根信息技术(北京)有限责任公司',
     role: '产品经理',
     tag: '投资理财 · C端用户体验',
     details: [
       '独立负责投资理财APP及PC官网的产品设计与迭代管理，负责UI/UX全流程设计与体验优化',
       '主导借款端后台管理系统从0到1搭建，完成竞品调研、需求分析、功能规划、原型设计',
       '对接风控、运营、客户多方，协同市场、运营支撑活动落地',
     ],
     results: ['推动产品0-1设计与上线', '付费转化率提升18%', '业务办理从2天→0.5天'],
     accent: '#14b8a6',
   },
 ];

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setActiveJob((prev) => (prev + 1) % jobs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hovered]);

  const job = jobs[activeJob];

   return (
     <section id="experience" className="exp-section">
       <div className="container">
         <div className="exp-header">
           <div className="section-label">WORK EXPERIENCE</div>
           <h2 className="section-title">工作<span className="highlight">经历</span></h2>
         </div>

         <div className="exp-layout">
           <div className="exp-left">
             <div className="avatar-card">
               <div className="avatar-ring">
                 <div className="avatar-inner">
                   <div className="avatar-photo">
                     <img src={avatarImg} alt="王丽娜" />
                   </div>
                 </div>
               </div>
             </div>

             <div className="exp-stats">
               <div className="exp-stat">
                 <span className="exp-stat-val">500万+</span>
                 <span className="exp-stat-lbl">日活用户</span>
               </div>
               <div className="exp-stat">
                 <span className="exp-stat-val">亿级</span>
                 <span className="exp-stat-lbl">B端营收</span>
               </div>
               <div className="exp-stat">
                 <span className="exp-stat-val">10+</span>
                 <span className="exp-stat-lbl">大型项目</span>
               </div>
               <div className="exp-stat">
                 <span className="exp-stat-val">8年+</span>
                 <span className="exp-stat-lbl">行业经验</span>
               </div>
             </div>
           </div>

          <div className="exp-right">
            <div
              className="exp-timeline-nav-wrapper"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
            <div className="exp-timeline-nav">
              {jobs.map((j, i) => (
                <button
                  key={i}
                  className={`exp-timeline-btn${i === activeJob ? ' active' : ''}`}
                   style={i === activeJob ? { '--btn-accent': j.accent } : {}}
                   onClick={() => setActiveJob(i)}
                 >
                   <span className="exp-timeline-dot" />
                   <div className="exp-timeline-info">
                     <span className="exp-timeline-period">{j.period}</span>
                     <span className="exp-timeline-company">{j.company}</span>
                   </div>
                 </button>
              ))}
            </div>
            </div>

            <div className="exp-detail" style={{ '--detail-accent': job.accent }}>
               <div className="exp-detail-header">
                 <span className="exp-role">{job.role}</span>
                 <span className="exp-tag">{job.tag}</span>
               </div>
               <ul className="exp-detail-list">
                 {job.details.map((d, i) => (
                   <li key={i} className="exp-detail-item">{d}</li>
                 ))}
               </ul>
               <div className="exp-results">
                 <span className="exp-results-label">核心成果</span>
                 <div className="exp-results-tags">
                   {job.results.map((r, i) => (
                     <span key={i} className="exp-result-tag">{r}</span>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 }
