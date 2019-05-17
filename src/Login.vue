<template>
    <div>
            <div class="particles"> <!--vue-particles放前面和后面有区别-->
<vue-particles
              color="#7DF031"
              :particleOpacity="0.5"
              linesColor="#D5D5D5"
              :particlesNumber="80"
              shapeType="circle"
              :particleSize="5"
              :linesWidth="2"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="2"
              :moveSpeed="3"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="false"
                >
    </vue-particles>
    </div>
        <form class="ui middle aligned center aligned grid">
    <div class="column">
        <div class="ui negative message" v-show="Vshow" >
            <i class="close icon"></i>
            <div class="header" >
                <span >{{mesag}}</span>
            </div>
        </div>
        <h2 class="ui teal header">
            <img src="./assets/logo.png">
            <div class="content" >登录</div>
        </h2>
        <div  class="ui fluid segment form attached">
            <div class="ui field">
                <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" name="username" placeholder="用户名/手机/邮箱" v-model="name">
                </div>
            </div>
            <div class="ui field ps">
                <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input type="password" name="password" placeholder="密码" v-model="password">
                </div>
            </div>
            <!--<div class="ui field two column grid buttongrounp">
                <div class="left aligned column">
                    <a >手机验证码登录</a>
                </div>
          <div class="right aligned column">
                    <a >无法登录?</a>
                </div>
            </div>-->
                  <button class="fluid teal ui button"  @click="loginin">登录</button>
             
          
            <!--<div class="ui error message"></div>-->
        </div>
        <div class="ui attached warning message">还没账号？
            <a @click="register">点击这里</a>注册
        </div>
    </div>
</form>


    </div>
    
</template>

<script >
import axios from 'axios'
import VueAxios from 'vue-axios'
// import SIdentify from './identify'
	export default {
        mounted() {
    //           this.identifyCode = "";
    // this.makeCode(this.identifyCodes, 4);
                $('.message .close')
        .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade')
            ;
        });
    $('.ui.form')
        .form({
            inline:true,
            on: 'blur',
            fields: {
                empty: {
                    identifier: 'username',
                    rules: [
                        {
                            type: 'empty',
                            prompt: '请输入用户名/手机号/邮箱地址'
                        },
                    ]
                },
                //  code: {
                //     identifier: 'code',
                //     rules: [
                //         {
                //             type: 'empty',
                //             prompt: '请输入验证码'
                //         },
                //     ]
                // },
                dropdown: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: '请输入密码'
                        },
                        {
                            type: 'minLength[6]',
                            prompt: '密码不能少于6位'
                        },
                        {
                            type: 'maxLength[16]',
                            prompt: '密码不能超过16位'
                        }
                    ]
                },
            },
       onSuccess: function(event, fields) {
                    // [*] 表单验证通过后调用 onSuccess 函数
                    // fields 中保存了所有的表单数据，例如 {name: "Alice", color: "rgb(255, 255, 255)"}
                    event.preventDefault(); // [*] 如果需要使用 Ajax 提交时，防止表单自动提交
                    console.log(fields);
                },
        });
       
        },
	data () {
			return {
                AllCheck:false,
                Vshow:false,
                mesag:"",
                // identifyCodes: "1234567890",
                // identifyCode: "",
                codeinput:"",
                name:"",
                password:"",
			
			}
		},
		methods: {
    //           randomNum(min, max) {
    //   return Math.floor(Math.random() * (max - min) + min);
    // },
    // refreshCode() {
    //   this.identifyCode = "";
    //   this.makeCode(this.identifyCodes, 4);
    // },
//     makeCode(o, l) {
//       for (let i = 0; i < l; i++) {
//         this.identifyCode += this.identifyCodes[
//           this.randomNum(0, this.identifyCodes.length)
//         ];
//       }
//       console.log(this.identifyCode);
    
//   },
            register(){
                 this.$router.push({ path: 'register' });
            },
            loginin(){
                console.log("here");
                console.log(this.AllCheck);
                if(this.AllCheck==true){
                    console.log("be")
                }

    //              var _this=this;
    //                     var username=this.name;
    //                     var password=this.password;
    //                     let params = new URLSearchParams();
    //                     params.append('username', username);
    //                     params.append('password', password);
    //    this.formpostRequest('/home/login', params).then((res) => {
    //                       console.log(res)
    //                       if(res.data.code=="0000"){
    //                           _this.setCookie('uerName',res.data.content.userName,1000 * 60 * 60 )
    //                         //    _this.setCookie('passWord',password,1000 * 60 * 60 )
    //                          _this.setCookie('roleName',res.data.content.roleName,7); 
    //                           _this.$router.push({ path: 'Home' });
    //                       }
    //                       else{
    //                            _this.Vshow=true;
    //                           _this.mesag=res.data.msg;
                              
    //                       }
    //   })



                    //     var _this=this;
                    //     var username=this.name;
                    //     var password=this.password;
                    //     let params = new URLSearchParams();
                    //     params.append('username', username);
                    //     params.append('password', password);
                    //    axios.post('http://47.96.76.206:8080/home/login',
                    //             params
                    //     ).then(function(res){
                    //       console.log(res)
                    //       if(res.data.code=="0000"){
                    //           _this.setCookie('uerName',res.data.content.userName,1000 * 60 * 60 )
                    //         //    _this.setCookie('passWord',password,1000 * 60 * 60 )
                    //          _this.setCookie('roleName',res.data.content.roleName,7); 
                    //           _this.$router.push({ path: 'Home' });

                    //       }
                    //       else{
                    //            _this.Vshow=true;
                    //           _this.mesag=res.data.msg;
                              
                    //       }
                          
                    //     }).catch(function(err){
                         
                    //     });
            },

		},
//                    		components: {
                           
//             'SIdentify': SIdentify,
// }
    }
 
</script>
<style scoped>
.particles {
   
  background:#333333;
  position: fixed;
  width: 100%;
  height: 100%;
}
.button{
    margin-top: 100px;
}
.buttongrounp{
  
  height: 100%;
  margin-top: 100px;
  margin-left: 0px;
  overflow: hidden;

}
.grid .column {
    position: absolute;/*绝对布局解决Particles粒子插件的布局问题*/
    max-width: 400px;
}


.grid  {
    
    /*left: 40%;
    margin-top: 100px;
    width: 400px;
    z-index: 999;*/
}


</style>


               <!--<div class="field" >
                <div class="ui left icon input">
                    
                    <i class="envelope square icon"></i>
                   <input class="sss"  v-model="codeinput" name="code" type="text"  placeholder="请输入验证码">
              
                        <div class="codes" @click="refreshCode">
                    <SIdentify :identifyCode="identifyCode"></SIdentify>
                           </div>
                </div>
            </div>-->
                  <!--<div class="ui field two column grid code">
                       <div class="left aligned column">
                            <div class="ui input aa">
                        <input v-model="codeinput" name="code" type="text" placeholder="请输入验证码">
                            </div>
                       </div>
                       <div class="right aligned column">
                           <div class="code" @click="refreshCode">
                    <SIdentify :identifyCode="identifyCode"></SIdentify>
                           </div>
                     </div>
                </div>-->