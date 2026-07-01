import { Container } from "@/components/layout/Container";
import { SocialIconButton } from "@/components/ui/SocialIconButton";
import { ContactForm } from "@/components/sections/ContactForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer id="contact">
      <div className="h-px w-full bg-neutral-dark-gray/50" />
      <Container className="py-12 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-6">
          {/* Left column — info */}
          <div className="flex flex-1 flex-col justify-between gap-10">
            <div className="flex flex-col gap-8">
              <RevealOnScroll>
                <div className="flex flex-col gap-3">
                  <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-primary">
                    {"//"} Contact
                  </p>
                  <h2 className="font-display text-4xl leading-none text-neutral-white md:text-6xl lg:text-[76px]">
                    Let&apos;s connect
                  </h2>
                  <p className="font-body text-base font-normal leading-relaxed text-neutral-offwhite lg:text-lg">
                    Say hello at{" "}
                    <a
                      href="mailto:russelnite@gmail.com"
                      className="text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
                    >
                      russelnite@gmail.com
                    </a>
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={1}>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <SocialIconButton
                      key={link.platform}
                      platform={link.platform}
                      href={link.href}
                      label={link.label}
                      size="sm"
                    />
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={2}>
              <p className="font-body text-sm font-medium uppercase tracking-wider text-neutral-dark-gray">
                © 2026 Kurt Russel Nite
              </p>
            </RevealOnScroll>
          </div>

          {/* Right column — contact form */}
          <RevealOnScroll delay={1} className="flex-1">
            <ContactForm />
          </RevealOnScroll>
        </div>
      </Container>
    </footer>
  );
}
