<template>
  <footer class="footer">
    <div class="footer__wave"></div>
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <h3 class="footer__logo">GooseBay</h3>
          <p class="footer__tagline">Indie Rock · Australia</p>
        </div>

        <div class="footer__socials">
          <a
            href="https://www.instagram.com/goosebay.band/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@goosebay.band"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.57a8.24 8.24 0 004.76 1.5V7.64a4.85 4.85 0 01-1-.95z"/>
            </svg>
          </a>
          <a
            href="https://linktr.ee/goosebayband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linktree"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M7.953 15.066l-.038-4.28 4.093-.006.004-2.173-4.09.01-.04-4.26L3.67 8.62l-2.248-2.19L0 7.876l4.684 4.57-.005 2.612 3.274.008zM16.047 15.066l.038-4.28-4.093-.006-.004-2.173 4.09.01.04-4.26 4.212 4.263 2.248-2.19L24 7.876l-4.684 4.57.005 2.612-3.274.008zM10.578 19.2h2.836v-7.15h-2.836z"/>
            </svg>
          </a>
        </div>

        <nav class="footer__nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/music">Music</router-link>
          <router-link to="/shows">Shows</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>

      <hr class="divider" style="margin-top: 2rem;" />

      <p class="footer__copy">&copy; {{ year }} GooseBay. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-purple);
  padding: 3rem 0 1.5rem;
  position: relative;
  color: var(--color-cream);
}

.footer__wave {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
  overflow: hidden;
}

.footer__wave::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: var(--color-purple);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  transform: scaleX(1.5);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--color-yellow);
  text-shadow: 2px 2px 0 var(--color-orange);
}

.footer__tagline {
  font-size: 0.85rem;
  color: var(--color-cream);
  opacity: 0.7;
  margin-top: 0.25rem;
}

.footer__socials {
  display: flex;
  gap: 1rem;
}

.footer__socials a {
  color: var(--color-cream);
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer__socials a:hover {
  color: var(--color-yellow);
  transform: scale(1.2) rotate(-5deg);
}

.footer__nav {
  display: flex;
  gap: 1.5rem;
}

.footer__nav a {
  font-family: var(--font-display);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-cream);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.footer__nav a:hover {
  opacity: 1;
  color: var(--color-yellow);
  transform: translateY(-2px);
}

.footer__copy {
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-cream);
  opacity: 0.5;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }

  .footer__nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
