import Vue from 'vue'
import App from './App'
import 'weui'
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
import  Axios from 'axios'
Vue.prototype.$axios=Axios
//vuex全局
import  store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
