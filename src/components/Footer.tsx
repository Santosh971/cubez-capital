import logo from "@/assets/cubez-capital .png";
import logo1 from "@/assets/cubez-capital1.png";

const Footer = () => (
  <footer className="gradient-navy py-12 px-4">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Cubez Capital" className="h-10" />
        <p className="text-primary-foreground/40 text-sm text-center">
          © {new Date().getFullYear()} Cubez Capital Inc. All rights reserved. | Helping You Plan Your Financial Future
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-primary-foreground/10">
        <p className="text-primary-foreground/30 text-xs text-center leading-relaxed max-w-4xl mx-auto">
          This website is for informational purposes only and does not constitute an offer to sell or a solicitation
          of an offer to buy any securities. Investments involve risk, including the potential loss of principal.
          Past performance is not indicative of future results. Please consult with a qualified financial advisor
          before making any investment decisions.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
