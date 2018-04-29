import Vue from 'vue'
import Router from 'vue-router'

import Intro from '../components/Intro'
import Tou from '../components/Tou'

// noinspection JSUnresolvedFunction
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Intro
    },
    {
      path: '/tou/:id',
      component: Tou
    }
  ]
})
