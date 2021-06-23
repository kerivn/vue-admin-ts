import { createStore, createLogger } from "vuex";
// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
