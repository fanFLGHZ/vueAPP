// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./utils/flexble"
import "../static/fonts/iconfont.css"
import cha from "./plugins/headers";
import axios from "axios";
import store from "./store/index"
import "./assets/css/animate.css"
import {DatePicker,Select,Option,TimePicker} from "element-ui";//elementUI库

Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(TimePicker)

Vue.use(cha)
Vue.prototype.$bus=new Vue();
Vue.config.productionTip = false
Vue.prototype.axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  components: { App },
  template: '<App/>'
})
