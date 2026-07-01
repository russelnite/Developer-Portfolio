"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe the element itself and all children with .reveal class
    const revealElements = element.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Also observe the element if it has .reveal
    if (element.classList.contains("reveal")) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
