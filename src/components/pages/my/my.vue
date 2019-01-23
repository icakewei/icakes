
<template>
	<div class='my'>
     <router-view></router-view>
     <bottom></bottom>
	</div>
</template>
<script>
//my主页面， 如果有用户名就显示user.vue页面，如果没有，就显示登录或者注册的页面
import bottom from '../../Common/Xfooter.vue'
export default{
	name:'My',
	components:{bottom},
    data(){
    	return {
          
    	}
    },
    computed:{
    	
    },
    methods:{

    },
    created(){
      this.$store.commit('setName');
      this.username= this.$store.state.name;
      if(this.username==null){
       this.$router.replace('/app/user')
      }else{
        this.$router.replace('/app/mine')
      }
    },
  }	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.my{
    .padding(45,0,51,0);
	
}
</style>