import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { ContactMessage } from "@/models/ContactMessage";

export async function POST(request: Request) {
  await connectToDatabase();
  const body = await request.json();
  const message = await ContactMessage.create(body);
  return NextResponse.json({ message }, { status: 201 });
}
