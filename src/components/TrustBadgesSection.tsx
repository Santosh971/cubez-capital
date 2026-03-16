


import { motion } from "framer-motion";
import { Shield, Award, FileCheck, Lock } from "lucide-react";

const badges = [
  { icon: Shield, label: "Asset-Backed Security", desc: "Every investment secured by tangible real assets" },
  { icon: Award, label: "Canadian Incorporated", desc: "Fully registered and operating under Canadian law" },
  { icon: FileCheck, label: "Regulatory Compliant", desc: "Adhering to Canadian securities regulations" },
  { icon: Lock, label: "Capital Protected", desc: "Conservative structure designed to protect investor funds" },
];

const TrustBadgesSection = () => (
  <section className="py-12 md:py-16 bg-secondary border-y border-border">
    <div className="section-container px-4 md:px-8">

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-xs tracking-widest uppercase text-muted-foreground font-medium mb-8"
      >
        Why Investors Trust Cubez Capital
      </motion.p>

      {/* Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-3 
                       p-5 rounded-2xl border border-border bg-background/60 
                       hover:border-gold/40 hover:bg-background transition-all duration-300 group text-left sm:text-center"
          >
            {/* Icon */}
            <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
              <badge.icon className="h-6 w-6 text-gold" />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold text-foreground mb-0.5">{badge.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{badge.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default TrustBadgesSection;