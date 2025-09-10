import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Feb864e5e8f33472984930311f6f85b88%2F6b95d94cf5ba4916a87cb9f41fde0cb0?format=webp&width=800"
            alt="AKCode logo"
            className="h-8 w-auto"
            loading="lazy"
            width={128}
            height={32}
          />
          <span className="sr-only">AKCode</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#features" className="text-foreground/80 hover:text-foreground">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-foreground">
            How it works
          </a>
          <a href="#security" className="text-foreground/80 hover:text-foreground">
            Security
          </a>
        </nav>
        <div className="flex items-center gap-3"></div>
      </div>
    </header>
  );
}
