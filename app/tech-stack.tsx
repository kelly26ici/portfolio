"use client"
import React, { useState } from "react"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

interface TechItem {
  name: string
  sub: string
  icon: React.ReactNode
}

interface TechCategory {
  id: string
  label: string
  summary: string
  technologies: TechItem[]
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<string>("agents")

  const currentCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0]

  return (
    <section
      id="techstack"
      className="w-full max-w-7xl mx-auto py-20 md:py-28 cursor-default bg-background relative border-t border-surface-border dark:border-charcoal overflow-hidden"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16 w-full text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37]"></span>
            <h2 className="font-coconat text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Practical Tools &amp; Technologies
            </h2>
          </div>
          <h3 className="font-cinzel text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            How I Build Software &amp; AI Systems
          </h3>
          <p className="font-forum text-text-secondary text-base md:text-lg max-w-3xl mt-3 font-normal leading-relaxed">
            I believe tools are only as good as the problems they solve. As a computer science student and
            self taught developer in Nairobi, I focus on technologies that actually work in production,
            from smart autonomous agents to reliable payment integrations.
          </p>
        </div>
      </FadeDown>

      {/* Surface Level Concept Explainer: Chatbots vs Autonomous Agents */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <FadeUp>
          <div className="p-6 md:p-8 rounded-3xl bg-surface/70 dark:bg-deep-onyx/70 backdrop-blur-xl border border-surface-border dark:border-charcoal relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-coconat text-[11px] font-bold text-gold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full border border-gold/25 inline-block mb-2">
                  Plain English Breakdown
                </span>
                <h4 className="font-ortica text-2xl font-bold text-text-primary">
                  The Difference Between Basic Chatbots and Autonomous AI Agents
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Chatbot Card */}
              <div className="p-5 rounded-2xl bg-surface dark:bg-surface-raised border border-surface-border dark:border-charcoal">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-text-muted/15 flex items-center justify-center text-text-secondary">
                    💬
                  </div>
                  <h5 className="font-coconat text-sm font-bold text-text-primary uppercase tracking-wider">
                    Basic Chatbot
                  </h5>
                </div>
                <p className="font-forum text-sm text-text-secondary leading-relaxed">
                  A basic chatbot responds to one question at a time. It predicts the next most likely words,
                  like a helpful auto reply. But it cannot open your databases, verify information externally,
                  or take actions on your behalf.
                </p>
              </div>

              {/* Autonomous AI Agent Card */}
              <div className="p-5 rounded-2xl bg-surface dark:bg-surface-raised border border-gold/40 shadow-xs">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold">
                    ⚡
                  </div>
                  <h5 className="font-coconat text-sm font-bold text-gold uppercase tracking-wider">
                    Autonomous AI Agent
                  </h5>
                </div>
                <p className="font-forum text-sm text-text-secondary leading-relaxed">
                  An autonomous agent acts like a digital team member. Given a real goal, it breaks the task
                  into steps, searches knowledge bases, uses tools, writes code, queries APIs, triggers payments,
                  and iterates until the job is done.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Category Tabs (Replaces endless 1 to 8 vertical scrolling) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface/60 dark:bg-deep-onyx/60 backdrop-blur-xl border border-surface-border dark:border-charcoal max-w-fit">
          {techCategories.map((cat) => {
            const isActive = cat.id === activeTab
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  px-4 py-2 rounded-xl font-coconat text-xs font-bold transition-all duration-200 cursor-pointer
                  ${isActive
                    ? "bg-gold text-deep-onyx shadow-md"
                    : "text-text-secondary hover:text-gold hover:bg-gold/10"
                  }
                `}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Active Tab Category Content (Compact Grid with Real Logos) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-6 md:p-8 rounded-3xl bg-surface/80 dark:bg-deep-onyx/80 border border-surface-border dark:border-charcoal">
          <div className="mb-6">
            <h4 className="font-ortica text-2xl font-bold text-text-primary mb-1">
              {currentCategory.label}
            </h4>
            <p className="font-forum text-text-secondary text-sm md:text-base leading-relaxed">
              {currentCategory.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {currentCategory.technologies.map((tech, techIdx) => (
              <div
                key={techIdx}
                className="group flex flex-col items-center justify-center p-4 bg-surface dark:bg-surface-raised border border-surface-border dark:border-charcoal hover:border-gold/60 rounded-2xl transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-[0_6px_24px_rgba(212,175,55,0.14)]"
              >
                <div className="w-10 h-10 mb-2.5 flex items-center justify-center text-text-primary group-hover:text-gold transition-colors">
                  {tech.icon}
                </div>
                <span className="font-coconat text-xs font-bold text-text-primary text-center group-hover:text-gold transition-colors">
                  {tech.name}
                </span>
                <span className="font-messapia text-[10px] text-text-muted mt-0.5 text-center uppercase tracking-wider">
                  {tech.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Real Vector Icons for Key Technologies ─────────────────────────────────

const icons = {
  python: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.8v.826H3.85S0 5.79 0 11.932c0 6.14 3.4 5.923 3.4 5.923h2.03v-2.85s-.11-3.4 3.34-3.4h5.75s3.23.055 3.23-3.13V2.656S18.258 0 11.914 0zm-3.23 1.696c.64 0 1.157.518 1.157 1.158 0 .64-.518 1.158-1.158 1.158-.64 0-1.158-.518-1.158-1.158 0-.64.518-1.158 1.158-1.158zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.8v-.826h8.156s3.85.444 3.85-5.698c0-6.14-3.4-5.923-3.4-5.923h-2.03v2.85s.11 3.4-3.34 3.4H9.48s-3.23-.055-3.23 3.13v5.814S5.742 24 12.086 24zm3.23-1.696c-.64 0-1.157-.518-1.157-1.158 0-.64.518-1.158 1.158-1.158.64 0 1.158.518 1.158 1.158 0 .64-.518 1.158-1.158 1.158z"/>
    </svg>
  ),
  pytorch: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.72 0a11.93 11.93 0 0 0-5.87 1.54l1.37 1.37a9.98 9.98 0 0 1 4.5-1.02c5.49 0 9.96 4.47 9.96 9.96s-4.47 9.96-9.96 9.96a9.98 9.98 0 0 1-9.96-9.96c0-2.45.89-4.7 2.37-6.44L3.71 3.99A11.91 11.91 0 0 0 .76 11.85C.76 18.43 6.13 23.8 12.72 23.8s11.96-5.37 11.96-11.95S19.31 0 12.72 0zm3.03 6.22l-1.39 1.39a3.86 3.86 0 0 1 .49 1.88c0 2.14-1.74 3.88-3.88 3.88s-3.88-1.74-3.88-3.88a3.86 3.86 0 0 1 1.14-2.74L8.85 5.36a5.8 5.8 0 0 0-1.72 4.13c0 3.22 2.62 5.84 5.84 5.84s5.84-2.62 5.84-5.84c0-1.28-.41-2.47-1.09-3.44l.03.17z"/>
    </svg>
  ),
  langchain: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.4 3.5C5.2 3.5 3.5 5.2 3.5 7.4c0 1.6 1 3 2.4 3.6v2c-1.4.6-2.4 2-2.4 3.6 0 2.2 1.8 3.9 3.9 3.9 1.6 0 3-1 3.6-2.4h2c.6 1.4 2 2.4 3.6 2.4 2.2 0 3.9-1.8 3.9-3.9 0-1.6-1-3-2.4-3.6v-2c1.4-.6 2.4-2 2.4-3.6 0-2.2-1.8-3.9-3.9-3.9-1.6 0-3 1-3.6 2.4h-2C10.4 4.5 9 3.5 7.4 3.5zm0 1.9c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm9.2 0c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm-9.2 9.2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm9.2 0c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z"/>
    </svg>
  ),
  docker: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.146a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.884 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.146a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zM23.76 9.89a3.7 3.7 0 00-1.823-1.636c-.19-.07-.384-.09-.582-.09H18.9a.185.185 0 00-.185.186v2.723a.186.186 0 00.185.185h4.15c.097-.477.304-.954.71-1.368M1.08 13.06a8.88 8.88 0 003.54 3.72c2.8 1.64 6.34 1.7 9.4.2 2.6-1.28 4.6-3.7 5.2-6.52H.2a9.1 9.1 0 00.88 2.6z"/>
    </svg>
  ),
  database: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  bolt: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  brain: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/>
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  message: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  code: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
}

const techCategories: TechCategory[] = [
  {
    id: "agents",
    label: "AI Agents & Orchestration",
    summary:
      "Frameworks I use to build autonomous workflows where AI agents make decisions, search data, call tools, and get real tasks finished.",
    technologies: [
      { name: "LangGraph", sub: "Cyclic Workflows", icon: icons.bolt },
      { name: "LangChain", sub: "Model Tooling", icon: icons.langchain },
      { name: "OpenAI GPT", sub: "Function Calling", icon: icons.brain },
      { name: "Claude AI", sub: "Complex Reasoning", icon: icons.brain },
      { name: "LlamaIndex", sub: "Document Indexing", icon: icons.code },
      { name: "Ollama / vLLM", sub: "Local Fast Serving", icon: icons.bolt },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning & Python",
    summary:
      "Core mathematical libraries and frameworks for training models, data processing, feature engineering, and neural network development.",
    technologies: [
      { name: "Python", sub: "Primary Language", icon: icons.python },
      { name: "PyTorch", sub: "Deep Learning", icon: icons.pytorch },
      { name: "TensorFlow", sub: "Model Networks", icon: icons.brain },
      { name: "scikit-learn", sub: "Algorithms", icon: icons.code },
      { name: "Hugging Face", sub: "Pretrained Models", icon: icons.brain },
      { name: "Pandas & NumPy", sub: "Data Wrangling", icon: icons.code },
    ],
  },
  {
    id: "memory",
    label: "Vector DBs & Memory",
    summary:
      "Storing high dimensional vector embeddings so AI agents can perform semantic search and remember past conversations accurately.",
    technologies: [
      { name: "Qdrant", sub: "Vector Database", icon: icons.database },
      { name: "Pinecone", sub: "Cloud Vectors", icon: icons.cloud },
      { name: "FAISS", sub: "Fast Search", icon: icons.bolt },
      { name: "Redis", sub: "Session Memory", icon: icons.database },
      { name: "PostgreSQL", sub: "Relational Data", icon: icons.database },
      { name: "Supabase", sub: "Realtime Store", icon: icons.cloud },
    ],
  },
  {
    id: "backend",
    label: "APIs & Integrations",
    summary:
      "Connecting AI models to real world communication channels, payment systems, and robust containerized backend APIs.",
    technologies: [
      { name: "FastAPI", sub: "Async Python APIs", icon: icons.bolt },
      { name: "Docker", sub: "Containerization", icon: icons.docker },
      { name: "WhatsApp API", sub: "Customer Chat", icon: icons.message },
      { name: "Telegram Bot", sub: "Automated Ops", icon: icons.message },
      { name: "M-Pesa Daraja", sub: "Payment Gateway", icon: icons.bolt },
      { name: "Next.js", sub: "Web App Interface", icon: icons.code },
    ],
  },
]
