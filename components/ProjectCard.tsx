import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isSpotlight, setIsSpotlight] = useState(false);

  return (
    <div className="relative h-[550px] w-full perspective-[2000px] group">
      <AnimatePresence mode="wait">
        {!isSpotlight ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, rotateY: -20 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 20 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full h-full bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col will-change-transform"
          >
            <div className="relative h-64 overflow-hidden bg-slate-800">
              <img 
                src={project.imageUrl} 
                alt={`${project.title} - ${project.category} project preview`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&h=600";
                }}
              />
              <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-400 border border-white/10" aria-label={`Category: ${project.category}`}>
                {project.category}
              </div>
            </div>
            
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-indigo-600/10 text-indigo-500 rounded-lg border border-indigo-500/20">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[9px] font-black text-slate-500 py-1">+{project.tech.length - 3} More</span>
                )}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed line-clamp-2 mb-8">
                {project.description}
              </p>
              
              <button 
                onClick={() => setIsSpotlight(true)}
                aria-label={`View detailed spotlight for ${project.title}`}
                className="mt-auto w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/40 transition-all shadow-lg active:scale-95"
              >
                View Spotlight
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full h-full bg-indigo-600 rounded-[3rem] p-10 flex flex-col text-white shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)] border border-white/20 will-change-transform"
            role="dialog"
            aria-labelledby={`project-title-${project.id}`}
          >
            <div className="flex justify-between items-start mb-8">
              <h3 id={`project-title-${project.id}`} className="text-3xl font-black tracking-tighter leading-none">Insight.</h3>
              <button 
                onClick={() => setIsSpotlight(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white active:scale-90"
                aria-label={`Close ${project.title} spotlight`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow space-y-8 overflow-y-auto pr-2 scrollbar-hide">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-200 block mb-3">The Problem</span>
                <p className="text-sm font-bold leading-relaxed">{project.problem}</p>
              </div>
              <div className="w-full h-px bg-white/20" />
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-200 block mb-3">The Solution</span>
                <p className="text-sm font-bold leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-200 block mb-4">Ecosystem Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-10 mt-auto">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-4 bg-white text-indigo-600 rounded-2xl font-black text-[9px] uppercase tracking-widest text-center hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 transition-transform flex items-center justify-center"
                aria-label={`Visit ${project.title} live system`}
              >
                Live System
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-4 bg-indigo-950 text-white rounded-2xl font-black text-[9px] uppercase tracking-widest text-center hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 transition-transform border border-white/10 flex items-center justify-center"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                Code Matrix
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;