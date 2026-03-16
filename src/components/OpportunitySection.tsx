


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, AlertTriangle } from "lucide-react";

const OpportunitySection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="opportunity" className="py-12 md:py-16 bg-background">
      <div className="section-container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <span className="text-gold font-medium text-xs md:text-sm tracking-widest uppercase">
              Current Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
              Class B Preferred Shares —{" "}
              <span className="text-gold">Now Open</span>
            </h2> */}
            <span className="text-gold text-3xl font-bold tracking-widest uppercase">
              Current Opportunity
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-2 mb-3 leading-tight">
              Class B Preferred Shares —{" "}
              <span className="text-gold">Now Open</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Cubez Capital is currently raising capital through our Class B Preferred Share offering.
              This is a limited opportunity for investors seeking stable, asset-backed returns.
            </p>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-gold/5 border border-gold/20 mb-6">
              <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-foreground">
                Limited availability — early investors receive priority allocation
              </p>
            </div>

            <Button
              variant="gold"
              size="lg"
              className="text-base px-8 py-6 w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Request Investor Package
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4"
          >
            {[
              { label: "Investment Type", value: "Class B Preferred Shares" },
              { label: "Return Structure", value: "Fixed Annual Return" },
              { label: "Dividends", value: "Cumulative, Priority" },
              { label: "Minimum Investment", value: "Contact for Details" },
              { label: "Share Redemption", value: "Redeemable" },
              { label: "Status", value: "Currently Accepting Investors", highlight: true },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 md:p-4 rounded-lg bg-secondary border border-border gap-4"
              >
                <span className="text-muted-foreground font-medium text-sm">{item.label}</span>
                <span className={`font-semibold text-sm text-right ${item.highlight ? "text-gold" : "text-foreground"}`}>
                  {item.value}
                </span>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-2">
              <Clock className="h-4 w-4 text-gold flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                Offering closes when fully subscribed
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;