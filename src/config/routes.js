/**
 * Created by Administrator on 2016/12/13 0013.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home'
import Helper from '../views/Helper'
import Playground from '../views/Playground'
import Account from '../views/Account'
import Detail from '../views/Detail'
import ActivePage from '../views/ActivePage'
const routes=[
  {
    path: '/', 
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/helper',
    component:Helper
  },
  {
    path:'/playground',
    component:Playground
  },
  {
    path:'/account',
    component:Account
  },
  {
    path:'/activePage/:id',
    component:ActivePage
  },
  {
    path:'/detail',
    component:Detail
  },

]

// const router =new VueRouter({
//   routes
// })

module.exports=new VueRouter({
  routes
});
