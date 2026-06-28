 export default function Contact() {
   return (
     <section id="contact" className="contact-section">
       <div className="contact-bg" />
       <div className="contact-content container">
         <div className="contact-top">
           <div className="section-label" style={{ justifyContent: 'center' }}>GET IN TOUCH</div>
           <h2 className="contact-heading">
             让我们一起<span className="highlight">创造</span>价值
           </h2>
           <p className="contact-desc">
             当前开放产品经理岗位机会，欢迎推荐或直接联系
           </p>
         </div>

         <div className="contact-cards">
           <a href="tel:15600900350" className="contact-card">
             <div className="contact-card-icon">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
               </svg>
             </div>
             <span className="contact-card-label">电话</span>
             <span className="contact-card-value">15600900350</span>
           </a>

           <a href="mailto:wendyok007@163.com" className="contact-card">
             <div className="contact-card-icon">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                 <polyline points="22,6 12,13 2,6"/>
               </svg>
             </div>
             <span className="contact-card-label">邮箱</span>
             <span className="contact-card-value">wendyok007@163.com</span>
           </a>

           <div className="contact-card">
             <div className="contact-card-icon">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                 <circle cx="12" cy="10" r="3"/>
               </svg>
             </div>
             <span className="contact-card-label">所在地</span>
             <span className="contact-card-value">河北邯郸 · 北京</span>
           </div>
         </div>

         <div className="contact-divider" />

         <div className="contact-footer">
           <p>© {new Date().getFullYear()} 王丽娜 · 产品经理作品集</p>
         </div>
       </div>
     </section>
   );
 }
