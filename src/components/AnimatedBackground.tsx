import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['primary', 'secondary', 'accent', 'warning'];
      const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    return () => window.removeEventListener('resize', createParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Bounce off edges
        if (newX <= 0 || newX >= window.innerWidth) {
          particle.speedX *= -1;
          newX = Math.max(0, Math.min(window.innerWidth, newX));
        }
        if (newY <= 0 || newY >= window.innerHeight) {
          particle.speedY *= -1;
          newY = Math.max(0, Math.min(window.innerHeight, newY));
        }

        // Mouse interaction
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - newX, 2) + Math.pow(mousePosition.y - newY, 2)
        );
        
        if (distance < 100) {
          const angle = Math.atan2(newY - mousePosition.y, newX - mousePosition.x);
          const force = (100 - distance) / 100;
          newX += Math.cos(angle) * force * 2;
          newY += Math.sin(angle) * force * 2;
        }

        return { ...particle, x: newX, y: newY };
      }));
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, [mousePosition]);

  const getShapeStyle = (particle: Particle) => {
    const baseStyle = {
      left: `${particle.x}px`,
      top: `${particle.y}px`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: 0.3,
    };

    switch (particle.shape) {
      case 'circle':
        return {
          ...baseStyle,
          borderRadius: '50%',
          background: `hsl(var(--${particle.color}))`,
        };
      case 'square':
        return {
          ...baseStyle,
          background: `hsl(var(--${particle.color}))`,
          transform: 'rotate(45deg)',
        };
      case 'triangle':
        return {
          ...baseStyle,
          width: 0,
          height: 0,
          borderLeft: `${particle.size / 2}px solid transparent`,
          borderRight: `${particle.size / 2}px solid transparent`,
          borderBottom: `${particle.size}px solid hsl(var(--${particle.color}))`,
          background: 'transparent',
        };
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-100 ease-out"
          style={getShapeStyle(particle)}
        />
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
    </div>
  );
};

export default AnimatedBackground;