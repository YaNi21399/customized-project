import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/back',
        name: 'back',
        component: () => import('../views/BackView.vue')
      },
      {
        path: '/create',
        name: 'create',
        component: () => import('../views/CreateView.vue')
      },
      {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../views/EditView.vue')
      }
    ]
  },
  {
    path: '/single/:id',
    name: 'single',
    component: () => import('../views/SingleView.vue')
  },
  {
    path: '/my-fav',
    name: 'my-fav',
    component: () => import('../views/MyFav.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
