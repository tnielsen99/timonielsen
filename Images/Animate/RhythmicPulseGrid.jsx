import React, { useEffect, useRef } from 'react';

const RhythmicPulseGrid = ({ width = 800, height = 600, className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gridSize = 40;
    const cols = Math.floor(width / gridSize);
    const rows = Math.floor(height / gridSize);
    
    let animationId;
    let time = 0;

    // Grid of dots with different phases for wave effect
    const dots = [];
    for (let i = 0; i < cols; i++) {
      dots[i] = [];
      for (let j = 0; j < rows; j++) {
        dots[i][j] = {
          x: i * gridSize + gridSize / 2,
          y: j * gridSize + gridSize / 2,
          phase: (i + j) * 0.3, // Phase offset for wave effect
          baseRadius: 3,
          intensity: Math.random() * 0.5 + 0.5, // Random intensity for data visualization feel
        };
      }
    }

    const animate = () => {
      time += 0.02;
      
      // Clear canvas with dark background
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      // Draw pulsing dots
      dots.forEach((col, i) => {
        col.forEach((dot, j) => {
          const pulse = Math.sin(time + dot.phase) * 0.5 + 0.5;
          const dataWave = Math.sin(time * 0.5 + i * 0.1) * 0.3 + 0.7;
          
          const radius = dot.baseRadius + pulse * 4 * dot.intensity * dataWave;
          const opacity = 0.3 + pulse * 0.7 * dot.intensity;
          
          // Create gradient for glow effect
          const gradient = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, radius * 2
          );
          
          // Analytics dashboard color scheme: blue to cyan
          const hue = 200 + pulse * 40;
          gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, ${opacity})`);
          gradient.addColorStop(0.5, `hsla(${hue}, 70%, 50%, ${opacity * 0.5})`);
          gradient.addColorStop(1, `hsla(${hue}, 60%, 40%, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, radius * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Core dot
          ctx.fillStyle = `hsla(${hue}, 90%, 70%, ${opacity})`;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Add connecting lines for network effect (sparse)
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < cols - 1; i += 3) {
        for (let j = 0; j < rows - 1; j += 3) {
          if (Math.random() > 0.7) {
            const dot1 = dots[i][j];
            const dot2 = dots[i + 1] ? dots[i + 1][j] : null;
            const dot3 = dots[i][j + 1];
            
            if (dot2) {
              ctx.beginPath();
              ctx.moveTo(dot1.x, dot1.y);
              ctx.lineTo(dot2.x, dot2.y);
              ctx.stroke();
            }
            
            if (dot3) {
              ctx.beginPath();
              ctx.moveTo(dot1.x, dot1.y);
              ctx.lineTo(dot3.x, dot3.y);
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{
        display: 'block',
        background: '#0a0a0a',
        borderRadius: '8px',
      }}
    />
  );
};

export default RhythmicPulseGrid;