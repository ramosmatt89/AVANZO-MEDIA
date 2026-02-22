'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-display font-bold tracking-tight">
            AVANZO<span className="text-emerald-500">MEDIA</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/avanzomedia.pt/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 hover:text-emerald-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Avanzo Media
          </div>
        </div>
      </div>
    </footer>
  );
}
