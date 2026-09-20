import ScrollVelocity from "@/components/ScrollVelocity"
import FadeDown from "@/components/animations/FadeDown"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"

export default function About() {
  const velocity = 40

  return (
    <>
      <section
        id="about"
        className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background overflow-hidden border-t border-text-secondary/10"
      >
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-500 uppercase mb-3">
              Background & Principles
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">
              About Me
            </h3>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 px-6 md:px-12 items-center">
          {/* Visual Architecture Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-[420px] relative">
              <Fade>
                <div className="relative z-10 p-6 sm:p-8 bg-background border border-text-secondary/20 rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] w-full flex flex-col justify-between group transition-all duration-500 hover:border-emerald-500/50 hover:-translate-y-1">
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>

                  {/* Header Badge */}
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span className="text-xs font-mono font-bold text-text-secondary uppercase tracking-widest">
                        SYS://ARCHITECT
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                      KENYA
                    </span>
                  </div>

                  {/* Middle Cybernetic Blueprint Info */}
                  <div className="relative z-10 my-auto flex flex-col gap-4">
                    <div className="p-4 rounded-2xl bg-thirdary/40 border border-text-secondary/10">
                      <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold block mb-1">
                        Core Directive
                      </span>
                      <p className="text-sm font-semibold text-text-primary leading-snug">
                        Bridging Foundational ML Models with Scalable Distributed Systems & Real-World Integrations.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-secondary">Primary Stack</span>
                        <span className="text-text-primary font-bold">Python • FastAPI • PyTorch</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-secondary">Agent Engine</span>
                        <span className="text-text-primary font-bold">LangGraph • Custom Loops</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-secondary">Vector Plane</span>
                        <span className="text-text-primary font-bold">Qdrant • Pinecone • FAISS</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-secondary">Production Gateways</span>
                        <span className="text-text-primary font-bold">WhatsApp • Telegram • M-Pesa</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Status */}
                  <div className="relative z-10 pt-4 border-t border-text-secondary/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-text-secondary">AI Systems Engineer</span>
                    <span className="text-xs font-mono font-bold text-emerald-500">github/kelly26ici</span>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-6 text-8xl lg:text-9xl font-black text-text-secondary/5 select-none pointer-events-none tracking-tighter z-0">
                  AI.ML
                </div>
              </Fade>
            </div>
          </div>

          {/* Right Narrative & Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <Fade>
                  <h4 className="text-lg md:text-xl font-bold text-text-primary mb-3 flex items-center border-b border-text-secondary/20 pb-3">
                    Who I Am
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                    I am a Kenya-based AI/ML and software engineer driven by building practical,
                    high-impact AI applications, autonomous agents, and production automation. Rather than
                    stopping at isolated prompt engineering or toy chatbots, I specialize in engineering
                    robust software layers that connect frontier and local models directly with live data,
                    vector stores, tools, APIs, and business workflows.
                  </p>
                </Fade>
              </div>

              <div className="flex flex-col">
                <Fade>
                  <h4 className="text-lg md:text-xl font-bold text-text-primary mb-3 flex items-center border-b border-text-secondary/20 pb-3">
                    Engineering Philosophy
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                    Real-world AI requires comprehensive engineering: resilient error handling, low-latency
                    streaming, semantic vector memory, and stateful multi-step agent graphs. I engineer client
                    solutions using Python, PyTorch, FastAPI, Qdrant, Redis state caches, and seamless communication
                    channels like WhatsApp Cloud API, Telegram Bot API, and Safaricom M-Pesa.
                  </p>
                </Fade>
              </div>
            </div>

            {/* Personal & Professional Details Grid */}
            <div className="mt-12 md:mt-16">
              <Fade>
                <h4 className="text-lg md:text-xl font-bold text-text-primary mb-6 border-b border-text-secondary/20 pb-3 border-l-4 border-l-emerald-500 pl-4">
                  My Profile & Specialization
                </h4>
              </Fade>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                <FadeLeft delay={0.1}>
                  <div className="flex flex-col p-3 -m-1 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">
                      Name
                    </span>
                    <span className="text-base font-bold text-text-primary">
                      Kelly
                    </span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.2}>
                  <div className="flex flex-col p-3 -m-1 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">
                      Location
                    </span>
                    <span className="text-base font-semibold text-text-primary">
                      Nairobi, Kenya
                    </span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.3}>
                  <div className="flex flex-col p-3 -m-1 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">
                      Primary Language
                    </span>
                    <span className="text-base font-semibold text-text-primary">
                      Python (Advanced / Machine Learning & Systems)
                    </span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.4}>
                  <div className="flex flex-col p-3 -m-1 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">
                      GitHub & Portfolio
                    </span>
                    <a
                      href="https://github.com/kelly26ici/portfilio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-emerald-500 hover:underline"
                    >
                      github.com/kelly26ici/portfilio
                    </a>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.5}>
                  <div className="flex flex-col p-3 -m-1 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">
                      Core Domains
                    </span>
                    <span className="text-base font-semibold text-text-primary">
                      Agentic AI, RAG, Machine Learning, Production APIs
                    </span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.6}>
                  <div className="flex flex-col p-3 -m-1 rounded-xl transition-colors duration-300 hover:bg-thirdary/40">
                    <span className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">
                      Academic Background
                    </span>
                    <span className="text-base font-semibold text-text-primary">
                      Computer Science, Mama Ngina University College / Kenyatta University (Focusing on Applied Systems)
                    </span>
                  </div>
                </FadeLeft>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Velocity Ticker */}
        <Fade>
          <div className="mt-20 md:mt-28 pb-4 border-text-secondary/10">
            <ScrollVelocity
              texts={[
                "AI & Machine Learning Engineer",
                "Agentic Systems & LangGraph Architect",
                "Production RAG & Vector Search",
                "Kenya • Real-World Client Integrations",
              ]}
              velocity={velocity}
              className="font-black tracking-tighter text-thirdary dark:text-button-hover opacity-50"
            />
          </div>
        </Fade>
      </section>
    </>
  )
}
