import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bluetooth, Wifi, MessageCircle, MapPin, HardDrive, Gem, Smartphone, Zap } from 'lucide-react';
import world from "./world.webp"

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const globeScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const characteristics = [
    {
      icon: Bluetooth,
      title: "P2P BLE/IoT connectivity",
      desc: "Device‑to‑device link via Bluetooth mesh — reliable connection even offline.",
      color: "text-blue-400"
    },
    {
      icon: MessageCircle,
      title: "Chat, voice and video calls",
      desc: "Real‑time messaging and calling with your universal @username.",
      color: "text-purple-400"
    },
    {
      icon: MapPin,
      title: "GPS tracking and SOS alerts",
      desc: "Share live location and send instantaneous alerts if needed.",
      color: "text-green-400"
    },
    {
      icon: HardDrive,
      title: "Cloud Storage",
      desc: "Encrypted, identity‑first storage (100GB) that is connected to your cloud ID.",
      color: "text-yellow-400"
    },
    {
      icon: Gem,
      title: "Cloud NFT",
      desc: "Cloud NFT technology showcase with charge, share, and care features.",
      color: "text-pink-400"
    }
  ];

  const technologies = [
    { icon: Bluetooth, label: 'Bluetooth' },
    { icon: Wifi, label: 'WiFi' },
    { icon: MessageCircle, label: 'Chat' },
    { icon: HardDrive, label: 'Storage' },
    { icon: MapPin, label: 'GPS' },
    { icon: Zap, label: 'Alert' },
  ];

  return (
    <section ref={containerRef} id="characteristics" className="relative ">
      
      {/* Sticky Background Container with Earth Image */}
     

      <div className="relative z-10  pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-24 text-center"
          >
            Characteristics
          </motion.h2>

          {/* Features List - Staggered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 max-w-6xl mx-auto">
            {characteristics.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex gap-6 ${i % 2 !== 0 ? 'md:translate-y-24' : ''} backdrop-blur-md bg-black/50 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors duration-500`}
              >
                <div className={`w-14 h-14 shrink-0 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Infinite Scroll */}
          <div className="mt-40 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            <div className="flex gap-12 animate-infinite-scroll w-max">
              {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-500 font-medium text-lg px-8 py-4 border border-white/10 rounded-full bg-white/5">
                  <tech.icon className="w-5 h-5" />
                  {tech.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};