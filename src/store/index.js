import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiURL: 'https://team-128.herokuapp.com/api',
    serverPath: 'https://team-128.herokuapp.com',
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
