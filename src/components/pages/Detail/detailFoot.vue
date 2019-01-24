<template>
  <div class="bottom-bar" data-spm="bottom-bar">
    <div class="btn-shop">
      <span class="taobao-iconfont icon-highlight">삍</span>
      <span class="btn-text">首页</span>
    </div>
    <div class="btn-wangwang">
      <span class="taobao-iconfont">쁭</span>
      <span class="btn-text">返回</span>
    </div>
    <div class="btn-fav">
      <span class="taobao-iconfont">뀝</span>
      <span class="btn-text">收藏</span>
    </div>
    <div class="bottom-bar-btn cart" @click="addCool">
      <span class="btn-title">加入购物车</span>
    </div>
    <div class="bottom-bar-btn buy">
      <span class="btn-title">立即购买</span>
    </div>
  </div>
</template>
<script>
export default {
   data(){
    return {shuju:[
        JSON.parse(localStorage.getItem("name"))
    ]}
  },
  methods: {
    addCool() {
      this.$axios.get("http://localhost:3000/setting/addUser", {
        params: {
          ename: this.shuju[0].ename,
          cname: this.shuju[0].cname,
          imgurl: this.shuju[0].imgurl,
          miaoshu: this.shuju[0].miaoshu,
          price: this.shuju[0].price,
        }
      });
    }
  }
};
</script>
<style scoped>
.hide {
  display: none !important;
}
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  max-width: 768px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  z-index: 110;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0 -0.01rem 0.06rem 0;
  padding-right: 0.05rem;
  padding-bottom: env(safe-area-inset-bottom);
  padding-bottom: constant(safe-area-inset-bottom);
}
.bottom-bar > div {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 0.5rem;
  height: 0.5rem;
  white-space: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  color: #999;
  padding: 0 0.15rem;
  margin: 0.02rem 0;
}
.bottom-bar > div .taobao-iconfont {
  font-size: 0.18rem;
}
.bottom-bar > div .btn-text {
  font-size: 0.1rem;
  line-height: 0.2rem;
}
.bottom-bar .bottom-bar-btn {
  width: 34%;
  height: 1rem;
  bottom: 0.12rem;
  line-height: 0.4rem;
  color: #fff;
  text-align: center;
  font-size: 0.14rem;
  cursor: pointer;
  line-height: 1;
}
.bottom-bar .bottom-bar-btn.btn-disabled {
  color: rgba(255, 255, 255, 0.4);
}
.bottom-bar .bottom-bar-btn .btn-title {
  font-size: 0.14rem;
  font-weight: bold;
}
.bottom-bar .bottom-bar-btn .btn-sub-title {
  margin-top: 0.05rem;
  font-size: 0.1rem;
}
.bottom-bar .bottom-bar-btn.cart {
  border-radius: 0.5rem 0 0 0.5rem;
  background-image: -webkit-linear-gradient(left, #ffc500, #ff9402);
  background-image: linear-gradient(to right, #ffc500, #ff9402);
}
.bottom-bar .bottom-bar-btn.presaleBuy {
  background-color: #7555f4;
  border-radius: 0 0.2rem 0.2rem 0;
}
.bottom-bar .bottom-bar-btn.buyJhs1 {
  background-image: -webkit-linear-gradient(left, #ff6422, #ff0040);
  background-image: linear-gradient(to right, #ff6422, #ff0040);
  border-radius: 0 0.2rem 0.2rem 0;
}
.bottom-bar .bottom-bar-btn.bottom_bar_remind {
  border-radius: 0 0.2rem 0.2rem 0;
  background-image: -webkit-linear-gradient(left, #3bdd78, #21c29b);
  background-image: linear-gradient(to right, #3bdd78, #21c29b);
}
.bottom-bar .bottom-bar-btn.buy {
  border-radius: 0 0.5rem 0.5rem 0;
  background-image: -webkit-linear-gradient(left, #ff7a00, #fe560a);
  background-image: linear-gradient(to right, #ff7a00, #fe560a);
}
.bottom-bar .bottom-bar-btn.gift {
  border-radius: 0.2rem 0 0 0.2rem;
  border: 1px solid #00a862;
  color: #00a862;
  background-color: transparent;
}
.bottom-bar .bottom-bar-btn.gift .btn-title {
  font-weight: normal;
}
.bottom-bar .bottom-bar-btn.gift.btn-disabled {
  border-color: #b5b5b5;
  color: #b5b5b5;
}
.bottom-bar .bottom-bar-btn.add-giftbox {
  border-radius: 0 0.2rem 0.2rem 0;
  background-color: #00a862;
}
.bottom-bar .bottom-bar-btn.add-giftbox .btn-title {
  font-weight: normal;
}
.bottom-bar .bottom-bar-btn.add-giftbox.btn-disabled {
  background-color: #b5b5b5;
}
.bottom-bar .bottom-bar-btn.single {
  width: 100%;
  border-radius: 0.2rem;
}
.bottom-bar .cart-item-count {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  flex-grow: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  width: 0.38rem;
  height: 0.38rem;
  margin: 0 0.15rem;
  background-image: url("https://gw.alicdn.com/tfs/TB1BKENXrvpK1RjSZFqXXcXUVXa-148-148.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.bottom-bar .cart-item-count > span {
  position: absolute;
  display: inline-block;
  color: #00653e;
  top: 0.17rem;
  left: 0.09rem;
  font-size: 0.12rem;
  width: 0.2rem;
  height: 0.13rem;
  text-align: center;
  line-height: 1;
}
.bottom-bar .contact-seller {
  margin-right: 0.15rem;
  color: #00a862;
}
.bottom-bar .contact-seller .taobao-iconfont {
  font-size: 0.22rem;
}
.bottom-bar .contact-seller .btn-text {
  line-height: 0.18rem;
}
.bottom-bar .btn-presale {
  width: 100%;
  height: 0.4rem;
  bottom: 0.12rem;
  line-height: 0.4rem;
  color: #fff;
  text-align: center;
  font-size: 0.14rem;
  cursor: pointer;
  background-color: #7555f4;
  border-radius: 0.2rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  padding-right: 0;
}
.bottom-bar .btn-presale.waiting {
  background-image: -webkit-linear-gradient(left, #3dd98b, #0ac39b);
  background-image: linear-gradient(to right, #3dd98b, #0ac39b);
  background-color: #3dd98b;
}
.bottom-bar .btn-presale .presale-text {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 50%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  font-size: 0.1rem;
  line-height: 1;
  text-align: left;
}
.bottom-bar .btn-presale .presale-text > span {
  margin: 0.02rem 0;
}
.bottom-bar .btn-presale .presale-text > span.presale-text-top {
  font-size: 0.125rem;
}
.bottom-bar .btn-presale .presale-pay {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  font-size: 0.11rem;
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 0.15rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.bottom-bar .btn-presale .presale-pay.btn-disabled {
  color: rgba(255, 255, 255, 0.4);
}
.bottom-bar .btn-presale .presale-pay .presale-pay-top {
  font-weight: bold;
}
.bottom-bar .btn-presale .presale-pay .presale-pay-bottom {
  font-size: 0.1rem;
}
</style>


