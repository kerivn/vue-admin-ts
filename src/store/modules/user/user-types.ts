/*
 * @FilePath: \vue-admin-ts\src\store\modules\user\user-types.ts
 * @Description: vuex 用户仓模板  类型管理
 * @Author: kervin
 * @Date: 2021-06-23 17:01:53
 * @LastEditTime: 2021-06-24 16:39:53
 * @LastEditors: kervin
 */
import {
  ActionContext,
  Store as VuexStore,
  DispatchOptions,
  CommitOptions,
} from "vuex";
import { RootState } from "@/store/root-types";
/* user子模块stateのinteface*/
export interface UserState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
}
/*user字模块action字段 枚举 */
export enum UserActionTypes {
  ACTION_LOGIN = "ACTION_LOGIN",
  ACTION_RESET_TOKEN = "ACTION_RESET_TOKEN",
  ACTION_GET_USER_INFO = "ACTION_GET_USER_INFO",
  ACTION_CHANGE_ROLES = "ACTION_CHANGE_ROLES",
  ACTION_LOGIN_OUT = "ACTION_LOGIN_OUT",
}
/*user字模块Mutation字段 枚举  */
export enum UserMutationTypes {
  SET_TOKEN = "SET_TOKEN",
  SET_NAME = "SET_NAME",
  SET_AVATAR = "SET_AVATAR",
  SET_INTRODUCTION = "SET_INTRODUCTION",
  SET_ROLES = "SET_ROLES",
  SET_EMAIL = "SET_EMAIL",
}

/* user子模块Mutationsの类型声明*/
export interface Mutations<S = UserState> {
  [UserMutationTypes.SET_TOKEN](state: S, token: string): void;
  [UserMutationTypes.SET_NAME](state: S, name: string): void;
  [UserMutationTypes.SET_AVATAR](state: S, avatar: string): void;
  [UserMutationTypes.SET_INTRODUCTION](state: S, introduction: string): void;
  [UserMutationTypes.SET_ROLES](state: S, roles: string[]): void;
  [UserMutationTypes.SET_EMAIL](state: S, email: string): void;
}
/* user actions  上下文类型 */
export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<UserState, RootState>, "commit">;

/* 子模块Actionsの接口*/
export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string; password: string }
  ): void;
  [UserActionTypes.ACTION_RESET_TOKEN]({
    commit,
  }: AugmentedActionContext): void;
  [UserActionTypes.ACTION_GET_USER_INFO]({
    commit,
  }: AugmentedActionContext): void;
  [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext,
    role: string
  ): void;
  [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugmentedActionContext): void;
}
export type UserStore<S = UserState> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
