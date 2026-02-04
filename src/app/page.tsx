import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";

const featuredProjects = [
  {
    title: "SaaS Analytics Dashboard",
    summary: "Real-time analytics, role-based access, and subscription billing.",
    techStack: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "E-commerce Experience",
    summary: "High-converting storefront with headless CMS integration.",
    techStack: ["React", "Express", "Stripe"],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="section-card grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Full-stack web developer
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            Building modern web experiences with thoughtful design, clean code, and
            measurable outcomes.
          </h1>
          <p className="text-base text-white/70">
            I partner with startups and agencies to deliver scalable applications,
            client-ready dashboards, and polished marketing sites. This portfolio showcases
            the systems behind each project, from discovery to deployment.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Skills snapshot</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>✔️ Next.js, React, and design systems</li>
              <li>✔️ Node.js APIs, MongoDB modeling, and auth</li>
              <li>✔️ Performance, SEO, and analytics instrumentation</li>
              <li>✔️ Product strategy, roadmaps, and stakeholder updates</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/70">
              Currently available for freelance engagements and long-term partnerships.
            </p>
            <p className="mt-2 text-sm font-semibold">Location: Remote / Global</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm text-primary">
            View all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
