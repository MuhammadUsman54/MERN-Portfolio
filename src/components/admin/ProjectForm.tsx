import { RichTextEditor } from "./RichTextEditor";

export function ProjectForm() {
  return (
    <form className="section-card space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          placeholder="Project title"
          name="title"
        />
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          placeholder="Slug"
          name="slug"
        />
      </div>
      <textarea
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
        placeholder="Short summary"
        name="summary"
        rows={3}
      />
      <RichTextEditor label="Long description" name="description" />
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          placeholder="Tech stack (comma-separated)"
          name="techStack"
        />
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          placeholder="Project type"
          name="projectType"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          placeholder="Live URL"
          name="liveUrl"
        />
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
          placeholder="GitHub URL"
          name="repoUrl"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm text-white/70">
          <input type="checkbox" name="featured" className="h-4 w-4" />
          Featured
        </label>
        <label className="flex items-center gap-2 text-sm text-white/70">
          <input type="checkbox" name="draft" className="h-4 w-4" />
          Draft
        </label>
      </div>
      <button
        type="submit"
        className="w-fit rounded-full bg-primary px-6 py-2 text-sm font-semibold"
      >
        Save project
      </button>
    </form>
  );
}
