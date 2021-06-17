<template>
  <div class="signup-container">
    <span class="qq-svg-container" @click="HandleClick('QQ')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-QQ" />
      </svg>
    </span>
    <span class="wx-svg-container" @click="HandleClick('WX')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wechat" />
      </svg>
    </span>
    <span class="weibo-svg-container" @click="HandleClick('WB')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-weibo" />
      </svg>
    </span>
  </div>
  <div class="dialog">
    <el-dialog title="第三方登录" v-model="centerDialogVisible" center>
      <iframe :src="url" width="100%" height="500px"></iframe>
      <template #footer>
        <span class="dialog-footer">
          该功能需要后台接通，目前仅供演示！
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
enum ThirdUrl {
  QQ = "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&scope=get_user_info%2Cget_info%2Cadd_t%2Cadd_pic_t%2Cget_other_info%2Cget_fanslist%2Cget_idollist%2Cadd_idol%2Cadd_share&state=6f6f494d3357653959725466366b70363167544f664e6b304a3748415578705a&redirect_uri=https%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fqqconn%3Faction%3Dlogin%26from%3D&response_type=code&client_id=100490701",
  WX = "https://open.weixin.qq.com/connect/qrconnect?appid=wx268fcfe924dcb171&redirect_uri=https%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fwechat%3Faction%3Dlogin%26from%3D&response_type=code&scope=snsapi_login&state=35643033323962642d356436612d343939342d386565342d303433376138333535323665#wechat",
  WB = "https://api.weibo.com/oauth2/authorize?scope=email&state=35643033323962642d356436612d343939342d386565342d303433376138333535323665&redirect_uri=http%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fsina&response_type=code&client_id=3063806388###",
  param = "param",
}
export default defineComponent({
  setup() {
    let centerDialogVisible = ref(false);
    let url = ref("");
    const methods = reactive({
      HandleClick: (param: keyof typeof ThirdUrl) => {
        /* 这里直接采用枚举值得key的数据类型作为形参的数据类型 */
        console.log(param);
        console.log(url, centerDialogVisible);

        url.value = ThirdUrl[param];
        centerDialogVisible.value = true;
      },
    });

    return {
      centerDialogVisible,
      url,
      ...methods,
    };
  },
});
</script>
<style lang="scss" scoped>
.signup-container {
  display: flex;
  margin: 0;
  padding: 0;
  svg.icon {
    margin-right: 25px;
    width: 40px;
    height: 40px;
  }
}
.dialog {
  width: 100%;
  height: 100%;
  ::v-deep .el-dialog.el-dialog--center .el-dialog__body {
    padding: 0;
  }
}
</style>
