import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has been scrolled past a threshold.
 * Used by the navbar to switch to its solid background.
 */
export default function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
