import Link from 'next/link';

export default function TicketCTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-3xl my-10 shadow-2xl transition-transform hover:scale-[1.02] duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Jangan Sampai Kehabisan!
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Dapatkan tiket konser eksklusif ini sekarang. Kuota sangat terbatas dan cepat habis!
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          {/* Tombol Beli Tiket yang mengarah ke web utama */}
          <Link
            href="https://rcellfest.my.id/" 
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:from-purple-600 hover:to-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-pink-500/50"
          >
            Beli Tiket Sekarang 🎟️
          </Link>
          
          {/* Tombol Anchor ke Lineup */}
          <a 
            href="#lineup" 
            className="text-sm font-semibold leading-6 text-white hover:text-pink-400 transition-colors"
          >
            Lihat Lineup <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}