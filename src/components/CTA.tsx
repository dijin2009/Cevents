import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070"
          alt="Desert Sunset"
          className="w-full h-full object-cover scale-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-serif mb-8 leading-tight"
        >
          Let’s Create Something <span className="italic text-desert-gold">Unforgettable</span> Together.
        </motion.h2>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(197, 160, 89, 0.4)" }}
          className="px-12 py-5 bg-desert-gold text-luxury-black font-bold rounded-full text-lg transition-all"
        >
          Book a Consultation
        </motion.button>
      </div>
    </section>
  );
};
