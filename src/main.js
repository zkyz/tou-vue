import Vue from 'vue'
import Vuetify from 'vuetify'

import router from './router'
import App from './App'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

// noinspection JSUnresolvedFunction
Vue.use(Vuetify)

// eslint-disable-next-line
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
})
