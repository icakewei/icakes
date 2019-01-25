// 路由文件的基本配置

import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.config.productionTip = false
import App from '../App.vue'
import Home from '../components/pages/Home/Home.vue'
import GoodList from '../components/pages/GoodList/Good.vue'
import mine from '../components/pages/my/Xmain.vue'
import emportCar from '../components/pages/shopingcar/Shopcar.vue'
import Detail from '../components/pages/Detail/Detail.vue'
import login from '../components/pages/my/login.vue'
import user from '../components/pages/my/user.vue'
import I from '../components/pages/my/I.vue'
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
      },{
        path: 'login',
        component: login,
        name: 'login'
      },{
        path: 'user',
        component: user,
        name: 'user'
      }]
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/i',
      component: I
    },
    // 重定向
    {
      path: '/',
      redirect: '/app/home'
    },
  ]
})

export default router