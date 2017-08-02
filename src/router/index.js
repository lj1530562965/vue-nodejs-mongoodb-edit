import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/goods',
      name: 'Hello',
      components: {
        default: GoodsList,
        title: Title,
        image: Image
      }
    },
    {
      path: '/cart/:cartid',
      name: 'cart',
      component: Cart
    }
  ]
})
