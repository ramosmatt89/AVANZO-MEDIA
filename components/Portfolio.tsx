'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: 'Kamylla Facco',
    category: 'Maquilhagem Premium',
    description: 'Design premium focado em elegância e conversão.',
    image: 'https://i.ibb.co/21ctwWzy/Cap-1.jpg',
  },
  {
    title: 'João Mendes',
    category: 'Eletricista',
    description: 'Design estratégico focado em geração de contactos.',
    image: 'https://i.ibb.co/8LhHTJL7/Cap-2.jpg',
  },
  {
    title: 'Avanzo Media',
    category: 'Agência Digital',
    description: 'Design AI Tech com foco em inovação e tecnologia.',
    image: 'https://i.ibb.co/GvVgdPSd/Cap-3.jpg',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-24 scroll-mt-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            Soluções em <span className="text-gradient">Websites Premium</span>
          </motion.h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Projetos de alta performance que elevam o padrão do mercado digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass border border-white/10 mb-6 bg-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-[6000ms] ease-in-out group-hover:object-bottom"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  priority={i === 0}
                  quality={80}
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </p>
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
              className="relative w-full max-w-5xl h-full max-h-[90vh] glass rounded-2xl overflow-hidden flex flex-col"
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
                    quality={90}
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
