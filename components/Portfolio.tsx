'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: 'Landing Page Premium',
    category: 'Design & Conversão',
    image: 'https://i.ibb.co/GQt37kYT/eletric-site.png',
  },
  {
    title: 'Checkout Otimizado',
    category: 'Gateway & UX',
    image: 'https://i.ibb.co/2Y6M2ttw/GTWay.png',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-[2.5rem] overflow-hidden glass border border-white/5 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-[5000ms] ease-in-out group-hover:object-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
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

      {/* Expanded View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] glass rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur-md z-20">
                <div>
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display font-bold">
                    {selectedProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Image Container */}
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-white/5">
                <div className="relative w-full">
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    width={1200}
                    height={2000}
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
