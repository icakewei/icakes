// 路由文件的基本配置

import Vue from 'vue'
import VueRouter from 'vue-router';

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)
Vue.config.productionTip = false
import App from '../App.vue'
import Home from '../components/pages/Home/Home.vue'
import GoodList from '../components/pages/GoodList/Good.vue'
import mine from '../components/pages/my/Xmain.vue'
import emportCar from '../components/pages/shopingcar/XemptyCar.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/app',
      component: App,
      children: [{
        path: 'home',
        component: Home,
        name: 'Home'
      },
      {
        path: 'good',
        component: GoodList,
        name: 'GoodList'
      },{
        path: 'emportCar',
        component:emportCar ,
        name: 'emportCar'
      },{
        path: 'mine',
        component: mine,
        name: 'mine'
      }]
    },//重定向
    {
      path: '/',
      redirect: '/app/home'
    }
  ]
})

export default router