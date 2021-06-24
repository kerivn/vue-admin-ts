
import Vue, { createApp } from "vue";
import App from "./App.vue";
import "@/styles/index.scss";
import router from "./router";
import{store}  from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// import '@/styles/index.scss'
const app = createApp(App);
/* const win: any = window; //
if (process.env.NODE_ENV === "development") {
  if ("__VUE_DEVTOOLS_GLOBAL_HOOK__" in win) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
  }
} */
app.use(store).use(router).use(ElementPlus).mount("#app");
