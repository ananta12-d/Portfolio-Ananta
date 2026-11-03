/**
 * INTERACTIVE CYBER TERMINAL PLAYGROUND
 * Command line simulation for exploring Ananta's engineering experience and projects.
 */

document.addEventListener('DOMContentLoaded', () => {
  const terminalInput = document.getElementById('terminal-cli-input');
  const terminalOutput = document.getElementById('terminal-output');
  const quickChips = document.querySelectorAll('.term-chip');

  if (!terminalInput || !terminalOutput) return;

  const commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
Available system commands:
  • <span class="term-response-highlight">about</span>       - Executive summary & engineering background
  • <span class="term-response-highlight">projects</span>    - Featured open-source & production projects
  • <span class="term-response-highlight">skills</span>      - Comprehensive AI, Backend & Systems stack
  • <span class="term-response-highlight">experience</span>  - Career timeline & production metrics
  • <span class="term-response-highlight">rag</span>         - Deep-dive into Hybrid RAG architecture (Qdrant + BM25)
  • <span class="term-response-highlight">metrics</span>     - Production telemetry & scaling stats
  • <span class="term-response-highlight">resume</span>      - Download official PDF resume
  • <span class="term-response-highlight">github</span>      - Open GitHub profile (ananta12-d)
  • <span class="term-response-highlight">hackindia</span>   - Open HackIndia profile (ananta_kishore_swain)
  • <span class="term-response-highlight">csharpcorner</span> - Open C# Corner community profile
  • <span class="term-response-highlight">contact</span>     - Direct contact channels (Email, Phone, GitHub, LinkedIn)
  • <span class="term-response-highlight">hire</span>        - Open direct collaboration inquiry
  • <span class="term-response-highlight">clear</span>       - Clear the terminal console
`,

    about: () => `
<span class="term-response-highlight">[ENGINEER IDENTITY: ANANTA KISHORE SWAIN]</span>
Role: Software Engineer - Applied AI, MLOps & High-Concurrency Backend Architecture
Base: Bhubaneswar & Angul, Odisha, India
Education: Master of Computer Applications (MCA) in AI — Manipal Institute of Technology [Pursuing: Feb 2026 – Present]
GitHub: <a href="https://github.com/ananta12-d" target="_blank" style="color:#38bdf8; text-decoration:underline;">https://github.com/ananta12-d</a>

"I bridge the gap between high-performance backend infrastructure and Generative AI.
Currently pursuing an MCA in Artificial Intelligence. I architect containerized
environments, distributed pipelines, and hybrid RAG systems that make Agentic AI
production-ready for enterprise environments."
`,

    projects: () => `
<span class="term-response-highlight">[FEATURED PROJECTS & ARCHITECTURE]</span>
1. <strong style="color:#38bdf8;">Local-RAG-Assistant</strong> (Zero-Cloud Client-Side RAG)
   • 100% in-browser document parsing & vector embedding generation.
   • Local Ollama LLM integration — zero API cost & zero data leakage.
   • Link: <a href="https://github.com/ananta12-d/Local-RAG-Assistant" target="_blank" style="color:#38bdf8; text-decoration:underline;">github.com/ananta12-d/Local-RAG-Assistant</a>

2. <strong style="color:#06b6d4;">AI-Academic-Success-Tracker</strong> (ML + GenAI Platform)
   • XGBoost predictive classifier for early student risk detection.
   • SHAP explainability matrices & Google Gemini pedagogical action plans.
   • Link: <a href="https://github.com/ananta12-d/AI-Academic-Success-Tracker" target="_blank" style="color:#38bdf8; text-decoration:underline;">github.com/ananta12-d/AI-Academic-Success-Tracker</a>

3. <strong style="color:#10b981;">IoT Fleet Telemetry Platform</strong> (Insectika Production)
   • Scaled ingestion to 1M+ msg/sec via Apache Cassandra migration.
   • Kafka & Redis Pub/Sub distributed streaming backbone with Llama 3.2 agent.

4. <strong style="color:#a78bfa;">WireGuard VPN Management Platform</strong> (Insectika Production)
   • FastAPI + PostgreSQL + WireGuard kernel tunneling for 500+ concurrent users.
   • Browser-based encrypted SSH/SFTP access and reverse-proxy routing.

5. <strong style="color:#f59e0b;">LifeOS Backend Engine</strong> (Productivity Architecture)
   • FastAPI + PostgreSQL asyncpg engine with task graphs & habit telemetry.
   • Link: <a href="https://github.com/ananta12-d/lifeos" target="_blank" style="color:#38bdf8; text-decoration:underline;">github.com/ananta12-d/lifeos</a>

6. <strong style="color:#ec4899;">Simplified-Trading-Bot</strong> (Algorithmic Trading)
   • Binance Futures USDT-M automation with server-time sync & notional sizing.
   • Link: <a href="https://github.com/ananta12-d/Simplified-Trading-Bot" target="_blank" style="color:#38bdf8; text-decoration:underline;">github.com/ananta12-d/Simplified-Trading-Bot</a>

🏆 <strong style="color:#f59e0b;">HACKINDIA HACKATHON REPOSITORIES (RANK #77 NATIONALLY):</strong>
   • <a href="https://github.com/HackIndiaXYZ/ai-for-lawyers-hackathon-engineers-hub" target="_blank" style="color:#38bdf8; text-decoration:underline;">AI for Lawyers (Engineers HUB)</a> - AI for Lawyers Hackathon 2026 (Solo)
   • <a href="https://github.com/HackIndiaXYZ/ai-first-startup-hackathon-build-a-startup-using-ai-only-buddy-visualizer" target="_blank" style="color:#38bdf8; text-decoration:underline;">Buddy Visualizer</a> - AI-First Startup Hackathon 2026 (Solo)
   • <a href="https://github.com/HackIndiaXYZ/vibe-coding-hackathon-2026-the-visualizors" target="_blank" style="color:#38bdf8; text-decoration:underline;">The Visualizors</a> - Vibe Coding Hackathon 2026 (Team of 2)
`,

    skills: () => `
<span class="term-response-highlight">[TECHNICAL SKILLSET MATRIX]</span>
🧠 <strong style="color:#38bdf8;">Applied AI & LLMs:</strong>
   • Llama 3.2 (3B Self-Hosted), Hybrid RAG, Qdrant Vector DB
   • Sparse BM25 Retrieval, Reciprocal Rank Fusion (RRF), LangChain, Gemini API

⚡ <strong style="color:#06b6d4;">Backend & Distributed Systems:</strong>
   • Python, FastAPI, Docker, Node.js, Express, Micro-storage
   • Apache Kafka, Apache Cassandra (1M+ msg/s), TBMQ, Redis Pub/Sub, PostgreSQL

🛡️ <strong style="color:#10b981;">Security & Zero-Trust:</strong>
   • WireGuard VPN (500+ users), Docker CPU Governance (99.9% uptime)
   • Prompt Injection Defense, Multi-layer API Firewall, SOC2/ISO 27001 Alignment

📱 <strong style="color:#c084fc;">Edge & Frontend:</strong>
   • Flutter, BLE Discovery, Vue.js, Node-RED style DAG Rule Engine, WebSockets
`,

    experience: () => `
<span class="term-response-highlight">[CAREER TIMELINE & HIGHLIGHTS]</span>
1. <strong style="color:#38bdf8;">Insectika Biotech</strong> (March 2026 - Present | 9 mos)
   Role: Software Engineer - Applied AI, MLOps & Backend Architecture
   • Scaled telemetry ingestion to 1M+ msg/sec (PostgreSQL -> Cassandra).
   • Engineered Hybrid RAG with Qdrant, BM25 & RRF (hallucination reduction).
   • Cut AI response latency to <50ms with SSE streaming & Redis caching.
   • Deployed zero-cost self-hosted enterprise agent on Llama 3.2 (3B).
   • 99.9% uptime maintained via Docker CPU governance.

2. <strong style="color:#06b6d4;">Insectika Biotech</strong> (Oct 2025 - Feb 2026 | 5 mos)
   Role: Embedded Software Engineer - Edge Data & Infrastructure
   • Created custom visual DAG flow editor in <1 month (Node-RED inspired).
   • Engineered WireGuard VPN management platform for 500+ users.
   • Built Flutter BLE mobile app for live telemetry analysis.

3. <strong style="color:#a78bfa;">Creative Techno College</strong> (July 2025 - Sept 2025)
   Role: Lab Assistant & Project Guide of Technocrat Team

4. <strong style="color:#f59e0b;">Static Consultancy</strong> (July 2024 - Jan 2025 | 7 mos)
   Role: Hybrid App Developer (Flutter-based banking UI)
`,

    rag: () => `
<span class="term-response-highlight">[HYBRID RAG RETRIEVAL PIPELINE]</span>
Architecture Breakdown:
[User Query]
    │
    ├──> [Qdrant Vector DB] (Dense Semantic Embeddings)
    │
    └──> [BM25 Inverted Index] (Sparse Lexical Search)
              │
              ▼
    [Reciprocal Rank Fusion (RRF)] ──> Re-ranked Context Window
              │
              ▼
    [Llama 3.2 3B Self-Hosted] ──> Sub-50ms Asynchronous SSE Stream
    (Zero third-party API costs & zero data leakage)
`,

    metrics: () => `
<span class="term-response-highlight">[PRODUCTION BENCHMARKS & METRICS]</span>
• Telemetry Throughput:  <strong style="color:#10b981;">1,000,000+ msgs/sec</strong> (Apache Cassandra)
• AI Response Latency:   <strong style="color:#10b981;">< 50 ms</strong> (Async SSE + Redis Cache)
• Storage Efficiency:    <strong style="color:#10b981;">5× reduction</strong> (Time-series isolation)
• LLM Workload Uptime:   <strong style="color:#10b981;">99.9% SLA</strong> (Docker CPU Governance)
• Secure VPN Concurrency:<strong style="color:#10b981;">500+ active users</strong> (WireGuard Platform)
`,

    resume: () => {
      const link = document.createElement('a');
      link.href = 'Ananta_Kishore_Swain_Resume.pdf';
      link.download = 'Ananta_Kishore_Swain_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return `<span style="color:#10b981;">[SUCCESS] Triggered download for Ananta_Kishore_Swain_Resume.pdf</span>`;
    },

    github: () => {
      window.open('https://github.com/ananta12-d', '_blank');
      return `<span style="color:#10b981;">[NAVIGATING] Opening https://github.com/ananta12-d in new tab...</span>`;
    },

    hackindia: () => {
      window.open('https://hackindia.org/profile/ananta_kishore_swain', '_blank');
      return `<span style="color:#10b981;">[NAVIGATING] Opening HackIndia profile (ananta_kishore_swain)...</span>`;
    },

    csharpcorner: () => {
      window.open('https://www.c-sharpcorner.com/members/ananta-kishore-swain', '_blank');
      return `<span style="color:#10b981;">[NAVIGATING] Opening C# Corner profile (ananta-kishore-swain)...</span>`;
    },

    contact: () => `
<span class="term-response-highlight">[COMMUNICATION & DEVELOPER PROFILES]</span>
• Email:       <a href="mailto:opbitu855@gmail.com" style="color:#38bdf8; text-decoration:underline;">opbitu855@gmail.com</a>
• Phone:       +91 9090078348
• GitHub:      <a href="https://github.com/ananta12-d" target="_blank" style="color:#38bdf8; text-decoration:underline;">https://github.com/ananta12-d</a>
• HackIndia:   <a href="https://hackindia.org/profile/ananta_kishore_swain" target="_blank" style="color:#38bdf8; text-decoration:underline;">hackindia.org/profile/ananta_kishore_swain</a>
• C# Corner:   <a href="https://www.c-sharpcorner.com/members/ananta-kishore-swain" target="_blank" style="color:#38bdf8; text-decoration:underline;">c-sharpcorner.com/members/ananta-kishore-swain</a>
• LinkedIn:    <a href="https://www.linkedin.com/in/ananta-kishore-swain-6282472bb" target="_blank" style="color:#38bdf8; text-decoration:underline;">linkedin.com/in/ananta-kishore-swain-6282472bb</a>
• Location:    Bhubaneswar / Angul, Odisha, India
`,

    hire: () => {
      window.location.href = 'mailto:opbitu855@gmail.com?subject=Engineering%20Opportunity%20-%20Ananta%20Kishore%20Swain&body=Hi%20Ananta,%0A%0AWe%20are%20interested%20in%20discussing%20an%20engineering%20opportunity%20with%20you.';
      return `<span style="color:#10b981;">[INITIATING] Opening email client to opbitu855@gmail.com...</span>`;
    },

    clear: () => {
      terminalOutput.innerHTML = '';
      return null;
    }
  };

  function executeCommand(rawCmd) {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    commandHistory.push(rawCmd);
    historyIndex = commandHistory.length;

    // Append user command line
    const userLine = document.createElement('div');
    userLine.className = 'term-line';
    userLine.innerHTML = `<span class="term-prompt">ananta@aks-ai:~$</span> <span class="term-command">${rawCmd}</span>`;
    terminalOutput.appendChild(userLine);

    if (trimmed === 'clear') {
      commands.clear();
      return;
    }

    let outputHtml = '';
    if (commands[trimmed]) {
      outputHtml = commands[trimmed]();
    } else {
      outputHtml = `<span style="color:#ef4444;">Command not found: "${trimmed}". Type <span style="color:#38bdf8;">help</span> for available commands.</span>`;
    }

    if (outputHtml) {
      const respLine = document.createElement('div');
      respLine.className = 'term-response';
      respLine.innerHTML = outputHtml;
      terminalOutput.appendChild(respLine);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    if (window.audioFx) window.audioFx.playKey();
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });
});
