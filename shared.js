/* Injects shared nav + footer into every page */
(function () {
  const thisScript = document.currentScript;
  const NAV_HTML = `
  <div class="topbar">
    <div class="topbar-inner">
      <div class="topbar-contact">
        <span>📞 <a href="tel:0490423713">0490 423 713</a></span>
        <span>✉️ <a href="mailto:info@Tutoring4All.com.au">info@Tutoring4All.com.au</a></span>
        <span>📍 Five Dock, NSW</span>
      </div>
      <div class="topbar-social">
        <a href="https://www.facebook.com/Tutoring4All" target="_blank" rel="noopener" title="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg></a>
        <a href="https://www.instagram.com/Tutoring4All" target="_blank" rel="noopener" title="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.46.66.25 1.22.6 1.77 1.15.5.5.84 1.02 1.1 1.71.24.62.4 1.34.45 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.09-.21 1.81-.45 2.43a4.6 4.6 0 0 1-1.1 1.71 4.65 4.65 0 0 1-1.77 1.15c-.64.24-1.37.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.46a4.6 4.6 0 0 1-1.71-1.1 4.6 4.6 0 0 1-1.15-1.76c-.24-.62-.4-1.34-.45-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.09.21-1.81.45-2.43.25-.69.6-1.21 1.15-1.71a4.65 4.65 0 0 1 1.71-1.15c.64-.24 1.37-.41 2.43-.46C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.93.04-1.43.2-1.77.33-.45.17-.77.38-1.1.71-.34.34-.55.66-.71 1.1-.13.34-.3.84-.34 1.77C4 8.82 4 9.14 4 12s0 3.18.04 4.22c.04.93.21 1.43.34 1.77.16.45.37.77.71 1.1.33.34.65.55 1.1.71.34.13.84.3 1.77.34 1.05.04 1.37.06 4.04.06s2.99-.02 4.04-.06c.93-.04 1.43-.21 1.77-.34.45-.16.77-.37 1.1-.71.34-.33.55-.65.71-1.1.13-.34.3-.84.34-1.77.04-1.04.06-1.37.06-4.22s-.02-3.18-.06-4.22c-.04-.93-.21-1.43-.34-1.77a2.9 2.9 0 0 0-.71-1.1 2.9 2.9 0 0 0-1.1-.71c-.34-.13-.84-.29-1.77-.33-1.05-.05-1.37-.06-4.04-.06ZM12 6.87a5.13 5.13 0 1 1 0 10.26 5.13 5.13 0 0 1 0-10.26Zm0 1.8a3.33 3.33 0 1 0 0 6.66 3.33 3.33 0 0 0 0-6.66Zm5.34-2.03a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"/></svg></a>
      </div>
    </div>
  </div>
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="logo"><img src="TUTORING-4ALL-transaparent-800x200px-WHITE-writing.png" alt="Tutoring4All Logo" /></a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li>
          <a href="about.html">About <span class="arrow">▾</span></a>
          <div class="dropdown">
            <a href="about.html">About Our Tutoring Services</a>
            <a href="our-sydney-tutoring-team.html">Our Sydney Tutoring Team</a>
          </div>
        </li>
        <li>
          <a href="home-tutoring-services.html">Services <span class="arrow">▾</span></a>
          <div class="dropdown">
            <a href="home-tutoring-services.html">Home Tutoring Services</a>
            <a href="primary-school-tutoring.html">Primary School Tutoring</a>
            <a href="high-school-tutoring.html">High School Tutoring</a>
          </div>
        </li>
        <li><a href="online-resources.html">Online Resources</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li>
          <a href="index.html#faqs">FAQs <span class="arrow">▾</span></a>
          <div class="dropdown">
            <a href="index.html#faqs">Frequently Asked Questions</a>
            <a href="cancellation-policy.html">Cancellation Policy</a>
            <a href="code-of-conduct.html">Code of Conduct</a>
            <a href="child-protection-policy.html">Child Protection Policy</a>
          </div>
        </li>
        <li><a href="shop-subscriptions.html">Shop</a></li>
        <li><a href="contact.html" class="nav-cta">Contact Us</a></li>
        <li><a href="become-a-tutor.html">Become a Tutor</a></li>
      </ul>
      <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <button class="mobile-close" onclick="toggleMenu()">✕</button>
    <a href="index.html">Home</a>
    <span class="mobile-section-label">About</span>
    <a href="about.html" class="mobile-sub">About Our Tutoring Services</a>
    <a href="our-sydney-tutoring-team.html" class="mobile-sub">Our Sydney Tutoring Team</a>
    <span class="mobile-section-label">Services</span>
    <a href="home-tutoring-services.html" class="mobile-sub">Home Tutoring Services</a>
    <a href="primary-school-tutoring.html" class="mobile-sub">Primary School Tutoring</a>
    <a href="high-school-tutoring.html" class="mobile-sub">High School Tutoring</a>
    <a href="online-resources.html">Online Resources</a>
    <a href="blog.html">Blog</a>
    <span class="mobile-section-label">FAQs</span>
    <a href="index.html#faqs" class="mobile-sub">Frequently Asked Questions</a>
    <a href="cancellation-policy.html" class="mobile-sub">Cancellation Policy</a>
    <a href="code-of-conduct.html" class="mobile-sub">Code of Conduct</a>
    <a href="child-protection-policy.html" class="mobile-sub">Child Protection Policy</a>
    <a href="shop-subscriptions.html">Shop Subscriptions</a>
    <a href="contact.html">Contact Us</a>
    <a href="become-a-tutor.html">Become a Tutor</a>
  </div>`;

  const FOOTER_HTML = `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo"><img src="TUTORING-4ALL-transaparent-800x200px-WHITE-writing.png" alt="Tutoring4All" /></div>
          <p>Private in-home and online tutoring across Sydney since 2013. Helping students from Kindergarten to Year 12 reach their full potential.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/Tutoring4All" target="_blank" rel="noopener" title="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg></a>
            <a href="https://www.instagram.com/Tutoring4All" target="_blank" rel="noopener" title="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.46.66.25 1.22.6 1.77 1.15.5.5.84 1.02 1.1 1.71.24.62.4 1.34.45 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.09-.21 1.81-.45 2.43a4.6 4.6 0 0 1-1.1 1.71 4.65 4.65 0 0 1-1.77 1.15c-.64.24-1.37.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.46a4.6 4.6 0 0 1-1.71-1.1 4.6 4.6 0 0 1-1.15-1.76c-.24-.62-.4-1.34-.45-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.09.21-1.81.45-2.43.25-.69.6-1.21 1.15-1.71a4.65 4.65 0 0 1 1.71-1.15c.64-.24 1.37-.41 2.43-.46C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.93.04-1.43.2-1.77.33-.45.17-.77.38-1.1.71-.34.34-.55.66-.71 1.1-.13.34-.3.84-.34 1.77C4 8.82 4 9.14 4 12s0 3.18.04 4.22c.04.93.21 1.43.34 1.77.16.45.37.77.71 1.1.33.34.65.55 1.1.71.34.13.84.3 1.77.34 1.05.04 1.37.06 4.04.06s2.99-.02 4.04-.06c.93-.04 1.43-.21 1.77-.34.45-.16.77-.37 1.1-.71.34-.33.55-.65.71-1.1.13-.34.3-.84.34-1.77.04-1.04.06-1.37.06-4.22s-.02-3.18-.06-4.22c-.04-.93-.21-1.43-.34-1.77a2.9 2.9 0 0 0-.71-1.1 2.9 2.9 0 0 0-1.1-.71c-.34-.13-.84-.29-1.77-.33-1.05-.05-1.37-.06-4.04-.06ZM12 6.87a5.13 5.13 0 1 1 0 10.26 5.13 5.13 0 0 1 0-10.26Zm0 1.8a3.33 3.33 0 1 0 0 6.66 3.33 3.33 0 0 0 0-6.66Zm5.34-2.03a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="primary-school-tutoring.html">Primary School Tutoring</a></li>
            <li><a href="high-school-tutoring.html">High School & HSC</a></li>
            <li><a href="online-resources.html">Online Resources</a></li>
            <li><a href="shop-subscriptions.html">Shop Subscriptions</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="our-sydney-tutoring-team.html">Our Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="become-a-tutor.html">Become a Tutor</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Policies</h4>
          <ul>
            <li><a href="index.html#faqs">FAQs</a></li>
            <li><a href="cancellation-policy.html">Cancellation Policy</a></li>
            <li><a href="code-of-conduct.html">Code of Conduct</a></li>
            <li><a href="child-protection-policy.html">Child Protection</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Tutoring4All. All rights reserved. Head Office: Five Dock, NSW, Sydney.</span>
        <span><a href="cancellation-policy.html">Cancellation Policy</a> · <a href="code-of-conduct.html">Code of Conduct</a> · <a href="child-protection-policy.html">Child Protection</a></span>
      </div>
    </div>
  </footer>`;

  function inject() {
    const body = document.body;

    // Nav goes right before the script tag that loaded this file (top of page)
    const navDiv = document.createElement('div');
    navDiv.innerHTML = NAV_HTML;
    const anchor = thisScript || document.querySelector('script[src*="shared.js"]');
    body.insertBefore(navDiv, anchor);

    // Footer goes at the very end, after all page content has been parsed
    const footerDiv = document.createElement('div');
    footerDiv.innerHTML = FOOTER_HTML;
    body.appendChild(footerDiv);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
