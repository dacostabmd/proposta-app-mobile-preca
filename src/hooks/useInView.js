import { useEffect, useRef, useState } from 'react';

/**
 * Observa um elemento e informa quando ele entra na viewport.
 * @param {Object} opts
 * @param {number} opts.threshold  fração visível para disparar (default 0.25)
 * @param {boolean} opts.once      se true, para de observar após a 1ª vez (default true)
 * @returns {[React.RefObject, boolean]} [ref, inView]
 */
export function useInView({ threshold = 0.25, once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return [ref, inView];
}
