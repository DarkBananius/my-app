import { getUsers } from "./get-users";

export const getUser = async (loginToFind) => {
  const users = getUsers();
  users.find(({ login }) => login === loginToFind);
};
