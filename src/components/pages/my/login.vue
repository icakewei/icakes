<template>
  <div id="login">
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">邮箱</label>
      </div>
      <div class="weui-cell__bd">
        <input
          class="weui-input umail"
          type="number"
          placeholder="请输入邮箱"
          v-model="umail"
        >
      </div>
    </div>
    <div class="weui-cell weui-cell_vcode">
      <div class="weui-cell__hd">
        <label class="weui-label">验证码</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input ucode" type="tel" placeholder="请输入验证码" v-model="ucode">
      </div>
      <div class="weui-cell__ft">
        <button class="weui-vcode-btn" @click="sendmail">获取验证码</button>
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">密码</label>
      </div>
      <div class="weui-cell__bd">
        <input
          class="weui-input upassword"
          type="number"
          placeholder="请设置密码"
          v-model="password"
        >
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">确认密码</label>
      </div>
      <div class="weui-cell__bd">
        <input
          class="weui-input enterword"
          type="number"
          placeholder="请再次输入密码"
          v-model="enterword"
        >
      </div>
    </div>

    <p class="tips">{{tips}}</p>
    <div data-v-7a982769 class="page__bd page__bd_spacing">
      <a
        data-v-7a982769
        href="javascript:;"
        class="weui-btn weui-btn_primary loginBtn"
        @click="login"
      >注册</a>
    </div>
    <div class="link">
      已有账号？请
      <a href="javascript:;" @click="change">直接登录</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      password: "",
      umail: "",
      ucode: "",
      enterword: "",
      tips: ""
    };
  },
  methods: {
    change() {
      //跳转至登录页面
      this.$router.push("/app/mine");
    },
    async sendmail() {
      let num = Math.floor(Math.random() * 10 + 1);
      let rendoma = await this.$axios.post(
        "http://localhost:3000/setting/getRendoma",
        this.$qs.stringify({ id: num })
      );
      this.ucode = rendoma.data[0].rendoma;
    },
    login() {
      // if(this.tips != "" && this.tips == this.ucode){
      //   console.log(666)
      // }
      if (this.umail == "") {
        this.tips = "请输入用户名";
        return;
      } else if (this.ucode == "") {
        this.tips = "请输入验证码";
        return;
      } else if (this.password == "") {
        this.tips = "请输入密码";
        return;
      } else if (this.enterword != this.password) {
        this.tips = "两次密码不一致";
        return;
      }
      if (
        this.enterword == this.password &&
        this.umail != "" &&
        this.ucode != "" &&
        this.password != ""
      ) {
        this.$axios
          .post( 
            "http://localhost:3000/setting/zhuce",
            this.$qs.stringify({
              email: this.umail,
              password: this.password
            })
          )
          .then(function(response) {
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../../styls/main.less");
#login {
  padding-top: 100px;
}
.weui-cell {
  background: #fff;
  font-size: 14px;
}
.link {
  margin-top: 10px;
  font-size: 14px;
}
.link a {
  font-size: 14px;
  color: #4685ee;
  text-decoration: none;
}
.page__bd {
  margin-top: 36px;
}
.tips {
  font-size: 14px;
  color: red;
}
</style>