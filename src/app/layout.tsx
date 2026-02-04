import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "MERN Portfolio",
  description: "Professional portfolio with project management features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
