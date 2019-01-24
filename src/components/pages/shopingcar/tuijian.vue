<template>
  <div>
    <div class="proLike-title-box">
      <div class="pro_goods_show-title settings-text_color">推荐商品</div>
      <div class="lower-line"></div>
    </div>
    <div class="proList-inner">
      <ul class="proList-ul clearfix">
        <li>
          <a
            class="proList-img settings-proPic_border"
            href="/products/teatimer"
            target="_blank"
            title="夏午茶"
          >
            <img
              src="//asset.ibanquan.com/image/5bcaa5f1180e16249700034b/s_330x330.jpeg?epoch=1540007409"
              alt="夏午茶"
            >
          </a>
          <a class="proList-desc" href="/products/teatimer">
            <div class="pro_vendor_name txt-overflow">TeaTimer</div>
            <div class="proList-name settings-proTitle_color txt-overflow">夏午茶</div>
            <div class="proList-short_desc settings-desc_color txt-overflow">坚果红茶淡奶戚风</div>
            <span class="proList-price settings-price_color">¥169.00</span>
          </a>
        </li>
        <li>
          <a
            class="proList-img settings-proPic_border"
            href="/products/p000089"
            target="_blank"
            title="慕尼黑"
          >
            <img
              src="//asset.ibanquan.com/image/5860d93e3f8f904f260012f7/s_330x330.jpeg?epoch=1484251702"
              alt="慕尼黑"
            >
          </a>
          <a class="proList-desc" href="/products/p000089">
            <div class="pro_vendor_name txt-overflow">München</div>
            <div class="proList-name settings-proTitle_color txt-overflow">慕尼黑</div>
            <div class="proList-short_desc settings-desc_color txt-overflow">阿尔卑斯北麓的一片雪林</div>
            <span class="proList-price settings-price_color">¥99.00</span>
          </a>
        </li>
        <li>
          <a
            class="proList-img settings-proPic_border"
            href="/products/p000018"
            target="_blank"
            title="黑森林"
          >
            <img
              src="//asset.ibanquan.com/image/5860d8b39bedc451f6001157/s_330x330.jpeg?epoch=1484251703"
              alt="黑森林"
            >
          </a>
          <a class="proList-desc" href="/products/p000018">
            <div class="pro_vendor_name txt-overflow">BlackForest</div>
            <div class="proList-name settings-proTitle_color txt-overflow">黑森林</div>
            <div class="proList-short_desc settings-desc_color txt-overflow">樱桃巧克力淡奶戚风蛋糕</div>
            <span class="proList-price settings-price_color">¥149.00</span>
          </a>
        </li>
        <li>
          <a
            class="proList-img settings-proPic_border"
            href="/products/princessdiaries"
            target="_blank"
            title="公主日记"
          >
            <img
              src="//asset.ibanquan.com/image/5860d7c40dd76c565a001353/s_330x330.jpeg?epoch=1484251702"
              alt="公主日记"
            >
          </a>
          <a class="proList-desc" href="/products/princessdiaries">
            <div class="pro_vendor_name txt-overflow">Princess Diaries</div>
            <div class="proList-name settings-proTitle_color txt-overflow">公主日记</div>
            <div class="proList-short_desc settings-desc_color txt-overflow">焦糖栗蓉奶油蛋糕</div>
            <span class="proList-price settings-price_color">¥149.00</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.proLike-title-box {
  text-align: center;
  padding: 14px 0px 14px;
  position: relative;
  width: 100%;
}
.pro_goods_show-title {
  font-size: 12px;
  margin: 0px auto;
  padding: 0 2%;
  width: 22%;
  text-align: center;
  font-weight: 100;
  position: absolute;
  top: 6px;
  left: 50%;
  margin-left: -11%;
  background: transparent;
}
.settings-text_color {
  color: #555555;
}
.yhsd-base *,
.yhsd-base ::after,
.yhsd-base ::before {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
.pro_goods_show-title:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -1.5px;
  height: 3px;
  width: 3px;
  background: #000;
  transform: rotate(45deg);
}
.pro_goods_show-title:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1.5px;
  height: 3px;
  width: 3px;
  background: #000;
  transform: rotate(45deg);
}
.proList-inner {
  overflow: hidden;
}
.proList-ul {
  width: 100%;
}
.proList-ul {
  font-size: 0;
}
.proList-ul {
  margin: 0;
  padding: 0;
  padding-bottom: 60px;
}
.goods_show .proList-ul li {
  padding-bottom: 10px;
  margin-bottom: 1%;
  background: #fff;
}
.proList-ul li {
  width: 49%;
  margin: 0.5%;
  background: #fff;
  position: relative;
  float: none;
  display: inline-block;
  vertical-align: top;
  list-style: none;
}
.proList-img {
  height: 186px;
  line-height: 228px;
  display: block;
  border-radius: 3px;
  overflow: hidden;
  border-width: 1px;
  /* border-style: solid; */
  margin-bottom: 14px;
  font-size: 0;
  text-align: center;
}
.proList-img img {
  margin: 0;
  padding: 0;
  display: inline-block;

  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
img {
  border-style: none;
}
img,
legend {
  border: 0;
}
.yhsd-base a {
  text-decoration: none;
}

.proList-desc {
  display: inline-block;
  padding: 0 10px 10px;
}
.proList-desc,
.proList-name {
  max-height: 80px;
  line-height: 20px;
  height: auto;
  max-height: 80px;
  line-height: 20px;
  height: auto;
}
.proList-desc,
.proList-name {
  font-size: 12px;
}
.proList-desc {
  height: 44px;
}
.proList-desc .pro_vendor_name {
  font-size: 14px;
  color: #000;
  min-height: 20px;
  font-weight: bold;
}
.proList-ul .proList-name {
  white-space: normal;
}

.proList-desc,
.proList-name {
  max-height: 80px;
  line-height: 20px;
  height: auto;
}
.proList-desc,
.proList-name {
  font-size: 12px;
}
.settings-proTitle_color {
  color: #333333;
}
.proList-desc .proList-short_desc {
  min-height: 20px;
}
.proList-short_desc {
  height: 22px;
  line-height: 22px;
  display: block;
}
.settings-desc_color {
  color: #999999;
}
.proList-desc .proList-price {
  font-weight: bold;
}

.proList-price {
  height: 22px;
  line-height: 22px;
}
.settings-price_color {
  color: #919191;
}
.yhsd-base a {
  text-decoration: none;
}

a:active,
a:hover {
  outline-width: 0;
}
a:active,
a:hover {
  outline: 0;
}
</style>


