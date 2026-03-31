'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { QrCode, Smartphone, Star, ArrowRight, AlertCircle, LayoutDashboard, ShieldCheck } from 'lucide-react';

export default function StarShield() {
  const steps = [
    {
      icon: QrCode,
      title: 'Acesso',
      description: 'O cliente lê o QR Code ou aproxima o telemóvel do NFC no estabelecimento.',
      color: 'text-emerald-400'
    },
    {
      icon: AlertCircle,
      title: 'Filtragem Crítica',
      description: 'Se o cliente selecionar 1 a 3 estrelas, o sistema abre um formulário interno. A reclamação vai apenas para o dono.',
      color: 'text-orange-400'
    },
    {
      icon: Star,
      title: 'Impulso de Reputação',
      description: 'Se o cliente selecionar 4 ou 5 estrelas, é redirecionado instantaneamente para o Google GMB.',
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="starshield" className="py-24 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Tecnologia StarShield</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            StarShield: O Filtro Inteligente <br />
            <span className="text-gradient">Contra Avaliações Negativas</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-3xl mx-auto text-lg"
          >
            Atuamos como um porteiro digital para a sua reputação online. 
            Proteja a sua marca e impulsione as suas estrelas no Google de forma automática.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 lg:gap-6 group">
                <div className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl glass flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <h3 className="text-lg lg:text-xl font-bold flex items-center gap-2">
                    {step.title}
                    {i < steps.length - 1 && <ArrowRight className="w-4 h-4 text-white/20 hidden md:block" />}
                  </h3>
                  <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-6 lg:pt-8 border-t border-white/10">
              <div className="flex items-start gap-4 p-5 lg:p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                <LayoutDashboard className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <h4 className="text-base lg:text-lg font-bold mb-1 text-emerald-400">Diferencial Exclusivo</h4>
                  <p className="text-white/70 text-xs lg:text-sm leading-relaxed">
                    Receba alertas em tempo real no seu <span className="font-bold text-white">Dashboard PWA</span> antes que o cliente saia da loja, permitindo uma resolução imediata e privada.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8 mt-12 lg:mt-0"
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse" />
              <div className="aspect-square rounded-3xl overflow-hidden glass p-4 relative z-10 bg-white/5">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://i.ibb.co/qYJJLhKd/Gemini-Generated-Image-nb6qicnb6qicnb6q.jpg"
                    alt="StarShield Interface"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full animate-pulse delay-500" />
              <div className="aspect-square rounded-3xl overflow-hidden glass p-4 relative z-10 bg-white/5">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://i.ibb.co/GfXYVSRH/Captura-de-Tela-2026-03-31-a-s-12-32-41.png"
                    alt="StarShield Dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
