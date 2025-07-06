import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { GeistSans, GeistMono } from "geist/font";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "TraceReverse - Learn by Reverse Engineering Real Projects",
    template: "%s | TraceReverse"
  },
  description: "Master frontend development by reverse engineering real-world projects. Clone, study, and rebuild professional applications with step-by-step guidance.",
  keywords: [
    "frontend development",
    "reverse engineering", 
    "learn coding",
    "web development",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "programming tutorials",
    "coding education"
  ],
  authors: [{ name: "TraceReverse" }],
  creator: "TraceReverse",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <footer className="border-t border-border bg-muted/30 py-8 mt-16">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-muted-foreground text-sm">
                  © 2025 TraceReverse. Built with Next.js and TailwindCSS.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
