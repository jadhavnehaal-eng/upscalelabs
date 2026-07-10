import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    website: "",
    challenge: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile pre-filled professional intake diagnostic email
    const recipient = "nehaal@upscalelabs.in";
    const subject = `Upscale Labs Intake: Scale request from ${formData.company || formData.name}`;
    
    const emailBody = `
Dear Upscale Labs Team,

I would like to initiate an intake discussion to scale our brand. Below are our details:

• Partner Name: ${formData.name || "Not Specified"}
• Brand Name: ${formData.company || "Not Specified"}
• Work Email: ${formData.email || "Not Specified"}
• Website URL: ${formData.website || "Not Specified"}

• Primary Growth Bottleneck / Challenge:
${formData.challenge || "Not Specified"}

Looking forward to your high-velocity growth response.

Best regards,
${formData.name || "Prospective Partner"}
`.trim();

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoUrl;
    
    // Set success indicator
    setSubmitted(true);
  };

  return (
    <section
      id="intake-section"
      className="py-24 bg-[#F9F9F9] border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title and Intro */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-[#111111] text-[#fcfcfd] text-[9px] font-mono uppercase tracking-[0.25em]">
            // take the next step
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] mt-6 tracking-tight">
            Ready to Scale?
          </h2>
          <p className="serif-italic text-gray-400 text-base sm:text-lg mt-4">
            Tell us your next challenge and we will help you scale.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 p-12 text-center"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-16 h-16 text-[#111111]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#111111] mb-2">
              Intake Compiled Successfully
            </h3>
            <p className="text-sm text-neutral-500 font-light max-w-md mx-auto mb-8">
              We have launched your local email client with all pre-filled metrics to send your diagnostic to{" "}
              <strong className="text-[#111111] font-medium">nehaal@upscalelabs.in</strong>. If it did not launch automatically, click below:
            </p>
            <a
              href={`mailto:nehaal@upscalelabs.in?subject=Intake&body=${encodeURIComponent(
                `Brand Name: ${formData.company}\nChallenges: ${formData.challenge}`
              )}`}
              className="inline-flex items-center space-x-2 bg-[#111111] text-[#fcfcfd] px-8 py-4 font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <span>Launch Mail Client Manually</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="block mx-auto mt-6 text-xs text-gray-400 hover:text-[#111111] underline underline-offset-4"
            >
              Revise my inputs
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12 bg-white border border-gray-200 p-8 sm:p-12 shadow-sm">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Field 1: Name */}
              <div className="relative group">
                <input
                  required
                  type="text"
                  name="name"
                  id="form-name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#111111] focus:outline-none py-3 text-sm text-[#111111] placeholder-transparent transition-colors peer"
                />
                <label
                  htmlFor="form-name"
                  className="absolute left-0 top-3 text-neutral-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-400 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#111111] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#111111] uppercase tracking-wider font-mono text-[10px]"
                >
                  Your Name *
                </label>
              </div>

              {/* Field 2: Company */}
              <div className="relative group">
                <input
                  required
                  type="text"
                  name="company"
                  id="form-company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#111111] focus:outline-none py-3 text-sm text-[#111111] placeholder-transparent transition-colors peer"
                />
                <label
                  htmlFor="form-company"
                  className="absolute left-0 top-3 text-neutral-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-400 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#111111] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#111111] uppercase tracking-wider font-mono text-[10px]"
                >
                  Brand / Company Name *
                </label>
              </div>

              {/* Field 3: Email */}
              <div className="relative group">
                <input
                  required
                  type="email"
                  name="email"
                  id="form-email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#111111] focus:outline-none py-3 text-sm text-[#111111] placeholder-transparent transition-colors peer"
                />
                <label
                  htmlFor="form-email"
                  className="absolute left-0 top-3 text-neutral-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-400 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#111111] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#111111] uppercase tracking-wider font-mono text-[10px]"
                >
                  Work Email *
                </label>
              </div>

              {/* Field 4: Website */}
              <div className="relative group">
                <input
                  required
                  type="url"
                  name="website"
                  id="form-website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#111111] focus:outline-none py-3 text-sm text-[#111111] placeholder-transparent transition-colors peer"
                />
                <label
                  htmlFor="form-website"
                  className="absolute left-0 top-3 text-neutral-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-400 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#111111] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#111111] uppercase tracking-wider font-mono text-[10px]"
                >
                  Website URL *
                </label>
              </div>
            </div>

            {/* Field 5: Bottleneck Challenge */}
            <div className="relative group pt-6">
              <textarea
                required
                name="challenge"
                id="form-challenge"
                rows={4}
                value={formData.challenge}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full bg-transparent border-b border-gray-200 focus:border-[#111111] focus:outline-none py-3 text-sm text-[#111111] placeholder-transparent transition-colors resize-none peer"
              />
              <label
                htmlFor="form-challenge"
                className="absolute left-0 top-9 text-neutral-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-9 peer-placeholder-shown:text-neutral-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#111111] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#111111] uppercase tracking-wider font-mono text-[10px]"
              >
                What is your core scaling bottleneck? *
              </label>
            </div>

            {/* Primary Action Button */}
            <div className="pt-8 flex justify-center">
              <button
                type="submit"
                id="form-submit"
                className="group relative w-full sm:w-auto px-12 py-5 border border-[#111111] bg-[#111111] hover:bg-transparent text-[#fcfcfd] hover:text-[#111111] transition-colors duration-300"
              >
                {/* Visual arrow indicator */}
                <span className="font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-3">
                  <span>Lets Upscale</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
