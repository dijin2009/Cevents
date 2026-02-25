import React, { ElementType } from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  Heart, 
  GlassWater, 
  Palmtree, 
  Mic2, 
  Zap 
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: ElementType;
  image: string;
}

const services: Service[] = [
  {
    title: "Corporate Events",
    description: "Elevate your brand with sophisticated corporate gatherings that leave a lasting impression.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2012"
  },
  {
    title: "Weddings",
    description: "Bespoke desert weddings and luxury ballroom celebrations tailored to your unique love story.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Private Parties",
    description: "Exclusive celebrations designed with intimacy and grandeur in mind.",
    icon: GlassWater,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Cultural Events",
    description: "Honoring Abu Dhabi's rich heritage through meticulously curated cultural experiences.",
    icon: Palmtree,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Concerts & Productions",
    description: "Full-scale technical management and production for world-class entertainment.",
    icon: Mic2,
    image: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Brand Activations",
    description: "Immersive experiences that connect your brand with your audience in meaningful ways.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2070"
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Our Services</h2>
          <p className="text-desert-sand/60 text-lg max-w-2xl font-light">
            From intimate gatherings to large-scale productions, we provide end-to-end event management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ service, index }: { service: Service; index: number; key?: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-[450px] rounded-2xl overflow-hidden glass-card cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-end">
        <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-desert-gold/20 backdrop-blur-md border border-desert-gold/30 text-desert-gold group-hover:bg-desert-gold group-hover:text-luxury-black transition-all duration-500">
          <service.icon size={24} />
        </div>
        
        <h3 className="text-2xl font-serif mb-2 group-hover:text-desert-gold transition-colors">
          {service.title}
        </h3>
        
        <div className="overflow-hidden h-0 group-hover:h-24 transition-all duration-500 ease-in-out">
          <p className="text-white/70 font-light text-sm leading-relaxed">
            {service.description}
          </p>
          <button className="mt-4 text-xs uppercase tracking-widest font-bold text-desert-gold flex items-center gap-2">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Gold Edge Highlight */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-desert-gold/30 rounded-2xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};
