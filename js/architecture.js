/**
 * INTERACTIVE SYSTEM ARCHITECTURE VISUALIZER
 * Explores Ananta's Enterprise Hybrid RAG & Telemetry Architecture.
 */

const architectureData = {
  telemetry: {
    title: 'Edge IoT & Telemetry Ingestion',
    category: 'Ingestion Layer',
    icon: 'fas fa-satellite-dish',
    desc: 'High-concurrency data ingestion pipelines accepting telemetry from distributed IoT devices and mobile edge clients. Built with live MQTT and TCP/UDP routing engines, Flutter BLE discovery, and sensor calibration workflows.',
    metrics: [
      { label: 'Ingestion Throughput', value: '1,000,000+ msg/sec' },
      { label: 'Protocols', value: 'MQTT, TCP, UDP, WebSockets' },
      { label: 'Edge Clients', value: 'Flutter BLE, Embedded Sensors' }
    ],
    tech: ['MQTT', 'TCP/UDP', 'Flutter', 'BLE', 'WebSockets', 'Node-RED DAG']
  },
  streaming: {
    title: 'Distributed Event-Streaming Backbone',
    category: 'Streaming & Broker Layer',
    icon: 'fas fa-network-wired',
    desc: 'Fault-tolerant distributed messaging infrastructure built on Apache Kafka, TBMQ (ThingsBoard MQTT Broker), and Redis Pub/Sub. Enables massive horizontal scalability and parallel processing across edge clusters.',
    metrics: [
      { label: 'Concurrency', value: 'Millions of Edge Devices' },
      { label: 'Message Broker', value: 'Kafka + TBMQ' },
      { label: 'Cache & Pub/Sub', value: 'Redis Cluster' }
    ],
    tech: ['Apache Kafka', 'TBMQ', 'Redis Pub/Sub', 'Python', 'FastAPI']
  },
  storage: {
    title: 'Micro-Storage & Time-Series Data Lake',
    category: 'Storage Infrastructure',
    icon: 'fas fa-database',
    desc: 'Re-architected database storage by migrating from PostgreSQL to Apache Cassandra to eliminate database lock contention during hyper-scale events. Built Dual-Delete Synchronization with Elasticsearch to eliminate orphaned ghost records.',
    metrics: [
      { label: 'Storage Efficiency', value: '5× Reduction' },
      { label: 'Lock Contention', value: '0% (Eliminated)' },
      { label: 'Data Consistency', value: 'Dual-Delete Sync Protocol' }
    ],
    tech: ['Apache Cassandra', 'PostgreSQL', 'Elasticsearch', 'Docker']
  },
  rag: {
    title: 'Hybrid RAG (Reciprocal Rank Fusion)',
    category: 'AI Retrieval & Context',
    icon: 'fas fa-brain',
    desc: 'Engineered a state-of-the-art Hybrid Retrieval-Augmented Generation system. Fuses Qdrant Dense Vector Embeddings with Sparse BM25 keyword search using Reciprocal Rank Fusion (RRF), eliminating hallucinations and maximizing technical precision.',
    metrics: [
      { label: 'Vector Store', value: 'Qdrant Vector DB' },
      { label: 'Sparse Retrieval', value: 'BM25 Token Match' },
      { label: 'Ranking Algorithm', value: 'Reciprocal Rank Fusion (RRF)' }
    ],
    tech: ['Qdrant', 'Dense Embeddings', 'BM25', 'RRF', 'LangChain']
  },
  llm: {
    title: 'Self-Hosted Llama 3.2 Enterprise Agent',
    category: 'Deterministic AI Runtime',
    icon: 'fas fa-robot',
    desc: 'Deployed a self-hosted, deterministic enterprise AI agent powered by Llama 3.2 (3B). Completely eliminates recurring third-party API expenses while enforcing full privacy, zero-trust data sovereignty, and deterministic enterprise fleet operations.',
    metrics: [
      { label: 'Model', value: 'Llama 3.2 (3B Parameter)' },
      { label: 'Hosting', value: '100% Self-Hosted & Airgapped' },
      { label: 'API Cost', value: '$0 Recurring 3rd-party' }
    ],
    tech: ['Llama 3.2', 'Ollama / vLLM', 'FastAPI', 'Python', 'Docker']
  },
  delivery: {
    title: 'Low-Latency SSE Streaming & Zero-Trust Security',
    category: 'Gateway & Defense',
    icon: 'fas fa-shield-alt',
    desc: 'Sub-50ms AI response delivery achieved via asynchronous Server-Sent Events (SSE) and Redis semantic caching. Protected by a multi-layer API firewall with rate limiting, prompt injection defense, and Docker CPU governance ensuring 99.9% uptime.',
    metrics: [
      { label: 'Response Latency', value: '<50ms' },
      { label: 'API Uptime', value: '99.9%' },
      { label: 'Security Compliance', value: 'SOC2 / ISO 27001 Aligned' }
    ],
    tech: ['FastAPI', 'SSE Streaming', 'Redis Cache', 'WireGuard VPN', 'Docker Governance']
  }
};

function initArchitectureVisualizer() {
  const nodes = document.querySelectorAll('.arch-node');
  const titleEl = document.getElementById('arch-active-title');
  const catEl = document.getElementById('arch-active-cat');
  const descEl = document.getElementById('arch-active-desc');
  const metricsEl = document.getElementById('arch-active-metrics');
  const techEl = document.getElementById('arch-active-tech');

  if (!nodes.length || !titleEl) return;

  function selectNode(key) {
    const data = architectureData[key];
    if (!data) return;

    nodes.forEach(n => {
      if (n.dataset.node === key) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });

    titleEl.innerHTML = `<i class="${data.icon}"></i> ${data.title}`;
    if (catEl) catEl.textContent = data.category;
    if (descEl) descEl.textContent = data.desc;

    if (metricsEl) {
      metricsEl.innerHTML = data.metrics.map(m => `
        <div class="arch-metric-pill">
          <strong>${m.label}:</strong> ${m.value}
        </div>
      `).join('');
    }

    if (techEl) {
      techEl.innerHTML = data.tech.map(t => `
        <span class="tech-tag">${t}</span>
      `).join('');
    }

    if (window.audioFx) window.audioFx.playClick();
  }

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      selectNode(node.dataset.node);
    });
  });

  // Default selection
  selectNode('rag');
}

document.addEventListener('DOMContentLoaded', initArchitectureVisualizer);
