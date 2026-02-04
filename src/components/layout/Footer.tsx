export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>© 2024 MERN Portfolio. Built with Next.js & MongoDB.</p>
        <div className="flex gap-4">
          <span>hello@portfolio.dev</span>
          <span>+1 (555) 555-5555</span>
        </div>
      </div>
    </footer>
  );
}
