import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import App from './App'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

// noinspection JSUnresolvedFunction
Vue.use(Vuetify)

const tou = Vue.component('tou', (resolve) => {
  setTimeout(() => {
    resolve({
      template: '<div>I am async! {{path}}</div>',
      data () {
        console.log('data', this)
        return {
          path: this.$route.path
        }
      }
    })
  }, 1000)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App, tou
  }
})
