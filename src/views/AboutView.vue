<template>
  <div class="about">
    <!-- Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="accent">About</h1>
        <hr class="divider" />
      </div>
    </section>

    <!-- Bio -->
    <section class="section">
      <div class="container about__grid">
        <div class="about__photo" data-reveal>
          <img src="../assets/images/Dance wth you promo revised/Goose_Bay_BTS-30.png" alt="GooseBay band photo" class="about__photo-img" />
        </div>
        <div class="about__text" data-reveal data-delay="2">
          <h2>Who We Are</h2>
          <p>
            GooseBay is an indie rock outfit hailing from Australia with a love
            for warm analog tones, anthemic hooks, and the kind of riffs that
            sound best blasting from a van window on a coastal highway.
          </p>
          <p>
            Drawing from the same well as Spacey Jane, The Backseat Lovers, and
            the golden age of Aussie guitar music, GooseBay crafts songs about
            growing up, getting lost, and finding your way back.
          </p>
          <p>
            What started as late-night jam sessions quickly turned into
            something bigger a sound drenched in sun-faded nostalgia and
            youthful energy.
          </p>
        </div>
      </div>
    </section>

    <!-- Band Members -->
    <section class="section section--purple">
      <div class="container text-center">
        <h2 class="accent-yellow">The Lineup</h2>
        <hr class="divider" style="background: var(--color-yellow);" />
        <div class="members">
          <div
            class="member"
            v-for="(member, i) in members"
            :key="member.name"
            data-reveal
            :data-delay="String(i + 1)"
          >
            <div class="member__avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <h3>{{ member.name }}</h3>
            <p class="member__role">{{ member.role }}</p>
          </div>
        </div>
        <p class="about__note">
          <!-- Update member names & roles above when ready! -->
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import '../assets/css/about.css'
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

import singerImg from '../assets/images/Singer.jpg'
import guitar1Img from '../assets/images/Guitar1.jpg'
import guitar2Img from '../assets/images/Guitar2.jpg'
import bassImg from '../assets/images/Bass.jpg'
import drumsImg from '../assets/images/Drums.jpg'

useScrollReveal()

const members = ref([
  { name: 'Member 1', role: 'Vocals', image: singerImg },
  { name: 'Member 2', role: 'Guitar', image: guitar1Img },
  { name: 'Member 3', role: 'Guitar', image: guitar2Img },
  { name: 'Member 4', role: 'Bass', image: bassImg },
  { name: 'Member 5', role: 'Drums', image: drumsImg },
])
</script>
