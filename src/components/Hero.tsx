import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown, Play } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover scale-110"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load or isn't found */}
          <img
            src="/hero-poster.jpg"
            alt="Luxury Event"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-luxury-black" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-8xl font-display mb-6 leading-tight">
          {"Crafting Unforgettable Events in the ".split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.02, 
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 8
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
          <br className="md:hidden" />
          {"Heart of Abu Dhabi".split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: (38 + i) * 0.02, 
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 8
                }}
                className="inline-block italic text-desert-gold"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl font-light text-desert-sand/80 mb-10 max-w-2xl mx-auto tracking-wide"
        >
          Experience the Magic of Professional Event Management.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-desert-gold text-luxury-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Start Your Event</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="group flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-desert-gold group-hover:text-luxury-black transition-colors">
              <Play size={16} fill="currentColor" />
            </div>
            <span className="font-medium">Watch Showreel</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-desert-gold/50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-white mx-auto" />
        <span className="text-[12px] uppercase tracking-widest mt-2 block">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};