import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin by understanding your vision, objectives, and the unique story you want to tell."
  },
  {
    number: "02",
    title: "Concept Design",
    description: "Our creative team develops a bespoke concept that blends luxury with cultural heritage."
  },
  {
    number: "03",
    title: "Detailed Planning",
    description: "Meticulous logistics, vendor management, and technical planning to ensure perfection."
  },
  {
    number: "04",
    title: "Flawless Execution",
    description: "On-site management that handles every detail, allowing you to experience the magic."
  }
];

export const Process = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Our <span className="italic text-desert-gold">Process</span></h2>
          <p className="text-desert-sand/60 text-lg max-w-2xl mx-auto font-light">
            From the first spark of an idea to the final standing ovation, we follow a refined workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl glass-card group hover:border-desert-gold/30 transition-colors"
            >
              <span className="text-5xl font-serif text-desert-gold/20 group-hover:text-desert-gold/40 transition-colors mb-6 block">
                {step.number}
              </span>
              <h3 className="text-xl font-serif text-desert-sand mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
