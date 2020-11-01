// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
const store = new Vuex.Store({
  state: {
    PersonalCenterDispatcher: '/PersonalCenter',
    UserId: ''
  },
  mutations: {
    changePersonalCenterDispatcher (state, msg) {
      state.PersonalCenterDispatcher = msg.where
    },
    changeUserId (state, msg) {
      state.UserId = msg.UserId
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
