"use client"
import React, { useState } from "react"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

interface TechItem {
  name: string
  sub: string
  iconSrc: string
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
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
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
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    </svg>
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

      {/* Category Tabs (Replaces endless vertical scrolling) */}
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

      {/* Active Tab Category Content (Compact Grid with Real Full-Color Logos) */}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentCategory.technologies.map((tech, techIdx) => (
              <div
                key={techIdx}
                className="group flex flex-col items-center justify-center p-4 bg-surface dark:bg-surface-raised border border-surface-border dark:border-charcoal hover:border-gold/60 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-[0_8px_25px_rgba(212,175,55,0.18)]"
              >
                <div className="w-14 h-14 mb-3 flex items-center justify-center p-2.5 rounded-xl bg-surface-raised dark:bg-charcoal/40 border border-surface-border/50 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                  {/* Real authentic brand logo image */}
                  <img
                    src={tech.iconSrc}
                    alt={tech.name}
                    className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="font-coconat text-xs font-bold text-text-primary text-center group-hover:text-gold transition-colors">
                  {tech.name}
                </span>
                <span className="font-messapia text-[10px] text-text-muted mt-1 text-center uppercase tracking-wider">
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

// ── Real Brand Logo Mapping for All 24 Technologies ───────────────────────

const techCategories: TechCategory[] = [
  {
    id: "agents",
    label: "AI Agents & Frameworks",
    summary:
      "Frameworks I use to build autonomous workflows where AI agents make decisions, search data, call tools, and get real tasks finished.",
    technologies: [
      { name: "LangChain", sub: "Model Tooling", iconSrc: "/icons/langchain.svg" },
      { name: "LangGraph", sub: "Cyclic Workflows", iconSrc: "/icons/langgraph.svg" },
      { name: "OpenAI", sub: "Function Calling", iconSrc: "/icons/openai.svg" },
      { name: "Claude AI", sub: "Complex Reasoning", iconSrc: "/icons/anthropic.svg" },
      { name: "Hugging Face", sub: "Pretrained Models", iconSrc: "/icons/huggingface.svg" },
      { name: "Ollama", sub: "Local Fast Serving", iconSrc: "/icons/ollama.svg" },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning & Python",
    summary:
      "Core mathematical libraries and frameworks for training models, data processing, feature engineering, and neural network development.",
    technologies: [
      { name: "Python", sub: "Core Language", iconSrc: "/icons/python.svg" },
      { name: "PyTorch", sub: "Deep Learning", iconSrc: "/icons/pytorch.svg" },
      { name: "TensorFlow", sub: "Neural Networks", iconSrc: "/icons/tensorflow.svg" },
      { name: "scikit-learn", sub: "ML Algorithms", iconSrc: "/icons/scikitlearn.svg" },
      { name: "Pandas", sub: "Data Analysis", iconSrc: "/icons/pandas.svg" },
      { name: "NumPy", sub: "Scientific Compute", iconSrc: "/icons/numpy.svg" },
    ],
  },
  {
    id: "memory",
    label: "Vector DBs & Memory",
    summary:
      "Storing high dimensional vector embeddings so AI agents can perform semantic search and remember past conversations accurately.",
    technologies: [
      { name: "Qdrant", sub: "Vector Database", iconSrc: "/icons/qdrant.svg" },
      { name: "Pinecone", sub: "Cloud Vectors", iconSrc: "/icons/pinecone.svg" },
      { name: "Meta FAISS", sub: "Fast Vector Search", iconSrc: "/icons/meta.svg" },
      { name: "Redis", sub: "Session Memory", iconSrc: "/icons/redis.svg" },
      { name: "PostgreSQL", sub: "Relational Data", iconSrc: "/icons/postgresql.svg" },
      { name: "Supabase", sub: "Realtime Cloud DB", iconSrc: "/icons/supabase.svg" },
    ],
  },
  {
    id: "backend",
    label: "APIs & Integrations",
    summary:
      "Connecting AI models to real world communication channels, payment systems, and robust containerized backend APIs.",
    technologies: [
      { name: "FastAPI", sub: "Async Python APIs", iconSrc: "/icons/fastapi.svg" },
      { name: "Safaricom M-Pesa", sub: "Payment Gateway", iconSrc: "/icons/mpesa.svg" },
      { name: "WhatsApp API", sub: "Customer Chat", iconSrc: "/icons/whatsapp.svg" },
      { name: "Telegram Bot", sub: "Automated Ops", iconSrc: "/icons/telegram.svg" },
      { name: "Docker", sub: "Containers", iconSrc: "/icons/docker.svg" },
      { name: "Next.js", sub: "Web Application", iconSrc: "/icons/nextjs.svg" },
    ],
  },
]
