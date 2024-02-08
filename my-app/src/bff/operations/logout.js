import { sessions } from "../sessions";

export const logout = async (userSessions) => {
	sessions.remove(userSessions);
};
