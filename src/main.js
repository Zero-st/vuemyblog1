// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './axios.js'
import mavonEditor from 'mavon-editor' // components
import 'mavon-editor/dist/css/index.css' // styles
Vue.prototype.$axios = axios // Vue对象使用axios
Vue.use(Element)
Vue.use(mavonEditor)
Vue.config.productionTip = false

/* eslint-disable no-new
   main.js是工程的入口文件，在此文件中加载了很多第三方组件
   在main.js中注册store，这样所有的组件都可以使用store中的数据了
 */
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
