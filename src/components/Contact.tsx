import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm font-semibold">Get In Touch</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Legal Consultation
            </h3>
            <p className="text-gray-600 font-sans mb-10 text-lg">
              Reach out to discuss your legal matters. We guarantee absolute confidentiality and professional counsel.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <MapPin className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-gray-900 uppercase">Chamber Address</h4>
                  <p className="text-gray-600 font-sans mt-1">Chamber No. 24, District Court,<br />Lucknow, Uttar Pradesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <Phone className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-gray-900 uppercase">Phone</h4>
                  <p className="text-gray-600 font-sans mt-1">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <Mail className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-gray-900 uppercase">Email</h4>
                  <p className="text-gray-600 font-sans mt-1">contact@rajivsharmalaw.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <Clock className="text-gold-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-gray-900 uppercase">Office Hours</h4>
                  <p className="text-gray-600 font-sans mt-1">Mon–Sat: 10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-hidden relative group border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Chamber Location Map Thumbnail" 
                className="w-full h-48 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <a 
                href="https://maps.google.com/?q=District+Court+Lucknow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-white px-4 py-2 shadow-sm text-xs font-sans font-semibold text-black uppercase tracking-wider flex items-center gap-2 hover:bg-gold-500 hover:text-black transition-colors"
              >
                <MapPin className="w-3 h-3 text-gray-900" />
                View on Map
              </a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-gray-50 p-8 md:p-12 border border-gray-100"
          >
            <h4 className="font-serif font-bold text-2xl text-gray-900 mb-6">Request A Callback</h4>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-gold-500 transition-colors outline-none font-sans"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-gold-500 transition-colors outline-none font-sans"
                  placeholder="+91 xxxxx xxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">Legal Issue</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-gold-500 transition-colors outline-none font-sans resize-none"
                  placeholder="Briefly describe your case..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-black text-white py-4 font-sans font-medium uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
