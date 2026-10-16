/**
 * Jangid Tuff Glasses Private Limited
 * Core Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCategoryFilters();
  initLightbox();
  initAccordions();
  initEnquiryForms();
  initDynamicYear();
  highlightActiveNav();
});

// 1. Mobile Menu
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.innerHTML = isOpen 
        ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
        : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
    });

    // Close mobile menu on clicking an internal link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
      });
    });
  }
}

// 2. Category Filters (Products and Gallery)
function initCategoryFilters() {
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const filterButtons = group.querySelectorAll('[data-filter]');
    const items = group.querySelectorAll('[data-category]');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle button states
        filterButtons.forEach(b => {
          b.classList.remove('bg-brand-blue', 'text-white', 'shadow-sm');
          b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
        });
        btn.classList.add('bg-brand-blue', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

        const filterValue = btn.dataset.filter;
        items.forEach(item => {
          const category = item.dataset.category;
          if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });
}

// 3. Image Lightbox Modal
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('#lightboxImage');
  const lightboxTitle = lightbox.querySelector('#lightboxTitle');
  const lightboxDesc = lightbox.querySelector('#lightboxDesc');
  const closeBtn = lightbox.querySelector('#lightboxClose');

  document.querySelectorAll('[data-lightbox-trigger]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on an action link/button inside card
      if (e.target.closest('a') || e.target.closest('button')) return;

      const img = card.querySelector('img');
      const title = card.querySelector('[data-lightbox-title]')?.textContent || card.querySelector('h3, figcaption')?.textContent || 'Glass Installation View';
      const desc = card.querySelector('[data-lightbox-desc]')?.textContent || 'Illustrative architectural glass inspiration';

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxDesc) lightboxDesc.textContent = desc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// 4. Accordions for FAQ
function initAccordions() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close sibling accordions in the same container if desired
      const parent = item.closest('[data-accordion-group]');
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            sibling.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('active', !isActive);
      trigger.setAttribute('aria-expanded', String(!isActive));
    });
  });
}

// 5. Enquiry Forms (WhatsApp Message Generator & Validation)
function initEnquiryForms() {
  document.querySelectorAll('[data-enquiry-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());

      const lines = [
        '*New Glass Project Enquiry*',
        'Company: Jangid Tuff Glasses Private Limited',
        '---------------------------------------',
        `👤 *Client Name:* ${values['name'] || values['Name'] || 'Not provided'}`,
        `📞 *Phone Number:* ${values['phone'] || values['Phone'] || 'Not provided'}`,
        `✉️ *Email:* ${values['email'] || values['Email'] || 'Not provided'}`,
        `📦 *Product / Service:* ${values['product'] || values['Product or service'] || 'General Enquiry'}`,
        `📍 *Project Location:* ${values['location'] || values['Project location'] || 'Jodhpur / Nearby'}`,
        `📐 *Dimensions / Approx Size:* ${values['dimensions'] || values['Approx. dimensions'] || 'To be measured'}`,
        `🔢 *Quantity / Units:* ${values['quantity'] || 'As required'}`,
        `⏱️ *Expected Timeline:* ${values['timeline'] || values['Timeline'] || 'Flexible'}`,
        `📝 *Project Details / Notes:* ${values['details'] || values['Project details'] || 'Please contact me with more information.'}`,
        '---------------------------------------',
        'Sent via Website Enquiry'
      ];

      const message = encodeURIComponent(lines.join('\n'));
      const targetPhone = '919251077483';
      const whatsappUrl = `https://wa.me/${targetPhone}?text=${message}`;

      showToast('Preparing your enquiry in WhatsApp... Please review and click Send.');

      // Open WhatsApp in new tab
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 600);
    });
  });
}

// 6. Dynamic Year
function initDynamicYear() {
  const yearEls = document.querySelectorAll('#year, .current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });
}

// 7. Highlight Active Navigation Item
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, #mobileMenu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('text-brand-blue', 'font-bold');
      if (link.closest('nav')) {
        link.classList.add('border-b-2', 'border-brand-blue', 'pb-1');
      }
    }
  });
}

// Helper: Toast Notifications
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] rounded-2xl bg-brand-navy text-white px-6 py-4 shadow-2xl text-sm font-medium flex items-center gap-3 transition-all transform';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>${message}</span>
  `;
  toast.classList.remove('hidden', 'opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 5000);
}
