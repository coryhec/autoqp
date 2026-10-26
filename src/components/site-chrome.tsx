import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-lg font-semibold">
          auto<span className="text-primary">QP</span>
        </Link>
        <div className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
      © {new Date().getFullYear()} AutoQP — practice papers, level up.
    </footer>
  );
}
