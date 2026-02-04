import { ProjectForm } from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Add new project</h1>
      <ProjectForm />
    </div>
  );
}
