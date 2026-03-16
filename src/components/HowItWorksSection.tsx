



import { motion } from "framer-motion";
import { UserPlus, FileText, Wallet, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: UserPlus, title: "Request Info", desc: "Submit your inquiry and receive our detailed investor package with full opportunity details." },
  { icon: FileText, title: "Review & Subscribe", desc: "Review the offering memorandum, complete subscription documents, and finalize your investment." },
  { icon: Wallet, title: "Capital Deployed", desc: "Your capital is strategically deployed into our diversified real estate and investment portfolio." },
  { icon: TrendingUp, title: "Earn Returns", desc: "Receive your fixed annual returns as cumulative dividends, deposited directly to your account." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-12 md:py-16 bg-secondary">
    <div className="section-container px-4 md:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <span className="text-gold text-3xl font-bold tracking-widest uppercase">
          How It Works
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-2 mb-3 leading-tight">
          Start Investing in{" "}
          <span className="text-gold">Four Simple Steps</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Getting started with Cubez Capital is straightforward. Here's how your investment journey begins.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative">

        {/* Connector line — desktop only */}
        <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center
                         p-6 rounded-2xl bg-background border border-border
                         hover:border-gold/40 hover:shadow-md transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-background border-2 border-gold
                              flex items-center justify-center mb-4 relative z-10">
                <step.icon className="h-8 w-8 text-gold" />
              </div>

              {/* Step badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold mb-3">
                Step {i + 1}
              </span>

              <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                {step.desc}
              </p>

              {/* Mobile connector arrow */}
              {i < steps.length - 1 && (
                <div className="lg:hidden mt-4 text-gold/40 text-2xl">↓</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8 md:mt-10"
      >
        <p className="text-muted-foreground mb-4 text-sm md:text-base">
          Ready to begin your investment journey with Cubez Capital?
        </p>
        <Button
          size="lg"
          className="bg-[#d1a549] hover:bg-[#b8923e] text-white font-semibold px-10 py-6 text-base rounded-lg"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Connect With Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

    </div>
  </section>
);

export default HowItWorksSection;