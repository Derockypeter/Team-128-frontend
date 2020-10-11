import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FlashMessage from '@smartweb/vue-flash-message'

Vue.use(BootstrapVue)
Vue.use(FlashMessage)
Vue.use(IconsPlugin)
Vue.use(router)
Vue.use(store)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')
