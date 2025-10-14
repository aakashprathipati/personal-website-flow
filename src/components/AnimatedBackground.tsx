import { useEffect, useRef } from 'react';

interface MatrixColumn {
  x: number;
  y: number;
  speed: number;
  length: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Matrix characters (binary + katakana + some symbols)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Initialize matrix columns
    const matrixColumns: MatrixColumn[] = [];
    for (let i = 0; i < columns; i++) {
      matrixColumns.push({
        x: i * fontSize,
        y: Math.random() * canvas.height * -1,
        speed: Math.random() * 3 + 2,
        length: Math.random() * 20 + 10
      });
    }

    const drawMatrix = () => {
      // Fade effect for trailing characters
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

      matrixColumns.forEach((column) => {
        // Draw the column of characters
        for (let i = 0; i < column.length; i++) {
          const char = chars.charAt(Math.floor(Math.random() * chars.length));
          const y = column.y + (i * fontSize);
          
          if (y > 0 && y < canvas.height) {
            // Leading character is brightest
            if (i === 0) {
              ctx.fillStyle = 'rgba(200, 255, 200, 1)';
              ctx.shadowBlur = 10;
              ctx.shadowColor = 'rgba(0, 255, 100, 0.8)';
            } else {
              // Fade trail based on position
              const opacity = 1 - (i / column.length);
              ctx.fillStyle = `rgba(0, 255, 100, ${opacity * 0.8})`;
              ctx.shadowBlur = 5;
              ctx.shadowColor = 'rgba(0, 255, 100, 0.3)';
            }
            
            ctx.fillText(char, column.x, y);
          }
        }

        // Move column down
        column.y += column.speed;

        // Reset column when it goes off screen
        if (column.y > canvas.height + column.length * fontSize) {
          column.y = Math.random() * canvas.height * -1;
          column.speed = Math.random() * 3 + 2;
          column.length = Math.random() * 20 + 10;
        }
      });

      // Reset shadow for next frame
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      drawMatrix();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Matrix rain canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Subtle ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AnimatedBackground;
