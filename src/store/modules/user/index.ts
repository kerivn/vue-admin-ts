/* MutationTree:vuex  mutation的泛型接口
查看源码得知
export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}  */
import { MutationTree,ActionTree,Module} from 'vuex'
import { UserState,UserMutationTypes,Mutations,Actions,UserActionTypes,AugmentedActionContext} from "./user-types";
import { getToken, removeToken, setToken  } from "@/utils/cookies";
import {RootState} from '@/store/root-types'
/* state */
const state: UserState = {
  token: getToken() || "",
  name: "",
  avatar: "",
  introduction: "",
  roles: [],
  email: "",
};

/* mutations：联合类型*/
const mutations:MutationTree<UserState>&Mutations={

  [UserMutationTypes.SET_TOKEN](state: UserState, token: string) {
    state.token = token
  },

  [UserMutationTypes.SET_NAME](state: UserState, name: string) {
    state.name = name
  },

  [UserMutationTypes.SET_AVATAR](state: UserState, avatar: string) {
    state.avatar = avatar
  },

  [UserMutationTypes.SET_INTRODUCTION](state: UserState, introduction: string) {
    state.introduction = introduction
  },

  [UserMutationTypes.SET_ROLES](state: UserState, roles: string[]) {
    state.roles = roles
  },

  [UserMutationTypes.SET_EMAIL](state: UserState, email: string) {
    state.email = email
  }
}

/* actions */
const actions:ActionTree<UserState,RootState>&Actions={
  /* 处理登录请求的 */
async [UserActionTypes.ACTION_LOGIN]({commit}:AugmentedActionContext,
  userInfo:{username:string,password:string}
  ){

console.log("这里写登录逻辑");


  },

// 重置token
  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext) {
    removeToken()
    commit(UserMutationTypes.SET_TOKEN, '')
    commit(UserMutationTypes.SET_ROLES, [])
  },
  // 获取用户信息
  async [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ) {
   
  },

  async [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext,
    role: string
  ) {
    
  },
// 登出
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ) {
   
  }
}


export const store: Module<UserState, RootState>= {
  state,
  mutations,
  actions
};
