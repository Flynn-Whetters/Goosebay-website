<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__inner container">
      <router-link to="/" class="navbar__logo">GooseBay</router-link>

      <button
        class="navbar__toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <li><router-link to="/" @click="menuOpen = false">Home</router-link></li>
        <li><router-link to="/about" @click="menuOpen = false">About</router-link></li>
        <li><router-link to="/music" @click="menuOpen = false">Music</router-link></li>
        <li><router-link to="/shows" @click="menuOpen = false">Shows</router-link></li>
        <li><router-link to="/contact" @click="menuOpen = false">Contact</router-link></li>
      </ul>
    </div>
    <!-- Wavy bottom edge -->
  <!--  <svg class="navbar__wave" viewBox="0 0 1440 40" preserveAspectRatio="none">
      <path d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z" fill="var(--color-purple)"/>
    </svg>
    -->
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
svg {
  transform: scaleY(-1);
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  background: var(--color-purple);
  transition: all 0.4s ease;
}

.navbar--scrolled {
  background: rgba(123, 63, 191, 0.97);
  backdrop-filter: blur(10px);
  padding: 0.7rem 0;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--color-yellow);
  text-decoration: none;
  letter-spacing: 0.03em;
  text-shadow: 2px 2px 0 var(--color-orange);
  transition: transform 0.3s ease;
}

.navbar__logo:hover {
  color: var(--color-yellow);
  transform: scale(1.05);
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: 1.8rem;
}

.navbar__links a {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--color-cream);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  position: relative;
  transition: color 0.3s ease, transform 0.2s ease;
}

.navbar__links a::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: var(--color-yellow);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.navbar__links a:hover {
  color: var(--color-yellow);
  transform: translateY(-2px);
}

.navbar__links a.router-link-exact-active {
  color: var(--color-yellow);
}

.navbar__links a:hover::after,
.navbar__links a.router-link-exact-active::after {
  width: 100%;
}

/* Wavy bottom edge */
.navbar__wave {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 30px;
  display: block;
  transform: scaleY(-1);
  pointer-events: none;
}

/* Hamburger */
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__toggle span {
  display: block;
  width: 28px;
  height: 3px;
  background: var(--color-cream);
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    height: 100vh;
    flex-direction: column;
    background: var(--color-purple);
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    transition: right 0.4s ease;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  }

  .navbar__links--open {
    right: 0;
  }
}
</style>
