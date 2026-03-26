import React, { useEffect, useRef, useState, useCallback } from 'react';

type CursorState = 'default' | 'hover-link' | 'hover-project' | 'hover-hero';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);

  // Actual mouse position (instant)
  const mousePos = useRef({ x: -100, y: -100 });
  // Smoothed position for ring (delayed)
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  // Add/remove cursor:none on body
  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = '';
      return;
    }
    document.body.style.cursor = 'none';

    // Also hide cursor on all interactive elements
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = '';
      const el = document.getElementById('custom-cursor-style');
      if (el) el.remove();
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for hero text (no blend mode to preserve text masking)
      if (target.closest('[data-cursor-hero]')) {
        setCursorState('hover-hero');
        return;
      }

      // Check for project cards / images (data-cursor-view attribute)
      if (target.closest('[data-cursor-view]')) {
        setCursorState('hover-project');
        return;
      }

      // Check for clickable elements (links, buttons, etc.)
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input[type="submit"]') ||
        target.closest('[data-clickable]') ||
        (target as HTMLElement).onclick !== null ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setCursorState('hover-link');
        return;
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('[data-cursor-hero]') ||
        target.closest('[data-cursor-view]') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input[type="submit"]') ||
        target.closest('[data-clickable]')
      ) {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [isMobile, isVisible]);

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    if (isMobile) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Dot follows mouse instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;
      }

      // Ring follows with delay (lerp)
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (ringRef.current) {
        const ringSize = cursorState === 'hover-project' ? 80 : cursorState === 'hover-link' ? 50 : 40;
        const halfRing = ringSize / 2;
        ringRef.current.style.transform = `translate(${ringPos.current.x - halfRing}px, ${ringPos.current.y - halfRing}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, cursorState]);

  if (isMobile) return null;

  // Ring styles based on state
  const getRingStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'fixed',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: 9998,
      borderRadius: '50%',
      mixBlendMode: 'difference',
      transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, opacity 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      willChange: 'transform',
    };

    switch (cursorState) {
      case 'hover-hero':
        return {
          ...base,
          width: 60,
          height: 60,
          backgroundColor: 'transparent',
          border: '1px solid rgba(180, 160, 120, 0.5)',
          mixBlendMode: 'normal' as const,
          opacity: isVisible ? 1 : 0,
        };
      case 'hover-link':
        return {
          ...base,
          width: 50,
          height: 50,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          opacity: isVisible ? 0.9 : 0,
        };
      case 'hover-project':
        return {
          ...base,
          width: 80,
          height: 80,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: 'none',
          opacity: isVisible ? 1 : 0,
        };
      default:
        return {
          ...base,
          width: 40,
          height: 40,
          backgroundColor: 'transparent',
          border: '1.5px solid rgba(255, 255, 255, 0.6)',
          opacity: isVisible ? 1 : 0,
        };
    }
  };

  const getDotStyle = (): React.CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
    transition: 'opacity 0.3s ease, width 0.15s ease, height 0.15s ease',
    opacity: isVisible ? (cursorState === 'default' || cursorState === 'hover-hero' ? 1 : 0) : 0,
    mixBlendMode: cursorState === 'hover-hero' ? 'normal' as const : 'difference' as const,
    backgroundColor: cursorState === 'hover-hero' ? 'rgba(180, 160, 120, 0.8)' : '#fff',
    willChange: 'transform',
  });

  return (
    <>
      {/* Inner dot */}
      <div ref={dotRef} style={getDotStyle()} />

      {/* Outer ring */}
      <div ref={ringRef} style={getRingStyle()}>
        {cursorState === 'hover-project' && (
          <span
            ref={textRef}
            style={{
              color: '#000',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              userSelect: 'none',
            }}
          >
            View
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
