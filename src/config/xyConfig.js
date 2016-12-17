/**
 * Created by Administrator on 2016/12/14 0014.
 */
'use strict';

const xyConfig={};
xyConfig.install=function(Vue,options){
  "use strict";
    let setting=options || {};
    Vue.conf={
        isHttps:"https:" == document.location.protocol,
        isImgHttps:false,
        baseUrl:'',
        webUrl:this.isHttps?'https://www.xyhuzhu.com':'http://www.xyhuzhu.com',
        imgUrl:this.isImgHttps?'https://www.xyhuzhu.com':'http://www.xyzhu.com',
    }
    Object.defineProperties(Vue.prototype,{
        $xyConf:{
          get:function(){
              return Vue.conf;
          }
        }
    })
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xyConfig);
}
module.exports=xyConfig;
