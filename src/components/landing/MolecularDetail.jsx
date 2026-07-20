import { motion } from 'framer-motion';
import { FileText, Droplets, Ban, Bolt, Layers3 } from 'lucide-react';

const BENEFITS = [
  { icon: Droplets, label: '1.7–12× lower organic solvent use' },
  { icon: Ban, label: 'Elimination of REACH-regulated solvents' },
  { icon: Bolt, label: 'Reduced manufacturing energy consumption' },
  { icon: Layers3, label: 'Enhanced graphite dispersion and microstructural uniformity' },
];

export default function MolecularDetail() {
  return (
    <section id="molecular" className="relative py-24 md:py-32">
      {/* Top border trace */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="flex flex-col lg:flex-row">
        {/* Left: Visual */}
        <div className="lg:w-1/2 relative">
          <div className="lg:sticky lg:top-24 px-6 md:px-12 py-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
            >
              CoBlend
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-foreground text-lg md:text-xl leading-relaxed max-w-md mb-6"
            >
              Scalable Pickering emulsion technology for blending graphite and fillers with binders.
            </motion.p>
          </div>
        </div>

        {/* Right: Benefits */}
        <div className="lg:w-1/2 px-6 md:px-12 lg:border-l border-border/20">
          <div className="py-12 space-y-12">
            <div>
              <div className="space-y-0">
                {BENEFITS.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 py-5 border-b border-border/20 group"
                  >
                    <b.icon className="w-4 h-4 text-primary/60 shrink-0" />
                    <span className="font-mono text-base text-foreground/85 tracking-wide">{b.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-foreground text-lg md:text-xl leading-relaxed max-w-md"
            >
              Colida composites demonstrate up to <span className="text-primary font-medium">7.5× higher electrical conductivity</span> than commercially available composite materials.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                REQUEST MORE INFO
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}