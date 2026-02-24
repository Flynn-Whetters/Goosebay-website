<template>
  <div class="home">
    <!-- ===== HERO ===== -->
    <section class="hero">
      <img :src="heroBg" alt="" class="hero__bg" />
      <div class="hero__overlay"></div>
      <div class="hero__blobs">
        <div class="hero__blob hero__blob--1"></div>
        <div class="hero__blob hero__blob--2"></div>
        <div class="hero__blob hero__blob--3"></div>
      </div>
      <div class="hero__content container fade-in-up">
        <p class="hero__kicker">Indie Rock · Australia</p>
        <h1 class="hero__title">Goose<span>Bay</span></h1>
        <p class="hero__sub">
          Sun-drenched riffs, late-night drives, and the sound of the coast.
        </p>
        <div class="hero__actions">
          <router-link to="/music" class="btn btn--filled">Listen Now</router-link>
          <router-link to="/shows" class="btn btn--yellow">Upcoming Shows</router-link>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <span>↓</span>
      </div>
    </section>

    <!-- ===== Wavy Divider ===== -->
    <div class="wave-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" fill="var(--color-cream)"/>
      </svg>
    </div>

    <!-- ===== ABOUT TEASER ===== -->
    <section class="section text-center">
      <div class="container">
        <h2 class="accent">The Band</h2>
        <hr class="divider" />
        <p style="margin: 1.5rem auto 2rem; max-width: 600px;">
          Born out of backyard jams and coastal sunsets, GooseBay blends nostalgic
          warmth with driving indie rock — think fuzzy guitars, sing-along hooks,
          and golden-hour energy.
        </p>
        <router-link to="/about" class="btn">Meet the Band</router-link>
      </div>
    </section>

    <!-- ===== LATEST MUSIC TEASER ===== -->
    <section class="section section--purple text-center">
      <div class="container">
        <h2 class="accent-yellow">Latest Music</h2>
        <hr class="divider" style="background: var(--color-yellow);" />
        <div class="music-teaser">
          <div class="music-teaser__card">
            <div class="music-teaser__art">
              <div class="music-teaser__placeholder">🎵</div>
            </div>
            <h3>New Single</h3>
            <p class="music-teaser__meta">Coming Soon</p>
            <p>
              Stay tuned — something special is on its way.
            </p>
          </div>
        </div>
        <router-link to="/music" class="btn btn--yellow" style="margin-top: 2rem;">
          All Releases
        </router-link>
      </div>
    </section>

    <!-- ===== GALLERY ===== -->
    <section class="section text-center">
      <div class="container">
        <h2 class="accent-orange">Gallery</h2>
        <hr class="divider" />
        <div class="gallery">
          <div class="gallery__frame">
            <transition name="gallery-fade" mode="out-in">
              <img
                :src="galleryImages[currentImage]"
                :key="currentImage"
                alt="GooseBay promo photo"
                class="gallery__img"
              />
            </transition>
          </div>
          <div class="gallery__controls">
            <button class="gallery__btn" @click="prev" aria-label="Previous image">←</button>
            <span class="gallery__counter">{{ currentImage + 1 }} / {{ galleryImages.length }}</span>
            <button class="gallery__btn" @click="next" aria-label="Next image">→</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== INSTAGRAM / SOCIAL CTA ===== -->
    <section class="section section--orange text-center">
      <div class="container">
        <h2 style="color: var(--color-off-black);">Follow the Journey</h2>
        <hr class="divider" style="background: var(--color-purple);" />
        <p style="margin: 1rem auto 2rem; max-width: 500px;">
          Catch behind-the-scenes moments, gig announcements, and the occasional
          questionable band selfie.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a
            href="https://www.instagram.com/goosebay.band/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@goosebay.band"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            TikTok
          </a>
          <a
            href="https://linktr.ee/goosebayband"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Linktree
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import heroBg from '../assets/Images/banckground.webp'

// Gallery images from Dance wth you promo revised
import img01 from '../assets/images/Dance wth you promo revised/C001580-R1-14-14A.png'
import img02 from '../assets/images/Dance wth you promo revised/C001580-R1-16-16A.png'
import img03 from '../assets/images/Dance wth you promo revised/C001580-R1-17-17A.png'
import img04 from '../assets/images/Dance wth you promo revised/C001580-R1-20-20A.png'
import img05 from '../assets/images/Dance wth you promo revised/C001582-R1-10-11A.png'
import img06 from '../assets/images/Dance wth you promo revised/DSCF2973.png'
import img07 from '../assets/images/Dance wth you promo revised/DSCF2992.png'
import img08 from '../assets/images/Dance wth you promo revised/DSCF2993.png'
import img09 from '../assets/images/Dance wth you promo revised/DSCF2995.png'
import img10 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-30.png'
import img11 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-32.png'
import img12 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-33.png'
import img13 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-34.png'
import img14 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-36.png'
import img15 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-37.png'
import img16 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-38.png'
import img17 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-39.png'
import img18 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-40-2.png'
import img19 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-40.png'
import img20 from '../assets/images/Dance wth you promo revised/Goose_Bay_BTS-43.png'

const galleryImages = [
  img01, img02, img03, img04, img05,
  img06, img07, img08, img09, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
]

const currentImage = ref(0)
let timer = null

function next() {
  currentImage.value = (currentImage.value + 1) % galleryImages.length
}

function prev() {
  currentImage.value = (currentImage.value - 1 + galleryImages.length) % galleryImages.length
}

function startAutoplay() {
  timer = setInterval(next, 4000)
}

function stopAutoplay() {
  if (timer) clearInterval(timer)
}

onMounted(() => startAutoplay())
onUnmounted(() => stopAutoplay())
</script>

<style scoped>
/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-purple);
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 25% 80%, rgba(242, 140, 40, 0.25), transparent 55%),
    radial-gradient(ellipse at 75% 20%, rgba(123, 63, 191, 0.3), transparent 50%),
    rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.hero__blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}
.hero__blob--1 {
  width: 500px; height: 500px;
  background: var(--color-orange);
  top: -10%; left: -5%;
  animation: blobFloat 8s ease-in-out infinite alternate;
}
.hero__blob--2 {
  width: 400px; height: 400px;
  background: var(--color-yellow);
  bottom: -5%; right: -5%;
  animation: blobFloat 10s ease-in-out infinite alternate-reverse;
}
.hero__blob--3 {
  width: 300px; height: 300px;
  background: var(--color-blue);
  top: 30%; right: 20%;
  animation: blobFloat 12s ease-in-out infinite alternate;
}

@keyframes blobFloat {
  0%   { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, -20px) scale(1.1); }
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero__kicker {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-yellow);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.hero__title {
  font-size: clamp(3.5rem, 10vw, 8rem);
  color: var(--color-cream);
  text-shadow: 4px 4px 0 var(--color-orange), 0 0 40px rgba(242, 140, 40, 0.3);
  line-height: 1;
}
.hero__title span {
  color: var(--color-yellow);
}

.hero__sub {
  max-width: 520px;
  margin: 1.25rem auto 2rem;
  font-size: 1.15rem;
  color: rgba(245, 230, 211, 0.9);
}

.hero__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  font-size: 1.4rem;
  color: var(--color-yellow);
  opacity: 0.7;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%      { transform: translateX(-50%) translateY(10px); }
}

/* ---------- Wave Divider ---------- */
.wave-divider {
  margin-top: -2px;
  background: var(--color-purple);
  line-height: 0;
}
.wave-divider svg {
  width: 100%;
  height: 60px;
  display: block;
}

/* ---------- Music Teaser ---------- */
.music-teaser {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.music-teaser__card {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: var(--radius-lg);
  padding: 2rem;
  max-width: 360px;
  width: 100%;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: var(--color-cream);
}

.music-teaser__card:hover {
  transform: translateY(-6px) rotate(-1deg);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
}

.music-teaser__art {
  width: 100%;
  aspect-ratio: 1;
  background: rgba(0, 0, 0, 0.25);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  overflow: hidden;
}

.music-teaser__placeholder {
  font-size: 3rem;
}

.music-teaser__meta {
  font-size: 0.85rem;
  color: var(--color-yellow);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0.25rem 0 0.75rem;
  font-weight: 700;
}

/* ---------- Helper Classes ---------- */
.accent-yellow {
  color: var(--color-yellow);
}

.accent-orange {
  color: var(--color-orange);
}

/* ---------- Gallery ---------- */
.gallery {
  margin-top: 2rem;
}

.gallery__frame {
  max-width: 800px;
  margin: 0 auto;
  aspect-ratio: 3/2;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 4px solid var(--color-purple);
  background: var(--color-off-black);
  box-shadow: 6px 6px 0 var(--color-orange);
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.gallery__btn {
  background: var(--color-purple);
  border: none;
  color: var(--color-cream);
  font-size: 1.2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  box-shadow: 3px 3px 0 var(--color-orange);
}

.gallery__btn:hover {
  background: var(--color-orange);
  color: var(--color-off-black);
  transform: scale(1.1);
  box-shadow: 3px 3px 0 var(--color-purple);
}

.gallery__counter {
  font-size: 0.9rem;
  color: var(--color-off-black);
  opacity: 0.6;
  letter-spacing: 0.1em;
  font-weight: 700;
}

/* Gallery crossfade transition */
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 0.5s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
}
</style>
