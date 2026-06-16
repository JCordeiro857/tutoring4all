/* Fetches /content/*.json and renders dynamic sections.
   This is what lets Cinzia's team add blog posts, tutors, testimonials,
   FAQs and pricing through the CMS without touching HTML. */

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error('Failed to load ' + path);
  return res.json();
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ── Tutor team grid (our-sydney-tutoring-team.html) ── */
async function renderTutors() {
  const grid = document.querySelector('.team-grid');
  if (!grid) return;
  const tutors = (await loadJSON('content/tutors.json')).tutors;
  grid.innerHTML = tutors.map(t => `
    <div class="team-card reveal">
      <div class="team-avatar" style="background:${t.color};">${t.image ? `<img src="${t.image}" alt="${escapeHTML(t.name)}" style="width:100%;height:100%;object-fit:cover;">` : t.emoji}</div>
      <div class="team-card-body">
        <div class="wwcc-badge">✓ WWCC Verified</div>
        <h3>${escapeHTML(t.name)}</h3>
        <div class="team-role">${escapeHTML(t.role)}</div>
        <p>${escapeHTML(t.bio)}</p>
        <div class="team-subjects">${t.subjects.map(s => `<span class="subject-tag">${escapeHTML(s)}</span>`).join('')}</div>
      </div>
    </div>`).join('');
  if (window.initReveal) initReveal();
}

/* ── Homepage Google reviews marquee (index.html) ── */
async function renderTestimonials() {
  const track = document.querySelector('.reviews-track');
  if (!track) return;
  const data = await loadJSON('content/testimonials.json');
  const visible = data.testimonials.filter(t => t.show !== false);

  const starsRow = document.querySelector('.reviews-stars-row');
  if (starsRow) {
    const rounded = Math.round(data.googleRating || 5);
    starsRow.textContent = '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }
  const googleLine = document.querySelector('.reviews-google-line');
  if (googleLine) {
    googleLine.innerHTML = `Rated ${escapeHTML(String(data.googleRating || 5))} stars on ${data.googleUrl ? `<a href="${escapeHTML(data.googleUrl)}" target="_blank" rel="noopener">Google</a>` : 'Google'}`;
  }

  const cardHTML = visible.map(t => `
    <div class="testi-card">
      <div class="stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p>"${escapeHTML(t.quote)}"</p>
      <div class="testi-author"><div class="testi-avatar">${escapeHTML(t.initial)}</div><div><strong>${escapeHTML(t.name)}</strong><span>${escapeHTML(t.role)}</span></div></div>
    </div>`).join('');
  // duplicated so the CSS marquee (translateX -50%) loops seamlessly
  track.innerHTML = cardHTML + cardHTML;
}

/* ── Homepage FAQ accordion (index.html#faqs) ── */
async function renderFAQs() {
  const list = document.querySelector('.faq-list');
  if (!list) return;
  const faqs = (await loadJSON('content/faqs.json')).faqs;
  list.innerHTML = faqs.map(f => `
    <div class="faq-item">
      <button class="faq-question">${escapeHTML(f.question)} <span class="faq-icon">+</span></button>
      <div class="faq-answer">${escapeHTML(f.answer)}</div>
    </div>`).join('');
  if (window.initFAQ) initFAQ();
}

/* ── Shop subscription pricing (shop-subscriptions.html) ── */
async function renderPricing() {
  const grid = document.querySelector('.subs-grid');
  const compareBody = document.querySelector('.compare-table tbody');
  const noteEl = document.querySelector('.pricing-note');
  if (!grid && !compareBody) return;
  const data = await loadJSON('content/pricing.json');
  if (noteEl) noteEl.textContent = data.note;

  if (grid) {
    grid.innerHTML = data.tiers.map(tier => `
      <div class="sub-card reveal${tier.featured ? ' featured' : ''}">
        ${tier.featured ? '<span class="pop-tag">Most Popular</span>' : ''}
        <div class="sub-top"${tier.featured ? ' style="padding-top:50px;"' : ''}>
          <div class="sub-medal">${tier.medal}</div>
          <h2>${escapeHTML(tier.name)}</h2>
          <span class="sub-label">${escapeHTML(tier.label)}</span>
          <p>${escapeHTML(tier.description)}</p>
        </div>
        <table class="sub-table">${tier.features.map(f => `<tr><td>${escapeHTML(f.label)}</td><td>${escapeHTML(f.value)}</td></tr>`).join('')}</table>
        <div class="sub-footer"${tier.featured ? ' style="background:var(--gold-light);border-color:#fde68a;"' : ''}>
          <a href="contact.html" class="btn ${tier.featured ? 'btn-primary' : 'btn-outline-dark'}" style="width:100%;">Enquire About ${escapeHTML(tier.name)}</a>
        </div>
      </div>`).join('');
  }
  if (window.initReveal) initReveal();
}

/* ── Blog index (blog.html) ── */
async function renderBlogIndex() {
  const grid = document.querySelector('.blog-grid');
  if (!grid) return;
  const posts = (await loadJSON('content/blog-posts.json')).posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  grid.innerHTML = posts.map(p => `
    <div class="blog-card reveal">
      <div class="blog-thumb" style="background:${p.color || 'linear-gradient(135deg,#0d2137,#1a4f82)'};">${p.emoji || '📚'}</div>
      <div class="blog-body">
        <span class="blog-date">${formatDate(p.date)}</span>
        <span class="blog-tag">${escapeHTML(p.tags[0] || '')}</span>
        <h2>${escapeHTML(p.title)}</h2>
        <p>${escapeHTML(p.excerpt)}</p>
        <a href="blog-post.html?slug=${encodeURIComponent(p.slug)}" class="read">Read more →</a>
      </div>
    </div>`).join('');
  if (window.initReveal) initReveal();
}

/* ── Single blog post (blog-post.html?slug=...) ── */
async function renderBlogPost() {
  const article = document.querySelector('.blog-post');
  if (!article) return;
  const slug = new URLSearchParams(location.search).get('slug');
  const posts = (await loadJSON('content/blog-posts.json')).posts;
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    article.innerHTML = '<p>Sorry, we couldn\'t find that post. <a href="blog.html">Back to Blog</a></p>';
    return;
  }
  document.title = post.title + ' | Tutoring4All Blog';
  article.querySelector('.blog-meta-date').textContent = '📅 ' + formatDate(post.date);
  article.querySelector('.blog-meta-tags').innerHTML = post.tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('');
  article.querySelector('h1').textContent = post.title;
  article.querySelector('.prose').innerHTML = post.body;

  const recent = document.querySelector('.recent-posts-list');
  if (recent) {
    recent.innerHTML = posts.filter(p => p.slug !== slug)
      .sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4)
      .map(p => `<div class="recent-post"><div class="rp-dot"></div><div><a href="blog-post.html?slug=${encodeURIComponent(p.slug)}">${escapeHTML(p.title)}</a><div class="rp-date">${formatDate(p.date)}</div></div></div>`).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderTutors();
  renderTestimonials();
  renderFAQs();
  renderPricing();
  renderBlogIndex();
  renderBlogPost();
});
