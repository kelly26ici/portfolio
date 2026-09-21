"use client"
import { useState, useEffect } from "react"
import FadeDown from "./animations/FadeDown"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)

    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const prefersDark = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)
    setIsDark(shouldBeDark)

    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", shouldBeDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme ? "dark" : "light")
      document.documentElement.classList.toggle("dark", newTheme)
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const handleScroll = () => {
      let current: string | null = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none w-full">
      <div className="w-full max-w-5xl pointer-events-auto">
        <FadeDown>
          <div className="relative flex items-center justify-between py-3 md:py-4 px-6 md:px-8 bg-surface/90 dark:bg-deep-onyx/90 backdrop-blur-xl border border-surface-border dark:border-charcoal rounded-full shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.9)] transition-colors duration-300">
            <div className="flex flex-row items-center gap-2">
              {/* Typographic Logo */}
              <a href="#home" className="flex items-center gap-2.5 group cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_#D4AF37] animate-pulse"></span>
                <span className="font-cinzel text-xl md:text-2xl font-bold text-text-primary tracking-tight group-hover:text-gold transition-colors duration-300">
                  KELLY<span className="text-gold font-normal">.AI</span>
                </span>
              </a>
            </div>

            <nav className="flex-row md:gap-7 lg:gap-9 hidden lg:flex items-center">
              {shortCut.map((item, index) => {
                const isActive = activeSection === item.name.toLowerCase()
                return (
                  <button
                    onClick={() => handleScroll(item.link)}
                    key={index}
                    className={`
                      ${isActive ? "text-gold font-bold" : "text-text-secondary hover:text-gold font-medium"}
                      cursor-pointer font-messapia text-xs uppercase tracking-widest flex items-center gap-1.5 transition-colors duration-200 ease-in-out relative py-1
                    `}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                    )}
                    {item.name}
                  </button>
                )
              })}
            </nav>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                className="cursor-pointer text-text-secondary hover:text-gold transition-colors duration-200 p-1.5 rounded-full hover:bg-gold/10"
                onClick={toggleTheme}
                title={isDark ? "Switch to Luminous Light Mode" : "Switch to AMOLED Dark Mode"}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5 md:w-5 md:h-5 text-gold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 md:w-5 md:h-5 text-gold-hover" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                  </svg>
                )}
              </button>

              <button
                className="lg:hidden text-text-secondary hover:text-gold p-1"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open menu"
              >
                <svg className="w-6 md:w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} md:hidden transform absolute top-16 right-4 z-50 origin-top-right transition-all duration-300 ease-in-out`}>
              <div className="flex flex-col gap-4 bg-surface dark:bg-deep-onyx border border-surface-border dark:border-charcoal p-6 rounded-2xl shadow-2xl w-52">
                {shortCut.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase()
                  return (
                    <button
                      onClick={() => { handleScroll(item.link); setIsOpen(false); }}
                      key={index}
                      className={`
                        ${isActive ? "text-gold font-bold" : "text-text-secondary font-medium hover:text-gold"}
                        cursor-pointer font-messapia text-xs uppercase tracking-widest flex items-center gap-2 py-1.5 transition-colors duration-200 text-left
                      `}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </FadeDown>
      </div>
    </div>
  )
}

const shortCut = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Stack",
    link: "techstack",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Experience",
    link: "experience",
  },
  {
    name: "Contacts",
    link: "contacts",
  },
]
