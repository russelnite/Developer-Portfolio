interface IconProps {
  className?: string;
}

export function ArrowCircleIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="42" height="42" rx="2" fill="currentColor" />
      <path
        d="M16 21h10m0 0l-4-4m4 4l-4 4"
        stroke="#FF4655"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
