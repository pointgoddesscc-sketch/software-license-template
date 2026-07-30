/**
 * LicenseUI - Professional JavaScript component for software license agreements
 * and Pro unlock screens. Business & marketing ready for website development.
 *
 * Usage documentation included in README.md
 * Compatible with vanilla JS, easy to adapt for React/Vue/Svelte.
 *
 * @version 1.0.0
 * @author Your Brand
 */

const LicenseUI = (function () {
  'use strict';

  // Create modal container if it doesn't exist
  function ensureModalRoot() {
    let root = document.getElementById('license-ui-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'license-ui-root';
      document.body.appendChild(root);
    }
    return root;
  }

  /**
   * Show a full license agreement modal (Apple Media Services style)
   * @param {Object} options
   * @param {string} options.title - Modal title
   * @param {string} [options.content] - HTML or text content of the license
   * @param {string} [options.contentUrl] - URL to fetch license text from
   * @param {Function} options.onAgree - Callback when user clicks Agree
   * @param {Function} [options.onCancel] - Callback when user cancels
   */
  function showAgreement(options = {}) {
    const root = ensureModalRoot();
    const {
      title = 'Software License Agreement',
      content = 'Please read the Agreement carefully. To confirm your understanding and acceptance of the Agreement, click "Agree."',
      contentUrl = null,
      onAgree = () => {},
      onCancel = () => {}
    } = options;

    root.innerHTML = `
      <div class="license-modal-overlay">
        <div class="license-modal">
          <div class="license-modal-header">
            <h2>${title}</h2>
            <button class="license-close-btn" aria-label="Close">×</button>
          </div>
          <div class="license-modal-body">
            <div class="license-content" id="license-content-area">
              <p>Loading agreement...</p>
            </div>
          </div>
          <div class="license-modal-footer">
            <button class="license-btn license-btn-secondary" id="license-cancel">Cancel</button>
            <button class="license-btn license-btn-primary" id="license-agree">Agree</button>
          </div>
        </div>
      </div>
    `;

    const contentArea = document.getElementById('license-content-area');

    if (contentUrl) {
      fetch(contentUrl)
        .then(res => res.text())
        .then(text => {
          contentArea.innerHTML = `<pre class="license-pre">${text.replace(/</g, '<')}</pre>`;
        })
        .catch(() => {
          contentArea.innerHTML = `<p>${content}</p>`;
        });
    } else {
      contentArea.innerHTML = `<div class="license-text">${content}</div>`;
    }

    document.getElementById('license-agree').onclick = () => {
      root.innerHTML = '';
      onAgree();
    };
    document.getElementById('license-cancel').onclick = () => {
      root.innerHTML = '';
      onCancel();
    };
    root.querySelector('.license-close-btn').onclick = () => {
      root.innerHTML = '';
      onCancel();
    };
  }

  /**
   * Show Unlock Pro Capabilities screen (Working Copy style marketing unlock)
   * @param {Object} options
   * @param {string} options.title
   * @param {Array} options.features - Array of {name, price, permanent}
   * @param {boolean} [options.trialExpired]
   * @param {Function} options.onPurchase
   * @param {Function} [options.onRestore]
   */
  function showUnlock(options = {}) {
    const root = ensureModalRoot();
    const {
      title = 'Unlock Pro Capabilities',
      features = [],
      trialExpired = false,
      onPurchase = () => {},
      onRestore = () => {}
    } = options;

    const featuresHtml = features.map(f => {
      let badge = '';
      if (f.price === 'Free' || f.price === null) {
        badge = `<span class="unlock-badge unlock-free">${f.price || 'Included'}</span>`;
      } else if (f.permanent) {
        badge = `<span class="unlock-badge unlock-price">${f.price}</span>`;
      } else if (trialExpired) {
        badge = `<span class="unlock-badge unlock-expired">Expired</span>`;
      } else {
        badge = `<span class="unlock-badge unlock-price">${f.price}</span>`;
      }
      return `
        <div class="unlock-feature">
          <div class="unlock-feature-info">
            <strong>${f.name}</strong>
            ${f.permanent ? '<small>unlocked features are permanent</small>' : ''}
          </div>
          ${badge}
        </div>
      `;
    }).join('');

    root.innerHTML = `
      <div class="license-modal-overlay">
        <div class="license-modal unlock-modal">
          <div class="license-modal-header">
            <h2>${title}</h2>
            <button class="license-close-btn" aria-label="Close">×</button>
          </div>
          <div class="license-modal-body">
            <p class="unlock-intro">To make the product fully useful you can unlock unlimited features and other pro capabilities.</p>
            <div class="unlock-features">
              ${featuresHtml}
            </div>
            <p class="unlock-note">Unlock gives you access to all Pro features currently available and new ones added the next year. All features remain permanently available while pro features added after 12 months require a new purchase.</p>
          </div>
          <div class="license-modal-footer unlock-footer">
            <button class="license-btn license-btn-primary" id="unlock-purchase">Unlock for all your devices</button>
            <button class="license-btn license-btn-secondary" id="unlock-restore">Restore previous purchase</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('unlock-purchase').onclick = () => {
      root.innerHTML = '';
      onPurchase();
    };
    document.getElementById('unlock-restore').onclick = () => {
      root.innerHTML = '';
      onRestore();
    };
    root.querySelector('.license-close-btn').onclick = () => {
      root.innerHTML = '';
    };
  }

  // Public API
  return {
    showAgreement,
    showUnlock
  };
})();

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LicenseUI;
}
