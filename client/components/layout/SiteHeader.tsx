import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#0f1724]">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold">AKCode</span>
        </div>
        <nav className="hidden gap-8 text-sm font-medium md:flex ml-auto">
          <a href="#hero" className="text-white/90 hover:text-white">Home</a>
          <a href="#value" className="text-white/90 hover:text-white">Why This Matters</a>
          <a href="#how-it-works" className="text-white/90 hover:text-white">How it Works</a>
          <a href="#testimonials" className="text-white/90 hover:text-white">Testimonials</a>
          <a href="#pricing" className="text-white/90 hover:text-white">Pricing</a>
        </nav>
      </div>
    </header>
  );
}
