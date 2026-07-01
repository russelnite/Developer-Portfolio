"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

interface NavbarProps {
  brandName: string;
  links: NavLink[];
}

export function Navbar({ brandName, links }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-dark-gray/40 bg-background/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 lg:px-[60px]"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-display text-[24px] leading-none tracking-widest text-primary lg:text-[28px]"
        >
          {brandName}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-body text-sm font-medium uppercase tracking-wider text-neutral-offwhite transition-colors hover:text-neutral-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-neutral-offwhite md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-neutral-dark-gray/40 transition-all duration-300 md:hidden",
          mobileMenuOpen ? "max-h-64" : "max-h-0 border-t-0"
        )}
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-body text-sm font-medium uppercase tracking-wider text-neutral-offwhite transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
