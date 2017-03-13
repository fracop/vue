import Vue from 'vue'
import Router from 'vue-router'
import Cp from '@/components/Cp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cp',
      component: Cp
    }
  ]
})
