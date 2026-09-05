import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-5 z-50 flex w-[min(96%,80rem)] -translate-x-1/2 items-center justify-between rounded-full border border-border bg-black text-white px-5 py-3 backdrop-blur-xl">
      <Link to="/" className="flex items-center">
         <img src="/logo-hr.png" alt="PowerTwinX" className="h-8 md:h-10 px-2" />
      </Link>
      
      <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
        <Link to="/" className="transition-colors hover:text-white [&.active]:text-white">Home</Link>
        <Link to="/about" className="transition-colors hover:text-white [&.active]:text-white">About Us</Link>
        <Link to="/case-studies" className="transition-colors hover:text-white [&.active]:text-white">Case Studies</Link>
        <Link to="/contact" className="transition-colors hover:text-white [&.active]:text-white">Contact</Link>
        <Link
          to="/demo"
          className="ml-4 rounded-full bg-white px-5 py-2 text-xs font-medium text-black shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-transform hover:bg-gray-100"
        >
          Request Demo
        </Link>
      </nav>

      <button 
        className="md:hidden p-2 text-white outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {menuOpen && (
        <div className="absolute top-[120%] left-0 w-full bg-black/95 backdrop-blur-xl border border-border/50 rounded-2xl p-6 flex flex-col gap-6 shadow-xl md:hidden origin-top animate-reveal">
            <Link onClick={() => setMenuOpen(false)} to="/" className="text-white hover:text-volt text-lg font-medium">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about" className="text-white hover:text-volt text-lg font-medium">About Us</Link>
            <Link onClick={() => setMenuOpen(false)} to="/case-studies" className="text-white hover:text-volt text-lg font-medium">Case Studies</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact" className="text-white hover:text-volt text-lg font-medium">Contact</Link>
            <div className="pt-4 border-t border-white/10">
              <Link
                onClick={() => setMenuOpen(false)}
                to="/demo"
                className="w-full inline-block text-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
              >
                Request Demo
              </Link>
            </div>
        </div>
      )}
    </header>
  );
}
