import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Create from '@/pages/Create/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import My from '@/pages/My/template.vue'
import User from '@/pages/User/template.vue'
import Register from '@/pages/Register/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:editId',
      component: Edit
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
