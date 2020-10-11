import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import LandingPage from '../components/LandingPage.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Dashboard from '../components/layout/DashboardLayout.vue'
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import ViewAdmin from '../components/admin/ViewAdmin.vue'
import ServiceProvider from '../components/admin/ServiceProvider.vue'
import Station from '../components/admin/Stations.vue'
import ServiceProviderDashboard from '../components/tsp/ServiceProviderDashboard.vue'
import ServiceSchedules from '../components/tsp/ServiceSchedules.vue'
import Carriers from '../components/tsp/Carriers.vue'
import * as auth from '../services/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ easing: 'ease', speed: 1000 })

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
    path: '/admin/viewadmin',
    name: 'ViewAdmin',
    component: ViewAdmin
  },
  {
    path: '/admin/serviceprovider',
    name: 'ServiceProvider',
    component: ServiceProvider
  },
  {
    path: '/admin/station',
    name: 'Station',
    component: Station
  },
  {
    path: '/tsp/dashboard',
    name: 'ServiceProviderDashboard',
    component: ServiceProviderDashboard
  },
  {
    path: '/tsp/schedule',
    name: 'ServiceSchedules',
    component: ServiceSchedules
  },
  {
    path: '/tsp/carrier',
    name: 'Carriers',
    component: Carriers
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
router.beforeResolve((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
