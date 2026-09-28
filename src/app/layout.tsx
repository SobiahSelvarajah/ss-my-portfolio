import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import StarBackground from "@/components/layout/StarBackground";
import "./globals.css";

const title =
  "Sobiah Selvarajah | Junior Full-Stack Developer";

const description =
  "Portfolio of Sobiah Selvarajah, a junior full-stack developer building responsive, accessible web applications with React, Next.js and TypeScript."

export const metadata: Metadata = {
  metadataBase: new URL("https://sobiah.com"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: "Sobiah Selvarajah",
      url: "/",
    },
  ],
  creator: "Sobiah Selvarajah",
  keywords: [
    "Sobiah Selvarajah",
    "Junior Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio,"
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Sobiah Selvarajah Portfolio",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
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
        
        <main className="lg:ml-64">
          {children}
        </main>
      </body>
    </html>
  );
}