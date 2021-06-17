export const isValidUsername = (username: string):boolean => {
  return ["admin", "editor"].indexOf(username.trim()) >= 0;
};
