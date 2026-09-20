"use client"
import React from "react"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

interface TechItem {
  name: string
  sub?: string
  icon?: React.ReactNode
}

interface TechCategory {
  title: string
  description: string
  technologies: TechItem[]
}

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-surface-border dark:border-charcoal overflow-hidden"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 w-full text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37]"></span>
            <h2 className="font-coconat text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Comprehensive Toolkit
            </h2>
          </div>
          <h3 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            My Skills & Engineering Stack
          </h3>
          <p className="font-forum text-text-secondary text-base md:text-lg max-w-3xl mt-4 font-normal leading-relaxed">
            My comprehensive technical toolkit spanning modern machine learning libraries, autonomous agent frameworks,
            vector databases, cloud and local model serving, distributed backends, and real-world API integrations.
          </p>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {techCategories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start p-6 md:p-8 rounded-3xl bg-surface/80 dark:bg-deep-onyx/80 border border-surface-border dark:border-charcoal hover:border-gold/50 transition-all duration-300 shadow-sm"
          >
            {/* Category Header */}
            <div className="lg:w-1/3">
              <FadeDown delay={idx * 0.04}>
                <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold-hover dark:text-gold rounded-full font-coconat text-xs font-bold uppercase tracking-widest mb-3">
                  0{idx + 1} // Domain
                </div>
                <h4 className="font-ortica text-2xl font-bold text-text-primary tracking-tight mb-2">
                  {category.title}
                </h4>
                <p className="font-forum text-text-secondary font-normal text-sm leading-relaxed">
                  {category.description}
                </p>
              </FadeDown>
            </div>

            {/* Category Technology Badges Grid */}
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
              {category.technologies.map((tech, techIdx) => (
                <FadeUp key={techIdx} delay={idx * 0.03 + techIdx * 0.015}>
                  <div className="group flex flex-col items-center justify-center p-4 bg-surface dark:bg-surface-raised border border-surface-border dark:border-charcoal hover:border-gold/60 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-[0_4px_20px_rgba(212,175,55,0.18)] h-full">
                    <div className="w-10 h-10 mb-2.5 flex items-center justify-center text-text-primary group-hover:text-gold transition-colors">
                      {tech.icon ? (
                        tech.icon
                      ) : (
                        <div className="w-9 h-9 rounded-xl bg-gold/10 font-coconat font-bold text-gold flex items-center justify-center text-sm border border-gold/25 group-hover:border-gold">
                          {tech.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <span className="font-coconat text-xs font-bold text-text-primary text-center group-hover:text-gold transition-colors leading-tight">
                      {tech.name}
                    </span>
                    {tech.sub && (
                      <span className="font-messapia text-[10px] text-text-muted mt-1 text-center uppercase tracking-wider">
                        {tech.sub}
                      </span>
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const techCategories: TechCategory[] = [
  {
    title: "Core Machine Learning & Deep Learning",
    description:
      "Comprehensive theoretical and practical foundations, neural network architectures, statistical modeling, feature engineering, and high-performance tensor computing.",
    technologies: [
      { name: "PyTorch", sub: "Deep Learning" },
      { name: "TensorFlow", sub: "Neural Nets" },
      { name: "scikit-learn", sub: "ML Algorithms" },
      { name: "Hugging Face", sub: "Transformers" },
      { name: "NumPy", sub: "Vector Math" },
      { name: "Pandas", sub: "Data Wrangling" },
      { name: "XGBoost", sub: "Gradient Boost" },
      { name: "LightGBM", sub: "Ensemble Trees" },
      { name: "OpenCV", sub: "Computer Vision" },
      { name: "SciPy", sub: "Scientific Compute" },
      { name: "spaCy", sub: "NLP Pipelines" },
      { name: "NLTK", sub: "Text Processing" },
    ],
  },
  {
    title: "Agentic Systems & LLM Frameworks",
    description:
      "Architecting stateful multi-agent workflows, autonomous decision loops, memory-augmented reasoning, and robust tool-use environments.",
    technologies: [
      { name: "LangGraph", sub: "Multi-Agent Cycles" },
      { name: "LangChain", sub: "LLM Orchestration" },
      { name: "LlamaIndex", sub: "Data Framework" },
      { name: "AutoGen", sub: "Agent Conversations" },
      { name: "CrewAI", sub: "Role Orchestration" },
      { name: "Tool Use / Function", sub: "Structured Outputs" },
      { name: "State Machines", sub: "Deterministic Flows" },
      { name: "Evaluation / Evals", sub: "LLM Benchmarking" },
    ],
  },
  {
    title: "Vector Databases & Semantic Search",
    description:
      "High-dimensional vector storage, hybrid dense/sparse retrieval, hierarchical indexing, and production RAG pipeline optimization.",
    technologies: [
      { name: "Qdrant", sub: "Payload Indexing" },
      { name: "Pinecone", sub: "Managed Vectors" },
      { name: "FAISS", sub: "Similarity Search" },
      { name: "Chroma", sub: "Local Vector Store" },
      { name: "Milvus", sub: "Large-Scale Vector" },
      { name: "Weaviate", sub: "Hybrid Search" },
      { name: "pgvector", sub: "PostgreSQL Vector" },
      { name: "Cohere Rerank", sub: "Cross-Encoders" },
    ],
  },
  {
    title: "LLM Providers & Local Model Serving",
    description:
      "Connecting to cloud frontier models and deploying private, air-gapped open-source models with quantization and high-throughput inference.",
    technologies: [
      { name: "OpenAI", sub: "GPT-4o / O3-Mini" },
      { name: "Anthropic Claude", sub: "Claude 3.7 / 3.5" },
      { name: "Google Gemini", sub: "Multimodal 2.0 / 1.5" },
      { name: "Groq", sub: "LPU Ultra-Fast" },
      { name: "Ollama", sub: "Local Model Host" },
      { name: "llama.cpp", sub: "GGUF Quantization" },
      { name: "vLLM", sub: "PagedAttention Serv" },
      { name: "DeepSeek", sub: "Reasoning Models" },
    ],
  },
  {
    title: "Backend Engineering & Microservices",
    description:
      "Asynchronous server architectures, low-latency streaming endpoints, distributed task workers, and scalable RESTful/WebSocket APIs.",
    technologies: [
      { name: "Python", sub: "Primary Language" },
      { name: "FastAPI", sub: "Async Microservices" },
      { name: "Flask", sub: "REST APIs" },
      { name: "Django", sub: "Full Backend" },
      { name: "Node.js", sub: "Event Runtime" },
      { name: "WebSockets", sub: "Real-time Streams" },
      { name: "Celery", sub: "Distributed Tasks" },
      { name: "TypeScript", sub: "Fullstack Glue" },
    ],
  },
  {
    title: "Databases, State & Conversational Memory",
    description:
      "Persistent relational systems, real-time caches, vector storage, and state persistence for multi-turn user memory.",
    technologies: [
      { name: "PostgreSQL", sub: "Relational Core" },
      { name: "Supabase", sub: "Serverless Postgres" },
      { name: "Redis", sub: "State & Vector Cache" },
      { name: "MongoDB", sub: "Document Store" },
      { name: "SQLite", sub: "Embedded Storage" },
      { name: "Redis Streams", sub: "Event Buffering" },
    ],
  },
  {
    title: "Real-World APIs & Business Integrations",
    description:
      "Direct integration of conversational AI with mainstream messaging networks, mobile payments, and enterprise operational tools.",
    technologies: [
      { name: "WhatsApp Cloud API", sub: "Conversational UI" },
      { name: "Telegram Bot API", sub: "Ops & Trading Bots" },
      { name: "M-Pesa / Daraja", sub: "Safaricom Payments" },
      { name: "Webhooks", sub: "Event Handlers" },
      { name: "OAuth 2.0", sub: "Secure Auth" },
      { name: "CRM Connectors", sub: "Business Operations" },
    ],
  },
  {
    title: "Infrastructure, DevOps & Tooling",
    description:
      "Containerization, reproducible deployment, version control, and production environment orchestration.",
    technologies: [
      { name: "Linux", sub: "Server Systems" },
      { name: "Docker", sub: "Containerization" },
      { name: "Git & GitHub", sub: "Version Control" },
      { name: "Nginx", sub: "Reverse Proxy" },
      { name: "CI / CD", sub: "Automated Tests" },
      { name: "Postman", sub: "API Testing" },
    ],
  },
]
