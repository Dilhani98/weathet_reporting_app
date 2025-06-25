// app/layout.tsx (or app/layout.jsx if using JS)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts with CSS variable names
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page metadata
export const metadata: Metadata = {
  title: "Weather App",
  description: "A modern weather app built with Next.js and Tailwind CSS.",
  authors: [{ name: "Your Name" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-900 to-blue-400 text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
