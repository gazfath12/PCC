import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';
import { ABOUT_AVATARS, HERO_CARDS, NAV_LINKS, TECH_STACK_MARQUEE } from '../data/pccData';

interface HeroSectionProps {
  onOpenJoinModal: (defaultDivision?: string) => void;
}

const FAN_TRANSFORMS = [
  'lg:translate-y-6 lg:-rotate-[5deg]',
  'lg:translate-y-2.5 lg:-rotate-[2.5deg]',
  'lg:translate-y-0 lg:-rotate-[0.7deg]',
  'lg:translate-y-0 lg:rotate-[0.7deg]',
  'lg:translate-y-2.5 lg:rotate-[2.5deg]',
  'lg:translate-y-6 lg:rotate-[5deg]',
];

const CARD_TARGETS: Record<string, string> = {
  software: '#struktur',
  network: '#struktur',
  class: '#kegiatan',
  multimedia: '#struktur',
  techcomfest: '#kegiatan',
  stat: '#tentang',
};

export function HeroSection({ onOpenJoinModal }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="beranda" className="relative bg-[#F8FAFC] pt-2 px-2 sm:pt-4 sm:px-4">
      {/* Sticky Compact Nav after scrolling past hero */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] max-w-5xl"
          >
            <div className="flex items-center justify-between gap-4 rounded-full bg-[#090D16]/90 backdrop-blur-xl border border-white/12 px-4 py-2.5 shadow-2xl shadow-slate-950/40">
              <a
                href="#beranda"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#beranda');
                }}
                className="flex items-center gap-2.5 shrink-0"
              >
                <img
                  src="/assets/logo-pcc.webp"
                  alt="Logo UKM PCC"
                  className="h-8 w-8 rounded-lg object-contain bg-white/95 p-0.5"
                />
                <span className="font-display font-bold text-sm text-white tracking-tight">
                  UKM PCC
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-mono text-[11px] font-medium tracking-[0.08em] text-slate-300 hover:text-[#C6F36B] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoinModal();
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#C6F36B] hover:bg-[#d4f78b] text-[#0F172A] font-mono text-[11px] font-bold tracking-[0.06em] px-3.5 sm:px-4 py-2 transition-transform active:scale-95 cursor-pointer"
                >
                  JOIN PCC
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/25 text-white hover:bg-white/25 transition-colors cursor-pointer shrink-0"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Scrolled Mobile Drawer */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-2 rounded-2xl bg-[#090D16]/95 backdrop-blur-xl border border-white/15 p-3 shadow-2xl"
                >
                  <div className="flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="rounded-xl px-4 py-2.5 font-mono text-xs font-medium tracking-[0.08em] text-slate-100 hover:bg-white/10 hover:text-[#C6F36B] transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container dengan Warna Biru Khas UKM PCC Polines (#03418c) & Polos Bersih */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#022b60] via-[#03418c] to-[#0d5fc2] text-[#F8FAFC] shadow-[0_24px_80px_-20px_rgba(3,65,140,0.5)]">
        {/* Subtle Atmospheric Grid (Tanpa Glow Blur Liar) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />

        {/* Top Floating Navbar Inside Hero */}
        <header className="relative z-20 mx-auto max-w-7xl px-3.5 sm:px-8 pt-4 sm:pt-6">
          <div className="flex items-center justify-between gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-3 sm:px-5 py-2 sm:py-2.5 shadow-lg shadow-[#022b60]/20">
            {/* Left Brand */}
            <a href="#beranda" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white p-1 shadow-sm">
                <img
                  src="/assets/logo-pcc.webp"
                  alt="Logo UKM PCC Polines"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white block">
                  UKM PCC
                </span>
                <span className="font-mono text-[10px] tracking-[0.08em] text-blue-100/80 uppercase hidden sm:block">
                  Polines • Est. 1992
                </span>
              </div>
            </a>

            {/* Center Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-mono text-[12px] font-medium tracking-[0.08em] text-white/90 hover:text-[#C6F36B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C6F36B] hover:bg-[#d5f78b] text-[#0F172A] font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.06em] px-3.5 py-2 sm:px-5 sm:py-2.5 shadow-md shadow-[#022b60]/30 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer shrink-0"
              >
                JOIN PCC
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <button
                type="button"
                aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/15 border border-white/25 text-white hover:bg-white/25 transition-colors cursor-pointer shrink-0"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mt-3 rounded-2xl bg-[#090D16]/95 backdrop-blur-xl border border-white/15 p-4 shadow-2xl"
              >
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="rounded-xl px-4 py-3 font-mono text-xs font-medium tracking-[0.08em] text-slate-100 hover:bg-white/10 hover:text-[#C6F36B] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Centerpiece */}
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 pt-10 sm:pt-14 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#022b60]/70 border border-white/20 px-4 py-1.5 mb-5 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#C6F36B] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-white font-medium">
              POLYTECHNIC COMPUTER CLUB — POLINES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[58px] leading-[1.08] tracking-[-0.03em] text-white"
          >
            Membangun Masa Depan Lewat{' '}
            <span className="text-[#C6F36B]">
              Teknologi &amp; Kolaborasi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-blue-50/90 leading-relaxed font-normal"
          >
            Wadah eksplorasi, riset, dan pengembangan keahlian teknologi informasi mahasiswa
            Politeknik Negeri Semarang dengan semangat{' '}
            <span className="font-semibold text-white">
              Share Your Knowledge
            </span>
            .
          </motion.p>

          {/* Dual Pill CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#struktur"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#struktur');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#022b60] hover:bg-[#011c40] border border-white/20 text-white font-mono text-xs font-semibold tracking-[0.08em] px-7 py-3.5 transition-all hover:-translate-y-0.5 shadow-lg cursor-pointer"
            >
              JELAJAHI DIVISI
            </a>

            <button
              type="button"
              onClick={() => onOpenJoinModal('Dept. Software')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#C6F36B] hover:bg-[#d5f78b] text-[#0F172A] font-mono text-xs font-bold tracking-[0.08em] pl-6 pr-2.5 py-2 shadow-xl shadow-blue-950/30 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>DAFTAR MAGANG</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F172A] text-[#C6F36B]">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>

          {/* Authentic Community Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2"
          >
            <div className="flex -space-x-2">
              {ABOUT_AVATARS.map((avatar) => (
                <div
                  key={avatar.name}
                  className="h-7 w-7 rounded-full overflow-hidden border-2 border-white/90 bg-blue-100"
                >
                  <img
                    src={avatar.image}
                    alt={avatar.name}
                    className="w-full h-auto max-w-none -translate-y-[26%] scale-125 origin-top"
                  />
                </div>
              ))}
            </div>
            <span className="text-xs font-medium text-white">
              <strong className="text-[#C6F36B]">1.200+</strong> Anggota &amp; Alumni
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.06em] text-blue-100">
              54 Pengurus Aktif 2026/2027
            </span>
          </motion.div>
        </div>

        {/* 3D Curved Card Fan / Showcase (Desktop) & Swipeable Cards (Mobile) */}
        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 pt-2 pb-8 sm:pb-12">
          <div
            className="flex lg:grid lg:grid-cols-6 gap-4 lg:gap-3.5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 lg:pb-6 pt-2"
            style={{ perspective: '1200px' }}
          >
            {HERO_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 + idx * 0.05 }}
                onClick={() => handleNavClick(CARD_TARGETS[card.id] || '#tentang')}
                className={`snap-center shrink-0 w-[230px] sm:w-[250px] lg:w-auto cursor-pointer transition-transform duration-300 hover:-translate-y-2.5 hover:z-20 ${FAN_TRANSFORMS[idx]}`}
              >
                {card.variant === 'stat' ? (
                  <div className="relative h-[250px] sm:h-[268px] rounded-[22px] overflow-hidden bg-[#022b60] border border-white/20 p-5 flex flex-col justify-between shadow-2xl">
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.statLabel}
                        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
                      />
                    )}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-[#C6F36B]/15 text-[#C6F36B] border border-[#C6F36B]/30">
                        {card.tag}
                      </span>
                      <Sparkles className="w-4 h-4 text-[#C6F36B]" />
                    </div>
                    <div className="relative z-10">
                      <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#C6F36B] tracking-tight">
                        {card.statValue}
                      </div>
                      <p className="mt-1.5 font-display font-semibold text-sm sm:text-base text-white leading-snug">
                        {card.statLabel}
                      </p>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Berkarier di startup, BUMN, dan tech company nasional.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="group relative h-[250px] sm:h-[268px] rounded-[22px] overflow-hidden bg-[#022b60] border border-white/25 shadow-2xl">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${card.accent} via-slate-950/30 to-transparent`}
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white">
                        {card.tag}
                      </span>
                      <span className="h-6 w-6 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="absolute bottom-3.5 left-3.5 right-3.5">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs text-blue-100/90 font-medium">{card.subtitle}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner / Tech Stack Marquee Bar Below Hero */}
      <div className="mx-auto max-w-7xl py-6 sm:py-8 overflow-hidden">
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />
          <div className="animate-marquee flex items-center gap-6 sm:gap-10">
            {[...TECH_STACK_MARQUEE, ...TECH_STACK_MARQUEE].map((tech, index) => (
              <div key={`${tech}-${index}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
                <span className="font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-500 hover:text-[#03418c] transition-colors">
                  {tech}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#03418c]/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
