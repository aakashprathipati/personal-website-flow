import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import FloatingNav from '@/components/FloatingNav';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <FloatingNav />
      
      <main className="relative z-10 pt-2 lg:pt-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="skills" className="py-20">
          <SkillsSection />
        </section>
        
        <section id="experience" className="py-20">
          <ExperienceSection />
        </section>
        
        <section id="education" className="py-20">
          <EducationSection />
        </section>
        
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
