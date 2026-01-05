import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../data';
import { useNavigate } from 'react-router-dom';
import { BlogSkeleton } from '../components/Skeleton';

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleReadArticle = (url?: string) => {
    if (url) {
      if (url.startsWith('http')) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        navigate(url);
      }
    } else {
      alert("This is a demo article. More content coming soon!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block underline decoration-indigo-200 underline-offset-8 decoration-4">Knowledge Hub</span>
        <h2 className="text-4xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Insights & <br/>Innovation.</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Exploring the intersections of high-performance software engineering, modern UI trends, and generative AI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            [...Array(6)].map((_, i) => (
              <motion.div
                key={`blog-skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BlogSkeleton />
              </motion.div>
            ))
          ) : (
            <>
              {/* Featured Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border-2 border-indigo-500/20 dark:border-indigo-500/10 hover:border-indigo-500 transition-all hover:-translate-y-2 shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400" 
                    alt="Featured Post" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-2xl">
                    Featured
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 space-x-4">
                    <span>Feb 25, 2025</span>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>15 min read</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                    Mastering Framer Motion 3D & Perspectives
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">
                    A deep dive into creating high-fidelity 3D interactions using only CSS and Framer Motion for the modern web.
                  </p>
                  <button 
                    onClick={() => handleReadArticle('/blog/b4')}
                    className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-[0.2em] flex items-center group/btn"
                  >
                    READ ARTICLE
                    <svg className="w-4 h-4 ml-3 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </button>
                </div>
              </motion.div>

              {BLOG_POSTS.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.1 }}
                  className="group bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 bg-slate-900/80 dark:bg-white/80 text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 space-x-4">
                      <span>{post.date}</span>
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button 
                      onClick={() => handleReadArticle(post.url)}
                      className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-[0.2em] flex items-center group/btn"
                    >
                      READ ARTICLE
                      <svg className="w-4 h-4 ml-3 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
      
      {/* Newsletter Signup */}
      <section className="mt-32 p-16 bg-indigo-600 rounded-[5rem] text-center text-white relative overflow-hidden shadow-3xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-6 tracking-tighter">Stay ahead of the curve.</h2>
          <p className="text-indigo-100 mb-10 text-lg font-medium">Join 7,000+ developers receiving exclusive insights on the future of software engineering.</p>
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20">
            <input 
              type="email" 
              placeholder="Engineering@Future.com" 
              className="flex-1 bg-transparent border-none rounded-full px-8 py-5 outline-none text-white placeholder:text-indigo-200 font-black tracking-wider"
            />
            <button className="bg-white text-indigo-600 font-black px-12 py-5 rounded-[2rem] hover:bg-indigo-50 transition-all shadow-2xl">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;