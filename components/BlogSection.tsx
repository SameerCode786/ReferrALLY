
import React from 'react';
import { motion } from 'framer-motion';

const POSTS = [
  {
    date: "April 12, 2024",
    title: "4 Digital Marketing Lead Generation Myths Busted by the Experts",
    img: "https://picsum.photos/id/1/600/400"
  },
  {
    date: "May 20, 2024",
    title: "8 Ways Real Estate Retargeting Ads Can Supercharge Your Marketing",
    img: "https://picsum.photos/id/2/600/400"
  },
  {
    date: "June 7, 2024",
    title: "115 Real Estate Blog Ideas: Maximizing Your Online Presence",
    img: "https://picsum.photos/id/3/600/400"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center lg:text-left max-w-2xl">
          Learn the latest growth strategies from our marketing experts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {POSTS.map((post, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{post.date}</p>
              <h4 className="text-xl font-bold leading-tight group-hover:text-[#c5a059] transition-colors">{post.title}</h4>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end">
          <button className="border border-black px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-black hover:text-white transition-all duration-300">
            Read Our Blog
          </button>
        </div>
      </div>
    </section>
  );
};
