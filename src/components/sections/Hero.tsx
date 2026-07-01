"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SocialIconButton } from "@/components/ui/SocialIconButton";
import { ArrowCircleIcon } from "@/components/icons/ArrowCircle";
import { cn } from "@/lib/utils";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay hero animation to play after welcome screen fades
    const timer = setTimeout(() => setLoaded(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Subtle angular grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-neutral-dark-gray) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-dark-gray) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container className="relative flex flex-col-reverse items-center gap-10 py-12 md:py-16 lg:flex-row lg:items-start lg:gap-12 lg:py-[80px]">
        {/* Content */}
        <div className="flex w-full flex-col gap-10 lg:max-w-[544px]">
          <div className="flex flex-col gap-3">
            <p
              className={cn(
                "font-body text-sm font-bold uppercase tracking-[0.3em] text-primary transition-all duration-700",
                loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              {"//"} Developer Portfolio
            </p>
            <h1
              className={cn(
                "font-display text-5xl leading-[0.9] text-neutral-white transition-all duration-700 delay-100 md:text-7xl lg:text-[101px]",
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Kurt Russel{" "}
              <span className="block text-primary">Nite.</span>
            </h1>
            <p
              className={cn(
                "mt-2 font-body text-lg font-normal leading-relaxed text-neutral-offwhite transition-all duration-700 delay-200",
                loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              Web Developer | Aspiring Software Engineer | Currently learning
              mobile app development with Flutter, Kotlin, and iOS.
            </p>
          </div>

          <div
            className={cn(
              "flex items-center gap-4 transition-all duration-700 delay-300",
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <a href="#contact">
              <Button
                variant="primary"
                icon={
                  <ArrowCircleIcon className="size-[42px] text-neutral-black" />
                }
              >
                Contact Me
              </Button>
            </a>
            <SocialIconButton
              platform="linkedin"
              href="https://linkedin.com/in/kurt-russel-nite/"
              label="Visit LinkedIn profile"
            />
            <SocialIconButton
              platform="github"
              href="https://github.com/russelnite"
              label="Visit GitHub profile"
            />
          </div>
        </div>

        {/* Portrait */}
        <div
          className={cn(
            "relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-[4px] border border-neutral-dark-gray transition-all duration-1000 delay-200 md:h-[500px] lg:h-[689px] lg:max-w-[600px]",
            loaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          <Image
            src="/images/portrait.jpg"
            alt="Kurt Russel Nite portrait"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
          {/* Angular corner accents */}
          <div className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-primary" />
          <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-neutral-dark-gray" />
          <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-neutral-dark-gray" />
        </div>
      </Container>
    </section>
  );
}
