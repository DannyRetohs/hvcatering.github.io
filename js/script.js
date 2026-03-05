/* ── Navbar scroll ── */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

/* ── Scroll reveal ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── Menu tabs ── */
function switchTab(btn, id) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('menu-' + id).classList.add('active');
}

/* ── WhatsApp Modal ── */
function openWaModal() {
  document.getElementById('waModal').classList.add('open');
}

function closeWaModal() {
  document.getElementById('waModal').classList.remove('open');
}

function sendWhatsApp() {
  const name = document.getElementById('waNombre').value.trim();
  const surname = document.getElementById('waApellido').value.trim();

  // Base text
  let text = 'Hola, me interesa sus servicios.';

  if (name || surname) {
    text = `Hola, soy ${name} ${surname}, me interesa sus servicios.`.trim().replace(/\s+/g, ' ');
  }

  const phone = '12142583729';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
  closeWaModal();
}

/* ── Contact form ── */
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Solicitud enviada ✓';
  btn.style.background = '#2a7a2a';
  btn.style.color = '#fff';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar solicitud';
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}
