<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--solid': !isHome }">
    <div class="navbar__inner container">
      <router-link to="/" class="navbar__logo">GooseBay</router-link>

      <button
        class="navbar__toggle"
        :class="{ 'is-open': menuOpen }"
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

    <div
      class="navbar__overlay"
      :class="{ 'navbar__overlay--visible': menuOpen }"
      @click="menuOpen = false"
      aria-hidden="true"
    ></div>
  </nav>
</template>

<script setup>
import '../assets/css/navbar.css'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const isHome = computed(() => route.path === '/')

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
