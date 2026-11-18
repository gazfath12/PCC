import { motion } from 'framer-motion';
import { Compass, Cpu, Layers, Sparkles, Target } from 'lucide-react';
import { ABOUT_AVATARS, SEVEN_LAYERS_PCC, VISI_MISI_PCC } from '../data/pccData';

export function AboutSection() {
  return (
    <section id="tentang" className="relative bg-[#F8FAFC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-[#03418c]" />
          <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-[#03418c] uppercase">
            TENTANG PCC
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-4xl font-display font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] tracking-[-0.03em] text-[#0F172A]"
        >
          Komunitas teknologi mahasiswa yang berdedikasi mencetak talenta digital yang inovatif, kritis, dan adaptif menghadapi era modern.
        </motion.h2>

        {/* Tagline Box: More Than a Student Organization */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#03418c]">
              MEET PCC • POLINES
            </span>
            <h3 className="mt-1 font-display font-bold text-xl text-[#0F172A]">
              &ldquo;More Than a Student Organization.&rdquo;
            </h3>
            <p className="mt-1.5 text-sm text-[#475569] leading-relaxed max-w-3xl">
              Polytechnic Computer Club (PCC) merupakan Unit Kegiatan Mahasiswa di Politeknik Negeri Semarang yang menjadi wadah bagi mahasiswa untuk belajar, berkembang, dan berkolaborasi dalam bidang teknologi dan komputer. PCC berkomitmen menciptakan lingkungan yang inovatif, adaptif, dan suportif melalui berbagai kegiatan, project, serta pengembangan keterampilan digital bagi anggota maupun sivitas akademika.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-2.5 text-center">
              <span className="font-mono text-[10px] text-slate-500 uppercase block">SINCE</span>
              <span className="font-display font-bold text-xs sm:text-sm text-[#03418c]">14 Agustus 1992</span>
            </div>
            <div className="rounded-xl bg-lime-50 border border-lime-200/80 px-4 py-2.5 text-center">
              <span className="font-mono text-[10px] text-slate-500 uppercase block">FOCUSED ON</span>
              <span className="font-display font-bold text-xs sm:text-sm text-[#0F172A]">Teknologi &amp; Inovasi</span>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Bento Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Official Deep Blue Bento */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[24px] bg-[#03418c] border border-blue-800/40 p-5 sm:p-6 min-h-[400px] flex flex-col justify-between shadow-lg shadow-blue-950/20"
          >
            <img
              src="/assets/tentang/about-team.webp"
              alt="Keluarga Besar UKM PCC Polines"
              className="h-full w-full object-cover object-center absolute inset-0 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#022b60]/95 via-[#03418c]/40 to-slate-950/35" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/25">
                EST. 14 AGUSTUS 1992
              </span>
              <span className="h-9 w-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </span>
            </div>

            <div className="relative z-10 rounded-[20px] bg-white p-6 shadow-xl border border-black/5">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
                1992 <span className="text-[#03418c]">/ 32+ Thn</span>
              </div>
              <p className="mt-2.5 text-sm text-[#475569] leading-relaxed">
                Sejak 14 Agustus 1992 konsisten menjadi pelopor inovasi dan literasi teknologi di lingkungan kampus Politeknik Negeri Semarang.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Light Gray Commitment Bento */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[24px] bg-[#F1F5F9] border border-black/[0.06] p-7 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[#475569]">
                  Budaya Organisasi
                </span>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white text-[#03418c] border border-slate-200 font-semibold">
                  SYK CULTURE
                </span>
              </div>

              <div className="mt-5 font-display font-extrabold text-6xl sm:text-7xl text-[#0F172A] tracking-[-0.04em]">
                100%
              </div>

              {/* Avatar Stack */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {ABOUT_AVATARS.map((avatar) => (
                    <div
                      key={avatar.name}
                      title={`${avatar.name} — ${avatar.role}`}
                      className="relative h-12 w-12 rounded-full overflow-hidden border-[2.5px] border-white bg-blue-100 shadow-sm"
                    >
                      <img
                        src={avatar.image}
                        alt={avatar.name}
                        className="w-full h-auto max-w-none -translate-y-[26%] scale-125 origin-top"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-medium text-[#475569]">
                  Mentoring aktif lintas angkatan
                </span>
              </div>
            </div>

            <blockquote className="mt-8 rounded-2xl bg-white/85 border border-black/[0.05] p-5 text-[15px] text-[#0F172A] leading-relaxed font-medium">
              &ldquo;<span className="text-[#03418c] font-bold">Share Your Knowledge</span>&rdquo;
              bukan sekadar slogan, melainkan budaya mentoring lintas angkatan dari dasar hingga
              siap terjun ke industri.
            </blockquote>
          </motion.div>

          {/* Card 3: Split Vertical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-col gap-6 min-h-[400px]"
          >
            {/* Top Card: Electric Lime */}
            <div className="flex-1 rounded-[24px] bg-[#C6F36B] border border-black/[0.06] p-7 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#0F172A]/80">
                  Total Anggota &amp; Alumni
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#0F172A]" />
              </div>

              <div className="mt-4">
                <div className="font-display font-extrabold text-5xl sm:text-6xl text-[#0F172A] tracking-[-0.04em]">
                  1.200+
                </div>
                <p className="mt-2.5 text-sm sm:text-[15px] text-[#0F172A]/85 leading-relaxed font-medium">
                  Tersebar di berbagai perusahaan teknologi, startup unicorn, dan instansi nasional.
                </p>
              </div>
            </div>

            {/* Bottom Card: Deep Black */}
            <div className="rounded-[24px] bg-[#090D16] border border-white/10 p-7 text-[#F8FAFC] flex items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[#C6F36B]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Struktur Ekosistem</span>
                </div>
                <div className="mt-1.5 text-sm text-slate-300 font-medium">
                  Departemen Inti &amp; Riset
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  3 Divisi <span className="text-[#38BDF8]">+ 6 Biro</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 7-LAYERS PCC SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-[28px] bg-gradient-to-br from-[#022b60] via-[#03418c] to-[#090D16] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#C6F36B]/20 border border-[#C6F36B]/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#C6F36B]">
                  <Sparkles className="w-3.5 h-3.5" />
                  FILOSOFI ORGANISASI
                </span>
                <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-white">
                  7-Layers PCC
                </h3>
              </div>
              <p className="max-w-xl text-sm text-blue-100/90 leading-relaxed">
                7-Layers PCC adalah filosofi yang menjadi dasar dari setiap kegiatan dan keputusan yang diambil oleh UKM PCC. Setiap lapisan mewakili nilai inti yang membimbing organisasi kami dalam mencapai tujuan dan misi.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {SEVEN_LAYERS_PCC.map((layer, index) => (
                <div
                  key={layer.word}
                  className="rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 p-3 sm:p-3.5 flex flex-col justify-between hover:bg-white/[0.14] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] text-white/50 block">Layer 0{index + 1}</span>
                    <h4 className="mt-1 font-display font-extrabold text-sm sm:text-base lg:text-[13px] xl:text-[15px] tracking-tight text-white whitespace-nowrap">
                      {layer.word}
                    </h4>
                  </div>
                  <p className="mt-2.5 text-xs text-blue-100/80 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* VISI & MISI SECTION */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="md:col-span-5 rounded-[24px] bg-white border border-slate-200/90 p-7 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#03418c]">
                <Compass className="w-3.5 h-3.5" />
                VISI UKM PCC
              </div>
              <h4 className="mt-4 font-display font-bold text-xl text-[#0F172A] leading-snug">
                &ldquo;{VISI_MISI_PCC.visi}&rdquo;
              </h4>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-xs text-[#475569]">
              Landasan gerak seluruh departemen dan biro UKM PCC Polines.
            </div>
          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="md:col-span-7 rounded-[24px] bg-white border border-slate-200/90 p-7 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-lime-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#0F172A]">
              <Target className="w-3.5 h-3.5 text-[#03418c]" />
              MISI UKM PCC
            </div>
            <div className="mt-4 space-y-3">
              {VISI_MISI_PCC.misi.map((m, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-50 text-[#03418c] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-[#0F172A] leading-relaxed font-medium">
                    {m}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
