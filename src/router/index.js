import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/Outfit'
import Tou from '../components/Tou'

// noinspection JSUnresolvedFunction
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/tou/:id',
      component: Tou
    }
  ]
})
