<template>
      <div class="page">
        <div  v-if="userInfo" class="weui-flex account_head">
            <div class="header_img">
                <img :src="'http://www.xyhuzhu.com'+userInfo.headImg">
            </div>
            <div  class="weui-flex__item padding-left15 padding-top main_text">
                <h3>{{userInfo.userName}} <span>计划会员</span></h3>
                <p>{{userInfo.schoolName}}</p>
            </div>
            <div >
                <a @click="clickSign()"  class="weui-btn weui-btn_mini weui-btn_plain-green margin-top20">{{signDay}}</a>
            </div>
        </div>
        <div class="half_circle " >
          <div></div>
        </div>
        <div class="weui-cells" style="margin-top: -1px;">
          <router-link class="weui-cell weui-cell_access" to="/detail">
            <div class="weui-cell__bd">
              <p>我的保障</p>
            </div>
            <div class="weui-cell__ft">查看凭证、充值</div>
          </router-link>
          <router-link class="weui-cell weui-cell_access"  to="/detail">
            <div class="weui-cell__bd">
              <p>单身汪计划</p>
            </div>
            <div class="weui-cell__ft"></div>
          </router-link>
          <router-link class="weui-cell weui-cell_access"  to="/detail">
            <div class="weui-cell__bd">
              <p>我的读书互助</p>
            </div>
            <div class="weui-cell__ft"></div>
          </router-link>
          <router-link class="weui-cell weui-cell_access"  to="/detail">
            <div class="weui-cell__bd">
              <p>申请赔付</p>
            </div>
            <div class="weui-cell__ft"></div>
           </router-link>
        </div>
        <div class="weui-cells margin-top" >
          <router-link class="weui-cell weui-cell_access"  to="/detail">
            <div class="weui-cell__bd">
              <p>爱心足迹</p>
            </div>
            <div class="weui-cell__ft">查看爱心捐赠</div>
          </router-link>
          <router-link class="weui-cell weui-cell_access"  to="/detail">
            <div class="weui-cell__bd">
              <p>爱心分享</p>
            </div>
            <div class="weui-cell__ft">邀请好友共享保障</div>
          </router-link>
        </div>
        <div class="weui-cells margin-top" >
          <router-link class="weui-cell weui-cell_access" to="/account">
            <div class="weui-cell__bd">
              <p>设置</p>
            </div>
            <div class="weui-cell__ft"></div>
          </router-link>
        </div>
        <div class="weui-cells margin-top" >
          <router-link class="weui-cell weui-cell_access" to="/activePage/21">
            <div class="weui-cell__bd">
              <p>常见问题</p>
            </div>
            <div class="weui-cell__ft"></div>
          </router-link>
        </div>
        <div class="text-center margin-top20">
          <a class="tel_btn" href="tel:4008-333-235">
            <i class="jushu-icon jushu-ion-ios-telephone"></i> 4008-333-235
          </a>
          <p><span class="fs12">客服时间：9:00-18:30</span></p>
        </div>
      </div>
</template>
<style scoped>
  .account_head{
    background: #b8f1ed;
    height: 100px;
    padding-left: 15px;
    padding-top: 15px;
    padding-right: 15px;
  }
  .header_img  img{
    width: 70px;
    height: 70px;
    border-radius:100%;
  }
  .main_text{
    font-size:14px;
    color:#009f96;
  }
  .main_text h3{
    font-weight:700;
    font-size:16px;
  }
  .main_text h3 span{
    font-size:14px;
    font-weight:300;
    padding-left:15px;
  }

  .margin-top{
    margin-top:10px;
  }
  .margin-top20{
    margin-top:20px;
  }
  .margin-top5{
      margin-top:5px;
  }
  .half_circle{
    background:#b8f1ed;height: 1rem;padding:0;
    overflow: hidden;
    position: relative;
    z-index:1;
  }
  .half_circle>div{
    position: absolute;width: 32rem;margin-left: -8rem;height: 15rem;top: 0;background: #FFF;left: 0;border-radius: 100%;
  }
  .tel_btn {
    color: #0091db;
    background-color: #FFF;
    line-height: 30px;
    text-decoration: none;
    padding: 3px 20px;
    width: 160px;
    border: 1px solid #909090;
    font-size: 18px;
    border-radius: 50px;
    height: 40px;
  }
</style>
<script type="text/ecmascript-6">
    import HeaderComponent from '../components/header'
    export default{
        data(){
            return {
                userInfo:null,
                qrcode:null,
                signDay:"签到",
            }
        },
        components: {
            HeaderComponent,
        },
        created(){
          this.getData();
        },
        methods:{
          clickSign(){
            console.log("点击签到按钮");
              this.$http.jsonp('http://www.xyhuzhu.com/account/sign').then((response)=>{
                  let res=response.data;
                  this.signDay="已签到";
                  console.log(res.retMsg);
              });
          },
          getData(){
              this.$http.jsonp('http://www.xyhuzhu.com/account/my').then((response)=>{
                  let res=response.data;
                  this.userInfo=res.data.UserInfo;
                  this.qrcode=res.data.ErWeiMaVO;
              });
          }
        }
    }
</script>
