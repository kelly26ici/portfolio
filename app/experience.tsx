"use client"
import FadeDown from "@/components/animations/FadeDown"

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto py-16 md:py-24 cursor-default bg-background relative border-t border-surface-border dark:border-charcoal"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 md:mb-12 w-full text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37]"></span>
            <h2 className="font-coconat text-xs font-bold tracking-[0.25em] text-gold uppercase">
              What I Have Built
            </h2>
          </div>
          <h3 className="font-cinzel text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            My Experience
          </h3>
          <p className="font-forum text-text-secondary text-base md:text-lg max-w-2xl mt-3 font-normal leading-relaxed">
            I focus on building practical software that solves everyday problems. Here is the primary system I built from scratch.
          </p>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-gold/40 bg-surface/90 dark:bg-deep-onyx/90 p-6 md:p-8 shadow-[0_8px_40px_rgba(212,175,55,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <span className="font-coconat text-[11px] font-bold tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/30 inline-block mb-2">
                2026 to now
              </span>
              <h4 className="font-ortica text-xl md:text-2xl font-bold text-text-primary leading-tight">
                Samantha: WhatsApp AI Real Estate Assistant
              </h4>
              <p className="font-messapia text-xs text-text-muted uppercase tracking-wider mt-1">
                Autonomous Agent, WhatsApp Cloud API &amp; M-Pesa Payments
              </p>
            </div>
            <a
              href="https://github.com/kelly26ici"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-border dark:border-charcoal text-text-secondary hover:text-gold hover:border-gold/40 transition-all text-xs font-coconat font-bold shrink-0 self-start sm:self-auto"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>

          <p className="font-forum text-base md:text-lg text-text-secondary font-normal leading-relaxed">
            I built Samantha as an autonomous WhatsApp assistant that makes house hunting in Nairobi simple and conversational. Users can send plain messages describing what they want, and Samantha matches them against verified listings using vector search, prompts M-Pesa STK deposits for viewings, and alerts property managers when a client is ready.
          </p>
        </div>
      </div>
    </section>
  )
}
