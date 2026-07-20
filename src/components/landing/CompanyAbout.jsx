import { motion } from 'framer-motion';

export default function CompanyAbout() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-border/20">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground">
              Colida Composites
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-6"
          >
            <p className="font-sans text-foreground text-lg md:text-xl leading-relaxed">
              Colida is a technology company based in Kent, UK developing and commercialising advanced composite materials for industry.
            </p>
            <p className="font-sans text-foreground text-lg md:text-xl leading-relaxed">
              Our team combines scientific expertise with commercial experience to turn breakthrough materials into scalable solutions with real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}