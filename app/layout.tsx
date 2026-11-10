import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/lib/query-client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aki-Petteri Kuivas - Full-stack Developer",
    template: "%s - Aki-Petteri Kuivas",
  },
  description:
    "Full-stack developer experienced in TypeScript, React, Next.js, Angular, Node.js, .NET, and relational databases.",
  openGraph: {
    title: "Aki-Petteri Kuivas - Full-stack Developer",
    description:
      "Full-stack developer experienced in TypeScript, React, Next.js, Angular, Node.js, .NET, and relational databases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
