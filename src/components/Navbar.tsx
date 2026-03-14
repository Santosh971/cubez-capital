// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/cubez-capital .png";
// import logo1 from "@/assets/cubez-capital1.png";

// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import { useEffect } from "react";
// const navItems = ["Strategy", "Benefits", "How It Works", "Why Us", "Opportunity", "FAQ"];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
//         ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-md"
//         : "bg-transparent border-b border-transparent"
//         }`}
//     >
//       <div className="section-container flex items-center justify-between h-16 px-4 lg:px-16">
//         <img src={logo1} alt="Cubez Capital" className="h-14" />
//         <div className="hidden md:flex items-center gap-8">

//         </div>
//         <button
//           className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"
//             }`}
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3"
//         >
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
//               className="block w-full text-left text-sm font-medium text-foreground/70 hover:text-primary py-2"
//             >
//               {item}
//             </button>
//           ))}
//           <Button variant="gold" className="w-full" onClick={() => scrollTo("contact")}>
//             Become an Investor
//           </Button>
//         </motion.div>
//       )}
//     </nav>
//   );

// };

// export default Navbar;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo1 from "@/assets/cubez-capital1.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = ["Strategy", "Benefits", "How It Works", "Why Us", "Opportunity", "FAQ"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white border-b border-border shadow-md"
          : "bg-white border-b border-border"
        }`}
    >
      <div className="section-container flex items-center justify-between h-16 px-4 lg:px-16">

        {/* Logo */}
        <img src={logo1} alt="Cubez Capital" className="h-14" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
              className="text-sm font-medium transition-colors text-foreground/70 hover:text-primary"
            >
              {item}
            </button>
          ))}
          <Button variant="gold" size="lg" onClick={() => scrollTo("contact")}>
            Become an Investor
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden transition-colors text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-border px-4 pb-4 space-y-3"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
              className="block w-full text-left text-sm font-medium text-foreground/70 hover:text-primary py-2"
            >
              {item}
            </button>
          ))}
          <Button variant="gold" className="w-full" onClick={() => scrollTo("contact")}>
            Become an Investor
          </Button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;