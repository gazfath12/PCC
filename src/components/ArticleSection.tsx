import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, ExternalLink, User } from 'lucide-react';
import { PCC_ARTICLES } from '../data/pccData';

export function ArticleSection() {
  return (
    <section id="artikel" className="relative bg-[#090D16] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#03418c]/40 border border-[#38BDF8]/40 px-3.5 py-1.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#C6F36B]" />
              <span className="font-mono text-[11px] font-bold tracking-[0.08em] text-[#38BDF8] uppercase">
                ARTIKEL &amp; KNOWLEDGE BASE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-0.03em]">
              Wawasan Terbaru dari Anggota PCC
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Karya tulis, edukasi teknologi, dan opini analitis dari berbagai divisi &amp; departemen UKM PCC Polines.
            </p>
          </div>

          <a
            href="https://www.ukmpcc.org/article"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 px-6 py-3 font-mono text-xs font-semibold text-white tracking-[0.06em] transition-all hover:scale-105 active:scale-95 shrink-0 self-start md:self-auto"
          >
            <span>LIHAT SEMUA ARTIKEL</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C6F36B]" />
          </a>
        </div>

        {/* Featured Article + Side Articles Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured First Article (Large Card) */}
          {PCC_ARTICLES.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 rounded-[24px] bg-[#0c182b] border border-white/15 p-7 sm:p-8 flex flex-col justify-between hover:border-[#38BDF8]/50 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full bg-[#03418c] text-[#38BDF8] font-mono text-[11px] font-bold uppercase tracking-[0.08em] border border-[#38BDF8]/30">
                    {PCC_ARTICLES[0].category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PCC_ARTICLES[0].date}</span>
                  </div>
                </div>

                <a
                  href={PCC_ARTICLES[0].link}
                  target="_blank"
                  rel="noreferrer"
                  className="block group/link"
                >
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover/link:text-[#C6F36B] transition-colors leading-tight">
                    {PCC_ARTICLES[0].title}
                  </h3>
                </a>

                <p className="mt-4 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                  {PCC_ARTICLES[0].snippet}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-[#C6F36B]" />
                  </div>
                  <span className="font-medium">{PCC_ARTICLES[0].author}</span>
                </div>

                <a
                  href={PCC_ARTICLES[0].link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#C6F36B] hover:text-white transition-colors"
                >
                  <span>BACA SELENGKAPNYA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Right Column: Other Articles Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PCC_ARTICLES.slice(1, 5).map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] p-5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[#38BDF8] font-bold">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block group/link"
                  >
                    <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover/link:text-[#C6F36B] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>
                  </a>

                  <p className="mt-2 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="truncate pr-2">{article.author}</span>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#C6F36B] inline-flex items-center gap-1 hover:underline font-bold shrink-0"
                  >
                    <span>Baca</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
