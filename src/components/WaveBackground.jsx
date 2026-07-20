import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LINES = [
  { path: "M50,0 Q30,250 70,500 T50,1000", w: "w-20", sw: 0.5, dash: "4 4", mobile: true },
  { path: "M50,0 Q80,200 20,400 T50,800 T50,1000", w: "w-40", sw: 0.75, dash: null, mobile: false },
  { path: "M50,0 Q20,150 80,450 T50,750 T50,1000", w: "w-40", sw: 0.75, dash: null, mobile: false },
  { path: "M50,0 Q70,250 30,500 T50,1000", w: "w-20", sw: 0.5, dash: "4 4", mobile: true },
];

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function WaveBackground({
  lineColor = "#707080",
  trackColor = "#E5E5EB",
  className = "fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-24",
  scrollReactive = true,
}) {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.45, 0.3, 0.35, 0.2]);
  const style = scrollReactive ? { opacity, scaleY } : {};

  return (
    <motion.div style={style} className={className}>
      {LINES.map((line, i) => (
        <div
          key={i}
          className={`w-[1px] h-full relative ${line.mobile ? "" : "hidden md:block"}`}
          style={{ background: `linear-gradient(to bottom, ${trackColor}, ${hexToRgba(lineColor, 0.3)}, ${trackColor})` }}
        >
          <motion.svg
            className={`absolute top-0 left-1/2 -translate-x-1/2 h-full ${line.w} overflow-visible`}
            preserveAspectRatio="none"
            viewBox="0 0 100 1000"
            animate={{ x: [0, 6, -4, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d={line.path} fill="none" stroke={lineColor} strokeWidth={line.sw} strokeDasharray={line.dash || undefined} />
          </motion.svg>
        </div>
      ))}
    </motion.div>
  );
}