import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalValue from './global';

Vue.config.productionTip = false
Vue.prototype.global = globalValue;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')