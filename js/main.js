// ============================================================
// 109 Bar Loft — Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initBarStatus();
  initLightSwitch();
  initScrollHeader();
  initScrollReveal();
  initCursorGlow();
  initMobileNav();
  initParallax();
  setActiveNav();
});

// ── Age Gate ─────────────────────────────────────────────────
function initAgeGate() {
  const overlay = document.getElementById('age-gate');
  if (!overlay) return;

  if (localStorage.getItem('bar109_age_ok') === '1') {
    overlay.classList.add('hidden');
    return;
  }

  const btnYes = document.getElementById('age-yes');
  const btnNo  = document.getElementById('age-no');
  const denied = document.getElementById('age-denied');

  btnYes && btnYes.addEventListener('click', () => {
    localStorage.setItem('bar109_age_ok', '1');
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s';
    setTimeout(() => overlay.classList.add('hidden'), 500);
  });

  btnNo && btnNo.addEventListener('click', () => {
    if (denied) denied.style.display = 'block';
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
  });
}

// ── Bar Status (Open / Closed) ────────────────────────────────
function initBarStatus() {
  updateStatus();
  setInterval(updateStatus, 60000);
}

function getBarStatus() {
  const now = new Date();
  const day = now.getDay();      // 0=Sun, 1=Mon … 6=Sat
  const hour = now.getHours();
  const totalMin = hour * 60 + now.getMinutes();

  // Hours before 6am are treated as "still last night"
  const isEarlyMorning = hour < 6;
  const effectiveDay   = isEarlyMorning ? (day + 6) % 7 : day;
  const effectiveTotalMin = isEarlyMorning ? totalMin + 1440 : totalMin;

  // Fri(5) & Sat(6): open until 03:00 next day (27h)
  const isFriSat   = effectiveDay === 5 || effectiveDay === 6;
  const openMin    = 720;                     // 12:00
  const closeMin   = isFriSat ? 1620 : 1440; // 27:00 or 24:00
  const closeLabel = isFriSat ? '03:00' : '00:00';

  const isOpen = effectiveTotalMin >= openMin && effectiveTotalMin < closeMin;

  if (isOpen) {
    const minsLeft = closeMin - effectiveTotalMin;
    return { isOpen: true, minsLeft, closeLabel };
  }

  // Minutes until next 12:00 opening
  let minsUntilOpen;
  if (totalMin < openMin) {
    minsUntilOpen = openMin - totalMin;
  } else {
    minsUntilOpen = (1440 - totalMin) + openMin;
  }
  return { isOpen: false, minsUntilOpen };
}

function fmtDuration(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m} мин`;
  if (m === 0) return `${h} ч`;
  return `${h} ч ${m} мин`;
}

function updateStatus() {
  const status = getBarStatus();
  document.querySelectorAll('.status-pill').forEach(pill => {
    const dot   = pill.querySelector('.status-dot');
    const main  = pill.querySelector('.status-main');
    const sub   = pill.querySelector('.status-sub');

    pill.classList.remove('open', 'closed');
    if (status.isOpen) {
      pill.classList.add('open');
      if (main) main.textContent = `Открыто · до ${status.closeLabel}`;
      if (sub)  sub.textContent  = `Закроется через ${fmtDuration(status.minsLeft)}`;
    } else {
      pill.classList.add('closed');
      if (main) main.textContent = 'Закрыто';
      if (sub)  sub.textContent  = `Откроется через ${fmtDuration(status.minsUntilOpen)}`;
    }
  });
}

// ── Light Switch ──────────────────────────────────────────────
function initLightSwitch() {
  const btn = document.querySelector('.light-switch');
  if (!btn) return;

  const isDimmed = localStorage.getItem('bar109_dimmed') === '1';
  if (isDimmed) {
    document.body.classList.add('dimmed');
    updateSwitchIcon(btn, true);
  }

  btn.addEventListener('click', () => {
    const nowDimmed = document.body.classList.toggle('dimmed');
    localStorage.setItem('bar109_dimmed', nowDimmed ? '1' : '0');
    updateSwitchIcon(btn, nowDimmed);
  });
}

function updateSwitchIcon(btn, isDimmed) {
  const icon = btn.querySelector('i');
  if (!icon) return;
  icon.className = isDimmed ? 'ph ph-lightbulb-filament' : 'ph ph-lightbulb';
  btn.title = isDimmed ? 'Включить свет' : 'Приглушить свет';
}

// ── Scroll Header ─────────────────────────────────────────────
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Scroll Reveal ─────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ── Cursor Glow ───────────────────────────────────────────────
function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;
  let raf;
  let tx = -999, ty = -999;
  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    if (!raf) raf = requestAnimationFrame(() => {
      glow.style.left = tx + 'px';
      glow.style.top  = ty + 'px';
      raf = null;
    });
  });
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
}

// ── Mobile Nav ────────────────────────────────────────────────
function initMobileNav() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// ── Parallax Hero ─────────────────────────────────────────────
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  if (window.innerWidth <= 768) return;

  const content = hero.querySelector('.hero-content');
  if (!content) return;

  // Видео не трогаем — статичный фон без рывков
  // Только текст плывёт чуть медленнее скролла
  content.style.willChange = 'transform';

  let ticking = false;
  let lastY   = 0;
  const heroH = hero.offsetHeight;

  function applyParallax() {
    if (lastY < heroH) {
      content.style.transform = `translate3d(0, ${lastY * 0.1}px, 0)`;
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    lastY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });
}

// ── Active Nav ────────────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === './') || href === './' && path === '') {
      a.classList.add('active');
    }
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// ── VK Widget ─────────────────────────────────────────────────
function initVKWidget() {
  const container = document.getElementById('vk-widget');
  if (!container) return;
  // Show styled fallback — use when actual group numeric ID is confirmed
  showVKFallback();
}

function showVKFallback() {
  const el = document.getElementById('vk-widget');
  if (!el) return;
  el.innerHTML = `
    <a href="https://vk.com/bar109" target="_blank" rel="noopener" class="vk-fallback">
      <div class="vk-fallback-icon">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0zm7.27 15.674c.435.425 .895.833 1.3 1.303.175.21.34.425.467.667.18.34.025.714-.278.734l-1.83.003c-.473.04-.85-.15-1.165-.473-.25-.258-.483-.533-.733-.79a1.05 1.05 0 00-.378-.265c-.29-.11-.556-.052-.728.2-.176.254-.214.549-.228.847-.02.44-.154.556-.594.578-.945.044-1.84-.09-2.664-.567-1.73-1.014-2.893-2.49-3.912-4.118-.96-1.544-1.693-3.21-2.39-4.895-.155-.372-.036-.57.37-.578.596-.01 1.192-.01 1.788 0 .22.004.366.128.446.342.296.792.654 1.552 1.093 2.27.12.196.24.39.41.534.186.157.327.113.42-.114.058-.14.083-.288.097-.437.042-.496.048-1.01-.066-1.5-.068-.31-.25-.51-.56-.57-.158-.03-.135-.113-.058-.203.133-.158.257-.254.504-.254h2.068c.33.065.403.22.445.55l.002 2.35c-.003.13.066.517.303.603.19.066.315-.09.43-.21.716-.764 1.227-1.67 1.682-2.61.2-.41.374-.834.543-1.26.126-.32.325-.477.68-.47l1.992-.003c.058 0 .118 0 .175.01.347.06.444.214.34.556-.17.556-.503 1.03-.83 1.503-.35.502-.72.993-1.065 1.498-.318.46-.3.692.09 1.08z" fill="#f3b441"/>
        </svg>
      </div>
      <div class="vk-fallback-body">
        <div class="vk-fallback-title">109 Bar Loft</div>
        <div class="vk-fallback-sub">Сообщество ВКонтакте · vk.com/bar109</div>
        <div class="vk-fallback-desc">Акции, события, новинки меню и живая атмосфера лофта</div>
        <span class="vk-fallback-btn">Вступить в сообщество <i class="ph ph-arrow-right"></i></span>
      </div>
    </a>`;
}

// ── Lightbox ──────────────────────────────────────────────────
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbClose  = document.getElementById('lightbox-close');
  if (!lightbox || !lbImg) return;

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.dataset.lightbox || el.querySelector('img')?.src;
      if (!src) return;
      lbImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => lbImg.src = '', 300);
  };
  lbClose && lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ── Menu Page Functions ───────────────────────────────────────
function initMenuPage() {
  if (!document.getElementById('menu-content')) return;

  renderMenu(MENU_DATA);
  initVKWidget();

  const searchInput = document.getElementById('menu-search');
  const filterChips = document.querySelectorAll('.filter-chip');
  const resetBtn    = document.getElementById('filter-reset');

  let activeFilters = new Set(['all']);
  let searchQuery   = '';
  let alcoholOk     = localStorage.getItem('bar109_alc_ok') === '1';

  function syncAlcoholBadges() {
    const showing = activeFilters.has('18plus') && !activeFilters.has('all');
    document.body.classList.toggle('show-alcohol', showing);
  }

  function applyFilters() {
    const cats = document.querySelectorAll('.menu-category');
    let anyVisible = false;

    cats.forEach(cat => {
      const items = cat.querySelectorAll('.menu-item');
      let catHasVisible = false;

      items.forEach(item => {
        const name = (item.dataset.name || '').toLowerCase();
        const desc = (item.dataset.desc || '').toLowerCase();
        const tags = (item.dataset.tags || '').split(',');

        const matchSearch = !searchQuery || name.includes(searchQuery) || desc.includes(searchQuery);

        let matchFilter = activeFilters.has('all');
        if (!matchFilter) {
          if (activeFilters.has('noalc')  && !tags.includes('alcohol') && !tags.includes('hookah')) matchFilter = true;
          if (activeFilters.has('18plus') && (tags.includes('alcohol') || tags.includes('hookah'))) matchFilter = true;
          if (activeFilters.has('spicy')  && tags.includes('spicy'))    matchFilter = true;
          if (activeFilters.has('veg')    && tags.includes('veg'))      matchFilter = true;
          if (activeFilters.has('burger') && tags.includes('burger'))   matchFilter = true;
          if (activeFilters.has('hot')    && tags.includes('hot'))      matchFilter = true;
          if (activeFilters.has('salad')  && tags.includes('salad'))    matchFilter = true;
          if (activeFilters.has('starter')&& tags.includes('starter'))  matchFilter = true;
          if (activeFilters.has('dessert')&& tags.includes('dessert'))  matchFilter = true;
          if (activeFilters.has('cocktail')&& tags.includes('cocktail'))matchFilter = true;
          if (activeFilters.has('tea')    && tags.includes('tea_coffee'))matchFilter = true;
          if (activeFilters.has('discount')&& tags.includes('discount'))matchFilter = true;
        }

        const show = matchSearch && matchFilter;
        item.style.display = show ? '' : 'none';
        if (show) catHasVisible = true;
      });

      cat.style.display = catHasVisible ? '' : 'none';
      if (catHasVisible) anyVisible = true;
    });

    const empty = document.querySelector('.menu-empty');
    if (empty) empty.classList.toggle('visible', !anyVisible);

    if (resetBtn) {
      const hasActiveFilter = !activeFilters.has('all') || searchQuery;
      resetBtn.classList.toggle('visible', hasActiveFilter);
    }

    syncAlcoholBadges();
  }

  function activateFilter(f, chip) {
    activeFilters.delete('all');
    document.querySelector('.filter-chip[data-filter="all"]')?.classList.remove('active');
    if (activeFilters.has(f)) {
      activeFilters.delete(f);
      chip.classList.remove('active');
      if (activeFilters.size === 0) {
        activeFilters.add('all');
        document.querySelector('.filter-chip[data-filter="all"]')?.classList.add('active');
      }
    } else {
      activeFilters.add(f);
      chip.classList.add('active');
    }
    applyFilters();
  }

  function showAlcConfirm(onYes, onNo) {
    const overlay = document.createElement('div');
    overlay.className = 'alc-confirm-overlay';
    overlay.innerHTML = `
      <div class="alc-confirm-box">
        <div class="alc-confirm-icon"><i class="ph ph-wine"></i></div>
        <h4>Раздел 18+</h4>
        <p>Вам исполнилось 18 лет?</p>
        <div class="alc-confirm-actions">
          <button class="btn btn-primary" id="alc-yes">Да, мне есть 18</button>
          <button class="btn btn-outline" id="alc-no">Нет</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#alc-yes').onclick = () => { overlay.remove(); onYes(); };
    overlay.querySelector('#alc-no').onclick  = () => { overlay.remove(); onNo(); };
  }

  searchInput && searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const f = chip.dataset.filter;
      if (f === 'all') {
        activeFilters = new Set(['all']);
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        applyFilters();
      } else if (f === '18plus' && !activeFilters.has('18plus')) {
        // Alcohol filter — require age confirmation first
        if (alcoholOk) {
          activateFilter(f, chip);
        } else {
          showAlcConfirm(
            () => { alcoholOk = true; localStorage.setItem('bar109_alc_ok', '1'); activateFilter(f, chip); },
            () => { /* user said no — don't activate */ }
          );
        }
      } else {
        activateFilter(f, chip);
      }
    });
  });

  resetBtn && resetBtn.addEventListener('click', () => {
    activeFilters = new Set(['all']);
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    filterChips.forEach(c => c.classList.remove('active'));
    document.querySelector('.filter-chip[data-filter="all"]')?.classList.add('active');
    applyFilters();
  });

  // Scroll spy for category nav
  const catBtns = document.querySelectorAll('.menu-cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.cat);
      if (!target) return;
      const offset = 160;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function renderMenu(data) {
  const container = document.getElementById('menu-content');
  if (!container) return;

  let html = '';
  data.forEach(cat => {
    const isAlcohol = cat.alcohol;
    const alcoholBadge = isAlcohol ? `<div class="badge-18">18+</div>` : '';
    const alcoholHeader = isAlcohol ? `<div class="tag tag-18" style="padding:4px 10px;font-size:0.7rem">18+</div>` : '';

    let itemsHtml = '';
    cat.items.forEach(item => {
      const tags = item.tags || [];
      const tagsStr = tags.join(',');
      const spicyTag = tags.includes('spicy') ? `<span class="tag tag-spicy">острое</span>` : '';
      const vegTag   = tags.includes('veg')   ? `<span class="tag tag-veg">вег</span>` : '';
      const disTag   = tags.includes('discount') ? `<span class="tag tag-dis">-15%</span>` : '';
      const alcTag   = tags.includes('alcohol')  ? `<span class="tag tag-18">18+</span>` : '';

      itemsHtml += `
        <div class="menu-item${item.set ? ' menu-set-item' : ''}"
             data-name="${escHtml(item.name)}"
             data-desc="${escHtml(item.desc || '')}"
             data-tags="${tagsStr}">
          <div class="menu-item-body">
            <div class="menu-item-name">
              ${escHtml(item.name)}
              ${alcTag}${spicyTag}${vegTag}${disTag}
            </div>
            ${item.desc ? `<div class="menu-item-desc">${escHtml(item.desc)}</div>` : ''}
            <div class="menu-item-meta">
              <span class="menu-item-weight">${escHtml(item.weight)}</span>
              <span class="menu-item-price">${escHtml(item.price)}</span>
            </div>
          </div>
        </div>`;
    });

    html += `
      <div class="menu-category reveal" id="${cat.id}">
        <div class="menu-category-header">
          <i class="category-icon ${cat.icon || 'ph ph-star'}"></i>
          <h3>${escHtml(cat.title)}</h3>
          ${isAlcohol ? '<div class="badge-18">18+</div>' : ''}
        </div>
        ${cat.note ? `<p style="font-size:0.8rem;color:var(--text-dim);margin-bottom:16px">${escHtml(cat.note)}</p>` : ''}
        <div class="menu-items-grid">${itemsHtml}</div>
        ${cat.footer ? `<p style="font-size:0.78rem;color:var(--text-dim);margin-top:12px;padding:12px;background:rgba(255,255,255,0.02);border-radius:8px">${escHtml(cat.footer)}</p>` : ''}
        ${isAlcohol ? `<div class="alcohol-disclaimer"><i class="ph ph-warning"></i> Чрезмерное употребление алкоголя вредит вашему здоровью. 18+</div>` : ''}
      </div>`;
  });

  container.innerHTML = html;
  initScrollReveal();
}

function escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Init page-specific modules ────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initMenuPage();
  initLightbox();
  // VK widget: init on any page that has the container
  if (document.getElementById('vk-widget')) {
    initVKWidget();
  }
});
