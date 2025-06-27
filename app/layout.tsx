import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "Michael Anthony Carter - AI Systems Strategist & Prompt Engineering Expert",
  description:
    "Michael Anthony Carter (Mac) is an AI Systems Strategist, Prompt Engineering Expert, and Fractional CSO who helps seed to Series B startups integrate AI tools, build scalable systems, and maintain mission-driven growth. Specializing in ChatGPT, strategic AI implementation, and soul-tech integration for purpose-driven founders.",
  keywords:
    "AI Systems Strategist, Prompt Engineering Expert, Fractional CSO, AI Integration for Startups, Seed to Series B AI Consulting, ChatGPT for Business, AI Tools Implementation, Mission-Driven Startup Consulting, Strategic AI Planning, Soul-Tech Integration, Purpose-Driven AI Strategy, Startup Systems Architecture, AI Workflow Design, Executive AI Consulting",
  authors: [{ name: "Michael Anthony Carter" }],
  openGraph: {
    title: "Michael Anthony Carter - AI Systems Strategist & Prompt Engineering Expert",
    description: "Help seed to Series B startups scale with AI systems that maintain soul and strategic integrity.",
    url: "https://michaelanythonycarter.xyz",
    siteName: "Michael Anthony Carter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Anthony Carter - AI Systems Strategist & Prompt Engineering Expert",
    description: "Help seed to Series B startups scale with AI systems that maintain soul and strategic integrity.",
    creator: "@SoulTechSage",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
