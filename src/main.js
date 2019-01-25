import Vue from 'vue'
import App from './App'
import 'weui'
import $ from "jquery"
Vue.config.productionTip = false
Vue.filter('getDate', function (value) {
	let str = value.toString()
	let newStr = str.substring(0,str.length-2);
  return  newStr
})
//路由
import  router from  './router'
//引入全局配置样式
// import  './styls/reset.less'
import './styls/reset.less'
// 引入axios  
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
//vuex全局
import  store from './store'
new Vue({
  el: '#app',
  router,
  store, 
  render: h => h('router-view')

  // components: { App },
  // template: '<App/>'
})
