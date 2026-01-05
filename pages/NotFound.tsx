import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Cosmic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated 404 Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <motion.h1 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -1, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 opacity-20 select-none"
          >
            404
          </motion.h1>
        </motion.div>

        {/* Content Overlay */}
        <div className="mt-[-4rem] md:mt-[-8rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-indigo-600/10 text-indigo-400 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8 border border-indigo-500/20">
              System Breach: Signal Lost
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Out of Bounds.
            </h2>
            <p className="text-slate-400 max-w-md mx-auto mb-12 text-lg font-medium leading-relaxed">
              It seems you've drifted beyond the known tech stack. The coordinates you entered do not exist in this digital ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-12 py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-indigo-50 transition-colors"
              >
                Re-establish Connection
              </motion.button>
              
              <motion.button
                whileHover={{ opacity: 1 }}
                onClick={() => window.history.back()}
                className="text-slate-500 hover:text-white font-black text-xs uppercase tracking-[0.2em] transition-all opacity-60"
              >
                Go Back to Last Known Node
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Static Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};

export default NotFound;