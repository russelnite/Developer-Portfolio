import type { Metadata } from "next";
import { bebasNeue, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurt Russel Nite — Developer Portfolio",
  description:
    "Full-stack developer building mobile and web applications with Flutter, Kotlin, React, and Firebase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${manrope.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
