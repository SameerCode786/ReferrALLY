
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-black flex flex-col justify-between py-20 overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-[0.3]"
        alt="Agent Video Background"
      />
      
      {/* Central Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#c5a059" }}
          whileTap={{ scale: 0.95 }}
          className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-8 hover:text-black transition-all duration-300"
        >
          <Play className="w-8 h-8 fill-current" />
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Tricia Lee</h3>
          <p className="text-[12px] md:text-sm font-bold uppercase tracking-[0.3em] text-gray-400">Founder & Leader of Tricia Lee Team</p>
        </motion.div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-20 px-6 w-full max-w-7xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
           {/* Navigation Arrows */}
           <div className="flex gap-4 mb-4 md:mb-0">
             <button className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all">
               <ArrowLeft className="w-6 h-6" />
             </button>
             <button className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all">
               <ArrowRight className="w-6 h-6" />
             </button>
           </div>
           
           {/* Testimonial Cards Overlay */}
           <div className="flex flex-wrap md:flex-nowrap gap-6">
              {[
                { 
                  name: "Holly Meyer Lucas", 
                  role: "Top Producer", 
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop" 
                },
                { 
                  name: "Matt Breitenbach", 
                  role: "Founder & CEO", 
                  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop" 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl flex items-center gap-5 min-w-[280px] md:min-w-[340px] cursor-pointer transition-all duration-300 shadow-2xl"
                >
                  <img src={item.img} className="w-16 h-16 rounded-xl object-cover shadow-lg grayscale group-hover:grayscale-0 transition-all" alt={item.name} />
                  <div>
                    <h5 className="text-white font-bold text-lg mb-1">{item.name}</h5>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{item.role}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
