import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, Users, X } from 'lucide-react';
import {
  DIVISION_PILLARS,
  STRUCTURE_MEMBERS,
  STRUCTURE_TABS,
  type StructureCategory,
  type StructureMember,
} from '../data/pccData';

export function StructureSection() {
  const [activeTab, setActiveTab] = useState<StructureCategory>('Semua');
  const [showAllInSemua, setShowAllInSemua] = useState(false);
  const [selectedMember, setSelectedMember] = useState<StructureMember | null>(null);

  const filteredMembers = useMemo(() => {
    if (activeTab === 'Semua') {
      return showAllInSemua
        ? STRUCTURE_MEMBERS
        : STRUCTURE_MEMBERS.filter((m) => m.featured);
    }
    return STRUCTURE_MEMBERS.filter((m) => m.category === activeTab);
  }, [activeTab, showAllInSemua]);

  return (
    <section id="struktur" className="relative bg-[#F8FAFC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-1.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#C6F36B]" />
              <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-white uppercase">
                STRUKTUR ORGANISASI 2026/2027
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#0F172A]">
              Arsitek di Balik Ekosistem UKM PCC
            </h2>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-[#475569]">
              Sinergi antara Badan Pengurus Harian dan 3 Departemen Keilmuan Spesialis.
            </p>
          </div>

          <div className="inline-flex items-center gap-2.5 self-start lg:self-auto rounded-2xl bg-white border border-black/[0.06] px-4 py-3 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#475569]">
                Periode Aktif
              </div>
              <div className="font-display font-bold text-sm text-[#0F172A]">
                {STRUCTURE_MEMBERS.length} Pengurus Resmi STO
              </div>
            </div>
          </div>
        </div>

        {/* Division Pillars Quick Selector */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {DIVISION_PILLARS.map((pillar) => {
            const isActive = activeTab === pillar.category;
            return (
              <button
                key={pillar.title}
                type="button"
                onClick={() => setActiveTab(pillar.category)}
                className={`text-left rounded-[20px] p-4 border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#090D16] text-white border-[#090D16] shadow-lg'
                    : 'bg-white text-[#0F172A] border-black/[0.06] hover:border-[#0284C7]/40 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-[#C6F36B] text-[#0F172A] font-bold'
                        : 'bg-sky-50 text-[#0284C7] font-semibold'
                    }`}
                  >
                    {pillar.count}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 ${isActive ? 'text-[#C6F36B]' : 'text-slate-400'}`}
                  />
                </div>
                <h3 className="mt-3 font-display font-bold text-sm leading-snug">
                  {pillar.title}
                </h3>
                <p
                  className={`mt-1 text-xs leading-relaxed line-clamp-2 ${
                    isActive ? 'text-slate-300' : 'text-[#475569]'
                  }`}
                >
                  {pillar.focus}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {STRUCTURE_TABS.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-full px-4 py-2 font-mono text-[12px] font-semibold tracking-[0.04em] transition-colors cursor-pointer ${
                  active
                    ? 'text-[#0F172A]'
                    : 'text-[#475569] bg-white border border-black/[0.06] hover:text-[#0F172A]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="strukturActiveTab"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                    className="absolute inset-0 rounded-full bg-[#C6F36B] shadow-sm"
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Structure Cards Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.article
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer rounded-[24px] bg-white border border-black/[0.06] p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Cropped Portrait Showing Clean Head & Geometric Motif */}
                  <div className="relative aspect-[11/10] w-full overflow-hidden rounded-[18px] bg-slate-100">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      loading="lazy"
                      className="w-full h-auto max-w-none -translate-y-[26%] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[10px] font-bold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full shadow-sm ${
                          member.isHead
                            ? 'bg-[#C6F36B] text-[#0F172A]'
                            : 'bg-[#090D16]/80 backdrop-blur-md text-white'
                        }`}
                      >
                        {member.category}
                      </span>
                      <span className="h-7 w-7 rounded-full bg-white/90 text-[#0F172A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Role & Name */}
                  <div className="mt-4 px-1">
                    <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#0284C7]">
                      {member.role}
                    </div>
                    <h3 className="mt-1 font-display font-bold text-lg text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#475569] leading-relaxed line-clamp-2">
                      {member.focus}
                    </p>
                  </div>
                </div>

                {/* Tech / Focus Tags */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 px-1">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-medium uppercase tracking-[0.05em] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Full Roster when in Semua tab */}
        {activeTab === 'Semua' && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllInSemua((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#090D16] hover:text-white text-[#0F172A] border border-slate-300 font-mono text-xs font-semibold tracking-[0.06em] px-6 py-3 shadow-sm transition-colors cursor-pointer"
            >
              {showAllInSemua ? (
                <>
                  <span>RINGKAS TAMPILAN PENGURUS INTI</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>LIHAT SELURUH {STRUCTURE_MEMBERS.length} PENGURUS (2026/2027)</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Member Detail Modal (Official Full STO Poster Preview) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 8 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-white p-5 sm:p-7 shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
            >
              <button
                type="button"
                aria-label="Tutup Detail Pengurus"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#0F172A] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="rounded-[20px] overflow-hidden bg-slate-100 border border-slate-200 max-h-[440px]">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full bg-[#C6F36B] text-[#0F172A]">
                  {selectedMember.category}
                </span>
                <h3 className="mt-4 font-display font-bold text-2xl text-[#0F172A]">
                  {selectedMember.name}
                </h3>
                <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-[#0284C7]">
                  {selectedMember.role}
                </p>

                <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                  {selectedMember.focus}
                </p>

                <div className="mt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-400 mb-2">
                    Fokus & Kompetensi
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-slate-100 text-[#0F172A] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
