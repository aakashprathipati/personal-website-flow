import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
  hue: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = [
        { name: 'rgba(0, 255, 136, 1)', hue: 160 }, // lite green
        { name: 'rgba(0, 191, 255, 1)', hue: 195 }, // electric blue
        { name: 'rgba(255, 20, 147, 1)', hue: 330 }, // hot pink
        { name: 'rgba(255, 255, 0, 1)', hue: 55 },  // yellow
      ];

      // More particles for interactive effect
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        const colorData = colors[Math.floor(Math.random() * colors.length)];
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 5 + 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          color: colorData.name,
          hue: colorData.hue,
          opacity: Math.random() * 0.6 + 0.4
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', createParticles);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.3;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 100%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 100%, 60%, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animationFrame = requestAnimationFrame(function animate() {
      drawConnections();
      requestAnimationFrame(animate);
    });

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [particles]);

  // Interactive particle animation with mouse attraction
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => {
          // Mouse attraction force
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 250;
          
          let attractionX = 0;
          let attractionY = 0;
          
          if (distance < maxDistance && distance > 0) {
            const force = (maxDistance - distance) / maxDistance * 0.8;
            attractionX = (dx / distance) * force;
            attractionY = (dy / distance) * force;
          }

          // Update velocity with attraction
          let newVx = particle.vx + attractionX;
          let newVy = particle.vy + attractionY;
          
          // Add damping to prevent infinite acceleration
          newVx *= 0.92;
          newVy *= 0.92;
          
          // Cap max velocity
          const maxVelocity = 4;
          const velocity = Math.sqrt(newVx * newVx + newVy * newVy);
          if (velocity > maxVelocity) {
            newVx = (newVx / velocity) * maxVelocity;
            newVy = (newVy / velocity) * maxVelocity;
          }

          let newX = particle.x + newVx;
          let newY = particle.y + newVy;

          // Bounce off edges with damping
          if (newX <= 0 || newX >= window.innerWidth) {
            newVx *= -0.7;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newVy *= -0.7;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          return { 
            ...particle, 
            x: newX, 
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 25); // 40fps for smooth interaction
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
      
      {/* Interactive neon particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            opacity: particle.opacity,
            boxShadow: `
              0 0 ${particle.size * 4}px ${particle.color},
              0 0 ${particle.size * 8}px ${particle.color}
            `,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      {/* Floating animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-36 h-36 rounded-full bg-accent/20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-28 h-28 rounded-full bg-warning/20 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default AnimatedBackground;
