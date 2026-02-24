<template>
  <div class="music">
    <!-- Header -->
    <section class="page-header">
      <div class="container text-center">
        <h1 class="accent">Music</h1>
        <hr class="divider" />
        <p style="margin-top: 1rem; opacity: 0.8;">
          Every track, every release — all in one place.
        </p>
      </div>
    </section>

    <!-- Spotify Artist Embed -->
    <section class="section">
      <div class="container">
        <div class="spotify-embed">
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
            v-for="release in releases"
            :key="release.title"
          >
            <div class="release__art">
              <iframe
                style="border-radius: 8px;"
                :src="release.embedUrl"
                width="100%"
                height="280"
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

    <!-- Streaming CTA -->
    <section class="section section--orange text-center">
      <div class="container">
        <h2 style="color: var(--color-off-black);">Stream Everywhere</h2>
        <hr class="divider" style="background: var(--color-purple);" />
        <p style="margin: 1rem auto 2rem; max-width: 500px;">
          Find GooseBay on your favourite platform.
        </p>
        <div class="stream-platforms">
          <a href="https://open.spotify.com/artist/4Mwja4fqC3KdOBAxY1dfQj" target="_blank" rel="noopener noreferrer" class="btn">Spotify</a>
          <a href="#" class="btn">Apple Music</a>
          <a href="#" class="btn">YouTube</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// TODO: Replace with real releases
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
  // Add more releases here:
  // {
  //   title: 'EP Title',
  //   type: 'EP',
  //   year: '2025',
  //   emoji: '📀',
  //   description: 'Description goes here.',
  //   links: [],
  // },
])
</script>

<style scoped>
.page-header {
  padding: calc(var(--space-xl) + 2rem) 0 var(--space-md);
}

/* Spotify Embed */
.spotify-embed {
  max-width: 700px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 6px 6px 0 var(--color-purple);
}

/* Releases */
.releases {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.release {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  color: var(--color-cream);
}

.release:hover {
  transform: translateY(-5px) rotate(-0.5deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.release__art {
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-md);
  overflow: hidden;
  min-height: 280px;
}

.release__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.release__type {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-yellow);
  font-weight: 700;
}

.release__info h3 {
  margin-top: 0.25rem;
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-cream);
}

.release__year {
  font-size: 0.85rem;
  opacity: 0.6;
  margin-top: 0.1rem;
}

.release__desc {
  margin-top: 0.75rem;
  font-size: 0.95rem;
  opacity: 0.85;
}

.release__links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}

.release__links .btn {
  padding: 0.5rem 1.2rem;
  font-size: 0.8rem;
}

/* Stream platforms */
.stream-platforms {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .release {
    grid-template-columns: 1fr;
  }

  .release__art {
    max-width: 280px;
  }
}
</style>
