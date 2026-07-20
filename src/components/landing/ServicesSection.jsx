import { motion } from 'framer-motion';

const SERVICES = [
  { number: '01', title: 'Custom Material Design', desc: 'We take your material specification and use our technology to improve the performance of your composite beyond your current solution.' },
  { number: '02', title: 'Composite Powder Products', desc: 'We provide high conductivity polymer composite powders for compression moulding and calendering converters.' },
  { number: '03', title: 'Composite Components', desc: 'We manufacture high-performance sheet and moulded components for energy and electronics applications.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-border/20">
      <div className="px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground"
          >
            Our Services and Products
          </motion.h2>
        </div>

        {/* Three boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/20">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors"
            >
              <span className="font-mono text-5xl md:text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors block mb-6">
                {s.number}
              </span>
              <h3 className="font-mono text-lg font-bold text-foreground/85 tracking-wide mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-foreground text-base md:text-lg leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}