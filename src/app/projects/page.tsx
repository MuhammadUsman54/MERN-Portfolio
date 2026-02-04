import Link from "next/link";
import { FilterBar } from "@/components/projects/FilterBar";
import { ProjectCard } from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Commerce Studio",
    summary: "Composable storefront for premium brands with headless CMS workflows.",
    techStack: ["Next.js", "Tailwind", "Stripe"],
    slug: "commerce-studio",
  },
  {
    title: "Ops Command Center",
    summary: "Operations dashboard with live metrics and data exports.",
    techStack: ["React", "Node.js", "MongoDB"],
    slug: "ops-command-center",
  },
  {
    title: "Content Growth Lab",
    summary: "SEO-driven content platform with AI-assisted workflows.",
    techStack: ["Next.js", "OpenAI", "Prisma"],
    slug: "content-growth-lab",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="section-card space-y-4">
        <h1 className="text-3xl font-semibold">Projects gallery</h1>
        <p className="text-white/70">
          Browse by stack, project type, or engagement stage. Each project includes a
          detailed breakdown of scope, technologies, and impact.
        </p>
        <FilterBar />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.title} href={`/projects/${project.slug}`}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </section>
    </div>
  );
}
