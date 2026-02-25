import { motion } from "motion/react";
import { ShieldCheck, MapPin, Palette, Settings } from "lucide-react";

const features = [
  {
    title: "Holistic Event Production",
    description: "From concept to cleanup, we handle every detail with precision and care.",
    icon: Settings
  },
  {
    title: "Cultural Expertise",
    description: "Deep understanding of Abu Dhabi's traditions blended with modern luxury.",
    icon: MapPin
  },
  {
    title: "Award-Winning Designers",
    description: "Our creative team crafts visual stories that resonate and inspire.",
    icon: Palette
  },
  {
    title: "Full Technical Support",
    description: "State-of-the-art logistics and technical infrastructure for any scale.",
    icon: ShieldCheck
  }
];

export const WhyChoose = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-desert-gold/10 text-desert-gold mb-6">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-desert-sand">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
