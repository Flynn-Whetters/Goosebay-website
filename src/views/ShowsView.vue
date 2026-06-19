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
import '../assets/css/shows.css'
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


