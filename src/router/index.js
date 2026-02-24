import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    // Lazy-loaded for smaller initial bundle
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/MusicView.vue'),
  },
  {
    path: '/shows',
    name: 'Shows',
    component: () => import('../views/ShowsView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
  },
  {
    // Catch-all → redirect to home
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Always scroll to top on route change
    return { top: 0 }
  },
})

export default router
