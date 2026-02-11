
import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const FEATURE_CARDS = [
  {
    title: "Launch your dream network",
    img: "https://picsum.photos/id/10/800/600",
    label: "PLATFORM"
  },
  {
    title: "ReferrALLY CRM",
    img: "https://picsum.photos/id/20/800/600",
    label: "NEW",
    highlight: true
  },
  {
    title: "Manage and nurture leads with AI",
    img: "https://picsum.photos/id/30/800/600",
    label: "LEAD GEN"
  },
  {
    title: "Offer your own branded app",
    img: "https://picsum.photos/id/40/800/600",
    label: "MOBILE"
  },
  {
    title: "Drive ROI with paid ads",
    img: "https://picsum.photos/id/50/800/600",
    label: "MARKETING"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-[#0c0c0c] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight"
        >
          A brand new website is just the start
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_CARDS.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-xl border border-white/10 aspect-video lg:aspect-square flex flex-col ${idx === 0 || idx === 1 ? 'lg:col-span-1' : 'lg:col-span-1'}`}
            >
              <img 
                src={feature.img} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={feature.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="relative mt-auto p-6">
                {feature.label && (
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 ${feature.highlight ? 'bg-[#c5a059] text-black' : 'bg-white/10 text-white'}`}>
                    {feature.label}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">{feature.title}</h3>
              </div>
              <button className="absolute bottom-6 right-6 p-2 rounded-full border border-white/20 text-white bg-white/5 hover:bg-[#c5a059] hover:text-black transition-all">
                <Plus className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
