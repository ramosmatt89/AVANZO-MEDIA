'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Globe, Megaphone, CreditCard, Layout, Zap, Shield } from 'lucide-react';

const services = [
  {
    title: 'Criação de Websites',
    description: 'Desenvolvimento de sites ultra-rápidos, responsivos e com design focado em conversão.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Anúncios Online',
    description: 'Gestão estratégica de tráfego pago em Google Ads e Meta Ads para escalar o seu negócio.',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Gateways de Pagamento',
    description: 'Integração de sistemas de pagamento seguros e eficientes para e-commerce e serviços.',
    icon: CreditCard,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    color: 'from-purple-500 to-indigo-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white/[0.02] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            As Nossas <span className="text-gradient">Soluções</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Combinamos criatividade e tecnologia para entregar resultados excecionais em cada projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className="glass rounded-3xl overflow-hidden h-full flex flex-col hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 z-10`} />
                </div>
                
                <div className="p-6 md:p-8 flex-grow">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      className={`h-full bg-gradient-to-r ${service.color}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
