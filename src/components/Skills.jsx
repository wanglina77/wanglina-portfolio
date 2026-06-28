 const skillGroups = [
   {
     title: '产品技能',
     icon: (
       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
         <line x1="3" y1="9" x2="21" y2="9"/>
         <line x1="9" y1="21" x2="9" y2="9"/>
       </svg>
     ),
     items: ['用户研究', '需求分析', '原型设计', 'PRD撰写', '用户体验优化'],
     color: '#4a7cff',
   },
   {
     title: 'AI 能力',
     icon: (
       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
       </svg>
     ),
     items: ['RAG检索增强生成', '知识库搭建', 'Prompt工程', 'AI对话设计', '意图识别', 'Vibecoding'],
     color: '#8b5cf6',
   },
   {
     title: '项目管理',
     icon: (
       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
         <line x1="18" y1="20" x2="18" y2="10"/>
         <line x1="12" y1="20" x2="12" y2="4"/>
         <line x1="6" y1="20" x2="6" y2="14"/>
         <line x1="2" y1="20" x2="22" y2="20"/>
       </svg>
     ),
     items: ['敏捷开发', '跨团队协作', '数据驱动决策', '产品迭代管理'],
     color: '#14b8a6',
   },
   {
     title: '工具掌握',
     icon: (
       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
         <circle cx="12" cy="12" r="3"/>
         <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
       </svg>
     ),
    items: ['Codex', 'Cursor', 'Figma', 'Axure', 'Pixso', 'Photoshop', '墨刀', 'Xmind', 'Visio', 'Office', '剪映'],
     color: '#ec4899',
   },
 ];

 const education = [
   { school: '北京理工大学', degree: '工商管理 · 全日制硕士', period: '2024.09 - 2026.06', note: '非遗创业项目创新奖' },
   { school: '唐山学院', degree: '电子信息工程 · 全日制本科', period: '2011.09 - 2015.06', note: '学生会组织部部长 · 国家奖学金' },
 ];

 export default function Skills() {
   return (
     <section id="skills" className="skills-section">
       <div className="skills-bg">
         <div className="skills-bg-grid" />
         <div className="skills-bg-overlay" />
       </div>

       <div className="container skills-content">
         <div className="section-label">SKILLS & CERTIFICATES</div>
         <h2 className="section-title">技能<span className="highlight">证书</span></h2>
         <p className="section-subtitle" style={{ marginBottom: 56 }}>
           兼具 C 端与 B 端产品能力，以 AI 赋能产品创新，实现用户价值与商业价值的统一
         </p>

         <div className="skills-grid">
           {skillGroups.map((group, i) => (
             <div key={i} className="skill-card" style={{ '--card-accent': group.color }}>
               <div className="skill-card-header">
                 <div className="skill-icon" style={{ color: group.color, background: `${group.color}12` }}>
                   {group.icon}
                 </div>
                 <h3 className="skill-title">{group.title}</h3>
               </div>
               <div className="skill-items">
                 {group.items.map((item, j) => (
                   <span key={j} className="skill-item">{item}</span>
                 ))}
               </div>
             </div>
           ))}
         </div>

         <div className="edu-block">
           <h3 className="edu-heading">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
               <path d="M6 12v5c3 3 9 3 12 0v-5"/>
             </svg>
             教育经历
           </h3>
           <div className="edu-list">
             {education.map((edu, i) => (
               <div key={i} className="edu-item">
                 <div className="edu-left">
                   <span className="edu-school">{edu.school}</span>
                   <span className="edu-degree">{edu.degree}</span>
                 </div>
                 <div className="edu-right">
                   <span className="edu-period">{edu.period}</span>
                   {edu.note && <span className="edu-note">{edu.note}</span>}
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 }
