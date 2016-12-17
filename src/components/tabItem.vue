<template>
        <router-link  :to="link"   class="weui-tabbar__item" @click="clickItem" active-class="weui-bar__item_on">
            <span style="display: inline-block;position: relative;">
                <span class="weui-tabbar__icon"><i :class="iconClass" class="icon"></i></span>
            </span>
            <p class="weui-tabbar__label"><slot></slot></p>
        </router-link>
</template>
<style scoped>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color:#019E97;
  }
</style>
<script>
    export default{
        props:['iconClass','iconClassOut',"iconName","link"],
        computed:{

        },
        methods:{
            clickItem(){
                  console.log("我被点击了");
            }
        }
    }
</script>
