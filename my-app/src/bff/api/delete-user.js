export const deleteUser = (userId, roleId) =>
	fetch(`http://localhost:3005/users/${userId}`, {
		method: "DELETE",
	});
