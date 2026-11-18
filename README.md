# UKM PCC (Polytechnic Computer Club) — Official Landing Page

> "Share Your Knowledge! — More Than a Student Organization."

Official, modern Single-Page Application (SPA) landing page for **UKM PCC (Polytechnic Computer Club)**, Politeknik Negeri Semarang. Built with React, TypeScript, Tailwind CSS, Lucide Icons, and Framer Motion following modern human-crafted design principles.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite 8
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Linter:** Oxlint

## 📂 Project Structure

```text
├── public/
│   └── assets/              # Cleaned & web-optimized assets (WebP/PNG)
│       ├── logo-pcc.webp
│       ├── hero/
│       ├── tentang/
│       ├── struktur/        # 56 active board & department portraits
│       ├── kegiatan/
│       └── galeri/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StructureSection.tsx
│   │   ├── ActivitiesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ArticleSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── JoinModal.tsx
│   ├── data/
│   │   └── pccData.ts       # Structured organization metadata & members
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── DESIGN.md                # Master Art Direction & Anti-AI-Slop Design System
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm / pnpm / yarn

### Installation & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Linting
npm run lint
```

## 📄 License

Copyright © 2026 UKM Polytechnic Computer Club (PCC) Polines. All rights reserved.
