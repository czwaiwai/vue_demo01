<template>
  <transition name="fade">
      <div v-show="isShow"  class="weui-mask"  @click="close" ></div>
  </transition>
</template>
<style>
  .fade-enter-active,.fade-leave-active{
      transition:opacity .3s;
  }
  .fade-enter,.fade-leave-active{
    opacity:0 ;
  }

</style>
<script type="text/ecmascript-6">
    export default{
        props:['closable'],
        data(){
          return {
              isShow:true
          }
        },
        methods:{
          close(e){
              if(!this.closable) return
              this.isShow=false
              this.$emit('on-close',e)
          },
          show(){
             this.isShow=true
          }
        }
    }
</script>
