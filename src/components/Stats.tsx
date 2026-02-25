import { motion } from "motion/react";

const stats = [
  { label: "Events Managed", value: "500+" },
  { label: "Awards Won", value: "24" },
  { label: "Years Experience", value: "15+" },
  { label: "Client Satisfaction", value: "99%" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-desert-dark/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-serif text-desert-gold mb-2">
                {stat.value}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};