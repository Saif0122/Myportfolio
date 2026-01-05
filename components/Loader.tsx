
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <div className="w-24 h-24 mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-indigo-500 fill-none stroke-[3] stroke-linecap-round stroke-linejoin-round">
                <motion.path 
                  d="M75 25 C75 5, 25 5, 25 35 C25 65, 75 35, 75 65 C75 95, 25 95, 25 75"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.8, 
                    ease: "easeInOut",
                    opacity: { duration: 0.5 } 
                  }}
                />
              </svg>
            </div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-4 text-xs font-bold tracking-[0.3em] text-indigo-400 uppercase"
            >
              Saif Ul Islam
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600 rounded-full blur-[100px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600 rounded-full blur-[100px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
