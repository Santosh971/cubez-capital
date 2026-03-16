

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import { ArrowRight, Shield, TrendingUp, BadgeCheck } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/CubezBackGround.jpg')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#293e63]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#293e63]/20 to-[#293e63]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#293e63]/50 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <div className="h-px w-8 sm:w-12 bg-[#d1a549]" />
              <span className="text-[#d1a549] font-medium text-[0.65rem] sm:text-sm tracking-widest uppercase text-center">
                Private Investment Opportunity
              </span>
              <div className="h-px w-8 sm:w-12 bg-[#d1a549]" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white px-2">
              Helping You Plan Your{" "}
              <span className="text-[#d1a549]">Financial Future</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 text-center sm:text-justify">
              Cubez Capital provides accredited investors access to institutional-grade real estate
              and high-yield opportunities — delivering stable, predictable returns backed by tangible assets.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 bg-[#d1a549] hover:bg-[#b8923e] text-white font-semibold rounded-lg"
              onClick={() => scrollTo("contact")}
            >
              Connect With Us
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 bg-transparent border border-white/50 text-white hover:bg-white/10 font-semibold rounded-lg"
              onClick={() => scrollTo("strategy")}
            >
              Explore Our Strategy
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full max-w-sm sm:max-w-3xl lg:max-w-5xl mx-auto"
          >
            {[
              { icon: TrendingUp, label: "Fixed Annual Returns", value: "Stable & Predictable" },
              { icon: Shield, label: "Asset-Backed Security", value: "Capital Protection" },
              { icon: ArrowRight, label: "Clear Exit Strategy", value: "Redeemable Shares" },
              { icon: BadgeCheck, label: "Accredited Investors", value: "Exclusive Access" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm text-left w-full"
              >
                <div className="p-1.5 sm:p-2 rounded-md bg-[#d1a549]/20 shrink-0">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#d1a549]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.6rem] sm:text-xs text-white/60 uppercase tracking-wide truncate">{item.label}</p>
                  <p className="font-semibold text-white text-[0.7rem] sm:text-sm truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;