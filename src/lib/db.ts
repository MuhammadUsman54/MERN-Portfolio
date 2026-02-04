import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  console.warn("Missing MONGODB_URI environment variable.");
}

let cached = (global as typeof globalThis & { mongoose?: typeof mongoose }).mongoose;

if (!cached) {
  cached = (global as typeof globalThis & { mongoose?: typeof mongoose }).mongoose = mongoose;
}

export async function connectToDatabase() {
  if (cached.connection.readyState === 1) {
    return cached.connection;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  await cached.connect(MONGODB_URI);
  return cached.connection;
}
