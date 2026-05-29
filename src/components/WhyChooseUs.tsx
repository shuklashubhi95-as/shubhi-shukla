import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Experienced Legal Representation",
  "Client-Focused Approach",
  "Transparent Communication",
  "Confidential Legal Assistance",
  "Timely Case Updates"
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-black relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm font-semibold">Our Distinction</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Why Choose <br className="hidden md:block"/> Our Firm?
            </h3>
            <p className="text-gray-400 font-sans mb-8 leading-relaxed text-lg">
              We understand that legally challenging times require both aggressive representation and compassionate counsel. Our firm pledges to stand by you every step of the way.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-gold-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-200 font-sans tracking-wide">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-gold-500/30 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop" 
              alt="Scales of Justice" 
              className="relative z-10 w-full object-cover aspect-square grayscale border border-gray-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
