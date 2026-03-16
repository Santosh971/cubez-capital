

// import { motion } from "framer-motion";
// import { Award, Users, Briefcase, ShieldCheck, Clock, BarChart3, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const reasons = [
//   { icon: Briefcase, title: "Proven Track Record", desc: "Years of successful real estate investment and capital deployment across Canadian markets." },
//   { icon: ShieldCheck, title: "Capital Protection", desc: "Conservative valuations, secured lending positions, and diversified portfolio approach." },
//   { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep expertise in real estate, finance, and risk management." },
//   { icon: BarChart3, title: "Transparent Reporting", desc: "Regular investor updates, detailed project reports, and full financial transparency." },
//   { icon: Clock, title: "Flexible Terms", desc: "Redeemable shares with clear exit strategies designed around investor needs." },
//   { icon: Award, title: "Regulatory Compliance", desc: "Fully compliant investment structure adhering to Canadian securities regulations." },
// ];

// const WhyChooseSection = () => (
//   <section id="why-us" className="py-2 md:py-4 bg-background">
//     <div className="section-container">

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-6 md:mb-10 px-4"
//       >


//         <span className="text-gold text-3xl font-bold tracking-widest uppercase">
//           Why Cubez Capital
//         </span>
//         <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-2 mb-3 leading-tight">
//           Trusted by Investors Who Demand{" "}
//           <span className="text-gold">More</span>
//         </h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//           We combine institutional discipline with a personal approach — giving investors
//           the transparency, security, and performance they deserve.
//         </p>
//       </motion.div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-4 md:px-0">
//         {reasons.map((r, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             className="p-6 rounded-2xl border border-border bg-secondary/40 hover:border-gold/40 hover:bg-secondary/70 transition-all duration-300 group"
//           >
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

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mt-6 md:mt-10"
//       >
//         <p className="text-muted-foreground mb-4 text-sm md:text-base">
//           Join investors who trust Cubez Capital to grow and protect their wealth.
//         </p>
//         <Button
//           size="lg"
//           className="bg-[#d1a549] hover:bg-[#b8923e] text-white font-semibold px-10 py-6 text-base rounded-lg"
//           onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//         >
//           Connect With Us
//           <ArrowRight className="ml-2 h-5 w-5" />
//         </Button>
//       </motion.div>

//     </div>
//   </section>
// );

// export default WhyChooseSection;



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
  <section id="why-us" className="py-12 md:py-16 bg-background">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-8 md:mb-12"
      >
        <span className="text-gold text-2xl sm:text-3xl font-bold tracking-widest uppercase">
          Why Cubez Capital
        </span>
        <h2 className="text-base sm:text-lg md:text-2xl font-medium mt-2 mb-3 leading-tight">
          Trusted by Investors Who Demand{" "}
          <span className="text-gold">More</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          We combine institutional discipline with a personal approach — giving investors
          the transparency, security, and performance they deserve.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="p-5 sm:p-6 rounded-2xl border border-border bg-secondary/40 hover:border-gold/40 hover:bg-secondary/70 transition-all duration-300 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
              <r.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-foreground">
              {r.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="text-center mt-8 md:mt-12"
      >
        <p className="text-muted-foreground mb-4 text-sm sm:text-base">
          Join investors who trust Cubez Capital to grow and protect their wealth.
        </p>
        <Button
          size="lg"
          className="w-full sm:w-auto bg-[#d1a549] hover:bg-[#b8923e] text-white font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base rounded-lg"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Connect With Us
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </motion.div>

    </div>
  </section>
);

export default WhyChooseSection;