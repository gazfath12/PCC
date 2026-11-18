import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ArticleSection } from './components/ArticleSection';
import { FooterSection } from './components/FooterSection';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { JoinModal } from './components/JoinModal';
import { StructureSection } from './components/StructureSection';

export function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [defaultDivision, setDefaultDivision] = useState<string>('Dept. Software');

  const handleOpenJoinModal = (division?: string) => {
    setDefaultDivision(division || 'Dept. Software');
    setJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <main>
        <HeroSection onOpenJoinModal={handleOpenJoinModal} />
        <AboutSection />
        <StructureSection />
        <ActivitiesSection />
        <GallerySection />
        <ArticleSection />
      </main>

      <FooterSection onOpenJoinModal={handleOpenJoinModal} />

      <JoinModal
        open={joinModalOpen}
        defaultDivision={defaultDivision}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}

export default App;
