"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"

export default function Project() {
  const [isOpen, setIsOpen] = useState<number | null>(null)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const activeProject = projectList.find((p) => p.index === isOpen)

  return (
    <>
      <section
        id="projects"
        className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-surface-border dark:border-charcoal"
      >
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 w-full text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37]"></span>
              <h2 className="font-coconat text-xs font-bold tracking-[0.25em] text-gold uppercase">
                Real Projects I Built
              </h2>
            </div>
            <h3 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
              Featured Projects
            </h3>
            <p className="font-forum text-text-secondary text-base md:text-lg max-w-3xl mt-4 font-normal leading-relaxed">
              Here are some of the AI tools, assistants, and software integrations I have built.
              I focus on practical projects that solve everyday problems rather than toy demos.
            </p>
          </div>
        </FadeDown>

        {/* Desktop View: 3-column Grid */}
        <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-8 px-6 md:px-12">
          {projectList.map((project, index) => (
            <FadeUp key={`desktop-${index}`}>
              <GlareHover className="group flex flex-col h-full bg-surface dark:bg-deep-onyx border border-surface-border dark:border-charcoal hover:border-gold/60 rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_rgba(212,175,55,0.18)] hover:-translate-y-1">
                {/* Project Header Banner */}
                <div className={`relative overflow-hidden aspect-[16/10] ${project.accentGradient} p-6 flex flex-col justify-between border-b border-surface-border dark:border-charcoal`}>
                  <div className="flex justify-between items-start z-10">
                    <span className="font-coconat text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-deep-onyx/80 text-gold border border-gold/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="font-messapia text-xs font-bold text-champagne bg-deep-onyx/80 px-2.5 py-0.5 rounded-full border border-charcoal">
                      {String(project.index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="z-10 mt-auto">
                    <span className="font-coconat text-[10px] font-bold text-champagne block uppercase tracking-wider mb-1">
                      {project.category}
                    </span>
                    <h4 className="font-ortica text-xl font-bold text-white tracking-tight drop-shadow-sm">
                      {project.title}
                    </h4>
                  </div>

                  {/* Ambient overlay grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative">
                  <p className="font-forum text-sm text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="font-coconat text-[10px] font-bold bg-surface-raised dark:bg-charcoal/50 text-text-primary px-2.5 py-1 rounded-md border border-surface-border dark:border-charcoal"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="font-coconat text-[10px] font-bold bg-surface-raised dark:bg-charcoal/50 text-gold px-2.5 py-1 rounded-md border border-surface-border dark:border-charcoal">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-border dark:border-charcoal">
                    <button
                      className="font-coconat text-xs font-bold tracking-wider uppercase text-gold flex items-center gap-2 group/btn cursor-pointer hover:text-gold-hover transition-colors"
                      onClick={() => setIsOpen(project.index)}
                    >
                      Architecture & Details
                      <span className="w-6 h-[2px] bg-gold group-hover/btn:w-10 transition-all duration-300"></span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-surface-border dark:border-charcoal rounded-xl text-text-secondary hover:text-gold hover:border-gold transition-all duration-300"
                      title="View Project Link"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </GlareHover>
            </FadeUp>
          ))}
        </div>

        {/* Mobile View: Infinite Loop Slider */}
        <div className="lg:hidden w-full overflow-hidden relative py-4">
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            <div className="flex gap-6 px-3">
              {projectList.map((project, index) => (
                <div
                  key={`mobile1-${index}`}
                  className="w-[85vw] sm:w-[380px] flex-shrink-0"
                >
                  <GlareHover className="group flex flex-col h-full bg-surface dark:bg-deep-onyx border border-surface-border dark:border-charcoal rounded-2xl overflow-hidden shadow-sm">
                    <div className={`relative aspect-[16/10] ${project.accentGradient} p-6 flex flex-col justify-between`}>
                      <div className="flex justify-between items-start">
                        <span className="font-coconat text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-deep-onyx/80 text-gold border border-gold/30">
                          {project.badge}
                        </span>
                        <span className="font-messapia text-xs text-champagne bg-deep-onyx/80 px-2 py-0.5 rounded-full border border-charcoal">
                          {String(project.index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <span className="font-coconat text-[10px] text-champagne font-bold block uppercase">
                          {project.category}
                        </span>
                        <h4 className="font-ortica text-lg font-bold text-white">{project.title}</h4>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <p className="font-forum text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>
                      <button
                        className="mt-auto font-coconat text-xs font-bold text-gold uppercase tracking-wider text-left pt-2 border-t border-surface-border dark:border-charcoal"
                        onClick={() => setIsOpen(project.index)}
                      >
                        View Architecture &rarr;
                      </button>
                    </div>
                  </GlareHover>
                </div>
              ))}
            </div>

            <div className="flex gap-6 px-3">
              {projectList.map((project, index) => (
                <div
                  key={`mobile2-${index}`}
                  className="w-[85vw] sm:w-[380px] flex-shrink-0"
                >
                  <GlareHover className="group flex flex-col h-full bg-surface dark:bg-deep-onyx border border-surface-border dark:border-charcoal rounded-2xl overflow-hidden shadow-sm">
                    <div className={`relative aspect-[16/10] ${project.accentGradient} p-6 flex flex-col justify-between`}>
                      <div className="flex justify-between items-start">
                        <span className="font-coconat text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-deep-onyx/80 text-gold border border-gold/30">
                          {project.badge}
                        </span>
                        <span className="font-messapia text-xs text-champagne bg-deep-onyx/80 px-2 py-0.5 rounded-full border border-charcoal">
                          {String(project.index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <span className="font-coconat text-[10px] text-champagne font-bold block uppercase">
                          {project.category}
                        </span>
                        <h4 className="font-ortica text-lg font-bold text-white">{project.title}</h4>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <p className="font-forum text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>
                      <button
                        className="mt-auto font-coconat text-xs font-bold text-gold uppercase tracking-wider text-left pt-2 border-t border-surface-border dark:border-charcoal"
                        onClick={() => setIsOpen(project.index)}
                      >
                        View Architecture &rarr;
                      </button>
                    </div>
                  </GlareHover>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Repositories Link */}
        <FadeUp>
          <div className="mt-16 flex justify-center w-full px-6">
            <a
              href="https://github.com/kelly26ici"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-surface dark:bg-deep-onyx border border-surface-border dark:border-charcoal text-text-primary hover:border-gold hover:text-gold rounded-xl font-coconat font-bold tracking-widest text-xs uppercase transition-all duration-300 ease-out group hover:-translate-y-1 shadow-sm hover:shadow-[0_4px_25px_rgba(212,175,55,0.2)]"
            >
              <span>Explore All Repositories on GitHub</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </FadeUp>

        {/* Detailed Modal with Architecture Breakdown */}
        <AnimatePresence>
          {isOpen !== null && activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
                onClick={() => setIsOpen(null)}
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-surface dark:bg-deep-onyx border border-surface-border dark:border-charcoal rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative z-10"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-surface-border dark:border-charcoal bg-surface-raised dark:bg-charcoal/30">
                  <div>
                    <span className="font-coconat text-[11px] text-gold font-bold uppercase tracking-wider block mb-1">
                      {activeProject.category}
                    </span>
                    <h4 className="font-ortica text-2xl font-bold text-text-primary tracking-tight">
                      {activeProject.title}
                    </h4>
                  </div>
                  <button
                    className="text-text-secondary hover:text-gold transition-colors p-2 bg-charcoal/10 dark:bg-charcoal/40 rounded-full"
                    onClick={() => setIsOpen(null)}
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-grow custom-scrollbar space-y-6">
                  {/* Overview */}
                  <div>
                    <span className="font-messapia text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">
                      System Overview
                    </span>
                    <p className="font-forum text-sm md:text-base text-text-secondary leading-relaxed font-normal">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Architecture & Stack */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-2xl bg-surface-raised dark:bg-charcoal/30 border border-surface-border dark:border-charcoal">
                    <div>
                      <span className="font-messapia text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">
                        Deployment & Role
                      </span>
                      <span className="font-coconat text-xs font-bold text-text-primary bg-surface dark:bg-deep-onyx px-3 py-1.5 rounded-lg border border-surface-border dark:border-charcoal inline-block">
                        {activeProject.deployment}
                      </span>
                    </div>
                    <div>
                      <span className="font-messapia text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="font-coconat text-[11px] font-bold bg-surface dark:bg-deep-onyx text-gold-hover dark:text-gold px-2.5 py-1 rounded-md border border-surface-border dark:border-charcoal"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Architecture Features */}
                  <div>
                    <span className="font-messapia text-xs font-bold tracking-widest text-text-secondary uppercase block mb-3">
                      Key Engineering Deliverables
                    </span>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-raised dark:bg-charcoal/20 border border-surface-border dark:border-charcoal/40 text-sm font-forum font-medium text-text-primary"
                        >
                          <span className="text-gold font-bold mt-0.5">&#10003;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-surface-border dark:border-charcoal flex flex-col sm:flex-row gap-3 bg-surface dark:bg-deep-onyx">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 text-center font-coconat font-bold text-xs tracking-widest uppercase bg-gold hover:bg-gold-hover text-deep-onyx py-3.5 rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-transform"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Source Code
                  </a>
                  <button
                    onClick={() => setIsOpen(null)}
                    className="px-6 py-3.5 border border-surface-border dark:border-charcoal rounded-xl font-coconat font-bold text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary hover:border-gold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

const projectList = [
  {
    index: 0,
    title: "Samantha: WhatsApp AI Real Estate Assistant",
    category: "Conversational Agent & Integrations",
    badge: "Flagship Project",
    accentGradient: "bg-gradient-to-br from-[#0F0F0F] via-[#0A3D82]/40 to-[#2C2C2C]",
    shortDescription:
      "An AI assistant on WhatsApp that helps people find rental houses and apartments in Kenya. It remembers user preferences, answers questions about listings, and can trigger M-Pesa payments.",
    longDescription:
      "I built Samantha to make finding a house easier and faster. Instead of calling back and forth with brokers, clients message Samantha directly on WhatsApp just like a friend. It searches through verified property listings using vector search, answers questions about rent and amenities, and allows clients to pay small viewing or reservation fees directly through Safaricom M-Pesa.",
    deployment: "Production / WhatsApp Cloud API",
    features: [
      "Natural language property discovery using Qdrant vector search to match real buyer needs",
      "Side by side property comparisons and amenity filtering inside WhatsApp chat",
      "Persistent customer memory stored in Redis and Supabase so users never have to repeat themselves",
      "Automated Safaricom M-Pesa STK push payment integration with instant receipt validation",
      "Instant notification webhooks that alert property owners of new inquiries",
    ],
    tech: ["Python", "WhatsApp Cloud API", "LangGraph", "Qdrant", "Safaricom M-Pesa", "Supabase", "FastAPI"],
    githubUrl: "https://github.com/kelly26ici/portfolio",
  },
  {
    index: 1,
    title: "OmniAgent: Multi-Agent Task Engine",
    category: "Autonomous Systems",
    badge: "Agent Orchestration",
    accentGradient: "bg-gradient-to-br from-[#0A3D82]/50 via-[#0F0F0F] to-[#2C2C2C]",
    shortDescription:
      "A system where specialized AI agents collaborate to finish multi-step projects. One agent gathers information, another writes code, and another checks for mistakes before giving you the final result.",
    longDescription:
      "When a single AI prompt tries to do everything at once, it often gets confused or makes up facts. I designed OmniAgent using LangGraph so tasks are divided among specialized agents with clear roles. For critical actions like updating user balances or deleting files, the system pauses and asks a human for approval first.",
    deployment: "Dockerized / FastAPI Microservices",
    features: [
      "Cyclic agent graph built with LangGraph for multi-step reasoning and self correction",
      "Structured tool use across databases, external search APIs, and local scripts",
      "Human in the loop safety checkpoints for sensitive operations",
      "Durable Redis session state so interrupted tasks can resume seamlessly",
    ],
    tech: ["Python", "LangGraph", "FastAPI", "Anthropic Claude", "OpenAI", "Redis", "Docker"],
    githubUrl: "https://github.com/kelly26ici/portfolio",
  },
  {
    index: 2,
    title: "CortexRAG: Accurate Document Search Engine",
    category: "Information Retrieval & RAG",
    badge: "Fact-Checked Search",
    accentGradient: "bg-gradient-to-br from-[#2C2C2C] via-[#0A3D82]/30 to-[#0F0F0F]",
    shortDescription:
      "A fast document search engine that lets teams ask questions about internal manuals and guides. Every answer cites the exact page reference so the AI never hallucinates.",
    longDescription:
      "I built CortexRAG to solve the problem of AI making up fake information. It reads company documents, indexes them into a vector database, and finds the exact paragraph needed to answer a user question. Every answer includes verifiable references to the original document.",
    deployment: "Production Cluster / Docker Ready",
    features: [
      "Hybrid search combining vector similarity with exact keyword matching",
      "Reranking stage that ensures the top answers are the most accurate and relevant",
      "Clear source attribution showing users the exact document and section used",
      "Fast streaming REST API built with Python and FastAPI",
    ],
    tech: ["Python", "PyTorch", "Qdrant", "Pinecone", "FAISS", "FastAPI", "Docker"],
    githubUrl: "https://github.com/kelly26ici/portfolio",
  },
  {
    index: 3,
    title: "TelePulse AI: Automated Telegram Operations Bot",
    category: "Automation & Bot Engineering",
    badge: "Telegram Bot",
    accentGradient: "bg-gradient-to-br from-[#0F0F0F] via-[#0A3D82]/50 to-[#2C2C2C]",
    shortDescription:
      "A Telegram bot that handles customer queries and automates database checks in real time. Built with Python and running live on Telegram.",
    longDescription:
      "I built TelePulse to help teams manage customer requests and routine tasks directly inside Telegram. It listens for incoming messages, runs secure database queries, and gives instant replies using fast AI inference.",
    deployment: "Live on Telegram (@jbee_vector1_bot)",
    features: [
      "Fast webhook processing pipeline supporting high message volume",
      "Integrated Groq and Google Gemini inference for quick conversational replies",
      "Direct database query generation with strict safety boundaries",
      "Automated alerts and scheduled broadcast messages to community channels",
    ],
    tech: ["Python", "Telegram Bot API", "Groq", "Google Gemini", "Redis", "PostgreSQL"],
    githubUrl: "https://t.me/jbee_vector1_bot",
  },
  {
    index: 4,
    title: "DarajaPay AI: M-Pesa Payment & Verification System",
    category: "Fintech & Integrations",
    badge: "Payment Gateway",
    accentGradient: "bg-gradient-to-br from-[#0F0F0F] via-[#2C2C2C] to-[#0A3D82]/40",
    shortDescription:
      "An automated gateway that listens for Safaricom M-Pesa payments, updates customer accounts immediately, and flags duplicate or suspicious transactions.",
    longDescription:
      "Managing mobile money payments manually is slow and prone to errors. I built DarajaPay using the Safaricom Daraja API to automatically handle STK push prompts, verify payments in real time, and run simple machine learning checks to catch double payments or fraudulent attempts.",
    deployment: "FastAPI Gateway Service",
    features: [
      "Smooth integration with Safaricom Daraja API for STK push and C2B transaction confirmation",
      "Machine learning models in scikit-learn to spot unusual payment velocity and duplicate transactions",
      "Instant webhook callbacks that notify client apps the moment a payment clears",
      "Clear audit logs stored in PostgreSQL and cached in Redis for fast verification",
    ],
    tech: ["Python", "FastAPI", "scikit-learn", "Safaricom Daraja API", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/kelly26ici/portfolio",
  },
  {
    index: 5,
    title: "LocalLLM Nexus: Private Offline AI Suite",
    category: "Model Serving & Edge AI",
    badge: "Private Offline AI",
    accentGradient: "bg-gradient-to-br from-[#1C1C1C] via-[#0F0F0F] to-[#0A3D82]/30",
    shortDescription:
      "A setup for running modern AI models completely offline on a local computer. Data never leaves your machine, making it private and free from cloud fees.",
    longDescription:
      "Many businesses cannot send their private documents to external cloud APIs. I configured LocalLLM Nexus using open-source tools like Ollama and llama.cpp so anyone can run capable AI models directly on their own hardware with zero internet connection required.",
    deployment: "On Premises / Offline Linux",
    features: [
      "Completely offline architecture keeping all sensitive data private",
      "Fast local inference using quantized GGUF models on standard consumer hardware",
      "OpenAI compatible API format for drop in replacement in existing software",
      "Local vector search with Chroma and FAISS running entirely without the internet",
    ],
    tech: ["Ollama", "llama.cpp", "vLLM", "Python", "Chroma", "FAISS", "Docker"],
    githubUrl: "https://github.com/kelly26ici/portfolio",
  },
]
