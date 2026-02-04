import Link from "next/link";

const project = {
  title: "Commerce Studio",
  summary:
    "A full-stack storefront with dynamic product cataloging, analytics, and marketing automation.",
  techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  highlights: [
    "Implemented a custom product pipeline with automated SEO metadata.",
    "Reduced time-to-content by 42% through CMS automation.",
    "Built performance budgets with Lighthouse CI.",
  ],
  liveUrl: "https://example.com",
  repoUrl: "https://github.com/example",
};

export default function ProjectDetailPage() {
  return (
    <div className="space-y-8">
      <section className="section-card space-y-4">
        <p className="tag">Featured</p>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-white/70">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={project.liveUrl}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold"
          >
            View live site
          </Link>
          <Link
            href={project.repoUrl}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold"
          >
            GitHub repo
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.4fr_0.6fr]">
        <div className="section-card space-y-4">
          <h2 className="text-xl font-semibold">Project story</h2>
          <p className="text-white/70">
            This project combined a headless commerce stack with tailored analytics for
            high-growth teams. The system includes custom dashboards, A/B testing, and a
            content pipeline that syncs across marketing and sales.
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            {project.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <aside className="section-card space-y-3">
          <h3 className="text-lg font-semibold">Project snapshot</h3>
          <p className="text-sm text-white/70">
            Status: Completed · Type: Product build · Role: Lead developer
          </p>
          <p className="text-sm text-white/70">
            Timeline: 10 weeks · Team: 3 engineers + designer
          </p>
        </aside>
      </section>
    </div>
  );
}
