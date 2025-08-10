import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import TodoDetail from '../pages/TodoDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/todo/:id', name: 'TodoDetail', component: TodoDetail }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
