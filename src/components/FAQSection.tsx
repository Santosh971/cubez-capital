



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
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-gold text-2xl sm:text-3xl font-bold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-base sm:text-lg md:text-2xl font-medium mt-2 mb-3 leading-tight">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-2 sm:space-y-3">
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
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-3"
              >
                <span className="font-semibold text-foreground text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""
                    }`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 sm:px-5 pb-4 sm:pb-5"
                >
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
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