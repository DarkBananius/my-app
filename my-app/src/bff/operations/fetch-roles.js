import { getRoles } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";

export const fetchRoles = async (userSessions) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSessions, accessRoles)) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	const roles = await getRoles();

	return {
		error: null,
		res: roles,
	};
};
