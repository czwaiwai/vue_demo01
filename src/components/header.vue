<template>
    <div>
        <header class="head-wrap weui-flex">
            <div class="head-left"  @click="back">返回</div>
            <div class="head-title weui-flex__item" ><slot >{{title}}</slot></div>
            <div class="head-right"></div>
        </header>
    </div>
</template>
<style>
    .head-wrap{
        font-size:15px;
        height:44px;
        line-height:44px;
        background:#FFF;
    }
    .head-title{
        font-size:17px;
        text-align:center;
    }
    .head-left,.head-right{
        min-width:70px;
    }
</style>
<script>
    export default{
        name:'headerComponent',
        props:['title','isBack'],
        methods:{
            back:function(){
                window.history.back();
            }
        }
    }
</script>
