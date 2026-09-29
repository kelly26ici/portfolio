# Master Checkpoint & Engineering Guide for Kelly's Portfolio

> **IMPORTANT INSTRUCTION FOR ALL FUTURE CODING AGENTS & SESSIONS:**
> Read this document in full before touching any code. It contains the complete architectural record, deployment history, server troubleshooting findings, persona guidelines, strict DOs and DONTs, and step-by-step task roadmap. Never assume or guess details that are already verified here.

---

## 1. Owner Profile & Persona Guidelines

- **Name:** Kelly
- **Location:** Nairobi, Kenya (UTC+3)
- **Role & Identity:** Computer Science Student & Self-Taught AI/ML Builder
- **Institution:** Mama Ngina University College / Kenyatta University (Graduation Expected: 2029)
- **Voice & Tone:**
  - **Conversational & Grounded:** Speak as if you are seated across a table from someone having a friendly conversation.
  - **No Heavy Corporate Jargon:** Avoid buzzwords like "hyper-optimized paradigm", "mission-critical synergy", or "bespoke cross-cutting architecture". Explain things simply so non-developers understand the value.
  - **Humble yet Skilled:** "Usijisifu sana" (don't over-glorify or brag). Kelly is a university student and an avid self-learner who genuinely loves experimenting with models, building bots, and solving real problems. Not a fake "Chief Enterprise Architect", but an ambitious, capable, hands-on engineer.
  - **No Excessive Dashes:** Avoid cluttering copy with em-dashes (`—`) or random hyphens. Use clean, natural punctuation.
  - **Core Concept Clarity:** Surface-level, practical explanations. For example, explaining the difference between basic chatbots and autonomous agents:
    * *Basic Chatbots:* Like an auto-responder, they just reply to your text prompt by predicting the next word.
    * *Autonomous AI Agents:* They can actually take actions, use tools, search databases, write code, interact with APIs (like WhatsApp or M-Pesa), and iterate until the job is done.
- **Contact Details:**
  - **GitHub:** [https://github.com/kelly26ici](https://github.com/kelly26ici)
  - **Portfolio Repo:** [https://github.com/kelly26ici/portfolio](https://github.com/kelly26ici/portfolio)
  - **WhatsApp:** `+254 794 582 488` ([wa.me/254794582488](https://wa.me/254794582488))
  - **Telegram:** `@Lucifers_cousin` ([t.me/Lucifers_cousin](https://t.me/Lucifers_cousin))
  - **Telegram Bot Highlight:** `@jbee_vector1_bot` ([t.me/jbee_vector1_bot](https://t.me/jbee_vector1_bot))
  - **Email:** `rexk638@gmail.com`
  - **Live Domain:** `https://rexkelly.co.ke`

---

## 2. Server Infrastructure & Hosting Architecture

- **Hosting Provider:** HostKenya (Shared cPanel Hosting on CloudLinux)
- **Server IP:** `144.91.127.24`
- **cPanel Username:** `rexkelly`
- **cPanel Ports:**
  - **Port 2082 (HTTP):** Unencrypted plain text. Fast, no TLS overhead, useful fallback.
  - **Port 2083 (HTTPS):** Encrypted with SSL/TLS. Standard for cPanel login and UAPI requests.
- **cPanel API Token:** `LN8D1C8HT62944ZR9HHR9M4XSW5INYYH`
- **Application Server Runtime:** Phusion Passenger on Apache (CloudLinux NodeJS Selector)
- **Node.js Environment:**
  - Selected Version: **Node 24.6.0**
  - Node Binary Path: `/home/rexkelly/nodevenv/portfolio/24/bin/node`
  - Global nodevenv Module Store: `/home/rexkelly/nodevenv/portfolio/24/lib/node_modules/`
- **Directory Layout on Server:**
  - Web Root (Apache entrance): `/home/rexkelly/public_html/`
  - Application Root (Passenger executes here): `/home/rexkelly/portfolio/`
  - Startup Entry File: `server.js` (with fallback to `app.js`)
- **Apache / Passenger Configuration (`/home/rexkelly/public_html/.htaccess`):**
  ```apache
  # DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION BEGIN
  PassengerAppRoot "/home/rexkelly/portfolio"
  PassengerBaseURI "/"
  PassengerNodejs "/home/rexkelly/nodevenv/portfolio/24/bin/node"
  PassengerAppType node
  PassengerStartupFile server.js
  # DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION END
  ```
  *(Note: `public_html` should only contain `.htaccess`. Do NOT place application code or `server.js` inside `public_html`)*.

---

## 3. Deployment Troubleshooting History & Crucial Findings

### A. The Memory OOM Crash on Shared Hosting
- **The Issue:** Running `npm run build` on HostKenya shared hosting requires 1.5GB to 2GB of RAM. The server enforces a strict memory limit (~512MB to 1GB LVE memory), causing the kernel to kill the build process (Out Of Memory / 502 crash).
- **The Solution:** We enabled Next.js standalone mode (`output: "standalone"` in `next.config.ts`). The application is built locally in this environment where memory is unrestricted. The standalone bundle includes only pre-compiled production routes and minimal dependencies. Running the standalone server on cPanel takes only ~40MB of RAM, completely avoiding the memory cap.

### B. Phusion Passenger Crash Loop (Error ID `b9a0bb4c`)
- **The Issue:** Passenger kept spawning processes and killing them (`Checking whether to disconnect long-running connections`).
- **Cause:** When files were manually uploaded or partially transferred, the server had no matching `.next/` build or was missing production dependencies in `/home/rexkelly/portfolio/node_modules`.
- **Solution:** Next.js standalone output bundles all required production dependencies directly inside `.next/standalone/node_modules/`. Our entry `server.js` starts the standalone server cleanly without needing any global or local `npm install` on the server.

### C. The GitHub Actions FTP Deploy Failure
- **The Issue:** `SamKirkland/FTP-Deploy-Action@v4.3.5` failed with:
  `Timeout when trying to open data connection to 144.91.127.24:49672`
- **Root Cause Analysis:**
  1. FTP requires two separate connections: Control (port 21) and Data (high ports, e.g. 49672).
  2. GitHub Actions runners are behind NAT in Azure and can only use **Passive Mode (`PASV`)**.
  3. HostKenya's firewall (CSF) has the passive FTP data port range (`49152-65535`) blocked from external clouds.
  4. GitHub runners timed out trying to reach the data channel.
  5. In addition, HostKenya's CSF firewall rate-limits port 21, causing temporary IP bans when many connections open in rapid succession.
- **Resolution:** As requested by the user, **we removed the GitHub Actions auto-deploy workflow completely (`.github/workflows/deploy.yml`)**. Deployments are done via a pre-built standalone zip.

### D. The Pre-Built Deployment Zip (`portfolio-deploy.zip`)
- **Size:** 24 MB
- **Contents:**
  - `server.js` & `app.js` (entry points)
  - `.next/` (compiled server chunks, manifests, static assets)
  - `public/` (all fonts, icons, images)
  - `node_modules/` (bundled production dependencies)
  - `tmp/restart.txt` (Passenger reload trigger)
- **Local Locations on Android / Termux:**
  - `/sdcard/Download/portfolio-deploy.zip` (phone Downloads folder)
  - `/sdcard/portfolio-deploy.zip` (phone storage root)
  - `/data/data/com.termux/files/home/portfolio-deploy.zip` (Termux home)
- **How to Deploy on cPanel:**
  1. Open cPanel File Manager in browser.
  2. Navigate to `/home/rexkelly/portfolio/`.
  3. Upload `portfolio-deploy.zip` and click **Extract**.
  4. In cPanel **Setup Node.js App**, click **Restart**.

---

## 4. Strict Rules for Coding Agents

1. **DO NOT attempt to re-introduce automated FTP deploy workflows.** HostKenya firewall drops passive data ports from external CI runners.
2. **DO NOT instruct the user to run `npm run build` or `npm install` on the HostKenya server.** The shared host will OOM-crash.
3. **DO NOT invent corporate jargon or exaggerated titles.** Keep Kelly's persona grounded as an authentic, capable computer science student and self-learner in Nairobi building real AI systems.
4. **DO NOT clutter text with em-dashes (`—`).** Use simple, conversational sentences.
5. **DO NOT touch files unnecessarily.** Commit changes in focused, atomic git commits after each component refactor.
6. **ALWAYS verify the local build (`npm run build`)** before concluding work to guarantee zero TypeScript or Next.js build regressions.

---

## 5. Step-by-Step Refactor Roadmap (Current Sprint)

### Step 1: Checkpoint Documentation [COMPLETED]
- Comprehensive documentation of all history, findings, and rules committed in `23ad921`.

### Step 2: Increase Mobile Sidebar Transparency (`components/Header.tsx`) [COMPLETED]
- Mobile menu drawer refactored to translucent frosted glass with backdrop blur (`bg-surface/75 dark:bg-deep-onyx/75 backdrop-blur-2xl border-surface-border/60 dark:border-gold/30 shadow-[0_16px_40px_rgba(0,0,0,0.7)]`).
- Added Telegram quick link button in header and mobile drawer. Committed in `b3a711a`.

### Step 3: Uncomment and Activate Telegram Links [COMPLETED]
- Active personal Telegram (`https://t.me/Lucifers_cousin`) and bot project (`@jbee_vector1_bot`) verified and highlighted across Header, Hero, Footer, and Contact.

### Step 4: Refactor Tech Stack Section (`app/tech-stack.tsx`) [COMPLETED]
- Replaced the 8 massive vertical blocks with an interactive tab selector (AI & Agents, Machine Learning & Python, Vector DBs & Memory, APIs & Integrations).
- Added real SVG logos for Python, PyTorch, LangChain, Docker, FastAPI, and more.
- Added a plain-English surface-level explainer contrasting **Basic Chatbots vs. Autonomous AI Agents**. Committed in `54ea656`.

### Step 5: Refactor Engineering Experience Section (`app/experience.tsx`) [COMPLETED]
- Replaced long vertical scroll blocks with an interactive, space-efficient accordion dropdown.
- Users can click any role to expand details. Plain English explanations without enterprise buzzwords. Committed in `54ea656`.

### Step 6: Simplify Tone & Remove Jargon Across All Pages [COMPLETED]
- `app/hero.tsx`: Conversational greeting, humble student & builder persona, eliminated dashes and corporate jargon. Committed in `8208476`.
- `app/about.tsx`: Grounded narrative focusing on computer science studies at Mama Ngina / Kenyatta University + late-night self-learning in Nairobi. Committed in `a387929`.
- `app/project.tsx`: Relatable project descriptions (Samantha, OmniAgent, CortexRAG, TelePulse, DarajaPay, LocalLLM Nexus) without jargon or dashes. Committed in `ad6d741`.
- `app/contact.tsx` & `app/api/chat/route.ts`: Friendly contact prompts and authentic AI assistant knowledge base. Committed in `559a824`.

### Step 7: Build Verification & Fresh Deploy Zip [COMPLETED]
- Ran full production build (`npm run build`) &rarr; **Compiled successfully in 23.9s with 0 errors**.
- Packaged complete self-contained standalone bundle into `portfolio-deploy.zip` (24 MB).
- Automatically copied to phone storage:
  - `/sdcard/Download/portfolio-deploy.zip`
  - `/sdcard/portfolio-deploy.zip`
  - `/data/data/com.termux/files/home/portfolio-deploy.zip`
