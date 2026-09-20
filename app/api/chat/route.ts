import { NextRequest, NextResponse } from "next/server"
export const runtime = "edge"
import OpenAI from "openai"

interface HistoryEntry {
  role: "system" | "user" | "assistant"
  content: string
}

const KELLY_KNOWLEDGE_BASE = `
You are Kelly's AI Assistant, an interactive engineering representative on Kelly's portfolio website.
Your role is to answer questions from recruiters, clients, and fellow engineers about Kelly's background, projects, machine learning expertise, and software engineering capabilities. Always be professional, technically precise, polite, and enthusiastic.

Core Facts About Kelly:
- Identity: Kelly, an AI/ML and software engineer based in Nairobi, Kenya.
- Specialization: Practical AI systems, agentic workflows, RAG architectures, model serving, vector databases, and real-world API/payment integrations.
- Primary Language: Python (Advanced). Also proficient in TypeScript, SQL, and Bash.
- GitHub: https://github.com/kelly26ici
- Portfolio Repository: https://github.com/kelly26ici/portfolio
- WhatsApp: +254 794 582 488 (https://wa.me/254794582488)
- Telegram: @Lucifers_cousin (https://t.me/Lucifers_cousin)
- Email: rexk638@gmail.com
- Core Machine Learning: Comprehensive knowledge of PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, NumPy, Pandas, SciPy, XGBoost, LightGBM, OpenCV, spaCy.
- Agentic Frameworks: LangGraph, LangChain, LlamaIndex, AutoGen, CrewAI, multi-agent state machines, structured tool calling.
- Vector Databases: Qdrant, Pinecone, FAISS, Chroma, Milvus, Weaviate, pgvector.
- LLM Providers & Inference: OpenAI (GPT-4o), Anthropic Claude (3.7 / 3.5 Sonnet), Google Gemini (2.0 / 1.5), Groq (LPU fast inference), Ollama, llama.cpp, vLLM, DeepSeek.
- Backend & Microservices: FastAPI, Flask, Django, Node.js, RESTful APIs, WebSockets, Celery, Redis Streams.
- Databases & State: PostgreSQL, Supabase, Redis (conversational memory & state caching), MongoDB.
- Real-World Integrations: WhatsApp Cloud API, Telegram Bot API (@jbee_vector1_bot), Safaricom M-Pesa / Daraja API, Webhooks.
- Academic Background: Pursuing Computer Science at Mama Ngina University College / Kenyatta University (expected graduation 2029) - though his portfolio primarily focuses on his production engineering work and client solutions.

Featured Projects:
1. Samantha: AI-powered real-estate assistant on WhatsApp Cloud API. Features semantic property discovery with Qdrant, property comparisons, customer memory in Redis/Supabase, and automated booking fee payments via Safaricom M-Pesa STK push.
2. OmniAgent Core: Enterprise multi-agent orchestration engine using LangGraph and FastAPI with tool use, Redis state machines, and human-in-the-loop governance.
3. CortexRAG: High-throughput multimodal RAG engine combining dense vector search, sparse BM25, cross-encoder reranking, and citation attribution.
4. TelePulse AI: High-concurrency automated Telegram bot (@jbee_vector1_bot) using Python, Telegram Bot API, Groq inference, and Redis Streams for operations and support triage.
5. DarajaPay AI: Fintech gateway pairing Safaricom M-Pesa (Daraja API) with scikit-learn anomaly detection for invoice reconciliation and fraud mitigation.
6. LocalLLM Nexus: Air-gapped, on-premises local model serving suite packaging llama.cpp, Ollama, and vLLM with OpenAI-compatible streaming endpoints.
`

function generateSimulatedResponse(question: string): string {
  const q = question.toLowerCase()

  if (q.includes("samantha")) {
    return "### 🏡 Samantha: Real Estate AI Assistant on WhatsApp\n\n**Samantha** is one of Kelly's flagship public projects! It operates directly inside **WhatsApp** (via the WhatsApp Cloud API) to transform property discovery into an effortless conversational experience.\n\n**Key Architectural Highlights:**\n- **Vector Semantic Search:** Uses **Qdrant** embeddings so users can search listings in natural language (e.g., *'spacious 2-bedroom with natural light under 40k'*).\n- **Customer Memory:** Remembers user preferences, past searches, and interaction state using **Redis** and **Supabase/PostgreSQL**.\n- **M-Pesa Payment Integration:** Seamlessly triggers reservation fees via **Safaricom M-Pesa / Daraja STK Push** directly within the chat flow.\n- **Business Automation:** Automates CRM lead tracking and scheduling for real-estate operators.\n\nWould you like to know more about the tech stack or how Kelly implements multi-agent routing?"
  }

  if (q.includes("project") || q.includes("work") || q.includes("built")) {
    return "Kelly has engineered a broad range of production-grade systems across several domains:\n\n1. **Samantha (WhatsApp Real Estate Assistant)** - Combines conversational AI, Qdrant vector search, customer memory, and M-Pesa payments.\n2. **OmniAgent Core** - Multi-agent orchestration engine built with **LangGraph**, **FastAPI**, and **Redis** state machines with human-in-the-loop approvals.\n3. **CortexRAG** - High-throughput hybrid RAG engine with dense vector retrieval (**Qdrant / Pinecone / FAISS**), BM25 lexical search, and cross-encoder reranking.\n4. **TelePulse AI** - High-concurrency automated **Telegram bot** utilizing Groq LPU inference, Redis streams, and real-time database queries.\n5. **DarajaPay AI** - Fintech reconciliation gateway integrating **Safaricom M-Pesa** with scikit-learn anomaly detection for fraud alerts.\n6. **LocalLLM Nexus** - Air-gapped private model serving runtime using **llama.cpp**, **Ollama**, and **vLLM**.\n\nWhich project would you like to explore deeper?"
  }

  if (q.includes("stack") || q.includes("skill") || q.includes("python") || q.includes("tool") || q.includes("language")) {
    return "### 🛠️ Kelly's Engineering Stack\n\nKelly is a **Python specialist** with deep expertise across the modern AI and backend ecosystem:\n\n- **Machine Learning & Deep Learning:** PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, NumPy, Pandas, SciPy, XGBoost, LightGBM, OpenCV.\n- **Agentic AI & Orchestration:** LangGraph, LangChain, LlamaIndex, AutoGen, CrewAI, custom deterministic state machines.\n- **Vector Databases:** Qdrant, Pinecone, FAISS, Chroma, Milvus, Weaviate, pgvector.\n- **Model Inference:** OpenAI (GPT-4o), Anthropic Claude (3.7/3.5), Google Gemini, Groq, Ollama, llama.cpp, vLLM.\n- **Backend Microservices:** FastAPI, Flask, Django, Node.js, WebSockets, Celery, Redis Streams.\n- **Databases & State:** PostgreSQL, Supabase, Redis (state caching & memory), MongoDB.\n- **Real-World Integrations:** WhatsApp Cloud API, Telegram Bot API, Safaricom M-Pesa / Daraja, Webhooks."
  }

  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("location") || q.includes("kenya")) {
    return "### 📬 Connecting with Kelly\n\nKelly is based in **Nairobi, Kenya** (UTC+3) and works with international and regional clients on production AI systems.\n\n- **GitHub:** [github.com/kelly26ici](https://github.com/kelly26ici) | Repo: [github.com/kelly26ici/portfolio](https://github.com/kelly26ici/portfolio)\n- **WhatsApp:** [+254 794 582 488](https://wa.me/254794582488)\n- **Telegram:** [@Lucifers_cousin](https://t.me/Lucifers_cousin)\n- **Direct Email:** [rexk638@gmail.com](mailto:rexk638@gmail.com)\n\nFeel free to reach out directly via WhatsApp, Telegram, or email!"
  }

  if (q.includes("education") || q.includes("student") || q.includes("university") || q.includes("degree")) {
    return "Kelly is pursuing **Computer Science at Mama Ngina University College / Kenyatta University** (expected graduation 2029). His studies reinforce rigorous foundations in algorithms, data structures, and distributed systems, though his portfolio is primarily dedicated to his real-world engineering work, client deployments, and practical AI systems."
  }

  return "Thanks for asking! Kelly is an AI/ML and software engineer based in Nairobi, Kenya, specializing in practical AI systems, autonomous agents, RAG pipelines, and real-world API integrations (such as WhatsApp, Telegram Bots, and M-Pesa payments).\n\nYou can ask me about:\n- **Flagship & Client Projects** (Samantha, OmniAgent Core, CortexRAG, TelePulse AI, DarajaPay)\n- **Machine Learning & Agentic Stack** (PyTorch, LangGraph, Qdrant, Pinecone, FastAPI, vLLM)\n- **Collaboration & Contact** details\n\nHow can I help you today?"
}

export async function POST(req: NextRequest) {
  try {
    const { text, history = [] }: { text: string; history: HistoryEntry[] } = await req.json()

    if (!text || !text.trim()) {
      return NextResponse.json({ success: false, message: "Message cannot be empty." }, { status: 400 })
    }

    const apiKey =
      process.env.OPENAI_API_KEY ||
      process.env.GROQ_API_KEY ||
      process.env.NVIDIA_APIKEY ||
      process.env.OPENROUTER_API_KEY

    // If an external API key is configured, stream response from LLM
    if (apiKey) {
      let baseURL = undefined
      let model = "gpt-4o-mini"

      if (process.env.GROQ_API_KEY) {
        baseURL = "https://api.groq.com/openai/v1"
        model = "llama-3.3-70b-versatile"
      } else if (process.env.NVIDIA_APIKEY) {
        baseURL = "https://integrate.api.nvidia.com/v1"
        model = "meta/llama-3.1-70b-instruct"
      } else if (process.env.OPENROUTER_API_KEY) {
        baseURL = "https://openrouter.ai/api/v1"
        model = "meta-llama/llama-3.3-70b-instruct"
      }

      const openai = new OpenAI({
        apiKey,
        baseURL,
      })

      const messages = [
        { role: "system", content: KELLY_KNOWLEDGE_BASE },
        ...history,
        { role: "user", content: text },
      ]

      const completion = await openai.chat.completions.create({
        model,
        messages: messages as any,
        temperature: 0.7,
        max_tokens: 1500,
        stream: true,
      })

      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of completion) {
              const content = chunk.choices?.[0]?.delta?.content || ""
              if (content) {
                controller.enqueue(new TextEncoder().encode(content))
              }
            }
            controller.close()
          } catch (error) {
            controller.error(error)
          }
        },
      })

      return new Response(readable, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
        },
      })
    }

    // Fallback: Intelligent Simulated Knowledge Stream (zero API key dependency required!)
    const simulatedAnswer = generateSimulatedResponse(text)
    const chunks = simulatedAnswer.match(/.{1,12}/g) || [simulatedAnswer]

    const readable = new ReadableStream({
      async start(controller) {
        for (const chunk of chunks) {
          controller.enqueue(new TextEncoder().encode(chunk))
          await new Promise((resolve) => setTimeout(resolve, 15))
        }
        controller.close()
      },
    })

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    })
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { success: false, message: "AI stream temporarily unavailable." },
      { status: 500 }
    )
  }
}
