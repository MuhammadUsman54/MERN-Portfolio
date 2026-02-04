export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="section-card space-y-4">
        <h1 className="text-3xl font-semibold">About me</h1>
        <p className="text-white/70">
          I’m a full-stack web developer with 8+ years of experience building MVPs,
          production platforms, and internal tools. I translate complex requirements into
          intuitive interfaces and resilient backend services.
        </p>
        <p className="text-white/70">
          My work spans product strategy, design systems, data modeling, and deployment.
          I partner closely with founders and product teams to deliver measurable impact.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="section-card space-y-3">
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="space-y-2 text-sm text-white/70">
            <li>• Lead Engineer — SaaS analytics platform (2022 - Present)</li>
            <li>• Senior Frontend Engineer — E-commerce consultancy (2019 - 2022)</li>
            <li>• Full-stack Developer — Growth agency (2016 - 2019)</li>
          </ul>
        </div>
        <div className="section-card space-y-3">
          <h2 className="text-xl font-semibold">Technical skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "Tailwind CSS",
              "AWS",
              "CI/CD",
            ].map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
