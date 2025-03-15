
import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
  as: Component = 'span'
}: AnimatedTextProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('opacity-100');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      if (spanRef.current) observer.unobserve(spanRef.current);
    };
  }, [once]);

  return (
    <Component className={className}>
      <span
        ref={spanRef}
        className="inline-block opacity-0 transition-opacity"
        style={{
          transitionDuration: `${duration}s`,
          transitionDelay: `${delay}s`
        }}
      >
        {text}
      </span>
    </Component>
  );
};

export default AnimatedText;
