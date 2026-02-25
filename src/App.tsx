import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-luxury-black/90 backdrop-blur-md py-4" : "bg-transparent py-8"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-desert-gold tracking-tighter">
            Cevents
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors ${
                  location.pathname === link.path ? "text-desert-gold" : "text-white/70 hover:text-desert-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="px-6 py-2 border border-desert-gold text-desert-gold text-xs uppercase tracking-widest font-bold rounded-full hover:bg-desert-gold hover:text-luxury-black transition-all">
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-luxury-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <Link to="/" className="text-3xl font-serif text-desert-sand hover:text-desert-gold transition-colors">Home</Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-3xl font-serif text-desert-sand hover:text-desert-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <div className="relative bg-luxury-black">
        <ScrollToTop />
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-desert-gold z-[100] origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
