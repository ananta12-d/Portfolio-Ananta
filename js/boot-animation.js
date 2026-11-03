/**
 * STARTING ANIMATION & BOOT LOADER
 * Simulates high-tech neural agent initialization sequence.
 */

document.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  const progressFill = document.querySelector('.boot-progress-fill');
  const progressText = document.querySelector('.boot-percentage');
  const logBox = document.querySelector('.boot-terminal-box');
  const skipBtn = document.querySelector('.boot-skip-btn');

  if (!bootScreen) return;

  const bootLogs = [
    { text: '[SYS_KERNEL] Initializing Agentic AI Runtime v2.4...', progress: 15 },
    { text: '[AI_CORE] Loading Llama-3.2 (3B) Enterprise Self-Hosted Agent...', progress: 32 },
    { text: '[RETRIEVAL] Mounting Hybrid RAG: Qdrant Dense + BM25 Sparse (RRF)...', progress: 54 },
    { text: '[DATA_BUS] Establishing Apache Kafka & Cassandra streams (1M+ msg/s)...', progress: 75 },
    { text: '[SECURITY] Enforcing SOC2 Zero-Trust API Firewall & CPU Governance...', progress: 90 },
    { text: '[SUCCESS] Ananta Kishore Swain Portfolio Ready. Launching UI...', progress: 100 }
  ];

  let currentStep = 0;
  let hasSkipped = false;

  function addLogLine(text, isFinal = false) {
    if (!logBox) return;
    const oldActive = logBox.querySelector('.boot-log-line.active');
    if (oldActive) oldActive.classList.remove('active');

    const line = document.createElement('div');
    line.className = 'boot-log-line active';
    line.textContent = text;
    logBox.appendChild(line);
    logBox.scrollTop = logBox.scrollHeight;

    if (window.audioFx) window.audioFx.playKey();
  }

  function advanceBoot() {
    if (hasSkipped) return;

    if (currentStep < bootLogs.length) {
      const step = bootLogs[currentStep];
      addLogLine(step.text, currentStep === bootLogs.length - 1);

      if (progressFill) progressFill.style.width = `${step.progress}%`;
      if (progressText) progressText.textContent = `${step.progress}%`;

      currentStep++;
      const nextDelay = currentStep === bootLogs.length ? 700 : 420;
      setTimeout(advanceBoot, nextDelay);
    } else {
      finishBoot();
    }
  }

  function finishBoot() {
    if (hasSkipped) return;
    hasSkipped = true;

    if (window.audioFx) window.audioFx.playSuccess();

    setTimeout(() => {
      bootScreen.classList.add('boot-finished');
      setTimeout(() => {
        bootScreen.style.display = 'none';
        // Auto show intro popup if not silenced
        if (window.introPopup) {
          window.introPopup.checkAutoOpen();
        }
      }, 700);
    }, 400);
  }

  function skip() {
    if (hasSkipped) return;
    hasSkipped = true;
    if (progressFill) progressFill.style.width = '100%';
    if (progressText) progressText.textContent = '100%';
    bootScreen.classList.add('boot-finished');
    setTimeout(() => {
      bootScreen.style.display = 'none';
      if (window.introPopup) {
        window.introPopup.checkAutoOpen();
      }
    }, 400);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', skip);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !hasSkipped) {
      skip();
    }
  });

  // Start sequence
  setTimeout(advanceBoot, 400);
});
