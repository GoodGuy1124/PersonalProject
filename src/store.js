import Vue from 'vue'
import Vuex from 'vuex'
// 告诉 vue “使用” vuex
Vue.use(Vuex)
const state = {
  login:{
  key:'',
  userName:'',
  IsExsit:null,
  status:null,
  },
}
const mutations = {
  // setstatus(state,n)
  // { 
  //   state.login.status=n;
  // },
   setUser(state,n){
   state.login.userName=n;
  },
   setIsExsit(state,n){
   state.login.IsExsit=n;
  },
  // setKey:(state,k)=>state.login.key=k
}
export default new Vuex.Store({
  state,    //数据
  mutations //操作
})