import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foridul Ibne Qauser — Full-Stack Developer",
  description:
    "Full-Stack Developer & Backend Engineer focused on scalable systems, real-time applications, and FAANG-level engineering.",
  keywords: ["Full-Stack Developer", "Backend Engineer", "System Design", "React", "Node.js"],
  openGraph: {
    title: "Foridul Ibne Qauser — Full-Stack Developer",
    description: "Building scalable systems and real-time applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable} font-body bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
