

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const investmentRanges = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
];

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", range: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-16 gradient-navy">
      <div className="section-container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 !text-primary-foreground leading-tight">
              Ready to Secure Your{" "}
              <span className="text-gold">Financial Future?</span>
            </h2>
            <p className="text-primary-foreground/60 text-base md:text-lg mb-8 leading-relaxed">
              Request your investor package today. Our team will provide you with detailed information
              about our current Class B Preferred Share offering and guide you through the process.
            </p>

            <div className="space-y-3 md:space-y-4">
              {[
                "Receive our detailed investor package",
                "Speak directly with an investment advisor",
                "Learn about current return projections",
                "No obligation — completely confidential",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 md:p-10 text-center">
                <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-gold mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold !text-primary-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-primary-foreground/60 text-sm md:text-base">
                  We've received your inquiry. An investment advisor will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-10 space-y-4 md:space-y-5"
              >
                <div className="mb-2">
                  <h3 className="text-lg md:text-xl font-bold !text-primary-foreground">
                    Request Investor Package
                  </h3>
                  <p className="text-primary-foreground/50 text-sm mt-1">
                    All inquiries are confidential.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-foreground/70 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors text-sm md:text-base"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-foreground/70 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-foreground/70 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors text-sm md:text-base"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-foreground/70 mb-1.5">
                    Investment Range
                  </label>
                  <select
                    value={form.range}
                    onChange={(e) => setForm({ ...form, range: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground focus:outline-none focus:border-gold transition-colors appearance-none text-sm md:text-base"
                  >
                    <option value="" className="text-foreground">Select range</option>
                    {investmentRanges.map((r) => (
                      <option key={r} value={r} className="text-foreground">{r}</option>
                    ))}
                  </select>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full text-base py-6">
                  Request Investor Package
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-primary-foreground/30 text-xs text-center">
                  By submitting, you agree to receive investment information from Cubez Capital.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;