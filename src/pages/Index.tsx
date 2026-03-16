import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import InvestmentStrategySection from "@/components/InvestmentStrategySection";
import InvestorBenefitsSection from "@/components/InvestorBenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import RiskManagementSection from "@/components/RiskManagementSection";
import OpportunitySection from "@/components/OpportunitySection";
import TestimonialSection from "@/components/TestimonialSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBadgesSection />
      <WhatWeDoSection />
      <InvestmentStrategySection />
      <InvestorBenefitsSection />
      <HowItWorksSection />
      {/* <WhyChooseSection /> */}
      <TestimonialSection />
      <RiskManagementSection />
      <OpportunitySection />
      <FAQSection />
      <ContactFormSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
