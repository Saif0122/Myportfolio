import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES, PRICING_TIERS, PERSONAL_INFO } from '../data';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-32"
      >
        <span className="text-indigo-600 font-black tracking-widest uppercase text-xs mb-6 block underline decoration-4 underline-offset-8">Core Solutions</span>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Bespoke <br/>Engineering.</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
          I provide a full spectrum of digital development services, transforming raw ideas into high-performance, market-ready products.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="p-12 bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-bl-[10rem] -z-10 transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none duration-700" />
            
            <div className="flex items-center space-x-6 mb-10">
              <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-indigo-600/20 group-hover:rotate-12 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon === 'ShoppingBag' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />}
                  {service.icon === 'Layout' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />}
                  {service.icon === 'Smartphone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />}
                  {service.icon === 'Search' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                  {service.icon === 'Zap' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />}
                  {service.icon === 'Shield' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                </svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">{service.title}</h3>
            </div>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 font-bold mb-6 group-hover:text-indigo-600 transition-colors">
              {service.shortDesc}
            </p>
            
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10">
              {service.fullDesc}
            </p>
            
            <Link to="/contact" className="inline-block px-8 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all">
              Discuss Strategy
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Pricing Section */}
      <section className="py-24 mb-40">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black tracking-widest uppercase text-xs mb-6 block">Investment Tiers</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Scalable Pricing.</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">Transparent value for projects of all sizes, from MVP launches to enterprise infrastructure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3.5rem] border ${
                tier.isPopular 
                  ? 'bg-indigo-600 border-indigo-400 shadow-2xl shadow-indigo-500/20' 
                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
              } flex flex-col`}
            >
              {tier.isPopular && (
                <span className="bg-white text-indigo-600 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">Most Selected</span>
              )}
              <h3 className={`text-xl font-black mb-2 uppercase tracking-tight ${tier.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.name}</h3>
              <div className={`text-4xl font-black mb-6 ${tier.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.price}</div>
              <p className={`text-sm font-medium mb-10 flex-grow ${tier.isPopular ? 'text-indigo-100' : 'text-slate-500'}`}>{tier.description}</p>
              
              <ul className="space-y-4 mb-12">
                {tier.features.map(f => (
                  <li key={f} className={`flex items-center space-x-3 text-xs font-bold ${tier.isPopular ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                    <svg className={`w-4 h-4 ${tier.isPopular ? 'text-white' : 'text-indigo-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className={`w-full py-5 rounded-2xl text-center text-xs font-black uppercase tracking-widest transition-all ${
                  tier.isPopular 
                    ? 'bg-white text-indigo-600 hover:bg-slate-50' 
                    : 'bg-slate-950 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                }`}
              >
                Secure this Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-16 md:p-24 bg-slate-950 rounded-[5rem] text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-violet-700/20 blur-[120px] -z-10" />
        <div className="relative z-10">
          <span className="text-indigo-400 font-black tracking-widest uppercase text-xs mb-8 block">Ready to Scale?</span>
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Let's build your <br/>digital legacy.</h2>
          <p className="text-xl text-slate-400 mb-14 max-w-2xl mx-auto font-medium">I don't just build websites; I engineer high-conversion ecosystems that dominate the search results and delight users.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-110 transition-transform">
              Start Your Evolution
            </Link>
            {/* Fix: Added missing PERSONAL_INFO import to avoid 'Cannot find name' error */}
            <a href={`mailto:${PERSONAL_INFO.email}`} className="px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
              Direct Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;