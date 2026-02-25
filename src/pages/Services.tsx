import { ServicesGrid } from "../components/ServicesGrid";
import { motion } from "motion/react";
import { 
  Layers, 
  Cpu, 
  Music, 
  Camera, 
  Lightbulb, 
  ShieldCheck,
  Sparkles,
  Infinity as InfinityIcon
} from "lucide-react";

export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-luxury-black"
    >
      {/* Cinematic Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="DSC04971.jpg?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-20"
            alt="Event Production"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display mb-6"
          >
            Artistry in <span className="italic text-desert-gold">Execution</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-desert-sand/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            We don't just plan events; we architect experiences that resonate, inspire, and endure.
          </motion.p>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-full object-cover"
              alt="Atmosphere"
            />
            <div className="absolute inset-0 bg-desert-gold/10 mix-blend-overlay" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              The <span className="italic text-desert-gold">Cevents</span> Standard
            </h2>
            <p className="text-lg font-light text-white/70 leading-relaxed italic">
              "Perfection is not a destination, but a continuous journey of refinement."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PhilosophyItem 
                icon={Sparkles}
                title="Creative Vision"
                description="Bespoke concepts that push boundaries and redefine expectations."
              />
              <PhilosophyItem 
                icon={ShieldCheck}
                title="Precision Planning"
                description="Meticulous attention to detail from the first sketch to the final bow."
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Main Grid */}
      <ServicesGrid />

      {/* Technical Excellence Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-desert-dark/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Technical <span className="italic text-desert-gold">Excellence</span></h2>
            <p className="text-white/50 font-light max-w-2xl mx-auto">
              Behind every stunning visual is a world-class technical infrastructure. We bring the latest in event technology to the heart of Abu Dhabi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechCard 
              icon={Lightbulb}
              title="Lighting Design"
              description="Atmospheric lighting that transforms spaces and sets the perfect mood."
            />
            <TechCard 
              icon={Music}
              title="Audio Engineering"
              description="Crystal-clear soundscapes tailored to the unique acoustics of any venue."
            />
            <TechCard 
              icon={Layers}
              title="Stage Design"
              description="Architectural stage builds that serve as the centerpiece of your event."
            />
            <TechCard 
              icon={Cpu}
              title="Visual Tech"
              description="High-resolution LED walls, projection mapping, and interactive displays."
            />
          </div>
        </div>
      </section>

      {/* Bespoke Experiences Callout */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-10 grayscale"
            alt="Bespoke"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <InfinityIcon className="w-16 h-16 text-desert-gold mx-auto mb-4" />
          <h2 className="text-4xl md:text-7xl font-display">Infinite <span className="italic text-desert-gold">Possibilities</span></h2>
          <p className="text-xl font-light text-white/70 leading-relaxed">
            Have a vision that doesn't fit into a category? We specialize in the "impossible." Our team thrives on unique challenges and one-of-a-kind requests.
          </p>
          <button className="px-10 py-4 border border-desert-gold text-desert-gold font-bold uppercase tracking-widest hover:bg-desert-gold hover:text-luxury-black transition-all rounded-full">
            Discuss Your Custom Vision
          </button>
        </div>
      </section>
    </motion.div>
  );
};

const PhilosophyItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="space-y-4">
    <div className="w-12 h-12 rounded-xl bg-desert-gold/10 flex items-center justify-center text-desert-gold">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-serif">{title}</h3>
    <p className="text-sm text-white/50 font-light leading-relaxed">{description}</p>
  </div>
);

const TechCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-2xl glass-card border border-white/5 hover:border-desert-gold/20 transition-all group"
  >
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-desert-gold group-hover:bg-desert-gold/10 transition-colors mb-6">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-serif mb-3">{title}</h3>
    <p className="text-xs text-white/40 font-light leading-relaxed">{description}</p>
  </motion.div>
);