import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    techStack: [{ type: String }],
    projectType: { type: String },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    featured: { type: Boolean, default: false },
    repositoryUrl: { type: String },
    liveUrl: { type: String },
    coverImageUrl: { type: String },
    galleryImageUrls: [{ type: String }],
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
