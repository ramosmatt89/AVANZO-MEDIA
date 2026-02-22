'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
              Transformamos o <span className="text-gradient">Digital</span> com Inteligência e Estratégia
            </h2>
            <p className="text-lg text-white/60 mb-6 md:mb-8 leading-relaxed">
              A Avanzo Media é liderada por <span className="text-white font-medium">Mateus Ramos</span>, especialista em Inteligência Artificial e a mente estratégica por trás de cada projeto que entregamos.
            </p>
            <p className="text-lg text-white/60 mb-8 md:mb-12 leading-relaxed">
              Unimos o poder da IA com design de vanguarda para criar ecossistemas digitais que não apenas atraem, mas convertem. De Lisboa para o mundo, Mateus garante que cada detalhe seja otimizado para a máxima performance do seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Localização</p>
                  <p className="text-lg font-medium">Lisboa, Portugal</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Telemóvel</p>
                  <p className="text-lg font-medium">910 149 603</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold">E-mail</p>
                  <p className="text-lg font-medium">avanzomedia@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4 relative z-10 bg-white/5">
              <img 
                src="https://www.dropbox.com/scl/fi/vuuorxmhoehbhrb8zejsx/Mateus-Ramos.jpg?rlkey=mbf8llo87gh2hpe621zv19y2e&st=37rcqa4i&raw=1" 
                alt="Mateus Ramos - Fundador Avanzo Media" 
                className="w-full h-full object-cover rounded-2xl"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
