import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-black text-white pt-20 pb-10 mt-auto">
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
            <li><span className="opacity-50 cursor-not-allowed">Projects</span></li>
            <li><Link to="/demo" className="hover:text-volt transition-colors">Request Demo</Link></li>
            <li><Link to="/contact" className="hover:text-volt transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="hidden">
          <h4 className="font-medium text-white mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/resources" className="hover:text-volt transition-colors">Blogs</Link></li>
            <li><Link to="/resources" className="hover:text-volt transition-colors">Whitepapers</Link></li>
            <li><Link to="/resources" className="hover:text-volt transition-colors">Downloads</Link></li>
            <li><Link to="/resources" className="hover:text-volt transition-colors">API Docs</Link></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-2">
          <h4 className="font-medium text-white mb-4">Contact</h4>
          <address className="not-italic text-sm text-white/70 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-volt shrink-0" />
              <span>EnerSpace Technology LLP<br/>H 308 Titanium City Center<br/>100 ft Road, Prahlad Nagar,<br/>Satellite, Ahmedabad 380015</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-volt shrink-0" />
              <span>+91 8238972042</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-volt shrink-0" />
              <span>info@powertwinx.com</span>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t border-border/50 max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 gap-4">
        <p>© 2026 PowerTwinX. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <a href="#" className="hidden">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
