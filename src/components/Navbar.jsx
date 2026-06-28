 import { useState, useEffect } from 'react';

 const navLinks = [
   { id: 'experience', label: '工作经历' },
   { id: 'projects', label: '项目案例' },
   { id: 'skills', label: '技能证书' },
   { id: 'contact', label: '联系方式' },
 ];

 export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const [active, setActive] = useState('');
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
     const onScroll = () => {
       const scrollY = window.scrollY;
       setScrolled(scrollY > 80);

       const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
       let current = '';
       for (const section of sections) {
         const rect = section.getBoundingClientRect();
         if (rect.top <= 200) {
           current = section.id;
         }
       }
       setActive(current);
     };
     window.addEventListener('scroll', onScroll, { passive: true });
     onScroll();
     return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const scrollTo = (id) => {
     setMenuOpen(false);
     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
     <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
       <div className="navbar-inner container">
         <button className="navbar-logo" onClick={() => scrollTo('hero')}>
           <span className="logo-dot" />
           <span className="logo-text">王丽娜</span>
         </button>

         <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
           {navLinks.map((link) => (
             <button
               key={link.id}
               className={`nav-link${active === link.id ? ' active' : ''}`}
               onClick={() => scrollTo(link.id)}
             >
               {link.label}
             </button>
           ))}
         </div>

         <a href="mailto:wendyok007@163.com" className="nav-contact-link" aria-label="发邮件">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
             <polyline points="22,6 12,13 2,6"/>
           </svg>
         </a>

         <button
           className={`hamburger${menuOpen ? ' open' : ''}`}
           onClick={() => setMenuOpen(!menuOpen)}
           aria-label="菜单"
         >
           <span /><span /><span />
         </button>
       </div>
     </nav>
   );
 }
