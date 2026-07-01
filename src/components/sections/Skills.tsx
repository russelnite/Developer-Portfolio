import { Container } from "@/components/layout/Container";
import { SkillChip } from "@/components/ui/SkillChip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <Container className="py-12 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-6">
          {/* Title */}
          <RevealOnScroll className="shrink-0 lg:w-[500px]">
            <p className="mb-2 font-body text-sm font-bold uppercase tracking-[0.3em] text-primary">
              {"//"} Loadout
            </p>
            <h2
              id="skills-heading"
              className="font-display text-4xl leading-none text-neutral-white md:text-6xl lg:text-[76px]"
            >
              My Skills
            </h2>
          </RevealOnScroll>

          {/* Skills content */}
          <div className="flex flex-1 flex-col gap-6">
            <RevealOnScroll delay={1}>
              <p className="font-body text-base font-normal leading-relaxed text-neutral-offwhite lg:text-lg">
                Always expanding the toolkit. Here&apos;s what I bring to the field.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillChip key={skill.label} label={skill.label} />
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
