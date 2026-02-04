import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  await connectToDatabase();
  const project = await Project.findById(params.id);
  return NextResponse.json({ project });
}

export async function PUT(request: Request, { params }: Params) {
  await connectToDatabase();
  const body = await request.json();
  const project = await Project.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json({ project });
}

export async function DELETE(_: Request, { params }: Params) {
  await connectToDatabase();
  await Project.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
