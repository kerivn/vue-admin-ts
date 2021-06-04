<template>
  <div class="login-container">
    <video poster="@/assets/images/login.png" loop autoplay muted>
      <source src="@/assets/images/login.png" />
    </video>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          {{ '这是登录页面还没想好怎么写！' }}
        </h3>
      </div>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const loginFormRef = ref(null);
    const userNameRef = ref(null);
    const passwordRef = ref(null);
    const state = reactive({
      loginForm: {
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: "blur" }],
        password: [{ validator: passwordRef, trigger: "blur" }],
      },
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
  width: 100%;
  overflow: hidden;
  // background-color: $loginBg;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>