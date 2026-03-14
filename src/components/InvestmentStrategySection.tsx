// // import { motion } from "framer-motion";
// // import { Target, PieChart, LineChart, ShieldCheck } from "lucide-react";

// // const steps = [
// //   { icon: Target, title: "Identify", desc: "Our team sources high-potential real estate and investment opportunities across Canadian markets." },
// //   { icon: PieChart, title: "Analyze", desc: "Rigorous due diligence including market analysis, property valuations, and financial modeling." },
// //   { icon: LineChart, title: "Deploy", desc: "Capital is strategically deployed across diversified assets to optimize risk-adjusted returns." },
// //   { icon: ShieldCheck, title: "Protect", desc: "Ongoing monitoring, conservative lending positions, and professional asset management." },
// // ];

// // const InvestmentStrategySection = () => (
// //   <section id="strategy" className="section-padding bg-secondary">
// //     <div className="section-container">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="text-center mb-16"
// //       >
// //         <span className="text-gold font-medium text-sm tracking-widest uppercase">Investment Strategy</span>
// //         <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
// //           A Disciplined Approach to <span className="text-gold">Wealth Creation</span>
// //         </h2>
// //         <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
// //           Our four-pillar investment process ensures every dollar of investor capital is deployed 
// //           with precision and protected with institutional-grade risk management.
// //         </p>
// //       </motion.div>

// //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //         {steps.map((step, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: i * 0.15 }}
// //             className="text-center"
// //           >
// //             <div className="relative mx-auto mb-6">
// //               <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto">
// //                 <step.icon className="h-7 w-7 text-primary-foreground" />
// //               </div>
// //               <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
// //                 {i + 1}
// //               </span>
// //             </div>
// //             <h3 className="text-xl font-bold mb-2">{step.title}</h3>
// //             <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // export default InvestmentStrategySection;


// import { motion } from "framer-motion";
// import { Target, PieChart, LineChart, ShieldCheck } from "lucide-react";

// const steps = [
//   { icon: Target, title: "Identify", desc: "Our team sources high-potential real estate and investment opportunities across Canadian markets." },
//   { icon: PieChart, title: "Analyze", desc: "Rigorous due diligence including market analysis, property valuations, and financial modeling." },
//   { icon: LineChart, title: "Deploy", desc: "Capital is strategically deployed across diversified assets to optimize risk-adjusted returns." },
//   { icon: ShieldCheck, title: "Protect", desc: "Ongoing monitoring, conservative lending positions, and professional asset management." },
// ];

// const InvestmentStrategySection = () => (
//   <section id="strategy" className="section-padding bg-secondary">
//     <div className="section-container">

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-12 md:mb-16 px-4"
//       >
//         <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
//           Investment Strategy
//         </span>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
//           A Disciplined Approach to{" "}
//           <span className="text-gold">Wealth Creation</span>
//         </h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//           Our four-pillar investment process ensures every dollar of investor capital is deployed
//           with precision and protected with institutional-grade risk management.
//         </p>
//       </motion.div>

//       {/* Steps Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
//         {steps.map((step, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.15 }}
//             className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border hover:border-gold/40 transition-colors duration-300"
//           >
//             {/* Icon + Number */}
//             <div className="relative mb-6">
//               <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
//                 <step.icon className="h-7 w-7 text-primary-foreground" />
//               </div>
//               <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
//                 {i + 1}
//               </span>
//             </div>

//             {/* Text */}
//             <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{step.title}</h3>
//             <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//     </div>
//   </section>
// );

// export default InvestmentStrategySection;



import { motion } from "framer-motion";
import { Target, PieChart, LineChart, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Target, title: "Identify", desc: "Our team sources high-potential real estate and investment opportunities across Canadian markets." },
  { icon: PieChart, title: "Analyze", desc: "Rigorous due diligence including market analysis, property valuations, and financial modeling." },
  { icon: LineChart, title: "Deploy", desc: "Capital is strategically deployed across diversified assets to optimize risk-adjusted returns." },
  { icon: ShieldCheck, title: "Protect", desc: "Ongoing monitoring, conservative lending positions, and professional asset management." },
];

const InvestmentStrategySection = () => (
  <section id="strategy" className="section-padding bg-secondary">
    <div className="section-container">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 px-4"
      >
        <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
          Investment Strategy
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
          A Disciplined Approach to{" "}
          <span className="text-gold">Wealth Creation</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Our four-pillar investment process ensures every dollar of investor capital is deployed
          with precision and protected with institutional-grade risk management.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border hover:border-gold/40 transition-colors duration-300"
          >
            {/* Icon + Number */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                {i + 1}
              </span>
            </div>

            {/* Text */}
            <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-4 text-sm md:text-base">
          Interested in how we put your capital to work?
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

export default InvestmentStrategySection;