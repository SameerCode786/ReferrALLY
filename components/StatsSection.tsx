
import React from 'react';
import { motion } from 'framer-motion';

export const StatsSection = () => {
  return (
    <section className="py-32 bg-[#0c0c0c] border-y border-white/5 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-24 max-w-4xl mx-auto leading-tight">
          We drive more <span className="text-gray-600">growth and ROI</span> for our customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {[
            { value: "500+", label: "Referrals Facilitated", desc: "Since launch in 2024" },
            { value: "1M+", label: "Deal Volume Closed", desc: "By our exclusive members" },
            { value: "2x growth", label: "Better conversions", desc: "Than standard lead platforms" },
            { value: "1000+", label: "Vetted Agents", desc: "Top 1% across the globe" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter">{stat.value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
