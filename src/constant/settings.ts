/*
 * @FilePath: \vue-admin-ts\src\constant\settings.ts
 * @Description: 设置属性相关常量
 * @Author: kervin
 * @Date: 2021-06-24 16:58:54
 * @LastEditTime: 2021-06-24 16:59:28
 * @LastEditors: kervin
 */

export enum Language{
    En='en',
    Zh='zh-cn',
}

export enum Environment{
   Development = 'development',
   Production = 'production'
}

export enum RouterSource{
   Frontend = 'frontend',
   Backend = 'backend'
}

export enum RouterMode{
   Hash = 'hash',
   HISTORY = 'history'
}

export enum TokenStorageName{
   LocalStorage = 'localStorage',
   SessionStorage = 'sessionStorage',
   Cookie = 'cookie'
}