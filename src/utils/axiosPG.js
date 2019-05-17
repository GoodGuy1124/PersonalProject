
import axios from 'axios'
import {getCookie,setCookie,delCookie} from './cookie_mod'
import VueRouter from 'vue-router'
import routers from '../routers'
let base = 'http://47.96.76.206:8080'
// let base = '/home'
const router = new VueRouter({
  // mode: 'history',
  routes: routers
})

axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  alert('请求超时')
  return Promise.resolve(err)
})


axios.interceptors.response.use((data) => {
  //   if(data.data.code=="2222"){
  //     delCookie("uerName");
  // router.push({ path: 'login' });

    // }
  //  console.log(data);
  // // _this.$router.push({ path: 'register' });
  //  console.log(getCookie("uerName"));  
  // if(data.data.code=="2222"){
  //   alert("登录超时");
  //     console.log(getCookie("uerName"));  
  //    if(getCookie("uerName")){ 
  //                       var _this=this;
  //                       let username=getCookie("uerName");
  //                       let password=getCookie("passWord");
  //                       let params = new URLSearchParams();
  //                       params.append('username', username);
  //                       params.append('password', password);
  //                         console.log("here")  
  //                     axios.post('http://47.96.76.206:8080/login',
  //                               params
  //                       ).then(function(res){
  //                         _this.setCookie('uerName',res.data.content.userName,24 * 7)
  //                              _this.setCookie('passWord',password,24 * 7)
  //                           //  console.log("here");
  //                            _this.setCookie('roleName',res.data.content.roleName,24 * 7);         
  //                       }).catch(function(err){
                         
  //                       });
  // }else{
  //   data.jmup=login
    
  // }
  // }
  
 
  // 数据统一校验处理
  return data
}, (err) => {
  console.log(err);
   // 数据异常统一处理
  if (err.response.status === 504 || err.response.status === 404) {
    alert('服务器被吃了')
  } else if (err.response.status === 403) {
    alert('权限不足,请联系管理员')
  } else {
    alert('未知错误')
  }
  return Promise.resolve(err)
})


export function postRequest(url, params) {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function formpostRequest(url, params) {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function putRequest(url, params) {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function deleteRequest(url) {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  })
}

export function getRequest(url) {
  return axios({
    method: 'get',
    url: `${base}${url}`
  })
}