import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const topics = [
  { title: "How to File a Divorce Case in India", category: "Family Law" },
  { title: "Property Registration Process", category: "Real Estate" },
  { title: "Consumer Rights Explained", category: "Consumer Law" },
  { title: "Bail Procedure in Criminal Cases", category: "Criminal Law" },
  { title: "Cyber Crime Laws in India", category: "Cyber Law" }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold-500"></div>
              <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm font-semibold">Legal Insights</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Latest Articles</h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors">
            View All Posts <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.slice(0, 3).map((topic, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 hover:border-gold-500/30 transition-all group overflow-hidden"
            >
              <div className="p-8">
                <span className="text-xs font-sans tracking-widest text-gold-600 uppercase mb-4 block">
                  {topic.category}
                </span>
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {topic.title}
                </h4>
                <div className="w-12 h-[2px] bg-black/10 group-hover:bg-gold-500 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
