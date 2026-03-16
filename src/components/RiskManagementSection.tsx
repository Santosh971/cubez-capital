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
  <section className="section-padding gradient-navy">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-gold font-medium text-sm tracking-widest uppercase">Risk Management</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 !text-primary-foreground">
          Your Capital is <span className="text-gold">Protected</span>
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
          We employ institutional-grade risk management practices to safeguard every dollar invested.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
          >
            <item.icon className="h-8 w-8 text-gold mb-4" />
            <h3 className="text-lg font-bold !text-primary-foreground mb-2">{item.title}</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RiskManagementSection;
