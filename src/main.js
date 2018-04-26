import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import App from './App'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

// noinspection JSUnresolvedFunction
Vue.use(Vuetify)

const components = {App}

;(async () => {
  await fetch('/static/programs.json')
    .then(res => res.json())
    .then(res => res.forEach(name => {
      components[name] = Vue.component(name, function (resolve) {
        fetch(`/static/${name}.html`)
          .then(res => res.text())
          .then(res => {
            resolve({
              template: res
            })
          })
      })
    }))

  // eslint-disable-next-line
  new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components
  })
})()

export default components
