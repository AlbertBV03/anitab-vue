import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/PaginaInicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/especies',
      name: 'especies',
      component: () => import(/* webpackChunkName: "about" */ '../views/ListaEspecies.vue')
    },
    {
      path: '/acercade',
      name: 'acercade',
      component: () => import(/* webpackChunkName: "about" */ '../views/PaginaAcercaDe.vue')
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      component: () => import(/* webpackChunkName: "about" */ '../views/PaginaContactanos.vue')
    },    
  ]
})