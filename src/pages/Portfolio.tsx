import { SignatureEvents } from "../components/SignatureEvents";
import { motion } from "motion/react";
import { Globe2, Award, Star, Users2 } from "lucide-react";

export const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-luxury-black"
    >
      {/* Cinematic Portfolio Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Portfolio Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display mb-6"
          >
            Curated <span className="italic text-desert-gold">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-desert-sand/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            A legacy of high-impact events that have defined the landscape of luxury in Abu Dhabi and beyond.
          </motion.p>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="py-16 border-y border-white/5 bg-desert-dark/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <ImpactStat icon={Star} label="Signature Events" value="120+" />
            <ImpactStat icon={Award} label="Industry Awards" value="15" />
            <ImpactStat icon={Users2} label="VIP Guests Hosted" value="50k+" />
            <ImpactStat icon={Globe2} label="Global Partners" value="30+" />
          </div>
        </div>
      </section>

      {/* The Main Portfolio Showcase */}
      <div className="py-12">
        <SignatureEvents />
      </div>

      {/* Global Reach Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              A Presence <span className="italic text-desert-gold">Without Borders</span>
            </h2>
            <p className="text-lg font-light text-white/70 leading-relaxed">
              While our home is Abu Dhabi, our reach is truly global. From European summits to private island celebrations in the Maldives, Cevents brings the same level of uncompromising quality to every corner of the world.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest font-bold text-desert-gold">London</div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest font-bold text-desert-gold">Paris</div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest font-bold text-desert-gold">Riyadh</div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest font-bold text-desert-gold">Singapore</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-desert-gold/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
              className="relative rounded-3xl w-full h-auto object-cover opacity-60"
              alt="Global Reach"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ImpactStat = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="text-center space-y-2">
    <div className="flex justify-center text-desert-gold/40 mb-2">
      <Icon size={24} />
    </div>
    <div className="text-3xl md:text-4xl font-display text-desert-gold">{value}</div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{label}</div>
  </div>
);