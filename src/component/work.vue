<template>
<div class="ui blurring segment dialog">
 <div class="ui inverted dimmer"><div class="ui centered card">
  <div class="content">
    <div class="header">修改名称</div>
    <div class="ui divider"></div>
    <div class="ui fluid icon input">
  <input type="text" placeholder="请输入..." v-model="newName">
</div>
<div class="ui hidden divider"></div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button" @click="keepName" >确定</div>
      </div>
    </div>
  </div>
</div></div>
      <div class="pusher">
    <div class="ui segment">
        <div class="ui inverted large teal secondary top fixed menu">
            <div class="ui container">
                <div class="head item"><a >易享说</a></div>
                <a class="item" @click="tohome">首页</a>
                <a class="item" >专题</a>
                <a class="item">精选</a>
                <a class="item">留言板</a>
            </div>
            <div class="right item">
                <div v-show=this.$store.state.login.IsExsit class="ui floating dropdown icon">
                    <div  class="ui pointing dropdown user">
                        <img class="ui circular avatar image" >
                        <span >{{this.$store.state.login.userName}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="ui vertical stripe segment container">
        <div class="ui grid">
            <div class="four wide column Nfiles">
                <button class="ui fluid button" @click="NewF">
  <i class="plus icon"></i>
  新建文集
</button>
<div class="ui hidden divider"></div>
<div class="ui vertical fluid  accordion menu leftMenu">
     <div class="item" v-for="i in Anthology">
     <i class="remove icon" @click="deleteItem(i.id,i.fileName)"></i><i class="write square icon" @click="modifyItem(i.id,i.fileName)" ></i><a class=" title" @click="getItem(i.id)">{{i.fileName}}</a>
    <div class=" content">
        <button class="tiny ui basic fluid button" @click="newArticle(i.id)">
  <i class="add circle icon"  ></i>
  新建文章
        </button>
<div class="ui divider"></div>
        <div class="grouped fields">
          <div class="field" v-for="li in Items">
            <div class="ui grid">
          <div class="row">
              <div class="twelve wide column">
                   <label @click="showEdit">{{li.fileName}}</label>
              </div>
              <div class="four wide column">
  <i class="remove icon" @click="removeItem(li.id)"></i>
 </div></div></div></div>
    
  </div>
</div>
  </div>
</div>
</div>
     <div class="twelve wide column edi" v-show="this.showOff">
   <button class="ui fluid button" @click="outFile">
  <i class="plus icon"></i>
  发布文章
</button>
          <form class="ui form">
  <div class="field">
    <label>标题内容</label>
    <input type="text" name="first-name" placeholder="标题内容" v-model="titleArt">
  </div>
</form>
<div class="ui horizontal divider"></div>
    <div>
   <div id="div1" class="toolbar">
    </div>
    <div id="div2" class="text"> <!--可使用 min-height 实现编辑区域自动增加高度-->
        <p>请输入内容</p>
    </div>
    </div>
    <button @click="ss">asd</button>
            </div>
        </div>
    </div>  
</div>
</div>
</template>
<script>
import {getCookie,setCookie,delCookie} from '../utils/cookie_mod'
import axios from 'axios'
   import E from 'wangeditor'
     export default {
       created(){
       this.postRequest('/collectedWork/all', null).then((res) => {
              if(res.data.code=="2222"){
      delCookie("uerName");
  this.$router.push({ path: 'login' });

    }
           if(res.data.content.length==0){
                let data={
                  id: null,
                  workname:"我的文集"
              }
                  this.postRequest('/collectedWork/work', data).then((res) => {
           this.postRequest('/collectedWork/all', null).then((res) => {
                this.Anthology=[];
              console.log(res.data);
              for(let i=0; i<res.data.content.length; i++){
              this.Anthology.push({
                          id: res.data.content[i].id,
                    fileName: res.data.content[i].workName    });  };})  })
           }
           else{
                this.Anthology=[];
              console.log(res.data);
              for(let i=0; i<res.data.content.length; i++){
              this.Anthology.push({
                    id: res.data.content[i].id,
                    fileName: res.data.content[i].workName     
                });
              };
       }
     
      })
       },
      name: 'editor',
      data () {
        return {
          Anthology:[],
          Items:[],
          newName:'',
          keepid:10,
          articleId:1,
          editorContent: '',
          titleArt:null,
          showOff:false
        }
      },
      methods: {
          ss(){
                                 var _this=this;
                        var username="15730332797";
                        var password="123456";
                        let params = new URLSearchParams();
                        params.append('username', username);
                        params.append('password', password);
                          console.log("here")  
                      axios.post('http://47.96.76.206:8080/login',
                                params
                        ).then(function(res){
                          console.log("here");            
                        }).catch(function(err){
                         
                        });
          },
          showEdit(){
              this.showOff=true;
          },
          removeItem(id){
              this.getRequest("/article/del/"+id).then((res) => {
                   this.getRequest("/article/works/"+this.articleId).then((res) => {
                   this.Items=[];
             for(let i=0; i<res.data.content.length; i++){
              this.Items.push({
                    id: res.data.content[i].id,
                    fileName: res.data.content[i].articleTitle     
                });
              }
    })

              })
          },
          getItem(id){
               this.articleId=id;
               this.getRequest("/article/works/"+id).then((res) => {
                   this.Items=[];
             for(let i=0; i<res.data.content.length; i++){
              this.Items.push({
                    id: res.data.content[i].id,
                    fileName: res.data.content[i].articleTitle     
                });
              }
    })

          },
          newArticle(id){
              if(this.titleArt==null||this.titleArt==""||this.titleArt.split(" ").join("").length == 0){
                  var titleA="新建的文章"
              }else{
                  var titleA=this.titleArt
              }
                   let data={
	"workId":id,
    "articleTitle": titleA,
    
              }
                  this.postRequest('/article/build', data).then((res) => {
                                   this.getRequest("/article/works/"+this.articleId).then((res) => {
                   this.Items=[];
             for(let i=0; i<res.data.content.length; i++){
              this.Items.push({
                    id: res.data.content[i].id,
                    fileName: res.data.content[i].articleTitle     
                });
              }
    })
          console.log(res)
      })
  
          },
          outFile(){
              let data={
                  id: "32",
                  workId: "1",
                  articleTitle:this.titleArt,
                  articleContent:this.editorContent
              }
          },
          keepName(){
              let data={
                  id: this.keepid,
                  workname: this.newName
              }
                this.postRequest('/collectedWork/work', data).then((res) => {
              this.postRequest('/collectedWork/all', null).then((res) => {
                this.Anthology=[];
              for(let i=0; i<res.data.content.length; i++){
              this.Anthology.push({
                          id: res.data.content[i].id,
                    fileName: res.data.content[i].workName     
                });
              };
     
      })
     
      })
                $('.segment').dimmer('hide');
          },
          modifyItem(id,name){
              console.log("e");
              this.keepid=id;
              $('.dialog').dimmer('show');},
          deleteItem(id,name){
              let data={
                  id:id
              }
           this.postRequest('/collectedWork/remove', data).then((res) => {
                   this.postRequest('/collectedWork/all', null).then((res) => {
                this.Anthology=[];
              for(let i=0; i<res.data.content.length; i++){
              this.Anthology.push({
                          id: res.data.content[i].id,
                    fileName: res.data.content[i].workName     
                });
              };
      })    
      })
          },
          NewF(){
              let data={
                  id: null,
                  workname:"myfiless"
              }
                  this.postRequest('/collectedWork/work', data).then((res) => {
           this.postRequest('/collectedWork/all', null).then((res) => {
                this.Anthology=[];
              console.log(res.data);
              for(let i=0; i<res.data.content.length; i++){
              this.Anthology.push({
                          id: res.data.content[i].id,
                    fileName: res.data.content[i].workName     
                });
              };
     
      })
     
      })
          },
          tohome(){
                this.$router.push({ path: 'Home' });
 
          },
        // getContent: function () {
        //     this.
        //     alert(this.editorContent)
        // }
      },
      mounted() {
$('.leftMenu')
  .accordion()
;
        var editor = new E('#div1', '#div2')  // 两个参数也可以传入 elem 对象，class 选择器
          editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片
          editor.customConfig.menus = [
    'head',  // 标题
    'bold',  // 粗体
    'fontSize',  // 字号
    'italic',  // 斜体
    'link',  // 插入链接
    'list',  // 列表
    'quote',  // 引用
    'emoticon',  // 表情
    'image',  // 插入图片
    'video',  // 插入视频
    'code',  // 插入代码
    ];
    
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        };
        editor.customConfig.uploadImgServer = 'http://47.96.76.206:8080/file/upload'
        editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
        editor.customConfig.uploadImgMaxLength = 20;   
        editor.customConfig.uploadFileName = 'file';
        // editor.customConfig.uploadImgHeaders = {
        // 'Content-type': 'application/x-www-form-urlencoded'}
        editor.customConfig.uploadImgHooks = {
        customInsert: function (insertImg, result, editor) {
            console.log(result);
                // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
                // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
         
                // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
                // var url =result.data;
                // insertImg(url);
         
                // result 必须是一个 JSON 格式字符串！！！否则报错
            }
        }
        

        editor.create();
      }
    }
</script>
<style scoped>
 .toolbar {
            border: 1px solid #ccc;
        }
        .text {
             border: 1px solid #ccc;
            height: 500px;
        }
    .Nfiles{
    width: auto !important;
    height: 650px !important;
    }

/*.edi {
    width: auto !important;
    height: 650px !important;
}*/


</style>