import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Key } from 'lucide-react';

export const Security = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop" 
          alt="Astronaut in space" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 border border-blue-500/20">
            <ShieldCheck className="w-4 h-4" />
            SECURITY FIRST
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Encrypted Identity.<br />
            Zero SIM Cards.<br />
            <span className="text-blue-500">Total Control.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
            Your credentials are secured with modern scriptography and private-by-default design. 
            No carriers, no tracking, just pure connection.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Lock className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold mb-2">End-to-End Encryption</h4>
              <p className="text-sm text-gray-400">Your data is yours alone. Even we can't read it.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Key className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold mb-2">Decentralized Keys</h4>
              <p className="text-sm text-gray-400">You hold the keys to your identity.</p>
            </div>
          </div>
        </motion.div>

        {/* Visual representation of scanning/radar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-[400px] h-[400px]">
             <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-8 rounded-full border border-blue-500/20 animate-[spin_15s_linear_infinite_reverse]" />
             <div className="absolute inset-16 rounded-full border border-blue-500/10 animate-[spin_20s_linear_infinite]" />
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-[spin_4s_linear_infinite]" />
             
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center">
                 <div className="text-4xl font-mono font-bold text-white mb-2 tracking-widest">SECURE</div>
                 <div className="text-xs text-blue-400 tracking-[0.5em] uppercase">System Active</div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};