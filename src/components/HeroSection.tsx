

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Shield, TrendingUp } from "lucide-react";

// const HeroSection = () => {
//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/CubezBackGround.jpg')" }}
//       />

//       {/* Navy overlay with gold-warm tint to match brand */}
//       <div className="absolute inset-0 bg-[#293e63]/60" />
//       {/* Bottom fade to navy */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#293e63]/20 to-[#293e63]/80" />
//       {/* Subtle left vignette */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#293e63]/50 via-transparent to-transparent" />

//       <div className="section-container section-padding relative z-10 pt-32 pb-20">
//         <div className="max-w-4xl mx-auto text-center">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Eyebrow */}
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <div className="h-px w-12 bg-[#d1a549]" />
//               <span className="text-[#d1a549] font-medium text-sm tracking-widest uppercase">
//                 Private Investment Opportunity
//               </span>
//               <div className="h-px w-12 bg-[#d1a549]" />
//             </div>

//             {/* Headline */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
//               Helping You Plan Your{" "}
//               <span className="text-[#d1a549]">Financial Future</span>
//             </h1>

//             {/* Subheadline */}
//             <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
//               Cubez Capital provides accredited investors access to institutional-grade real estate
//               and high-yield opportunities — delivering stable, predictable returns backed by tangible assets.
//             </p>
//           </motion.div>

//           {/* CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
//           >
//             <Button
//               size="lg"
//               className="text-base px-10 py-6 bg-[#d1a549] hover:bg-[#b8923e] text-white font-semibold rounded-lg"
//               onClick={() => scrollTo("contact")}
//             >
//               Connect With Us
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               size="lg"
//               className="text-base px-10 py-6 bg-transparent border border-white/50 text-white hover:bg-white/10 font-semibold rounded-lg"
//               onClick={() => scrollTo("strategy")}
//             >
//               Explore Our Strategy
//             </Button>
//           </motion.div>

//           {/* Trust badges */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
//           >
//             {[
//               { icon: TrendingUp, label: "Fixed Annual Returns", value: "Stable & Predictable" },
//               { icon: Shield, label: "Asset-Backed Security", value: "Capital Protection" },
//               { icon: ArrowRight, label: "Clear Exit Strategy", value: "Redeemable Shares" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm"
//               >
//                 <div className="p-2 rounded-md bg-[#d1a549]/20 shrink-0">
//                   <item.icon className="h-5 w-5 text-[#d1a549]" />
//                 </div>
//                 <div className="text-left">
//                   <p className="text-xs text-white/60 uppercase tracking-wide">{item.label}</p>
//                   <p className="font-semibold text-white text-sm">{item.value}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/CubezBackGround.jpg')" }}
      />

      {/* Navy overlay with gold-warm tint to match brand */}
      <div className="absolute inset-0 bg-[#293e63]/60" />
      {/* Bottom fade to navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#293e63]/20 to-[#293e63]/80" />
      {/* Subtle left vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#293e63]/50 via-transparent to-transparent" />

      <div className="section-container section-padding relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#d1a549]" />
              <span className="text-[#d1a549] font-medium text-sm tracking-widest uppercase">
                Private Investment Opportunity
              </span>
              <div className="h-px w-12 bg-[#d1a549]" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Helping You Plan Your{" "}
              <span className="text-[#d1a549]">Financial Future</span>
            </h1>

            {/* Subheadline */}
            {/* <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Cubez Capital provides accredited investors access to institutional-grade real estate
              and high-yield opportunities — delivering stable, predictable returns backed by tangible assets.
            </p> */}

            <p className="text-base md:text-lg text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed px-4">
              Cubez Capital provides accredited investors access to institutional-grade real estate
              and high-yield opportunities — delivering stable, predictable returns backed by tangible assets.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="text-base px-10 py-6 bg-[#d1a549] hover:bg-[#b8923e] text-white font-semibold rounded-lg"
              onClick={() => scrollTo("contact")}
            >
              Connect With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="text-base px-10 py-6 bg-transparent border border-white/50 text-white hover:bg-white/10 font-semibold rounded-lg"
              onClick={() => scrollTo("strategy")}
            >
              Explore Our Strategy
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: TrendingUp, label: "Fixed Annual Returns", value: "Stable & Predictable" },
              { icon: Shield, label: "Asset-Backed Security", value: "Capital Protection" },
              { icon: ArrowRight, label: "Clear Exit Strategy", value: "Redeemable Shares" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm"
              >
                <div className="p-2 rounded-md bg-[#d1a549]/20 shrink-0">
                  <item.icon className="h-5 w-5 text-[#d1a549]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60 uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold text-white text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;