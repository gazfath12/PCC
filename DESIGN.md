# UKM PCC Design System & Art Direction Specification (DESIGN.md)

## 1. Product Identity & Purpose
- **Organization:** UKM PCC (Polytechnic Computer Club), Politeknik Negeri Semarang.
- **Founded:** 14 August 1992.
- **Tagline:** *"Share Your Knowledge!"* & *"More Than a Student Organization."*
- **Audience:** Mahasiswa baru/aktif Polines, tech enthusiasts, peserta kompetisi nasional (Techcomfest), mitra industri, dan sivitas akademika.
- **Brand Character:** Professional, community-driven, technically rigorous, authentic, and modern.

---

## 2. Anti-AI-Slop Design Principles

### Strict Negative Rules (What We Prohibit):
1. **No generic purple/blue or AI-default pinkish gradient soup.**
   - Stick to authentic UKM PCC Blue (`#03418c`) anchored with `#022b60` and `#0d5fc2`, with purposeful `#C6F36B` (Electric Lime) reserved strictly for interactive highlights.
2. **No arbitrary floating/tilted decorative badges without context.**
   - Floating cards in the hero must be purposeful, or removed if they compete with readability.
3. **No excessive layered glassmorphism & heavy glow blur balls.**
   - Replace diffuse 120px blur circles with deliberate structural borders, solid background contrasts, and crisp subtle line grids.
4. **No cartoonish inline emoji/icon pills inserted randomly between header words.**
   - Keep editorial headlines clean, bold, and readable without gimmicky icon interruptions.
5. **No repetitive identical 3-column card templates across sections.**
   - Vary information architecture: Bento with clear scale contrast for About, timeline/agenda cards for Kegiatan, clean editorial layout for Articles, and searchable directory for Struktur.
6. **No over-animated scroll triggers or jarring parallax.**
   - Use motion sparingly: hover states, subtle layout morphs, and responsive drawers only. Respect `prefers-reduced-motion`.

---

## 3. Color Palette & Semantic Tokens

| Token | Hex | Role / Usage | Contrast Ratio |
|---|---|---|---|
| `--color-pcc-blue` | `#03418c` | Official Brand Blue — Hero canvas, key category badges, primary borders | 7.8:1 on white |
| `--color-pcc-blue-deep`| `#022b60` | Dark Navy Anchor — High-contrast hero header, dark card backgrounds | 12.1:1 on white |
| `--color-pcc-blue-light`| `#0d5fc2` | Accent Blue — Hover states, links, subheadings | 5.2:1 on white |
| `--color-canvas-light` | `#F8FAFC` | Clean Light Canvas for reading (About, Struktur, Kegiatan) | Base |
| `--color-surface-dark` | `#090D16` | Midnight Slate for dark feature panels & Articles section | Base |
| `--color-lime-pcc` | `#C6F36B` | Electric Lime — Primary Action Button (CTA), active status badge | 13.5:1 on `#090D16` |
| `--color-text-main` | `#0F172A` | Slate Ink — Main headings and primary reading copy on light | AAA accessible |
| `--color-text-muted` | `#475569` | Muted Body — Secondary text and descriptions | AA accessible |
| `--color-border-subtle`| `rgba(15, 23, 42, 0.08)` | Structural hairline borders | Crisp 1px |

---

## 4. Typography Scale

- **Display Font:** `Plus Jakarta Sans` (Bold/Extrabold, tracking `-0.03em`)
  - Hero H1: `clamp(2.25rem, 5vw, 3.75rem)`
  - Section H2: `clamp(1.85rem, 3.5vw, 2.75rem)`
  - Card H3: `1.25rem` – `1.5rem`
- **Body Font:** `Inter` (Regular 400 / Medium 500, line-height `1.6`)
  - Body Base: `1rem` (`16px`)
  - Body Small / Captions: `0.875rem` (`14px`)
- **Code / Monospace Font:** `JetBrains Mono` (Uppercase, tracking `0.08em`, font-weight 600, `11px` - `12px`)
  - Category tags, date badges, status chips.

---

## 5. Section-by-Section Refinements

1. **Hero Section (`#beranda`):**
   - Clean up floating tilted decorative cards on desktop so the typography and the 6 highlight showcase cards shine without visual noise.
   - Solid, deep PCC Blue (`#03418c`) gradient container with clear internal padding.
   - Clean floating navigation with solid backdrop and accessible contrast.
2. **About Section (`#tentang`):**
   - Remove inline icon badges in the headline. The headline must be strong, editorial, and legible.
   - 7-Layers PCC cards formatted in a clean, legible grid with responsive handling for word lengths (prevent "TRANSPARENT" text clipping).
   - Visi & Misi presented in an authoritative side-by-side card with clear structural typography.
3. **Structure Section (`#struktur`):**
   - Clean categorization tabs with smooth indicator.
   - Portrait aspect ratio fixed to avoid weird head cuts.
   - Clean modal for detail inspection without gratuitous blur.
4. **Activities Section (`#kegiatan`):**
   - 7 official events presented with date pills, clear descriptions, and badge category.
   - Techcomfest national flagship banner with genuine photo showcase.
5. **Article Section (`#artikel`):**
   - Balanced heights between featured article and side article list to eliminate awkward empty gaps.
6. **Footer Section:**
   - Accurate 1992 founding date, official contact `pccpolines92@gmail.com`, clean links to services.
