"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 *
 * Attaches an IntersectionObserver to the returned `ref`.
 * When the element enters the viewport, `visibleClass` is added.
 * Optionally stagger child elements matching `childSelector`.
 *
 * @param {object} options
 * @param {string}  options.visibleClass   - CSS module class to add when visible
 * @param {string}  [options.childSelector]- Selector for staggered children
 * @param {number}  [options.threshold]    - IO threshold (default 0.12)
 * @param {string}  [options.rootMargin]   - IO rootMargin (default "0px 0px -40px 0px")
 * @param {number}  [options.staggerMs]    - Delay increment per child in ms (default 70)
 * @returns {{ ref: React.RefObject }}
 */
export default function useScrollReveal({
  visibleClass,
  childSelector,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  staggerMs = 70,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // Reveal the container itself
        if (visibleClass) el.classList.add(visibleClass);

        // Stagger children if a selector is provided
        if (childSelector) {
          const children = el.querySelectorAll(childSelector);
          children.forEach((child, i) => {
            child.style.setProperty("--reveal-delay", `${i * staggerMs}ms`);
            child.classList.add(visibleClass);
          });
        }

        observer.unobserve(el);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleClass, childSelector, threshold, rootMargin, staggerMs]);

  return { ref };
}
