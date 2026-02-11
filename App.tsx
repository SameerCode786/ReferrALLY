
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Play, 
  ArrowRight, 
  Plus, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Phone,
  Search,
  CheckCircle2,
  TrendingUp,
  Target,
  Users
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { SolutionsTab } from './components/SolutionsTab';
import { VideoSection } from './components/VideoSection';
import { SolutionsGrid } from './components/SolutionsGrid';
import { StatsSection } from './components/StatsSection';
import { SuccessStories } from './components/SuccessStories';
import { BlogSection } from './components/BlogSection';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden antialiased selection:bg-gold-500/30 selection:text-gold-100">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#c5a059] origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <LogoTicker />
        <Features />
        <Testimonials />
        <SolutionsTab />
        <VideoSection />
        <SolutionsGrid />
        <StatsSection />
        <SuccessStories />
        <BlogSection />
        <BottomCTA />
      </main>

      <Footer />
    </div>
  );
}
