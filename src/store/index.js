import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)
import waiters from './waiters/index'
import products from './products/index'
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    waiters,
    products
  },
  getters
})

export default store
