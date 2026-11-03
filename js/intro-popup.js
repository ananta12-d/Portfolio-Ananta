/**
 * INTRO POPUP BRIEFING MODAL
 * Welcomes recruiters and engineering leaders with high-level highlights.
 */

class IntroPopupController {
  constructor() {
    this.modal = document.getElementById('intro-modal');
    this.closeBtn = document.querySelector('.intro-close-btn');
    this.exploreBtn = document.getElementById('intro-explore-btn');
    this.copyEmailBtn = document.getElementById('intro-copy-email-btn');
    this.dontShowCheckbox = document.getElementById('dont-show-intro');
    this.storageKey = 'ananta_portfolio_intro_seen';
    
    this.init();
  }

  init() {
    if (!this.modal) return;

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.exploreBtn) {
      this.exploreBtn.addEventListener('click', () => this.close());
    }

    if (this.copyEmailBtn) {
      this.copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('opbitu855@gmail.com').then(() => {
          this.copyEmailBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
          if (window.showToast) window.showToast('Email copied: opbitu855@gmail.com');
          setTimeout(() => {
            this.copyEmailBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Email';
          }, 2000);
        });
      });
    }

    // Click outside to close
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal || e.target.classList.contains('intro-backdrop')) {
        this.close();
      }
    });

    // Keyboard ESC to close
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    // Trigger button from navbar
    const navIntroBtn = document.getElementById('nav-intro-btn');
    if (navIntroBtn) {
      navIntroBtn.addEventListener('click', () => this.open(true));
    }
  }

  checkAutoOpen() {
    const isSilenced = localStorage.getItem(this.storageKey) === 'true';
    if (!isSilenced) {
      setTimeout(() => {
        this.open();
      }, 350);
    }
  }

  open(force = false) {
    if (!this.modal) return;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.audioFx) window.audioFx.playModalOpen();
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    if (window.audioFx) window.audioFx.playClick();

    if (this.dontShowCheckbox && this.dontShowCheckbox.checked) {
      localStorage.setItem(this.storageKey, 'true');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.introPopup = new IntroPopupController();
});
