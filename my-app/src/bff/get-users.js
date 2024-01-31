export const getUsers = () =>
  fetch("http://localhost:3005/users").then((loginUsers) => loginUsers.json());
