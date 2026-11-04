/**
 * MAIN CONTROLLER
 * Theme engine, dynamic typewriter, 3D tilt effects, skill filters & contact handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. THEME SWITCHER
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;
  const currentTheme = localStorage.getItem('site_theme') || 'dark';

  function setTheme(theme) {
    if (theme === 'light') {
      htmlRoot.setAttribute('data-theme', 'light');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggleBtn.setAttribute('title', 'Switch to Cyber Dark Mode');
      }
    } else {
      htmlRoot.removeAttribute('data-theme');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggleBtn.setAttribute('title', 'Switch to Pearlescent Light Mode');
      }
    }
    localStorage.setItem('site_theme', theme);
  }

  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = htmlRoot.getAttribute('data-theme') === 'light';
      setTheme(isLight ? 'dark' : 'light');
      if (window.audioFx) window.audioFx.playClick();
    });
  }

  // ==========================================
  // 2. SOUND EFFECTS TOGGLE
  // ==========================================
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  function updateSoundIcon() {
    if (!soundToggleBtn || !window.audioFx) return;
    const isMuted = window.audioFx.isMuted;
    soundToggleBtn.innerHTML = isMuted 
      ? '<i class="fas fa-volume-mute"></i>' 
      : '<i class="fas fa-volume-up"></i>';
    soundToggleBtn.setAttribute('title', isMuted ? 'Unmute Audio UI Effects' : 'Mute Audio UI Effects');
  }

  updateSoundIcon();

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      if (window.audioFx) {
        const muted = window.audioFx.toggleMute();
        updateSoundIcon();
        if (!muted) window.audioFx.playClick();
      }
    });
  }

  // ==========================================
  // 3. TOAST NOTIFICATION UTILITY
  // ==========================================
  window.showToast = function (message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle" style="color:var(--accent-cyan);"></i> ${message}`;
    toast.classList.add('show');
    if (window.audioFx) window.audioFx.playClick();

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  // ==========================================
  // 4. DYNAMIC HERO TYPEWRITER
  // ==========================================
  const typewriterEl = document.getElementById('hero-typewriter');
  if (typewriterEl) {
    const roles = [
      'Applied AI & MLOps Specialist',
      'RAG & Generative AI Systems Architect',
      'High-Concurrency Backend Engineer (1M+ msg/s)',
      'Zero-Trust & WireGuard Infrastructure Expert',
      'Python, FastAPI & Distributed Systems Lead'
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeDelay = 80;

    function tickTypewriter() {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typeDelay = 40;
      } else {
        typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typeDelay = 80;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        isDeleting = true;
        typeDelay = 1800; // Pause at end of word
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typeDelay = 400; // Pause before typing new word
      }

      setTimeout(tickTypewriter, typeDelay);
    }

    tickTypewriter();
  }

  // ==========================================
  // 5. 3D TILT EFFECT ON PHOTO CARD
  // ==========================================
  const photoCard = document.querySelector('.hero-photo-card');
  if (photoCard) {
    const handleMove = (e) => {
      const rect = photoCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      photoCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleLeave = () => {
      photoCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    photoCard.addEventListener('mousemove', handleMove);
    photoCard.addEventListener('mouseleave', handleLeave);
  }

  // ==========================================
  // 6. SKILLS FILTER TABS
  // ==========================================
  const skillFilterBtns = document.querySelectorAll('.skills-filter-tabs .filter-tab-btn:not(.project-filter-btn)');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      skillCards.forEach(card => {
        if (filter === 'all' || (card.dataset.category && card.dataset.category.includes(filter))) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });

      if (window.audioFx) window.audioFx.playClick();
    });
  });

  // ==========================================
  // 6b. PROJECTS FILTER TABS (ALL, HACKINDIA, AI, PRODUCTION)
  // ==========================================
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all' || (card.dataset.category && card.dataset.category.includes(filter))) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });

      if (window.audioFx) window.audioFx.playClick();
    });
  });

  // ==========================================
  // 7. COPY CONTACT ACTIONS
  // ==========================================
  document.querySelectorAll('.copy-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.copy;
      if (target) {
        navigator.clipboard.writeText(target).then(() => {
          window.showToast(`Copied to clipboard: ${target}`);
        });
      }
    });
  });

  // ==========================================
  // 8. CONTACT FORM SUBMISSION
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'Guest';
      const email = document.getElementById('form-email')?.value || '';
      const message = document.getElementById('form-message')?.value || '';

      // Direct mailto fallback
      const mailtoUrl = `mailto:opbitu855@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
      window.location.href = mailtoUrl;

      window.showToast('Thank you! Redirecting to send your message.');
      contactForm.reset();
    });
  }

  // ==========================================
  // 9. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHT
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });

  // Mobile Drawer Menu Controller
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  const openMobileDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('active');
    if (mobileBackdrop) mobileBackdrop.classList.add('active');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-times';
    }
    document.body.style.overflow = 'hidden';
    if (window.audioFx) window.audioFx.playModalOpen();
  };

  const closeMobileDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
    document.body.style.overflow = '';
    if (window.audioFx) window.audioFx.playClick();
  };

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileDrawer);
    }

    if (mobileDrawerClose) {
      mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    }

    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        closeMobileDrawer();
      }
    });
  }
});
