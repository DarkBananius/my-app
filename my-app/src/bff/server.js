import {
	authorize,
	fetchUsers,
	fetchRoles,
	logout,
	register,
	updateUserRole,
	removeUser,
} from "./operations";
// import { createSession } from "./create-session";

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
