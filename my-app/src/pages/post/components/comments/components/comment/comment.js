import styled from "styled-components";
import { Icon } from "../../../../../../components";
import { useServerRequest } from "../../../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
	openModal,
	CLOSE_MODAL,
	removeCommentAsync,
} from "../../../../../../actions";
import { ROLE } from "../../../../../../constants";
import { selectUserRole } from "../../../../../../selectors";

const CommentContainer = ({
	className,
	postId,
	id,
	author,
	publishedAt,
	content,
}) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: "Удалить комментарий?",
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle-o"
							margin="0 10px 0 0"
							size="18px"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							margin="0 10px 0 0"
							size="18px"
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					id="fa-trash-o"
					margin="0 0 0 10px"
					size="21px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid #000;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
	}
	& .published-at {
		display: flex;
	}
`;
