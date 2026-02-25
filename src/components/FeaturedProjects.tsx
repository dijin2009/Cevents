import { motion } from "motion/react";
import { Link } from "react-router-dom";

const featured = [
  {
    title: "Royal Desert Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069"
  },
  {
    title: "The Oasis Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
  }
];

export const FeaturedProjects = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Featured <span className="italic text-desert-gold">Projects</span></h2>
            <p className="text-desert-sand/60 text-lg font-light">
              A glimpse into the extraordinary experiences we've crafted for our most discerning clients.
            </p>
          </div>
          <Link 
            to="/portfolio" 
            className="group flex items-center gap-3 text-desert-gold font-bold uppercase tracking-widest text-sm"
          >
            View All Portfolio 
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featured.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest text-desert-gold font-bold mb-2">{project.category}</p>
                <h3 className="text-2xl md:text-3xl font-serif text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
