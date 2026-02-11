
import React from 'react';
import { motion } from 'framer-motion';

const PERSONAS = [
  { title: "Solo agents", img: "https://picsum.photos/id/101/600/800" },
  { title: "Celebrity agents", img: "https://picsum.photos/id/102/600/800" },
  { title: "Growing teams", img: "https://picsum.photos/id/103/600/800" },
  { title: "Brokerages", img: "https://picsum.photos/id/104/600/800" }
];

export const SolutionsGrid = () => {
  return (
    <section className="py-24 bg-[#0c0c0c] px-6 text-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Smart solutions for agents, teams, and brokerages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAS.map((persona, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                <img src={persona.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100" alt={persona.title} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-left">{persona.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
