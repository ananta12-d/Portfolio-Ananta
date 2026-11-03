/**
 * INTELLIGENT PORTFOLIO AI CHATBOT (AKS-AI)
 * Simulates an enterprise-grade agent with deep knowledge of Ananta's engineering work.
 */

class AksAiChatbot {
  constructor() {
    this.launcher = document.getElementById('chatbot-launcher');
    this.window = document.getElementById('chatbot-window');
    this.closeBtn = document.getElementById('chatbot-close-btn');
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.inputForm = document.getElementById('chatbot-input-form');
    this.inputField = document.getElementById('chatbot-input');
    this.chips = document.querySelectorAll('.chatbot-chip');
    this.navChatBtn = document.getElementById('nav-chat-btn');

    this.isOpen = false;
    this.isTyping = false;

    this.init();
  }

  init() {
    if (this.launcher) {
      this.launcher.addEventListener('click', () => this.toggle());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.navChatBtn) {
      this.navChatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    }

    if (this.inputForm) {
      this.inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUserSubmit();
      });
    }

    this.chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const text = chip.dataset.prompt || chip.textContent;
        if (text) {
          this.sendUserMessage(text);
        }
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Initial greeting if empty
    if (this.messagesContainer && this.messagesContainer.children.length === 0) {
      this.addBotMessage(
        "👋 <strong>Hello! I'm AKS-AI</strong>, Ananta Kishore Swain's personal portfolio assistant.<br><br>" +
        "I have full knowledge of Ananta's engineering work in <strong>Applied AI & MLOps</strong>, <strong>Hybrid RAG architectures</strong>, <strong>1M+ msg/sec ingestion pipelines</strong>, and his <strong>GitHub projects</strong>.<br><br>" +
        "How can I help you today? You can ask a question or tap one of the suggestion chips above!"
      );
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this.window) return;
    this.isOpen = true;
    this.window.classList.add('active');
    if (this.launcher) this.launcher.style.display = 'none';
    if (this.inputField) this.inputField.focus();
    if (window.audioFx) window.audioFx.playModalOpen();
  }

  close() {
    if (!this.window) return;
    this.isOpen = false;
    this.window.classList.remove('active');
    if (this.launcher) this.launcher.style.display = 'flex';
    if (window.audioFx) window.audioFx.playClick();
  }

  handleUserSubmit() {
    if (!this.inputField) return;
    const text = this.inputField.value.trim();
    if (!text || this.isTyping) return;

    this.inputField.value = '';
    this.sendUserMessage(text);
  }

  sendUserMessage(text) {
    this.addUserMessage(text);
    this.showTypingIndicator();

    // Natural thinking delay
    const delay = Math.min(1200, Math.max(500, text.length * 15));
    setTimeout(() => {
      this.hideTypingIndicator();
      const response = this.generateResponse(text);
      this.addBotMessage(response.html, response.action);
    }, delay);
  }

  addUserMessage(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble chat-bubble-user';
    bubble.textContent = text;
    this.messagesContainer.appendChild(bubble);
    this.scrollToBottom();
    if (window.audioFx) window.audioFx.playKey();
  }

  addBotMessage(html, action = null) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble chat-bubble-bot';
    bubble.innerHTML = html;

    if (action) {
      const actionBtn = document.createElement('button');
      actionBtn.className = 'chat-action-btn-pill';
      actionBtn.innerHTML = action.label;
      actionBtn.addEventListener('click', action.handler);
      bubble.appendChild(document.createElement('br'));
      bubble.appendChild(actionBtn);
    }

    this.messagesContainer.appendChild(bubble);
    this.scrollToBottom();
    if (window.audioFx) window.audioFx.playKey();
  }

  showTypingIndicator() {
    this.isTyping = true;
    const indicator = document.createElement('div');
    indicator.className = 'chat-typing-indicator';
    indicator.id = 'chat-typing';
    indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    this.messagesContainer.appendChild(indicator);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    this.isTyping = false;
    const indicator = document.getElementById('chat-typing');
    if (indicator) indicator.remove();
  }

  scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  // ==========================================
  // INTELLIGENT KNOWLEDGE & INTENT MATCHING
  // ==========================================
  generateResponse(query) {
    const q = query.toLowerCase();

    // 1. Resume Download Intent
    if (q.includes('resume') || q.includes('cv') || q.includes('download') || q.includes('pdf')) {
      return {
        html: "Here is Ananta's verified ATS-optimized resume in PDF format. You can download it directly below:",
        action: {
          label: '<i class="fas fa-file-download"></i> Download Ananta_Kishore_Swain_Resume.pdf',
          handler: () => {
            const link = document.createElement('a');
            link.href = 'Ananta_Kishore_Swain_Resume.pdf';
            link.download = 'Ananta_Kishore_Swain_Resume.pdf';
            link.click();
            if (window.showToast) window.showToast('Downloading Resume PDF...');
          }
        }
      };
    }

    // 2. Hybrid RAG / AI Architecture Intent
    if (q.includes('rag') || q.includes('retrieval') || q.includes('qdrant') || q.includes('embedding') || q.includes('bm25') || q.includes('rrf')) {
      return {
        html: "<strong>Ananta's Hybrid RAG Architecture:</strong><br><br>" +
              "At Insectika Biotech, Ananta engineered a high-precision Hybrid RAG retrieval pipeline:<br>" +
              "• <strong>Dense Semantic Search:</strong> Vector embeddings indexed in <strong>Qdrant Vector DB</strong>.<br>" +
              "• <strong>Sparse Keyword Matching:</strong> BM25 tokenized lexical retrieval to catch exact technical terminology.<br>" +
              "• <strong>Reciprocal Rank Fusion (RRF):</strong> Merges dense & sparse ranks dynamically, minimizing hallucinations.<br>" +
              "• <strong>Sub-50ms Response:</strong> Asynchronous SSE streaming coupled with Redis semantic caching.<br><br>" +
              "He also built <strong>Local RAG Assistant</strong> on GitHub, which runs this entire flow in-browser with Ollama!",
        action: {
          label: '<i class="fas fa-layer-group"></i> Scroll to Architecture Blueprint',
          handler: () => {
            document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
            this.close();
          }
        }
      };
    }

    // 3. Projects & HackIndia Submissions
    if (q.includes('project') || q.includes('github') || q.includes('repo') || q.includes('built') || q.includes('made') || q.includes('code') || q.includes('hackathon')) {
      return {
        html: "<strong>Featured Projects & Hackathon Repositories:</strong><br><br>" +
              "• <strong><a href='https://github.com/ananta12-d/Local-RAG-Assistant' target='_blank'>Local RAG Assistant</a>:</strong> Zero-cloud client-side RAG with in-browser embeddings & Ollama.<br>" +
              "• <strong><a href='https://github.com/ananta12-d/AI-Academic-Success-Tracker' target='_blank'>AI Academic Success Tracker</a>:</strong> XGBoost + SHAP + Google Gemini ML platform.<br>" +
              "• <strong><a href='https://github.com/ananta12-d/lifeos' target='_blank'>LifeOS</a>:</strong> FastAPI + PostgreSQL asyncpg engine.<br><br>" +
              "🏆 <strong>HackIndia Submitted Repositories (Rank #77 Nationally):</strong><br>" +
              "1. <strong><a href='https://github.com/HackIndiaXYZ/ai-for-lawyers-hackathon-engineers-hub' target='_blank'>AI for Lawyers (Engineers HUB)</a>:</strong> AI for Lawyers Hackathon 2026.<br>" +
              "2. <strong><a href='https://github.com/HackIndiaXYZ/ai-first-startup-hackathon-build-a-startup-using-ai-only-buddy-visualizer' target='_blank'>Buddy Visualizer</a>:</strong> AI-First Startup Hackathon 2026.<br>" +
              "3. <strong><a href='https://github.com/HackIndiaXYZ/vibe-coding-hackathon-2026-the-visualizors' target='_blank'>The Visualizors</a>:</strong> Vibe Coding Hackathon 2026 (Team of 2).",
        action: {
          label: '<i class="fas fa-laptop-code"></i> Jump to Projects Section',
          handler: () => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            this.close();
          }
        }
      };
    }

    // 4. Telemetry / 1M+ scaling / Cassandra
    if (q.includes('scale') || q.includes('1m') || q.includes('telemetry') || q.includes('cassandra') || q.includes('kafka') || q.includes('ingestion')) {
      return {
        html: "<strong>How Ananta Scaled Ingestion to 1,000,000+ msg/sec:</strong><br><br>" +
              "1. <strong>Cassandra Migration:</strong> Migrated the core database from PostgreSQL to <strong>Apache Cassandra</strong>, completely removing relational table lock contention during hyper-scale IoT telemetry events.<br>" +
              "2. <strong>Time-Series Isolation:</strong> Optimized partition keys for time-series data, achieving <strong>5× storage efficiency</strong> and drastically reducing cloud bills.<br>" +
              "3. <strong>Distributed Event Streaming:</strong> Built a backbone with <strong>Apache Kafka, TBMQ (MQTT), and Redis Pub/Sub</strong> for parallel consumption across millions of edge devices.<br>" +
              "4. <strong>Ghost Data Elimination:</strong> Implemented a Dual-Delete Synchronization protocol across PostgreSQL and Elasticsearch.",
        action: {
          label: '<i class="fas fa-chart-line"></i> View Production Metrics',
          handler: () => {
            document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
            this.close();
          }
        }
      };
    }

    // 5. WireGuard / VPN / Security
    if (q.includes('wireguard') || q.includes('vpn') || q.includes('security') || q.includes('zero-trust') || q.includes('firewall') || q.includes('soc2')) {
      return {
        html: "<strong>Zero-Trust & WireGuard Infrastructure:</strong><br><br>" +
              "• <strong>WireGuard VPN Platform:</strong> Built and deployed a scalable VPN management platform in 6 weeks using FastAPI, PostgreSQL, and WireGuard for <strong>500+ concurrent users</strong>.<br>" +
              "• <strong>Browser-Based Access:</strong> Provided secure browser-based SSH, SFTP, and reverse-proxy access to edge hardware over encrypted WebSockets.<br>" +
              "• <strong>API Firewall & Security:</strong> Multi-layer rate-limiting and prompt injection protection aligned with SOC2/ISO 27001 standards.<br>" +
              "• <strong>Docker CPU Governance:</strong> Enforced cgroup CPU quotas to protect LLM inference workloads, guaranteeing 99.9% uptime."
      };
    }

    // 6. Experience & Insectika
    if (q.includes('experience') || q.includes('work') || q.includes('career') || q.includes('insectika') || q.includes('company') || q.includes('history')) {
      return {
        html: "<strong>Ananta's Career History:</strong><br><br>" +
              "• <strong>Insectika Biotech</strong> (March 2026 – Present | 9 mos):<br>" +
              "  <em>Software Engineer - Applied AI, MLOps & Backend Architecture</em>. Built self-hosted Llama 3.2 agents, Hybrid RAG, and 1M+ msg/s Cassandra telemetry.<br><br>" +
              "• <strong>Insectika Biotech</strong> (Oct 2025 – Feb 2026 | 5 mos):<br>" +
              "  <em>Embedded Software Engineer - Edge Data & Infrastructure</em>. Created custom Node-RED style DAG flow editor, WireGuard VPN platform, and Flutter BLE app.<br><br>" +
              "• <strong>Creative Techno College</strong> (July 2025 – Sept 2025): Lab Assistant & Project Guide.<br>" +
              "• <strong>Static Consultancy</strong> (July 2024 – Jan 2025): Hybrid App Developer (Flutter Banking UI).",
        action: {
          label: '<i class="fas fa-briefcase"></i> View Full Timeline',
          handler: () => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            this.close();
          }
        }
      };
    }

    // 7. Education & MCA
    if (q.includes('education') || q.includes('mca') || q.includes('college') || q.includes('university') || q.includes('manipal') || q.includes('degree')) {
      return {
        html: "<strong>Ananta's Academic Background:</strong><br><br>" +
              "🎓 <strong>Master of Computer Applications (MCA)</strong><br>" +
              "• <strong>Institution:</strong> Manipal University Jaipur<br>" +
              "• <strong>Status:</strong> Currently Pursuing (February 2026 – Present)<br>" +
              "• <strong>Domain:</strong> Software Development Engineering & Artificial Intelligence.<br><br>" +
              "🎓 <strong>Bachelor of Computer Application (BCA)</strong><br>" +
              "• <strong>Institution:</strong> Creative Techno College, Angul (Oct 2022 – May 2025)<br>" +
              "• <strong>Distinction:</strong> Best Academic Performer of the Year (2022 – 2025)."
      };
    }

    // 8. Certifications & Honors
    if (q.includes('certif') || q.includes('award') || q.includes('honor') || q.includes('sap') || q.includes('langchain') || q.includes('cognizant')) {
      return {
        html: "<strong>Certifications & Honors:</strong><br><br>" +
              "• <strong>SAP Certified Development Associate:</strong> SMP Hybrid & Native Mobile App Developer.<br>" +
              "• <strong>Developing LLM Apps with LangChain:</strong> Vector indexing, agent chains & memory.<br>" +
              "• <strong>Node.js & Express Back-End:</strong> Event-driven architecture.<br>" +
              "• <strong>AI & ML Foundations:</strong> Statistical modeling & neural nets.<br>" +
              "• <strong>Generative AI Prompt Engineering:</strong> Prompt optimization & safety.<br>" +
              "• <strong>Honors:</strong> Selected for Cognizant GenC Analyst Trainee & Best Academic Performer."
      };
    }

    // 9. Contact / Hire / Location / Availability / Developer Profiles
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('location') || q.includes('available') || q.includes('reach') || q.includes('hackindia') || q.includes('c#') || q.includes('csharp')) {
      return {
        html: "<strong>Contact & Community Profiles:</strong><br><br>" +
              "Ananta is <strong>actively open to Applied AI & Backend Engineering opportunities</strong> (Full-time, Hybrid, or Remote).<br><br>" +
              "• <strong>Email:</strong> <a href='mailto:opbitu855@gmail.com'>opbitu855@gmail.com</a><br>" +
              "• <strong>Phone:</strong> +91 9090078348<br>" +
              "• <strong>GitHub:</strong> <a href='https://github.com/ananta12-d' target='_blank'>github.com/ananta12-d</a><br>" +
              "• <strong>HackIndia:</strong> <a href='https://hackindia.org/profile/ananta_kishore_swain' target='_blank'>hackindia.org/profile/ananta_kishore_swain</a><br>" +
              "• <strong>C# Corner:</strong> <a href='https://www.c-sharpcorner.com/members/ananta-kishore-swain' target='_blank'>c-sharpcorner.com/members/ananta-kishore-swain</a><br>" +
              "• <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/ananta-kishore-swain-6282472bb' target='_blank'>linkedin.com/in/ananta-kishore-swain</a><br>" +
              "• <strong>Location:</strong> Bhubaneswar & Angul, Odisha, India",
        action: {
          label: '<i class="fas fa-envelope"></i> Send Direct Email',
          handler: () => {
            window.location.href = 'mailto:opbitu855@gmail.com?subject=Engineering%20Opportunity%20-%20Ananta%20Kishore%20Swain';
          }
        }
      };
    }

    // 10. Greetings & Small Talk
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q === 'yo' || q.includes('greet')) {
      return {
        html: "Hello! Great to meet you. I can tell you all about Ananta's experience with <strong>FastAPI, Cassandra, Kafka, Llama 3.2, and Hybrid RAG</strong>, or walk you through his <strong>GitHub projects</strong>. What would you like to explore?"
      };
    }

    if (q.includes('who are you') || q.includes('what are you') || q.includes('your name')) {
      return {
        html: "I am <strong>AKS-AI</strong>, an intelligent virtual agent representing Ananta Kishore Swain. I am powered by Ananta's production knowledge base to provide instant answers to recruiters, engineering managers, and collaborators."
      };
    }

    // Fallback: Smart Keyword Synthesis
    return {
      html: `I understand you're asking about <strong>"${query}"</strong>.<br><br>` +
            "Ananta specializes in <strong>Applied AI & MLOps</strong>, <strong>High-Concurrency Backend Systems (1M+ msg/s)</strong>, <strong>Hybrid RAG (Qdrant + BM25)</strong>, and <strong>Zero-Trust WireGuard infrastructure</strong>.<br><br>" +
            "Would you like to:<br>" +
            "• Download his official <strong>Resume</strong>?<br>" +
            "• Inspect his <strong>GitHub Projects</strong> (Local RAG, AI Academic Tracker, LifeOS)?<br>" +
            "• Or get his direct <strong>Contact Info</strong>?",
      action: {
        label: '<i class="fas fa-file-download"></i> Get Ananta\'s Resume',
        handler: () => {
          const link = document.createElement('a');
          link.href = 'Ananta_Kishore_Swain_Resume.pdf';
          link.download = 'Ananta_Kishore_Swain_Resume.pdf';
          link.click();
        }
      }
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.aksChatbot = new AksAiChatbot();
});
