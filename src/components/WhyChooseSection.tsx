// // import { motion } from "framer-motion";
// // import { Award, Users, Briefcase, ShieldCheck, Clock, BarChart3 } from "lucide-react";

// // const reasons = [
// //   { icon: Briefcase, title: "Proven Track Record", desc: "Years of successful real estate investment and capital deployment across Canadian markets." },
// //   { icon: ShieldCheck, title: "Capital Protection", desc: "Conservative valuations, secured lending positions, and diversified portfolio approach." },
// //   { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep expertise in real estate, finance, and risk management." },
// //   { icon: BarChart3, title: "Transparent Reporting", desc: "Regular investor updates, detailed project reports, and full financial transparency." },
// //   { icon: Clock, title: "Flexible Terms", desc: "Redeemable shares with clear exit strategies designed around investor needs." },
// //   { icon: Award, title: "Regulatory Compliance", desc: "Fully compliant investment structure adhering to Canadian securities regulations." },
// // ];

// // const WhyChooseSection = () => (
// //   <section id="why-us" className="section-padding bg-background">
// //     <div className="section-container">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="text-center mb-16"
// //       >
// //         <span className="text-gold font-medium text-sm tracking-widest uppercase">Why Cubez Capital</span>
// //         <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
// //           Trusted by Investors Who Demand <span className="text-gold">More</span>
// //         </h2>
// //       </motion.div>

// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {reasons.map((r, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: i * 0.1 }}
// //             className="p-6 rounded-xl border border-border hover:border-gold/30 transition-all group"
// //           >
// //             <r.icon className="h-8 w-8 text-gold mb-4" />
// //             <h3 className="text-lg font-bold mb-2">{r.title}</h3>
// //             <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // export default WhyChooseSection;

// import { motion } from "framer-motion";
// import { Award, Users, Briefcase, ShieldCheck, Clock, BarChart3 } from "lucide-react";

// const reasons = [
//   { icon: Briefcase, title: "Proven Track Record", desc: "Years of successful real estate investment and capital deployment across Canadian markets." },
//   { icon: ShieldCheck, title: "Capital Protection", desc: "Conservative valuations, secured lending positions, and diversified portfolio approach." },
//   { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep expertise in real estate, finance, and risk management." },
//   { icon: BarChart3, title: "Transparent Reporting", desc: "Regular investor updates, detailed project reports, and full financial transparency." },
//   { icon: Clock, title: "Flexible Terms", desc: "Redeemable shares with clear exit strategies designed around investor needs." },
//   { icon: Award, title: "Regulatory Compliance", desc: "Fully compliant investment structure adhering to Canadian securities regulations." },
// ];

// const WhyChooseSection = () => (
//   <section id="why-us" className="section-padding bg-background">
//     <div className="section-container">

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-12 md:mb-16 px-4"
//       >
//         <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
//           Why Cubez Capital
//         </span>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
//           Trusted by Investors Who Demand{" "}
//           <span className="text-gold">More</span>
//         </h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//           We combine institutional discipline with a personal approach — giving investors
//           the transparency, security, and performance they deserve.
//         </p>
//       </motion.div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-4 md:px-0">
//         {reasons.map((r, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             className="p-6 rounded-2xl border border-border bg-secondary/40 hover:border-gold/40 hover:bg-secondary/70 transition-all duration-300 group"
//           >
//             {/* Icon */}
//             <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
//               <r.icon className="h-6 w-6 text-gold" />
//             </div>

//             <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">
//               {r.title}
//             </h3>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               {r.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//     </div>
//   </section>
// );

import { motion } from "framer-motion";
import { Award, Users, Briefcase, ShieldCheck, Clock, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  { icon: Briefcase, title: "Proven Track Record", desc: "Years of successful real estate investment and capital deployment across Canadian markets." },
  { icon: ShieldCheck, title: "Capital Protection", desc: "Conservative valuations, secured lending positions, and diversified portfolio approach." },
  { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep expertise in real estate, finance, and risk management." },
  { icon: BarChart3, title: "Transparent Reporting", desc: "Regular investor updates, detailed project reports, and full financial transparency." },
  { icon: Clock, title: "Flexible Terms", desc: "Redeemable shares with clear exit strategies designed around investor needs." },
  { icon: Award, title: "Regulatory Compliance", desc: "Fully compliant investment structure adhering to Canadian securities regulations." },
];

const WhyChooseSection = () => (
  <section id="why-us" className="py-3 md:py-5 bg-background">
    <div className="section-container">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 md:mb-10 px-4"
      >
        {/* <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
          Why Cubez Capital
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
          Trusted by Investors Who Demand{" "}
          <span className="text-gold">More</span>
        </h2> */}

        <span className="text-gold text-3xl font-bold tracking-widest uppercase">
          Why Cubez Capital
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-2 mb-3 leading-tight">
          Trusted by Investors Who Demand{" "}
          <span className="text-gold">More</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          We combine institutional discipline with a personal approach — giving investors
          the transparency, security, and performance they deserve.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-4 md:px-0">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-secondary/40 hover:border-gold/40 hover:bg-secondary/70 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
              <r.icon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">
              {r.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-6 md:mt-10"
      >
        <p className="text-muted-foreground mb-4 text-sm md:text-base">
          Join investors who trust Cubez Capital to grow and protect their wealth.
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

export default WhyChooseSection;