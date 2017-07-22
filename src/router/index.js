import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Index from '@/components/index'
import List from '@/components/list'
import Show from '@/components/show'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',name可以不要
      component: Index
    },
     {
      path: '/list',
      component: List
    },
     {
      path: '/show',
      component: Show
    }
  ]
})
