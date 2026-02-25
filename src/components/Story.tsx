import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Story = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xText = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xImage = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-luxury-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          style={{ x: xText }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Where <span className="italic text-desert-gold">Luxury</span> Meets <span className="italic text-desert-sand">Culture</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-light text-white/70 leading-relaxed">
            <p>
              At Cevents, we blend modern luxury aesthetics with the warm heritage of Abu Dhabi’s desert spirit — crafting experiences that feel both timeless and unforgettable.
            </p>
            <p>
              Our philosophy is rooted in the belief that every event is a story waiting to be told. From the vast dunes to the shimmering skyline, we draw inspiration from our surroundings to create magic.
            </p>
          </div>
          <div className="pt-4">
            <button className="text-desert-gold font-serif italic text-xl border-b border-desert-gold/30 pb-1 hover:border-desert-gold transition-colors">
              Our Journey
            </button>
          </div>
        </motion.div>

        <motion.div 
          style={{ x: xImage }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="IMG_1424.jpg?auto=format&fit=crop&q=80&w=2070"
            alt="Desert Luxury"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent" />
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-desert-gold/40 rounded-br-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
