<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <!-- Brand -->
        <div class="footer__brand">
          <span class="footer__logo">GooseBay</span>
          <p class="footer__tagline">Indie Rock · Australia</p>
        </div>

        <!-- Socials -->
        <div class="footer__socials">
          <p class="footer__socials-label">Follow us</p>
          <div class="footer__socials-icons">
            <a href="https://www.instagram.com/goosebay.band/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@goosebay.band" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.57a8.24 8.24 0 004.76 1.5V7.64a4.85 4.85 0 01-1-.95z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@goosebayband" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linktr.ee/goosebayband" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M7.953 15.066l-.038-4.28 4.093-.006.004-2.173-4.09.01-.04-4.26L3.67 8.62l-2.248-2.19L0 7.876l4.684 4.57-.005 2.612 3.274.008zM16.047 15.066l.038-4.28-4.093-.006-.004-2.173 4.09.01.04-4.26 4.212 4.263 2.248-2.19L24 7.876l-4.684 4.57.005 2.612-3.274.008zM10.578 19.2h2.836v-7.15h-2.836z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Nav -->
        <nav class="footer__nav">
          <p class="footer__nav-label">Navigate</p>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/music">Music</router-link>
          <router-link to="/shows">Shows</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">&copy; {{ year }} GooseBay. All rights reserved.</p>
        <p class="footer__made">Made with ♥ in Australia</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import '../assets/css/footer.css'
const year = new Date().getFullYear()
</script>
