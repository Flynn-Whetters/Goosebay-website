import { createRouter, createWebHistory } from 'vue-router'

import HomeView    from '../views/HomeView.vue'
import AboutView   from '../views/AboutView.vue'
import MusicView   from '../views/MusicView.vue'
import ShowsView   from '../views/ShowsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/',        name: 'Home',    component: HomeView    },
  { path: '/about',   name: 'About',   component: AboutView   },
  { path: '/music',   name: 'Music',   component: MusicView   },
  { path: '/shows',   name: 'Shows',   component: ShowsView   },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
