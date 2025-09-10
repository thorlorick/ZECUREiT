import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold">AKCode</span>
        </div>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#features" className="text-white/90 hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="text-white/90 hover:text-white">
            How it works
          </a>
          <a href="#security" className="text-white/90 hover:text-white">
            Security
          </a>
        </nav>
        <div className="flex items-center gap-3"></div>
      </div>
    </header>
  );
}
