"use client"
import { useEffect, useState, useMemo } from "react"
import FadeRight from "@/components/animations/FadeRight"
import FadeLeft from "@/components/animations/FadeLeft"
import Neural3DHero from "@/components/Neural3DHero"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const texts = useMemo(
    () => [
      "AI & Machine Learning Engineer",
      "Agentic Systems Architect",
      "LLM & RAG Systems Developer",
      "Backend & Integrations Specialist",
    ],
    []
  )

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const currentIndex = index % texts.length

    const timeout = setTimeout(
      () => {
        const currentText = texts[currentIndex]

        if (!deleting && subIndex < currentText.length) {
          setSubIndex(subIndex + 1)
        } else if (deleting && subIndex > 0) {
          setSubIndex(subIndex - 1)
        } else if (!deleting && subIndex === currentText.length) {
          setDeleting(true)
        } else if (deleting && subIndex === 0) {
          setDeleting(false)
          setIndex((currentIndex + 1) % texts.length)
        }
      },
      deleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts])

  return (
    <>
      <section
        id="home"
        className="w-full max-w-7xl mx-auto cursor-default grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center px-6 md:px-12 py-20 md:py-28 overflow-hidden"
      >
        <div className="lg:col-span-7">
          <FadeLeft>
            <div className="flex flex-col gap-3">
              {/* Location & Status Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Nairobi, Kenya • Available for Production AI Engineering
                </span>
              </div>

              <div>
                <h1 className="text-text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.08]">
                  Hi, I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
                    Kelly
                  </span>
                </h1>
              </div>

              <div className="relative min-h-[36px] flex items-center">
                <span className="text-text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
                  {`${texts[index].substring(0, subIndex)}`}
                </span>
                <span className="animate-cursor text-emerald-500 text-2xl lg:text-3xl font-light ml-0.5">
                  |
                </span>
              </div>

              <div className="max-w-xl mt-3">
                <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium">
                  I engineer practical, production-grade AI systems, autonomous agents,
                  and real-world software integrations. Rather than isolated chatbots, I build
                  systems where state-of-the-art models connect directly with data, vector memory,
                  tools, APIs, databases, and business operations.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => handleScroll("projects")}
                  className="cursor-pointer text-sm md:text-base font-bold bg-text-primary text-background px-8 py-4 rounded-xl flex flex-row items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out group"
                >
                  Explore My Work
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => handleScroll("techstack")}
                  className="cursor-pointer text-sm md:text-base font-bold border-2 border-text-secondary/20 hover:border-text-primary text-text-primary px-8 py-4 rounded-xl flex flex-row items-center justify-center gap-3 hover:-translate-y-1 hover:bg-thirdary/40 transition-all duration-300 ease-out bg-background/50 backdrop-blur-sm shadow-sm"
                >
                  My Tech Matrix
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </button>

                <a
                  href="https://github.com/kelly26ici/portfilio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-sm md:text-base font-bold border border-text-secondary/20 hover:border-emerald-500 text-text-primary px-6 py-4 rounded-xl flex flex-row items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 bg-thirdary/30"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Repository</span>
                </a>
              </div>

              {/* Social Connect */}
              <div className="mt-10 pt-6 border-t border-text-secondary/10">
                <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-3 block">
                  Connect Directly With Me
                </span>
                <div className="flex flex-row gap-3">
                  {socialMediaList.map((item, i) => (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-text-secondary/20 rounded-xl hover:border-emerald-500 hover:text-emerald-500 text-text-primary transition-all duration-300 bg-background/50 hover:-translate-y-1"
                      key={i}
                      title={item.title}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeLeft>
        </div>

        {/* Right Column: 3D Neural Vector Canvas */}
        <div className="lg:col-span-5">
          <FadeRight>
            <div className="flex flex-col items-center justify-center relative">
              {/* Interactive 3D Component */}
              <Neural3DHero />

              {/* Floating Engineering Badges */}
              <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickStatsList.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-background/90 backdrop-blur-md border border-text-secondary/10 p-3 rounded-xl shadow-sm hover:border-text-secondary/30 transition-all duration-300"
                  >
                    <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 p-2 rounded-lg">
                      {stat.icon}
                    </div>
                    <span className="text-xs font-semibold text-text-primary leading-tight">
                      {stat.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeRight>
        </div>
      </section>
    </>
  )
}

const socialMediaList = [
  {
    title: "GitHub (kelly26ici)",
    href: "https://github.com/kelly26ici",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp (+254 794 582 488)",
    href: "https://wa.me/254794582488",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.004 0C5.377 0 0 5.377 0 12.004c0 2.115.553 4.183 1.606 6.007L.057 24l6.177-1.62a11.95 11.95 0 005.77 1.488h.005c6.627 0 12.004-5.377 12.004-12.004 0-3.208-1.25-6.224-3.52-8.494A11.928 11.928 0 0012.004 0zm0 21.84c-1.83 0-3.626-.492-5.197-1.423l-.373-.221-3.864 1.013 1.031-3.766-.243-.387a9.837 9.837 0 01-1.51-5.052c0-5.426 4.414-9.84 9.844-9.84 2.63 0 5.101 1.025 6.96 2.885a9.803 9.803 0 012.88 6.965c-.005 5.426-4.419 9.84-9.845 9.84zm5.385-7.367c-.295-.148-1.748-.863-2.019-.962-.27-.098-.467-.148-.664.148-.197.295-.763.962-.935 1.16-.172.197-.344.222-.64.074-.295-.148-1.246-.46-2.373-1.465-.877-.783-1.47-1.75-1.642-2.046-.172-.295-.018-.455.13-.603.133-.133.295-.345.443-.518.148-.172.197-.295.295-.492.098-.197.05-.37-.025-.518-.074-.148-.664-1.602-.91-2.193-.24-.576-.484-.498-.664-.507-.172-.008-.369-.01-.566-.01-.197 0-.517.074-.788.37-.27.295-1.034 1.01-1.034 2.464s1.058 2.858 1.206 3.055c.148.197 2.083 3.181 5.046 4.46.705.304 1.255.486 1.684.622.708.225 1.352.194 1.861.118.568-.085 1.748-.714 1.994-1.404.246-.69.246-1.281.172-.1404-.074-.123-.27-.197-.566-.345z" />
      </svg>
    ),
  },
  {
    title: "Telegram (@Lucifers_cousin)",
    href: "https://t.me/Lucifers_cousin",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.939z" />
      </svg>
    ),
  },
  {
    title: "Email (rexk638@gmail.com)",
    href: "mailto:rexk638@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const quickStatsList = [
  {
    message: "Python & ML Comprehensive Specialist",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    message: "Autonomous Agentic AI & RAG Architect",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    message: "Production API & M-Pesa Integrator",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  },
  {
    message: "Cloud & Local Inference (Ollama / vLLM)",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
]
