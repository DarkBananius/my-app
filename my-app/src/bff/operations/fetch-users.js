import { getUsers } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";

export const fetchUsers = async (userSessions) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSessions, accessRoles)) {
		return {
			error: "Доступ запрещён",
			res: null,
		};
	}

	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
