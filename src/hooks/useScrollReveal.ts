import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function useScrollRevealAll(count: number, threshold = 0.08) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold, rootMargin: '0px 0px -40px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [count, threshold]);

  return { refs, visible };
}
