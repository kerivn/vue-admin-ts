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
            name="username"
            type="text"
            ref="userNameRef"
            v-model="loginForm.username"
            tabindex="1"
            autocomplete="on"
            placeholder="请输入用户名！"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-tooltip
          v-model="capsTooltip"
          content="Caps lock is On"
          placement="right"
          manual
        >
          <el-form-item prop="password">
            <el-input
              class="password"
              ref="passwordRef"
              :type="passwordType"
              v-model="loginForm.password"
              placeholder="请输入登录密码！"
              prefix-icon="el-icon-lock"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter="handleLogin"
            ></el-input>
          </el-form-item>
        </el-tooltip>
        <el-form-item prop="isChecked" class="agreement">
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
          <span>默认密码 ： root</span><br />
          <span>默认用户名 ：admin2</span>
          <span>默认密码 ： root</span>
        </div>
      </el-form>
      <el-divider content-position="left">第三方登录</el-divider>
      <div class="footer-box">
        <div class="signup-container">
          <span class="qq-svg-container">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-QQ" />
            </svg>
          </span>
          <span class="wx-svg-container">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wechat" />
            </svg>
          </span>
          <span class="al-svg-container">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon_alipay" />
            </svg>
          </span>
          <span class="weibo-svg-container">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibo" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/login_bg.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, nextTick } from "vue";

export default defineComponent({
  name: "login",
  setup() {
    const loginFormRef = ref(null);
    const userNameRef = ref(null);
    const passwordRef = ref(null);
    const isChecked = ref(false);
    const state = reactive({
      loginForm: {
        username: "",
        password: "",
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
    const methods = reactive({
      checkCapslock: (e: KeyboardEvent) => {
        if (e.key === "CapsLock") state.capsTooltip = !state.capsTooltip;
      },
      handleLogin: () => {
        console.log(213);
      },
      showPwd: () => {
        if (state.passwordType === "password") {
          state.passwordType = "";
        } else {
          state.passwordType = "password";
        }
        nextTick(() => {
          (passwordRef.value as any).focus();
        });
      },
    });

    return {
      userNameRef,
      passwordRef,
      loginFormRef,
      ...toRefs(state),
      ...toRefs(methods),
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
  .left {
    width: 478px;
    height: 550px;
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
      .password::after {
        content: "";
        font-family: element-icons !important;
        position: absolute;
        right: 10px;
        font-size: 16px;
        color: #ccc;
        cursor: pointer;
        user-select: none;
      }

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
    .footer-box {
      .signup-container {
        display: flex;
        svg.icon {
          margin-right: 25px;
          width: 40px;
          height: 40px;
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