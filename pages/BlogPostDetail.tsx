import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BLOG_POSTS, PERSONAL_INFO } from '../data';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      const originalTitle = document.title;
      document.title = `${post.title} | Saif Ul Islam - Webdeveloper`;

      const updateMeta = (name: string, content: string, attr: string = 'name') => {
        let meta = document.querySelector(`meta[${attr}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attr, name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      updateMeta('description', post.excerpt);
      updateMeta('keywords', `${post.category}, Saif Ul Islam, webdeveloper, ${post.title.toLowerCase()}, insights, nextjs, react`);
      updateMeta('og:title', `${post.title} | Saif Ul Islam`, 'property');
      updateMeta('og:description', post.excerpt, 'property');
      updateMeta('og:image', post.imageUrl, 'property');
      updateMeta('og:url', window.location.href, 'property');
      updateMeta('twitter:title', post.title);
      updateMeta('twitter:description', post.excerpt);
      updateMeta('twitter:image', post.imageUrl);

      return () => {
        document.title = originalTitle;
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-indigo-600 font-bold hover:underline"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/blog')}
        className="flex items-center space-x-2 text-indigo-600 font-black text-xs uppercase tracking-widest mb-12 group"
      >
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Insights</span>
      </motion.button>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="flex items-center space-x-4 mb-6">
          <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
            {post.category}
          </span>
          <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            {post.date} • {post.readTime}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <img 
              src="./saif-portrait.jpg" 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop";
              }}
            />
          </div>
          <div>
            <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">{PERSONAL_INFO.name}</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lead Engineer & Mentor</p>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="aspect-video rounded-[3rem] overflow-hidden mb-16 shadow-2xl"
      >
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
      </motion.div>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="prose prose-indigo dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-lg leading-relaxed space-y-8 font-medium"
      >
        <p className="text-2xl font-black text-slate-900 dark:text-white italic leading-snug">
          {post.excerpt}
        </p>
        <p>
          As we navigate the rapidly evolving landscape of 2025, the synergy between advanced frontend architectures and seamless user experiences has never been more critical. In this deep dive, we explore how Saif Ul Islam approaches these challenges using modern tools like Next.js 15 and AI-assisted workflows for a global market.
        </p>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6">The Technical Foundation</h2>
        <p>
          Building for the modern web requires more than just knowing a framework. It's about understanding the nuances of server-side logic, client-side hydration, and how to optimize for every possible device. Whether it's a high-performance e-commerce engine or a complex SaaS dashboard, the foundation remains consistent: clean code, scalable patterns, and an unwavering focus on performance.
        </p>
        <blockquote className="border-l-4 border-indigo-600 pl-8 py-2 italic font-bold text-slate-800 dark:text-slate-200 text-xl">
          "The most successful digital products are those that feel invisible to the user—they solve problems effortlessly."
        </blockquote>
        <p>
          Throughout Saif's experience mentoring over 7,000 students at Saylani, one theme consistently emerges: simplicity is the ultimate sophistication. By stripping away unnecessary complexity, we create space for true innovation to flourish.
        </p>
      </motion.article>

      <footer className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Want more insights?</h3>
            <p className="text-slate-500 font-medium">Saif regularly publishes deep dives into modern engineering. Subscribe to stay ahead of the curve.</p>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-indigo-500/30 whitespace-nowrap"
          >
            Get in Touch
          </button>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostDetail;