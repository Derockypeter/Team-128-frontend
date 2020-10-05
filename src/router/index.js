import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import LandingPage from '../components/LandingPage.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Dashboard from '../components/layout/DashboardLayout.vue'
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import * as auth from '../services/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    beforeEnter (to, from, next) {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
