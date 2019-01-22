<template>
  <div id="app">
      <!-- <Xmain></Xmain> -->
      <Xfooter></Xfooter>
      <router-view></router-view>
      <!-- <XemptyCar></XemptyCar> -->
  </div>
</template>

<script>
import Xfooter from './components/Xfooter.vue'
// import Xmain from './components/Xmain.vue'
// import XemptyCar from './components/XemptyCar.vue'

export default {
  components: {
    Xfooter,
    // XemptyCar
    // Xmain
  }
}
</script>

<style>
html,body,#app{
 height: 100%;
 background: #eeeff0;
}
</style>
