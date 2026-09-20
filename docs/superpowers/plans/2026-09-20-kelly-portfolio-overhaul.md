# Kelly AI/ML & Software Engineer Portfolio Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the cloned Indonesian web developer portfolio into a world-class, 3D-enhanced, production-grade portfolio for Kelly, a Kenya-based AI/ML and software engineer specializing in practical AI systems, agentic workflows, RAG architectures, and real-world software integrations.

**Architecture:** Next.js App Router with TypeScript and Tailwind CSS v4, integrated with an interactive Three.js 3D Neural Vector Canvas, Framer Motion animations, comprehensive multi-domain project showcase, full AI/ML tech stack matrix, updated professional experience, and an interactive AI Assistant knowledge stream.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Three.js, Framer Motion, Lucide icons, Python & AI ecosystem representations (LangChain, LangGraph, PyTorch, Qdrant, Supabase, Redis, Ollama, M-Pesa Daraja, etc.).

**Spec:** User specifications replacing all predecessor content with Kelly's comprehensive profile, interactive 3D visual elements, multi-project client showcase (Samantha + enterprise agents + RAG + Telegram API + M-Pesa Daraja + local LLMs), removal of Neovim, broad AI/ML libraries, and resumable checkpoints.

## Global Constraints
- Remove all traces of former owner (Ahmad Rizki Hartawan, RyHar, Indonesian text, Palembang address, old contacts, old CV, old projects).
- Establish Kelly's identity: Kenya-based AI/ML & Software Engineer; GitHub `kelly26ici`.
- Emphasize engineering prowess and production-grade client solutions; academic CS at Mama Ngina University College / Kenyatta University (exp. 2029) is a supporting credential, not primary focus.
- Broaden tooling across all domains: PyTorch, TensorFlow, scikit-learn, Hugging Face, Qdrant, Pinecone, FAISS, Chroma, OpenAI, Claude, Gemini, Groq, Ollama, llama.cpp, vLLM, FastAPI, Supabase, PostgreSQL, Redis, WhatsApp Cloud API, Telegram Bot API, M-Pesa Daraja.
- Exclude Neovim.
- Deliver real interactive 3D visual experience (Three.js WebGL canvas).
- Maintain 100% build integrity (`npm run build` must succeed without errors).
- Keep checkpoints updated in `CHECKPOINT.md` and `.agent/checkpoints/portfolio-overhaul.json` after every task.

---

### Task 1: Checkpoint Infrastructure & Dependency Setup
**Files:**
- Create: `CHECKPOINT.md`
- Create: `.agent/checkpoints/portfolio-overhaul.json`
- Modify: `package.json`

**Interfaces:**
- Consumes: npm runtime
- Produces: `three`, `@types/three`, `lucide-react` dependencies and durable state checkpoint files.

- [ ] **Step 1: Install 3D and icon dependencies**
Run: `npm install three @types/three lucide-react`
Verify: `three` and `@types/three` and `lucide-react` appear in `package.json`.

- [ ] **Step 2: Initialize durable checkpoint state file**
Create `.agent/checkpoints/portfolio-overhaul.json` with initial task state and metadata.

- [ ] **Step 3: Create human-readable CHECKPOINT.md with resume instructions**
Create `CHECKPOINT.md` in repository root with resume protocols for subsequent agents.

- [ ] **Step 4: Verify checkpoint state**
Check that files are present and valid JSON.

---

### Task 2: Interactive 3D Neural Vector Canvas Component
**Files:**
- Create: `components/ThreeDBackground.tsx`
- Create: `components/Neural3DHero.tsx`

**Interfaces:**
- Consumes: Three.js WebGL rendering context, mouse coordinates
- Produces: `<Neural3DHero />` component providing an interactive 3D particle constellation / neural network node graph responding to mouse movements with floating tensor geometry.

- [ ] **Step 1: Create ThreeDBackground / Neural3DHero component**
Implement a dynamic, responsive Three.js canvas featuring interconnected neural nodes, pulsing synaptic connections, floating geometric tensor vertices, and smooth mouse parallax.

- [ ] **Step 2: Test component mounting in client environment**
Ensure clean cleanup of requestAnimationFrame, WebGLRenderer, geometries, and materials on component unmount to prevent memory leaks.

- [ ] **Step 3: Checkpoint progress in CHECKPOINT.md**
Update checkpoint status to record Task 2 completion.

---

### Task 3: Metadata, Layout, Header & Footer Rebranding
**Files:**
- Modify: `app/layout.tsx`
- Modify: `components/Header.tsx`
- Modify: `components/Footer.tsx`
- Modify: `app/robots.ts`
- Modify: `app/sitemap.ts`

**Interfaces:**
- Consumes: Kelly's profile metadata and brand theme
- Produces: Unified "Kelly | AI/ML & Software Engineer" global navigation, SEO metadata, dark/light theme switching, and social links (`kelly26ici`).

- [ ] **Step 1: Update app/layout.tsx**
Replace all RyHar references, metadataBase, keywords, OpenGraph, and title with Kelly's AI/ML profile.

- [ ] **Step 2: Update components/Header.tsx**
Brand as "KELLY.AI" / "KELLY" with clean modern navigation (Home, About, Skills, Projects, Experience, Contact) and theme toggle.

- [ ] **Step 3: Update components/Footer.tsx**
Brand with Kelly, copyright, and verified links: GitHub (`https://github.com/kelly26ici`), LinkedIn, X/Twitter, Email.

- [ ] **Step 4: Update app/robots.ts and app/sitemap.ts**
Clean up domains and URLs.

- [ ] **Step 5: Checkpoint progress in CHECKPOINT.md**
Record Task 3 completion.

---

### Task 4: Hero Section Transformation with 3D Integration
**Files:**
- Modify: `app/hero.tsx`

**Interfaces:**
- Consumes: `<Neural3DHero />`, Kelly's engineering roles, dynamic typewriter hooks
- Produces: High-impact hero section with interactive 3D neural graphics, animated roles (AI & ML Engineer, Agentic Systems Architect, RAG & LLM Engineer, Backend & Integrations Developer), quick technical badges, and call-to-actions.

- [ ] **Step 1: Rewrite app/hero.tsx**
Incorporate Kelly's name, typewriter titles, elevator pitch on real-world practical AI, badges ("Python & ML Specialist", "Autonomous Agents & RAG", "Payment & API Integrations", "Nairobi, Kenya"), and embed the interactive 3D visual.

- [ ] **Step 2: Remove Indonesian copy and RyHar's CV / stats**
Replace with modern engineering action buttons ("Explore Projects", "Get In Touch", "GitHub Profile").

- [ ] **Step 3: Checkpoint progress in CHECKPOINT.md**
Record Task 4 completion.

---

### Task 5: About Section Refactor
**Files:**
- Modify: `app/about.tsx`

**Interfaces:**
- Consumes: Kelly's engineering philosophy, background, and academic credentials
- Produces: Inspiring narrative on bridging AI research with production software; details table highlighting Kelly, Nairobi Kenya, Mama Ngina University College / Kenyatta University (CS), Python primary, GitHub `kelly26ici`.

- [ ] **Step 1: Rewrite app/about.tsx**
Present "Who Am I" and "My Engineering Approach" with focus on connected AI (models + data + memory + APIs + workflows) rather than toy chatbots.

- [ ] **Step 2: Update Personal Details grid**
Remove Palembang, GPA 3.67, Indonesian phone; insert Kenya location, Python, AI/ML specialization, GitHub `kelly26ici`, Mama Ngina / Kenyatta University (supporting detail).

- [ ] **Step 3: Checkpoint progress in CHECKPOINT.md**
Record Task 5 completion.

---

### Task 6: Comprehensive AI/ML Tech Stack Expansion
**Files:**
- Modify: `app/tech-stack.tsx`

**Interfaces:**
- Consumes: Full spectrum of Kelly's technical proficiencies across 8 distinct categories
- Produces: Rich grid displaying Core ML, Agentic Frameworks, Vector DBs, LLM Providers, Backend Microservices, Databases & Memory, Real-World Integrations, and Infrastructure.

- [ ] **Step 1: Define comprehensive tech categories**
Expand beyond basic web stack to:
1. Core AI & Machine Learning (PyTorch, TensorFlow, scikit-learn, Hugging Face, NumPy, Pandas, OpenCV)
2. Agentic AI & LLM Frameworks (LangChain, LangGraph, LlamaIndex, AutoGen, CrewAI)
3. Vector Databases & Semantic Search (Qdrant, Pinecone, FAISS, Chroma, Milvus, Weaviate)
4. LLM Providers & Inference Engines (OpenAI, Anthropic Claude, Google Gemini, Groq, Ollama, llama.cpp, vLLM)
5. Backend & Microservices (FastAPI, Flask, Django, Node.js, REST, WebSockets, Celery)
6. Databases, Memory & Caching (Supabase, PostgreSQL, Redis, MongoDB)
7. Real-World APIs & Integrations (WhatsApp Cloud API, Telegram Bot API, Safaricom M-Pesa / Daraja, Webhooks)
8. Infrastructure & Tooling (Linux, Docker, Git, Nginx, CI/CD)

- [ ] **Step 2: Render clean SVG / visual representations for all tools**
Ensure responsive design with hover interactions and category descriptions.

- [ ] **Step 3: Checkpoint progress in CHECKPOINT.md**
Record Task 6 completion.

---

### Task 7: Multi-Project Production Showcase (Samantha & Beyond)
**Files:**
- Modify: `app/project.tsx`

**Interfaces:**
- Consumes: Detailed specifications of 6 production-grade projects
- Produces: Interactive project grid and modal with comprehensive architecture details, tech tags, live links, and features.

- [ ] **Step 1: Rewrite projectList in app/project.tsx**
Incorporate 6 diverse, high-caliber projects:
1. **Samantha - Real Estate AI Assistant**: WhatsApp Cloud API, LangChain/LangGraph, Qdrant, M-Pesa Daraja, PostgreSQL, Redis.
2. **OmniAgent Core - Enterprise Agentic Workflow Orchestrator**: LangGraph, FastAPI, Claude / OpenAI, Tool Use, Redis State Machine.
3. **CortexRAG - High-Performance Multimodal Semantic Retrieval Engine**: PyTorch, Hugging Face, Qdrant, Pinecone, FAISS, FastAPI.
4. **TelePulse AI - Intelligent Telegram Automation & Ops Bot**: Python, Telegram Bot API, Groq, Google Gemini, Redis, PostgreSQL.
5. **DarajaPay AI - Intelligent Payment Reconciliation & Anomaly Detection**: Python, FastAPI, scikit-learn, Safaricom Daraja API, PostgreSQL.
6. **LocalLLM Nexus - Private Air-Gapped Inference & Serving Runtime**: llama.cpp, Ollama, vLLM, Python, Docker, Linux.

- [ ] **Step 2: Ensure modal details reflect architecture and system design**
Update project modal with created dates, architecture overview, key features, and GitHub links pointing to `kelly26ici`.

- [ ] **Step 3: Checkpoint progress in CHECKPOINT.md**
Record Task 7 completion.

---

### Task 8: Work Experience & Track Record Revamp
**Files:**
- Modify: `app/experience.tsx`

**Interfaces:**
- Consumes: Kelly's real-world engineering experience and client delivery track record
- Produces: Timeline showing AI/ML production engineering, agentic automation client projects, systems research, and computer science foundations.

- [ ] **Step 1: Rewrite experiences in app/experience.tsx**
Replace old campus clubs and radio internship with:
1. AI/ML & Software Engineer (Production & Freelance Client Solutions, 2024 - Present)
2. AI Agent & Automation Specialist (Client Engagements & Integrations, 2024 - Present)
3. Machine Learning & Systems Researcher (2023 - Present)
4. Computer Science Scholar (Mama Ngina University College / Kenyatta University)

- [ ] **Step 2: Checkpoint progress in CHECKPOINT.md**
Record Task 8 completion.

---

### Task 9: Contact Section & Kelly's Interactive AI Assistant
**Files:**
- Modify: `app/contact.tsx`
- Modify: `app/api/chat/route.ts`

**Interfaces:**
- Consumes: Kelly's full system prompt knowledge base, streaming API route
- Produces: "Kelly AI Assistant" chatbot (in English with full contextual knowledge of Kelly's projects, stack, and client capabilities), interactive contact cards (GitHub, Email, WhatsApp, Kenya location), and simulated fallback intelligence when external API keys are not supplied.

- [ ] **Step 1: Update app/contact.tsx**
Replace RyHar assistant with Kelly AI Assistant. Replace Palembang map with Kenya/Nairobi interactive location card. Update contact cards with Kelly's GitHub (`kelly26ici`), email, WhatsApp, and social channels.

- [ ] **Step 2: Update app/api/chat/route.ts**
Support multiple model providers (Groq, OpenAI, Gemini, OpenRouter) or a built-in semantic knowledge response stream that gracefully answers visitor questions about Kelly's background, projects (Samantha, OmniAgent, CortexRAG, etc.), and skills even if environment variables are not yet configured.

- [ ] **Step 3: Checkpoint progress in CHECKPOINT.md**
Record Task 9 completion.

---

### Task 10: Full Build Verification, Styling Polish & Resumption Guide
**Files:**
- Modify: `README.md`
- Create: `RESUME_GUIDE.md`
- Update: `CHECKPOINT.md`
- Update: `.agent/checkpoints/portfolio-overhaul.json`

**Interfaces:**
- Consumes: Entire application codebase
- Produces: Passing `npm run build`, zero lint/type errors, complete documentation, and fully documented checkpoint state for session continuation.

- [ ] **Step 1: Run Next.js build verification**
Run: `npm run build`
Ensure 100% clean production build with static generation of all pages.

- [ ] **Step 2: Update README.md**
Create clean README for Kelly's portfolio showcasing features, architecture, and deployment instructions.

- [ ] **Step 3: Finalize CHECKPOINT.md and RESUME_GUIDE.md**
Provide clear guidance for anyone opening this repo in a future session.
