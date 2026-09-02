type P = { className?: string };

export function TurbineIcon({ className }: P) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className} aria-hidden>
      <path d="M60 150V70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 152h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <g className="origin-[60px_66px] [animation:spin_9s_linear_infinite]">
        <path
          d="M60 66 58 18a2 2 0 0 1 4 0Z"
          fill="currentColor"
          opacity=".9"
          transform="rotate(0 60 66)"
        />
        <path d="M60 66 58 18a2 2 0 0 1 4 0Z" fill="currentColor" opacity=".9" transform="rotate(120 60 66)" />
        <path d="M60 66 58 18a2 2 0 0 1 4 0Z" fill="currentColor" opacity=".9" transform="rotate(240 60 66)" />
      </g>
      <circle cx="60" cy="66" r="5" fill="currentColor" />
    </svg>
  );
}

export function SolarIcon({ className }: P) {
  return (
    <svg viewBox="0 0 160 130" fill="none" className={className} aria-hidden>
      <path d="M78 122V92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 124h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M22 90 44 34h72l22 56Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M35 71h94M48 52h64M80 34v56" stroke="currentColor" strokeWidth="2" opacity=".55" />
    </svg>
  );
}

export function TransformerIcon({ className }: P) {
  return (
    <svg viewBox="0 0 140 140" fill="none" className={className} aria-hidden>
      <rect x="34" y="46" width="72" height="60" rx="8" stroke="currentColor" strokeWidth="3" />
      <path d="M50 46V26M90 46V26M46 26h8M86 26h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 60l-12 20h24l-12 20" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M40 118h60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

export function PoleIcon({ className }: P) {
  return (
    <svg viewBox="0 0 120 170" fill="none" className={className} aria-hidden>
      <path d="M60 162V16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 40h88M26 66h68" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 40 30 66M60 40l30 26" stroke="currentColor" strokeWidth="2" opacity=".45" />
      <circle cx="16" cy="40" r="4" fill="currentColor" />
      <circle cx="104" cy="40" r="4" fill="currentColor" />
    </svg>
  );
}

export function HouseIcon({ className, lit = false }: P & { lit?: boolean }) {
  return (
    <svg viewBox="0 0 200 170" fill="none" className={className} aria-hidden>
      <path
        d="M24 78 100 22l76 56v70a6 6 0 0 1-6 6H30a6 6 0 0 1-6-6Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="var(--surface)"
      />
      <path d="M14 84 100 18l86 66" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <rect
        x="60"
        y="96"
        width="30"
        height="26"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
        className="transition-all duration-500"
        fill={lit ? "var(--volt)" : "transparent"}
      />
      <rect
        x="112"
        y="96"
        width="30"
        height="26"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
        className="transition-all duration-500"
        fill={lit ? "var(--volt)" : "transparent"}
      />
      <path d="M84 154v-24a16 16 0 0 1 32 0v24" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
