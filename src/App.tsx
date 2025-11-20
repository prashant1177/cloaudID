import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { HowItWorks } from './components/HowItWorks';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { EarthBackground } from './components/EarthBackground';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500 selection:text-white font-body">
      <Navbar />
      <main><EarthBackground/>  
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}