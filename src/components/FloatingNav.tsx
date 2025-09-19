import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  User, 
  Code, 
  GraduationCap, 
  Mail, 
  Menu,
  X,
  Sparkles
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#hero' },
  { icon: Code, label: 'Skills', href: '#skills' },
  { icon: User, label: 'Experience', href: '#experience' },
  { icon: GraduationCap, label: 'Education', href: '#education' },
  { icon: Mail, label: 'Contact', href: '#contact' }
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <Button
          size="icon"
          className="w-14 h-14 brutal-hover bg-primary text-primary-foreground shadow-neon border border-primary/30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Desktop Floating Nav - horizontal top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-center bg-transparent pt-4">
        <div className="flex flex-row gap-1.5 p-1.5 bg-background/10 backdrop-blur-md border border-primary/20 rounded-full shadow-neon">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.href.replace('#', '');
            
            return (
              <Button
                key={index}
                size="icon"
                variant={isActive ? 'default' : 'outline'}
                className={`w-14 h-14 brutal-hover shadow-brutal group relative ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-neon' 
                    : 'border-2 border-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
                onClick={() => scrollToSection(item.href)}
                title={item.label}
              >
                <IconComponent className="w-6 h-6" />
                
                {/* Tooltip (appears below icon on desktop) */}
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-foreground text-background text-sm font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-brutal">
                  {item.label}
                </span>
              </Button>
            );
          })}

          {/* Floating sparkle */}
          <div className="w-14 h-14 flex items-center justify-center animate-float">
            <Sparkles className="w-6 h-6 text-warning animate-pulse" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/20 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="absolute top-24 right-6 bg-card/90 backdrop-blur-md border-2 border-primary/30 shadow-neon p-6 rounded-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.href.replace('#', '');
                
                return (
                  <Button
                    key={index}
                    variant={isActive ? 'default' : 'ghost'}
                    className={`justify-start gap-3 ${
                      isActive ? 'bg-primary text-primary-foreground' : ''
                    }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    <IconComponent className="w-5 h-5" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNav;