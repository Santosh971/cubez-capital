import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialSection = () => (
  // <section className="py-8 md:py-8 bg-background">
  //   <div className="section-container max-w-4xl">
  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       viewport={{ once: true }}
  //       className="text-center"
  //     >
  //       <Quote className="h-12 w-12 text-gold/30 mx-auto mb-6" />
  //       <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
  //         "Cubez Capital has provided me with exactly what I was looking for — stable, predictable returns
  //         backed by real assets. Their team is professional, transparent, and truly invested in their
  //         investors' success. I finally feel confident about my financial future."
  //       </blockquote>
  //       <div>
  //         <p className="font-bold text-foreground">— Private Investor</p>
  //         <p className="text-muted-foreground text-sm">Class B Preferred Shareholder</p>
  //       </div>
  //     </motion.div>
  //   </div>
  // </section>

  <section className="py-8 md:py-8 bg-background">
    <div className="section-container max-w-4xl px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Quote className="h-8 w-8 md:h-12 md:w-12 text-gold/30 mx-auto mb-4 md:mb-6" />
        <blockquote className="text-base md:text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-6 md:mb-8">
          "Cubez Capital has provided me with exactly what I was looking for — stable, predictable returns
          backed by real assets. Their team is professional, transparent, and truly invested in their
          investors' success. I finally feel confident about my financial future."
        </blockquote>
        <div>
          <p className="font-bold text-foreground text-sm md:text-base">— Private Investor</p>
          <p className="text-muted-foreground text-xs md:text-sm">Class B Preferred Shareholder</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
