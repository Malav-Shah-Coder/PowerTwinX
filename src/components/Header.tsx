import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="fixed left-1/2 top-5 z-50 flex w-[min(96%,80rem)] -translate-x-1/2 items-center justify-between rounded-full border border-border bg-black text-white px-5 py-3 backdrop-blur-xl">
      <img src="/logo-hr.png" alt="PowerTwinX" className="h-8 px-2" />
      <nav className="hidden gap-6 text-sm text-white/70 md:flex">
        <Link to="/" className="transition-colors hover:text-white [&.active]:text-white">Home</Link>
        <Link to="/about" className="transition-colors hover:text-white [&.active]:text-white">About Us</Link>
        <Link to="/case-studies" className="transition-colors hover:text-white [&.active]:text-white">Case Studies</Link>
        <Link to="/demo" className="transition-colors hover:text-white [&.active]:text-white">Demo</Link>
        <Link to="/contact" className="transition-colors hover:text-white [&.active]:text-white">Contact</Link>
      </nav>
      <div className="flex items-center gap-3">
        <Link
          to="/demo"
          className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-transform hover:bg-gray-100"
        >
          Request Demo
        </Link>
      </div>
    </header>
  );
}
