import Link from "next/link";

const stats = [
  { label: "Total projects", value: "12" },
  { label: "Featured", value: "4" },
  { label: "Drafts", value: "2" },
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <section className="section-card space-y-4">
        <h1 className="text-3xl font-semibold">Admin dashboard</h1>
        <p className="text-white/70">
          Manage your portfolio content, upload project assets, and track featured
          projects.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/projects/new"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold"
          >
            Add new project
          </Link>
          <button
            type="button"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold"
          >
            Upload images
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="section-card">
            <p className="text-sm text-white/60">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="section-card space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent projects</h2>
          <Link href="/projects" className="text-sm text-primary">
            View live site
          </Link>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="font-semibold">Commerce Studio</p>
              <p>Next.js · Published · Featured</p>
            </div>
            <Link href="/admin/projects/1/edit" className="text-primary">
              Edit
            </Link>
          </div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="font-semibold">Ops Command Center</p>
              <p>React · Draft</p>
            </div>
            <Link href="/admin/projects/2/edit" className="text-primary">
              Edit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
