
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Search, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1">
            <span className="text-white">Referr</span>
            <span className="text-[#c5a059]">ALLY</span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase text-gray-400">
            {['Solutions', 'Network', 'Company', 'Success', 'Resources'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors flex items-center gap-1 group"
              >
                {item}
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-4 text-gray-400">
            <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <a href="tel:3109551077" className="flex items-center gap-2 hover:text-white transition-colors text-[13px]">
              <Phone className="w-4 h-4" />
              (310) 955-1077
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-[13px] font-semibold tracking-widest uppercase hover:text-[#c5a059] transition-colors">Log In</a>
            <button className="bg-[#c5a059] hover:bg-[#b08d48] text-black px-6 py-3 text-[12px] font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:hidden bg-black border-b border-white/5 overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-widest font-semibold">
          <a href="#">Solutions</a>
          <a href="#">Network</a>
          <a href="#">Company</a>
          <a href="#">Resources</a>
          <div className="h-px bg-white/10 w-full" />
          <button className="bg-[#c5a059] text-black py-4 font-bold">GET STARTED</button>
        </div>
      </motion.div>
    </nav>
  );
};
