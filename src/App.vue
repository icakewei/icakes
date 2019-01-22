<template>
  <div id="app">
    <Xheader></Xheader>
    <Banner></Banner>
    <Links></Links>
    <Xpicture></Xpicture>
  </div>
</template>

<script>
import Xheader from './components/common/Xheader.vue'
import Banner from './page/home/Banner.vue'
import Links from './page/home/Links.vue'
import Xpicture from './page/home/Xpicture.vue'


export default {
  name: 'app',
  components: {
    Xheader,
    Banner,
    Links,
    Xpicture
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
