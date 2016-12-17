<template>
  <div class="page">
    <div v-if="title" >
      <header-component >{{title}}</header-component>
      <div  class="activePage" v-html="content"></div>
    </div>
  </div>
</template>
<style >
  .activePage .item{
    background:#FFF;
    padding:15px;
  }
  .activePage .item h3{
    font-size:14px;
    font-weight:400;
    color:#131313;
    margin-bottom:5px;
  }
  .activePage .item p{
    font-size:14px;
    color:#666;
  }
 .flex_box{
    display:flex;
 }
</style>
<script type="text/ecmascript-6">
    import HeaderComponent from '../components/header.vue'
    export default{
        //template:'<div>这是我要替换的模板</div>',
        data(){
            return {
                //pageData:null
              title:null,
              content:null,
            }
        },
        components: {
            HeaderComponent,
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
              this.$http.jsonp('http://www.xyhuzhu.com/activity/detail/'+this.$route.params.id).then((response)=>{
                  let res,tmp;
                   res=response.data;
                  tmp=res.data.content.replace(/[\s\S]*<ion-content.*>([\s\S]*)<\/ion-content>[\s\S]*/img,'$1');
                  this.content=tmp.replace(/(src|ng-src)=['|"](.*?)['|"]/ig,' src="http://www.xyhuzhu.com/app/$2"');
                  this.title=res.data.title;
              });
            }
        }
    }
</script>
