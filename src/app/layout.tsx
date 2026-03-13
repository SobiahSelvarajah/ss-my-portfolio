import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import StarBackground from "@/components/star-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobiah's Portfolio",
  description: "Includes main projects, skillset and resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StarBackground />
        <Navbar />
        <main className="ml-64 px-12 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}