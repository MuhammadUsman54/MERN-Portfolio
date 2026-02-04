import { ProjectForm } from "@/components/admin/ProjectForm";

export default function EditProjectPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Edit project</h1>
      <ProjectForm />
    </div>
  );
}
