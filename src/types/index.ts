export interface ProjectImageGroup {
  label: string;
  images: string[];
}

export interface Project {
  title: string;
  description: string;
  images: string[];
  imageGroups?: ProjectImageGroup[];
  tag?: string;
  status: "completed" | "unfinished";
  projectInfo: {
    client?: string;
    year: string;
    role: string;
    techStack?: string;
  };
  links: {
    liveDemo?: string;
    github?: string;
    viewProject?: string;
  };
}

export interface Skill {
  label: string;
}

export interface Experience {
  title: string;
  dateRange: string;
  subtitle: string;
  description: string;
}

export interface SocialLink {
  platform: "linkedin" | "github" | "twitter" | "instagram";
  href: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
