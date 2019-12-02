import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import packageAa from '@/components/package/slotA/packageAa'
import detailA from '@/components/APIdetail/packageA/detailA'
import login from '@/components/views/login'
import register from '@/components/views/register'
import userinfo from '@/components/user/userinfo'
import personinformation from '@/components/user/personinformation'
import singleAPI from '@/components/user/singleAPI'
import packAPI from '@/components/user/packAPI'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/packageAa',
          name: 'packageAa',
          component: packageAa
        },
        {
          path: '/detailA',
          name: 'detailA',
          component: detailA
        },
      ]      
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo,
      children: [
        {
          path: '/personinformation',
          name: 'personinformation',
          component: personinformation
        },
        {
          path: '/singleAPI',
          name: 'singleAPI',
          component: singleAPI
        },
        {
          path: '/packAPI',
          name: 'packAPI',
          component: packAPI
        },
      ]
    },
  ]
})
