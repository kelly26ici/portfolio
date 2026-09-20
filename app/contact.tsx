"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import AlertMessage from "@/components/Alert"
import FadeDown from "@/components/animations/FadeDown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type AlertType = "success" | "error" | "info" | "warning"

interface ChatMessage {
  id: string
  sender: "user" | "bot"
  text: string
  timestamp: Date
}

export default function Contact() {
  const [alert, setAlert] = useState<{ type: AlertType; message: string; show: boolean }>({
    type: "success",
    message: "",
    show: false,
  })

  // Chatbot State
  const [isOpenChat, setIsOpenChat] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [isChatLoading, setIsChatLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Initialize Chat from LocalStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("kelly_chat_messages")
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages)
        const formattedMessages = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }))
        setChatMessages(formattedMessages)
      } catch (e) {
        console.error("Failed to parse saved messages", e)
        setInitialWelcomeMessage()
      }
    } else {
      setInitialWelcomeMessage()
    }
  }, [])

  const setInitialWelcomeMessage = () => {
    setChatMessages([
      {
        id: "welcome-msg",
        sender: "bot",
        text: "Hello! I am Kelly's AI Assistant. Ask me anything about Kelly's engineering projects (Samantha, OmniAgent, CortexRAG, TelePulse, DarajaPay), machine learning stack, agentic workflows, or collaboration opportunities.",
        timestamp: new Date(),
      },
    ])
  }

  // Save Messages to LocalStorage whenever they change
  useEffect(() => {
    if (chatMessages.length > 0) {
      localStorage.setItem("kelly_chat_messages", JSON.stringify(chatMessages))
    }
  }, [chatMessages])

  useEffect(() => {
    if (isOpenChat) {
      scrollToBottom()
    }
  }, [chatMessages, isOpenChat])

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const userText = chatInput.trim()
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date(),
    }

    const historyMessages = chatMessages.filter((msg) => msg.id !== "welcome-msg")
    const history = [
      ...historyMessages.map((msg) => ({
        role: msg.sender === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.text,
      })),
    ]

    setChatMessages((prev) => [...prev, userMsg])
    setChatInput("")
    setIsChatLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userText, history }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const contentType = response.headers.get("Content-Type") || ""
      if (contentType.includes("application/json")) {
        const data = await response.json()
        throw new Error(data.message || "Server error")
      }

      setIsChatLoading(false)

      const botMsgId = (Date.now() + 1).toString()
      setChatMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          sender: "bot",
          text: "",
          timestamp: new Date(),
        },
      ])

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let botText = ""

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          botText += decoder.decode(value, { stream: true })
          setChatMessages((prev) =>
            prev.map((msg) => (msg.id === botMsgId ? { ...msg, text: botText } : msg))
          )
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      setChatMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "I encountered a network or server issue. Feel free to connect directly with Kelly via GitHub or WhatsApp!",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsChatLoading(false)
    }
  }

  const showAlert = useCallback((type: AlertType, message: string) => {
    setAlert({ type, message, show: true })
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }))
    }, 3000)
  }, [])

  return (
    <section
      id="contacts"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative overflow-hidden border-t border-text-secondary/10"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 w-full text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-500 uppercase">
              Get In Touch
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">
            Let&apos;s Build Together
          </h3>
          <p className="text-text-secondary text-base max-w-2xl mt-4 font-medium">
            Interested in deploying production AI systems, autonomous agentic workflows,
            RAG pipelines, or API integrations? Reach out directly or start a conversation with my interactive AI assistant.
          </p>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <FadeDown delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Engineering Hub Card */}
            <div className="lg:col-span-6 bg-background border border-text-secondary/20 rounded-3xl p-8 shadow-xl hover:border-emerald-500/50 transition-colors duration-500 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none font-mono text-8xl font-black text-emerald-500">
                AI
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">
                    Location & Timezone
                  </span>
                </div>

                <h4 className="text-3xl font-black text-text-primary tracking-tight mb-2">
                  Nairobi, Kenya
                </h4>
                <p className="text-sm font-mono text-text-secondary mb-6">
                  East Africa Time (EAT • UTC+3) • Open to Global Remote Work
                </p>

                <p className="text-sm text-text-secondary font-medium leading-relaxed mb-6">
                  I am available for consulting, full-time engineering roles, contract work,
                  and client deployments of custom AI agents, vector search, and API integrations.
                </p>

                <div className="p-4 rounded-2xl bg-thirdary/30 border border-text-secondary/10 space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-secondary">Direct Availability</span>
                    <span className="text-emerald-500 font-bold">Open for Q3/Q4</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-secondary">Typical Response Time</span>
                    <span className="text-text-primary font-bold">&lt; 4 hours</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-secondary">Primary Platforms</span>
                    <span className="text-text-primary font-bold">GitHub • WhatsApp • Telegram • Email</span>
                  </div>
                </div>
              </div>

              {/* Quick Action button to trigger AI chat */}
              <div className="pt-4 border-t border-text-secondary/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsOpenChat(true)}
                  className="cursor-pointer flex-1 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Chat with My AI Assistant
                </button>
              </div>
            </div>

            {/* Right: Direct Social & Communication Channels */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub & Portfolio */}
              <a
                href="https://github.com/kelly26ici/portfilio"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-text-secondary/20 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500 hover:bg-text-secondary/5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-text-secondary group-hover:text-emerald-500 group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-1">GitHub & Repo</h4>
                  <p className="text-xs font-mono text-emerald-500">kelly26ici/portfilio</p>
                  <p className="text-xs text-text-secondary mt-1">Open source code, repositories & agents</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254794582488"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-text-secondary/20 rounded-2xl p-6 flex flex-col justify-between hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.004 0C5.377 0 0 5.377 0 12.004c0 2.115.553 4.183 1.606 6.007L.057 24l6.177-1.62a11.95 11.95 0 005.77 1.488h.005c6.627 0 12.004-5.377 12.004-12.004 0-3.208-1.25-6.224-3.52-8.494A11.928 11.928 0 0012.004 0zm0 21.84c-1.83 0-3.626-.492-5.197-1.423l-.373-.221-3.864 1.013 1.031-3.766-.243-.387a9.837 9.837 0 01-1.51-5.052c0-5.426 4.414-9.84 9.844-9.84 2.63 0 5.101 1.025 6.96 2.885a9.803 9.803 0 012.88 6.965c-.005 5.426-4.419 9.84-9.845 9.84zm5.385-7.367c-.295-.148-1.748-.863-2.019-.962-.27-.098-.467-.148-.664.148-.197.295-.763.962-.935 1.16-.172.197-.344.222-.64.074-.295-.148-1.246-.46-2.373-1.465-.877-.783-1.47-1.75-1.642-2.046-.172-.295-.018-.455.13-.603.133-.133.295-.345.443-.518.148-.172.197-.295.295-.492.098-.197.05-.37-.025-.518-.074-.148-.664-1.602-.91-2.193-.24-.576-.484-.498-.664-.507-.172-.008-.369-.01-.566-.01-.197 0-.517.074-.788.37-.27.295-1.034 1.01-1.034 2.464s1.058 2.858 1.206 3.055c.148.197 2.083 3.181 5.046 4.46.705.304 1.255.486 1.684.622.708.225 1.352.194 1.861.118.568-.085 1.748-.714 1.994-1.404.246-.69.246-1.281.172-.1404-.074-.123-.27-.197-.566-.345z" />
                    </svg>
                  </div>
                  <span className="text-text-secondary group-hover:text-[#25D366] group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-1">WhatsApp</h4>
                  <p className="text-xs font-mono text-[#25D366]">+254 794 582 488</p>
                  <p className="text-xs text-text-secondary mt-1">Direct instant messaging & quick inquiries</p>
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Lucifers_cousin"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-text-secondary/20 rounded-2xl p-6 flex flex-col justify-between hover:border-[#229ED9] hover:bg-[#229ED9]/5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#229ED9]/10 flex items-center justify-center text-[#229ED9] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.939z" />
                    </svg>
                  </div>
                  <span className="text-text-secondary group-hover:text-[#229ED9] group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-1">Telegram</h4>
                  <p className="text-xs font-mono text-[#229ED9]">@Lucifers_cousin</p>
                  <p className="text-xs text-text-secondary mt-1">Direct messaging &amp; bot engineering</p>
                </div>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:rexk638@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-text-secondary/20 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-text-secondary group-hover:text-emerald-500 group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-1">Direct Email</h4>
                  <p className="text-xs font-mono text-emerald-500">rexk638@gmail.com</p>
                  <p className="text-xs text-text-secondary mt-1">Project proposals, consulting & architecture</p>
                </div>
              </a>
            </div>
          </div>
        </FadeDown>
      </div>

      {/* Floating Chatbot Trigger Button */}
      <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-40">
        <button
          onClick={() => setIsOpenChat(true)}
          className="group bg-text-primary text-background p-4 rounded-full shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative border-2 border-background"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
        </button>
      </div>

      {/* Fullscreen Interactive AI Assistant Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-0 transition-all duration-500 ${
          isOpenChat ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/90 backdrop-blur-xl transition-opacity duration-500 ${
            isOpenChat ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpenChat(false)}
        ></div>

        {/* Modal content */}
        <div
          className={`bg-background w-full h-[100dvh] shadow-2xl z-10 flex flex-col transition-all duration-500 transform ${
            isOpenChat ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-95 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-text-secondary/10 bg-background relative z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black border border-emerald-500/20">
                AI
              </div>
              <div>
                <h3 className="text-lg font-black text-text-primary tracking-tight leading-none">
                  Kelly AI Assistant
                </h3>
                <span className="text-xs text-emerald-500 font-bold flex items-center gap-1 mt-1 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse"></span>
                  Online • Engineering Knowledge Stream
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={setInitialWelcomeMessage}
                className="text-text-secondary hover:text-emerald-500 transition-colors p-2 bg-text-secondary/5 rounded-full"
                title="Reset Conversation"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpenChat(false)}
                className="text-text-secondary hover:text-text-primary transition-colors p-2 bg-text-secondary/5 rounded-full"
                title="Close Assistant"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth custom-scrollbar bg-thirdary/5 flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col gap-4 pb-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3.5 ${
                      msg.sender === "user"
                        ? "bg-text-primary text-background rounded-tr-sm"
                        : "bg-background border border-text-secondary/15 text-text-primary rounded-tl-sm shadow-sm"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </p>
                    ) : (
                      <div className="text-sm font-medium leading-relaxed prose prose-sm max-w-none prose-p:my-1 prose-headings:mb-2 prose-headings:mt-3 prose-a:text-emerald-500 prose-code:bg-text-secondary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs overflow-hidden">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                            strong: ({ node, ...props }) => (
                              <strong className="font-bold text-text-primary" {...props} />
                            ),
                            a: ({ node, ...props }) => (
                              <a
                                className="text-emerald-500 underline hover:opacity-80 font-bold"
                                target="_blank"
                                rel="noopener noreferrer"
                                {...props}
                              />
                            ),
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                    <span
                      className={`text-[10px] uppercase font-mono font-bold tracking-wider mt-2 block ${
                        msg.sender === "user" ? "text-background/70" : "text-text-secondary/70"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex w-full justify-start">
                  <div className="max-w-[85%] bg-background border border-text-secondary/15 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-text-secondary/10 bg-background flex justify-center">
            <form onSubmit={handleSendChat} className="flex gap-2 w-full max-w-4xl">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about Kelly's projects (Samantha, CortexRAG), ML stack, agents..."
                className="flex-1 bg-thirdary/30 border border-text-secondary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 text-text-primary font-medium transition-colors"
                disabled={isChatLoading}
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || isChatLoading}
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-5 py-3 rounded-xl hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`${
          alert.show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } fixed inset-0 flex top-0 right-0 items-start justify-end px-4 py-6 z-[100] transition-all duration-500 ease-out pointer-events-none`}
      >
        <div className="pointer-events-auto border border-text-secondary/20 shadow-2xl rounded-lg">
          <AlertMessage
            type={alert.type as AlertType}
            message={alert.message}
            onClose={() => setAlert({ ...alert, show: false })}
          />
        </div>
      </div>
    </section>
  )
}
