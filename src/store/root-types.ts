/*
 * @FilePath: \vue-admin-ts\src\store\root-types.ts
 * @Description: 根store相关类型声明
 * @Author: kervin
 * @Date: 2021-06-24 16:04:08
 * @LastEditTime: 2021-06-24 16:46:50
 * @LastEditors: kervin
 */
import {UserState,UserStore} from './modules/user/user-types'
export interface RootState {
    user:UserState
  }
export type Store = UserStore<Pick<RootState, 'user'>>