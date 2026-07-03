"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  // State untuk mengontrol buka/tutup menu di HP
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 md:bg-[#0a0a0a]/70 md:backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* --- BAGIAN LOGO --- */}
        <Link href="/" className="hover:scale-105 transition-transform duration-300">
          <img 
            src="/images/IMG-1283.png" 
            alt="Rcellfest Logo" 
            className="h-10 w-auto drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]" 
          />
        </Link>
        {/* ------------------- */}

        {/* Menu Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link href="/#lineup" className="hover:text-white transition-colors duration-300">
            Artists
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors duration-300">
            Blog
          </Link>
          <Link href="/#social-media" className="hover:text-white transition-colors duration-300">
            Socials
          </Link>
          
          <a 
            href="https://rcellfest.my.id/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 ml-4"
          >
            Beli Tiket
          </a>
        </div>
        
        {/* Tombol Menu Mobile (Hamburger & Close Icon) */}
        <button 
          className="md:hidden text-white text-2xl cursor-pointer hover:text-pink-500 transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Ubah ikon jadi silang (✕) kalau menu sedang terbuka */}
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* --- MENU DROPDOWN MOBILE --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Home</Link>
              <Link href="/#lineup" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Artists</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Blog</Link>
              <Link href="/#social-media" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Socials</Link>
              
              <a 
                href="https://rcellfest.my.id/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-white text-black px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Beli Tiket
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ----------------------------- */}

    </nav>
  );
}