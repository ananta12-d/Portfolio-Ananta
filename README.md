# Ananta Kishore Swain — AI & Backend Engineering Portfolio

A modern, high-performance portfolio website engineered with a fusion of **Glassmorphism** and **Neumorphism** ("Neumorphic Glass"), featuring an interactive high-tech starting animation (boot sequence), an executive intro briefing popup, interactive architecture blueprints, and a dedicated **Featured Projects** section showcasing real-world systems with step-by-step technical mechanisms.

![Portfolio Preview](photo/Ananta_profile_photo_2.png)

---

## 🌟 Highlights & Key Features

1. **Neumorphic Glass Design System (`Glassmorphism × Neumorphism`)**:
   - Translucent frosted glass backdrops (`backdrop-filter: blur(16px)`) with crisp beveled borders and subtle gradient sheens.
   - Soft directional neumorphic extrusion shadows (`box-shadow: 12px 12px 30px rgba(0,0,0,0.65), -8px -8px 24px rgba(255,255,255,0.02)`) and tactile inset recesses.
   - **Dual Theme Engine**:
     - **Cyber Dark Mode (Default)**: Deep space obsidian (`#080C14`), neon cyan (`#06B6D4`), purple (`#8B5CF6`), and emerald (`#10B981`) ambient glow orbs.
     - **Pearlescent Light Mode**: Frosted milky quartz (`#EAF0F8`) with soft sky/slate drop shadows and crystalline borders.

2. **Starting Animation (Preloader / Boot Sequence)**:
   - High-tech terminal boot logs initializing MLOps pipelines, Llama 3.2, Qdrant vector retrieval, and Kafka streaming.
   - Dynamic progress percentage counter (0% → 100%) with animated cyan glow ring monogram `[ AKS ]`.
   - Skip button (`Skip Intro [ESC]`) for instant access.

3. **Executive Intro Popup (Modal Briefing)**:
   - Welcomes recruiters and engineering managers with an executive summary.
   - Features Ananta's portrait avatar (`photo/Ananta_profile_photo_2.webp` / `photo/Ananta_profile_photo_2.png`), live availability badge, and 3 key highlights.
   - Action buttons: "Download Resume", "Copy Email", and "Explore Portfolio".
   - "Don't show again" checkbox with `localStorage` memory + an "Intro Briefing" button in the navbar to reopen anytime.

4. **Featured Projects & Mechanical Breakdowns** (from [`https://github.com/ananta12-d`](https://github.com/ananta12-d)):
   - **Local RAG Assistant**: Fully browser-based, zero-cloud RAG system with client-side document chunking, client vectorization, and local Ollama LLM streaming (zero cloud egress & zero API cost).
   - **AI-Powered Academic Success Tracker**: Machine Learning + Generative AI platform predicting student risk with XGBoost, transparent SHAP explainability, and automated Google Gemini pedagogical intervention plans.
   - **IoT Telemetry & Fleet AI Platform**: Production streaming micro-storage platform scaled to 1,000,000+ msg/sec with Cassandra, Kafka, MQTT, and self-hosted Llama 3.2.
   - **WireGuard Zero-Trust VPN Platform**: Kernel-level WireGuard cryptographic network platform with FastAPI and PostgreSQL, providing browser-based SSH/SFTP for 500+ concurrent enterprise users.
   - **LifeOS Productivity Engine**: High-concurrency backend system built with FastAPI and PostgreSQL asyncpg connection pools, task dependency graphs, and async workers.
   - **Algorithmic Futures Trading Bot**: Automated Binance Futures (USDT-M) trading application with exchange clock synchronization, notional minimum guardrails, and fault-tolerant retry loops.

5. **Interactive Enterprise Architecture Visualizer**:
   - Interactive 6-step pipeline showcasing Ananta's production work at Insectika Biotech (*Edge Ingestion → Streaming Bus → Micro-Storage → Hybrid RAG → Self-Hosted LLM → Zero-Trust SSE*).
   - Clicking each node dynamically displays technical metrics and architecture specifications.

6. **Interactive Cyber Terminal Playground**:
   - Built-in terminal console simulating an authentic shell (`ananta@aks-ai:~$`).
   - Supports commands: `help`, `about`, `projects`, `skills`, `experience`, `rag`, `metrics`, `github`, `resume`, `contact`, `hire`, `clear`.
   - Includes clickable quick suggestion chips and command history navigation (`ArrowUp` / `ArrowDown`).

7. **Education & Credentials**:
   - Master of Computer Applications (MCA) in Artificial Intelligence — Manipal Institute of Technology (*Pursuing: Feb 2026 – Present*).
   - Bachelor of Computer Application (BCA) — Creative Techno College, Angul (*Oct 2022 – May 2025*).
   - 5 Industry Certifications (SAP Certified, LangChain, Backend Node/Express, Generative AI Prompt Engineering, AI & ML Foundations).
   - Honors & Awards: Cognizant GenC Analyst Trainee & Best Academic Performer of the Year.

8. **Web Audio Synthesizer (Zero External Assets)**:
   - Client-side synthesized futuristic UI click, hover, boot, and modal sounds using the browser Web Audio API with a toggle button in the navbar.

---

## 📁 Project Structure

```
portfolio-Ananta/
├── index.html                           # Semantic, accessible HTML5 single page app
├── README.md                            # Project documentation
├── AI_Engineer_Ananta_kishore.pdf       # Original Resume PDF
├── Ananta_Kishore_Swain_Resume.pdf      # Downloadable PDF
├── css/
│   ├── style.css                        # Neumorphic Glass tokens, variables, & responsive layout
│   ├── components.css                   # Mobile drawer, ambient sheen & animation keyframes
│   ├── projects.css                     # Featured projects & "How It Works" mechanism styling
│   └── chatbot.css                      # Intelligent AKS-AI Chatbot widget styling
├── js/
│   ├── main.js                          # Theme switcher, typewriter, 3D photo tilt, skill filters
│   ├── boot-animation.js                # Starting boot animation & progress bar
│   ├── intro-popup.js                   # Intro briefing modal controller
│   ├── architecture.js                  # Interactive system architecture inspector
│   ├── terminal.js                      # Cyber terminal command-line simulator
│   ├── chatbot.js                       # Intelligent AKS-AI chatbot engine
│   └── audio-fx.js                      # Web Audio API sound synthesizer
└── photo/
    ├── Ananta_profile_photo_2.png                       # High-resolution original photo
    └── Ananta_profile_photo_2.webp                      # Optimized next-gen WebP photo (~118 KB)
```

---

## 🚀 How to Run & Preview

### Method 1: Instant Local Browser (Zero Setup)
Simply double-click `index.html` in your file explorer, or open it directly in Chrome, Edge, Brave, Firefox, or Safari!

### Method 2: Local HTTP Server
Using Python:
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

Using Node `npx serve`:
```bash
npx serve .
```
