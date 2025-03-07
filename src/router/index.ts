import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import GesundheitView from '@/views/GesundheitView.vue'
import EinzelhandelView from '@/views/EinzelhandelView.vue'
import EigeneEintraege from '@/views/EigeneEintraege.vue'
import HandwerkView from '@/views/HandwerkView.vue'
import GastronomieView from '@/views/GastronomieView.vue'

// Router für die korrekte Verlinkung der Hyperlinks im Header zu den entsprechenden Seiten.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
    },
    {
      path: '/gesundheit',
      name: 'gesundheit',
      component: GesundheitView
    },
    {
      path: '/einzelhandel',
      name: 'einzelhandel',
      component: EinzelhandelView
    },
    {
      path: '/gastronomie',
      name: 'gastronomie',
      component: GastronomieView
    },
    {
      path: '/handwerk',
      name: 'handwerk',
      component: HandwerkView
    },
    {
      path: '/eintragen',
      name: 'eintragen',
      component: EigeneEintraege
    }
  ],
})

export default router
