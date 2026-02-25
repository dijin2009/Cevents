import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-luxury-black"
    >
      <div className="py-20 px-6 md:px-12 lg:px-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
        <p className="text-desert-sand/60 text-lg max-w-2xl mx-auto font-light">
          Ready to create something unforgettable? Let's start the conversation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif">Get in Touch</h2>
            <p className="text-white/60 font-light leading-relaxed">
              Whether you're planning a corporate gala, a desert wedding, or a cultural celebration, our team is here to bring your vision to life.
            </p>
          </div>

          <div className="space-y-6">
            <ContactItem 
              icon={Mail} 
              label="Email" 
              value="info@cevents.ae" 
            />
            <ContactItem 
              icon={Phone} 
              label="Phone" 
              value="+971 56 496 6575" 
            />
            <ContactItem 
              icon={MapPin} 
              label="Location" 
              value="Abu Dhabi, United Arab Emirates" 
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-desert-gold">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-desert-gold outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-desert-gold">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-desert-gold outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-desert-gold">Event Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-desert-gold outline-none transition-colors appearance-none">
                <option className="bg-luxury-black">Corporate Event</option>
                <option className="bg-luxury-black">Wedding</option>
                <option className="bg-luxury-black">Private Party</option>
                <option className="bg-luxury-black">Cultural Event</option>
                <option className="bg-luxury-black">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-desert-gold">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-desert-gold outline-none transition-colors"
                placeholder="Tell us about your event..."
              ></textarea>
            </div>

            <button className="w-full py-4 bg-desert-gold text-luxury-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-desert-sand transition-colors group">
              Submit Request
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

const ContactItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-desert-gold/10 flex items-center justify-center text-desert-gold flex-shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs uppercase tracking-widest font-bold text-desert-gold/60 mb-1">{label}</p>
      <p className="text-lg font-light">{value}</p>
    </div>
  </div>
);
