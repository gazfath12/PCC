import { ArrowUpRight, Globe, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../data/pccData';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6Z" />
    </svg>
  );
}

interface FooterSectionProps {
  onOpenJoinModal: (defaultDivision?: string) => void;
}

export function FooterSection({ onOpenJoinModal }: FooterSectionProps) {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-[#090D16] text-[#F8FAFC] pt-8 sm:pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Pre-Footer CTA Banner */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0F172A] border border-white/15 p-8 sm:p-12 shadow-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-[#C6F36B]/20 blur-[90px]"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                <span className="h-2 w-2 rounded-full bg-[#C6F36B]" />
                OPEN RECRUITMENT & MAGANG 2026
              </span>
              <h2 className="mt-4 font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                Siap Bertumbuh Bersama Departemen Software UKM PCC?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-sky-100/90 leading-relaxed">
                Bangun portofolio nyata, eksplorasi arsitektur modern, dan kolaborasi bersama
                komunitas IT terbesar di Politeknik Negeri Semarang.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenJoinModal('Dept. Software')}
              className="shrink-0 inline-flex items-center justify-center gap-3 rounded-full bg-[#C6F36B] hover:bg-[#d5f78b] text-[#0F172A] font-mono text-xs font-bold tracking-[0.08em] pl-6 pr-2.5 py-3 shadow-xl transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>MULAI PERJALANANMU SEKARANG</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F172A] text-[#C6F36B]">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-white p-1.5 shadow-sm">
                <img
                  src="/assets/logo-pcc.webp"
                  alt="Logo UKM PCC Polines"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">UKM PCC Polines</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#C6F36B]">
                  Share Your Knowledge!
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">
              Unit Kegiatan Mahasiswa Polytechnic Computer Club — wadah bagi mahasiswa untuk belajar, berkembang, dan berkolaborasi dalam bidang teknologi dan komputer sejak 14 Agustus 1992.
            </p>

            <div className="mt-5 flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
              <span>
                Gedung PKM Politeknik Negeri Semarang, Jl. Prof. Sudarto, SH, Tembalang, Semarang,
                Jawa Tengah 50275
              </span>
            </div>
          </div>

          {/* Col 2: Navigasi */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-white">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="text-sm text-slate-400 hover:text-[#C6F36B] transition-colors"
                  >
                    {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Ekosistem */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-white">
              Services &amp; Ekosistem
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="https://www.ukmpcc.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Maintenance Service
                </a>
              </li>
              <li>
                <a
                  href="https://www.ukmpcc.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Web &amp; Software Projects
                </a>
              </li>
              <li>
                <a
                  href="https://www.ukmpcc.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  PCC Merchandise Store
                </a>
              </li>
              <li>
                <a
                  href="https://www.ukmpcc.org/login"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C6F36B] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Portal Login Anggota</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Sosial Media & Kontak */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-white">
              Sosial Media &amp; Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="https://instagram.com/ukmpcc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#C6F36B] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#38BDF8]" />
                  <span>@ukmpcc</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ukmpcc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#C6F36B] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                  <span>github.com/ukmpcc</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@ukmpccpolines"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#C6F36B] transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-[#38BDF8]" />
                  <span>UKM PCC Polines</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.ukmpcc.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#C6F36B] transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#38BDF8]" />
                  <span>ukmpcc.org</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pccpolines92@gmail.com"
                  className="inline-flex items-center gap-2.5 hover:text-[#C6F36B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#38BDF8]" />
                  <span>pccpolines92@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 PCC Polines. All Rights Reserved.
          </p>
          <span className="font-mono text-[11px] text-slate-500 uppercase tracking-[0.08em]">
            POLITEKNIK NEGERI SEMARANG • EST. 1992
          </span>
        </div>
      </div>
    </footer>
  );
}
