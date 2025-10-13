import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Code2, Sparkles, ArrowRight } from 'lucide-react';
import profileImage from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix-style background with heavy green glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-black to-primary/5" />
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/50 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-gradient-to-tl from-primary/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/40 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary/35 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 slide-in">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Available for work</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="neon-text glitch" data-text="Aakash">
                  Aakash
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Software Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting secure, high-performance software with <span className="text-primary font-semibold">AI</span>,{' '}
              <span className="text-secondary font-semibold">Web3</span>, and cloud technologies. 
              Building solutions that matter.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="glass-card px-8 h-12 text-base font-semibold group"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="cyber-border px-8 h-12 text-base font-semibold"
                asChild
              >
                <a href={`/aakashp-resume.pdf?v=${Date.now()}`} download="Aakash_Prathipati_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="cyber-border hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/aakashprathipati" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="cyber-border hover:bg-primary/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/aakash-prathipati-741b18347/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="cyber-border hover:bg-primary/10"
                asChild
              >
                <a href="mailto:aakashprathipaticore@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-cyber rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 glass-card">
                  <img
                    src={profileImage}
                    alt="Aakash Prathipati"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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