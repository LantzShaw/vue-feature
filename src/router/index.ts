import { createRouter, createWebHistory } from 'vue-router'

const Watchers = () => import('@/views/Watchers/index.vue')
const NotFound = () => import('@/views/NotFound/index.vue')

const routes = [
  {
    path: '/watchers',
    name: 'Watchers',
    component: Watchers,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory('/vue-feature'),
  routes,
})

export default router
