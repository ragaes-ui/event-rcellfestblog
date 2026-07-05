"use client";

import { useState, useEffect } from 'react';
import TicketCTA from '@/components/TicketCTA';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  // State untuk Pop-up Gambar
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // State untuk mengambil data Next Event dari API Rcellfest
  const [nextEvent, setNextEvent] = useState<any>(null);
  const [isLoadingEvent, setIsLoadingEvent] = useState(true);

// Proses Fetching Data API (MOCK / DUMMY DATA SEMENTARA)
  useEffect(() => {
    const fetchNextEvent = async () => {
      try {
        // Simulasi loading selama 1.5 detik agar efek kerangkanya (skeleton) terlihat
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Data statis sebagai pengganti API
        const mockData = {
          title: "RCELLFESTIVAL BEYOND MEMORIES 2026",
          date: "Coming Soon Desember",
          desc: "Persiapkan dirimu untuk volume selanjutnya! Deretan artis baru, panggung yang lebih megah, dan pengalaman visual neon yang belum pernah ada sebelumnya.",
          image: "https://i.ibb.co.com/QFy0zZCh/IMG-1616.png", // Ganti dengan poster sementaramu
          checkoutUrl: "https://www.rcellfest.my.id/detail?event=rcellfestival-beyond-memories-2026&id=69c9becbefdadf011a4b5282"
        };
        
        setNextEvent(mockData); 
      } catch (error) {
        console.error("Gagal mengambil data event:", error);
      } finally {
        setIsLoadingEvent(false);
      }
    };

    fetchNextEvent();
  }, []);

  const lineupData = [
    {
      name: "DAY 1 LINEUP",
      role: "DAY 1",
      time: "14.30 - 23.30 WIB",
      desc: "Hai rcerss berikut lineup yang sudah rilis untuk event rcellfest 17 fest ini ya",
      image: "https://i.ibb.co.com/kVsP4LmX/IMG-1198.png" 
    },
    {
      name: "DAY 2 LINEUP",
      role: "DAY 2 & PENUTUP",
      time: "14.30 - 23.30 WIB",
      desc: "Hai rcerss berikut lineup yang sudah rilis untuk event rcellfest 17 fest ini ya",
      image: "https://i.ibb.co.com/kVsP4LmX/IMG-1198.png" 
    }
  ];

  const upcomingEvents = [
    {
      title: "RCELLFEST 17 FEST X INTERAKSI FESTIVAL (DAY 1)",
      date: "Day 1 ",
      desc: "Bersiaplah untuk perayaan musik, seni, dan kreativitas paling epik tahun ini. Mengambil alih Interaksi Space, RCELLFEST kali ini menjanjikan pengalaman festival yang lebih intimate, loud, dan tak terlupakan.",
      image: "https://i.ibb.co.com/DgDch4hX/IMG-1280.png", 
      checkoutUrl: "https://www.rcellfest.my.id/detail?event=rcellfest-17-fest-x-interaksi-festival-day-1&id=69faf2a2b461b58f73e5a173" 
    },
    {
      title: "RCELLFEST 17 FEST X INTERAKSI FESTIVAL (DAY 2)",
      date: "Day 2 ",
      desc: "Bersiaplah untuk perayaan musik, seni, dan kreativitas paling epik tahun ini. Mengambil alih Interaksi Space, RCELLFEST kali ini menjanjikan pengalaman festival yang lebih intimate, loud, dan tak terlupakan.",
      image: "https://i.ibb.co.com/DgDch4hX/IMG-1280.png", 
      checkoutUrl: "https://www.rcellfest.my.id/detail?event=rcellfest-17-fest-x-interaksi-festival-day-2&id=699ff07daa2b69b2bdb9a595" 
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 lg:p-24 pt-24 md:pt-32 selection:bg-pink-500 selection:text-white overflow-hidden">
      
      {/* Background Lighting */}
{/* Background Lighting Baru (Ringan di HP) */}
<div className="fixed top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/20 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -z-10 hidden md:block animate-pulse"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-pink-900/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center mb-24 mt-10 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6"
        >
          <img 
            src="/images/IMG-1283.png" 
            alt="Rcellfestival Logo" 
            className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]"
          />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
          {"Rcellfestival".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 + 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Description Animation (Cinematic Reveal) */}
        <motion.p 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mx-auto"
        >
          Hai RCERSS, Ini adalah titik mula menuju pengalaman festival musik yang belum pernah kamu rasakan sebelumnya. Ikuti terus pembaruan eksklusif seputar Rcellfest di sini—mulai dari bocoran line-up yang penuh kejutan, persiapan tata panggung yang megah, hingga keseruan di balik layar. Kami mengambil alih ruang untuk menghadirkan getaran musik yang lebih intens dan paduan visual yang memukau. Siapkan dirimu, ajak teman-teman terbaikmu, dan pastikan kamu mendapatkan tiket untuk menjadi saksi langsung euforia tanpa batas ini!
        </motion.p>
      </motion.section>

      {/* Lineup Section */}
      <section id="lineup" className="mb-20 scroll-mt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center md:justify-start gap-4 mb-10"
        >
          <h2 className="text-4xl font-bold">Featured Lineup</h2>
          <span className="text-3xl animate-bounce">🔥</span>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {lineupData.map((artist, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_15px_40px_-5px_rgba(168,85,247,0.4)] border border-gray-800 hover:border-purple-500/50 flex flex-col justify-between"
            >
              <div className="w-full">
                <div 
                  onClick={() => setSelectedImage(artist.image)}
                  className="block h-48 bg-gray-900 rounded-xl mb-6 overflow-hidden relative group/img cursor-zoom-in border border-transparent hover:border-pink-500/30 transition-colors"
                >
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover/img:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-black/80 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-lg shadow-black/50">
                      🔍 Lihat Poster
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">{artist.role}</span>
                  <span className="text-xs font-medium text-gray-400 bg-gray-900 px-2 py-1 rounded-md">{artist.time}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{artist.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Aturan Festival */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        onClick={() => setSelectedImage("https://i.ibb.co/LXR440g8/IMG-1742.png")}
        className="block mb-20 scroll-mt-24 relative z-10 group cursor-pointer"
      >
        <section className="relative overflow-hidden rounded-3xl border border-gray-800 transition-all duration-500 group-hover:border-purple-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:scale-[1.01]">
          <div className="absolute inset-0 z-0">
            <img src="https://i.ibb.co.com/LXR440g8/IMG-1742.png" alt="Venue Rules" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-gray-900/80"></div>
          </div>
          <div className="relative z-10 p-8 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Aturan Festival (Dos & Don'ts)</h2>
              <p className="text-gray-400 group-hover:text-white transition-colors">
                🔍 Klik untuk melihat poster aturan lengkap
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-none">
              <div className="bg-green-950/20 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">✅ Do's</h3>
                <ul className="space-y-4">
                  {['Bawa kartu identitas asli (KTP/SIM)', 'Jaga kebersihan area festival', 'Gunakan pakaian yang nyaman', 'Isi daya baterai HP sebelum datang'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300"><span className="text-green-500">✔</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-950/20 p-8 rounded-2xl border border-red-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">❌ Don'ts</h3>
                <ul className="space-y-4">
                  {['Membawa senjata tajam/benda berbahaya', 'Membawa makanan/minuman dari luar', 'Melakukan tindakan asusila/rusuh', 'Membawa kamera profesional tanpa izin'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300"><span className="text-red-500">✘</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* --- EVENTS SECTION (Gabungan Statis & API) --- */}
      <section id="events" className="mb-20 scroll-mt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <h2 className="text-3xl font-bold">Rcellfest Events</h2>
          <span className="text-3xl">✨</span>
        </motion.div>
        
        {/* Ubah grid di sini menjadi lg:grid-cols-3 agar memuat 3 kolom ke samping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1 & 2. Data Event Statis (Day 1 & Day 2) */}
          {upcomingEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-900/60 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] transition-all duration-500 flex flex-col group hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-purple-400 font-semibold text-sm mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{event.desc}</p>
                <a href={event.checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1 transition-all duration-300">
                  Beli Disini 🎟️
                </a>
              </div>
            </motion.div>
          ))}

          {/* 3. Kolom Next Event (Dari API) */}
          {isLoadingEvent ? (
            <div className="bg-gray-900/40 rounded-xl border border-gray-800 animate-pulse h-full min-h-[400px] flex items-center justify-center">
              <span className="text-gray-600 text-sm">Memuat Event...</span>
            </div>
          ) : nextEvent && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }} // Delay sedikit lebih lama agar muncul terakhir
              className="bg-gray-900/80 rounded-xl border border-pink-500/30 overflow-hidden hover:border-pink-500 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.4)] transition-all duration-500 flex flex-col group hover:-translate-y-2 relative"
            >
              {/* Badge Khusus Next Event */}
              <div className="absolute top-4 right-4 z-20 bg-pink-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg shadow-pink-500/50 flex items-center gap-1 animate-pulse">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                NEXT EVENT
              </div>

              <div className="h-48 overflow-hidden relative">
                <img src={nextEvent.image || "https://i.ibb.co.com/DgDch4hX/IMG-1280.png"} alt={nextEvent.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="text-pink-400 font-semibold text-sm mb-2">{nextEvent.date || "TBA"}</div>
                <h3 className="text-xl font-bold text-white mb-2">{nextEvent.title || "RCELLFEST NEXT SHOW"}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{nextEvent.desc || "Informasi event selanjutnya sedang dipersiapkan. Stay tuned!"}</p>
                <a href={nextEvent.checkoutUrl || "https://rcellfest.shop"} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-white text-black shadow-md hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300">
                  Dapatkan Tiketnya 🎟️
                </a>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* Social Media Section */}
      <section id="social-media" className="mb-8 scroll-mt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-2 mb-12"
        >
          <span className="text-pink-500 font-bold tracking-widest uppercase text-sm">Join The Hype</span>
          <h2 className="text-3xl md:text-4xl font-bold">Ikuti Keseruan Rcellfest</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Instagram", icon: "📸", handle: "@rcellfest", url: "https://instagram.com/rcellfest", color: "from-pink-500 via-red-500 to-yellow-500" },
            { name: "TikTok", icon: "🎵", handle: "@rcellfest_official", url: "https://tiktok.com/@rcellfest", color: "from-teal-400 to-blue-500" },
            { name: "Twitter / X", icon: "🐦", handle: "@rcellfest", url: "https://twitter.com/rcellfest", color: "from-gray-700 to-gray-900" },
            { name: "YouTube", icon: "▶️", handle: "Rcellfest", url: "https://youtube.com/rcellfest", color: "from-red-600 to-red-800" }
          ].map((social, idx) => (
            <motion.a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-2xl p-8 border border-gray-800 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 flex flex-col items-center text-center overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${social.color} transition-opacity duration-500`}></div>
              <div className="text-5xl mb-4 relative z-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                {social.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1 relative z-10">{social.name}</h3>
              <p className="text-gray-400 group-hover:text-pink-400 transition-colors text-sm font-medium relative z-10">{social.handle}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-16"
      >
        <TicketCTA />
      </motion.div>

      {/* KOMPONEN POP-UP MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full flex justify-center cursor-default"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-500 text-4xl font-bold transition-colors"
              >
                &times;
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged Poster" 
                className="w-auto max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(236,72,153,0.3)] border border-purple-500/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
