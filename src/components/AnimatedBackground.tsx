import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['primary', 'secondary', 'accent'];

      // Reduced particle count for better performance
      const particleCount = 25;
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.3 + 0.2
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    return () => window.removeEventListener('resize', createParticles);
  }, []);

  // Canvas drawing for connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const getParticleColor = (colorName: string) => {
      switch(colorName) {
        case 'primary': return '190, 95%, 55%';
        case 'secondary': return '270, 80%, 65%';
        case 'accent': return '330, 85%, 60%';
        default: return '190, 95%, 55%';
      }
    };

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.2;
            const colorHSL = getParticleColor(particles[i].color);
            
            ctx.strokeStyle = `hsla(${colorHSL}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    drawConnections();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [particles]);

  // Simplified animation
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Simple bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            particle.speedX *= -1;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            particle.speedY *= -1;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          return { 
            ...particle, 
            x: newX, 
            y: newY
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50); // 20fps instead of 60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for connections */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Simple floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `hsl(var(--${particle.color}))`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px hsl(var(--${particle.color}) / 0.6)`,
            transition: 'transform 0.05s linear'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
