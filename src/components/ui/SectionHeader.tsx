interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-display text-4xl leading-none text-neutral-white md:text-6xl lg:text-[76px]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[600px] font-body text-base font-normal leading-relaxed text-neutral-offwhite lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
