import { Container } from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience">
      <div className="h-px w-full bg-neutral-dark-gray/50" />
      <Container className="py-12 lg:py-20">
        <div className="flex flex-col gap-12">
          <RevealOnScroll>
            <div className="flex flex-col gap-2">
              <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-primary">
                {"//"} Experience
              </p>
              <h2 className="font-display text-4xl leading-none text-neutral-white md:text-6xl lg:text-[76px]">
                Work History
              </h2>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={`${exp.title}-${exp.duration}`} delay={(index % 3) as 0 | 1 | 2}>
                <div className="flex flex-col gap-5 border-l-2 border-neutral-dark-gray pl-6">
                  {/* Header */}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-body text-xl font-medium text-neutral-white lg:text-2xl">
                        {exp.title}
                      </h3>
                      <span className="rounded-[2px] bg-primary/10 border border-primary/30 px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-primary">
                        {exp.hours}
                      </span>
                    </div>
                    <p className="font-body text-base font-normal text-neutral-offwhite">
                      {exp.company} — {exp.department}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm text-neutral-offwhite">
                        Supervisor:
                      </span>
                      {exp.supervisor.linkedIn ? (
                        <a
                          href={exp.supervisor.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary-dark"
                        >
                          {exp.supervisor.name}
                        </a>
                      ) : (
                        <span className="font-body text-sm font-medium text-neutral-white">
                          {exp.supervisor.name}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-neutral-dark-gray">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-justify font-body text-sm font-normal leading-relaxed text-neutral-offwhite lg:text-base">
                    {exp.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {exp.techStack.map((group) => (
                      <div key={group.category} className="flex items-center gap-2">
                        <span className="font-body text-[11px] font-bold uppercase tracking-wider text-neutral-dark-gray">
                          {group.category}:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-[2px] border border-neutral-dark-gray px-2 py-0.5 font-body text-[11px] font-medium text-neutral-offwhite"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
