import React from 'react';
import { motion } from 'motion/react';

const teamMembers = [
  {
    name: "Advocate Shubhanjali Shukla",
    role: "Founder & Lead Counsel",
    practice: "Criminal, Civil & Corporate Law",
    // We advise the user to upload their image as profile.jpg in the public folder.
    // For now we use an Unsplash professional photo.
    image: "/profile.jpeg"
  },
  {
    name: "Advocate Vikram Singh",
    role: "Senior Associate",
    practice: "Property & Real Estate Law",
    image: "/associate1.jpeg"
  },
  {
    name: "Advocate Manish Kumar",
    role: "Associate",
    practice: "Family & Civil Law",
    image: "/associate2.jpeg"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-gold-500"></div>
            <h2 className="text-gold-500 font-sans tracking-widest uppercase text-sm font-semibold">Our Dedicated Associates</h2>
            <div className="w-8 h-[1px] bg-gold-500"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Legal Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h4 className="font-serif font-bold text-xl text-gray-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-gold-600 font-sans text-sm font-semibold tracking-wide uppercase mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 font-sans text-sm">
                  {member.practice}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
