import ArticleCard from '@/components/ArticleCard';

export default function BlogIndex() {
  // Saya tambahkan 1 artikel lagi agar grid-nya pas 3 kotak
  const articles = [
    {
      title: "Persiapan Panggung Megah Rcellfest 2026",
      excerpt: "Intip di balik layar bagaimana tim kami membangun panggung paling spektakuler dengan teknologi tata cahaya terbaru tahun ini.",
      date: "15 Juni 2026",
      slug: "persiapan-panggung-megah",
      category: "Behind the Scene"
    },
    {
      title: "Bocoran Setlist Headliner Utama Kita!",
      excerpt: "Apakah lagu favoritmu akan dibawakan? Berikut adalah sedikit bocoran lagu-lagu yang sedang diaransemen ulang untuk malam puncak.",
      date: "10 Juni 2026",
      slug: "bocoran-setlist",
      category: "Lineup"
    },
    {
      title: "Panduan & Rute Menuju Lokasi Festival",
      excerpt: "Biar nggak nyasar, cek rute terbaik, area parkir, dan opsi transportasi umum paling nyaman menuju venue Rcellfest.",
      date: "05 Juni 2026",
      slug: "panduan-lokasi",
      category: "Info Penting"
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-pink-500 selection:text-white overflow-hidden">
      
      {/* 1. EFEK AMBIENT GLOW DI BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-16 text-center space-y-6">
          <div className="inline-block relative">
            {/* 2. TEKS BERDENYUT (PULSE) */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 relative z-10">
              RCELLFEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">LATEST</span>
            </h1>
            {/* Efek Garis Bawah (Underline Glow) */}
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Temukan berita terbaru, update event, dan cerita eksklusif di balik layar persiapan konser tahun ini.
          </p>
        </div>

        {/* GRID ARTIKEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {articles.map((article, idx) => (
            /* 3. WRAPPER EFEK GLOW SAAT DI-HOVER */
            <div 
              key={idx} 
              className="group relative transition-all duration-500 hover:-translate-y-4 hover:z-20"
            >
              {/* Ini layer cahaya neon yang tersembunyi, akan muncul saat di hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Kartu Artikel Asli */}
              <div className="relative h-full bg-gray-900 rounded-2xl overflow-hidden">
                <ArticleCard 
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  slug={article.slug}
                  category={article.category}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}