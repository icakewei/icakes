<template>
  <div id="app">
  <Header></Header>
  <router-view></router-view>
	<bottom></bottom>
  </div>
</template>

<script>
import Header from './components/Common/Header.vue'
import bottom from './components/Common/Xfooter.vue'

export default {
  components: {
    Header,bottom
  }
}
</script>

<style>
html,body,#app{
 height: 100%;
 background: #eeeff0;
}
</style>
