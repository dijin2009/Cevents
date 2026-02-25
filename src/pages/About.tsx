import { motion } from "motion/react";
import { Target, Award, Users, Globe, ShieldCheck, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-luxury-black"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="hero-poster.jpg?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Event Planning"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-desert-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block"
          >
            The Architects of Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-display mb-8"
          >
            Beyond <span className="italic text-desert-gold">Management</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-desert-sand/70 text-lg md:text-xl font-light leading-relaxed"
          >
            Cevents is a premier event management firm based in Abu Dhabi, dedicated to transforming bold visions into legendary realities since 2008.
          </motion.p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ValueCard 
              icon={Target}
              title="Our Mission"
              description="To set the global benchmark for event excellence while honoring the rich cultural tapestry of the United Arab Emirates."
            />
            <ValueCard 
              icon={Sparkles}
              title="Our Vision"
              description="To be the most trusted partner for high-stakes events, known for our precision, creativity, and emotional resonance."
            />
            <ValueCard 
              icon={ShieldCheck}
              title="Our Promise"
              description="Uncompromising quality, absolute discretion, and a commitment to perfection in every single detail."
            />
          </div>
        </div>
      </section>

      {/* The Journey (Timeline) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-desert-dark/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-20 text-center">Our <span className="italic text-desert-gold">Journey</span></h2>
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-desert-gold/30 before:to-transparent">
            <TimelineItem 
              year="2011"
              title="The Foundation"
              description="Cevents was established in Abu Dhabi with a small team of passionate visionaries."
              align="left"
            />
            <TimelineItem 
              year="2015"
              title="Global Expansion"
              description="Successfully managed our first international summit, hosting delegates from over 40 countries."
              align="right"
            />
            <TimelineItem 
              year="2018"
              title="Cultural Landmark"
              description="Appointed as the official management partner for the UAE National Day celebrations."
              align="left"
            />
            <TimelineItem 
              year="2024"
              title="Digital Innovation"
              description="Launched our proprietary AI-driven event logistics platform for real-time coordination."
              align="right"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">The <span className="italic text-desert-gold">Leadership</span></h2>
            <p className="text-white/50 font-light max-w-2xl mx-auto">
              Meet the minds behind Abu Dhabi's most prestigious events. A collective of experts driven by passion and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Ahmed Al Mansouri"
              role="Founder & CEO"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
            />
            <TeamMember 
              name="Sarah Jenkins"
              role="Creative Director"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
            />
            <TeamMember 
              name="Khalid Ibrahim"
              role="Operations Lead"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
            />
            <TeamMember 
              name="Elena Rossi"
              role="Head of Strategy"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Global Soul Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-desert-gold/5">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Globe className="w-16 h-16 text-desert-gold mx-auto mb-4" />
          <h2 className="text-4xl md:text-6xl font-serif">Global Standards, <span className="italic text-desert-gold">Local Soul</span></h2>
          <p className="text-xl font-light text-white/70 leading-relaxed">
            While we operate at the highest international standards of event production, our heart remains deeply rooted in the traditions of Arabian hospitality. This unique blend allows us to create experiences that are both world-class and authentically local.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 rounded-3xl glass-card border border-white/5 hover:border-desert-gold/30 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-desert-gold/10 flex items-center justify-center text-desert-gold mb-8">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-white/50 font-light leading-relaxed">{description}</p>
  </motion.div>
);

const TimelineItem = ({ year, title, description, align }: { year: string, title: string, description: string, align: 'left' | 'right' }) => (
  <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
    {/* Dot */}
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-desert-gold bg-luxury-black text-desert-gold font-bold text-xs z-10 absolute left-0 md:left-1/2 md:-translate-x-1/2">
      {year.slice(2)}
    </div>
    {/* Content */}
    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-6 rounded-2xl glass-card border border-white/5 group-hover:border-desert-gold/20 transition-all`}>
      <span className="text-desert-gold font-bold text-sm mb-2 block">{year}</span>
      <h4 className="text-xl font-serif mb-2">{title}</h4>
      <p className="text-sm text-white/50 font-light">{description}</p>
    </div>
  </div>
);

const TeamMember = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative rounded-3xl overflow-hidden aspect-[3/4]"
  >
    <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    <div className="absolute bottom-6 left-6">
      <h4 className="text-xl font-serif text-white mb-1">{name}</h4>
      <p className="text-xs uppercase tracking-widest text-desert-gold font-bold">{role}</p>
    </div>
  </motion.div>
);
