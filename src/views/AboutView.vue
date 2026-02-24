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
        <div class="about__photo">
          <img src="../assets/images/Dance wth you promo revised/Goose_Bay_BTS-30.png" alt="GooseBay band photo" class="about__photo-img" />
        </div>
        <div class="about__text">
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
            something bigger — a sound drenched in sun-faded nostalgia and
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
          <div class="member" v-for="member in members" :key="member.name">
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
import { ref } from 'vue'

import singerImg from '../assets/images/Singer.jpg'
import guitar1Img from '../assets/images/Guitar1.jpg'
import guitar2Img from '../assets/images/Guitar2.jpg'
import bassImg from '../assets/images/Bass.jpg'
import drumsImg from '../assets/images/Drums.jpg'

const members = ref([
  { name: 'Member 1', role: 'Vocals', image: singerImg },
  { name: 'Member 2', role: 'Guitar', image: guitar1Img },
  { name: 'Member 3', role: 'Guitar', image: guitar2Img },
  { name: 'Member 4', role: 'Bass', image: bassImg },
  { name: 'Member 5', role: 'Drums', image: drumsImg },
])
</script>

<style scoped>
.page-header {
  padding: calc(var(--space-xl) + 2rem) 0 var(--space-md);
  text-align: center;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  align-items: center;
}

.about__photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 4px solid var(--color-purple);
  box-shadow: 6px 6px 0 var(--color-orange);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about__photo-img:hover {
  transform: rotate(-1deg) scale(1.02);
  box-shadow: 8px 8px 0 var(--color-yellow);
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__text h2 {
  color: var(--color-purple);
}

/* Members Grid */
.members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.member {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: var(--radius-lg);
  padding: 2rem 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.member:hover {
  transform: translateY(-6px) rotate(-1deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.member__avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 0.75rem;
  border: 4px solid var(--color-yellow);
  box-shadow: 3px 3px 0 var(--color-orange);
}

.member__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.member:hover .member__avatar img {
  transform: scale(1.08);
}

.member h3 {
  color: var(--color-cream);
}

.member__role {
  font-size: 0.85rem;
  color: var(--color-yellow);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 0.25rem;
  font-weight: 700;
}

.about__note {
  margin-top: 2rem;
  font-size: 0.85rem;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
</style>
