<template>
  <div id="main">
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">帐号</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="number" placeholder="请输入帐号" v-model="email">
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label class="weui-label">密码</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="password" placeholder="请输入密码" v-model="password">
      </div>
    </div>
    <span v-text="tips" class="tips">hahah</span>
    <div class="page__bd page__bd_spacing">
      <a
        href="javascript:;"
        class="weui-btn weui-btn_primary"
        @click="login()"
        :class="{'showToast': addId}"
      >登录</a>
    </div>
    <div class="cd">
      <a href class="denglu">忘记密码</a>
      <a class="zhuce" href="Javascript:;" @click="change">立即注册</a>
    </div>
    <Toast v-show="addId"></Toast>
  </div>
</template>
<script>
import Toast from "../../Common/Toast.vue";
export default {
  // pattern="[0-9]*"
  data() {
    return {
      email: "",
      password: "",
      tips: ""
    };
  },
  computed: {
    addId() {
      return this.$store.state.slider;
    }
  },
  components: { Toast },
  methods: {
    change() {
      this.$router.push("/app/login");
    },
    login() {
      if (this.email == "") {
        this.tips = "请输入用户名";
        return 
      }
      if (this.password == "") {
        this.tips = "请输入密码";
        return 
      }
      if (this.password != "" && this.email != "") {
        this.$axios
          .post(
            "http://localhost:3000/setting/loginUser",
            this.$qs.stringify({
              email: this.email,
              password: this.password
            })
          )
          .then(response => {
            // console.log(addId)
            console.log(response.data);
            // if (response.data.status == "success") {
            //   this.$store.commit("sliderShow", true);
            //   this.$router.push("/app/home");
            // }
            let fn = {
              success: async () => {
                await this.$store.commit("sliderShow", true);
                await setTimeout(() => {
                  this.$store.commit("sliderShow", false);
                }, 1000);
                await setTimeout(() => {
                  this.$router.push("/app/home");
                }, 1500);
              },
              fail: () => {
                this.tips = "用户名和密码不匹配"
                return
              }
            };
            fn[response.data.status]();
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      // console.log(this.$store.state.slider)
    }
  }
};
</script>
<style scoped>
.tips{
  font-size: 14px;
  color: red;
}
#main {
  padding-top: 100px;
}

.weui-cell {
  background: #fff;
  height: 30px;
  font-size: 12px;
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
  font-size: 14px;
  color: #4685ee;
}
</style>


