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
  mass: number;
  charge: number;
  trail: { x: number; y: number }[];
  energy: number;
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
        const size = Math.random() * 6 + 2;
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          glowIntensity: Math.random() * 0.5 + 0.3,
          morphPhase: Math.random() * Math.PI * 2,
          mass: size / 4,
          charge: Math.random() > 0.5 ? 1 : -1,
          trail: [],
          energy: Math.random() * 100 + 50
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

      // Draw particle trails
      particles.forEach(particle => {
        if (particle.trail.length > 1) {
          for (let i = 0; i < particle.trail.length - 1; i++) {
            const trailOpacity = (i / particle.trail.length) * 0.3 * particle.glowIntensity;
            const gradient = ctx.createLinearGradient(
              particle.trail[i].x, particle.trail[i].y,
              particle.trail[i + 1].x, particle.trail[i + 1].y
            );
            gradient.addColorStop(0, `hsla(var(--${particle.color}), ${trailOpacity})`);
            gradient.addColorStop(1, `hsla(var(--${particle.color}), ${trailOpacity * 0.5})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = particle.size * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.trail[i].x, particle.trail[i].y);
            ctx.lineTo(particle.trail[i + 1].x, particle.trail[i + 1].y);
            ctx.stroke();
          }
        }
      });

      // Draw enhanced particle connections
      connections.forEach(connection => {
        const energyPulse = Math.sin(Date.now() * 0.005 + connection.distance * 0.01) * 0.3 + 0.7;
        const gradient = ctx.createLinearGradient(
          connection.particle1.x, connection.particle1.y,
          connection.particle2.x, connection.particle2.y
        );
        
        // Different colors based on particle charges
        if (connection.particle1.charge === connection.particle2.charge) {
          gradient.addColorStop(0, `hsla(330, 100%, 60%, ${connection.opacity * energyPulse})`);
          gradient.addColorStop(0.5, `hsla(195, 100%, 50%, ${connection.opacity * energyPulse * 0.8})`);
          gradient.addColorStop(1, `hsla(330, 100%, 60%, ${connection.opacity * energyPulse})`);
        } else {
          gradient.addColorStop(0, `hsla(195, 100%, 50%, ${connection.opacity * energyPulse})`);
          gradient.addColorStop(0.5, `hsla(54, 100%, 62%, ${connection.opacity * energyPulse * 1.2})`);
          gradient.addColorStop(1, `hsla(195, 100%, 50%, ${connection.opacity * energyPulse})`);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1 + connection.opacity * 2;
        ctx.beginPath();
        ctx.moveTo(connection.particle1.x, connection.particle1.y);
        ctx.lineTo(connection.particle2.x, connection.particle2.y);
        ctx.stroke();
      });

      // Draw enhanced mouse connections with electromagnetic field visualization
      particles.forEach(particle => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + Math.pow(mousePosition.y - particle.y, 2)
        );
        
        if (distance < 200) {
          const opacity = (200 - distance) / 200;
          const energyLevel = particle.energy / 100;
          
          // Create electromagnetic field effect
          const fieldRadius = 20 + opacity * 30;
          const fieldGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, fieldRadius
          );
          fieldGradient.addColorStop(0, `hsla(var(--${particle.color}), ${opacity * 0.3})`);
          fieldGradient.addColorStop(1, `hsla(var(--${particle.color}), 0)`);
          
          ctx.fillStyle = fieldGradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, fieldRadius, 0, Math.PI * 2);
          ctx.fill();
          
          // Connection to mouse with charge visualization
          if (distance < 150) {
            const chargeColor = particle.charge > 0 ? '195, 100%, 50%' : '330, 100%, 60%';
            ctx.strokeStyle = `hsla(${chargeColor}, ${opacity * 0.8 * energyLevel})`;
            ctx.lineWidth = 2 + opacity * 3;
            ctx.beginPath();
            ctx.moveTo(mousePosition.x, mousePosition.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
            
            // Draw electric spark effect
            const sparkCount = Math.floor(opacity * 5);
            for (let i = 0; i < sparkCount; i++) {
              const sparkX = mousePosition.x + (particle.x - mousePosition.x) * Math.random();
              const sparkY = mousePosition.y + (particle.y - mousePosition.y) * Math.random();
              const sparkSize = Math.random() * 3 + 1;
              
              ctx.fillStyle = `hsla(${chargeColor}, ${opacity * 0.6})`;
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, sparkSize, 0, Math.PI * 2);
              ctx.fill();
            }
          }
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
          // Add current position to trail
          particle.trail.push({ x: particle.x, y: particle.y });
          if (particle.trail.length > 8) {
            particle.trail.shift();
          }

          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Physics forces
          let forceX = 0;
          let forceY = 0;

          // Gravity towards center (weak)
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const distanceToCenter = Math.sqrt(Math.pow(centerX - newX, 2) + Math.pow(centerY - newY, 2));
          if (distanceToCenter > 200) {
            forceX += (centerX - newX) * 0.00001;
            forceY += (centerY - newY) * 0.00001;
          }

          // Electromagnetic forces between particles
          prev.forEach(otherParticle => {
            if (otherParticle.id !== particle.id) {
              const dx = otherParticle.x - newX;
              const dy = otherParticle.y - newY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance > 0 && distance < 150) {
                // Coulomb's law simulation
                const force = (particle.charge * otherParticle.charge * 50) / (distance * distance);
                const angle = Math.atan2(dy, dx);
                
                // Repulsion for same charges, attraction for opposite charges
                forceX -= Math.cos(angle) * force * 0.001;
                forceY -= Math.sin(angle) * force * 0.001;

                // Collision detection and response
                if (distance < particle.size + otherParticle.size) {
                  const overlap = (particle.size + otherParticle.size) - distance;
                  const separationX = (dx / distance) * overlap * 0.5;
                  const separationY = (dy / distance) * overlap * 0.5;
                  
                  newX -= separationX;
                  newY -= separationY;
                  
                  // Elastic collision response
                  const v1x = particle.speedX;
                  const v1y = particle.speedY;
                  const v2x = otherParticle.speedX;
                  const v2y = otherParticle.speedY;
                  const m1 = particle.mass;
                  const m2 = otherParticle.mass;
                  
                  particle.speedX = ((m1 - m2) * v1x + 2 * m2 * v2x) / (m1 + m2) * 0.8;
                  particle.speedY = ((m1 - m2) * v1y + 2 * m2 * v2y) / (m1 + m2) * 0.8;
                  
                  // Energy transfer visual effect
                  particle.glowIntensity = Math.min(1, particle.glowIntensity + 0.3);
                }
              }
            }
          });

          // Advanced mouse interaction
          const mouseDistance = Math.sqrt(
            Math.pow(mousePosition.x - newX, 2) + Math.pow(mousePosition.y - newY, 2)
          );
          
          if (mouseDistance < 200) {
            const angle = Math.atan2(newY - mousePosition.y, newX - mousePosition.x);
            const mousePower = (200 - mouseDistance) / 200;
            
            // Create orbital effect for closer particles
            if (mouseDistance < 80) {
              const orbitalForce = mousePower * 2;
              forceX += -Math.sin(angle) * orbitalForce * 0.02;
              forceY += Math.cos(angle) * orbitalForce * 0.02;
            } else {
              // Attraction/repulsion based on particle charge
              const mouseForce = mousePower * particle.charge * 4;
              forceX += Math.cos(angle) * mouseForce * 0.01;
              forceY += Math.sin(angle) * mouseForce * 0.01;
            }
            
            // Increase glow when near mouse
            particle.glowIntensity = Math.min(1, 0.3 + mousePower * 0.7);
            particle.energy = Math.min(200, particle.energy + mousePower * 2);
          }

          // Apply forces to velocity
          particle.speedX += forceX;
          particle.speedY += forceY;

          // Velocity damping for realistic physics
          particle.speedX *= 0.995;
          particle.speedY *= 0.995;

          // Speed limits
          const maxSpeed = 3;
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
          }

          // Update position
          newX += particle.speedX;
          newY += particle.speedY;

          // Bounce off edges with energy loss
          if (newX <= particle.size || newX >= window.innerWidth - particle.size) {
            particle.speedX *= -0.7;
            newX = Math.max(particle.size, Math.min(window.innerWidth - particle.size, newX));
            particle.glowIntensity = Math.min(1, particle.glowIntensity + 0.2);
          }
          if (newY <= particle.size || newY >= window.innerHeight - particle.size) {
            particle.speedY *= -0.7;
            newY = Math.max(particle.size, Math.min(window.innerHeight - particle.size, newY));
            particle.glowIntensity = Math.min(1, particle.glowIntensity + 0.2);
          }

          return { 
            ...particle, 
            x: newX, 
            y: newY,
            morphPhase: particle.morphPhase + 0.02 + (particle.energy / 1000),
            glowIntensity: Math.max(0.2, particle.glowIntensity - 0.005),
            energy: Math.max(20, particle.energy - 0.1)
          };
        });

        // Calculate enhanced connections
        const newConnections: Connection[] = [];
        for (let i = 0; i < newParticles.length; i++) {
          for (let j = i + 1; j < newParticles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(newParticles[i].x - newParticles[j].x, 2) + 
              Math.pow(newParticles[i].y - newParticles[j].y, 2)
            );
            
            if (distance < 120) {
              const energyFactor = (newParticles[i].energy + newParticles[j].energy) / 200;
              const opacity = (120 - distance) / 120 * 0.4 * energyFactor;
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
      
      {/* Floating particles with enhanced physics */}
      {particles.map((particle) => (
        <div key={particle.id}>
          {/* Particle trails */}
          {particle.trail.map((trailPoint, index) => (
            <div
              key={`${particle.id}-trail-${index}`}
              className="absolute pointer-events-none"
              style={{
                left: `${trailPoint.x}px`,
                top: `${trailPoint.y}px`,
                width: `${particle.size * (index / particle.trail.length)}px`,
                height: `${particle.size * (index / particle.trail.length)}px`,
                background: `hsl(var(--${particle.color}))`,
                borderRadius: '50%',
                opacity: (index / particle.trail.length) * 0.3 * particle.glowIntensity,
                filter: `blur(${2 - (index / particle.trail.length)}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
          
          {/* Main particle */}
          <div
            className="absolute transition-all duration-100 ease-out morph-shape"
            style={getShapeStyle(particle)}
          />
          
          {/* Energy field visualization */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size * 3}px`,
              height: `${particle.size * 3}px`,
              background: `radial-gradient(circle, hsl(var(--${particle.color}) / ${particle.glowIntensity * 0.1}) 0%, transparent 70%)`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${2 + particle.id * 0.1}s ease-in-out infinite alternate`
            }}
          />
        </div>
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