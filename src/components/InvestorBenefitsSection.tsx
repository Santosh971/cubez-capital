


// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// const benefits = [
//   "Stable and predictable fixed annual returns",
//   "Truly passive income — no management required",
//   "Asset-backed investments for capital security",
//   "Diversified portfolio across multiple projects",
//   "Professional investment management team",
//   "Clear exit strategy with redeemable shares",
//   "Cumulative dividends with priority distributions",
//   "No voting responsibilities or operational burden",
// ];

// const InvestorBenefitsSection = () => (
//   <section id="benefits" className="section-padding bg-background">
//     <div className="section-container px-4 md:px-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//         {/* Left — Benefits */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
//             Investor Benefits
//           </span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
//             Why Smart Investors Choose{" "}
//             <span className="text-gold">Cubez Capital</span>
//           </h2>
//           <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
//             Our Class B Preferred Share structure is designed to give investors maximum protection
//             and predictable returns — without the headaches of active real estate management.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
//             {benefits.map((b, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -10 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//                 className="flex items-start gap-3 p-3 rounded-xl bg-secondary/40 border border-border hover:border-gold/30 transition-colors duration-300"
//               >
//                 <div className="mt-0.5 p-1 rounded-full bg-gold/10 shrink-0">
//                   <Check className="h-3.5 w-3.5 text-gold" />
//                 </div>
//                 <span className="text-sm font-medium text-foreground leading-snug">{b}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right — Share Details Card */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="gradient-navy rounded-2xl p-6 md:p-10 shadow-xl"
//         >
//           {/* Card Header */}
//           <div className="flex items-center gap-2 mb-2">
//             <span className="text-gold text-xs tracking-widest uppercase font-medium">
//               Current Offering
//             </span>
//           </div>
//           <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
//             Class B Preferred Shares
//           </h3>

//           {/* Divider */}
//           <div className="h-px bg-white/10 mb-6" />

//           {/* Rows */}
//           <div className="space-y-0">
//             {[
//               { label: "Return Type", value: "Fixed Annual Return" },
//               { label: "Dividends", value: "Cumulative & Priority" },
//               { label: "Priority", value: "Over Common Shareholders" },
//               { label: "Voting", value: "No Voting Required" },
//               { label: "Redemption", value: "Redeemable Shares" },
//               { label: "Security", value: "Asset-Backed" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex justify-between items-center border-b border-white/10 py-4 last:border-0 last:pb-0"
//               >
//                 <span className="text-white/60 text-sm">{item.label}</span>
//                 <span className="text-gold font-semibold text-sm">{item.value}</span>
//               </div>
//             ))}
//           </div>

//           {/* Bottom note */}
//           <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
//             <p className="text-white/70 text-xs leading-relaxed text-center">
//               🔒 Limited availability for early investors. Capital is deployed on a first-come, first-served basis.
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   </section>
// );

// export default InvestorBenefitsSection;

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Stable and predictable fixed annual returns",
  "Truly passive income — no management required",
  "Asset-backed investments for capital security",
  "Diversified portfolio across multiple projects",
  "Professional investment management team",
  "Clear exit strategy with redeemable shares",
  "Cumulative dividends with priority distributions",
  "No voting responsibilities or operational burden",
];

const InvestorBenefitsSection = () => (
  <section id="benefits" className="py-12 md:py-16 bg-background">
    <div className="section-container px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left — Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-3xl font-bold tracking-widest uppercase">
            Investor Benefits
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-2 mb-3 leading-tight">
            Why Smart Investors Choose{" "}
            <span className="text-gold">Cubez Capital</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Our Class B Preferred Share structure is designed to give investors maximum protection
            and predictable returns — without the headaches of active real estate management.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-secondary/40 border border-border hover:border-gold/30 transition-colors duration-300"
              >
                <div className="mt-0.5 p-1 rounded-full bg-gold/10 shrink-0">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">{b}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              Ready to start earning stable, predictable returns?
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
        </motion.div>

        {/* Right — Share Details Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="gradient-navy rounded-2xl p-6 md:p-10 shadow-xl"
        >
          {/* Card Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gold text-xs tracking-widest uppercase font-medium">
              Current Offering
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Class B Preferred Shares
          </h3>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6" />

          {/* Rows */}
          <div className="space-y-0">
            {[
              { label: "Return Type", value: "Fixed Annual Return" },
              { label: "Dividends", value: "Cumulative & Priority" },
              { label: "Priority", value: "Over Common Shareholders" },
              { label: "Voting", value: "No Voting Required" },
              { label: "Redemption", value: "Redeemable Shares" },
              { label: "Security", value: "Asset-Backed" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-white/10 py-4 last:border-0 last:pb-0"
              >
                <span className="text-white/60 text-sm">{item.label}</span>
                <span className="text-gold font-semibold text-sm">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white/70 text-xs leading-relaxed text-center">
              🔒 Limited availability for early investors. Capital is deployed on a first-come, first-served basis.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default InvestorBenefitsSection;