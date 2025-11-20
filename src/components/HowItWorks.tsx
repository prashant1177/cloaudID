import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Select your unique @username',
    desc: 'Get your identity — simple, portable, universal.'
  },
  {
    num: '02',
    title: 'Connect with users around the world',
    desc: 'Find anyone from cloud ID — numbers not required.'
  },
  {
    num: '03',
    title: 'Access even in offline (BLE mesh)',
    desc: 'Peer‑to‑peer links keep connected even when the network fails.'
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16"
            >
              How it works
            </motion.h2>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group flex gap-8"
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity font-display">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="People connecting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white font-medium text-lg">
                  "People happy connecting on their phones and video calls. Community connecting across devices."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};