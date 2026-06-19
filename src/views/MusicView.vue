<template>
  <div class="music">
    <!-- Header -->
    <section class="page-header">
      <div class="container text-center">
        <h1 class="accent">Music</h1>
        <hr class="divider" />
        <p style="margin-top: 1rem; opacity: 0.8;">
          Every track, every release all in one place.
        </p>
      </div>
    </section>

    <!-- Spotify Artist Embed -->
    <section class="section">
      <div class="container">
        <div class="spotify-embed" data-reveal>
          <iframe
            style="border-radius: 12px;"
            src="https://open.spotify.com/embed/artist/4Mwja4fqC3KdOBAxY1dfQj?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Releases -->
    <section class="section section--purple">
      <div class="container">
        <div class="releases">
          <div
            class="release"
            v-for="(release, i) in releases"
            :key="release.title"
            data-reveal
            :data-delay="String(Math.min(i, 3))"
          >
            <div class="release__art">
              <iframe
                style="border-radius: 8px;"
                :src="release.embedUrl"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                v-if="release.embedUrl"
              ></iframe>
              <div class="release__placeholder" v-else>{{ release.emoji }}</div>
            </div>
            <div class="release__info">
              <span class="release__type">{{ release.type }}</span>
              <h3>{{ release.title }}</h3>
              <p class="release__year">{{ release.year }}</p>
              <p class="release__desc">{{ release.description }}</p>
              <div class="release__links">
                <a
                  v-for="link in release.links"
                  :key="link.label"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn"
                >
                  {{ link.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="releases.length === 0" class="text-center" style="padding: 4rem 0;">
          <p style="font-size: 3rem;">🎶</p>
          <h3 class="accent" style="margin-top: 1rem;">Coming Soon</h3>
          <p style="margin-top: 0.5rem; opacity: 0.7;">
            New music is in the works. Follow us to be the first to hear it.
          </p>
        </div>
      </div>
    </section>

    <!-- YouTube Video -->
    <section class="section text-center">
      <div class="container">
        <h2 class="accent">Latest Video</h2>
        <hr class="divider" />
        <div class="video-embed" data-reveal>
          <iframe
            src="https://www.youtube.com/embed/tMegEEow0Vk"
            title="GooseBay — Latest Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Streaming CTA -->
    <section class="section section--orange text-center">
      <div class="container">
        <h2 style="color: var(--color-off-black);">Stream Everywhere</h2>
        <hr class="divider" style="background: var(--color-purple);" />
        <p style="margin: 1rem auto 2rem; max-width: 500px;">
          Find GooseBay on your favourite platform.
        </p>
        <div class="stream-platforms" data-reveal>
          <a href="https://open.spotify.com/artist/4Mwja4fqC3KdOBAxY1dfQj" target="_blank" rel="noopener noreferrer" class="btn">Spotify</a>
          <a href="#" class="btn">Apple Music</a>
          <a href="https://www.youtube.com/@goosebayband" target="_blank" rel="noopener noreferrer" class="btn">YouTube</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import '../assets/css/music.css'
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()

const releases = ref([
  {
    title: 'First Single',
    type: 'Single',
    year: '2025',
    emoji: '💿',
    description: 'The debut track that started it all.',
    embedUrl: 'https://open.spotify.com/embed/track/0gPsjwgNIe81Z87awpBytQ?utm_source=generator',
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/track/0gPsjwgNIe81Z87awpBytQ' },
    ],
  },
])
</script>
