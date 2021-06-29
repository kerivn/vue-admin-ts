/*
 * @FilePath: \vue-admin-ts\src\config\default\net.config.ts
 * @Description: 网络相关请求配置
 * @Author: kervin
 * @Date: 2021-06-24 16:53:10
 * @LastEditTime: 2021-06-24 17:03:32
 * @LastEditors: kervin
 */
import { ContentType, Device } from "@/constant/headers";
import { InfoShowType } from "@/constant/network";
import settings from "./setting.config";
interface Headers {
  token: string;
  contentType: string;
  version: string;
  device: Device;
}

const _header: Headers = {
  token: "",
  contentType: ContentType.JSON,
  version: settings.version ?? "1.0",
  device: Device.PC,
};

export interface NetworkConfig {
  host?: string;
  timeout?: number;
  loading?: false;
  errorShowType?: InfoShowType;
  header?: {};
}

const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  loading: false,
  errorShowType: InfoShowType.LOG,
  header: _header,
};

export default networkConfig;
