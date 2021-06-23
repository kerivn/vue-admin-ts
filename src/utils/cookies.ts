/*
 * @FilePath: \vue-admin-ts\src\utils\cookies.ts
 * @Description: cookie 封装
 * @Author: kervin
 * @Date: 2021-06-23 18:08:21
 * @LastEditTime: 2021-06-23 18:11:33
 * @LastEditors: kervin
 */
import Keys from "@/constant/key";
import Cookies from "js-cookie";

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus: string) =>
  Cookies.set(Keys.sidebarStatusKey, sidebarStatus);

export const getLanguage = () => Cookies.get(Keys.languageKey);
export const setLanguage = (language: string) =>
  Cookies.set(Keys.languageKey, language);

export const getSize = () => Cookies.get(Keys.sizeKey);
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size);

export const getToken = () => Cookies.get(Keys.tokenKey);
export const setToken = (token: string) => Cookies.set(Keys.tokenKey, token);
export const removeToken = () => Cookies.remove(Keys.tokenKey);
