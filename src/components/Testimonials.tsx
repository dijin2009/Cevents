import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Cevents transformed our corporate gala into a cinematic experience. Their attention to detail and cultural sensitivity in Abu Dhabi is unmatched.",
    name: "Sarah Al-Mansoori",
    company: "Etihad Airways"
  },
  {
    text: "The desert wedding they planned for us was beyond our wildest dreams. It felt like a scene from a luxury film, yet deeply personal.",
    name: "James & Layla",
    company: "Private Client"
  },
  {
    text: "Technical perfection. Cevents managed our production with such ease that we could focus entirely on our performance.",
    name: "David Chen",
    company: "Global Media Group"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-12">
          <Quote size={48} className="text-desert-gold opacity-30" />
        </div>

        <div className="relative h-[300px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-desert-sand mb-8">
                "{testimonials[index].text}"
              </p>
              <div>
                <h4 className="text-lg font-bold tracking-widest uppercase text-white">
                  {testimonials[index].name}
                </h4>
                <p className="text-desert-gold/60 text-sm">
                  {testimonials[index].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-desert-gold" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
