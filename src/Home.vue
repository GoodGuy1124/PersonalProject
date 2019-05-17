<template>
    <div>

<div class="pusher">
    <div class="ui segment">
        <div class="ui inverted large teal secondary top fixed menu">
            <div class="ui container">
                <a class="toc item"><i class="sidebar icon"></i></a>
                <div class="head item"><a >易享说</a></div>
                <a class="item active">首页</a>
                <a class="item" >专题</a>
                <a class="item">精选</a>
                <a class="item">留言板</a>
                <div class="ui category search item">
                    <div class="ui icon input">
                        <input class="prompt" type="text" placeholder="搜寻新鲜事...">
                        <i class="search link teal icon"></i>
                    </div>
                    <div class="results"></div>
                </div>
            </div>
            <div class="right item">
                <a v-show=!this.$store.state.login.IsExsit  class="ui inverted button login" @click="toLogin" >登录</a>
                <a v-show=!this.$store.state.login.IsExsit  class="ui inverted button register" @click="toRegister" >注册</a>
                <div v-show=this.$store.state.login.IsExsit class="ui floating dropdown icon">
                    <div  class="ui pointing dropdown user">
                        <img class="ui circular avatar image" >
                        <span >{{this.$store.state.login.userName}}</span>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <a class="item">
                                <i class="user icon teal"></i>
                                用户中心</a>
                            <a class="item">
                                <i class="wizard icon teal"></i>
                                我的创作</a>
                            <a class="item">
                                <i class="bookmark icon teal"></i>
                                我的收藏</a>
                            <a class="item">
                                <i class="announcement icon teal"></i>
                                公告消息</a>
                            <a class="item">
                                <i class="setting icon teal"></i>设置</a>
                            <a  class="item">
                                <i class="configure icon teal"></i>
                                后台管理</a>
                            <a @click="loginout" class="item">
                                <i class="sign out icon teal"></i>
                                退出登录</a>
                        </div>
                    </div>
                </div>
                <a class="ui left icon negative button create-work" >
                    <i class="write icon" @click="createtowork"></i>开始创作</a>
            </div>
        </div>
    </div>
    <div class="ui vertical stripe segment container">
        <div class="ui grid">
            <div class="eleven wide column">
                <div class="ui billboard test ad rotation chart" >
<sowing ></sowing>
                </div>
            </div>
            <div class="five wide column">
                <div class="ui billboard test ad ranking" data-text="公告">

                </div>
            </div>
        </div>
    </div>

    <div class="ui vertical segment container content">
        <div class="ui grid">
            <div class="eleven wide column">
                <div class="ui link card">
  <div class="content">
    <div class="header">可爱的小狗</div>
    <div class="meta">
      <span class="category">动物</span>
    </div>
    <div class="description">
      <p>这是一条可爱的狗</p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author"><img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt </div>
  </div>
</div>

             <div class="ui link card">
  <div class="content">
    <div class="header">可爱的小狗</div>
    <div class="meta">
      <span class="category">动物</span>
    </div>
    <div class="description">
      <p>这是一条可爱的狗</p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author"><img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt </div>
  </div>
</div>

             <div class="ui link card">
  <div class="content">
    <div class="header">可爱的小狗</div>
    <div class="meta">
      <span class="category">动物</span>
    </div>
    <div class="description">
      <p>这是一条可爱的狗</p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author"><img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt </div>
  </div>
</div>

             <div class="ui link card">
  <div class="content">
    <div class="header">可爱的小狗</div>
    <div class="meta">
      <span class="category">动物</span>
    </div>
    <div class="description">
      <p>这是一条可爱的狗</p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author"><img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt </div>
  </div>
</div>
             <div class="ui link card">
  <div class="content">
    <div class="header">可爱的小狗</div>
    <div class="meta">
      <span class="category">动物</span>
    </div>
    <div class="description">
      <p>这是一条可爱的狗</p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author"><img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt </div>
  </div>
</div>
             <div class="ui link card">
  <div class="content">
    <div class="header">可爱的小狗</div>
    <div class="meta">
      <span class="category">动物</span>
    </div>
    <div class="description">
      <p>这是一条可爱的狗</p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author"><img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt </div>
  </div>
</div>
             <div class="ui link card">
  <div class="content">
    <div class="header">可爱的小狗</div>
    <div class="meta">
      <span class="category">动物</span>
    </div>
    <div class="description">
      <p>这是一条可爱的狗</p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author"><img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt </div>
  </div>
</div>

            </div>
            <div class="five wide column">
                <div class="ui billboard test ad subject" data-text="排行榜">
                    

                </div>
            </div>
        </div>
    </div>

</div>
<div class="ui panorama test ad" data-text="全景图"></div>
    </div>
</template>
<script>
import sowing from './component/Sowing.vue'
export default {

        mounted() {
    $('.ui.dropdown').dropdown({
    on: 'hover',
    transition: 'slide down'
})

$('.ui.sidebar')
    .sidebar('attach events', '.toc.item')

        },
	data () {
			return {


      }
			
			
		},
		methods: {
            createtowork(){

            },
            toLogin(){
                this.$router.push({ path: 'login' });

            },
            toRegister(){
                this.$router.push({ path: 'register' });

            },
            // powershow(){
            //     if(this.getCookie("uerName")){
            //         // this.$store.commit("setUser",this.getCookie("uerName"));
            //         console.log(this.$store.state.login.userName)

            //     }
            // },
            loginout(){
                console.log("asdsa");
    //                       this.getRequest("logout").then((res) => {
            
    // })
            //    this.getRequest("logout").then((res) => {
            //         this.$router.push({ path: 'login' });
            //    });
            //        console.log(res);
                   this.delCookie("uerName");
                   this.$router.push({ path: 'login' });
        
            //   });
               
            }
            
 

		},
        		components: {
            'sowing': sowing,
}
    }
</script>
<style scoped>
.ad{
    background: black;
    width: 100% !important;
}
    .login {
    margin-right: 1em !important;
}

.register {
    margin-right: 1em !important;
}

.create-work {
    margin-right: 1em !important;
}

.ui.container a {
    font-size: 1.3em;
    margin: 0em !important;
}

.dropdown.user {
    margin-right: 1em;
}

.rotation.chart {
    width: auto !important;
    height: 400px !important;
}

.ranking {
    width: auto !important;
    height: 400px !important;
}

.subject {
    width: auto !important;
    height: 550px !important;
}

.toc.item {
    display: none !important;
}
.card{
     width: auto !important;
}

@media only screen and (max-width: 767px) {
    .secondary.secondary.menu .item {
        display: none !important;
    }

    .secondary.secondary.menu .toc.item,
    .secondary.secondary.menu .right.item {
        display: block !important;
    }
}

@media only screen and (max-width: 991px) {
    .search.item {
        display: none !important;
    }
}
</style>