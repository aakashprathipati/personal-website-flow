import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Code, Zap } from 'lucide-react';
import profileImage from '@/assets/profile-photo.png';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible lg:overflow-hidden bg-background">
      {/* Animated Memphis shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="memphis-shape w-20 h-20 bg-primary opacity-20"
          style={{
            top: '10%',
            left: '10%',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div 
          className="memphis-shape w-16 h-16 bg-secondary opacity-30 rounded-full"
          style={{
            top: '20%',
            right: '15%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="memphis-shape w-12 h-24 bg-accent opacity-25"
          style={{
            bottom: '20%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
        <div 
          className="memphis-shape w-32 h-8 bg-warning opacity-20"
          style={{
            bottom: '30%',
            right: '20%',
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="min-h-[72vh] lg:min-h-[70vh] py-6 flex items-center">
          <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-cyber text-accent animate-pulse-neon">
                  SOFTWARE ENGINEER
                </h2>
                <h1 
                  className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-brutal glitch leading-tight"
                  data-text="AAKASH PRATHIPATI"
                >
                  AAKASH PRATHIPATI
                </h1>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Building secure, high‑performance software with <span className="text-primary font-bold">AI</span>,{' '}
                <span className="text-secondary font-bold">Web3</span>, and analytics—clean architecture, real impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="brutal-hover bg-primary text-primary-foreground font-bold px-6"
                  asChild
                >
                  <a href="https://github.com/aakashprathipati" target="_blank" rel="noopener noreferrer">
                    <Code className="w-4 h-4 mr-2" />
                    VIEW PROJECTS
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="brutal-hover border-2 border-foreground font-bold px-6"
                  asChild
                >
                  <a href={`/aakashp-resume.pdf?v=${Date.now()}`} download="Aakash_Prathipati_Resume.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    DOWNLOAD CV
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="brutal-hover font-bold px-6"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  EXPERIENCE
                </Button>
              </div>

              <div className="flex gap-3 lg:gap-4 pt-2 justify-center sm:justify-start">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 brutal-hover bg-secondary text-secondary-foreground hover:bg-secondary-glow"
                  asChild
                >
                  <a href="https://github.com/aakashprathipati" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 brutal-hover bg-primary text-primary-foreground hover:bg-primary-glow"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/aakash-prathipati-741b18347/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 brutal-hover bg-accent text-accent-foreground hover:bg-accent-glow"
                  asChild
                >
                  <a href="mailto:aakashprathipaticore@gmail.com">
                    <Mail className="w-6 h-6" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative group">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-cyber rounded-lg blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-neon" />
                
                {/* Image container */}
                <div className="relative float">
                  <img
                    src={profileImage}
                    alt="Aakash Prathipati - Full Stack Developer"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-foreground shadow-brutal hover:shadow-neon transition-all duration-300 group-hover:scale-105"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
                  />
                </div>
                
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center shadow-brutal animate-float">
                  <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 lg:w-12 lg:h-12 bg-accent rotate-45 flex items-center justify-center shadow-memphis animate-float" style={{ animationDelay: '2s' }}>
                  <Code className="w-5 h-5 lg:w-6 lg:h-6 text-accent-foreground -rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;