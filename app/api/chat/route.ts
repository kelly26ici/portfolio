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
- Identity: Kelly, a computer science student and self-taught software builder in Nairobi, Kenya.
- Tone: Friendly, grounded, humble, and practical. Avoid enterprise jargon and dashes. Speak as if talking to someone across a table.
- Specialization: Practical AI applications, autonomous agents, RAG search engines, and real-world integrations (WhatsApp, Telegram, and Safaricom M-Pesa).
- Primary Language: Python. Also builds with TypeScript, SQL, and modern web frameworks.
- GitHub: https://github.com/kelly26ici
- Portfolio Repository: https://github.com/kelly26ici/portfolio
- WhatsApp: +254 794 582 488 (https://wa.me/254794582488)
- Email: rexk638@gmail.com
- Academic: Studying Computer Science at Mama Ngina University College / Kenyatta University (Graduation 2029), combined with continuous hands-on self learning.
`

function generateSimulatedResponse(question: string): string {
  const q = question.toLowerCase()

  if (q.includes("samantha")) {
    return "### 🏡 Samantha: Real Estate AI Assistant on WhatsApp\n\n**Samantha** is one of Kelly's favorite projects! It runs directly inside **WhatsApp** (using the WhatsApp Cloud API) to make house hunting simple and conversational.\n\n**How it works:**\n- **Natural Search:** Uses **Qdrant** vector search so users can describe what they want in plain text (e.g. *'2-bedroom with natural light under 40k'*).\n- **Remembers Preferences:** Remembers previous chats and requirements using **Redis** and **Supabase** so users do not repeat themselves.\n- **M-Pesa Payments:** Clients can pay viewing or booking deposits directly via an **M-Pesa STK push** prompt.\n- **Direct Owner Alerts:** Notifies real estate managers instantly when a qualified lead is ready.\n\nFeel free to ask more about how it was built!"
  }

  if (q.includes("project") || q.includes("work") || q.includes("built")) {
    return "Here are the main projects Kelly has built:\n\n1. **Samantha (WhatsApp Real Estate Assistant):** Conversational house hunting with vector search and automated M-Pesa payments.\n2. **OmniAgent:** A multi-agent engine built with LangGraph where specialized AI agents collaborate on research and code.\n3. **CortexRAG:** A fast document search tool that cites exact page paragraphs so answers are always verified.\n4. **TelePulse AI:** A live Telegram bot (@jbee_vector1_bot) that handles queries and database lookups in real time.\n5. **DarajaPay AI:** An M-Pesa payment gateway with machine learning checks to catch double-payments or fraud.\n6. **LocalLLM Nexus:** An offline setup using Ollama and llama.cpp to run AI models privately on your own computer.\n\nWhich one would you like to know more about?"
  }

  if (q.includes("stack") || q.includes("skill") || q.includes("python") || q.includes("tool") || q.includes("language")) {
    return "### 🛠️ Kelly's Toolkit\n\nKelly writes mostly in **Python** with a focus on real-world AI and backend development:\n\n- **AI & Agents:** LangGraph, LangChain, OpenAI, Claude, LlamaIndex, Ollama, llama.cpp\n- **Machine Learning:** PyTorch, TensorFlow, scikit-learn, Hugging Face, Pandas, NumPy\n- **Vector Memory:** Qdrant, Pinecone, FAISS, Redis\n- **APIs & Backend:** FastAPI, Docker, PostgreSQL, Supabase, WebSockets\n- **Integrations:** WhatsApp Cloud API, Telegram Bot API, Safaricom M-Pesa Daraja"
  }

  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("location") || q.includes("kenya")) {
    return "### 📬 Connecting with Kelly\n\nKelly is based in **Nairobi, Kenya** (UTC+3) and is open to freelance projects, collaborations, and contract roles.\n\n- **GitHub:** [github.com/kelly26ici](https://github.com/kelly26ici)\n- **WhatsApp:** [+254 794 582 488](https://wa.me/254794582488)\n- **Direct Email:** [rexk638@gmail.com](mailto:rexk638@gmail.com)\n\nFeel free to send a message anytime!"
  }

  if (q.includes("education") || q.includes("student") || q.includes("university") || q.includes("degree")) {
    return "Kelly is a **Computer Science student at Mama Ngina University College / Kenyatta University** (graduating around 2029). While school gives him strong foundations in algorithms and system architecture, he is passionate about self-learning, building practical open-source tools, and solving real problems with software."
  }

  return "Thanks for asking! Kelly is a computer science student and builder in Nairobi, Kenya. He builds practical AI tools, autonomous agents, and real-world software integrations like WhatsApp property assistants and M-Pesa payments.\n\nYou can ask me about:\n- **Projects** (Samantha, OmniAgent, CortexRAG, TelePulse, DarajaPay)\n- **Technologies** (Python, LangGraph, Qdrant, FastAPI, PyTorch)\n- **How to Connect** (WhatsApp or Email)\n\nHow can I help you today?"
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
        messages: messages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
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
