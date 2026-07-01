import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRight";
import { GitHubIcon } from "@/components/icons/GitHub";

interface LinkCTAProps {
  label: string;
  href: string;
  icon?: "arrow" | "github";
}

export function LinkCTA({ label, href, icon = "arrow" }: LinkCTAProps) {
  return (
    <a
      href={href}
      className="group inline-flex flex-col gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-flex items-center gap-1">
        <span className="font-body text-sm font-bold uppercase tracking-wider leading-normal text-primary">
          {label}
        </span>
        {icon === "arrow" && (
          <ArrowUpRightIcon className="size-5 text-primary" />
        )}
        {icon === "github" && (
          <GitHubIcon className="size-5 text-primary" />
        )}
      </span>
      <span className="h-0.5 w-full bg-primary/50 transition-all group-hover:bg-primary" />
    </a>
  );
}
