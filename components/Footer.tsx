import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-surface-border dark:border-charcoal bg-surface/60 dark:bg-deep-onyx/60 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-forum text-sm font-semibold text-text-primary">
            &copy; {currentYear} Kelly. All rights reserved.
          </p>
          <p className="font-messapia text-xs text-text-muted mt-1 uppercase tracking-widest">
            AI/ML & Software Engineer • Nairobi, Kenya
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://github.com/kelly26ici/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-messapia text-text-secondary hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            Repository
          </a>
          <a
            href="https://wa.me/254794582488"
            target="_blank"
            rel="noopener noreferrer"
            className="font-messapia text-text-secondary hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/Lucifers_cousin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-messapia text-text-secondary hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            Telegram
          </a>
          <a
            href="mailto:rexk638@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-messapia text-text-secondary hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            Email
          </a>
          <a
            href="#projects"
            className="font-messapia text-text-secondary hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            Projects
          </a>
          <a
            href="#techstack"
            className="font-messapia text-text-secondary hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            Tech Stack
          </a>
          <a
            href="#contacts"
            className="font-messapia text-text-secondary hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
