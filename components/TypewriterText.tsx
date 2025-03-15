"use client"
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  glowColor?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
  cursorStyle?: 'line' | 'block' | 'underscore';
  cursorColor?: string;
  darkBackground?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
  glowColor = '#8B5CF6',
  glowIntensity = 'medium',
  cursorStyle = 'line',
  cursorColor,
  darkBackground = true
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isWaiting) {
      timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(timer);
    }

    const currentFullText = texts[currentTextIndex];

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (displayText === currentFullText) {
        setIsWaiting(true);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentTextIndex, displayText, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  // Define glow intensity levels
  const glowIntensities = {
    low: {
      textShadow: `0 0 5px ${glowColor}80, 0 0 10px ${glowColor}40`,
    },
    medium: {
      textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}80, 0 0 30px ${glowColor}40`,
    },
    high: {
      textShadow: `0 0 15px ${glowColor}, 0 0 30px ${glowColor}, 0 0 45px ${glowColor}80, 0 0 60px ${glowColor}40`,
    },
  };

  // Get the appropriate glow style
  const glowStyle = glowIntensities[glowIntensity];

  // Define cursor styles
  let cursorElement;
  const cursorColorToUse = cursorColor || glowColor;
  
  switch (cursorStyle) {
    case 'block':
      cursorElement = (
        <span 
          className="inline-block w-3 h-6 ml-1 animate-pulse" 
          style={{
            backgroundColor: cursorColorToUse,
            boxShadow: `0 0 5px ${cursorColorToUse}, 0 0 10px ${cursorColorToUse}80`
          }}
        />
      );
      break;
    case 'underscore':
      cursorElement = (
        <span 
          className="inline-block w-3 h-1 ml-1 animate-pulse" 
          style={{
            backgroundColor: cursorColorToUse,
            marginBottom: '-3px',
            boxShadow: `0 0 5px ${cursorColorToUse}, 0 0 10px ${cursorColorToUse}80`
          }}
        >_</span>
      );
      break;
    case 'line':
    default:
      cursorElement = (
        <span 
          className="inline-block w-0.5 h-6 ml-1 animate-pulse" 
          style={{
            backgroundColor: cursorColorToUse,
            boxShadow: `0 0 5px ${cursorColorToUse}, 0 0 10px ${cursorColorToUse}80`
          }}
        >|</span>
      );
  }

  return (
    <div className={`${className} flex items-center`}>
      <span 
        className={`transition-all duration-200 ${darkBackground ? 'text-white' : 'text-dark-gray'}`}
        style={glowStyle}
      >
        {displayText}
      </span>
      {cursorElement}
    </div>
  );
};

export default TypewriterText;
