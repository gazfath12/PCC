import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_TABS, type GalleryCategory } from '../data/pccData';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'Semua') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredGallery.length
    );
  }, [filteredGallery.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredGallery.length) % filteredGallery.length
    );
  }, [filteredGallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  const activePhoto = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <section
      id="galeri"
      className="relative overflow-hidden bg-[#090D16] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#F8FAFC]"
    >
      {/* Subtle Blue & Violet Atmospheric Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/4 h-[420px] w-[420px] rounded-full bg-[#0284C7]/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/5 h-[360px] w-[360px] rounded-full bg-indigo-500/15 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#C6F36B]" />
              <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-[#C6F36B] uppercase">
                GALERI DOKUMENTASI
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-white">
              Momen Kolaborasi dalam Lensa
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {GALLERY_TABS.map((tab) => {
              const active = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveCategory(tab);
                    setLightboxIndex(null);
                  }}
                  className={`rounded-full px-4 py-2 font-mono text-[12px] font-semibold tracking-[0.05em] transition-all cursor-pointer ${
                    active
                      ? 'bg-[#C6F36B] text-[#0F172A] shadow-lg shadow-[#C6F36B]/15'
                      : 'bg-white/[0.06] text-slate-300 border border-white/10 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Masonry Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[230px] sm:auto-rows-[240px] gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.button
                layout
                type="button"
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 text-left cursor-pointer ${
                  activeCategory === 'Semua' ? item.spanClass : 'md:col-span-2 md:row-span-1'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-[#090D16]/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />

                {/* Top Corner Expand Icon */}
                <div className="absolute top-3.5 right-3.5 h-9 w-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Expand className="w-4 h-4" />
                </div>

                {/* Glassmorphism Caption Bar Revealed / Elevated on Hover */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-2xl bg-[#090D16]/70 backdrop-blur-md border border-white/15 p-3.5 sm:p-4 transition-transform duration-300 translate-y-1 group-hover:translate-y-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#C6F36B]">
                      {item.division}
                    </span>
                    <span className="font-mono text-[10px] text-slate-300">{item.date}</span>
                  </div>
                  <h3 className="mt-1 font-display font-bold text-sm sm:text-base text-white leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/92 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-[28px] bg-[#0F172A] border border-white/15 overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                aria-label="Tutup Preview Galeri"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/55 hover:bg-black/80 border border-white/15 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative bg-black aspect-[16/10] max-h-[65vh] w-full flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="h-full w-full object-contain"
                />

                {filteredGallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Foto Sebelumnya"
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/55 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Foto Berikutnya"
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/55 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] px-2.5 py-0.5 rounded-full bg-[#C6F36B] text-[#0F172A]">
                      {activePhoto.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#38BDF8] font-semibold">
                      {activePhoto.division}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {activePhoto.date}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display font-bold text-xl text-white">
                    {activePhoto.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {activePhoto.description}
                  </p>
                </div>

                <div className="font-mono text-xs text-slate-400 shrink-0">
                  {lightboxIndex + 1} / {filteredGallery.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
