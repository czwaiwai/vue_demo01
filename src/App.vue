<template>
    <div class="container">
        <transition :name="transitionName">
            <router-view ></router-view>
        </transition>
        <transition :name="transitionName">
          <footer-component v-show="showBar">
            <tab-item icon-class="jushu-logo" link="/home">互助计划</tab-item>
            <tab-item icon-class="jushu-bangbangmang1" link="/helper">校友帮帮</tab-item>
            <tab-item icon-class="jushu-faxian2"  link="/playground">发现</tab-item>
            <tab-item icon-class="jushu-account-outline"  link="/account">我</tab-item>
          </footer-component>
        </transition>
    </div>
</template>
<style src="assets/css/weui.css" ></style>
<style>
    *, *:before, *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    html,body{
      height:100%;
      font-size:16px;
      background:#e9e9e9;
    }
    ul,li{
      list-style: none;
    }
    .text-center{
      text-align:center;
    }
    .container {
      max-width: 640px;
      margin: 0 auto;
      overflow-x: hidden;
      height:100%;
    }
    .page{
      background:#e9e9e9;
      width: 100%;
      max-width:640px;
      margin:0 auto;
      padding-bottom:47px;
      height: 100%;
    }
    .padding_h{
      padding:0 10px;
    }
    .padding_v{
      padding:10px 0;
    }
    .padding_h15{
      padding:0 15px;
    }
    .padding_v15{
      padding:15px 0;
    }
    .padding-top{
      padding-top:10px;
    }
    .padding-bottom{
      padding-bottom:10px;
    }
    .padding-left{
      padding-left:10px;
    }
    .padding-right{
      padding-right:10px;
    }
    .padding-top15{
      padding-top:15px;
    }
    .padding-bottom15{
      padding-bottom:15px;
    }
    .padding-left15{
      padding-left:15px;
    }
    .padding-right15{
      padding-right:15px;
    }
    .fs12{
      font-size:12px;
    }
    .fs13{
      font-size:13px;
    }
    .fs14{
      font-size:14px;
    }
    .fs15{
      font-size:15px;
    }
    .fs16{
      font-size:16px;
    }
    .fs17{
      font-size:17px;
    }
    .fs18{
      font-size:18px;
    }
    .weui-btn_plain-green {
      color: #019E97;
      border: 1px solid #019E97;
    }
    /* 跳转页面动画 */
    .slide-enter,
    .slide_back-enter {
        position: absolute;
        width: 100%;
    }
    .slide-leave,
    .slide_back-leave {
        position: absolute;
        width: 100%;
    }
    .slide-enter-active,
    .slide_back-enter-active {
        transition: all 0.3s linear;
    }
    .slide-leave-active {
        position: absolute;
        transition: all 0.3s linear;
        transform: translate(-100%);
    }
    .slide-enter{
        transform: translateX(100%);
    }
    .slide_back-leave-active {
        position: absolute;
        transition: all 0.3s linear;
        transform: translate(100%);
    }
    .slide_back-enter {
        transform: translateX(-100%);
    }
</style>
<script>
    import HeaderComponent from './components/header'
    import footerComponent from './components/footer'
    import tabItem from './components/tabItem'
    const bar=['/home','/helper','/playground','/account'];
    export default{
       // props:['transition'],
        data(){
            return {
                showBar:true,
                transitionName:'slide'
            }
        },
        components: {
            HeaderComponent,
            footerComponent,
            tabItem
        },
        created(){
          console.log(this);
          bar.indexOf(this.$route.path)>=0?this.showBar=true:this.showBar=false
        },
         watch:{
            '$route'(to,from){
              bar.indexOf(to.path)>=0?this.showBar=true:this.showBar=false;
              const toDepth = to.path.substring(0, to.path.length).split('/').length
              // 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
              // 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
              // 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
              const fromDepth = from.path.substring(0, from.path.length).split('/').length
              this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
              // 根据路由深度，来判断是该从右侧进入还是该从左侧进入
            }
         }
    }
</script>
