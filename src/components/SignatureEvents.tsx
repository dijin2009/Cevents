import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const events = [
  {
    title: "Luxury Weddings in the Desert",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "High-End Corporate Experiences",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069"
  },
  {
    title: "VIP Concert & Production Management",
    category: "Production",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Cultural Celebrations",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070"
  }
];

export const SignatureEvents = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-luxury-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-20">
          <h2 className="text-4xl md:text-6xl font-serif">Signature <span className="italic text-desert-gold">Showcase</span></h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 lg:px-24">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] h-[60vh] rounded-2xl overflow-hidden group"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs uppercase tracking-[0.3em] text-desert-gold font-bold mb-2 block">
                  {event.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
