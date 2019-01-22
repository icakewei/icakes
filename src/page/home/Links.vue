<template>
<div class="list">
   	<ul>
     <li v-for='(item,idx) in typelist' :key='idx' @click='fenlei(item)'>
        <img v-lazy="item.img" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default {
  name: 'Links',
  components: {
    
  },
  data(){
    return{
      typelist:[{img:'http://asset.ibanquan.com/asset/5bc963ef53f4e32535000061/index_pic_1?v=1539924975',name:'生日蛋糕',params:'http://icak.es/api/v1/type/view?handle=bdcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713382991'},{img:'http://asset.ibanquan.com/asset/5bc962be26a801265b000047/index_pic_2?v=1539924670',name:'盒子蛋糕',params:'http://icak.es/api/v1/type/view?handle=boxes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713440278'},{img:'http://asset.ibanquan.com/asset/5bc962be26a801265b00004a/index_pic_3?v=1539924670',name:'天然蛋卷',params:'http://icak.es/api/v1/type/view?handle=cuts&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713459460'},{img:'http://asset.ibanquan.com/asset/5bc962bf26a801265b000051/index_pic_4?v=1539924671',name:'迷你切',params:'http://icak.es/api/v1/type/view?handle=cuts&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713459460'},{img:'http://asset.ibanquan.com/asset/5bc962c026a801265b000056/index_pic_5?v=1539924672',name:'纸杯蛋糕',params:'http://icak.es/api/v1/type/view?handle=cupcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713424389'}]
    }
  },
}
</script>
<style scoped>
*{
    margin:0;padding:0;
}
.list{
    margin-top: 5px;
    max-width: 384px;
    margin: auto;
    width: 100%;
}
ul{
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f0f0f0;
}
li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
img {
   width:48px;
   height:41px
}
p{
    font-size: 12px;
    color: #000;
    text-align: center;
    margin: 5px 0;
}
</style>