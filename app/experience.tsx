"use client"
import FadeDown from "@/components/animations/FadeDown"

// Skill icon mapping — real brand logos from /public/icons/
const skillIconMap: Record<string, string> = {
  "Python":           "/icons/python.svg",
  "LangChain":        "/icons/langchain.svg",
  "LangGraph":        "/icons/langgraph.svg",
  "Qdrant":           "/icons/qdrant.svg",
  "Redis":            "/icons/redis.svg",
  "FastAPI":          "/icons/fastapi.svg",
  "Supabase":         "/icons/supabase.svg",
  "PostgreSQL":       "/icons/postgresql.svg",
  "WhatsApp API":     "/icons/whatsapp.svg",
  "M-Pesa Daraja":    "/icons/mpesa.svg",
  "OpenAI":           "/icons/openai.svg",
  "Docker":           "/icons/docker.svg",
  "Next.js":          "/icons/nextjs.svg",
}

interface Highlight {
  label: string
  value: string
}

interface ExperienceItem {
  id: number
  period: string
  role: string
  context: string
  description: string
  skills: string[]
  highlights: Highlight[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: "2026 to now",
    role: "Samantha — AI Real Estate Assistant",
    context: "Personal Project • WhatsApp + M-Pesa + Qdrant",
    description:
      "Samantha is a WhatsApp-based assistant that helps people find houses in Nairobi. You send her a message like 'I need a two bedroom near Westlands for under 40k' and she searches through a real property database using natural language understanding, not just keywords. She can also take deposits directly through M-Pesa and send the landlord a notification when a serious buyer is confirmed. I built her with LangGraph so she can hold a proper multi-step conversation, remember what you told her earlier in the chat, and hand off to a human agent when needed.",
    skills: [
      "Python", "LangGraph", "LangChain", "Qdrant",
      "Redis", "FastAPI", "WhatsApp API", "M-Pesa Daraja",
      "Supabase", "PostgreSQL", "OpenAI", "Docker",
    ],
    highlights: [
      { label: "Platform", value: "WhatsApp Cloud API" },
      { label: "Payment", value: "Safaricom M-Pesa STK Push" },
      { label: "Memory", value: "Qdrant + Redis Hybrid" },
      { label: "Orchestration", value: "LangGraph Multi-Agent" },
    ],
  },
]

export default function Experience() {
  const exp = experiences[0]

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
            I started building real projects in 2026. Samantha is my main one so far. It is a full AI system I designed, built, and am continuing to improve.
          </p>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-gold/40 bg-surface/90 dark:bg-deep-onyx/90 shadow-[0_8px_40px_rgba(212,175,55,0.10)] overflow-hidden">

          {/* Top Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-6 border-b border-surface-border dark:border-charcoal">
            <div>
              <span className="font-coconat text-[11px] font-bold tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/30 inline-block mb-2">
                {exp.period}
              </span>
              <h4 className="font-ortica text-xl md:text-2xl font-bold text-text-primary leading-tight">
                {exp.role}
              </h4>
              <p className="font-messapia text-xs text-text-muted uppercase tracking-wider mt-1">
                {exp.context}
              </p>
            </div>
            {/* GitHub link */}
            <a
              href="https://github.com/kelly26ici"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-border dark:border-charcoal text-text-secondary hover:text-gold hover:border-gold/40 transition-all text-xs font-coconat font-bold shrink-0"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Description */}
          <div className="px-7 py-6 border-b border-surface-border dark:border-charcoal">
            <p className="font-forum text-base md:text-lg text-text-secondary font-normal leading-relaxed">
              {exp.description}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-surface-border dark:border-charcoal">
            {exp.highlights.map((h, i) => (
              <div
                key={i}
                className={`px-6 py-5 ${i < exp.highlights.length - 1 ? "border-r border-surface-border dark:border-charcoal" : ""}`}
              >
                <p className="font-messapia text-[10px] uppercase tracking-widest text-text-muted mb-1">{h.label}</p>
                <p className="font-coconat text-sm font-bold text-text-primary">{h.value}</p>
              </div>
            ))}
          </div>

          {/* Skills with real brand logos — small icons, same height as text */}
          <div className="px-7 py-6">
            <p className="font-messapia text-[10px] uppercase tracking-widest text-text-muted mb-3">Tech Used</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => {
                const iconSrc = skillIconMap[skill]
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-surface-raised dark:bg-charcoal/50 border border-gold/20 hover:border-gold/50 px-2.5 py-1.5 rounded-lg transition-all duration-200"
                  >
                    {iconSrc && (
                      <img
                        src={iconSrc}
                        alt={skill}
                        className="w-4 h-4 object-contain shrink-0"
                        loading="lazy"
                      />
                    )}
                    <span className="font-coconat text-xs font-bold text-text-primary uppercase tracking-wider leading-none">
                      {skill}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
