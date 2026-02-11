
import React from 'react';
import { motion } from 'framer-motion';

export const BottomCTA = () => {
  return (
    <section className="py-24 bg-black px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 bg-gradient-to-br from-[#1a1a1a] to-black rounded-[40px] p-16 md:p-32 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Grow your real estate <span className="text-gray-500">business</span> with ReferrALLY
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-[#c5a059] text-black px-10 py-5 font-bold uppercase tracking-widest text-[13px] hover:scale-105 transition-all">
               Get Started
             </button>
             <button className="border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest text-[13px] hover:bg-white/10 transition-all">
               Book a Demo
             </button>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a059] to-[#8c713f] rounded-full opacity-50 blur-2xl group-hover:opacity-100 transition duration-1000"></div>
          <img 
            src="https://picsum.photos/id/101/400/400" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-black relative"
            alt="Agent Specialist"
          />
        </div>
      </div>
    </section>
  );
};
