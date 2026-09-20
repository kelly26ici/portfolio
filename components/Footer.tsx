import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-text-secondary/10 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-text-secondary">
            &copy; {currentYear} Kelly. All rights reserved.
          </p>
          <p className="text-xs font-medium text-text-secondary/70 mt-1">
            AI/ML & Software Engineer • Nairobi, Kenya
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href="https://github.com/kelly26ici/portfilio" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest">
            Repository
          </a>
          <a href="https://wa.me/254794582488" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest">
            WhatsApp
          </a>
          <a href="https://t.me/Lucifers_cousin" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest">
            Telegram
          </a>
          <a href="mailto:rexk638@gmail.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest">
            Email
          </a>
          <a href="#projects" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            Projects
          </a>
          <a href="#techstack" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            Tech Stack
          </a>
          <a href="#contacts" className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
