import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" },
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <p className="text-lg font-semibold">MERN Portfolio</p>
          <p className="text-sm text-white/60">Full-stack developer & product builder</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-1 transition hover:border-white/20 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
