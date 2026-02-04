export type ProjectCardProps = {
  title: string;
  summary: string;
  techStack: string[];
};

export function ProjectCard({ title, summary, techStack }: ProjectCardProps) {
  return (
    <article className="section-card space-y-4">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="tag">Featured</span>
      </div>
      <p className="text-sm text-white/70">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
