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
  Sparkles,
  FolderOpen,
  FileText,
  BookOpen
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import HTMLNotesModal from './HTMLNotesModal';

const navItems = [
  { icon: Home, label: 'Home', href: '/', type: 'route' },
  { icon: FolderOpen, label: 'Projects', href: '/projects', type: 'route' },
  { icon: FileText, label: 'Cheat Sheets', href: '/cheat-sheets', type: 'route' },
  { icon: BookOpen, label: 'Blog', href: '/blog', type: 'route' },
  { icon: Mail, label: 'Contact', href: '#contact', type: 'scroll' }
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string, type: string) => {
    setIsOpen(false);
    
    if (type === 'route') {
      navigate(href);
    } else if (type === 'scroll') {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => scrollToSection(href), 100);
      } else {
        scrollToSection(href);
      }
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <Button
          size="icon"
          className="w-14 h-14 brutal-hover bg-primary text-primary-foreground shadow-neon border border-primary/30 transition-all duration-150 ease-out transform hover:scale-110 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 transition-transform duration-150" /> : <Menu className="w-6 h-6 transition-transform duration-150" />}
        </Button>
      </div>

      {/* Desktop Floating Nav - horizontal top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-center bg-transparent pt-4">
        <div className="flex flex-row gap-1.5 p-1.5">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = item.type === 'route' 
              ? location.pathname === item.href
              : activeSection === item.href.replace('#', '');
            
            return (
              <Button
                key={index}
                size="icon"
                variant={isActive ? 'default' : 'outline'}
                className={`w-14 h-14 brutal-hover shadow-brutal group relative transition-all duration-150 ease-out transform hover:scale-110 active:scale-95 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-neon animate-pulse' 
                    : 'border-2 border-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-neon'
                }`}
                onClick={() => handleNavigation(item.href, item.type)}
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

           {/* Access Notes Modal */}
           <div className="ml-4 pl-4 border-l border-border/20">
             <HTMLNotesModal />
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
                const isActive = item.type === 'route' 
                  ? location.pathname === item.href
                  : activeSection === item.href.replace('#', '');
                
                return (
                  <Button
                    key={index}
                    variant={isActive ? 'default' : 'ghost'}
                    className={`justify-start gap-3 transition-all duration-150 ease-out transform hover:scale-105 active:scale-95 ${
                      isActive ? 'bg-primary text-primary-foreground' : ''
                    }`}
                    onClick={() => handleNavigation(item.href, item.type)}
                  >
                    <IconComponent className="w-5 h-5 transition-all duration-150" />
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