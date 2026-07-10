import React from "react";
import { motion } from "motion/react";
import { BRANDS } from "../data";
import { Sparkles } from "lucide-react";

export default function TrustGrid() {
  // Duplicate for seamless marquee infinite scrolling
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section
      id="trust-section"
      className="py-20 bg-[#F9F9F9] border-y border-gray-200 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400">
          // Brands We Have Scaled
        </span>
      </div>

      {/* 1. Horizontal Text Marquee */}
      <div className="relative w-full overflow-hidden bg-white py-6 border-y border-gray-200/50 select-none">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9F9F9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9F9F9] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-marquee-${idx}`}
              className="flex items-center space-x-4 shrink-0"
            >
              <span className="font-display font-bold text-lg uppercase tracking-wider text-[#111111]">
                {brand.name}
              </span>
              {brand.locations && brand.locations.length > 0 ? (
                <span className="text-[10px] font-mono text-gray-400 uppercase">
                  // {brand.locations.join(" • ")}
                </span>
              ) : (
                <span className="text-[10px] font-mono text-gray-400 uppercase">// GLOBAL</span>
              )}
              <span className="text-gray-300 font-light">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
