import { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Mail, FolderKanban, FileText, BookOpen } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainNavItems = [
    { icon: Home, label: 'Home', action: () => scrollToSection('hero') },
    { icon: User, label: 'Skills', action: () => scrollToSection('skills') },
    { icon: Briefcase, label: 'Experience', action: () => scrollToSection('experience') },
    { icon: GraduationCap, label: 'Education', action: () => scrollToSection('education') },
    { icon: Mail, label: 'Contact', action: () => scrollToSection('contact') },
  ];

  const pageNavItems = [
    { icon: FolderKanban, label: 'Projects', path: '/projects' },
    { icon: FileText, label: 'Cheat Sheets', path: '/cheat-sheets' },
    { icon: BookOpen, label: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="glass-card px-4 py-3 rounded-full border border-primary/30">
          <ul className="flex items-center gap-2">
            {mainNavItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <button onClick={item.action} className="group relative p-3 rounded-full hover:bg-primary/10 transition-colors" aria-label={item.label}>
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card border border-primary/30 text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card px-4 py-3 rounded-full border border-primary/30">
          <ul className="flex items-center gap-2">
            {pageNavItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={index}>
                  <button onClick={() => navigateToPage(item.path)} className={`group relative p-3 rounded-full transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'hover:bg-primary/10 text-muted-foreground hover:text-primary'}`} aria-label={item.label}>
                    <IconComponent className="w-5 h-5 transition-colors" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-primary/30 text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FloatingNav;
