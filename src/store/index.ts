import { createStore, createLogger } from "vuex";
import { store as user} from '@/store/modules/user'
import  {Store} from './root-types'
// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store=createStore({
  plugins,
  modules: {
    user
  },
});

export function useStore():Store{
  return store as Store
}