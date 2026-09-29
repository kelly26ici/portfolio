"use client"
import { useState } from "react"
import FadeDown from "@/components/animations/FadeDown"

interface ExperienceItem {
  id: number
  period: string
  role: string
  context: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: "2024 to now",
    role: "AI/ML & Software Engineer",
    context: "Client Projects & Freelance",
    description:
      "I build AI-powered applications and backend systems for clients. Most of my work involves setting up retrieval pipelines where AI can search through a client's documents, knowledge base, or product catalog and give accurate, cited answers. I also build the backend APIs that power these systems.",
    skills: ["Python", "FastAPI", "PyTorch", "LangChain", "Qdrant", "Redis", "Docker"],
  },
  {
    id: 2,
    period: "2024 to now",
    role: "Autonomous Agent Builder",
    context: "WhatsApp, Telegram & M-Pesa Systems",
    description:
      "This is the work I enjoy most. I connect AI models to real platforms people actually use every day, like WhatsApp, Telegram, and M-Pesa. Instead of a chatbot that only answers questions, the agent can check a database, send a payment request, confirm a booking, and follow up automatically. Samantha (my real estate assistant) is the biggest example of this.",
    skills: ["LangGraph", "WhatsApp Cloud API", "Telegram Bot API", "M-Pesa Daraja", "PostgreSQL", "Supabase"],
  },
  {
    id: 3,
    period: "2023 to now",
    role: "Local AI Model Researcher",
    context: "Private & Open Source Projects",
    description:
      "I experiment with running large language models locally on my own machine with no cloud required. I test different quantized model formats, compare inference speeds, and build private search systems where data never leaves the device. Useful for clients who need private, air-gapped setups.",
    skills: ["llama.cpp", "Ollama", "vLLM", "Hugging Face", "scikit-learn", "Linux"],
  },
  {
    id: 4,
    period: "2024 to 2029",
    role: "Computer Science Student",
    context: "Mama Ngina University College / Kenyatta University",
    description:
      "Studying computer science formally gives me a solid theoretical base to understand how software works under the hood, including algorithms, data structures, and distributed systems. I combine this with hands-on self-learning from open-source repositories and client work.",
    skills: ["Algorithms", "Data Structures", "Distributed Systems", "Computer Science"],
  },
]

export default function Experience() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto py-20 md:py-28 cursor-default bg-background relative border-t border-surface-border dark:border-charcoal"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16 w-full text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37]"></span>
            <h2 className="font-coconat text-xs font-bold tracking-[0.25em] text-gold uppercase">
              What I Have Been Building
            </h2>
          </div>
          <h3 className="font-cinzel text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            My Experience
          </h3>
          <p className="font-forum text-text-secondary text-base md:text-lg max-w-3xl mt-3 font-normal leading-relaxed">
            A mix of client work, personal research, and formal education. Click any role to read more.
          </p>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-3">
        {experiences.map((exp) => {
          const isOpen = openId === exp.id
          return (
            <div
              key={exp.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-gold/50 bg-surface/90 dark:bg-deep-onyx/90 shadow-[0_8px_30px_rgba(212,175,55,0.12)]"
                  : "border-surface-border dark:border-charcoal bg-surface/60 dark:bg-deep-onyx/60 hover:border-gold/30"
              }`}
            >
              {/* Accordion Header — always visible */}
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                onClick={() => toggle(exp.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 flex-1 min-w-0">
                  <span className="font-coconat text-xs font-bold tracking-widest text-gold-hover dark:text-gold uppercase bg-gold/10 px-3 py-1.5 rounded-full border border-gold/30 shrink-0">
                    {exp.period}
                  </span>
                  <div className="min-w-0">
                    <p className="font-ortica text-base md:text-lg font-bold text-text-primary leading-tight">
                      {exp.role}
                    </p>
                    <p className="font-messapia text-xs text-text-muted uppercase tracking-wider mt-0.5">
                      {exp.context}
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "border-gold/50 text-gold rotate-180"
                      : "border-surface-border dark:border-charcoal text-text-muted"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Accordion Body — only shows when open */}
              {isOpen && (
                <div className="px-6 pb-6 border-t border-surface-border/60 dark:border-charcoal/60">
                  <p className="font-forum text-base text-text-secondary font-normal leading-relaxed mt-5 mb-5">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="font-coconat text-xs font-bold bg-surface-raised dark:bg-charcoal/50 text-text-primary px-3 py-1 rounded-lg border border-gold/25 uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
