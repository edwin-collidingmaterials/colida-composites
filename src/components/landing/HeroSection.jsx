import { motion } from 'framer-motion';

const HERO_VIDEO = 'https://media.base44.com/videos/public/6a55f22614a1269584326b84/81c40a9d2_Untitleddesign.mp4';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 py-24">
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 lg:gap-12 items-center lg:pl-4">
        {/* Left: Text */}
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-foreground"
          >
            Unlocking the Industrial Potential <span className="font-light text-muted-foreground">of Composite Materials</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 h-0.5 w-24 bg-primary origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 font-sans text-foreground text-lg md:text-xl leading-relaxed"
          >
            Industrial-scale Pickering emulsion composite and shaping technology for better performing energy and electronics components.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 italic text-foreground text-base md:text-lg"
          >
            Higher-performance. Industrially scalable.
          </motion.p>
        </div>

        {/* Right: Video with rounded corners */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full aspect-video overflow-hidden rounded-2xl border border-border/30 shadow-xl"
        >
          <video
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}