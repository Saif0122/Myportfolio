
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
        <p className="text-slate-600 dark:text-slate-400">
          My career journey in building robust web applications and mentoring the next generation of tech talent.
        </p>
      </motion.div>

      <div className="relative space-y-12 before:absolute before:left-0 md:before:left-1/2 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center justify-between ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 top-0 md:top-2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 -translate-x-1.5 md:-translate-x-2 z-10" />

            <div className="w-full md:w-[45%] pl-8 md:pl-0">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{exp.period}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{exp.role}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
