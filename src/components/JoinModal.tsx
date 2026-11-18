import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

interface JoinModalProps {
  open: boolean;
  defaultDivision?: string;
  onClose: () => void;
}

const DIVISIONS = [
  'Dept. Software',
  'Dept. Network',
  'Dept. Multimedia',
  'Litbang & Biro (Workshop / HRD / Humas / Redaksi / KRT)',
];

export function JoinModal({ open, defaultDivision, onClose }: JoinModalProps) {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [prodi, setProdi] = useState('');
  const [customDivision, setCustomDivision] = useState<string | null>(null);
  const [motivation, setMotivation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const division = customDivision ?? defaultDivision ?? 'Dept. Software';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !nim.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setNim('');
    setProdi('');
    setCustomDivision(null);
    setMotivation('');
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          onClick={handleResetAndClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.96, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 8 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[28px] bg-white p-6 sm:p-8 shadow-2xl border border-black/10"
          >
            <button
              type="button"
              aria-label="Tutup Form Pendaftaran"
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#0F172A] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6F36B] text-[#0F172A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="mt-5 font-display font-bold text-2xl text-[#0F172A]">
                  Pendaftaran Magang Tercatat!
                </h3>
                <p className="mt-2.5 text-sm text-[#475569] leading-relaxed">
                  Terima kasih <span className="font-semibold text-[#0F172A]">{name}</span> ({nim}).
                  Minat kamu pada <span className="font-semibold text-[#0284C7]">{division}</span>{' '}
                  telah kami simpan. Pantau informasi lanjutan di Instagram{' '}
                  <span className="font-mono font-semibold">@ukmpcc</span>.
                </p>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="mt-6 rounded-full bg-[#090D16] text-white font-mono text-xs font-semibold tracking-[0.06em] px-6 py-3 hover:bg-slate-800 cursor-pointer"
                >
                  KEMBALI KE BERANDA
                </button>
              </div>
            ) : (
              <>
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0284C7]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MAGANG &amp; OPEN RECRUITMENT</span>
                </div>

                <h3 className="mt-3 font-display font-bold text-2xl text-[#0F172A]">
                  Gabung UKM PCC Polines
                </h3>
                <p className="mt-1.5 text-sm text-[#475569]">
                  Pilih departemen impianmu dan mulai bertumbuh dengan semangat{' '}
                  <span className="font-semibold text-[#0F172A]">Share Your Knowledge</span>.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#475569] mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Riki Ulir Niam"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#0284C7] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#475569] mb-1.5">
                        NIM *
                      </label>
                      <input
                        type="text"
                        required
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        placeholder="3.34.25.0.xx"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#0284C7] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#475569] mb-1.5">
                        Program Studi
                      </label>
                      <input
                        type="text"
                        value={prodi}
                        onChange={(e) => setProdi(e.target.value)}
                        placeholder="D3/D4 Teknik Informatika"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#0284C7] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#475569] mb-1.5">
                      Pilihan Departemen / Biro
                    </label>
                    <select
                      value={division}
                      onChange={(e) => setCustomDivision(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#0284C7] focus:bg-white focus:outline-none"
                    >
                      {DIVISIONS.map((div) => (
                        <option key={div} value={div}>
                          {div}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#475569] mb-1.5">
                      Motivasi Singkat
                    </label>
                    <textarea
                      rows={3}
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      placeholder="Ceritakan minat teknologimu atau proyek yang ingin dibangun..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#0284C7] focus:bg-white focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#C6F36B] hover:bg-[#d5f78b] text-[#0F172A] font-mono text-xs font-bold tracking-[0.08em] py-3.5 shadow-md transition-transform active:scale-[0.99] cursor-pointer"
                  >
                    KIRIM PENDAFTARAN MAGANG ↗
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
