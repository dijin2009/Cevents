import { Hero } from "../components/Hero";
import { Story } from "../components/Story";
import { Stats } from "../components/Stats";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Process } from "../components/Process";
import { WhyChoose } from "../components/WhyChoose";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Story />
      <Stats />
      <FeaturedProjects />
      <Process />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};
