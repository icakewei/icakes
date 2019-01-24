<template>
  <div id="detail">
    <Header></Header> 
    <detailXinxi></detailXinxi>
    <detailFoot></detailFoot>
   
  </div>
</template>
<script>
import Header from "../../Common/Header.vue";
import detailFoot from "./detailFoot.vue";
import detailXinxi from "./detailXinxi.vue";
export default {
  components: {
    Header,
    detailFoot,
    detailXinxi
  }
};
</script>
<style scoped>
#detail{
  background: #fff;
}


</style>

