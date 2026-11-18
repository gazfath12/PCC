import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, Flame, X } from 'lucide-react';
import { OFFICIAL_ACTIVITIES, TECHCOMFEST_HIGHLIGHT } from '../data/pccData';

export function ActivitiesSection() {
  const [flashbackOpen, setFlashbackOpen] = useState(false);

  return (
    <section id="kegiatan" className="relative bg-[#F8FAFC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200/80 px-3.5 py-1.5 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#03418c]" />
            <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-[#03418c] uppercase">
              KEGIATAN &amp; PROGRAM KERJA PCC
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#0F172A]">
            Agenda &amp; Tradisi Organisasi Kami
          </h2>
          <p className="mt-3 text-base text-[#475569] max-w-2xl leading-relaxed">
            Beragam program kerja unggulan UKM PCC Polines yang memadukan dedikasi pengabdian, pengembangan keahlian teknologi, dan kekeluargaan antar-generasi.
          </p>
        </div>

        {/* 7 Official Activities Grid — Harmonious 3-Column + 4-Column Layout */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OFFICIAL_ACTIVITIES.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-[22px] bg-white border border-slate-200/90 p-5 shadow-sm hover:shadow-lg hover:border-[#03418c]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#03418c] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                    <Calendar className="w-3 h-3 text-[#03418c]" />
                    <span>{item.date}</span>
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#C6F36B] border border-black/10" />
                </div>

                <h3 className="font-display font-bold text-xl text-[#0F172A] group-hover:text-[#03418c] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-4">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>UKM PCC Polines</span>
                <span className="text-[#03418c] font-bold">2026</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFICIAL_ACTIVITIES.slice(3).map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx + 3) * 0.05 }}
              className="rounded-[22px] bg-white border border-slate-200/90 p-5 shadow-sm hover:shadow-lg hover:border-[#03418c]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#03418c] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                    <Calendar className="w-3 h-3 text-[#03418c]" />
                    <span>{item.date}</span>
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#C6F36B] border border-black/10" />
                </div>

                <h3 className="font-display font-bold text-lg text-[#0F172A] group-hover:text-[#03418c] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-[#475569] leading-relaxed line-clamp-4">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>UKM PCC Polines</span>
                <span className="text-[#03418c] font-bold">2026</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flagship Event Highlight Card — Techcomfest */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 relative overflow-hidden rounded-[28px] bg-[#090D16] border border-white/10 text-[#F8FAFC] shadow-2xl"
        >
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#03418c]/35 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#C6F36B]/15 blur-[110px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C6F36B]/15 border border-[#C6F36B]/30 px-3.5 py-1.5 text-[#C6F36B]">
                <Flame className="w-3.5 h-3.5 fill-[#C6F36B]" />
                <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase">
                  {TECHCOMFEST_HIGHLIGHT.badge}
                </span>
              </div>

              <h3 className="mt-5 font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                {TECHCOMFEST_HIGHLIGHT.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {TECHCOMFEST_HIGHLIGHT.description}
              </p>

              {/* Event Highlights Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TECHCOMFEST_HIGHLIGHT.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/[0.05] border border-white/10 p-3.5"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-1 font-display font-bold text-xs sm:text-sm text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => setFlashbackOpen(true)}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#C6F36B] hover:bg-[#d6f78c] text-[#0F172A] font-mono text-xs font-bold tracking-[0.06em] px-6 py-3.5 shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <span>LIHAT KILAS BALIK TECHCOMFEST</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[22px] border border-white/15 bg-slate-900 aspect-[16/10] shadow-2xl group">
                <img
                  src={TECHCOMFEST_HIGHLIGHT.image}
                  alt="Awarding Techcomfest 2026 UKM PCC Polines"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#C6F36B]">
                      TECHCOMFEST 2026 • POLINES
                    </span>
                    <div className="text-sm font-semibold text-white">
                      Shaping the Future of Digital Experience
                    </div>
                  </div>
                  <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white shrink-0">
                    20 Jan 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Techcomfest Flashback Modal */}
      <AnimatePresence>
        {flashbackOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setFlashbackOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 8 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-[#090D16] border border-white/15 p-6 sm:p-8 text-white shadow-2xl"
            >
              <button
                type="button"
                aria-label="Tutup Kilas Balik Techcomfest"
                onClick={() => setFlashbackOpen(false)}
                className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#C6F36B]">
                KILAS BALIK • TECHCOMFEST 2026
              </span>
              <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-white">
                Technology Computer Festival 2026
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                Rangkaian kompetisi IT tingkat nasional (Web App, Capture The Flag, UI/UX) serta
                Seminar Nasional AI yang sukses digelar oleh UKM PCC Polines.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {TECHCOMFEST_HIGHLIGHT.flashbackPhotos.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
