interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="inline-flex items-center justify-center rounded-[2px] border border-neutral-dark-gray px-6 py-3 font-body text-xs font-bold uppercase tracking-wider leading-none text-neutral-white transition-colors hover:border-primary hover:text-primary">
      {label}
    </span>
  );
}
