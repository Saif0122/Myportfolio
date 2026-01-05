import React from 'react';

export const ProjectSkeleton: React.FC = () => {
  return (
    <div className="h-[550px] w-full bg-slate-900/50 rounded-[3rem] border border-white/5 overflow-hidden flex flex-col relative">
      <div className="h-64 bg-slate-800/50 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>
      <div className="p-10 flex flex-col flex-grow space-y-6">
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-slate-800 rounded-lg animate-pulse" />
          <div className="h-6 w-16 bg-slate-800 rounded-lg animate-pulse" />
        </div>
        <div className="h-10 w-3/4 bg-slate-800 rounded-xl animate-pulse" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-slate-800 rounded-lg animate-pulse" />
          <div className="h-4 w-5/6 bg-slate-800 rounded-lg animate-pulse" />
        </div>
        <div className="mt-auto h-14 w-full bg-slate-800 rounded-2xl animate-pulse" />
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export const BlogSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-900/50 rounded-[3rem] overflow-hidden border border-white/5 h-full">
      <div className="h-64 bg-slate-800/50 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>
      <div className="p-10 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="h-3 w-20 bg-slate-800 rounded-full animate-pulse" />
          <div className="h-3 w-1.5 bg-slate-800 rounded-full animate-pulse" />
          <div className="h-3 w-20 bg-slate-800 rounded-full animate-pulse" />
        </div>
        <div className="h-8 w-full bg-slate-800 rounded-xl animate-pulse" />
        <div className="h-4 w-5/6 bg-slate-800 rounded-lg animate-pulse" />
        <div className="h-4 w-1/4 bg-slate-800 rounded-lg animate-pulse mt-8" />
      </div>
    </div>
  );
};
