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
            v-model.trim="loginForm.username"
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
              v-model.trim="loginForm.password"
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
        <el-form-item prop="isChecked">
          <input type="checkbox" v-model="loginForm.isChecked" />
          <span
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
          <el-button
            :loading="loading"
            @click="handleLogin"
            type="primary"
            style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
        <div class="tips">
          <span>默认用户名 ： admin</span>
          <span>默认密码 ： 长度大于6</span><br />
          <span>默认用户名 ： editor</span>
          <span>默认密码 ： 长度大于6</span>
        </div>
      </el-form>
      <el-divider content-position="left">第三方登录</el-divider>
      <div class="footer-box">
        <ThirdPartyLogin />
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/login_bg.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, nextTick } from "vue";
import { useRoute, LocationQuery, useRouter } from "vue-router";
import ThirdPartyLogin from "./components/ThirdPartyLogin.vue";
import { isValidUsername } from "@/utils/validate";
import { useStore } from "@/store";
import { UserActionTypes } from "@/store/modules/user/user-types";
export default defineComponent({
  name: "login",
  components: {
    ThirdPartyLogin,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginFormRef = ref(null);
    const userNameRef = ref(null);
    const passwordRef = ref(null);
    const validateUsername = (rule: any, value: string, callback: Function) => {
      if (!isValidUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule: any, value: string, callback: Function) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    const state = reactive({
      loginForm: {
        username: "",
        password: "",
        isChecked: false,
      },
      loginRules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
        isChecked: [
          {
            validator: (rule: any, value: boolean, callback: Function) => {
              if (value) {
                callback();
              } else {
                callback(new Error("Please check the relevant protocol"));
              }
            },
            trigger: "change",
          },
        ],
      },
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
        (loginFormRef.value as any).validate(async (valid: boolean) => {
          if (valid) {
            await store.dispatch(UserActionTypes.ACTION_LOGIN, state.loginForm);
            state.loading = true;
            router
              .push({
                path: "/layout",
              })
              .catch((err) => {
                console.warn(err);
              });
          }
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
<style lang="scss" scoped>
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
