
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import DashboardView from '@/views/DashboardView.vue'
import AppsGames from '@/views/AppsGames.vue'
import NotFound from '@/views/page-404.vue'
import Abonements from '@/views/AbonementsView.vue'
import LoginEdit from '@/views/LoginEdit.vue'
import FilesView from '@/views/FilesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard-view',
      component: DashboardView,
    },
    {
      path: '/apps',
      name: 'AppsGames',
      component: AppsGames,
    },
    {
      path: '/abonements',
      name: 'AbonementsView',
      component: Abonements,
    },

    {
      path: '/login-edit',
      name: 'LoginEdit',
      component: LoginEdit,
      props: (route) => ({ tab: route.query.tab }),
    },
    {
      path: '/files',
      name: 'Files',
      component: FilesView,
    },
    {
      path: '/404',
      name: 'ErrorPage',
      component: NotFound,
    },
  ]
})

export default router
