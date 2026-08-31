import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const NetworkBackground: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let rafId = 0;

    const NODE_SPACING = 90; // px per node, roughly
    const LINK_DIST = 150;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.max(24, Math.floor((width * height) / (NODE_SPACING * NODE_SPACING * 90)) + 24));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(0, 159, 227, ${0.16 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = 'rgba(0, 159, 227, 0.55)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);

    if (prefersReducedMotion) {
      draw();
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
