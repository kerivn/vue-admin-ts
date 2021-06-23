<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
      <button @click="back"></button>
           <button @click="back2"></button>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
export default defineComponent({
  methods: {
    back() {
      this.$router.push({path:'/login',query:{name:13}});
    },
    back2(){
      this.$router.back()
    }
  },
  setup() {
    const router = useRouter();
    const user = localStorage.getItem("user");
    onBeforeMount(() => {
      /* if (user !== "admin") {
        ElMessage.error("当前用户无权限！");
        router.push("/login").catch((err) => {
          console.log(err);
        });
      } */
    });
  },
});
</script>
