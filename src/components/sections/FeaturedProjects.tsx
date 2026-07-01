import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects">
      <div className="h-px w-full bg-neutral-dark-gray/50" />
      <Container className="py-12 lg:py-20">
        <div className="flex flex-col gap-12 lg:gap-20">
          <RevealOnScroll>
            <SectionHeader
              title="Featured Projects"
              subtitle="Selected work that demonstrates my approach to building reliable, user-focused applications."
            />
          </RevealOnScroll>

          <div className="flex flex-col gap-16 lg:gap-[100px]">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.title} delay={(index % 3) as 0 | 1 | 2}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
