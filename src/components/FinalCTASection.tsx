

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="section-container max-w-3xl text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Don't Let Your Capital Sit Idle
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Join a growing community of investors building wealth through asset-backed,
            professionally managed investments. Limited availability — secure your position today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gold"
              size="lg"
              className="text-base px-8 py-6 w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Become an Investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="gold-outline"
              size="lg"
              className="text-base px-8 py-6 w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Speak With an Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;