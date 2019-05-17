<template>
    <div>
        <div class="particles">
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
              :clickEffect="true"
              clickMode="push"
            >
              </vue-particles>
        </div>
<div class="ui middle aligned center aligned grid">
    <div class="column">
        <h2 class="ui teal header">
            <img src="../assets/logo.png">
            <div class="content">注册</div>
        </h2>
        <div class="ui form attached fluid segment" name="enrollInfo" id="enroll" >
            <div class="ui error message">
                <div class="header" id="error">请求正确填写注册信息哦!</div>
            </div>
            <div class="field">
                <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" name="username" ref="usernames" @blur="namecheck()" placeholder="独一无二的用户名">
                </div>
            </div>
            <div class="field">
                <div class="ui left icon input">
                    <i class="mobile alternate icon"></i>
                    <input type="text" name="telPhone" ref="telPhones" @blur="passwcheck()" placeholder="手机号">
                </div>
            </div>
            <div class="field" id="msg">
                <div class="ui left icon input">
                    <i class="envelope square icon"></i>
                    <input type="text" name="msgCode" ref="msgCode" placeholder="短信验证码">
                    <button :disabled="count" class="ui positive button" type="button" @click="getMsgNum(this)">
                        发送验证码
                    </button>
                </div>
            </div>
            <div class="field">
                <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input type="password" ref="passw" name="password" placeholder="6-16位的密码,可由数字、字符、字母组成">
                </div>
            </div>
            <button class="fluid teal ui button" @click="validateMsgCode">注册</button>
        </div>
        <div class="ui bottom attached warning message">已有账号？
            <a @click="login">点击这里</a>登录
        </div>
    </div>
</div>
    </div>
</template>

<script >
import axios from 'axios'
import VueAxios from 'vue-axios'
	export default {
         mounted() {
  $('.ui.form').form({
        inline: true,
        revalidate: true,
        transition: 'slide down',
        // on: 'blur',
        fields: {
            username: {
                identifier: 'username',
                rules: [
                    {
                        type: 'empty',
                        prompt: '请输入用户名'
                    },
                ]
            },
            telPhone: {
                identifier: 'telPhone',
                rules: [
                    {
                        type: 'regExp[^1[3|4|5|7|8][0-9]\\d{4,8}$]',
                        prompt: '请输入正确手机号'
                    },
                    {
                        type: 'different[username]',
                        prompt: '用户名和手机号不能相同'
                    },
                ]
            },
            msgCode: {
                identifier: 'msgCode',
                rules: [
                    {
                        type: 'regExp[^\\d{6}$]',
                        prompt: '请输入6位数字验证码'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'regExp[^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}\':;\',\\\\[\\\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“\'。，、？]){6,16}$]',
                        prompt: '密码要由6-16位数字、字符、字母组成'
                    }
                ]
            }
        }
    });
         },

	data () {
			return {
                valid:null,
                count:false,
                wait:'60',
			
			}
		},
		methods: {
            namecheck(){  
                  let username = this.$refs.usernames.value;
                axios.get('/enrollCheck',{
                      params : { //请求参数
		username : username
	}
            
                      } ).then(function(result){
                      if(result.data.code=="0000"){
                      }else{
                           $('.ui.form').form('add prompt', "username", "此用户名已经被注册了,换个名字吧!");
                       
                      }     
                        }).catch(function(err){
                         
                        });
            },
            passwcheck(){  
                  let username = this.$refs.telPhones.value;
                axios.get('/enrollCheck',{
                      params : { //请求参数
	                	username : username
	                     }
                      } ).then(function(result){
                      if(result.data.code=="0000"){
                      }else{
                           $('.ui.form').form('add prompt', "telPhone", "此手机号已经注册了,试试去登录?");
                      }     
                        }).catch(function(err){
                         
                        });
            },

       
/**
 * 获取验证码
 * @param that
 */
 getMsgNum(that) {
     this.count=true;
    var phoneNumber = $("input[name='telPhone']").val();
    if (phoneNumber == null || phoneNumber == undefined || phoneNumber == '') {
        $('.ui.form').form('add prompt', "telPhone", "请输入正确手机号");
    } else {
        var data = {
            telPhone: phoneNumber
        };
        console.log("发送验证码+" + JSON.stringify(data));
        axios.get('/home/sendMsg', {
	params : { //请求参数
		requestPhone : phoneNumber
	}
}).then(function(response){
	console.log(response);//请求正确时执行的代码
}).catch(function(response){
	console.log(response);//发生错误时执行的代码
})
        this.setButtonStatus(that); // 设置按钮倒计时
    }
},

 setButtonStatus(that) {
     var _this=this;
    if (this.wait == 0) {
        this.count=false;
        $(".ui.positive.button").text("重新发送");
        this.wait = 60;
    } else {
        // that.setAttribute("disabled", true);
        $(".ui.positive.button").text("重新发送(" + this.wait + "s)");
        setTimeout(function () {
           _this.setButtonStatus(that)
        }, 1000);
        this.wait--;
    }
},

 validateMsgCode() {
       this.postRequest('/validateMsgCode',{
          telPhone: $("input[name='telPhone']").val(),
        msgCode: $("input[name='msgCode']").val()
      }
       ).then((res) => {
            console.log(res.data);
            if(res.data.code=="0000"){
                    this.postRequest('/enroll', {
            username: this.$refs.usernames.value,
            telphone: this.$refs.telPhones.value,
            password:this.$refs.passw.value,
      }).then((res) => {
          console.log(res.data);
              alert(res.data.msg);
    if(res.data.code="0000"){
     this.$router.push({ path: 'login' });
    }
      })
};
    if(res.data.code=="2103")
    $('.ui.form').form('add prompt', "msgCode", "验证码错误或已超时");
      })
     
},
// validateMsgCode_cb(state,commit,data){
//     if(data.code=="0000"){
//         let user={
//             username: this.$refs.usernames.value,
//             telphone: this.$refs.telPhones.value,
//             password:this.$refs.passw.value,
//         };
//           this.global_mod.send("enroll",user,this);
//     };
//     if(data.code=="2103")
//     $('.ui.form').form('add prompt', "msgCode", "验证码错误或已超时");
// },
// enroll_cb(state,commit,data){
//     alert(data.msg);
//     if(data.code="0000"){
//      this.$router.push({ path: 'login' });
//     }
// },

login(){
    this.$router.push({ path: 'login' });
}
		},

    }
</script>
<style scoped>
.particles {
  background:#333333;
  position: fixed;
  width: 100%;
  height: 100%;
}
.grid .column {
    position: absolute;
    max-width: 400px;
}

.grid {
    height: 100%;
}
</style>

