<template>
 <div class="banner">
   	   <div class="swiper-container" id="swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="http://asset.ibanquan.com/asset/5bc962bd26a801265b000040/index_slide_3?v=1539924669" alt="">
            </div>
            <div class="swiper-slide">
              <img src="http://asset.ibanquan.com/asset/5bc963ef53f4e32535000064/index_slide_1?v=1539924975" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Banner',
  components: {
    
  },
  data(){
    return {
      name:'这里是banner'
    }
  },
  methods:{
    
  },
  mounted(){
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
</script>
<style scoped>
@import url('../../../node_modules/swiper/dist/css/swiper.min.css');
*{
    margin:0;padding:0;
}
#swiper1{
    margin: 0;
    background: #fff;
    position: relative;
    zoom: 1;
    border-bottom: 1px solid #f0f0f0;
    overflow: hidden;
    position: relative;
}
.swiper-slide{
    width: 376px;
    float: left;
}
img{
    width:376px;
}
</style>
