import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const AnimatedCounter = ({ end, duration = 2, suffix = '%', prefix = '', startOnVisible = true }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!startOnVisible) {
      animateCounter();
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounter();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current && counterRef.current) {
        observerRef.current.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated, startOnVisible]);

  const animateCounter = () => {
    const counter = { value: 0 };
    
    gsap.to(counter, {
      value: end,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(counter.value));
      },
      onComplete: () => {
        setCount(end);
      }
    });
  };

  return (
    <span ref={counterRef} data-count={end}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
