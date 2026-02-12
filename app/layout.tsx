import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiteForge – AI-Powered Premium Website Builder",
  description: "Generate high-end Next.js sites with Agentic AI in minutes",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* webMCP untuk AI agents – forward-compatible 2026 */}
        <script
          type="application/webMCP+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://webmcp.org",
              "@type": "WebPage",
              actions: [
                { "@type": "CreateAction", name: "Generate Site", target: "/forge" },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
          }
