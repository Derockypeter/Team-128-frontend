import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiURL: 'http://127.0.0.1/api',
    serverPath: 'http://127.0.0.1',
    profile: {}
  },
  mutations: {
    authenticate (state, payload) {
      state.isLoggedIn = auth.isLoggedIn()
      if (state.isLoggedIn) {
        state.profile = payload
      } else {
        state.profile = {}
      }
    }
  },
  actions: {
    authenticate_user (context, payload) {
      context.commit('authenticate', payload)
    }
  },
  modules: {
  }
})
