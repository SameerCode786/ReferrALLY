
import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const FOOTER_LINKS = {
  products: ['Network Platform', 'AI CRM', 'Lead Management', 'Mobile Apps', 'Referral Network'],
  solutions: ['Solo Agents', 'Celebrity Agents', 'Growing Teams', 'Brokerages'],
  company: ['About Us', 'Case Studies', 'Design Portfolio', 'Reviews', 'Careers', 'News & Press'],
  resources: ['Blog', 'Podcasts', 'Help Center', 'API Docs', 'Legal']
};

export const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1 mb-8">
              <span className="text-white">Referr</span>
              <span className="text-[#c5a059]">ALLY</span>
            </a>
            <div className="space-y-4">
               <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                 The world's most exclusive network for luxury real estate professionals and entrepreneurial agents.
               </p>
               <div className="flex gap-4">
                 <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                 <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                 <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
               </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-8">Products</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-300">
              {FOOTER_LINKS.products.map(link => <li key={link}><a href="#" className="hover:text-[#c5a059] transition-colors">{link}</a></li>)}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-8">Solutions</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-300">
              {FOOTER_LINKS.solutions.map(link => <li key={link}><a href="#" className="hover:text-[#c5a059] transition-colors">{link}</a></li>)}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-8">Company</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-300">
              {FOOTER_LINKS.company.map(link => <li key={link}><a href="#" className="hover:text-[#c5a059] transition-colors">{link}</a></li>)}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h5 className="font-bold text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-8">Resources</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-300 mb-8">
              {FOOTER_LINKS.resources.map(link => <li key={link}><a href="#" className="hover:text-[#c5a059] transition-colors">{link}</a></li>)}
            </ul>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
               <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-widest">Call us:</p>
               <a href="tel:3109551077" className="text-lg font-bold hover:text-[#c5a059] transition-colors">(310) 955-1077</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
          <p>© 2024 ReferrALLY Network, Inc. — All rights reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">DMCA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
