import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/Nav',
    },
    {
      path:'/Nav',
      name:'NavMenu',
      component: () => import('@/views/NavMenu'),
      children:[
        {
          path: '/word/list',
          name: 'wordlist',
          component: () =>import('@/views/word/wordlist'),
        },
        {
          path: '/word/upload',
          name: 'upload_word',
          component: () =>import('@/views/word/upload_word'),
        },
        {
          path: '/word/paper',
          name: 'wordpaper',
          component: () =>import('@/views/word/wordpaper'),
        }
      ]
    }
  ]
})
