import React from "react";
import { motion } from "motion/react";
import { METRICS } from "../data";

export default function Metrics() {
  return (
    <section
      id="metrics-section"
      className="py-24 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Subtle Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400">
            // Performance
          </span>
        </div>

        {/* Big Metrics Grid with Thin Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {METRICS.map((metric, idx) => (
            <div
              key={metric.value}
              className={`flex flex-col items-center text-center px-6 py-6 md:py-0`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              >
                <div className="font-display font-bold text-6xl sm:text-7xl md:text-8xl text-black tracking-tighter leading-none mb-3">
                  {metric.value}
                </div>
                <div className="serif-italic text-sm sm:text-base text-gray-400 font-medium mt-1">
                  {metric.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Minimal foot note */}
        <div className="text-center mt-16">
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
            *Data aggregated from active accounts across primary commerce portals and paid platforms.
          </p>
        </div>

      </div>
    </section>
  );
}
