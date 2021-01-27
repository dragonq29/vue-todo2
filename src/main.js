import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'TodoHeader',
      component: TodoHeader
    },
    {
      path: '/todofooter',
      name: 'TodoFooter',
      component: TodoFooter
    }
  ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')
