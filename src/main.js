import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

// 公共样式
import './assets/css/style.css';

import Vuex from 'vuex';

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(MuseUI)
Vue.use(iView)
Vue.use(Vuex)
// Vue.use(VueRouter)

Vue.config.productionTip = false

// const router = new VueRouter({
//    routes,
// })

router.beforeEach((to, from, next) => {
   const nextRoute = ['/e2login', '/login']
   // if (to.path === '/e2login') {
   //    sessionStorage.removeItem('user')
   // }

   let user = sessionStorage.getItem('user')
   if (nextRoute.indexOf(to.path) !== -1) {
      next()
   } else if (!user && to.path !== '/e2login') {
      next({path: '/e2login'})
   } else {
      next()
   }
})

// router.beforeEach((to, from, next) => {
//    const nextRoute = ['/login1']
//    // if (to.path === '/e2login') {
//    //    sessionStorage.removeItem('user')
//    // }

//    let user = sessionStorage.getItem('user')
//    if (nextRoute.indexOf(to.path) !== -1) {
//       next()
//    } else if (!user && to.path !== '/login1') {
//       next({path: '/login1'})
//    } else {
//       next()
//    }
// })

window.router = router

new Vue({
   router,
   store,
   render: h => h(App),
}).$mount('#app')
