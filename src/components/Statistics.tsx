import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: "Cases Handled", value: "500+" },
  { label: "Years Experience", value: "12+" },
  { label: "Satisfied Clients", value: "300+" },
  { label: "Consultation Support", value: "24/7" },
];

export function Statistics() {
  return (
    <section className="py-20 bg-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-black/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-center items-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-black/80 font-sans text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
