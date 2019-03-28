<template>
  <div class="login_root">
    <!-- 登录 -->
    <div class="login_main">
      <div class="Headportrait">
        <div>
          <img src="../../../assets/login/login_touxiang.gif" alt>
        </div>
      </div>
      <div class="login_input">
        <div class="input_main">
          <div>
            <i class="tubiao">
              <i class="icon iconfont icon-zhanghao"></i>
            </i>
            <input type="text" ref="username" placeholder="请输入手机号">
          </div>
          <div>
            <i class="tubiao">
              <i class="icon iconfont icon-mima"></i>
            </i>
            <input type="password" ref="password" placeholder="输入密码">
          </div>
        </div>
        <div>
          <a-button type="primary" @click="submit" class="login_button">{{login_logup[0]}}</a-button>
        </div>
      </div>
      <div>
        <div class="threeLogin">
          <div class="threeLogin_one"></div>
          <div class="threeLogin_two">第三方登录</div>
          <div class="threeLogin_three"></div>
        </div>
        <div class="qq_main">
          <div class="qq_list">
            <div>
              <i class="tubiao">
                <i class="icon iconfont icon-weixin"></i>
              </i>
            </div>
            <div>
              <i class="tubiao">
                <i class="icon iconfont icon-tubiao215"></i>
              </i>
            </div>
            <div>
              <i class="tubiao">
                <i class="icon iconfont icon-weibo"></i>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 注册 register -->
    <div class="register_module">
      <div class="register_main">
        <div class="forget">忘记密码</div>
        <div class="fenjie"></div>
        <div class="register" @click="logup">{{login_logup[1]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
import { mapActions } from "vuex";
Vue.use(Button);
export default {
  data() {
    return {
      login_logup: ["登陆", "注册账号"]
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      let username = this.$refs.username.value;
      let password = this.$refs.password.value;
      let data = {
        username,
        password
      };
      let curent = this.login_logup[0];
      let url = "";
      if (curent == "登陆") {
        url = "http://192.168.1.123:3000/login";
      } else {
        url = "http://192.168.1.123:3000/logup";
      }
      let res = await this.$axios({
        method: "post",
        url,
        params: data
      });
      if (res.data.statu) {
        //有账号，跳转
        this.login(data);
        sessionStorage.setItem('user', encodeURIComponent(JSON.stringify(data)))
        window.history.back();
      } else {
        this.$notification.open({
          message: res.data.message || "登陆失败",
          icon: <a-icon type="frown" />
        });
      }

      this.$refs.username.value = "";
      this.$refs.password.value = "";
    },
    async logup() {
      this.login_logup.reverse();
    }
  },
 
};
</script>


<style scoped lang="less">
@import url("../../../assets/font/iconfont.css");
.login_root {
  width: 100%;
  height: 14.34rem;
  margin: 0 auto;
  overflow: hidden;
  background: linear-gradient(
    0deg,
    rgba(139, 136, 250, 1) 0%,
    rgba(176, 120, 254, 1) 77%
  );
  box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.12);
  .login_main {
    width: 6.38rem;
    height: 9.49rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 0rem 0rem rgba(19, 19, 19, 0.3);
    border-radius: 0rem;
    margin-top: 1.61rem;
    margin-left: 0.56rem;
    overflow: hidden;
    .Headportrait {
      margin-top: 1rem;
      div {
        width: 1.8rem;
        height: 1.8rem;
        margin-left: 2.29rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .login_input {
      width: 7.5rem;
      margin-top: 1.5rem;
      .input_main {
        margin-left: 1.46rem;
        input {
          border: 0px;
          border-bottom: 1px #000 solid;
          outline: none;
          padding-left: 0.2rem;
          margin-left: 0.15rem;
        }
        input::-webkit-input-placeholder {
          color: rgba(169, 169, 169, 1);
        }
      }
      .login_button {
        width: 5.54rem;
        height: 0.86rem;
        background: rgba(140, 87, 255, 1);
        border-radius: 0.43rem;
        margin-left: 0.42rem;
        margin-top: 0.5rem;
      }
    }
    .threeLogin {
      width: 4.48rem;
      height: 0.5rem;
      margin: 0 auto;
      margin-top: 0.5rem;
      overflow: hidden;
      display: flex;
      .threeLogin_one,
      .threeLogin_three {
        width: 1.54rem;
        height: 0.02rem;
        background: rgba(169, 169, 169, 1);
        float: left;
        margin-top: 0.2rem;
      }
      .threeLogin_two {
        height: 0.2rem;
        font-size: 0.2rem;
        font-family: Adobe Heiti Std R;
        font-weight: normal;
        color: rgba(169, 169, 169, 1);
        float: left;
        flex: 1;
        text-align: center;
      }
    }
    .qq_main {
      height: 0.8rem;
      width: 6.38rem;
      .qq_list {
        width: 3.9rem;
        overflow: hidden;
        margin: 0.2rem auto;
        div {
          width: 1.3rem;
          float: left;
          text-align: center;
        }
      }
    }
  }
  // 注册 忘记密码模块 less
  .register_module {
    height: 0.5rem;
    .register_main {
      width: 6.38rem;
      font-size: 0.3rem;
      height: 0.5rem;
      margin: 0.9rem auto;
      color: rgba(255, 255, 255, 1);
      .forget,
      .register {
        width: 3.18rem;
        height: 0.5rem;
        float: left;
        text-align: center;
        line-height: 0.5rem;
      }
      .fenjie {
        float: left;
        width: 0.02rem;
        height: 0.5rem;
        background-color: #fff;
      }
    }
  }
}
.tubiao {
  width: 0.5rem;
  height: 0.5rem;
  // font-size: 0.5rem;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
  }
}
.iconfont {
  font-size: 0.5rem;
}
</style>
