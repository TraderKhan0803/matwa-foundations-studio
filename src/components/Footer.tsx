import logo from "@/assets/matwa-logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Matwa Group" className="h-8 w-auto brightness-0 invert" />
          <span className="font-serif text-lg text-white">Matwa Group</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a href="mailto:info@matwagroup.com" className="hover:text-gold transition-colors">info@matwagroup.com</a>
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <span className="text-white/50">© 2025 Matwa Group</span>
        </div>
      </div>
    </footer>
  );
}
