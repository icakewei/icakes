<template>
  <div id="login">
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">邮箱</label>
      </div>
      <div class="weui-cell__bd">
        <input
          class="weui-input  umail"
          type="number"
          pattern="[0-9]*"
          placeholder="请输入邮箱"
          v-model="umail"
        >
      </div>
    </div>
    <div class="weui-cell weui-cell_vcode">
      <div class="weui-cell__hd">
        <label class="weui-label">验证码
        </label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input ucode " type="tel" placeholder="请输入验证码"  v-model="ucode" >
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
          pattern="[0-9]*"
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
          pattern="[0-9]*"
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
      tips: "",
      umima: false
    };
  },
  methods: {
    change() {
      //跳转至登录页面
      this.$router.push("/app/mine");
    },
    gao() {
      console.log(this.umima);
      return (this.umima = true);
    },
    sendmail() {
      this.$axios
        .post(
          "/api/admin/getCode",
          this.$qs.stringify({
            mail: this.umail
          })
        )
        .then(res => {
          console.log(res.data);
          console.log("验证码发送成功");
        })
        .catch(err => {
          console.log(err);
          console.log("验证码发送失败");
        });
    },
    login() {
      //注册验证
      this.tips = "";
      if (this.umail == "") {
        this.tips = "请输入邮箱";
        return;
      } else if (
        !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
          this.umail
        )
      ) {
        this.tips = "邮箱不合法";
      }

      if (this.userName == "" && this.password == "") {
        this.tips = "请输入账号名密码";
        return;
      } else {
        if (!this.userName) {
          console.log("请输入用户名");
          this.tips = "请输入用户名";
          return;
        } else {
          if (!/^1[3456789]\d{9}$/.test(this.userName)) {
            this.tips = "手机号码不正确";
          }
        }
        if (this.password === "") {
          this.tips = "请输入密码";
        } else if (!/^[\u4e00-\u9fa5a-zA-Z0-9]{6,}$/.test(this.password)) {
          this.tips = "密码不少于6位";
        }
        if (this.enterword === "") {
          this.tips = "请输入密码";
        } else if (this.password !== this.enterword) {
          this.tips = "密码不一样";
        }
      }
      if (this.ucode == "") {
        this.tips = "请输入验证码";
        return;
      }
      if (
        this.password == this.enterword &&
        /^[\u4e00-\u9fa5a-zA-Z0-9]{6,}$/.test(this.password) &&
        /^1[3456789]\d{9}$/.test(this.userName) &&
        /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
          this.umail
        ) &&
        this.ucode != ""
      ) {
        this.$axios
          .post(
            "/api/admin/getsign",
            this.$qs.stringify({
              name: this.userName,
              pass: this.password,
              mail: this.umail,
              code: this.ucode
            })
          )
          .then(res => {
            console.log(res);
            if (res.data.err == 0) {
              Toast({
                message: "注册成功",
                duration: 1000,
                iconClass: "fa fa-check"
              });
              this.$router.push("/my/login");
              console.log("注册成功");
              console.log(res.data);
            } else if (res.data == "nook") {
              console.log("验证码错误");
              Toast({
                message: "验证码错误",
                duration: 1000,
                iconClass: "fa fa-check"
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        Toast({
          message: "注册失败",
          duration: 1000,
          iconClass: "fa fa-check"
        });
        console.log("注册失败");
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