import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

