import { motion } from "framer-motion";
import { Shield, Search, FileCheck, PieChart, Calculator, Scale } from "lucide-react";

const items = [
  { icon: Calculator, title: "Conservative Valuations", desc: "All properties valued conservatively to protect against market fluctuations." },
  { icon: Search, title: "Third-Party Inspections", desc: "Independent property inspections and appraisals on every deal." },
  { icon: Shield, title: "Secured Lending", desc: "First-position mortgages and secured lending positions on all loans." },
  { icon: PieChart, title: "Diversified Portfolio", desc: "Capital spread across multiple projects to reduce concentration risk." },
  { icon: FileCheck, title: "Strict Oversight", desc: "Rigorous budgeting, ongoing monitoring, and professional management." },
  { icon: Scale, title: "Regulatory Compliance", desc: "Full adherence to Canadian securities laws and regulations." },
];

const RiskManagementSection = () => (
  <section className="py-12 md:py-16 gradient-navy">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-8 md:mb-12"
      >
        <span className="text-gold text-2xl sm:text-3xl font-bold tracking-widest uppercase">
          Risk Management
        </span>
        <h2 className="text-base sm:text-lg md:text-2xl font-medium mt-2 mb-3 leading-tight !text-primary-foreground">
          Your Capital is{" "}
          <span className="text-gold">Protected</span>
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          We employ institutional-grade risk management practices to safeguard every dollar invested.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="p-5 sm:p-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 hover:border-gold/40 hover:bg-primary-foreground/10 transition-all duration-300 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 !text-primary-foreground">
              {item.title}
            </h3>
            <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default RiskManagementSection;