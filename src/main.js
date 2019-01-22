import Vue from 'vue'
import App from './App.vue'
import 'weui'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
// 定义路由组件
import XemportCar from './pages/XemptyCar.vue'
import Xmain from './pages/Xmain.vue'
const routes = [
  {
    path: '/app',
    component: App,
    children: [
      {
        path: 'mine',
        component: Xmain
      }, {
        path: 'emportCar',
        component: XemportCar
      }
    ]
  },




]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
