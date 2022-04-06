import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/historial',
    name: 'historial',
    component: () => import(/* webpackChunkName: "about" */ '../views/historialView.vue')
  },
  {
    path: '/Pastelero',
    name: 'Pastelero',
    component: () => import(/* webpackChunkName: "pastelero" */ '../views/pasteleroView.vue')
  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "pastelero" */ '../views/pedidosView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
