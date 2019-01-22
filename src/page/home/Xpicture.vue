<template>
  <div class="Xpicture">
   	<img :src="test.path" alt="">
    <div class="swiper-container swiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='(item,idx) in cakedetail' :key='idx'>
        <img :src="item.images[0].src" alt="">
        <p>{{item.name}}</p>
        <p class="desc">{{item.short_desc}}</p>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Vue from 'vue'
import { Toast } from 'mint-ui';
export default {
  name: 'Xpicture',
  components: {
    
  },
  data(){
    return{
      cakedetail:[]
    }
  },
  props:['test'],
  methods:{
    getdata(test){
      this.$axios.get('http://icak.es/api/v1/page/view?handle=front&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542705308375')
      .then( (res)=> {
        this.cakedetail = res.data.page.snippets[test.pm].products;
        console.log(this.cakedetail);
        Vue.nextTick(()=>{
          this.lunbo();
        })
      })
      .catch((error)=> {
        console.log(error);
      });
    },
    lunbo(){
      var swiper2 = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    },
    
  },
  created(){
    this.getdata(this.test);
    
  },
  mounted(){
    window.onscroll = function(){
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      if(scrollTop+windowHeight===scrollHeight){
        Toast({
            message: '到底啦',
            position: 'bottom',
            duration: 1000
          });
      }
    }
  },
}
</script>

