<template>
     <div id="xinxi">
      <div><img class="img" :src="`${shuju[0].imgurl}`" alt=""></div>
      <div class="Ename" v-text="shuju[0].ename"></div>
      <div class="Cname" v-text="shuju[0].cname"></div>
      <div class="match" v-text="shuju[0].miaoshu"></div>
      <div class="price" v-text="`￥${shuju[0].price/100}`"></div>
      <div class="pro-detail-morevendor">
        <span class="data_sev_time">送达时间</span>
        <div class="data_sev_time_desc">现在下单，最早
          <span id="Dev_time_desc">今日11 时 17 分</span>送达
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {shuju:[
        JSON.parse(localStorage.getItem("name"))
    ]}
  }
}
</script>
<style scoped>
#xinxi{
  padding-top: 40px;
}
.img{
  width:100%;
}
.pro-detail-morevendor {
    display: block;
    text-decoration: none;
    color: #888;
    line-height: 38px;
    border-width: 8px 0;
    border-color: #eee;
    border-style: solid;
    padding: 0 25px;
    margin: 10px 0px 0;
    font-size: 15px;
    padding-bottom: 50px;
}
.data_sev_time {
  background-image: url();
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 53px 2px;
  font-size: 12px;
  padding-right: 21px;
}
.Ename {
  font-size: 22px;
  font-weight: 900;
  color: #000;
  padding-left: 20px;
}
.Cname {
  font-size: 14px;
  color: #666;
  padding-left: 20px;
}
.match {
  font-size: 14px;
  color: #ccc;
  padding-left: 20px;
}
.price {
  font-size: 20px;
  font-weight: 900;
  color: #919191;
  padding-left: 20px;
}
</style>


