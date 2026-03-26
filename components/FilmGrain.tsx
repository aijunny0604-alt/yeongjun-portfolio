import React, { useEffect, useRef } from 'react';

const FilmGrain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to a small tile (will be repeated via CSS)
    const SIZE = 256;
    canvas.width = SIZE;
    canvas.height = SIZE;

    let frame = 0;

    const drawGrain = () => {
      const imageData = ctx.createImageData(SIZE, SIZE);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;     // R
        data[i + 1] = value; // G
        data[i + 2] = value; // B
        data[i + 3] = 255;   // A (fully opaque; overall opacity controlled by CSS)
      }

      ctx.putImageData(imageData, 0, 0);
      frame++;

      // Only redraw every 3 frames (~20fps) for subtle movement without perf cost
      rafRef.current = requestAnimationFrame(() => {
        setTimeout(() => {
          rafRef.current = requestAnimationFrame(drawGrain);
        }, 50); // ~20fps grain refresh
      });
    };

    drawGrain();

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9990,
        opacity: 0.04,
        mixBlendMode: 'overlay',
      }}
    />
  );
};

export default FilmGrain;
