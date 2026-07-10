import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onCtaclick: () => void;
}

const CYCLE_WORDS = ["Commerce", "Social", "Search", "Visuals"];

export default function Hero({ onCtaclick }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CYCLE_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-6 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6] border-b border-gray-200">
      {/* Background radial soft light to enrich depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,231,235,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle top tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="px-3.5 py-1.5 bg-[#E5E7EB]/40 border border-gray-300/40 text-[10px] font-mono uppercase tracking-widest text-[#111111]">
            // High Scale Growth Engine
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-gray-800 leading-[1.1] mb-8"
        >
          Your Partners to Scale{" "}
          <span className="serif-italic text-gray-400 px-1">on</span>
          <div className="mt-4 flex justify-center items-center h-[1.3em]">
            <span className="text-[#111111] font-light mr-2 sm:mr-4 font-sans">[</span>
            <div className="relative w-[180px] xs:w-[240px] sm:w-[480px] h-12 xs:h-16 sm:h-24 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLE_WORDS[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute font-sans font-extrabold text-[#111111] tracking-tight uppercase text-3xl xs:text-4xl sm:text-6xl md:text-7xl"
                >
                  {CYCLE_WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-[#111111] font-light ml-2 sm:ml-4 font-sans">]</span>
          </div>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-500 font-medium mb-12 tracking-wide"
        >
          We build high-converting creative ad copies, run disciplined performance marketing, and engineer custom funnels to drive revenue straight to your bottom line.
          <span className="block mt-4 text-[#111111] font-bold">Zero fluff. Just absolute velocity.</span>
        </motion.p>

        {/* Minimalist Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-12"
        >
          <button
            id="hero-cta"
            onClick={onCtaclick}
            className="group relative px-10 py-5 bg-transparent border border-neutral-300 hover:border-[#111111] transition-all duration-300 focus:outline-none"
          >
            {/* Corner border accents for that premium custom design feel */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#111111] flex items-center space-x-3">
              <span className="text-gray-400 font-light">[</span>
              <span>Ready to Scale?</span>
              <span className="text-gray-400 font-light">]</span>
            </span>
          </button>

          {/* Symmetrical scroll indicator */}
          <button
            onClick={() => {
              const el = document.getElementById("trust-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 group text-[#9CA3AF] hover:text-[#111111] transition-colors"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Discover</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical editorial line accents at left and right */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gray-200 hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-gray-200 hidden lg:block" />
    </section>
  );
}
