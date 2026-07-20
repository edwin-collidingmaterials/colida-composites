import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Zap, DollarSign, FlaskConical } from 'lucide-react';

const PROBLEMS = [
  {
    icon: FlaskConical,
    title: 'REACH-Regulated Solvents',
    desc: 'Graphite composites rely on restricted, high boiling point solvents that are costly and environmentally hazardous.',
  },
  {
    icon: DollarSign,
    title: 'High Energy Costs',
    desc: 'Current manufacturing processes are energy-intensive, driving up production costs at massive scale.',
  },
  {
    icon: Zap,
    title: 'Fuel Cell Inefficiency',
    desc: 'Fuel cell efficiency sits at only 40–60%, meaning significant clean energy is wasted in every cycle.',
  },
];

const SOLUTIONS = [
  { label: 'SOLVENT ELIMINATION', value: 'REACH-compliant' },
  { label: 'TARGET SCALE', value: 'Tonne-scale' },
  { label: 'COMPOSITE COST', value: 'Competitive prices' },
  { label: 'PERFORMANCE', value: 'Exceptional conductivity' },
];

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative py-24 md:py-32 border-t border-border/20">
      <div className="px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-16 mb-20">
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground"
            >
              The Opportunity
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 font-sans text-foreground text-lg md:text-xl leading-relaxed"
          >
            The world needs higher-performance, affordable composite materials to unlock the next generation of energy and electronics systems.
          </motion.p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/20 mb-24">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 group"
            >
              <div className="w-10 h-10 border border-border/30 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-colors">
                <p.icon className="w-4 h-4 text-muted-foreground/85 group-hover:text-primary/60 transition-colors" />
              </div>
              <h3 className="font-mono text-sm font-bold text-foreground/85 tracking-wide mb-3">
                {p.title}
              </h3>
              <p className="text-foreground/85 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div id="solution" className="lg:w-1/2" style={{ scrollMarginTop: '80px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-8 text-foreground"
            >
              A graphite composite solution that eliminates restricted solvents
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-foreground text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Our process removes REACH-regulated solvents entirely  — delivering higher conductivity composites and reduced costs compared to existing technologies.
            </motion.p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-px bg-border/20">
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/85 block mb-2">
                  {s.label}
                </span>
                <span className="font-mono text-lg font-bold text-primary">{s.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}