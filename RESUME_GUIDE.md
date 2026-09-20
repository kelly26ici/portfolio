# Kelly AI/ML Portfolio — Resumption & Engineering Guide

This guide is for developers and AI coding agents resuming work on this repository. It provides full architectural context, environment configuration, component structures, and deployment protocols.

---

## 👤 Portfolio Identity & Tone
- **Name:** Kelly
- **Role:** AI/ML & Software Engineer | Agentic Systems Architect | Backend & Integrations Specialist
- **Location:** Nairobi, Kenya (EAT / UTC+3)
- **Voice / Persona:** **First-person** ("I engineer...", "My projects...", "About Me")
- **GitHub Profile:** [https://github.com/kelly26ici](https://github.com/kelly26ici)
- **Portfolio Repository:** [https://github.com/kelly26ici/portfilio](https://github.com/kelly26ici/portfilio)
- **WhatsApp:** `+254 794 582 488` ([wa.me/254794582488](https://wa.me/254794582488))
- **Telegram:** `@Lucifers_cousin` ([t.me/Lucifers_cousin](https://t.me/Lucifers_cousin))
- **Email:** `rexk638@gmail.com`

---

## 🏗️ Architecture & Stack Overview

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Framer Motion (via `motion` package)
- **Interactive 3D Engine:** `components/Neural3DHero.tsx`
  - High-performance Canvas 2D particle neural network
  - 70 golden-spiral nodes with AI ecosystem labels (PyTorch, LangGraph, Qdrant, FastAPI, RAG, Claude, etc.)
  - Interactive mouse parallax + auto-rotation + data packet signal pulses
  - Zero Three.js runtime overhead, compatible with edge and serverless environments
- **AI Chatbot Endpoint:** `app/api/chat/route.ts`
  - Runs on Edge Runtime (`export const runtime = "edge"`)
  - Multi-provider support: OpenAI, Groq, NVIDIA, OpenRouter
  - Built-in intelligent simulated streaming fallback when API keys are not configured

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build verification (must exit 0)
npm run build

# Start production server
npm run start
```

---

## 📂 Key File Structure

| Path | Purpose |
|---|---|
| `app/hero.tsx` | Hero section: animated typewriter roles, first-person pitch, 3D neural canvas, direct socials |
| `app/about.tsx` | About Me: practical engineering narrative, cybernetic blueprint card, specialization grid |
| `app/tech-stack.tsx` | Comprehensive 8-category technical matrix (ML, Agents, Vector DBs, LLMs, Backend, DBs, Integrations, DevOps) |
| `app/project.tsx` | 6 production projects with interactive modals, architecture highlights, and GitHub links |
| `app/experience.tsx` | Professional engineering timeline written in first-person with animated scroll indicator |
| `app/contact.tsx` | Contact Me: Nairobi hub card, direct communication channels, and interactive AI chatbot modal |
| `app/api/chat/route.ts` | Streaming AI assistant route with Kelly's complete knowledge base and fallback responses |
| `components/Neural3DHero.tsx` | Custom 3D neural vector particle canvas component |
| `components/Header.tsx` | Navigation header branded `KELLY.AI` with dark/light mode toggle |
| `components/Footer.tsx` | Global footer with copyright, links to repo, socials, and contact endpoints |
| `CHECKPOINT.md` | Resumption checklist tracking task completion |

---

## 🌐 Git Configuration

The repository is configured to push to Kelly's GitHub:
```bash
# Verify remote
git remote -v
# origin  https://github.com/kelly26ici/portfilio.git (fetch)
# origin  https://github.com/kelly26ici/portfilio.git (push)
```

To stage and push new updates:
```bash
git add -A
git commit -m "feat: portfolio updates"
git push -u origin master
```
