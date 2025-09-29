import React, { useEffect } from 'react';

export default function MobileDetection() {
  useEffect(() => {
    const handleTouchStart = () => {
      document.documentElement.classList.add('touch-device');
    };
    document.addEventListener('touchstart', handleTouchStart, { once: true });
    return () => document.removeEventListener('touchstart', handleTouchStart);
  }, []);
  return null;
}