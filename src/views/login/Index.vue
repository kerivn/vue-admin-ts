<template>
  <div class="login-container">
    <div class="left">
      <div class="title-box">
        <img src="@/assets/logo.png" alt="" />
        <span class="title">Element-plus</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>
      <el-form
        class="login-form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        autocomplete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名！"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入登录密码！"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item prop="isChecked">
          <el-checkbox v-model="isChecked"> </el-checkbox
          ><span
            >&nbsp;我已阅读并同意<el-link
              type="primary"
              :underline="false"
              href="https://github.com/kerivn"
              target="_blank"
              >用户协议</el-link
            >和<el-link
              type="primary"
              :underline="false"
              href="https://github.com/kerivn"
              target="_blank"
              >隐私条款</el-link
            ></span
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%">登录</el-button>
        </el-form-item>
        <div class="tips">
          <span>默认用户名 ：admin1</span>
          <span>默认密码 ： root</span><br>
          <span>默认用户名 ：admin2</span>
          <span>默认密码 ： root</span>
        </div>
      </el-form>
        <el-divider content-position="left">第三方登录</el-divider>
      <div class="footer-box">
      
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/login_bg.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const loginFormRef = ref(null);
    const userNameRef = ref(null);
    const passwordRef = ref(null);
    const isChecked: boolean = false;
    const state = reactive({
      loginForm: {
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: "blur" }],
        password: [{ validator: passwordRef, trigger: "blur" }],
      },
      isChecked: false,
      passwordType: "password",
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: "",
      otherQuery: {},
    });

    return {
      userNameRef,
      passwordRef,
      loginFormRef,
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss"  scoped>
.login-container {
  height: 100%;
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(225deg, #1493fa, #01c6fa);
  // background-color: $loginBg;
  .left {
    width: 478px;
    height: 550px;
    // background: #f5f5f5;
    background-color: #fff;
    padding: 48px;
    .title-box {
      display: flex;
      align-items: center;
      img {
        width: 64px;
        height: 64px;
        margin-right: 16px;
      }
      .title {
        font-size: 24px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        background-color: #c7c7c7;
        height: 27px;
        margin-right: 12px;
      }
      .sub-title {
        font-size: 22px;
      }
    }
    .login-form {
      margin-top: 40px;
      .tips {
        font-size: 14px;
        color: #1493fa;
        margin-bottom: 10px;

        span {
          &:nth-of-type(odd) {
            margin-right: 16px;
          }
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    img {
      width: 633px;
      height: 435px;
    }
  }
}
</style>