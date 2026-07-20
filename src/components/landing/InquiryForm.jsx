import { motion } from 'framer-motion';

export default function InquiryForm() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
      >
        Contact Us
      </motion.h2>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        href="mailto:info@colida.uk"
        className="font-mono text-xl md:text-2xl text-foreground hover:text-primary transition-colors"
      >
        info@colida.uk
      </motion.a>
    </section>
  );
}