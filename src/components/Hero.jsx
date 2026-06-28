 import { useEffect, useRef } from 'react';

 export default function Hero() {
   const canvasRef = useRef(null);

   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
     const ctx = canvas.getContext('2d');
     let animId;

     const resize = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
     resize();
     window.addEventListener('resize', resize);

     const particles = [];
     const count = 100;
     const connectionDist = 180;

     for (let i = 0; i < count; i++) {
       particles.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         vx: (Math.random() - 0.5) * 0.3,
         vy: (Math.random() - 0.5) * 0.3,
         r: Math.random() * 1.5 + 0.5,
       });
     }

     const draw = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);

       for (const p of particles) {
         p.x += p.vx;
         p.y += p.vy;
         if (p.x < 0) p.x = canvas.width;
         if (p.x > canvas.width) p.x = 0;
         if (p.y < 0) p.y = canvas.height;
         if (p.y > canvas.height) p.y = 0;

         ctx.beginPath();
         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
         ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
         ctx.fill();
       }

       for (let i = 0; i < particles.length; i++) {
         for (let j = i + 1; j < particles.length; j++) {
           const dx = particles[i].x - particles[j].x;
           const dy = particles[i].y - particles[j].y;
           const dist = Math.sqrt(dx * dx + dy * dy);
           if (dist < connectionDist) {
             const alpha = 1 - dist / connectionDist;
             ctx.beginPath();
             ctx.moveTo(particles[i].x, particles[i].y);
             ctx.lineTo(particles[j].x, particles[j].y);
             ctx.strokeStyle = `rgba(0, 212, 255, ${alpha * 0.15})`;
             ctx.lineWidth = 0.5;
             ctx.stroke();
           }
         }
       }

       animId = requestAnimationFrame(draw);
     };

     draw();

     return () => {
       cancelAnimationFrame(animId);
       window.removeEventListener('resize', resize);
     };
   }, []);

   const scrollToExp = () => {
     document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
     <section id="hero" className="hero-section">
       <canvas ref={canvasRef} className="hero-canvas" />
       <div className="hero-overlay" />

       <div className="hero-content container">
         <div className="hero-badge">产品经理 · PMP</div>
         <h1 className="hero-title">王丽娜</h1>
         <p className="hero-subtitle">
           拥有<span className="hl">百万日活C端产品</span>与<span className="hl">亿级营收B端产品</span>经验
         </p>
         <p className="hero-desc">
           AI产品设计 · 数据分析 · 数据安全 · 用户增长 · 政企大客户交付
         </p>
         <div className="hero-actions">
           <button className="btn-primary" onClick={scrollToExp}>
             查看履历
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
           </button>
         </div>
       </div>

       <div className="scroll-indicator" onClick={scrollToExp}>
         <span>向下探索</span>
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
       </div>
     </section>
   );
 }
