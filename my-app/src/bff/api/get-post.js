import { transformPost } from "../transformers";

export const getPost = async (postId) =>
	fetch(`http://localhost:3005/posts/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}
			const error =
				res.status === 404
					? "Такая страница не существует"
					: "Что то пошло не так. Попробуйте ещё раз подзнее";

			return Promise.reject(error);
		})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
