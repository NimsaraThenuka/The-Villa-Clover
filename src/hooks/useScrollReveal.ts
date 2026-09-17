import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade';

    const checkInitial = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the top visible viewport on load, show it
        if (rect.top < window.innerHeight - 20) {
          el.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Keep visible once revealed for smooth persistent feel
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    };

    // Initial check and observation
    checkInitial();
    observeAll();

    const t1 = setTimeout(checkInitial, 80);
    const t2 = setTimeout(observeAll, 200);

    // Mutation observer for dynamically rendered elements
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return ref;
}
