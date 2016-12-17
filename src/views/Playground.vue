<template>
      <div class="page">
        <div style="background:#e9e9e9;padding-top:1px;"></div>
        <div class="weui-cells" style="margin-top: 10px;">
          <router-link class="weui-cell weui-cell_access" to="/detail">
            <div class="weui-cell__bd">
              <p>校友圈</p>
            </div>
            <div class="weui-cell__ft"></div>
          </router-link>
          </div>
          <w-mask :closable="true"></w-mask>
      </div>
</template>
<style>

</style>
<script>
    import wMask from '../components/prompt/mask/mask'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components:{
          wMask
        }
    }
</script>
