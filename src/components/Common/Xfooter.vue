<template>
  <div class="mobile-footernav">
    <ul>
      <li v-for="(item,idx) in data" :key="idx" @click="changechannel(idx)" class="footernav-index-li footernav-li">
        <router-link :to="`/app${item.link}`"  :id=" `${item.class}`" :class="{'active':idx == txt}">
          <div v-text="item.channel"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          link:"/home",
          class: 'footernav-index',
          channel:"首页",
        },
        {
          link: "/good",
          class: 'footernav-class',
          channel:"分类列表",
        },
        {
          link: "/emportCar",
          class: 'footernav-cart',
          channel:"购物车",
        },
        {
          link:"/mine",
          class: 'footernav-account',
          channel:"我",
        }
      ],
      txt:0
    }
  },
  methods:{
    changechannel(idx){
      this.txt = idx
      } 
  }
};
</script>
<style scoped>
.footer {
  height: auto;
}
.footer_have_none {
  height: 67px;
  margin: 0;
  padding-right: 60px;
  background: url("//asset.ibanquan.com/asset/5a32190722bd3406c000226f/footer_have_none?design_theme_id=0&v=1513232647")
    no-repeat right center;
  background-size: 100px;
  text-align: right;
  line-height: 60px;
  color: #d5d5d5;
}

.mobile-footernav {
  height: 50px;
  line-height: 50px;
  background: #fff;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  opacity: 0.94;
  border-top: 1px solid #dcdcdc;
}
.mobile-footernav ul {
  font-size: 0;
  height: 100%;
  padding: 0;
  margin: 0;
}
.mobile-footernav li {
  display: inline-block;
  width: 25%;
  height: 100%;
  text-align: center;
}
.mobile-footernav a {
  display: inline-block;
  padding-top: 33px;
  line-height: normal;
  text-align: center;
  font-size: 12px;
  height: 100%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: 50% 8px;
  background-size: 25%;
  width: 100%;
  color: #d5d5d5;
}
.footernav-li div {
  transform: scale(0.8, 0.8);
}

.footernav-li .active div {
  color: #000;
}
.footernav-cart {
  position: relative;
}
#yhsd_topCart_quantityTitle {
  position: absolute;
  top: 2px;
  background-color: #d55;
  color: #fff;
  width: 22px;
  height: 18px;
  border-radius: 15px;
  line-height: 18px;
  right: 21px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  transform: scale(0.8, 0.8);
}
.mobile-footernav #footernav-index {
  background-image: url("//asset.ibanquan.com/asset/5a32190422bd3406c000224a/mobi_menu_icon1?design_theme_id=0&v=1513232644");
}
.mobile-footernav #footernav-class {
  background-image: url("//asset.ibanquan.com/asset/5a32190322bd3406c0002244/mobi_menu_icon2?design_theme_id=0&v=1513232643");
}
.mobile-footernav #footernav-cart {
  background-image: url("//asset.ibanquan.com/asset/5a32190322bd3406c000223e/mobi_menu_icon3?design_theme_id=0&v=1513232643");
}
.mobile-footernav #footernav-account {
  background-image: url("//asset.ibanquan.com/asset/5a32190222bd3406c0002238/mobi_menu_icon4?design_theme_id=0&v=1513232643");
}
.mobile-footernav #footernav-index.active {
  background-image: url("//asset.ibanquan.com/asset/5a32190422bd3406c0002247/mobi_menu_icon1_active?design_theme_id=0&v=1513232644");
}
.mobile-footernav #footernav-class.active {
  background-image: url("//asset.ibanquan.com/asset/5a32190322bd3406c0002241/mobi_menu_icon2_active?design_theme_id=0&v=1513232643");
}
.mobile-footernav #footernav-cart.active {
  background-image: url("//asset.ibanquan.com/asset/5a32190322bd3406c000223b/mobi_menu_icon3_active?design_theme_id=0&v=1513232643");
}
.mobile-footernav #footernav-account.active {
  background-image: url("//asset.ibanquan.com/asset/5a32190222bd3406c0002235/mobi_menu_icon4_active?design_theme_id=0&v=1513232642");
}

.payment-choose-bank-btn,
.add-address,
.cart-balance {
  bottom: 49px;
}
.create-order-pay .table-view-cell:last-child,
.order-pay .table-view-cell {
  padding: 0 0 0 7px;
}
.table-view.order-pay,
.create-order-pay {
  border-bottom: none;
}
.order {
  padding-bottom: 10px;
}
.create-order {
  padding-bottom: 52px;
}

.select-btn-warp {
  background: #fff;
  padding: 15px 10px;
}
.select-btn {
  font-size: 0;
  border: 1px solid #8f8e8f;
  border-radius: 5px;
}

.select-btn {
  font-size: 0;
  border: 1px solid #8f8e8f;
  border-radius: 5px;
}
.select-btn a {
  display: inline-block;
  width: 50%;
  font-size: 12px;
  color: #8f8e8f;
  text-align: center;
  padding: 5px 0;
}
.select-btn a.active {
  color: #fff;
  background: #8f8e8f;
}
.letter-line {
  height: 2px;
  margin-top: 15px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAICAMAAAB+vAntAAAAGFBMVEVWjsbchI3///9WjsZWjsbchI1WjsbchI3BDPM9AAAABnRSTlMAAAAP8PDM+1MNAAAAHUlEQVR4AWNgxw5YGZlAgIGZDTtgYYKCYWHAqAEA5H4KkXfCBjcAAAAASUVORK5CYII=);
}
.table-view.no-bottom {
  border-bottom: none;
}
</style>



