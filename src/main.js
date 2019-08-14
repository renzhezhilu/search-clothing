import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'

Vue.config.productionTip = false;

//axios请求插件
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
