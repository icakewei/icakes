<template>
  <div id="main">
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">帐号</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入帐号">
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">密码</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="password" pattern="[0-9]*" placeholder="请输入密码">
      </div>
    </div>
    <div class="page__bd page__bd_spacing">
      <a href="javascript:;" class="weui-btn weui-btn_primary">登录</a>
    </div>
    <div class="cd">
      <a href class="denglu">马上登陆</a>
      <a class="zhuce" href>立即注册</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#main{
 padding-top: 50px;
}

.weui-cell {
  background: #fff;
}
.page__bd {
  margin-top: 50px;
}
.weui-btn {
  background: #000;
}
.denglu,
.zhuce {
  display: inline-block;
  padding: 10px;
}
</style>


