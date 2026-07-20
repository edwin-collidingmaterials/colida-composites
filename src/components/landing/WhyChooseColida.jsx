import { motion } from 'framer-motion';

const WHY_IMAGE = '/assets/why-choose-spotlight.svg';

const REASONS = [
  {
    heading: 'Better Dispersion',
    text: 'Our technology avoids industry-standard melt mixing, a process that is prone to poor filler dispersion.',
  },
  {
    heading: 'Superior Performance',
    text: 'Our composite formulations can achieve 7.5× higher electrical conductivity than commercially available composite materials.',
  },
  {
    heading: 'Industrial Solutions',
    text: 'Our materials can be formulated and shaped to integrate seamlessly into your existing manufacturing processes and supply chain.',
  },
];

export default function WhyChooseColida() {
  return (
    <section id="why" className="relative py-24 md:py-32 border-t border-border/20">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border/30 shadow-xl"
          >
            <img
              src={WHY_IMAGE}
              alt="Colida composite materials"
              className="w-full h-full object-cover scale-[1.5] origin-center"
            />
          </motion.div>

          {/* Right: Title + reasons */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-10"
            >
              Why Choose Colida
            </motion.h2>

            <div className="space-y-8">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="font-sans text-lg md:text-xl font-semibold text-primary mb-2">
                    {r.heading}
                  </h3>
                  <p className="font-sans text-foreground text-base md:text-lg leading-relaxed">
                    {r.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}