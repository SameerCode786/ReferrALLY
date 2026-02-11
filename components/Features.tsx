
import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const FEATURE_CARDS = [
  {
    title: "Launch your dream network",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    label: "PLATFORM"
  },
  {
    title: "ReferrALLY CRM",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    label: "NEW",
    highlight: true
  },
  {
    title: "Manage and nurture leads with AI",
    img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop",
    label: "LEAD GEN"
  },
  {
    title: "Offer your own branded app",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    label: "MOBILE"
  },
  {
    title: "Drive ROI with paid ads",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
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
          viewport={{ once: true }}
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
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl border border-white/10 aspect-video lg:aspect-square flex flex-col bg-[#141414]`}
            >
              <img 
                src={feature.img} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                alt={feature.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="relative mt-auto p-6 z-10">
                {feature.label && (
                  <span className={`inline-block px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ${feature.highlight ? 'bg-[#c5a059] text-black shadow-[0_0_15px_rgba(197,160,89,0.4)]' : 'bg-white/10 text-white backdrop-blur-md'}`}>
                    {feature.label}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors leading-tight max-w-[85%]">
                  {feature.title}
                </h3>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-6 right-6 p-2.5 rounded-full border border-white/20 text-white bg-black/40 backdrop-blur-xl hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all z-20"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
