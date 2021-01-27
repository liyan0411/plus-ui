import Vue from 'vue'
import App from './App.vue'

import plusUI from "./../packages"
Vue.use(plusUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
