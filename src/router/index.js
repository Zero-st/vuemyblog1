import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login.vue'
import Blogs from '@/views/Blogs.vue'
import Header from '@/components/Header.vue'
Vue.use(Router)
// 将组件页面注册到路由中
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: Header
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    }
  ]
})
