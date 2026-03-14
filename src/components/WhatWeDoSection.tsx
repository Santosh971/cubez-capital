// import { motion } from "framer-motion";
// import { Building2, Banknote, Handshake, BarChart3 } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, delay: i * 0.1 },
//   }),
// };

// const items = [
//   { icon: Building2, title: "Real Estate Flipping", desc: "Acquiring undervalued properties, renovating, and selling for profit in high-demand Canadian markets." },
//   { icon: Banknote, title: "Private Lending", desc: "Secured lending to vetted developers with conservative LTV ratios and first-position mortgages." },
//   { icon: Handshake, title: "Joint Venture Development", desc: "Strategic partnerships on residential and commercial development projects across Canada." },
//   { icon: BarChart3, title: "Strategic Equity", desc: "Equity investments in high-potential companies poised for growth in select industries." },
// ];

// const WhatWeDoSection = () => (
//   <section className="section-padding bg-background">
//     <div className="section-container">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-16"
//       >
//         <span className="text-gold font-medium text-sm tracking-widest uppercase">What We Do</span>
//         <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
//           Deploying Capital Into <span className="text-gold">High-Yield</span> Opportunities
//         </h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//           Cubez Capital raises capital from investors and strategically deploys it into real estate 
//           and diversified investment opportunities across Canada.
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="group p-6 rounded-xl border border-border hover:border-gold/30 transition-all hover:shadow-lg bg-card"
//           >
//             <div className="p-3 rounded-lg bg-secondary w-fit mb-4 group-hover:bg-gold/10 transition-colors">
//               <item.icon className="h-6 w-6 text-primary group-hover:text-gold transition-colors" />
//             </div>
//             <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//             <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default WhatWeDoSection;



import { motion } from "framer-motion";
import { Building2, Banknote, Handshake, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const items = [
  { icon: Building2, title: "Real Estate Flipping", desc: "Acquiring undervalued properties, renovating, and selling for profit in high-demand Canadian markets." },
  { icon: Banknote, title: "Private Lending", desc: "Secured lending to vetted developers with conservative LTV ratios and first-position mortgages." },
  { icon: Handshake, title: "Joint Venture Development", desc: "Strategic partnerships on residential and commercial development projects across Canada." },
  { icon: BarChart3, title: "Strategic Equity", desc: "Equity investments in high-potential companies poised for growth in select industries." },
];

const WhatWeDoSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container px-4 md:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
          What We Do
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
          Deploying Capital Into{" "}
          <span className="text-gold">High-Yield</span> Opportunities
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Cubez Capital raises capital from investors and strategically deploys it into real estate
          and diversified investment opportunities across Canada.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group p-6 rounded-2xl border border-border hover:border-gold/40 
                       transition-all duration-300 hover:shadow-lg bg-card"
          >
            <div className="p-3 rounded-xl bg-secondary w-fit mb-4 group-hover:bg-gold/10 transition-colors duration-300">
              <item.icon className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
            </div>
            <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.desc}
            </p>
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
          Ready to put your capital to work in high-yield opportunities?
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

export default WhatWeDoSection;