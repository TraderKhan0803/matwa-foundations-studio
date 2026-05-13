import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/matwa-logo.png";

export function Nav({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Matwa Group" className="h-9 w-auto brightness-0 invert" />
          <span className="font-serif text-xl text-white tracking-wide">Matwa Group</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium text-white/90">
          <Link to="/founders" className="hover:text-gold transition-colors">Founders</Link>
          <Link to="/club-members" className="hover:text-gold transition-colors">Club Members</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
