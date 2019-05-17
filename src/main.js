import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routers from './routers'
import App from './App'
import 'semantic-ui-css/semantic.min'
import 'semantic-ui-css/semantic.min.css'
// import Swiper from 'swiper'
import {getCookie,setCookie,delCookie} from './utils/cookie_mod'
import global_mod from './utils/global_mod'
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'
import store from './store'
import {postRequest,formpostRequest,getRequest} from './utils/axiosPG'
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)
Vue.prototype.postRequest = postRequest
Vue.prototype.formpostRequest = formpostRequest
Vue.prototype.getRequest = getRequest
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie
Vue.prototype.store = store
Vue.prototype.delCookie = delCookie
Vue.prototype.global_mod = global_mod
// window.$=global_mod;
const router = new VueRouter({
  // mode: 'history',
  routes: routers
})
router.beforeEach((to, from, next) => {
  if(getCookie("uerName")){
    console.log("存在");
    store.commit("setUser",getCookie("uerName"));
    store.commit("setIsExsit",true);
    next();
  }else{
    store.commit("setIsExsit",false);
  }
  
  // console.log(to);
  // console.log(from);
  // if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
  //   if(localStorage.getItem('access_token')){ //判断本地是否存在access_token
  //     next();
  //   }else {
  //     next({
  //       path:'/login'
  //     })
  //   }
  // }
  // else {
  //   next();
  // }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
    if(to.fullPath == "/register"){
    if(getCookie("uerName")){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }else{
    next();
  }
  if(to.fullPath == "/login"){
    if(getCookie("uerName")){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }else{
    next();
  }
});
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')
