import React from 'react';
import { Gavel } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
             <Gavel className="text-black w-7 h-7" />
          </div>
          <h2 className="text-white font-serif font-bold text-2xl tracking-wider mb-8">RAJAS LEGAL ASSOCIATE</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="#home" className="text-gray-400 hover:text-gold-500 font-sans text-sm tracking-wide transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-gold-500 font-sans text-sm tracking-wide transition-colors">About</a>
            <a href="#services" className="text-gray-400 hover:text-gold-500 font-sans text-sm tracking-wide transition-colors">Practice Areas</a>
            <a href="#blog" className="text-gray-400 hover:text-gold-500 font-sans text-sm tracking-wide transition-colors">Blog</a>
            <a href="#contact" className="text-gray-400 hover:text-gold-500 font-sans text-sm tracking-wide transition-colors">Contact</a>
          </div>

          <div className="w-full border-t border-white/10 pt-8 mt-4">
            <p className="text-gray-500 font-sans text-xs max-w-3xl mx-auto leading-relaxed border border-gray-800 p-4 rounded-sm italic">
              <strong>Disclaimer:</strong> “This website is intended solely for informational purposes and does not constitute solicitation or advertisement as per Bar Council of India rules.”
            </p>
            <p className="text-gray-600 font-sans text-xs mt-6">
              © {new Date().getFullYear()} Rajas Legal Associate. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
