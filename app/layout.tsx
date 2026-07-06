import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Cursor from "@/components/cursor/cursor";
import "./globals.css";
import { Toaster } from "sonner";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "portofolio | Naail Rizq Widiyanto",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and UI/UX Design.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "UI UX",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Cursor />
        {children}
        <Toaster
          position="top-right"
          richColors
          duration={2500}
          theme="light"
        />
      </body>
    </html>
  );
}
