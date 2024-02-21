import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { Error } from "../error/error";
import { checkAccess } from "../../utils";
import { ERROR } from "../../constants";

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);
	const accessError = checkAccess(access, userRole)
		? null
		: ERROR.ACCESS_DENIED;
	const error = serverError || accessError;
	return error ? <Error error={error} /> : children;
};
