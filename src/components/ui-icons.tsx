import type { SVGProps } from "react";

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.75" y="5.25" width="16.5" height="13.5" rx="2.5" />
      <path d="m5.25 7.5 5.96 4.9a1.25 1.25 0 0 0 1.58 0l5.96-4.9" />
    </svg>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.4 7.85 10.93.58.11.79-.25.79-.55 0-.28-.01-1.19-.02-2.15-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.44-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.05 0 0 .96-.31 3.18 1.18A11.1 11.1 0 0 1 12 6.1c.98 0 1.97.13 2.89.38 2.22-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.09 0 4.4-2.68 5.38-5.24 5.67.41.36.77 1.06.77 2.13 0 1.54-.01 2.79-.01 3.17 0 .3.21.66.8.55A11.53 11.53 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4.5v10.25" />
      <path d="m7.75 11.5 4.25 4.25 4.25-4.25" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6.75 9.75 5.25 5.25 5.25-5.25" />
    </svg>
  );
}