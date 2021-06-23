import { UserState } from "./user-types";
import { getToken } from "@/utils/cookies";

const state: UserState = {
  token: getToken() || "",
  name: "",
  avatar: "",
  introduction: "",
  roles: [],
  email: "",
};
export const userStoreModule = {
  state,
};
