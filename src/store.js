import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    rating: 0,
    message: ''
  },

  actions: {
    setRating: ({ commit }, rating) => commit('SET_RATING', rating),
    setMessage: ({ commit }, message) => commit('SET_MESSAGE', message)
  },

  mutations: {
    SET_RATING (state, rating) {
      state.rating = rating
    },

    SET_MESSAGE (state, message) {
      state.message = message
    }
  },

  getters: {
    getRating: state => state.rating,
    getMessage: state => state.message
  }
})
