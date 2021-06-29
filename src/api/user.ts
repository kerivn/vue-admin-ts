/*
 * @FilePath: \vue-admin-ts\src\api\user.ts
 * @Description: 用户相关请求接口
 * @Author: kervin
 * @Date: 2021-06-24 17:13:01
 * @LastEditTime: 2021-06-24 17:13:18
 * @LastEditors: kervin
 */
import service from "../utils/request";

interface IUser {
  username: string;
  password: string;
}

export const loginReq = (data: IUser) => {
  return service({
    url: "user/login",
    method: "post",
    data,
  });
};
