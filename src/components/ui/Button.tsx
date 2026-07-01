import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "outline" | "submit";
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  icon,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex h-[54px] items-center justify-center font-body text-sm font-bold uppercase tracking-wider leading-none transition-all duration-200 ease-in-out",
        variant === "primary" &&
          "rounded-[2px] bg-primary pl-6 pr-1.5 text-neutral-black hover:bg-primary-dark",
        variant === "outline" &&
          "rounded-[2px] border border-neutral-dark-gray bg-transparent px-10 text-neutral-white hover:border-primary hover:text-primary",
        variant === "submit" &&
          "rounded-[2px] bg-primary px-10 text-neutral-black hover:bg-primary-dark",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {children}
      {icon && (
        <span className="ml-3 flex size-[42px] items-center justify-center rounded-[2px] bg-neutral-black/20">
          {icon}
        </span>
      )}
    </button>
  );
}
