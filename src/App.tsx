import React from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustGrid from "./components/TrustGrid";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import IntakeForm from "./components/IntakeForm";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToIntake = () => {
    const el = document.getElementById("intake-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col border-t-8 border-[#111111] selection:bg-[#111111] selection:text-[#fcfcfd]"
    >
      {/* Header with scroll callback */}
      <Header onCtaclick={handleScrollToIntake} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onCtaclick={handleScrollToIntake} />
        <TrustGrid />
        <Metrics />
        <Services />
        <IntakeForm />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

