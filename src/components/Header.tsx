import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="fixed left-1/2 top-5 z-50 flex w-[min(96%,80rem)] -translate-x-1/2 items-center justify-between rounded-full border border-border bg-surface/70 px-5 py-3 backdrop-blur-xl">
      <span className="font-display text-lg px-2 text-foreground">PowerTwinX</span>
      <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
        <Link to="/" className="transition-colors hover:text-foreground [&.active]:text-foreground">Home</Link>
        <Link to="/about" className="transition-colors hover:text-foreground [&.active]:text-foreground">About Us</Link>
        <Link to="/case-studies" className="transition-colors hover:text-foreground [&.active]:text-foreground">Case Studies</Link>
        <Link to="/demo" className="transition-colors hover:text-foreground [&.active]:text-foreground">Demo</Link>
        <Link to="/contact" className="transition-colors hover:text-foreground [&.active]:text-foreground">Contact</Link>
      </nav>
      <div className="flex items-center gap-3">
        <Link
          to="/demo"
          className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-transform"
        >
          Request Demo
        </Link>
      </div>
    </header>
  );
}
