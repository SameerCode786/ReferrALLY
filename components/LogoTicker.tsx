
import React from 'react';

const LOGOS = [
  "RE/MAX", "Keller Williams", "Century 21", "Compass", "Sotheby's", "Zillow", "Redfin", "Douglas Elliman"
];

export const LogoTicker = () => {
  return (
    <div className="py-16 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-12 lg:justify-between opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {LOGOS.map((logo) => (
            <span key={logo} className="text-xl font-black tracking-tighter text-white/50 cursor-default hover:text-[#c5a059] transition-colors">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
