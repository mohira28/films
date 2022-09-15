import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../pages/MainPage'
import FilmPage from '../pages/FilmPage'


const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/film/:id',
    name: 'FilmPage',
    component: FilmPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
