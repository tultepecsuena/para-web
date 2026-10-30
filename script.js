(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
  const tabs = [...document.querySelectorAll('.day-tab')];
  const events = [...document.querySelectorAll('[data-event-day]')];
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const day = tab.dataset.day;
    tabs.forEach(t => { const active = t === tab; t.classList.toggle('is-active', active); t.setAttribute('aria-selected', String(active)); });
    events.forEach(event => { event.hidden = day !== 'all' && event.dataset.eventDay !== day; });
  }));
  const target = new Date('2026-11-20T16:00:00-06:00').getTime();
  const fields = { days: document.getElementById('days'), hours: document.getElementById('hours'), minutes: document.getElementById('minutes'), seconds: document.getElementById('seconds') };
  function updateCountdown() {
    const diff = target - Date.now();
    if (diff <= 0) {
      Object.values(fields).forEach(el => { if (el) el.textContent = '00'; });
      const label = document.querySelector('.countdown>p'); if (label) label.textContent = '¡La celebración ya comenzó!';
      return;
    }
    const values = { days: Math.floor(diff / 86400000), hours: Math.floor(diff % 86400000 / 3600000), minutes: Math.floor(diff % 3600000 / 60000), seconds: Math.floor(diff % 60000 / 1000) };
    Object.entries(values).forEach(([key, value]) => { if (fields[key]) fields[key].textContent = String(value).padStart(2, '0'); });
  }
  updateCountdown(); window.setInterval(updateCountdown, 1000);
})();
