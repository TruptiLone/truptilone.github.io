import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trupti-lone-ai-portfolio.truptidhoke4.chatgpt.site"),
  title: { default: "Trupti Lone — Software, Machine Learning & AI Engineer", template: "%s — Trupti Lone" },
  description: "Trupti Lone’s software engineering portfolio: React and TypeScript interfaces, Python and FastAPI backends, machine learning, RAG, voice AI, agent orchestration, and MCP integrations.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Trupti Lone — Software, Machine Learning & AI Engineer",
    description: "Trupti Lone’s software engineering portfolio: React and TypeScript interfaces, Python and FastAPI backends, machine learning, RAG, voice AI, agent orchestration, and MCP integrations.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Machine Learning & AI Engineer — Trupti Lone" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
