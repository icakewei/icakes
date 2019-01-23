<template>
  <div class="cart-list-group">
    <ul class="cart-list cart-li-align-center cart-list-ctrlbar">
      <li class="cart-li cart-li-justify">
        <div class="checkbox-group checkbox-inline cart-li-lf">
          <input id="yhsdCartCheckAll" type="checkbox" checked>
          <label for="yhsdCartCheckAll" data-btn="checkAll-checked"></label>
        </div>
        <div class="cart-li-mid">
          <span class="cart-li-operator">
            <label for="yhsdCartCheckAll" data-btn="checkAll-checked">全选</label>
          </span>
          <span class="cart-li-operator" data-btn="deleteAllChecked">删除</span>
        </div>
        <div class="cart-li-rt">
          <span class="cart-li-operator" data-btn="cleanUndercarriaged">清除下架商品</span>
        </div>
      </li>
    </ul>
    <ul class="car-list">
      <li
        class="cart-li cart-li-justify cart-li-product"
        data-product_id="931642"
        data-variant_id="4405355"
        data-handle="p000098"
        data-amount="1"
      >
        <div class="checkbox-group checkbox-inline cart-li-lf">
          <input type="checkbox" id="yhsdProduct" checked>
          <label for="yhsdProduct" data-btn="checkOne-checked"></label>
        </div>
        <div class="cart-li-mid">
          <div class="cart-li-product-name">
            <div class="cart-li-product-img">
              <img
                src="//asset.ibanquan.com/image/587afe100dd76c77f0001396/s_120x120.jpeg?epoch=1484455440"
                alt="小草"
              >
            </div>
            <a href="/products/p000098" class="cart-li-product-link">
              <div>小草</div>
            </a>
          </div>
        </div>
        <div class="cart-li-rt">
          <div class="cart-li-product-info">
            <span class="cart-li-product-price-num">¥18.00</span>
            <br>
            <span class="cart-li-product-del" data-btn="delete">删除</span>
          </div>
          <div class="cart-li-product-input">
            <a
              href="javascript:void(0);"
              class="cart-li-product-num-btn cart-li-product-num-reduct disabled"
              data-btn="quantity-minus"
            >-</a>
            <div class="cart-li-product-num">1</div>
            <a
              href="javascript:void(0);"
              class="cart-li-product-num-btn cart-li-product-num-add"
              data-btn="quantity-add"
            >+</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
.cart-list-group {
  padding: 0 4px;
}
.cart-list {
  margin-top: 60px;
  height: 30px;
  background: #fff;
}
.cart-li {
  height: 30px;
}
.cart-li-mid {
  height: 30px;
  font-size: 14px;
  display: inline-block;
  float: left;
  /* text-align: center; */
  line-height: 30px;
}
.checkbox-group {
  display: inline-block;
  float: left;
  height: 30px;
  width: 22px;
  position: relative;
}
#yhsdCartCheckAll {
  position: absolute;
  top: 9px;
}
.car-list {
  height: 128px;
  background: #fff;
  font-size: 14px;
  margin-top: 5px;
}
.cart-li-operator {
  height: 30px;
  font-size: 14px;
  float: left;
  line-height: 30px;
  margin-right: 12px;
}
.cart-li-rt {
  float: right;
  display: inline-block;
}
.cart-li-product-price-num {
  font-weight: 600;
}
.cart-li-product-input {
  height: 25px;
  display: inline-block;
  float: left;
  width: 71px;
  margin: 66px -33px;
}
.cart-li-product-input a {
  display: inline-block;
  float: left;
  border: 1px solid#ccc;
  text-align: center;
  width: 20px;
  color: #000;
  background: #e5e5e5;
}
.cart-li-product-num {
  width: 26px;
  float: left;
  border: 1px solid#ccc;
  border-right: none;
  text-align: center;
}
.cart-li-product-img {
  float: left;
}
.cart-li-product-link {
  float: left;
  color: #ccc;
}
.cart-li-product-info {
  display: inline-block;
  margin: 5px 8px;
}
.cart-li-product-del {
  float: right;
}
#yhsdProduct {
  position: absolute;
  top: 55px;
}
</style>
