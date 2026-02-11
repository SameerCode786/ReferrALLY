
import React from 'react';
import { motion } from 'framer-motion';

export const SuccessStories = () => {
  return (
    <section className="py-24 bg-[#0c0c0c] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 tracking-tight max-w-2xl">We've helped <span className="text-gray-600">thousands of real estate professionals</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-3 bg-white/5 rounded-2xl border border-white/10 p-12 relative overflow-hidden flex flex-col justify-end min-h-[500px]"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
          >
            <div className="relative z-10 max-w-md">
              <h4 className="text-white text-xl font-bold mb-4">How SEO & Ad Strategies Propelled One Broker to the Top of the Las Vegas Luxury Market</h4>
              <p className="text-5xl font-bold text-[#c5a059] mb-4">+300%</p>
              <p className="text-gray-400 mb-8 font-medium">website traffic growth in one year</p>
              <div>
                <p className="text-white font-bold">Gavin Ernstone</p>
                <p className="text-sm text-gray-500">Simply Vegas</p>
              </div>
            </div>
            <img 
              src="https://picsum.photos/id/48/1200/800" 
              className="absolute top-0 right-0 w-2/3 h-full object-cover opacity-40 scale-110 pointer-events-none" 
              alt="Laptop View"
            />
          </motion.div>

          <motion.div 
            className="lg:col-span-2 bg-white/5 rounded-2xl border border-white/10 p-12 overflow-hidden flex flex-col justify-end min-h-[500px]"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
          >
            <img src="https://picsum.photos/id/60/800/1000" className="w-full h-full object-cover opacity-50 absolute inset-0" alt="Success Image" />
            <div className="relative z-10 bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <p className="text-white font-bold mb-2">Exclusive High-End Portfolio</p>
              <button className="text-[#c5a059] text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
