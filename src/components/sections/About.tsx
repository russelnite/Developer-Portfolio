import { Container } from "@/components/layout/Container";
import { LinkCTA } from "@/components/ui/LinkCTA";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section id="about">
      <div className="h-px w-full bg-neutral-dark-gray/50" />
      <Container className="py-12 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Title */}
          <RevealOnScroll className="shrink-0">
            <p className="mb-2 font-body text-sm font-bold uppercase tracking-[0.3em] text-primary">
              {"//"} About
            </p>
            <h2 className="font-display text-5xl leading-[0.9] text-neutral-white md:text-7xl lg:text-[80px]">
              About me
            </h2>
          </RevealOnScroll>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-6">
            <RevealOnScroll delay={1}>
              <div className="flex flex-col gap-4">
                <p className="font-body text-xl font-medium leading-[1.4] text-neutral-white lg:text-2xl">
                  Web Developer | PUP Batch 2024 | Aspiring Software Engineer |
                  Currently Learning Mobile App Dev
                </p>
                <p className="font-body text-base font-normal leading-relaxed text-neutral-offwhite lg:text-lg">
                  I&apos;m currently a 4th year student with an internship experience in
                  both frontend and backend development. I hold a Diploma in
                  Information Communication Technology from the Polytechnic
                  University of the Philippines (2021–2024) and am currently
                  pursuing a BS in Information Technology at Our Lady of Fatima
                  University(2025–2027).
                </p>
                <p className="font-body text-base font-normal leading-relaxed text-neutral-offwhite lg:text-lg">
                  I completed my internship at Pixel8 Web Solutions & Consultancy
                  Inc. where I worked as a Frontend Developer (Vue.js, Quasar
                  Framework, Cypress) and Backend Developer (PHP, Thingengineer). I also
                  hold a Java Programming NCIII certification from Joysis TechVoc,
                  a Web Development with React JS certificate, a Data Science in
                  the Modern World certification (Data Visualization) from The
                  Coding School, and an Intro to Cybersecurity credential from
                  Cisco Networking Academy.
                </p>
                <p className="font-body text-base font-normal leading-relaxed text-neutral-offwhite lg:text-lg">
                  Currently expanding into mobile development with Flutter, Dart,
                  Kotlin, and iOS (Objective-C/Storyboard) — always looking to
                  grow my skill set and take on challenging projects.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <LinkCTA
                label="Connect on LinkedIn"
                href="https://linkedin.com/in/kurt-russel-nite/"
                icon="arrow"
              />
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
