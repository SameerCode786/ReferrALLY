
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const MEMBERS = [
  {
    name: "Jade Mills",
    title: "Brokerage Owner",
    company: "#1 Coldwell Banker Agent",
    quote: "ReferrALLY was the #1 reason for my record-breaking year. My clients are always telling me that they found me through my network.",
    img: "https://picsum.photos/id/64/600/800"
  },
  {
    name: "Tom Ferry",
    title: "Top Producer",
    company: "Real Estate Coach",
    quote: "Success in the luxury market comes down to great branding and marketing. ReferrALLY builds some of the best high-value referral loops.",
    img: "https://picsum.photos/id/91/600/800"
  },
  {
    name: "Tracy Tutor",
    title: "Investment Specialist",
    company: "#4 Ranked Team in Los Angeles",
    quote: "Working with ReferrALLY was the most seamless experience I've ever had creating a high-end network, and it offered far more than just leads.",
    img: "https://picsum.photos/id/65/600/800"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-8">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#c5a059] transition-all">
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
              <p className="text-lg italic mb-6 leading-relaxed text-gray-700">"{member.quote}"</p>
              <div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{member.title} — {member.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
