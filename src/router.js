import Vue from 'vue';
import Router from 'vue-router';

import login from './components/account/Login.vue';
import login1 from './components/account/login1.vue';

import testLogin from './components/account/TestLogin.vue';
import index from './components/views/index/index.vue';
// import schAll  from "./components/views/alls/schAll.vue";
import allproduct from './components/views/alls/product/allproduct.vue';
import alldetail from './components/views/alls/detail/details.vue';

// import coope from "./components/views/cooperation/coope.vue";
import cooproduct from './components/views/cooperation/cooproduct/cooproduct.vue';
import coomajors from './components/views/cooperation/cooproduct/coomajors.vue';
import cooBuSchool from './components/views/cooperation/cooproduct/cooByschool.vue';
import coodetail from './components/views/cooperation/detail/details.vue';

import home from './components/views/index/home.vue';
import e2login from './components/account/e2loign.vue';

Vue.use(Router)

export default new Router({
   routes: [
      {
         from: '/',
         path: '/',
         redirect: '/e2login',
      },
      {
         path: '/login',
         name: 'login',
         component: login,
      },
      {
         path: '/login1',
         name: 'login1',
         component: login1,
      },
      {
         path: '/e2login',
         name: 'e2login',
         component: e2login,
      },
      {
         path: '/testLogin',
         name: 'testLogin',
         component: testLogin,
      },
      {
         path: '/index',
         name: 'index',
         component: index,
         meta:{keepAlive: false}
      },
      {
         path: '/allproduct',
         name: 'allproduct',
         component: allproduct,
         meta:{keepAlive: false}
      },
      {
         path: '/alldetail',
         name: 'alldetail',
         component: alldetail,
         meta:{keepAlive: false}
      },
      // {
      //   path: '/coope',
      //   name: 'coope',
      //   component: coope
      // },
      {
         path: '/cooproduct',
         name: 'cooproduct',
         component: cooproduct,
         meta:{keepAlive: false}
      },
      {
         path: '/coomajors',
         name: 'coomajors',
         component: coomajors,
         meta:{keepAlive: false}
      },
      {
         path: '/cooBuSchool',
         name: 'cooBuSchool',
         component: cooBuSchool,
         meta:{keepAlive: false}
      },
      {
         path: '/coodetail',
         name: 'coodetail',
         component: coodetail,
         meta:{keepAlive: false}
      },
      {
         path: '/home',
         name: 'home',
         component: home,
         meta:{keepAlive: false}
      },
   ],
})
