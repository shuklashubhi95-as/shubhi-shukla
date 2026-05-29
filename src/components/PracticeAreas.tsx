import React from 'react';
import { motion } from 'motion/react';
import { 
  BadgeAlert, 
  Landmark, 
  Users, 
  Home, 
  Briefcase, 
  ShoppingBag, 
  ShieldAlert, 
  FileText 
} from 'lucide-react';

const services = [
  { icon: BadgeAlert, title: 'Criminal Law', desc: 'Robust defense and prosecution in criminal matters, ensuring fair trials.' },
  { icon: Landmark, title: 'Civil Litigation', desc: 'Expert handling of civil disputes, seeking swift and just resolutions.' },
  { icon: Users, title: 'Family & Divorce', desc: 'Compassionate handling of divorce, custody, and family disputes.' },
  { icon: Home, title: 'Property Disputes', desc: 'Resolving complex real estate and property ownership conflicts.' },
  { icon: Briefcase, title: 'Corporate Law', desc: 'Legal advisory for startups, businesses, and corporate compliance.' },
  { icon: ShoppingBag, title: 'Consumer Court', desc: 'Protecting consumer rights against unfair trade practices.' },
  { icon: ShieldAlert, title: 'Cyber Crime', desc: 'Navigating the complexities of cyber fraud and online harassment.' },
  { icon: FileText, title: 'Documentation', desc: 'Drafting foolproof agreements, deeds, and legal contracts.' },
];

export function PracticeAreas() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-gold-500"></div>
            <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm font-semibold">Areas of Expertise</h2>
            <div className="w-8 h-[1px] bg-gold-500"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Practice Areas</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-black group-hover:bg-gold-500 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
