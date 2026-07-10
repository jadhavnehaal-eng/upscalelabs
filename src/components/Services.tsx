import React, { useRef } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services-section"
      className="py-32 bg-[#111111] text-[#fcfcfd] relative overflow-hidden"
    >
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(244,245,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(244,245,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header of Services with Middle Aligned Core Services and Slider Controls */}
        <div className="text-center mb-16 relative">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400">
            // Core Services
          </span>
          {/* Slider controls for desktop and mobile */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-2 md:space-x-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
              className="w-8 h-8 md:w-10 md:h-10 rounded-none border border-neutral-800 hover:border-[#fcfcfd] flex items-center justify-center transition-colors hover:bg-neutral-900 focus:outline-none"
            >
              <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4 text-neutral-400 hover:text-[#fcfcfd]" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
              className="w-8 h-8 md:w-10 md:h-10 rounded-none border border-neutral-800 hover:border-[#fcfcfd] flex items-center justify-center transition-colors hover:bg-neutral-900 focus:outline-none"
            >
              <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-neutral-400 hover:text-[#fcfcfd]" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider & Fallback Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-12 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-[calc(100vw-48px)] sm:w-[400px] min-w-[260px] sm:min-w-[400px] shrink-0 snap-start bg-[#181818] border border-neutral-800 hover:border-neutral-700 relative overflow-hidden group flex flex-col h-[470px] xs:h-[430px] sm:h-[410px] rounded-none shadow-2xl transition-all duration-500"
            >
              {/* Artistic Overlay Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} artwork`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out grayscale hover:grayscale-0"
                />
                {/* Premium gradient overlay to ensure absolute text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/85 to-[#111111]/75 z-10" />
              </div>

              {/* Upper Section of Card */}
              <div className="px-8 pt-8 pb-2 relative z-20 flex justify-between items-start">
                <span className="text-xl text-[#fcfcfd]">
                  {service.category.split(" ")[0]}
                </span>
                
                {/* Italicized counter top right */}
                <span className="serif-italic text-lg text-gray-300 group-hover:text-[#fcfcfd] transition-colors">
                  {service.index}
                </span>
              </div>

              {/* Lower Section of Card / Core Content - aligned at same level */}
              <div className="px-8 pb-8 relative z-20">
                {/* Bold Lowercase Title */}
                <h3 className="font-display font-bold text-3xl text-[#fcfcfd] tracking-tight mb-4 lowercase">
                  {service.title}
                </h3>

                {/* Short Paragraph description */}
                <p className="text-[11px] text-gray-400 font-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-neutral-800 my-6 group-hover:bg-neutral-700 transition-colors" />

                {/* Bullet Points */}
                <ul className="space-y-4">
                  {service.bullets.map((bullet, bulletIdx) => {
                    const [headline, detail] = bullet.split(": ");
                    return (
                      <li key={bulletIdx} className="flex items-start space-x-3 text-xs">
                        <span className="mt-1 flex-shrink-0 w-4 h-4 bg-neutral-800 flex items-center justify-center border border-neutral-700">
                          <Check className="w-2.5 h-2.5 text-neutral-300" />
                        </span>
                        <div className="text-neutral-300 leading-relaxed font-light">
                          <strong className="text-[#fcfcfd] font-bold uppercase tracking-tighter text-[10px] mr-1">{headline}</strong>: {detail}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Sleek top edge highlight bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#fcfcfd] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
