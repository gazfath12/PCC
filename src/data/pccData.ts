export type StructureCategory =
  | 'Semua'
  | 'BPH Inti'
  | 'Dept. Software'
  | 'Dept. Network'
  | 'Dept. Multimedia'
  | 'Litbang & Biro';

export interface StructureMember {
  id: string;
  name: string;
  role: string;
  category: Exclude<StructureCategory, 'Semua'>;
  subUnit?: string;
  focus: string;
  tags: string[];
  image: string;
  featured?: boolean;
  isHead?: boolean;
}

export interface HeroShowcaseCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image?: string;
  variant: 'photo' | 'stat';
  statValue?: string;
  statLabel?: string;
  accent: string;
}

export interface ActivityItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  schedule: string;
  image: string;
  highlights: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  snippet: string;
  link: string;
  readTime: string;
}

export type GalleryCategory = 'Semua' | 'Workshop' | 'Techcomfest' | 'Kebersamaan';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'Semua'>;
  date: string;
  division: string;
  description: string;
  image: string;
  spanClass: string;
}

export const NAV_LINKS = [
  { label: 'BERANDA', href: '#beranda' },
  { label: 'TENTANG PCC', href: '#tentang' },
  { label: 'STRUKTUR', href: '#struktur' },
  { label: 'KEGIATAN', href: '#kegiatan' },
  { label: 'GALERI', href: '#galeri' },
  { label: 'ARTIKEL', href: '#artikel' },
] as const;

export const TECH_STACK_MARQUEE = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Linux',
  'Cisco',
  'Docker',
  'Figma',
  'Blender',
  'Python',
  'TensorFlow',
  'Capture The Flag',
] as const;

export const HERO_CARDS: HeroShowcaseCard[] = [
  {
    id: 'software',
    tag: 'DEPT. SOFTWARE',
    title: 'Software Engineering',
    subtitle: 'Web, Mobile & AI Dev',
    image: '/assets/hero/hero-software.webp',
    variant: 'photo',
    accent: 'from-[#03418c]/90 to-slate-950/90',
  },
  {
    id: 'network',
    tag: 'DEPT. NETWORK',
    title: 'Network & Cyber Security',
    subtitle: 'Linux Server & CTF',
    image: '/assets/hero/hero-network.webp',
    variant: 'photo',
    accent: 'from-[#022b60]/90 to-slate-950/90',
  },
  {
    id: 'class',
    tag: 'STUDY CLUB',
    title: 'PCC Class & Mentoring',
    subtitle: 'Peer-to-Peer Learning',
    image: '/assets/hero/hero-class.webp',
    variant: 'photo',
    accent: 'from-[#0450ad]/90 to-slate-950/90',
  },
  {
    id: 'multimedia',
    tag: 'DEPT. MULTIMEDIA',
    title: 'Multimedia & UI/UX',
    subtitle: 'Design & 3D Motion',
    image: '/assets/hero/hero-multimedia.webp',
    variant: 'photo',
    accent: 'from-[#033675]/90 to-slate-950/90',
  },
  {
    id: 'techcomfest',
    tag: 'ANNUAL EVENT',
    title: 'Techcomfest 2026',
    subtitle: 'National IT Competition',
    image: '/assets/hero/hero-techcomfest.webp',
    variant: 'photo',
    accent: 'from-[#03418c]/90 to-slate-950/90',
  },
  {
    id: 'stat',
    tag: 'COMMUNITY IMPACT',
    title: '500+',
    subtitle: 'Alumni & Talenta Digital di Industri Teknologi',
    image: '/assets/hero/hero-community.webp',
    variant: 'stat',
    statValue: '500+',
    statLabel: 'Alumni & Talenta Digital',
    accent: 'from-[#090D16] to-[#0F172A]',
  },
];

export const ABOUT_AVATARS = [
  {
    name: 'Alfin Rozzaq',
    role: 'Administrator',
    image: '/assets/struktur/alfin-rozzaq-nirwana.webp',
  },
  {
    name: 'Aisy Tsabita',
    role: 'Sekretaris Umum',
    image: '/assets/struktur/aisy-tsabita-amru.webp',
  },
  {
    name: 'Riki Ulir Niam',
    role: 'Kepala Dept. Software',
    image: '/assets/struktur/riki-ulir-niam.webp',
  },
  {
    name: 'Dyo Langgeng',
    role: 'Kepala Dept. Network',
    image: '/assets/struktur/dyo-langgeng-saputra.webp',
  },
];

export const SEVEN_LAYERS_PCC = [
  {
    letter: 'R',
    word: 'RELIGIOUS',
    desc: 'Menjadikan nilai spiritual dan ketuhanan sebagai fondasi moral dan etika dalam setiap langkah organisasi.',
    color: 'border-blue-400/40 text-blue-200',
  },
  {
    letter: 'P',
    word: 'PASSION',
    desc: 'Antusiasme dan semangat mendalam untuk terus belajar, berkarya, dan menguasai teknologi baru.',
    color: 'border-emerald-400/40 text-emerald-200',
  },
  {
    letter: 'T',
    word: 'TRANSPARENT',
    desc: 'Keterbukaan, kejujuran, dan akuntabilitas dalam komunikasi, program kerja, dan tata kelola.',
    color: 'border-cyan-400/40 text-cyan-200',
  },
  {
    letter: 'S',
    word: 'SINERGY',
    desc: 'Kekuatan kolaborasi lintas departemen yang saling melengkapi untuk mencapai hasil eksponensial.',
    color: 'border-lime-400/40 text-[#C6F36B]',
  },
  {
    letter: 'C',
    word: 'CARE',
    desc: 'Kepedulian terhadap sesama anggota, kemajuan sivitas akademika, dan kontribusi nyata ke masyarakat.',
    color: 'border-amber-400/40 text-amber-200',
  },
  {
    letter: 'R',
    word: 'RESPECT',
    desc: 'Saling menghargai perbedaan pandangan, menjunjung etika berpendapat, dan menjaga martabat bersama.',
    color: 'border-sky-400/40 text-sky-200',
  },
  {
    letter: 'F',
    word: 'FOCUS',
    desc: 'Ketajaman orientasi pada tujuan, komitmen menyelesaikan proyek hingga tuntas, dan integritas tinggi.',
    color: 'border-indigo-400/40 text-indigo-200',
  },
];

export const VISI_MISI_PCC = {
  visi: 'Menjadikan UKM PCC sebagai wadah yang inovatif, adaptif, solutif, serta mengamalkan 7-Layers PCC sebagai landasan berorganisasi.',
  misi: [
    'Menerapkan 7-Layers PCC dalam diri tiap anggota dalam setiap langkah.',
    'Membentuk SDM yang kritis dan inovatif, serta dapat menyelesaikan masalah secara efektif.',
    'Mengembangkan pengetahuan dan portofolio dalam bidang teknologi informasi dan komputer.',
    'Menanamkan jiwa loyalitas dan integritas dalam tiap anggota.',
  ],
};

export const STRUCTURE_TABS: StructureCategory[] = [
  'Semua',
  'BPH Inti',
  'Dept. Software',
  'Dept. Network',
  'Dept. Multimedia',
  'Litbang & Biro',
];

export const DIVISION_PILLARS = [
  {
    title: 'Administrator & BPH Inti',
    category: 'BPH Inti' as const,
    focus: 'Strategic Leadership, Tata Kelola Administrasi & Keuangan Organisasi',
    count: '8 Pengurus',
  },
  {
    title: 'Departemen Software',
    category: 'Dept. Software' as const,
    focus: 'Full-Stack Web, Mobile Apps, AI Engineering & Competitive Programming',
    count: '4 Pengurus',
  },
  {
    title: 'Departemen Network',
    category: 'Dept. Network' as const,
    focus: 'Network Infrastructure, System Administration, Cloud & Cyber Security',
    count: '4 Pengurus',
  },
  {
    title: 'Departemen Multimedia',
    category: 'Dept. Multimedia' as const,
    focus: 'UI/UX Design, Graphic Design, Video Production & 3D Motion',
    count: '4 Pengurus',
  },
  {
    title: 'Litbang & Divisi Biro',
    category: 'Litbang & Biro' as const,
    focus: 'Riset Teknologi, Workshop, HRD, Humas, Redaksi & Kerumahtanggaan',
    count: '34 Pengurus',
  },
];

export const STRUCTURE_MEMBERS: StructureMember[] = [
  // BPH INTI
  {
    id: 'alfin-rozzaq',
    name: 'Alfin Rozzaq Nirwana',
    role: 'Administrator (Ketua Umum)',
    category: 'BPH Inti',
    focus: 'Strategic Leadership, External Relations & Organization Vision',
    tags: ['Leadership', 'Governance', 'Partnership'],
    image: '/assets/struktur/alfin-rozzaq-nirwana.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'aisy-tsabita',
    name: 'Aisy Tsabita Amru',
    role: 'Sekretaris Umum',
    category: 'BPH Inti',
    focus: 'Administration, Policy Coordination & Organizational Records',
    tags: ['Governance', 'Documentation', 'SOP'],
    image: '/assets/struktur/aisy-tsabita-amru.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'riztika-merista',
    name: 'Riztika Merista Indriani',
    role: 'Sekretaris 1',
    category: 'BPH Inti',
    focus: 'Internal Scheduling, Archiving & Legal Letters',
    tags: ['Scheduling', 'Secretariat', 'Compliance'],
    image: '/assets/struktur/riztika-merista-indriani.webp',
    featured: true,
  },
  {
    id: 'fanisa-rahmania',
    name: 'Fanisa Rahmania Hardiani',
    role: 'Sekretaris 2',
    category: 'BPH Inti',
    focus: 'Correspondence, Meeting Minutes & Event Proposals',
    tags: ['Administration', 'Proposal', 'Archive'],
    image: '/assets/struktur/fanisa-rahmania-hardiani.webp',
    featured: true,
  },
  {
    id: 'xeny-octavia',
    name: 'Xeny Octavia Anggrainy',
    role: 'Sekretaris 3',
    category: 'BPH Inti',
    focus: 'Member Database & Program Administration',
    tags: ['Database', 'Docs', 'Coordination'],
    image: '/assets/struktur/xeny-octavia-anggrainy.webp',
    featured: true,
  },
  {
    id: 'ajrina-eka',
    name: 'Ajrina Eka Putri',
    role: 'Bendahara 1',
    category: 'BPH Inti',
    focus: 'Financial Planning, Budgeting & Transparency Reporting',
    tags: ['Finance', 'Budgeting', 'Audit'],
    image: '/assets/struktur/ajrina-eka-putri.webp',
    featured: true,
  },
  {
    id: 'benayya-nohan',
    name: 'Benayya Nohan Admiraldo',
    role: 'Bendahara 2',
    category: 'BPH Inti',
    focus: 'Event Cashflow, Sponsorship Administration & Treasury',
    tags: ['Treasury', 'Sponsorship', 'Reporting'],
    image: '/assets/struktur/benayya-nohan-admiraldo.webp',
  },
  {
    id: 'hilwa-azka',
    name: 'Hilwa Azka Amalia Kukuh',
    role: 'Bendahara 3',
    category: 'BPH Inti',
    focus: 'Operational Budgeting & Inventory Financial Control',
    tags: ['Accounting', 'Operations', 'Control'],
    image: '/assets/struktur/hilwa-azka-amalia-kukuh.webp',
  },

  // DEPT. SOFTWARE
  {
    id: 'riki-ulir',
    name: 'Riki Ulir Niam',
    role: 'Kepala Dept. Software',
    category: 'Dept. Software',
    focus: 'Full-Stack Web, Mobile Apps, AI Engineering & Software Architecture',
    tags: ['React', 'Next.js', 'System Design'],
    image: '/assets/struktur/riki-ulir-niam.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'labib-fauzi',
    name: 'Labib Fauzi Khoirul Anam',
    role: 'Staff Dept. Software',
    category: 'Dept. Software',
    focus: 'Frontend Engineering, TypeScript & Interactive Web Applications',
    tags: ['TypeScript', 'React', 'Tailwind'],
    image: '/assets/struktur/labib-fauzi-khoirul-anam.webp',
    featured: true,
  },
  {
    id: 'bahrul-qolbi',
    name: 'Muhammad Bahrul Qolbi Shufi',
    role: 'Staff Dept. Software',
    category: 'Dept. Software',
    focus: 'Backend APIs, Database Engineering & Cloud Deployment',
    tags: ['Node.js', 'PostgreSQL', 'REST API'],
    image: '/assets/struktur/muhammad-bahrul-qolbi-shufi.webp',
  },
  {
    id: 'shafira-hasna',
    name: 'Shafira Hasna Fauzi',
    role: 'Staff Dept. Software',
    category: 'Dept. Software',
    focus: 'Web Development, AI/ML Exploration & Study Club Mentor',
    tags: ['Python', 'Web Dev', 'Mentoring'],
    image: '/assets/struktur/shafira-hasna-fauzi.webp',
  },

  // DEPT. NETWORK
  {
    id: 'dyo-langgeng',
    name: 'Dyo Langgeng Saputra',
    role: 'Kepala Dept. Network',
    category: 'Dept. Network',
    focus: 'Network Infrastructure, System Administration, Cloud & Cyber Security',
    tags: ['Linux', 'Cisco', 'Cyber Security'],
    image: '/assets/struktur/dyo-langgeng-saputra.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'ahmad-aidan',
    name: 'Ahmad Aidan Novetra',
    role: 'Staff Dept. Network',
    category: 'Dept. Network',
    focus: 'Linux Web Server, Containerization & Network Routing',
    tags: ['Debian', 'Docker', 'Nginx'],
    image: '/assets/struktur/ahmad-aidan-novetra.webp',
    featured: true,
  },
  {
    id: 'ramzi-roif',
    name: "Muhammad Ramzi Ro'if",
    role: 'Staff Dept. Network',
    category: 'Dept. Network',
    focus: 'Capture The Flag (CTF), Penetration Testing & Server Hardening',
    tags: ['CTF', 'Security', 'SysAdmin'],
    image: '/assets/struktur/muhammad-ramzi-ro-if.webp',
  },
  {
    id: 'mukhlish-pratama',
    name: 'Mukhlish Pratama Mulya',
    role: 'Staff Dept. Network',
    category: 'Dept. Network',
    focus: 'Routing & Switching, Cloud Lab & Technical Workshop',
    tags: ['MikroTik', 'Routing', 'Cloud'],
    image: '/assets/struktur/mukhlish-pratama-mulya.webp',
  },

  // DEPT. MULTIMEDIA
  {
    id: 'rhafi-hairy',
    name: 'Muhammad Rhafi Hairy Muslim',
    role: 'Kepala Dept. Multimedia',
    category: 'Dept. Multimedia',
    focus: 'UI/UX Design, Brand Identity, Video Production & 3D Animation',
    tags: ['Figma', 'Blender', 'Creative Dir.'],
    image: '/assets/struktur/muhammad-rhafi-hairy-muslim.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'ahmad-adi',
    name: 'Ahmad Adi Nugroho',
    role: 'Staff Dept. Multimedia',
    category: 'Dept. Multimedia',
    focus: 'Graphic Design, Visual Branding & Event Media',
    tags: ['Illustrator', 'Photoshop', 'Branding'],
    image: '/assets/struktur/ahmad-adi-nugroho.webp',
    featured: true,
  },
  {
    id: 'fajril-falah',
    name: 'Ahmad Fajril Falah',
    role: 'Staff Dept. Multimedia',
    category: 'Dept. Multimedia',
    focus: 'Motion Graphics, Video Editing & After Effects',
    tags: ['Motion', 'Premiere', '3D'],
    image: '/assets/struktur/ahmad-fajril-falah.webp',
  },
  {
    id: 'radhit-ulumudin',
    name: 'M. Radhit Ulumudin',
    role: 'Staff Dept. Multimedia',
    category: 'Dept. Multimedia',
    focus: 'UI/UX Prototyping, Design System & Interactive Media',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    image: '/assets/struktur/m-radhit-ulumudin.webp',
  },

  // LITBANG & BIRO
  {
    id: 'abimanyu-gilar',
    name: 'Abimanyu Gilar Waluyo',
    role: 'Kepala Divisi Workshop',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Workshop',
    focus: 'Kurikulum Pelatihan Teknis, Training Basic & PCC Class Execution',
    tags: ['Workshop', 'Curriculum', 'Mentoring'],
    image: '/assets/struktur/abimanyu-gilar-waluyo.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'vanesa-mutiara',
    name: 'Vanesa Mutiara A.N',
    role: 'Kepala Divisi HRD',
    category: 'Litbang & Biro',
    subUnit: 'Divisi HRD',
    focus: 'Human Resource Development, Kaderisasi & Upgrading Pengurus',
    tags: ['HRD', 'Kaderisasi', 'Culture'],
    image: '/assets/struktur/vanesa-mutiara-a-n.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'gianita-anargya',
    name: 'Gianita Anargya Putri',
    role: 'Kepala Divisi Humas',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Humas',
    focus: 'Public Relations, Kemitraan Eksternal & Goes To Public',
    tags: ['Public Relations', 'Partnership', 'Outreach'],
    image: '/assets/struktur/gianita-anargya-putri.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'audy-rahmania',
    name: 'Audy Rahmania Wahyu Aji',
    role: 'Kepala Divisi Redaksi',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Redaksi',
    focus: 'Media Informasi, Dokumentasi Visual & Publikasi Digital PCC',
    tags: ['Editorial', 'Social Media', 'Journalism'],
    image: '/assets/struktur/audy-rahmania-wahyu-aji.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'pranaja-luthfi',
    name: 'Pranaja Luthfi Belian',
    role: 'Kepala Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Kerumahtanggaan, Maintenance Lab PKM & Inventaris Perangkat',
    tags: ['Maintenance', 'Infrastructure', 'Lab Ops'],
    image: '/assets/struktur/pranaja-luthfi-belian.webp',
    featured: true,
    isHead: true,
  },
  {
    id: 'akbar-hakim',
    name: 'Akbar Hakim Muzaky',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Penelitian & Pengembangan Organisasi serta Inovasi Program Kerja',
    tags: ['Research', 'Analytics', 'Innovation'],
    image: '/assets/struktur/akbar-hakim-muzaky.webp',
    featured: true,
  },
  {
    id: 'dwy-noor',
    name: 'Dwy Noor Fatimah',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Evaluasi Program Kerja & Riset Kepuasan Anggota',
    tags: ['Evaluation', 'Survey', 'Quality'],
    image: '/assets/struktur/dwy-noor-fatimah.webp',
  },
  {
    id: 'feby-yuanggi',
    name: 'Feby Yuanggi Putri',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Pengembangan Standar Mutu & Data Organisasi',
    tags: ['Data', 'QA', 'Strategy'],
    image: '/assets/struktur/feby-yuanggi-putri.webp',
  },
  {
    id: 'hafizh-iman',
    name: 'Hafizh Iman Wicaksono',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Riset Teknologi Terkini & Evaluasi Kurikulum Pelatihan',
    tags: ['Tech Research', 'Curriculum', 'Audit'],
    image: '/assets/struktur/hafizh-iman-wicaksono.webp',
  },
  {
    id: 'ika-fuji',
    name: 'Ika Fuji Astuti',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Monitoring Kinerja Biro & Pengembangan SDM',
    tags: ['Monitoring', 'KPI', 'Development'],
    image: '/assets/struktur/ika-fuji-astuti.webp',
  },
  {
    id: 'ihsan-naufal',
    name: 'Muhammad Ihsan Naufal',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Inovasi Riset Internal & Pemetaan Kompetensi Anggota',
    tags: ['Mapping', 'Research', 'Tech'],
    image: '/assets/struktur/muhammad-ihsan-naufal.webp',
  },
  {
    id: 'ilham-rijal',
    name: 'Muhammad Ilham Rijal Thaariq',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Analisis Data Partisipasi & Strategi Pertumbuhan UKM',
    tags: ['Analytics', 'Growth', 'Strategy'],
    image: '/assets/struktur/muhammad-ilham-rijal-thaariq.webp',
  },
  {
    id: 'wahyu-prasetyo',
    name: 'Wahyu Prasetyo Wibowo',
    role: 'Tim Litbang',
    category: 'Litbang & Biro',
    subUnit: 'Litbang',
    focus: 'Riset Kebutuhan Industri & Benchmarking Komunitas IT',
    tags: ['Benchmarking', 'Industry', 'Research'],
    image: '/assets/struktur/wahyu-prasetyo-wibowo.webp',
  },
  // Workshop staff
  {
    id: 'aji-mirza',
    name: 'Dimas Aji Mirza Hakim',
    role: 'Staff Divisi Workshop',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Workshop',
    focus: 'Penyelenggaraan PCC Class & Koordinasi Mentor',
    tags: ['Workshop', 'Event Ops', 'Training'],
    image: '/assets/struktur/dimas-aji-mirza-hakim.webp',
  },
  {
    id: 'kurnia-angga',
    name: 'Kurnia Angga Dimas Pratama',
    role: 'Staff Divisi Workshop',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Workshop',
    focus: 'Silabus Training Basic & Logistik Kelas Praktikum',
    tags: ['Training', 'Logistics', 'Mentoring'],
    image: '/assets/struktur/kurnia-angga-dimas-pratama.webp',
  },
  {
    id: 'ziddan-arrahman',
    name: 'Muhammad Ziddan Arrahman',
    role: 'Staff Divisi Workshop',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Workshop',
    focus: 'Koordinasi Materi Lintas Departemen & Evaluasi Peserta',
    tags: ['Class Ops', 'Support', 'Workshop'],
    image: '/assets/struktur/muhammad-ziddan-arrahman.webp',
  },
  {
    id: 'rafif-ali',
    name: 'Rafif Ali Fahrezi',
    role: 'Staff Divisi Workshop',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Workshop',
    focus: 'Fasilitator Bootcamp & Dokumentasi Modul Belajar',
    tags: ['Bootcamp', 'Modul', 'Facilitator'],
    image: '/assets/struktur/rafif-ali-fahrezi.webp',
  },
  {
    id: 'rahmatul-laila',
    name: 'Rahmatul Laila Nuur Arifah',
    role: 'Staff Divisi Workshop',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Workshop',
    focus: 'Administrasi Sertifikat & Registrasi Peserta Kelas',
    tags: ['Registration', 'Admin', 'Workshop'],
    image: '/assets/struktur/rahmatul-laila-nuur-arifah.webp',
  },
  // HRD staff
  {
    id: 'chelsea-bunga',
    name: 'Chelsea Bunga M.',
    role: 'Staff Divisi HRD',
    category: 'Litbang & Biro',
    subUnit: 'Divisi HRD',
    focus: 'Rekrutmen Anggota Baru & Internal Bonding',
    tags: ['Recruitment', 'Bonding', 'HRD'],
    image: '/assets/struktur/chelsa-bunga-m.webp',
  },
  {
    id: 'mikhael-surya',
    name: 'Mikhael Surya Adeputra',
    role: 'Staff Divisi HRD',
    category: 'Litbang & Biro',
    subUnit: 'Divisi HRD',
    focus: 'Program Magang Departemen & Pengembangan Soft Skill',
    tags: ['Internship', 'Soft Skill', 'HRD'],
    image: '/assets/struktur/mikhael-surya-adeputra.webp',
  },
  {
    id: 'noverico-dafa',
    name: 'Noverico Dafa Putra Setiawan',
    role: 'Staff Divisi HRD',
    category: 'Litbang & Biro',
    subUnit: 'Divisi HRD',
    focus: 'Penilaian Kinerja Pengurus & Regenerasi Kepemimpinan',
    tags: ['Regeneration', 'Assessment', 'HRD'],
    image: '/assets/struktur/noverico-dafa-putra-setiawan.webp',
  },
  {
    id: 'sevia-sentra',
    name: 'Sevia Sentra Hati',
    role: 'Staff Divisi HRD',
    category: 'Litbang & Biro',
    subUnit: 'Divisi HRD',
    focus: 'Pendampingan Anggota Muda & Well-being Komunitas',
    tags: ['Community', 'Onboarding', 'HRD'],
    image: '/assets/struktur/sevia-sentra-hati.webp',
  },
  // Humas staff
  {
    id: 'ivan-priya',
    name: 'Ivan Priya Janitra',
    role: 'Staff Divisi Humas',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Humas',
    focus: 'Relasi Eksternal, Studi Banding & Kunjungan Industri',
    tags: ['External', 'Industry Visit', 'PR'],
    image: '/assets/struktur/ivan-priya-janitra.webp',
  },
  {
    id: 'najwa-frizky',
    name: 'Najwa Frizky Aulia',
    role: 'Staff Divisi Humas',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Humas',
    focus: 'Media Partner Techcomfest & Komunikasi Sekolah Mitra',
    tags: ['Media Partner', 'Outreach', 'Humas'],
    image: '/assets/struktur/najwa-frizky-aulia.webp',
  },
  // Redaksi staff
  {
    id: 'maisarrah-k',
    name: 'Maisarrah Khairunnisa Az-Zahra',
    role: 'Staff Divisi Redaksi',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Redaksi',
    focus: 'Copywriting, Editorial Artikel & Manajemen Konten',
    tags: ['Copywriting', 'Content', 'Editorial'],
    image: '/assets/struktur/maisarrah-khairunnisa-az-zahra.webp',
  },
  {
    id: 'nazriel-farras',
    name: 'Nazriel Farras Khairiya P.S.',
    role: 'Staff Divisi Redaksi',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Redaksi',
    focus: 'Fotografi Dokumentasi Event & Liputan Kegiatan',
    tags: ['Photography', 'Coverage', 'Media'],
    image: '/assets/struktur/nazriel-farras-khairiya-putra-sisworo.webp',
  },
  {
    id: 'salma-cahyaningtyas',
    name: 'Salma Cahyaningtyas',
    role: 'Staff Divisi Redaksi',
    category: 'Litbang & Biro',
    subUnit: 'Divisi Redaksi',
    focus: 'Desain Feed Publikasi & Storytelling Komunitas',
    tags: ['Social Media', 'Visual', 'Storytelling'],
    image: '/assets/struktur/salma-cahyaningtyas.webp',
  },
  // KRT staff
  {
    id: 'mita-aulya',
    name: 'Mita Aulya Mustafa',
    role: 'Staff Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Tata Kelola Sekretariat PKM & Inventaris Harian',
    tags: ['Inventory', 'Secretariat', 'KRT'],
    image: '/assets/struktur/mita-aulya-mustafa.webp',
  },
  {
    id: 'dzaky-afani',
    name: 'Muhammad Dzaky Afani',
    role: 'Staff Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Maintenance Perangkat Keras & Kesiapan Lab',
    tags: ['Hardware', 'Maintenance', 'Lab'],
    image: '/assets/struktur/muhammad-dzaky-afani.webp',
  },
  {
    id: 'faiq-audah',
    name: 'Muhammad Faiq Audah',
    role: 'Staff Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Pengelolaan Logistik & Peralatan Event Organisasi',
    tags: ['Logistics', 'Equipment', 'Support'],
    image: '/assets/struktur/muhammad-faiq-audah.webp',
  },
  {
    id: 'nur-aini',
    name: 'Nur Aini Immawati',
    role: 'Staff Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Kebersihan, Kenyamanan Ruang & Pengadaan Perlengkapan',
    tags: ['Facility', 'Procurement', 'KRT'],
    image: '/assets/struktur/nur-aini-immawati.webp',
  },
  {
    id: 'satrio-adzi',
    name: 'Satrio Adzi Priambodo',
    role: 'Staff Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Pemeliharaan Jaringan Lokal & Aset Elektronik PCC',
    tags: ['Assets', 'Network Ops', 'KRT'],
    image: '/assets/struktur/satrio-adzi-priambodo.webp',
  },
  {
    id: 'suci-aulia',
    name: 'Suci Aulia Putri',
    role: 'Staff Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Dokumentasi Inventaris & Peminjaman Barang',
    tags: ['Inventory', 'Records', 'KRT'],
    image: '/assets/struktur/suci-aulia-putri.webp',
  },
  {
    id: 'ulfan-nayaka',
    name: 'Ulfan Nayaka Dipta',
    role: 'Staff Divisi KRT',
    category: 'Litbang & Biro',
    subUnit: 'Divisi KRT',
    focus: 'Dukungan Teknis Ruangan & Logistik Kegiatan',
    tags: ['Tech Support', 'Logistics', 'KRT'],
    image: '/assets/struktur/ulfan-nayaka-dipta.webp',
  },
];

export const TECHCOMFEST_HIGHLIGHT = {
  badge: 'ANNUAL FLAGSHIP EVENT',
  title: 'TECHCOMFEST (Technology Computer Festival)',
  description:
    'Kompetisi dan pameran teknologi informasi tingkat nasional tahunan yang mempertemukan ratusan pelajar dan mahasiswa terbaik se-Indonesia dalam bidang Web App, Capture The Flag (CTF), UI/UX Design, dan Seminar Nasional AI.',
  image: '/assets/kegiatan/techcomfest.webp',
  stats: [
    { label: 'Cabang Lomba Nasional', value: 'Web App • CTF • UI/UX' },
    { label: 'Seminar Nasional 2026', value: 'From Zero to AI Hero' },
    { label: 'Skala Peserta', value: 'Nasional (SMA/SMK & Mahasiswa)' },
  ],
  flashbackPhotos: [
    {
      title: 'Awarding Capture The Flag Techcomfest 2026',
      caption: 'Penyerahan penghargaan Best Write Up & Best Team Work CTF di panggung utama.',
      image: '/assets/galeri/galeri-1.webp',
    },
    {
      title: 'Seminar Nasional Techcomfest 2026',
      caption: 'Sesi inspiratif "From Zero to AI Hero" bersama praktisi Data & AI Engineer.',
      image: '/assets/galeri/galeri-2.webp',
    },
    {
      title: 'Panitia Pelaksana Techcomfest 2026',
      caption: 'Kolaborasi lintas departemen dan divisi UKM PCC mensukseskan perhelatan nasional.',
      image: '/assets/galeri/galeri-3.webp',
    },
  ],
};

export const OFFICIAL_ACTIVITIES = [
  {
    date: '18 April 2026',
    title: 'Farewell Party',
    category: 'Internal Event',
    desc: 'Farewell Party adalah acara perpisahan pengurus UKM PCC Polines untuk mengapresiasi dedikasi dan kinerja pengurus selama satu periode kepengurusan.',
    image: '/assets/galeri/galeri-9.webp',
  },
  {
    date: '11 Februari 2026',
    title: 'Goes To Public (GTP)',
    category: 'Pengabdian Masyarakat',
    desc: 'Kegiatan yang diselenggarakan PCC untuk pengabdian masyarakat, literasi digital siswa SMA/SMK mitra, serta bakti sosial PCC Mengabdi.',
    image: '/assets/kegiatan/kunjungan.webp',
  },
  {
    date: '07 Maret 2026',
    title: 'PCC Class & Study Club',
    category: 'Edukasi IT',
    desc: 'Salah satu program kerja unggulan UKM PCC yang bertujuan untuk berbagi ilmu pengetahuan praktis seputar IT kepada mahasiswa Politeknik Negeri Semarang.',
    image: '/assets/kegiatan/workshop.webp',
  },
  {
    date: '26 Juli 2026',
    title: 'Rapat Kerja (Raker)',
    category: 'Internal BPH',
    desc: 'Proker PCC yang bertujuan untuk membahas, merumuskan, dan merencanakan seluruh program kerja UKM PCC selama satu periode kepengurusan.',
    image: '/assets/tentang/about-team.webp',
  },
  {
    date: '12 April 2026',
    title: 'Regenerasi (Regen)',
    category: 'Demokrasi Kampus',
    desc: 'Proses pemilihan umum demokratis yang dilakukan oleh seluruh anggota dan pengurus UKM PCC untuk memilih ketua umum dan suksesi kepengurusan.',
    image: '/assets/galeri/galeri-8.webp',
  },
  {
    date: '25 Juli 2026',
    title: 'Sidang Umum (Sidum)',
    category: 'Konstitusi Organisasi',
    desc: 'Persidangan tertinggi yang dilaksanakan oleh pengurus PCC guna membahas serta menetapkan AD/ART dan aturan organisasi secara mufakat bersama.',
    image: '/assets/galeri/galeri-7.webp',
  },
  {
    date: '20 Januari 2026',
    title: 'Techcomfest (Technology Computer Festival)',
    category: 'Event Nasional',
    desc: 'Wujud misi dan peran aktif UKM PCC dalam mengikuti perkembangan industri IT nasional melalui lomba Web App, CTF, UI/UX, dan Seminar Nasional.',
    image: '/assets/kegiatan/techcomfest.webp',
  },
];

export const REGULAR_ACTIVITIES: ActivityItem[] = [
  {
    id: 'study-club',
    badge: 'WEEKLY MENTORING',
    title: 'PCC Class & Workshop Rutin',
    subtitle: 'Software • Network • Multimedia',
    description:
      'Kelas intensif berkala bersama mentor departemen Software, Network, dan Multimedia—dari arsitektur web modern, server Linux Debian, hingga desain UI/UX di Figma.',
    schedule: '07 Maret 2026 & Mingguan • Gedung Kuliah Terpadu',
    image: '/assets/kegiatan/workshop.webp',
    highlights: ['Live Coding & Hands-on Lab', 'Peer Mentoring Lintas Angkatan', 'Real Project Portfolio'],
  },
  {
    id: 'training-basic',
    badge: 'ONBOARDING CURRICULUM',
    title: 'Training Basic & Pelatihan Anggota Baru',
    subtitle: 'Fueling Curiosity, Creating Technology',
    description:
      'Kurikulum fondasi pemrograman, administrasi jaringan, dan desain kreatif bagi anggota muda agar siap berkolaborasi dalam proyek nyata.',
    schedule: 'Semester Ganjil • Lab & Ruang Kelas Polines',
    image: '/assets/kegiatan/training-basic.webp',
    highlights: ['3 Jalur Keilmuan Dasar', 'Studi Kasus Praktis', 'Sertifikasi Internal'],
  },
  {
    id: 'goes-to-public',
    badge: 'COMMUNITY OUTREACH',
    title: 'Goes To Public & PCC Mengabdi',
    subtitle: 'Empowering Digital Literacy',
    description:
      'Eksplorasi langsung serta pelatihan teknologi untuk siswa SMA/SMK mitra di Semarang dan kontribusi literasi digital serta aksi sosial bagi masyarakat.',
    schedule: '11 Februari 2026 • Sekolah Mitra & Panti Sosial',
    image: '/assets/kegiatan/kunjungan.webp',
    highlights: ['Pelatihan Lab Komputer Sekolah', 'Sharing Pengalaman Industri', 'Bakti Sosial PCC Mengabdi'],
  },
];

export const PCC_ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'Menelusuri Kata "Bug" dari Serangga Nyata Hingga Era Pemrograman Modern',
    category: 'Edukasi',
    date: '18 November 2026',
    author: 'Divisi Workshop',
    snippet:
      'Dalam dunia teknologi dan pengembangan perangkat lunak, kata "bug" sudah menjadi bagian dari kosakata sehari-hari. Setiap kali sebuah program mengalami galat tak terduga, kita menyematkan istilah bersejarah ini...',
    link: 'https://www.ukmpcc.org/article/menelusuri-kata-bug-dari-serangga-nyata-hingga-era-pemrograman-modern-1794980405598',
    readTime: '4 min baca',
  },
  {
    id: 'art-2',
    title: "You Can't Change What You Don't Control",
    category: 'Refleksi & Karir',
    date: '26 Juli 2026',
    author: 'Departemen Software',
    snippet:
      'There is a unique kind of weight that comes with carrying big ambitions while learning to let go. Deep into the quiet hours of the night in Semarang, we navigate architecture, expectations, and growth...',
    link: 'https://www.ukmpcc.org/article/you-can-t-change-what-you-don-t-control-1786718614480',
    readTime: '5 min baca',
  },
  {
    id: 'art-3',
    title: 'Maybe, The Universe Waking Up to Itself',
    category: 'Opini & Tech',
    date: '25 Juli 2026',
    author: 'Departemen Software',
    snippet:
      'Hello, World. Sejauh mana baris-baris kode dan kecerdasan buatan membantu manusia mengenali kapasitas kognitifnya sendiri dalam mengeksplorasi batas masa depan digital...',
    link: 'https://www.ukmpcc.org/article/maybe-the-universe-waking-up-to-itself-1786718634819',
    readTime: '3 min baca',
  },
  {
    id: 'art-4',
    title: 'Ramai Dugaan Penyadapan Presiden Prabowo, Begini Alur Kerja LIMS',
    category: 'Cyber Security',
    date: '18 November 2026',
    author: 'Divisi Workshop',
    snippet:
      'Bagaimana percakapan telepon bisa sampai ke pihak lain tanpa ponselnya dipasangi aplikasi mata-mata? Pertanyaan ini mengemuka setelah LIMS disebut dalam analisis intercept jaringan telekomunikasi...',
    link: 'https://www.ukmpcc.org/article/ramai-dugaan-penyadapan-presiden-prabowo-begini-alur-kerja-lims-1794989048285',
    readTime: '6 min baca',
  },
  {
    id: 'art-5',
    title: 'Menguak 7 Elemen "UX Honeycomb": Kunci Utama Bikin Pengguna Betah dan Bisnis Untung',
    category: 'UI/UX Design',
    date: '18 November 2026',
    author: 'Divisi Workshop',
    snippet:
      'Pernahkah Anda merasa heran mengapa ada aplikasi dengan tampilan sederhana tetapi memiliki pengguna yang sangat loyal? Peter Morville merumuskan 7 prinsip kunci UX Honeycomb yang aplikatif...',
    link: 'https://www.ukmpcc.org/article/menguak-7-elemen-ux-honeycomb-kunci-utama-bikin-pengguna-betah-dan-bisnis-untung-1794977204772',
    readTime: '5 min baca',
  },
];

export const GALLERY_TABS: GalleryCategory[] = ['Semua', 'Workshop', 'Techcomfest', 'Kebersamaan'];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Awarding Capture The Flag Techcomfest 2026',
    category: 'Techcomfest',
    date: '20 Januari 2026',
    division: 'Techcomfest • CTF',
    description:
      'Momen penganugerahan kategori Best Write Up dan Best Team Work Capture The Flag pada puncak acara Technology Computer Festival 2026.',
    image: '/assets/galeri/galeri-1.webp',
    spanClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'g2',
    title: 'Seminar Nasional AI: From Zero to AI Hero',
    category: 'Techcomfest',
    date: '20 Januari 2026',
    division: 'Techcomfest • Seminar',
    description:
      'Diskusi interaktif mengenai karier Data & AI Engineering bersama pembicara industri dan ratusan peserta mahasiswa serta pelajar.',
    image: '/assets/galeri/galeri-2.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g4',
    title: 'PCC Class Network: Linux & Web Server',
    category: 'Workshop',
    date: 'Periode 2025/2026',
    division: 'Dept. Network',
    description:
      'Kelas praktik konfigurasi Linux Debian Web Server dan infrastruktur jaringan yang dipandu langsung oleh Departemen Network.',
    image: '/assets/galeri/galeri-4.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g5',
    title: 'PCC Class UI/UX: Designing PCC Merch Store',
    category: 'Workshop',
    date: 'Periode 2025/2026',
    division: 'Dept. Multimedia',
    description:
      'Sesi perancangan antarmuka e-commerce high-fidelity menggunakan Figma dalam kelas rutin Departemen Multimedia.',
    image: '/assets/galeri/galeri-5.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g6',
    title: 'Eksplorasi & Coding Session Software',
    category: 'Workshop',
    date: 'Periode 2025/2026',
    division: 'Dept. Software',
    description:
      'Peserta fokus membangun aplikasi web dan memecahkan tantangan logika pemrograman secara kolaboratif.',
    image: '/assets/galeri/galeri-6.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g7',
    title: 'Sidang Umum UKM PCC 2026/2027',
    category: 'Kebersamaan',
    date: '25 Juli 2026',
    division: 'Pengurus 2026/2027',
    description:
      'Forum tertinggi musyawarah organisasi bertema "Building the Rules, Shaping the Future" di Gedung Kuliah Terpadu Polines.',
    image: '/assets/galeri/galeri-7.webp',
    spanClass: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'g8',
    title: 'Regenerasi UKM PCC 2026 — Passing the Torch',
    category: 'Kebersamaan',
    date: '12 April 2026',
    division: 'HRD & BPH',
    description:
      'Estafet kepemimpinan UKM PCC dengan semangat "Innovating Growth for a Better Tomorrow" bersama seluruh kader aktif.',
    image: '/assets/galeri/galeri-8.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g3',
    title: 'Panitia Pelaksana Techcomfest 2026',
    category: 'Techcomfest',
    date: 'Januari 2026',
    division: 'All Divisions',
    description:
      'Foto bersama seluruh panitia UKM PCC yang mengawal jalannya kompetisi nasional dan seminar Techcomfest 2026.',
    image: '/assets/galeri/galeri-3.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g10',
    title: 'Goes To Public 2026 — Literasi Digital Pelajar',
    category: 'Kebersamaan',
    date: '11 Februari 2026',
    division: 'Humas & Pengajar',
    description:
      'Pendampingan praktik komputer dan literasi digital bagi siswa SMA/SMK mitra di laboratorium komputer.',
    image: '/assets/galeri/galeri-10.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'g9',
    title: 'Farewell Party 2026: Symphony of Memories',
    category: 'Kebersamaan',
    date: '2026',
    division: 'Keluarga Besar PCC',
    description:
      'Malam apresiasi dan perpisahan hangat penuh kenangan bagi pengurus purna tugas UKM PCC Polines.',
    image: '/assets/galeri/galeri-9.webp',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
];
