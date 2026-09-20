import type { Metadata } from "next"
import { Cinzel, Forum } from "next/font/google"
import localFont from "next/font/local"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
})

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-forum",
  display: "swap",
})

const coconat = localFont({
  src: [
    { path: "../public/fonts/Coconat-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Coconat-BoldExt.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-coconat",
  display: "swap",
})

const messapia = localFont({
  src: [
    { path: "../public/fonts/Messapia-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Messapia-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-messapia",
  display: "swap",
})

const ortica = localFont({
  src: [
    { path: "../public/fonts/Ortica-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Ortica-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-ortica",
  display: "swap",
})

const amagro = localFont({
  src: [
    { path: "../public/fonts/Amagro-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-amagro",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://kelly-ai.dev"),
  title: {
    default: "Kelly | AI/ML & Software Engineer",
    template: "%s | Kelly Portfolio",
  },
  description: "Portfolio of Kelly, a Kenya-based AI/ML & Software Engineer specializing in practical AI systems, autonomous agents, RAG, model serving, and real-world API integrations.",
  keywords: [
    "Kelly",
    "AI Engineer",
    "Machine Learning Engineer",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Python",
    "RAG",
    "Vector Databases",
    "Qdrant",
    "Pinecone",
    "Supabase",
    "Redis",
    "Ollama",
    "WhatsApp Cloud API",
    "Telegram Bot API",
    "M-Pesa Daraja",
    "Kenya AI Engineer",
  ],
  authors: [{ name: "Kelly", url: "https://github.com/kelly26ici" }],
  creator: "Kelly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kelly | AI/ML & Software Engineer",
    description: "Kenya-based AI/ML & Software Engineer building practical AI systems, intelligent applications, agentic workflows, and real-world software integrations.",
    siteName: "Kelly Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly | AI/ML & Software Engineer",
    description: "Kenya-based AI/ML & Software Engineer building practical AI systems, autonomous agents, and real-world software integrations.",
    creator: "@kelly26ici",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${forum.variable} ${coconat.variable} ${messapia.variable} ${ortica.variable} ${amagro.variable}`}
    >
      <body className={`${forum.className} font-forum antialiased selection:bg-gold/30 selection:text-gold-dark`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

