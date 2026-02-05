import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export function IconBadgeCheck(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l2.2 1.2 2.5-.2 1.2 2.2 2.2 1.2-.2 2.5 1.2 2.2-1.2 2.2.2 2.5-2.2 1.2-1.2 2.2-2.5-.2L12 22l-2.2-1.2-2.5.2-1.2-2.2-2.2-1.2.2-2.5L2 12l1.2-2.2-.2-2.5L5.2 6l1.2-2.2 2.5.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 12.3l2.1 2.1 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBolt(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBuilding(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M8 8h4M8 12h4M8 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 10h2v10h-2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconHome(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconKey(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 7a4 4 0 1 0-7.4 2.1L3 13.7V17h3.3l1.4-1.4V14h1.6l1.4-1.4V11h1.6l1-1A4 4 0 0 0 15 7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconClipboard(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 4h6l1 2h3v16H5V6h3l1-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 4a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconWrench(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14.5 6.5a4 4 0 0 0-5.7 5.6L3 18l3 3 5.9-5.8a4 4 0 0 0 5.6-5.7l-2.1 2.1-2-2 2.1-2.1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
