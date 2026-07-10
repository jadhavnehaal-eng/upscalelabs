import React from "react";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onCtaclick: () => void;
}

export default function Header({ onCtaclick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F9F9]/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Stark Editorial Brand Name */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0 whitespace-nowrap">
          <span className="font-display font-bold text-sm xs:text-base sm:text-xl tracking-tighter uppercase text-[#111111]">
            Upscale Labs
          </span>
          <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-none bg-[#111111] shrink-0"></span>
        </div>

        {/* Clean Right Actions */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          <button
            onClick={() => {
              const el = document.getElementById("metrics-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden sm:inline-block text-[10px] font-mono tracking-[0.2em] text-gray-400 hover:text-[#111111] uppercase transition-colors"
          >
            // performance
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("services-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden sm:inline-block text-[10px] font-mono tracking-[0.2em] text-gray-400 hover:text-[#111111] uppercase transition-colors"
          >
            // services
          </button>

          <button
            id="header-cta"
            onClick={onCtaclick}
            className="hidden sm:inline-block relative group overflow-hidden border border-[#111111] px-5 py-2.5 rounded-none text-[10px] font-mono uppercase tracking-[0.15em] text-[#111111] hover:text-[#fcfcfd] transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-[#111111] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10"></span>
            <span className="flex items-center space-x-1">
              <span>Ready to Scale?</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
