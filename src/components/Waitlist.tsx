import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Bell } from 'lucide-react';

export const Waitlist = () => {
  const [form, setForm] = useState({ username: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.username) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ username: '', email: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-40 px-6 relative overflow-hidden bg-black">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-block"
        >
           <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 mb-6 animate-pulse">
             <Bell className="w-10 h-10 text-blue-400" />
           </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
        >
          Coming Soon
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12"
        >
          Track, Connect, and Secure — Anywhere, Anytime.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto space-y-4"
        >
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-black rounded-xl p-1 space-y-2">
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({...form, username: e.target.value})}
                placeholder="@yourname"
                disabled={status !== 'idle'}
                className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors placeholder-gray-600 font-mono"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="you@example.com"
                disabled={status !== 'idle'}
                className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors placeholder-gray-600"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="w-full bg-white text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            {status === 'idle' && 'Notify Me'}
            {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
            {status === 'success' && <><Check className="w-5 h-5" /> Added</>}
          </button>
          
          <p className="text-xs text-gray-600 mt-4">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.form>
      </div>
    </section>
  );
};