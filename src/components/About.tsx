import React from 'react';
import { Scale } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img 
                src="/profile.jpeg" 
                alt="Advocate Shubhanjali Shukla" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gold-500 mix-blend-overlay opacity-20"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-black text-white p-8 border border-gold-500/30 hidden md:block w-64 shadow-2xl">
              <h3 className="text-3xl font-serif font-bold text-gold-500 mb-2">12+</h3>
              <p className="font-sans text-sm text-gray-300 uppercase tracking-widest">Years of legal excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm font-semibold">About The Firm</h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Relentless Advocacy. <br />
              <span className="italic font-light">Trusted Counsel.</span>
            </h3>

            <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-lg">
              <p>
                Advocate Shubhanjali Shukla is a highly respected practicing lawyer with over 12 years of comprehensive experience handling complex litigation. Based in Lucknow, Rajas Legal Associate provides strategic representation across district courts and the esteemed High Court.
              </p>
              <p>
                Specializing in civil, criminal, family, property, and corporate law matters, we bring a wealth of expertise to every case. The firm is deeply committed to delivering targeted legal representation and personalized legal advice to individuals, families, and businesses alike.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <Scale className="text-gold-500 w-8 h-8" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl text-gray-900">Integrity First</h4>
                <p className="text-gray-500 text-sm mt-1">Honest assessment, powerful representation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
