"use client";

import { useState } from "react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { LinkCTA } from "@/components/ui/LinkCTA";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeGroup, setActiveGroup] = useState(0);

  // Determine which images to show
  const hasGroups = project.imageGroups && project.imageGroups.length > 0;
  const displayImages = hasGroups
    ? project.imageGroups![activeGroup].images
    : project.images;

  return (
    <article className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
      {/* Project image carousel */}
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[4px] border border-neutral-dark-gray bg-neutral-card lg:size-[600px]">
        <ImageCarousel
          key={hasGroups ? `group-${activeGroup}` : "default"}
          images={displayImages}
          alt={`Screenshot of ${project.title}`}
        />

        {/* Top-left tag */}
        {project.tag && (
          <span className="absolute left-3 top-3 z-20 rounded-[2px] border border-primary/30 bg-neutral-black/90 px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-primary">
            {project.tag}
          </span>
        )}

        {/* Image group toggle — upper right corner */}
        {hasGroups && (
          <div className="absolute right-3 top-3 z-20 flex gap-1 rounded-[2px] border border-neutral-dark-gray bg-neutral-black/90 p-1">
            {project.imageGroups!.map((group, index) => (
              <button
                key={group.label}
                type="button"
                onClick={() => setActiveGroup(index)}
                className={cn(
                  "rounded-[2px] px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider transition-all",
                  index === activeGroup
                    ? "bg-primary text-neutral-black"
                    : "text-neutral-offwhite hover:text-neutral-white"
                )}
              >
                {group.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col gap-10">
        <div className="flex flex-col gap-6">
          {/* Title with status badge */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-body text-2xl font-medium leading-[1.3] text-neutral-white lg:text-[28px]">
                {project.title}
              </h3>
              <span
                className={cn(
                  "shrink-0 rounded-[2px] px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider",
                  project.status === "completed"
                    ? "border border-accent-teal/40 bg-accent-teal/10 text-accent-teal"
                    : "border border-neutral-offwhite/30 bg-neutral-offwhite/10 text-neutral-offwhite"
                )}
              >
                {project.status}
              </span>
            </div>
            <p className="text-justify font-body text-base font-normal leading-relaxed text-neutral-offwhite lg:text-lg">
              {project.description}
            </p>
          </div>

          {/* Project info */}
          <div className="flex flex-col gap-3">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-primary">
              Project Info
            </p>
            <div className="border-b border-neutral-dark-gray">
              {project.projectInfo.client && (
                <div className="flex items-center justify-between border-t border-neutral-dark-gray py-3">
                  <span className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite">
                    Client
                  </span>
                  <span className="font-body text-sm font-medium text-neutral-white">
                    {project.projectInfo.client}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between border-t border-neutral-dark-gray py-3">
                <span className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite">
                  Year
                </span>
                <span className="font-body text-sm font-medium text-neutral-white">
                  {project.projectInfo.year}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-neutral-dark-gray py-3">
                <span className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite">
                  Role
                </span>
                <span className="font-body text-sm font-medium text-neutral-white">
                  {project.projectInfo.role}
                </span>
              </div>
              {project.projectInfo.techStack && (
                <div className="flex items-center justify-between border-t border-neutral-dark-gray py-3">
                  <span className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite">
                    Tech Stack
                  </span>
                  <span className="font-body text-sm font-medium text-primary">
                    {project.projectInfo.techStack}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6">
          {project.links.liveDemo && (
            <LinkCTA label="Live Demo" href={project.links.liveDemo} icon="arrow" />
          )}
          {project.links.github && (
            <LinkCTA label="See on Github" href={project.links.github} icon="github" />
          )}
          {project.links.viewProject && (
            <LinkCTA label="View project" href={project.links.viewProject} icon="arrow" />
          )}
        </div>
      </div>
    </article>
  );
}
