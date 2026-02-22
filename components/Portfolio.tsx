'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Landing Page Premium',
    category: 'Design & Conversão',
    image: 'https://www.dropbox.com/scl/fi/c6o3gdxrxq16hrvy46ia9/eletric-site.png?rlkey=yltom56shypbpc5g0cmvohk0f&st=pjizuf1x&raw=1',
  },
  {
    title: 'Checkout Otimizado',
    category: 'Gateway & UX',
    image: 'https://www.dropbox.com/scl/fi/2efq3bfci4ke3z453l1k2/GTWay.png?rlkey=jmnf53pfx3eluunsv21scyln4&st=4acwl6lv&raw=1',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              O Nosso <span className="text-gradient">Portfólio</span>
            </motion.h2>
            <p className="text-white/60 text-lg">
              Projetos de alta performance que elevam o padrão do mercado.
            </p>
          </div>
          <motion.a 
            href="#contact"
            whileHover={{ x: 5 }}
            className="text-emerald-400 font-bold flex items-center gap-2 group"
          >
            Pedir orçamento
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-[2.5rem] overflow-hidden glass border border-white/5 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-[object-position] duration-[5000ms] ease-in-out group-hover:object-bottom"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="p-8 md:p-10 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-3">
                  {project.category}
                </p>
                <h3 className="text-3xl font-display font-bold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
