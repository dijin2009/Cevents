import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Building2, 
  Heart, 
  GlassWater, 
  Palmtree, 
  Mic2, 
  Zap,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";

const serviceData: Record<string, any> = {
  "corporate-events": {
    title: "Corporate Events",
    subtitle: "Strategic Excellence & Professional Grandeur",
    icon: Building2,
    image: "SGM.jpg?auto=format&fit=crop&q=80&w=2012",
    description: "We specialize in high-stakes corporate gatherings that align with your brand's strategic objectives. From annual summits to product launches, our team ensures every detail reflects your company's prestige and professionalism.",
    features: [
      "Strategic Event Design",
      "VIP Guest Management",
      "Technical Production & AV",
      "Branding & Identity Integration",
      "Post-Event Analytics"
    ],
    extendedDescription: "In the fast-paced business world of Abu Dhabi, your events need to stand out. We provide a seamless end-to-end service that covers everything from venue sourcing and logistics to content creation and on-site management. Our goal is to allow you to focus on your guests while we handle the complexities of the production."
  },
  "weddings": {
    title: "Weddings",
    subtitle: "Bespoke Celebrations of Love",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070",
    description: "Your love story is unique, and your wedding should be too. We craft bespoke celebrations that blend timeless romance with modern luxury, creating memories that last a lifetime.",
    features: [
      "Custom Theme Development",
      "Venue Selection & Transformation",
      "Catering & Menu Curation",
      "Floral & Decor Design",
      "Entertainment Coordination"
    ],
    extendedDescription: "Whether it's an intimate desert ceremony under the stars or a grand ballroom gala, we bring your vision to life with meticulous care. Our wedding planners are experts in cultural traditions and contemporary trends, ensuring a perfect balance of heritage and innovation."
  },
  "private-parties": {
    title: "Private Parties",
    subtitle: "Intimate & Extraordinary Celebrations",
    icon: GlassWater,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070",
    description: "From milestone birthdays to exclusive anniversaries, we design private celebrations that are as intimate as they are grand.",
    features: [
      "Exclusive Venue Access",
      "Personalized Guest Experiences",
      "Themed Decor & Lighting",
      "Private Chef & Mixology",
      "Live Entertainment"
    ],
    extendedDescription: "We believe that private parties should be a reflection of the host's personality. Our team works closely with you to understand your preferences and create an atmosphere that is both welcoming and awe-inspiring. No request is too small, and no detail is overlooked."
  },
  "cultural-events": {
    title: "Cultural Events",
    subtitle: "Honoring Heritage through Innovation",
    icon: Palmtree,
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2070",
    description: "We take pride in managing events that celebrate the rich cultural heritage of Abu Dhabi and the wider region, blending tradition with world-class production standards.",
    features: [
      "Heritage-Focused Design",
      "Traditional Performance Sourcing",
      "Protocol & VIP Management",
      "Cultural Exhibition Curation",
      "Community Engagement"
    ],
    extendedDescription: "Cultural events require a deep understanding of local customs and a vision for how to present them in a modern context. We have extensive experience working with government entities and cultural organizations to deliver events that are both respectful and spectacular."
  },
  "concerts-productions": {
    title: "Concerts & Productions",
    subtitle: "World-Class Entertainment & Technical Mastery",
    icon: Mic2,
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2070",
    description: "From stadium concerts to theatrical productions, we provide the technical expertise and creative vision to deliver world-class entertainment experiences.",
    features: [
      "Stage & Set Design",
      "Advanced Audio-Visual Tech",
      "Artist Liaison & Management",
      "Crowd Control & Safety",
      "Ticketing & Marketing Support"
    ],
    extendedDescription: "Our production team is composed of industry veterans who have managed some of the largest shows in the region. We handle the entire technical rider, from sound and light to pyrotechnics and special effects, ensuring a flawless performance every time."
  },
  "brand-activations": {
    title: "Brand Activations",
    subtitle: "Immersive Experiences that Connect",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2070",
    description: "We create immersive brand experiences that engage audiences and build lasting emotional connections between brands and their customers.",
    features: [
      "Experiential Concept Design",
      "Interactive Tech Integration",
      "Pop-up Structure Builds",
      "Social Media Integration",
      "Staffing & Brand Ambassadors"
    ],
    extendedDescription: "In a world of digital noise, physical activations offer a powerful way to cut through and make a real impact. We design activations that are not just visually stunning but also strategically aligned with your brand's marketing goals, driving engagement and conversion."
  }
};

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-luxury-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
          <Link to="/services" className="text-desert-gold hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-luxury-black min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            className="w-full h-full object-cover opacity-40"
            alt={service.title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-desert-gold uppercase tracking-[0.2em] text-xs font-bold mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display mb-6"
          >
            {service.title.split(' ')[0]} <span className="italic text-desert-gold">{service.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-desert-sand/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-desert-gold/10 flex items-center justify-center text-desert-gold">
              <Icon size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif">The <span className="italic text-desert-gold">Experience</span></h2>
            <p className="text-xl font-light text-white/70 leading-relaxed">
              {service.description}
            </p>
            <p className="text-lg font-light text-white/50 leading-relaxed">
              {service.extendedDescription}
            </p>
            <div className="pt-8">
              <Link to="/contact" className="px-10 py-4 bg-desert-gold text-luxury-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all inline-block">
                Inquire About This Service
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-10 rounded-3xl glass-card border border-white/5">
              <h3 className="text-2xl font-serif mb-8 text-desert-gold">Key Offerings</h3>
              <ul className="space-y-6">
                {service.features.map((feature: string, index: number) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 text-white/70"
                  >
                    <CheckCircle2 className="text-desert-gold shrink-0" size={20} />
                    <span className="text-lg font-light">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/5">
              <img 
                src={service.image} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Service Detail"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
