import { cn } from "@/lib/utils";

interface InputProps {
  label: string;
  id: string;
  type?: "text" | "email";
  placeholder?: string;
  className?: string;
}

interface TextareaProps {
  label: string;
  id: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export function Input({
  label,
  id,
  type = "text",
  placeholder,
  className,
}: InputProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="rounded-[2px] border border-neutral-dark-gray bg-neutral-card px-4 py-3 font-body text-base font-normal text-neutral-white placeholder:text-neutral-dark-gray transition-colors focus-visible:border-primary focus-visible:outline-none"
      />
    </div>
  );
}

export function Textarea({
  label,
  id,
  placeholder,
  rows = 5,
  className,
}: TextareaProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        className="resize-none rounded-[2px] border border-neutral-dark-gray bg-neutral-card px-4 py-3 font-body text-base font-normal text-neutral-white placeholder:text-neutral-dark-gray transition-colors focus-visible:border-primary focus-visible:outline-none"
      />
    </div>
  );
}
