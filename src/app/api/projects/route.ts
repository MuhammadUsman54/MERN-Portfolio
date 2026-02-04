import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";

export async function GET() {
  await connectToDatabase();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  await connectToDatabase();
  const body = await request.json();
  const project = await Project.create(body);
  return NextResponse.json({ project }, { status: 201 });
}
