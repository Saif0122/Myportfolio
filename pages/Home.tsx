import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { PERSONAL_INFO, SERVICES, PROJECTS, BLOG_POSTS, SKILLS, PRICING_TIERS, PERFORMANCE_METRICS } from '../data';
import ProjectCard from '../components/ProjectCard';

const MeshGradient = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/20 blur-[120px] rounded-full"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -40, 0],
        y: [0, 60, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-purple-600/20 blur-[140px] rounded-full"
    />
    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[100px]" />
  </div>
);

const FloatingTech = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const icons = [
    { name: "React", x: "-120%", y: "-60%", delay: 0 },
    { name: "Next.js", x: "130%", y: "40%", delay: 0.2 },
    { name: "TypeScript", x: "-140%", y: "80%", delay: 0.4 },
    { name: "Node", x: "110%", y: "-90%", delay: 0.6 },
  ];

  return (
    <>
      {icons.map((icon, i) => {
        const moveX = useTransform(mouseX, [-0.5, 0.5], [i % 2 === 0 ? 30 : -30, i % 2 === 0 ? -30 : 30]);
        const moveY = useTransform(mouseY, [-0.5, 0.5], [i < 2 ? 30 : -30, i < 2 ? -30 : 30]);
        
        return (
          <motion.div
            key={icon.name}
            style={{ 
              x: moveX, 
              y: moveY, 
              left: "50%", 
              top: "50%",
              marginLeft: icon.x,
              marginTop: icon.y
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] 
            }}
            transition={{
              opacity: { delay: 1 + icon.delay },
              scale: { delay: 1 + icon.delay, type: "spring" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: icon.delay }
            }}
            className="absolute z-20 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl hidden lg:block"
          >
            <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">{icon.name}</span>
          </motion.div>
        );
      })}
    </>
  );
};

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / width - 0.5);
    mouseY.set(y / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-2xl aspect-square flex items-center justify-center perspective-[2000px] cursor-none group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label="Interactive 3D portrait of Saif Ul Islam with floating tech stack icons"
    >
      <MeshGradient />
      <FloatingTech mouseX={mouseXSpring} mouseY={mouseYSpring} />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-[75%] h-[90%] transition-shadow duration-500"
      >
        <div 
          className="relative w-full h-full rounded-[4rem] overflow-hidden border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] bg-slate-900"
          style={{ transform: "translateZ(50px)" }}
        >
          <img 
            src="/img/saif.png" 
            alt="Saif Ul Islam" 
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            onError={(e) => {
              e.currentTarget.src = "/img/saif.png";
            }}
          />
          <motion.div 
            style={{ left: shineX, top: shineY }}
            className="absolute -inset-[100%] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
        </div>
        <motion.div
          style={{ translateZ: "120px" }}
          className="absolute bottom-12 -right-12 p-8 bg-indigo-600 rounded-[2.5rem] shadow-3xl hidden md:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-white">99%</span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-indigo-100 mt-2">Code Integrity</span>
          </div>
        </motion.div>
        <div className="absolute -top-4 -left-4 flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-2xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Active Projects</span>
        </div>
      </motion.div>
    </div>
  );
};

const PerformanceSection = () => {
  return (
    <section className="py-40 bg-slate-950 relative overflow-hidden" aria-labelledby="audit-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <span className="text-indigo-500 font-black tracking-[0.3em] text-[11px] uppercase mb-8 block">Architecture Audit</span>
          <h2 id="audit-heading" className="text-5xl md:text-8xl font-black text-white tracking-tighter">Technical Integrity.</h2>
          <p className="mt-8 text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            I don't just build websites; I engineer high-performance digital infrastructure. My portfolio itself is the benchmark for the quality I deliver to my clients.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {PERFORMANCE_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[3rem] flex flex-col items-center group hover:border-indigo-500/50 transition-all"
              role="status"
              aria-label={`${metric.label} score: ${metric.score}%`}
            >
              <div className="relative w-32 h-32 mb-8">
                <svg className="w-full h-full transform -rotate-90" aria-hidden="true">
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-slate-800"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke={metric.color}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="364.4"
                    initial={{ strokeDashoffset: 364.4 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "circOut", delay: i * 0.2 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-black text-white" aria-hidden="true">{metric.score}</span>
                </div>
              </div>
              <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{metric.label}</h3>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{metric.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-20">
          <div className="flex items-center space-x-4" aria-label="Max Load Speed: Sub 1s LCP Response">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400" aria-hidden="true">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-widest">Max Load Speed</p>
              <p className="text-slate-500 text-[10px] font-medium uppercase">Sub 1s LCP Response</p>
            </div>
          </div>
          <div className="flex items-center space-x-4" aria-label="Enterprise Security: SSL & CSP Hardened">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400" aria-hidden="true">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-widest">Enterprise Security</p>
              <p className="text-slate-500 text-[10px] font-medium uppercase">SSL & CSP Hardened</p>
            </div>
          </div>
          <div className="flex items-center space-x-4" aria-label="SEO Dominance: SSR & Semantic Core">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center text-amber-400" aria-hidden="true">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-widest">SEO Dominance</p>
              <p className="text-slate-500 text-[10px] font-medium uppercase">SSR & Semantic Core</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const navigate = useNavigate();

  const FAQS = [
    { q: "What is your typical tech stack for building websites?", a: "I specialize in building high-performance, scalable web applications using React, TypeScript, and Tailwind CSS. For animations and a premium user experience, I use Framer Motion. This stack ensures your site is modern, type-safe, and incredibly fast." },
    { q: "How long does a project usually take to complete?", a: "Timeline depends on the complexity of the project. A standard landing page or portfolio usually takes 1–2 weeks, while more complex web applications might take 4–6 weeks. I provide a clear roadmap and regular updates throughout the process." },
    { q: "Can you handle the design, or do I need to provide one?", a: "I can work both ways! If you have a Figma or Adobe XD design, I can convert it into a pixel-perfect responsive website. If you don't have a design, I can create a clean, modern interface for you that aligns with your brand and focuses on user experience." },
    { q: "Will my website be SEO-friendly and work on all devices?", a: "Yes, 100%. Every site I build is mobile-responsive, meaning it looks great on phones, tablets, and desktops. I also follow SEO best practices, such as using semantic HTML, optimizing images, and ensuring fast load times to help you rank better on search engines." },
    { q: "Do you offer support or maintenance after the site is live?", a: "Definitely. I don't just build and disappear. I offer a post-launch support period to ensure everything is running smoothly. For clients who need long-term help, I also offer maintenance packages for updates, security, and performance checks." },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950">
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 lg:pt-0" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-left"
          >
            <div className="flex items-center space-x-4 mb-10">
              <motion.div initial={{ width: 0 }} animate={{ width: 60 }} className="h-[2px] bg-indigo-500" aria-hidden="true" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-400">Software Architect</span>
            </div>
            <h1 id="hero-heading" className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.8] mix-blend-difference">
              SAIF UL <br />
              <motion.span 
                animate={{ color: ["#fff", "#6366f1", "#fff"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ISLAM.
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-2 max-w-lg font-medium leading-relaxed">
            "Crafting responsive, <span className="text-white">high-performance web interfaces</span> that bridge the gap between design and functionality."
            </p>
            <p className="text-slate-400 mb-12 max-w-lg">
            Your vision, engineered into a pixel-perfect digital reality. I build scalable frontend architectures that look beautiful and perform flawlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/projects" className="group relative px-12 py-6 bg-white text-slate-950 rounded-full font-black overflow-hidden hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-500 flex items-center justify-center">
                <span className="relative z-10 uppercase tracking-widest text-xs">Explore Ecosystem</span>
                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link to="/contact" className="px-12 py-6 border border-white/10 hover:border-white/40 text-white rounded-full font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/20">
                Direct Connection
              </Link>
            </div>
          </motion.div>
          <div className="flex justify-center lg:justify-end">
            <Hero3D />
          </div>
        </div>
      </section>

      <div className="relative py-12 border-y border-white/5 bg-slate-950 overflow-hidden" role="marquee" aria-label="Key themes: Next-Gen Systems, Saif Ul Islam, UI Engineering">
        <div className="flex space-x-24 whitespace-nowrap animate-scroll">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic" aria-hidden="true">
              <span>Next-Gen Systems</span>
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span>Saif Ul Islam</span>
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span>UI Engineering</span>
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-40 bg-slate-950" aria-labelledby="skills-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-indigo-500 font-black tracking-[0.3em] text-[11px] uppercase mb-8 block">Skills & Mastery</span>
            <h2 id="skills-heading" className="text-5xl md:text-8xl font-black text-white tracking-tighter">Technical DNA.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center group hover:border-indigo-500 transition-colors"
                role="listitem"
                aria-label={`${skill.name}: ${skill.level}% expertise`}
              >
                <div className="text-2xl font-black text-white mb-2" aria-hidden="true">{skill.level}%</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-slate-900/50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-indigo-500 font-black tracking-[0.3em] text-[11px] uppercase mb-8 block">02 / Services</span>
              <h2 id="services-heading" className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">Core Mastery.</h2>
            </div>
            <p className="text-slate-400 max-w-xs font-medium text-sm leading-relaxed">
              Standardizing excellence through a modular approach to web development and design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-slate-950 rounded-[4rem] border border-white/5 hover:border-indigo-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-bl-full group-hover:bg-indigo-600/20 transition-all" aria-hidden="true" />
                <h3 className="text-2xl font-black text-white mb-6 relative z-10">{service.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed relative z-10">{service.shortDesc}</p>
                <div className="mt-10 flex justify-between items-center relative z-10">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Service 0{i+1}</span>
                  <Link to="/contact" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label={`Learn more about ${service.title}`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-slate-950" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-indigo-500 font-black tracking-[0.3em] text-[11px] uppercase mb-8 block">03 / Case Studies</span>
            <h2 id="projects-heading" className="text-5xl md:text-8xl font-black text-white tracking-tighter">Featured Work.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/projects" className="inline-block px-12 py-6 border border-white/10 rounded-full text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-950 transition-all focus:outline-none focus:ring-4 focus:ring-white/20">
              View All Systems
            </Link>
          </div>
        </div>
      </section>

      <PerformanceSection />

      <section className="py-40 bg-slate-900/30" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-indigo-500 font-black tracking-[0.3em] text-[11px] uppercase mb-8 block">Investment</span>
            <h2 id="pricing-heading" className="text-5xl md:text-8xl font-black text-white tracking-tighter">Pricing Model.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <motion.div
                key={tier.id}
                whileHover={{ y: -10 }}
                className={`p-12 rounded-[4rem] border ${tier.isPopular ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-900 border-white/5'} flex flex-col`}
              >
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{tier.name}</h3>
                <div className="text-4xl font-black text-white mb-6">{tier.price}</div>
                <p className="text-sm text-indigo-100/70 font-medium mb-10 flex-grow">{tier.description}</p>
                <ul className="space-y-4 mb-12" role="list" aria-label={`Features for ${tier.name}`}>
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center space-x-3 text-xs font-bold text-white/80">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-5 rounded-2xl text-center text-xs font-black uppercase tracking-widest transition-all focus:outline-none focus:ring-4 focus:ring-white/50 ${tier.isPopular ? 'bg-white text-indigo-600 hover:scale-105' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                  Engage {tier.name} Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-slate-950" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-indigo-500 font-black tracking-[0.3em] text-[11px] uppercase mb-8 block">04 / Insights</span>
              <h2 id="blog-heading" className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">Knowledge.</h2>
            </div>
            <Link to="/blog" className="text-indigo-400 font-black text-xs uppercase tracking-widest border-b border-indigo-400/30 pb-2 focus:outline-none focus:border-white">All Articles</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer focus-within:ring-4 focus-within:ring-indigo-500/20 rounded-[3rem]"
                onClick={() => navigate(post.url || '/blog')}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(post.url || '/blog')}
                role="link"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 border border-white/5">
                  <img src={post.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" aria-hidden="true" />
                </div>
                <div className="flex items-center space-x-4 text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-indigo-500 rounded-full" aria-hidden="true"></span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors leading-tight">{post.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 relative" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-indigo-500 font-black tracking-[0.3em] text-[11px] uppercase mb-8 block">05 / FAQ</span>
            <h2 id="faq-heading" className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Inquiry.</h2>
          </div>
          <div className="space-y-8" role="list">
            {FAQS.map((faq, i) => (
              <div key={i} className="group" role="listitem">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full flex justify-between items-center text-left py-8 group border-b border-white/10 focus:outline-none focus:bg-white/5 transition-all"
                  aria-expanded={activeFAQ === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-2xl font-black text-white/50 group-hover:text-white transition-colors tracking-tight">{faq.q}</span>
                  <motion.div animate={{ rotate: activeFAQ === i ? 45 : 0 }} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500 transition-all" aria-hidden="true">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFAQ === i && (
                    <motion.div 
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      className="overflow-hidden"
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                    >
                      <p className="py-8 text-slate-400 font-medium leading-relaxed text-lg border-b border-white/10">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;