import { createRouter, createWebHistory } from 'vue-router'

const WatchersView = () => import('@/views/Watchers/index.vue')
const NotFoundView = () => import('@/views/NotFound/index.vue')
const SlotView = () => import('@/views/Slots/index.vue')

const routes = [
  {
    path: '/watchers',
    name: 'Watchers',
    component: WatchersView,
  },
  {
    path: '/slots',
    name: 'Slots',
    component: SlotView,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory('/vue-feature'),
  routes,
})

export default router
