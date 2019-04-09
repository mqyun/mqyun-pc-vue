import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/iview.js'

import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$jsRouter = router

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
