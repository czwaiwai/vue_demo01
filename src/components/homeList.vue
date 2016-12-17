<template>
    <li class="item home_item ">
        <div class="weui-flex">
          <div :class="imgClass" ></div>
          <div class="weui-flex__item padding-left" >
            <h3 v-once >{{title}}</h3>
            <p class="home_text" v-html="desc"></p>
            <!--<span>{{bxId}}</span>-->
          </div>
        </div>
        <div class="home_tag"><p v-once >{{tag}}</p></div>
    </li>
</template>
<style scoped>
    .item{
      background:#FFF;
    }
    .home_item{
      margin-bottom: 10px;
    }
    .home_item .weui-flex{
        padding:15px;
    }
    .home_item h3{
      font-size:16px;
      font-weight:300;
      line-height:1.4;
      margin:0;
    }
    .home_item .home_text{
      font-size:12px;
      line-height:1.5;
    }
    .home_tag {
      color: #009f96;
      padding: 5px 15px;
      background: #fff7ed;
      height: 32px;
      line-height: 22px;
      width: 100%;
      font-size:15px;
    }
    .home_plan{
        background:url('../assets/img/home/home_plan.png')  no-repeat;
        background-size:cover;
        height:80px;width:80px;
        min-width:80px;
    }
    .plan_logo1{background-position:0 0;}
    .plan_logo2{background-position:0 -80px;}
    .plan_logo3{background-position:0 -240px;}
    .plan_logo4{background-position:0 -160px;}
    .plan_logo5{background-position:0 -400px;}
    .plan_logo6{background-position:0 -320px;}
    .plan_logo7{background-position:0 -481px;}
    .plan_logo8{background-position:0 -561px;}
</style>
<script>
    export default{
        props:['index','title','bxId','desc','tag','btn'],
        computed:{
            imgClass:function(){
                return  "img_border home_plan plan_logo"+(this.bxId);
            }
        }
    }
</script>
