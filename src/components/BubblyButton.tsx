'use client';
import React, { useEffect, useRef, ReactNode } from 'react';

interface BubblyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function BubblyButton({ 
  children, 
  className = "",
  onClick
}: BubblyButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const animateButton = function(e: Event) {
      e.preventDefault();
      button.classList.remove("animate");
      // Force a reflow (re-calculation of styles)
      void button.offsetWidth;
      button.classList.add("animate");
      
      setTimeout(() => {
        button.classList.remove("animate");
      }, 600);
    };
    
    button.addEventListener("click", animateButton);
    
    return () => {
      button.removeEventListener("click", animateButton);
    };
  }, []);

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button 
      ref={buttonRef}
      className={`bubbly-button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}