<template>
  <div id="goosebay-app">
    <NavBar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import './assets/css/app.css'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>


