"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function WelcomeScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");

  useEffect(() => {
    // Start fading after 2 seconds
    const fadeTimer = setTimeout(() => {
      setPhase("fading");
    }, 2000);

    // Remove from DOM after fade completes
    const hideTimer = setTimeout(() => {
      setPhase("hidden");
    }, 2700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-700",
        phase === "fading" && "opacity-0"
      )}
      aria-hidden={phase === "fading"}
    >
      {/* Animated content */}
      <div className="flex flex-col items-center gap-6">
        {/* Logo / Name reveal */}
        <div className="overflow-hidden">
          <h1
            className="animate-slide-up font-display text-5xl tracking-widest text-primary md:text-7xl"
          >
            KRN
          </h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden">
          <p className="animate-slide-up-delayed font-body text-sm font-medium uppercase tracking-[0.4em] text-neutral-offwhite">
            Developer Portfolio
          </p>
        </div>

        {/* Loading bar */}
        <div className="mt-4 h-[2px] w-48 overflow-hidden bg-neutral-dark-gray">
          <div className="animate-loading-bar h-full bg-primary" />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-primary/40" />
      <div className="absolute bottom-6 right-6 h-12 w-12 border-b-2 border-r-2 border-primary/40" />
    </div>
  );
}
