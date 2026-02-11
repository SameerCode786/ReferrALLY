
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section className="relative h-[80vh] bg-black flex flex-col items-center justify-center overflow-hidden">
      <img 
        src="https://picsum.photos/id/2/1920/1080" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-50"
        alt="Agent Video Background"
      />
      
      <div className="relative z-10 text-center text-white px-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mb-8 mx-auto hover:bg-[#c5a059] transition-all"
        >
          <Play className="w-8 h-8 fill-current text-white" />
        </motion.button>
        <h3 className="text-2xl font-bold mb-2">Tricia Lee</h3>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-400">Founder & Leader of Tricia Lee Team</p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-20 px-6">
        <div className="max-w-7xl mx-auto flex items-end justify-between gap-12">
           <div className="flex gap-4">
             <button className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all">
               <ArrowLeft className="w-6 h-6" />
             </button>
             <button className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all">
               <ArrowRight className="w-6 h-6" />
             </button>
           </div>
           
           <div className="hidden lg:flex gap-6 overflow-hidden">
              {[
                { name: "Holly Meyer Lucas", role: "Top Producer", img: "https://picsum.photos/id/65/200/200" },
                { name: "Matt Breitenbach", role: "Founder & CEO", img: "https://picsum.photos/id/66/200/200" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl flex items-center gap-4 min-w-[300px]">
                  <img src={item.img} className="w-16 h-16 rounded-lg object-cover" alt={item.name} />
                  <div>
                    <h5 className="text-white font-bold">{item.name}</h5>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
