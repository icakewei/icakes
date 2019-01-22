<template>
    <div class=" header border_bottom_f2">
        <a class="logo-link settings-h1_color" href="/">
            <img src="http://asset.ibanquan.com/asset/5a32190422bd3406c000224d/logo" alt="iCakes爱蛋糕®官方商城">
        </a>
    </div>
</template>

<script>
export default {
  name: 'Xheader',
  components: {
    
  }
}
</script>
<style scoped>
.header {
    padding: 0;
    border-bottom: none;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #ffffff;
    height: 45px;
    line-height: 45px;
}
.header .logo-link img {
    height: 30px;
}
.logo-link img {
    max-height: 100%;
    vertical-align: middle;
    max-width: 100%;
}
</style>
