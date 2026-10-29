(() => {
  const menu = window.restaurantMenu || [];
  const tabs = document.querySelector('#menu-tabs');
  const panel = document.querySelector('#menu-panel');
  let activeIndex = 0;

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const itemMarkup = (item) => `<div class="menu-item"><div class="menu-item-name">${escapeHTML(item[0])}${item[1] ? `<span class="menu-item-note">${escapeHTML(item[1])}</span>` : ''}</div>${item[2] ? `<div class="menu-price">${escapeHTML(item[2])}</div>` : ''}</div>`;

  function renderCategory(index, moveFocus = false) {
    activeIndex = index;
    const category = menu[index];
    [...tabs.children].forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    if (moveFocus) tabs.children[index].focus();
    panel.setAttribute('aria-labelledby', `tab-${category.id}`);
    const groups = category.groups || [{label: '', items: category.items || []}];
    const content = groups.map(group => `<div class="menu-group">${group.label ? `<h4>${escapeHTML(group.label)}</h4>` : ''}<div class="menu-list">${group.items.map(itemMarkup).join('')}</div></div>`).join('');
    panel.innerHTML = `<h3>${escapeHTML(category.title)}</h3>${category.note ? `<p class="category-note">${escapeHTML(category.note)}</p>` : ''}${content}`;
  }

  menu.forEach((category, index) => {
    const button = document.createElement('button');
    button.className = 'menu-tab';
    button.type = 'button';
    button.id = `tab-${category.id}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', 'menu-panel');
    button.textContent = category.label;
    button.addEventListener('click', () => renderCategory(index));
    button.addEventListener('keydown', (event) => {
      let next = activeIndex;
      if (event.key === 'ArrowRight') next = (activeIndex + 1) % menu.length;
      else if (event.key === 'ArrowLeft') next = (activeIndex - 1 + menu.length) % menu.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = menu.length - 1;
      else return;
      event.preventDefault();
      renderCategory(next, true);
    });
    tabs.append(button);
  });
  if (menu.length) renderCategory(0);

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    nav.classList.remove('open');
  }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: 0.12, rootMargin: '0px 0px -35px 0px'});
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));
})();
