import Link from 'next/link';

// Definisi tipe data (bisa disesuaikan dengan isi data.ts nanti)
interface ArticleProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
}

export default function ArticleCard({ title, excerpt, date, slug, category }: ArticleProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="relative h-full flex flex-col items-start justify-between rounded-2xl bg-gray-900 border border-gray-800 p-6 transition-all duration-300 hover:bg-gray-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.4)] hover:border-purple-500/50">
        
        <div className="w-full">
          <div className="flex items-center gap-x-4 text-xs mb-4">
            <time dateTime={date} className="text-gray-500 group-hover:text-gray-400 transition-colors">
              {date}
            </time>
            <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
              {category}
            </span>
          </div>
          
          <h3 className="mt-3 text-xl font-bold leading-6 text-white group-hover:text-pink-400 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-400 line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-x-2 text-sm font-semibold text-purple-400 group-hover:text-pink-500 transition-colors">
          Baca selengkapnya <span aria-hidden="true">&rarr;</span>
        </div>
        
      </article>
    </Link>
  );
}