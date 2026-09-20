"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"

interface ExperienceItem {
  id: number
  company: string
  role: string
  date: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Production Solutions & Client Engineering",
    role: "AI/ML & Software Engineer",
    date: "2024 - present",
    description:
      "I architect, implement, and deploy practical AI applications and backend microservices for clients. I engineer production RAG systems with Qdrant, Pinecone, and FAISS, utilizing hybrid retrieval and cross-encoder reranking to ensure high precision and verified citations. I build low-latency asynchronous APIs with FastAPI, Python, and Redis state caches.",
    skills: ["Python", "FastAPI", "PyTorch", "LangChain", "Qdrant", "Redis", "Docker"],
  },
  {
    id: 2,
    company: "Client Systems & Real-World Integrations",
    role: "AI Agent & Automation Systems Architect",
    date: "2024 - present",
    description:
      "I engineer multi-agent state machines and cyclic workflows using LangGraph for autonomous business operations. I integrate AI reasoning engines directly with real-world messaging platforms (WhatsApp Cloud API, Telegram Bot API) and payment gateways (Safaricom M-Pesa Daraja), automating user interactions from initial query to payment settlement.",
    skills: ["LangGraph", "WhatsApp Cloud API", "Telegram Bot API", "M-Pesa Daraja", "PostgreSQL", "Supabase"],
  },
  {
    id: 3,
    company: "Applied AI Research & Open-Source",
    role: "Machine Learning & Local Inference Specialist",
    date: "2023 - present",
    description:
      "I research, benchmark, and deploy optimized local LLM runtimes using Ollama, llama.cpp, and vLLM. I evaluate GGUF/AWQ model quantization, explore memory-efficient inference strategies, and engineer air-gapped private search architectures for privacy-sensitive enterprise environments.",
    skills: ["llama.cpp", "Ollama", "vLLM", "Hugging Face", "scikit-learn", "Linux"],
  },
  {
    id: 4,
    company: "Mama Ngina University College / Kenyatta University",
    role: "Computer Science Scholar",
    date: "2024 - Expected 2029",
    description:
      "I study algorithmic efficiency, data structures, computational complexity, distributed systems, and computer architecture at university, providing strong academic and theoretical foundations to my production engineering work.",
    skills: ["Algorithms", "Data Structures", "Distributed Systems", "Computer Science"],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-surface-border dark:border-charcoal"
      ref={containerRef}
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 w-full text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37]"></span>
            <h2 className="font-coconat text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Proven Track Record
            </h2>
          </div>
          <h3 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            My Engineering Experience
          </h3>
          <p className="font-forum text-text-secondary text-base md:text-lg max-w-3xl mt-4 font-normal leading-relaxed">
            How I deliver robust AI systems, agentic automation, and real-world software integrations
            across client projects, open-source initiatives, and systems research.
          </p>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group/list flex flex-col">
        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-400 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:bg-surface/90 dark:hover:bg-deep-onyx/90 border border-transparent hover:border-gold/40 shadow-xs hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] mb-4"
            >
              {/* Left Column: Timeline */}
              <div className="md:col-span-1 pt-1 md:pt-2">
                <span className="font-coconat text-xs font-bold tracking-widest text-gold-hover dark:text-gold uppercase bg-gold/10 px-3 py-1.5 rounded-full border border-gold/30 inline-block">
                  {exp.date}
                </span>
              </div>

              {/* Right Column: Role Details */}
              <div className="md:col-span-3 flex flex-col">
                <h4 className="font-amagro text-2xl font-bold text-text-primary tracking-wide mb-1.5 group-hover/item:text-gold transition-colors">
                  {exp.role}
                </h4>
                <h5 className="font-messapia text-xs font-semibold text-text-muted tracking-widest uppercase mb-4">
                  {exp.company}
                </h5>

                <p className="font-forum text-base text-text-secondary font-normal leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="font-coconat text-xs font-bold bg-surface-raised dark:bg-charcoal/50 text-text-primary px-3 py-1 rounded-lg border border-surface-border dark:border-charcoal uppercase tracking-wider group-hover/item:border-gold/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
