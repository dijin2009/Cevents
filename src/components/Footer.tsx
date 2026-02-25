import { motion } from "motion/react";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-luxury-black pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif text-desert-gold">Cevents</Link>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              Coliseum Events — Crafting high-end experiences in Abu Dhabi. We blend modern luxury with desert heritage.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Twitter} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm font-light">
              <li><Link to="/about" className="hover:text-desert-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-desert-gold transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-desert-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-desert-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4 text-white/50 text-sm font-light">
              <li><Link to="/services" className="hover:text-desert-gold transition-colors">Corporate Events</Link></li>
              <li><Link to="/services" className="hover:text-desert-gold transition-colors">Weddings</Link></li>
              <li><Link to="/services" className="hover:text-desert-gold transition-colors">Cultural Events</Link></li>
              <li><Link to="/services" className="hover:text-desert-gold transition-colors">Concerts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-white/50 text-sm font-light">
              <li>Abu Dhabi, UAE</li>
              <li>info@cevents.ae</li>
              <li>+971 56 496 6575</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>© 2026 Cevents. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-desert-gold hover:text-desert-gold transition-all">
    <Icon size={18} />
  </a>
);
