'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen md:h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-grid scroll-mt-24">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse delay-700" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-4 md:mb-4 leading-tight">
            AVANZO <span className="text-gradient">MEDIA</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto mb-6 md:mb-8 font-light leading-relaxed">
            Soluções em <span className="text-white font-medium">Websites</span>, 
            <span className="text-white font-medium"> Anúncios Online</span> e 
            <span className="text-white font-medium"> Gateways de Pagamento</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-emerald-500 text-black font-bold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-all neon-glow group"
            >
              Entrar em contacto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Ver Serviços
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
