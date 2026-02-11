
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 bg-[#0c0c0c] flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Where Elite Agents <br />
          <span className="text-[#c5a059]">Connect to Thrive.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A private, highly vetted community for experienced, successful, and entrepreneurial Real Estate Agents.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-[#c5a059] text-black px-10 py-5 font-bold uppercase tracking-widest text-[13px] hover:scale-105 transition-all duration-300">
            Apply for Membership
          </button>
          <button className="border border-white/20 hover:border-white text-white px-10 py-5 font-bold uppercase tracking-widest text-[13px] transition-all duration-300">
            Learn More About ReferrALLY
          </button>
        </motion.div>
      </div>

      {/* Hero Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "circOut" }}
        className="mt-24 relative w-full max-w-6xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
          <img 
            src="https://picsum.photos/id/48/1920/1080" 
            alt="Platform Interface" 
            className="w-full h-auto brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
        
        {/* Floating elements to mimic the original site's feel */}
        <div className="absolute -top-10 -right-10 hidden lg:block bg-black/80 backdrop-blur-md p-6 border border-white/10 rounded-xl shadow-2xl">
          <p className="text-[#c5a059] font-bold text-sm mb-1 uppercase tracking-widest">New Update</p>
          <p className="text-white text-base">Referral AI Matching Live</p>
        </div>
      </motion.div>
    </section>
  );
};
