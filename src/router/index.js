import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Report from '@/views/Report.vue'
import Edit from '@/views/Edit.vue'
import HomeNew from '@/views/HomeNew.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hospital',
    name: 'HomeNew',
    component: HomeNew
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
