const filters = ["All", "Next.js", "React", "Node.js", "UX", "SaaS"];

export function FilterBar() {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-wider text-white/70 transition hover:border-white/30 hover:text-white"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
