import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-black text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
        <div className="col-span-2 md:col-span-2">
          <img src="/logo-hr.png" alt="PowerTwinX" className="h-10 mb-4 block" />
          <p className="text-white/70 text-sm max-w-xs leading-relaxed">
            The ultra-premium digital twin platform for modern electricity grids. Unmatched intelligence, real-time insights, zero compromise.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-volt transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-volt transition-colors">About Us</Link></li>
            <li><Link to="/case-studies" className="hover:text-volt transition-colors">Case Studies</Link></li>
            <li><Link to="/projects" className="hover:text-volt transition-colors">Projects</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-white mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/resources" className="hover:text-volt transition-colors">Blogs</Link></li>
            <li><Link to="/resources" className="hover:text-volt transition-colors">Whitepapers</Link></li>
            <li><Link to="/resources" className="hover:text-volt transition-colors">Downloads</Link></li>
            <li><Link to="/demo" className="hover:text-volt transition-colors">Demo</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/contact" className="hover:text-volt transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-volt transition-colors">Twitter (X)</a></li>
            <li><a href="#" className="hover:text-volt transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-volt transition-colors">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 gap-4">
        <p>© 2026 PowerTwinX. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
