
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

const TABS = [
  { id: 'build', label: 'Build your brand' },
  { id: 'scale', label: 'Scale your business' },
  { id: 'amaze', label: 'Amaze your clients' }
];

export const SolutionsTab = () => {
  const [activeTab, setActiveTab] = useState('scale');

  return (
    <section className="py-24 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">The growth platform to fuel your real estate success</h2>
          <div className="flex justify-center border border-gray-200 rounded-full p-1 max-w-2xl mx-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-6 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-gray-100 text-black shadow-inner' : 'text-gray-400 hover:text-black'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold mb-6 capitalize">{activeTab.replace('-', ' ')} business</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Accelerate your growth with innovative tools and solutions that generate leads, engage clients, and nurture lasting relationships. Our private network ensures your listings get the visibility they deserve among top-tier producers.
            </p>
            <div className="space-y-4">
              {['Vetted Network Access', 'Premium Marketing Suite', 'CRM Automation'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={`${activeTab}-img`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-50 rounded-3xl p-12 border border-gray-100 shadow-xl"
          >
            <div className="relative bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
               <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg mb-6">
                 <Search className="w-5 h-5 text-gray-400" />
                 <span className="text-gray-500 font-medium">Homes for sale in Beverly Hills...</span>
               </div>
               <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="h-4 bg-gray-100 rounded w-full" />
                 ))}
                 <div className="h-4 bg-gray-100 rounded w-2/3" />
               </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-black text-white p-8 rounded-2xl max-w-xs shadow-2xl">
              <p className="text-2xl font-bold mb-2">+42%</p>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400">Increase in referrals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
