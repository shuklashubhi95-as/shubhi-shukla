import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm md:text-base font-semibold mb-4">
            Founded by Advocate Shubhanjali Shukla
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-6 leading-tight">
            Rajas Legal Associate
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-serif italic mb-12">
            “Providing trusted legal solutions with professionalism, integrity, and dedication.”
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300 font-sans mb-12">
            <div className="flex items-center gap-2">
              <MapPin className="text-gold-500 w-5 h-5" />
              <span>Lucknow, Uttar Pradesh</span>
            </div>
            <div className="hidden sm:block text-gold-500/50">•</div>
            <div className="flex items-center gap-2">
              <Phone className="text-gold-500 w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden sm:block text-gold-500/50">•</div>
            <div className="flex items-center gap-2">
              <Mail className="text-gold-500 w-5 h-5" />
              <span>rajivsharma.law@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-black bg-gold-500 hover:bg-gold-400 transition-colors duration-300"
            >
              Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-gold-500 text-base font-medium text-gold-500 hover:bg-gold-500/10 transition-colors duration-300"
            >
              Practice Areas
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
