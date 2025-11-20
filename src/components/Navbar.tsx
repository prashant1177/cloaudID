import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <Cloud className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors duration-300" />
            <div className="absolute inset-0 bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight">Cloud ID</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#characteristics" className="hover:text-white transition-colors">Characteristics</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#waitlist" className="hover:text-white transition-colors">Access</a>
        </div>

        <button className="hidden md:block px-6 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          View Demo
        </button>
      </div>
    </nav>
  );
};