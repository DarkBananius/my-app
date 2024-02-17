import { useEffect, useState } from "react";
import { PostCard } from "./components";
import { useServerRequest } from "../../hooks";
import styled from "styled-components";

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer("fetchPosts").then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(
					({ id, title, imageUrl, publishedAt, commentsCount }) => (
						<PostCard
							key={id}
							id={id}
							title={title}
							imageUrl={imageUrl}
							publishedAt={publishedAt}
							commentsCount={commentsCount}
						/>
					),
				)}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;
