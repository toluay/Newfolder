require('./bootstrap');


import Vue from 'vue'
import App from './App'
import router from './router'
//import VeeValidate from 'vee-validate'
import store from './store'



Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})