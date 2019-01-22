import Vue from 'vue'
import App from './App.vue'
import  router from  './router'

//axios
import axios from 'axios'
Vue.use(Vuex)
Vue.prototype.$axios = axios
// mint-ui的使用
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false
import qs from 'qs'
Vue.prototype.$qs=qs

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
