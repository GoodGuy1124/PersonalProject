import login from './Login.vue'
import home from './Home.vue'
import register from './component/register.vue'
import work from './component/work.vue'
import NotFound from './404.vue'
// import sowing from './component/Sowing.vue'
let routers = [
    {
        path: '/',
        component: home,
        name: '',
        hidden: false
    },
        {
        path: '/login',
        component: login,
        name: '',
        hidden: false
        // meta:{requireAuth:true}
       },
       {
        path: '/Home',
        component: home,
        name: '首页',
    },
     {
        path: '/register',
        component: register,
        name: '注册',
     // meta:{requireAuth:true}
    },
      {
        path: '/work',
        component: work,
        name: '编辑',
     // meta:{requireAuth:true}
    },
    {
      path: '*',
      component: NotFound,
      meta: { requiresAuth: true }
    },


];

export default routers;