import React from "react";
import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-[#fcfcfd] border-t border-neutral-800 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-neutral-800 pb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-display font-bold text-xl tracking-tighter uppercase">
                Upscale Labs
              </span>
              <span className="w-1.5 h-1.5 rounded-none bg-[#fcfcfd]" />
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              We engineer custom conversion loops, execute metric-focused performance marketing, and deploy high-converting platform funnels. Stark design. Pure performance.
            </p>
          </div>

          {/* Quick Contacts Col */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">
              // CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nehaal@upscalelabs.in"
                  className="inline-flex items-center space-x-2 text-xs text-neutral-300 hover:text-[#fcfcfd] transition-colors font-mono"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>nehaal@upscalelabs.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919820445624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs text-neutral-300 hover:text-[#fcfcfd] transition-colors font-mono"
                >
                  <img
                    src="https://i.ibb.co/ymP6kVHg/whatsapp-1.png"
                    alt="WhatsApp"
                    referrerPolicy="no-referrer"
                    className="w-4 h-4 object-contain"
                  />
                  <span>+91 98204 45624</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Guidelines Col */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">
              // PHILOSOPHY
            </h4>
            <p className="serif-italic text-xs text-neutral-400 leading-relaxed">
              "Craftsmanship is the integration of visual restraint, rigorous engineering, and immediate business impact."
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 gap-6">
          <div className="text-[10px] font-mono text-neutral-500 flex items-center space-x-4">
            <span>&copy; {new Date().getFullYear()} UPSCALE LABS.</span>
            <span className="text-neutral-700">|</span>
            <span>ALL RIGHTS DEPLOYED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-[#fcfcfd] transition-colors group focus:outline-none"
          >
            <span>BACK TO ZENITH</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-neutral-500" />
          </button>
        </div>

      </div>
    </footer>
  );
}
