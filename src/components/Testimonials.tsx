import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Very professional and supportive advocate. Helped me win my property dispute case.",
    author: "Amit Verma",
    rating: 5
  },
  {
    text: "Excellent legal advice and quick response. Highly knowledgeable in civil matters.",
    author: "Neha Singh",
    rating: 5
  },
  {
    text: "Highly recommended for family law matters. Handled my case with great sensitivity.",
    author: "Rahul Mishra",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-gold-500"></div>
            <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm font-semibold">Client Stories</h2>
            <div className="w-8 h-[1px] bg-gold-500"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Testimonials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 border border-gray-100 flex flex-col items-center text-center shadow-sm relative pt-12"
            >
              <div className="absolute -top-6 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Quote className="text-gold-500 w-5 h-5 fill-current" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 font-sans italic mb-8 grow leading-relaxed">
                "{test.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
