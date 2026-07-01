import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/components/icons/LinkedIn";
import { GitHubIcon } from "@/components/icons/GitHub";
import { TwitterIcon } from "@/components/icons/Twitter";
import { InstagramIcon } from "@/components/icons/Instagram";

interface SocialIconButtonProps {
  platform: "linkedin" | "github" | "twitter" | "instagram";
  href: string;
  label: string;
  size?: "sm" | "md";
}

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
};

export function SocialIconButton({
  platform,
  href,
  label,
  size = "md",
}: SocialIconButtonProps) {
  const Icon = iconMap[platform];

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-[2px] border border-neutral-dark-gray transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "md" &&
          "size-[54px] bg-neutral-dark text-neutral-offwhite hover:border-primary hover:text-primary",
        size === "sm" && "size-8 border-0 text-neutral-offwhite hover:text-primary"
      )}
    >
      <Icon className={cn(size === "md" ? "size-[22px]" : "size-6")} />
    </a>
  );
}
