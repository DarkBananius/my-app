import { deleteUser } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const removeUser = async (userSessions, userId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSessions, accessRoles)) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	deleteUser(userId);
	return {
		error: null,
		res: true,
	};
};
