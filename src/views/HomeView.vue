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

    <!-- ===== Wave Divider ===== -->
    <div class="wave-divider">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" fill="var(--color-cream)"/>
      </svg>
    </div>

    <!-- ===== MARQUEE STRIP ===== -->
    <div class="marquee-strip" aria-hidden="true">
      <div class="marquee-strip__track">
        <img
          v-for="(img, i) in marqueeImages"
          :key="i"
          :src="img"
          class="marquee-strip__img"
          alt=""
        />
      </div>
    </div>

    <!-- ===== ABOUT TEASER ===== -->
    <section class="section">
      <div class="container about-teaser">
        <div class="about-teaser__image">
          <img :src="img10" alt="GooseBay live" class="about-teaser__img" />
        </div>
        <div class="about-teaser__text">
          <span class="section-label">The Band</span>
          <h2>Born from the coast</h2>
          <hr class="divider" />
          <p>
            Born out of backyard jams and coastal sunsets, GooseBay blends
            nostalgic warmth with driving indie rock — think fuzzy guitars,
            sing-along hooks, and golden-hour energy.
          </p>
          <router-link to="/about" class="btn">Meet the Band</router-link>
        </div>
      </div>
    </section>

    <!-- ===== LATEST VIDEO ===== -->
    <section class="section section--purple text-center">
      <div class="container">
        <span class="section-label" style="border-color: var(--color-yellow); color: var(--color-yellow);">Watch</span>
        <h2 class="accent-yellow">Latest Video</h2>
        <hr class="divider" style="background: var(--color-yellow);" />
        <div class="video-embed">
          <iframe
            src="https://www.youtube.com/embed/tMegEEow0Vk"
            title="GooseBay — Latest Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <router-link to="/music" class="btn btn--yellow" style="margin-top: 2.5rem;">
          All Releases
        </router-link>
      </div>
    </section>

    <!-- ===== GALLERY ===== -->
    <section class="section text-center">
      <div class="container">
        <span class="section-label">Photos</span>
        <h2 class="accent-orange">Gallery</h2>
        <hr class="divider" />
        <div
          class="gallery"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <div class="gallery__frame" @click="next">
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
            <button class="gallery__btn" @click="prev" aria-label="Previous image">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div class="gallery__scrubber">
              <div class="gallery__scrubber-track">
                <div
                  class="gallery__scrubber-fill"
                  :style="{ width: ((currentImage + 1) / galleryImages.length * 100) + '%' }"
                ></div>
              </div>
              <span class="gallery__counter">{{ currentImage + 1 }} / {{ galleryImages.length }}</span>
            </div>
            <button class="gallery__btn" @click="next" aria-label="Next image">
              <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SOCIAL CTA ===== -->
    <section class="section section--orange text-center">
      <div class="container">
        <span class="section-label" style="border-color: var(--color-off-black); color: var(--color-off-black);">Stay Connected</span>
        <h2 style="color: var(--color-off-black);">Follow the Journey</h2>
        <hr class="divider" style="background: var(--color-purple);" />
        <p style="margin: 1rem auto 0; max-width: 480px;">
          Catch behind-the-scenes moments, gig announcements, and the occasional
          questionable band selfie.
        </p>
        <div class="social-cta__grid">
          <a href="https://www.instagram.com/goosebay.band/" target="_blank" rel="noopener noreferrer" class="btn">Instagram</a>
          <a href="https://www.tiktok.com/@goosebay.band" target="_blank" rel="noopener noreferrer" class="btn">TikTok</a>
          <a href="https://www.youtube.com/@goosebayband" target="_blank" rel="noopener noreferrer" class="btn">YouTube</a>
          <a href="https://linktr.ee/goosebayband" target="_blank" rel="noopener noreferrer" class="btn">Linktree</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import '../assets/css/home.css'
import { ref, onMounted, onUnmounted } from 'vue'
import heroBg from '../assets/Images/banckground.webp'

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

const marqueeImages = [...galleryImages, ...galleryImages]

const currentImage = ref(0)
let timer = null

function next() {
  currentImage.value = (currentImage.value + 1) % galleryImages.length
}

function prev() {
  currentImage.value = (currentImage.value - 1 + galleryImages.length) % galleryImages.length
}

function startAutoplay() {
  timer = setInterval(next, 4500)
}

function stopAutoplay() {
  if (timer) clearInterval(timer)
}

onMounted(() => startAutoplay())
onUnmounted(() => stopAutoplay())
</script>
