import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
export class Ajax{
    //static msgs = new Map();
    //static id = 1;
    static post=function(method,data)
    {
        return Vue.axios.post(
// 'http://houxin.nat300.top/'+method,
'http://47.96.76.206:8080/'+method,
           data,
           {headers: {'Content-Type': 'application/json;charset=UTF-8'}} 
            );
    };
        static get=function(method,data)
    {
        return Vue.axios.get(
// 'http://houxin.nat300.top/'+method,
'http://47.96.76.206:8080/'+method,
           data,
           {headers: {'Content-Type': 'application/json;charset=UTF-8'}} 
            );
    }

    /*
    static post=function(method,data,objProc,remData=null)
    {
        //console.log(Ajax.id);
        //Ajax.msgs.set(Ajax.id++,{o:objProc,d:remData}); //记住回调相关信息
        Vue.axios.post(
            'http://localhost:2205/DocManager/www/i.ashx?m='+method,
            JSON.stringify(data)).then(
                (res)=>{
                    //console.log(res.data)
                    if(remData==null) objProc['_'+method](res.data);
                    else objProc['_'+method](res.data,remData);
                }                    
            );
    }
    */
}
