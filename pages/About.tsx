import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, EDUCATION, WORK_PROCESS } from '../data';

const WorkStep: React.FC<{ step: typeof WORK_PROCESS[0]; index: number }> = ({ step, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`relative flex items-center justify-center mb-32 last:mb-0 w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-1/2 ${isEven ? 'pr-20 text-right' : 'pl-20 text-left'}`}>
        <div className="inline-block px-4 py-2 bg-indigo-600/10 text-indigo-500 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
          Phase {step.step}
        </div>
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">{step.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-lg mb-8">{step.description}</p>
        <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
          {step.details.map(detail => (
            <span key={detail} className="px-4 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest shadow-sm">
              {detail}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-full bg-slate-950 border-4 border-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.5)] flex items-center justify-center"
        >
          <div className="w-2   h-2 rounded-full bg-white animate-pulse" />
        </motion.div>
      </div>

      <div className="w-1/2" />
    </motion.div>
  );
};

const About: React.FC = () => {
  const hardSkills = SKILLS.filter(s => s.category === 'hard');
  const softSkills = SKILLS.filter(s => s.category === 'soft');
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity rounded-[5rem]" />
          <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-1000 border border-white/10 bg-slate-900">
            {/* Note: User image integrated here */}
            <img 
              src="/img/saif.jpg" 
              alt="Saif Ul Islam Professional Portrait" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              onError={(e) => {
                e.currentTarget.src = "/img/saif.png";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-indigo-600 font-black tracking-widest text-xs uppercase mb-6 block">The Architect's Core</span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">Engineering <br/>the Unknown.</h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium italic">
            "Software is the clay of the 21st century. I don't just write code; I sculpt digital permanence."
          </p>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            <p>I started my journey as a self-taught developer with a vision to revolutionize digital accessibility. Today, I'm honored to lead at Saylani (SMIT), where I've impacted thousands of students.</p>
            <p>My work is a blend of rigorous technical standards and avant-garde UI design. I believe in 'Perfection through Iteration'.</p>
          </div>
        </motion.div>
      </div>

      <section className="mb-40">
        <div className="text-center mb-24">
          <span className="text-indigo-600 font-black tracking-widest uppercase text-xs mb-4 block">Capacities</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Proficiency Matrix.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 border-b-4 border-indigo-600 inline-block pb-2">Technical Core</h3>
            <div className="space-y-10">
              {hardSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-4 items-end">
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200 tracking-widest uppercase">{skill.name}</span>
                    <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1 rounded-full uppercase">{skill.level}% Efficiency</span>
                  </div>
                  <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-700 p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 border-b-4 border-purple-600 inline-block pb-2">Leadership & Dynamics</h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm text-center group"
                >
                  <div className="text-4xl font-black text-indigo-500 mb-2 group-hover:scale-110 transition-transform">{skill.level}%</div>
                  <div className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{skill.name}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 p-12 bg-indigo-600 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-xl font-black mb-4 uppercase tracking-widest">Philosophy</h4>
              <p className="text-lg font-bold leading-relaxed text-indigo-100">Managing a community of 1,000+ students has taught me that empathy and clear communication are the most valuable tools in any developer's toolkit.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-40 relative">
        <div className="text-center mb-40">
          <span className="text-indigo-600 font-black tracking-widest uppercase text-xs mb-4 block">Ecosystem Approach</span>
          <h2 className="text-4xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Strategic Workflow.</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">From conceptual genesis to global deployment, every step is governed by technical precision.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-indigo-400 to-indigo-600"
            />
          </div>

          <div className="relative space-y-20">
            {WORK_PROCESS.map((step, i) => (
              <WorkStep key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-32 mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-16 tracking-tighter uppercase">Track Record.</h3>
            <div className="space-y-16">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-10 border-l-2 border-indigo-600/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600" />
                  <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase block mb-2">{exp.period}</span>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white mt-2 leading-tight">{exp.role}</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">{exp.company}</p>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed flex items-start">
                        <span className="text-indigo-500 mr-4 mt-2 w-2 h-2 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-16 tracking-tighter uppercase">Academic Core.</h3>
            <div className="space-y-12">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-12 bg-slate-50 dark:bg-slate-900 rounded-[4rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-indigo-500 transition-colors">
                  <div className="absolute top-0 right-0 p-10 text-9xl font-black text-slate-200/30 dark:text-slate-800/20 group-hover:scale-110 transition-transform">01</div>
                  <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase block mb-4">{edu.period}</span>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">{edu.degree}</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-4">{edu.institution}</p>
                  <p className="mt-8 text-slate-500 text-lg font-medium leading-relaxed">Specializing in Frontend development and Computational Systems with a focus on modern web ecosystems and high-fidelity architectures.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;