import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'; //axios 호출
import router from './router'; //설정 라우터 호출
import store from './store'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = true;
Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음

new Vue({
  router,
  store,
  vuetify,
  iconfont: 'fa',
  render: h => h(App)            
}).$mount('#app')