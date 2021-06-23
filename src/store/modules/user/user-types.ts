/*
 * @FilePath: \vue-admin-ts\src\store\modules\user\user-types.ts
 * @Description: vuex 用户仓模板  类型管理
 * @Author: kervin
 * @Date: 2021-06-23 17:01:53
 * @LastEditTime: 2021-06-23 18:25:13
 * @LastEditors: kervin
 */
 export enum UserActionTypes {
  ACTION_LOGIN = "ACTION_LOGIN",
  ACTION_RESET_TOKEN = "ACTION_RESET_TOKEN",
  ACTION_GET_USER_INFO = "ACTION_GET_USER_INFO",
  ACTION_CHANGE_ROLES = "ACTION_CHANGE_ROLES",
  ACTION_LOGIN_OUT = "ACTION_LOGIN_OUT",
}

export enum UserMutationTypes {
  SET_TOKEN = "SET_TOKEN",
  SET_NAME = "SET_NAME",
  SET_AVATAR = "SET_AVATAR",
  SET_INTRODUCTION = "SET_INTRODUCTION",
  SET_ROLES = "SET_ROLES",
  SET_EMAIL = "SET_EMAIL",
}

 export interface UserState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
}
