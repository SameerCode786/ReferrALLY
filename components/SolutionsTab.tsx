
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TABS = [
  { id: 'build', label: 'Build your brand' },
  { id: 'scale', label: 'Scale your business' },
  { id: 'amaze', label: 'Amaze your clients' }
];

export const SolutionsTab = () => {
  const [activeTab, setActiveTab] = useState('scale');

  const getTabData = (tab: string) => {
    switch(tab) {
      case 'build':
        return {
          title: "Build your brand",
          desc: "Establish a powerful online presence with high-converting custom websites and brand identities designed specifically for top-tier real estate professionals.",
          features: ['Custom IDX Integration', 'Premium Brand Identity', 'Content Strategy']
        };
      case 'amaze':
        return {
          title: "Amaze your clients",
          desc: "Provide an unparalleled client experience with branded mobile apps and high-end portfolio presentations that justify your premium commissions.",
          features: ['Branded Client App', 'VIP Portfolio Access', 'Seamless Communication']
        };
      default:
        return {
          title: "Scale your business",
          desc: "Accelerate your growth with innovative tools and solutions that generate leads, engage clients, and nurture lasting relationships. Our private network ensures your listings get the visibility they deserve among top-tier producers.",
          features: ['Vetted Network Access', 'Premium Marketing Suite', 'CRM Automation']
        };
    }
  };

  const data = getTabData(activeTab);

  return (
    <section className="py-24 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">The growth platform to fuel your real estate success</h2>
          <div className="flex justify-center border border-gray-200 rounded-full p-1 max-w-2xl mx-auto overflow-hidden">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-6 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-gray-100 text-black shadow-inner' : 'text-gray-400 hover:text-black'}`}
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
            <h3 className="text-4xl font-bold mb-6 capitalize">{data.title}</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {data.desc}
            </p>
            <div className="space-y-4">
              {data.features.map((item) => (
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
            key={`${activeTab}-visual`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-gray-50 rounded-[40px] p-6 md:p-12 border border-gray-100 shadow-xl overflow-visible"
          >
            <div className="relative aspect-video w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 group">
               {/* Cloudinary Video Embed */}
               <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dow2sbjsp&public_id=Animation-01-Laptop-and-Phone_loxlsn&autoplay=true&loop=true&muted=true"
                width="100%"
                height="100%"
                style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                title="ReferrALLY Animation"
               ></iframe>
            </div>
            
            {/* Floating Stats Card - Maintains the original premium look */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-black text-white p-6 md:p-8 rounded-2xl max-w-xs shadow-2xl z-10"
            >
              <p className="text-2xl md:text-3xl font-bold mb-2">+42%</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Increase in referrals</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
