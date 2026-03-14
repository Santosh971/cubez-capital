import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Cubez Capital?",
    a: "Cubez Capital is a Canadian private investment company that raises capital from investors and deploys it into real estate and high-yield investment opportunities, providing stable and predictable returns.",
  },
  {
    q: "What are Class B Preferred Shares?",
    a: "Class B Preferred Shares are an investment vehicle that offers fixed annual returns, cumulative dividends, and priority distributions over common shareholders — without any voting responsibilities or operational involvement.",
  },
  {
    q: "How is my investment protected?",
    a: "We employ multiple layers of risk management including conservative property valuations, third-party inspections, secured lending positions, portfolio diversification, strict budgeting and oversight, and full regulatory compliance.",
  },
  {
    q: "What is the minimum investment?",
    a: "Please contact our investment team to discuss minimum investment requirements and current availability for our Class B Preferred Share offering.",
  },
  {
    q: "Can I redeem my shares?",
    a: "Yes, Class B Preferred Shares are redeemable. Our team will discuss the specific terms and timeline during the investor onboarding process.",
  },
  {
    q: "Who can invest?",
    a: "Our offering is available to qualified investors. Contact us to discuss eligibility requirements and learn more about the opportunity.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gold flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-5 pb-5"
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
