<template>
      <div class="page">
          <swipe class="my-swipe" :animating="false" >
              <swipe-item v-for="item in banners" class="slide1">
                  <img :src="item.img | imgUrl" style="max-width: 100%;">
              </swipe-item>
          </swipe>
        <router-link to="/activePage/60">
          <div class="weui-flex quan_wei">
              <div class="weui-flex__item text-center">
                <div><i class="icon jushu-touzi " style="color:#009f96;font-size:40px;"></i></div>
                上市公司股东<br /><span>战略投资</span></div>
              <div class="weui-flex__item  text-center">
                <div><i class="icon  jushu-tuoguan" style="color:#009f96;font-size:40px;"></i></div>
                公益基金托管<br /><span>安全透明</span></div>
              <div class="weui-flex__item  text-center">
                <div><i class="icon  jushu-gognshi" style="color:#009f96;font-size:40px;"></i></div>
                保险公估公司<br /><span>专业风控</span></div>
              <div class="weui-flex__item  text-center">
                <div><i class="icon  jushu-free" style="color:#009f96;font-size:40px;"></i></div>
                0平台费<br /><span>100%保障</span></div>
          </div>
          </router-link>
          <ul>
              <li class="home_title">高校联盟 爱心接力</li>
              <home-list v-for="(item,index) in items" :index="index" :bxId="item.bxId" :btn="item.btnText" :title="item.bxName" :desc="item.bxDesrc" :tag="item.tag" ></home-list>
          </ul>
          <ul>
              <li class="home_title">媒体报道</li>
          </ul>
      </div>
</template>
<style>
  .quan_wei{
    background:#FFF;
    padding: 6px 0px 6px;
    color:#131313;
    line-height: 1.5;
    font-size: 0.6rem;
  }
  .quan_wei span{
    color:#656565;
  }
  .home_title {
    margin-top: 15px;
    height: 44px;
    background:#FFF;
    text-align:center;
    padding: 7px 15px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 18px;
    color: #009944;
    position: relative;
  }
  .my-swipe {
      height: 200px;
      color: #fff;
      font-size: 30px;
      text-align: center;
      height: 5.34rem;
  }
  .mint-swipe-items-wrap{
      width:100%;
      height:100%;
      overflow:hidden;
      position:relative;
  }
  .mint-swipe-items-wrap .mint-swipe-item{
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      z-index:0;
  }
  .mint-swipe-items-wrap .mint-swipe-item.is-active{
      z-index:1;
  }
</style>
<script>
    import headerComponent from '../components/header'
    import homeList from '../components/homeList'
    import List from '../components/List'
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default{
        data(){
            return {
                banners:[],
                items:[]
            }
        },
        myfun(num){
            let mod=num%10;
            if(num===mod){
            }
            this.myfun((num/10)+mod);
        },
        components: {
          List,
          homeList,
          headerComponent,
          Swipe,
          SwipeItem
        },
        filters: {
            imgUrl(value){
                return "http://www.xyhuzhu.com/"+value;
            }
        },
        created(){
          var vm=this;
          this.$http.jsonp(this.$xyConf.webUrl+'/home').then(function(response){
               let res=response.data;
                vm.banners=res.data.banner;
                vm.items=res.data.bxList.filter(function(context){
                    return context.bxId!=2;
                });
               // this.$set('gridData', response.data)
          });
       //   console.log(this);
    //     console.log(this.$xyConf,"--------------");
//          this.$http.get('').then(function(data){
//             vm.items = data.body.data;
//            console.log(data.body.data);
//            //vm.$set("items",data.body.data);
//          })
        }
    }
</script>
