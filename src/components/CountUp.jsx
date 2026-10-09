import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView.js';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Número que conta de 0 até `target` quando entra na viewport.
 * Formata em pt-BR e respeita prefers-reduced-motion.
 */
export default function CountUp({
  target,
  prefix = '',
  suffix = '',
  duration = 1300,
  delay = 0,
  startImmediately = false,
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current || !(inView || startImmediately)) return;
    started.current = true;

    if (prefersReduced()) {
      setVal(target);
      return;
    }

    let raf;
    let timeout;
    const begin = () => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    timeout = setTimeout(begin, delay);
    return () => {
      clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [inView, startImmediately, target, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}
