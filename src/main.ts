/*
 * @Author: kervin
 * @Date: 2021-06-04 15:18:25
 * @LastEditTime: 2021-06-04 15:40:49
 * @LastEditors: Please set LastEditors
 * @Description: 入口ts文件
 * @FilePath: \vue-admin-ts\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import '@/styles/index.scss'
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// import '@/styles/index.scss'
const app = createApp(App);
app.use(store)
.use(router)
.use(ElementPlus)
.mount("#app");
