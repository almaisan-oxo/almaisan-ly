import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);

    // Add listeners for clickable elements to trigger hover state
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, input, textarea, .hover-trigger');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // Initial bind
    addHoverListeners();
    
    // Re-bind occasionally for dynamic content (simple hack for SPA)
    const interval = setInterval(addHoverListeners, 2000);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      clearInterval(interval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor fixed pointer-events-none z-[9999] rounded-full bg-accent transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`,
        }}
      />
      <div
        className="custom-cursor fixed pointer-events-none z-[9998] rounded-full border border-accent transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '50px' : '24px',
          height: isHovering ? '50px' : '24px',
          transform: `translate(-50%, -50%)`,
          backgroundColor: isHovering ? 'rgba(235, 195, 28, 0.1)' : 'transparent',
          borderColor: isHovering ? '#EBC31C' : 'rgba(235, 195, 28, 0.5)',
        }}
      />
    </>
  );
};

export default CustomCursor;