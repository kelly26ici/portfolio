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

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10"
      ref={containerRef}
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 w-full text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-500 uppercase">
              Proven Track Record
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">
            My Engineering Experience
          </h3>
          <p className="text-text-secondary text-base max-w-3xl mt-4 font-medium">
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
              className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-400 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:bg-thirdary/20 border border-transparent hover:border-text-secondary/10 shadow-xs hover:shadow-md mb-4"
            >
              {/* Left Column: Timeline */}
              <div className="md:col-span-1 pt-1 md:pt-2">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {exp.date}
                </span>
              </div>

              {/* Right Column: Role Details */}
              <div className="md:col-span-3 flex flex-col">
                <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/item:text-emerald-500 transition-colors">
                  {exp.role}
                </h4>
                <h5 className="text-sm font-mono font-semibold text-text-secondary tracking-wide uppercase mb-4">
                  {exp.company}
                </h5>

                <p className="text-base text-text-secondary font-medium leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-bold bg-thirdary/70 text-text-primary px-3 py-1 rounded-lg border border-text-secondary/10 uppercase tracking-wider"
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
