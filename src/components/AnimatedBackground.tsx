import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle' | 'diamond';
  glowIntensity: number;
  morphPhase: number;
}

interface Connection {
  particle1: Particle;
  particle2: Particle;
  distance: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['primary', 'secondary', 'accent', 'warning'];
      const shapes: ('circle' | 'square' | 'triangle' | 'diamond')[] = ['circle', 'square', 'triangle', 'diamond'];

      // Same particle count for mobile and desktop for consistent experience
      const particleCount = 80;
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 6 + 2,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          glowIntensity: Math.random() * 0.5 + 0.3,
          morphPhase: Math.random() * Math.PI * 2
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

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Draw connections on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particle connections
      connections.forEach(connection => {
        const gradient = ctx.createLinearGradient(
          connection.particle1.x, connection.particle1.y,
          connection.particle2.x, connection.particle2.y
        );
        gradient.addColorStop(0, `hsla(195, 100%, 50%, ${connection.opacity})`);
        gradient.addColorStop(0.5, `hsla(330, 100%, 60%, ${connection.opacity * 0.8})`);
        gradient.addColorStop(1, `hsla(54, 100%, 62%, ${connection.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(connection.particle1.x, connection.particle1.y);
        ctx.lineTo(connection.particle2.x, connection.particle2.y);
        ctx.stroke();
      });

      // Draw mouse connections
      particles.forEach(particle => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + Math.pow(mousePosition.y - particle.y, 2)
        );
        
        if (distance < 150) {
          const opacity = (150 - distance) / 150;
          ctx.strokeStyle = `hsla(195, 100%, 50%, ${opacity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(mousePosition.x, mousePosition.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.stroke();
        }
      });
    };

    drawConnections();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [particles, connections, mousePosition]);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => {
        const newParticles = prev.map(particle => {
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

          // Mouse interaction - repulsion effect
          const mouseDistance = Math.sqrt(
            Math.pow(mousePosition.x - newX, 2) + Math.pow(mousePosition.y - newY, 2)
          );
          
          if (mouseDistance < 120) {
            const angle = Math.atan2(newY - mousePosition.y, newX - mousePosition.x);
            const force = (120 - mouseDistance) / 120;
            newX += Math.cos(angle) * force * 3;
            newY += Math.sin(angle) * force * 3;
          }

          return { 
            ...particle, 
            x: newX, 
            y: newY,
            morphPhase: particle.morphPhase + 0.02,
            glowIntensity: 0.3 + Math.sin(Date.now() * 0.001 + particle.id) * 0.2
          };
        });

        // Calculate connections between nearby particles
        const newConnections: Connection[] = [];
        for (let i = 0; i < newParticles.length; i++) {
          for (let j = i + 1; j < newParticles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(newParticles[i].x - newParticles[j].x, 2) + 
              Math.pow(newParticles[i].y - newParticles[j].y, 2)
            );
            
            if (distance < 120) {
              const opacity = (120 - distance) / 120 * 0.4;
              newConnections.push({
                particle1: newParticles[i],
                particle2: newParticles[j],
                distance,
                opacity
              });
            }
          }
        }
        setConnections(newConnections);

        return newParticles;
      });
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, [mousePosition]);

  const getShapeStyle = (particle: Particle) => {
    const morphValue = Math.sin(particle.morphPhase) * 20;
    const baseStyle = {
      left: `${particle.x}px`,
      top: `${particle.y}px`,
      width: `${particle.size + morphValue * 0.1}px`,
      height: `${particle.size + morphValue * 0.1}px`,
      opacity: particle.glowIntensity,
      filter: `blur(${Math.abs(morphValue) * 0.05}px)`,
      boxShadow: `0 0 ${particle.size * 2}px hsl(var(--${particle.color}) / ${particle.glowIntensity})`,
    };

    switch (particle.shape) {
      case 'circle':
        return {
          ...baseStyle,
          borderRadius: '50%',
          background: `hsl(var(--${particle.color}))`,
          transform: `scale(${1 + Math.sin(particle.morphPhase) * 0.2})`,
        };
      case 'square':
        return {
          ...baseStyle,
          background: `hsl(var(--${particle.color}))`,
          transform: `rotate(${morphValue}deg) scale(${1 + Math.sin(particle.morphPhase) * 0.2})`,
          borderRadius: `${Math.abs(morphValue) * 0.5}px`,
        };
      case 'triangle':
        return {
          ...baseStyle,
          width: 0,
          height: 0,
          borderLeft: `${(particle.size + morphValue * 0.1) / 2}px solid transparent`,
          borderRight: `${(particle.size + morphValue * 0.1) / 2}px solid transparent`,
          borderBottom: `${particle.size + morphValue * 0.1}px solid hsl(var(--${particle.color}))`,
          background: 'transparent',
          transform: `rotate(${morphValue * 2}deg)`,
        };
      case 'diamond':
        return {
          ...baseStyle,
          background: `hsl(var(--${particle.color}))`,
          transform: `rotate(45deg) scale(${1 + Math.sin(particle.morphPhase) * 0.3})`,
          borderRadius: `${Math.abs(morphValue) * 0.2}px`,
        };
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for particle connections */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-100 ease-out morph-shape"
          style={getShapeStyle(particle)}
        />
      ))}
      
      {/* Large floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 morph-shape animate-float blur-sm" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-secondary/15 morph-shape animate-float blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-accent/10 morph-shape animate-float blur-sm" style={{ animationDelay: '4s' }} />
      <div className="absolute top-32 right-20 w-28 h-28 bg-warning/10 morph-shape animate-float blur-sm" style={{ animationDelay: '6s' }} />
      
      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Cyberpunk grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;