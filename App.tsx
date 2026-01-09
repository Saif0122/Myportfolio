import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-6 focus:py-3 focus:bg-indigo-600 focus:text-white focus:rounded-xl focus:font-black focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
        >
          Skip to main content
        </a>
        
        <Loader isLoading={isLoading} />
        {!isLoading && <CustomCursor />}
        <ScrollToTop />
        <Navbar />
        
        <main className="pt-16" id="main-content" tabIndex={-1}>
          <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <ChatWidget />
        <SpeedInsights />

        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-1">
                <Link to="/" className="font-black text-2xl tracking-tighter text-indigo-400 mb-6 block uppercase focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg" aria-label="Saif UI Home">
                  Saif<span className="text-white">UI</span>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Saif Ul Islam specializes in transforming digital landscapes through high-end engineering and design for a global clientele.
                </p>
                <div className="flex items-center space-x-2 text-sm font-bold text-green-500" aria-label="Status: Open for global projects">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                  OPEN FOR GLOBAL PROJECTS
                </div>
              </div>
              
              <nav aria-label="Footer quick links">
                <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Explore</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-medium">
                  <li><Link to="/about" className="hover:text-indigo-400 transition-colors focus:outline-none focus:text-indigo-400">Saif's Biography</Link></li>
                  <li><Link to="/projects" className="hover:text-indigo-400 transition-colors focus:outline-none focus:text-indigo-400">Case Studies</Link></li>
                  <li><Link to="/blog" className="hover:text-indigo-400 transition-colors focus:outline-none focus:text-indigo-400">Knowledge Base</Link></li>
                  <li><Link to="/services" className="hover:text-indigo-400 transition-colors focus:outline-none focus:text-indigo-400">Core Services</Link></li>
                </ul>
              </nav>

              <div>
                <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Connect</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-medium">
                  <li><a href="mailto:saifulislamshams37@gmail.com" className="hover:text-indigo-400 transition-colors focus:outline-none focus:text-indigo-400">saifulislamshams37@gmail.com</a></li>
                  <li><a href="tel:+923139751619" className="hover:text-indigo-400 transition-colors focus:outline-none focus:text-indigo-400">+92 313-9751619</a></li>
                  <li>Available Globally</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Social Presence</h4>
                <div className="flex space-x-3">
                  {['GH', 'LI', 'TW', 'BE'].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-400 hover:bg-indigo-600 hover:text-white transition-all transform hover:-rotate-12 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label={`Saif's ${social}`}>
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold tracking-widest uppercase">
              <p>&copy; {new Date().getFullYear()} Saif Ul Islam / All Rights Reserved</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-indigo-400 focus:outline-none">Privacy</a>
                <a href="#" className="hover:text-indigo-400 focus:outline-none">TOS</a>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-indigo-400 focus:outline-none hover:underline" aria-label="Scroll to top">Top ↑</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;