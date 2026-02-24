<template>
  <div class="shows">
    <!-- Header -->
    <section class="page-header">
      <div class="container text-center">
        <h1 class="accent-orange">Shows</h1>
        <hr class="divider" />
        <p style="margin-top: 1rem; opacity: 0.8;">
          Catch GooseBay live. Nothing beats the real thing.
        </p>
      </div>
    </section>

    <!-- Upcoming -->
    <section class="section">
      <div class="container">
        <h2 class="accent" style="margin-bottom: 1.5rem;">Upcoming</h2>

        <div v-if="upcomingShows.length" class="shows-list">
          <div
            class="show-card"
            v-for="show in upcomingShows"
            :key="show.date + show.venue"
          >
            <div class="show-card__date">
              <span class="show-card__day">{{ show.day }}</span>
              <span class="show-card__month">{{ show.month }}</span>
            </div>
            <div class="show-card__details">
              <h3>{{ show.venue }}</h3>
              <p class="show-card__location">{{ show.location }}</p>
              <p class="show-card__info" v-if="show.info">{{ show.info }}</p>
            </div>
            <a
              v-if="show.ticketUrl"
              :href="show.ticketUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--filled show-card__btn"
            >
              Tickets
            </a>
            <span v-else class="show-card__tba">TBA</span>
          </div>
        </div>

        <div v-else class="empty-state text-center">
          <p style="font-size: 3rem;">🎤</p>
          <h3 style="margin-top: 1rem;">No Shows Announced Yet</h3>
          <p style="margin-top: 0.5rem; opacity: 0.6;">
            Follow us on
            <a
              href="https://www.instagram.com/goosebay.band/"
              target="_blank"
              rel="noopener noreferrer"
            >Instagram</a>
            for gig announcements.
          </p>
        </div>
      </div>
    </section>

    <!-- Past Shows -->
    <section class="section section--purple" v-if="pastShows.length">
      <div class="container">
        <h2 class="accent" style="margin-bottom: 1.5rem;">Past Shows</h2>
        <div class="shows-list shows-list--past">
          <div
            class="show-card show-card--past"
            v-for="show in pastShows"
            :key="show.date + show.venue"
          >
            <div class="show-card__date">
              <span class="show-card__day">{{ show.day }}</span>
              <span class="show-card__month">{{ show.month }}</span>
            </div>
            <div class="show-card__details">
              <h3>{{ show.venue }}</h3>
              <p class="show-card__location">{{ show.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="section section--yellow text-center">
      <div class="container">
        <h2 style="color: var(--color-off-black);">Want Us at Your Venue?</h2>
        <hr class="divider" style="background: var(--color-purple);" />
        <p style="margin: 1rem auto 2rem; max-width: 480px; color: var(--color-off-black);">
          We're always keen to play. Get in touch for booking enquiries.
        </p>
        <router-link to="/contact" class="btn">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// TODO: Replace with real shows
const upcomingShows = ref([
  // Example:
  // {
  //   day: '15',
  //   month: 'MAR',
  //   venue: 'The Corner Hotel',
  //   location: 'Melbourne, VIC',
  //   info: 'w/ Special Guests',
  //   ticketUrl: 'https://...',
  // },
])

const pastShows = ref([
  // Example:
  // {
  //   day: '20',
  //   month: 'JAN',
  //   venue: 'The Lansdowne',
  //   location: 'Sydney, NSW',
  // },
])
</script>

<style scoped>
.page-header {
  padding: calc(var(--space-xl) + 2rem) 0 var(--space-md);
}

.shows-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.show-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: white;
  border: none;
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.show-card:hover {
  transform: translateY(-4px) rotate(-0.5deg);
  box-shadow: 6px 6px 0 var(--color-purple);
}

.show-card--past {
  opacity: 0.55;
}

.show-card--past:hover {
  opacity: 0.8;
}

.show-card__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 64px;
  padding: 0.5rem;
  border-right: 3px solid var(--color-orange);
}

.show-card__day {
  font-family: var(--font-display);
  font-size: 1.8rem;
  line-height: 1;
  color: var(--color-purple);
}

.show-card__month {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-orange);
  font-weight: 700;
  margin-top: 0.15rem;
}

.show-card__details {
  flex: 1;
}

.show-card__details h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--color-off-black);
}

.show-card__location {
  font-size: 0.85rem;
  opacity: 0.6;
  margin-top: 0.15rem;
}

.show-card__info {
  font-size: 0.8rem;
  color: var(--color-purple);
  font-weight: 700;
  margin-top: 0.3rem;
}

.show-card__btn {
  padding: 0.5rem 1.4rem;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.show-card__tba {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-off-black);
  opacity: 0.3;
  flex-shrink: 0;
  font-weight: 700;
}

.empty-state {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  .show-card {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .show-card__date {
    border-right: none;
    border-bottom: 3px solid var(--color-orange);
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    padding-bottom: 0.75rem;
  }
}
</style>
