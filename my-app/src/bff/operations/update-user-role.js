import { setUserRole } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const updateUserRole = async (userSessions, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSessions, accessRoles)) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	setUserRole(userId, newUserRoleId);
	return {
		error: null,
		res: true,
	};
};
