import { useRecoilValueLoadable } from 'recoil';
import { fetchPostsWithParameter } from '../../atoms/postsAtoms';

function PostListParameter() {
  const postId = Math.floor(Math.random() * 100) + 1;
  const postLoadable = useRecoilValueLoadable(fetchPostsWithParameter(postId));
  switch (postLoadable.state) {
    case 'hasValue':
      const post = postLoadable.contents;
      return (
        <div>
          <div>파라미터 : {postId}</div>
          <div>{post.title}</div>
        </div>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      const error = postLoadable.contents;
      return <div>Error: {error.message}</div>;
    default:
      return null;
  }
}
export default PostListParameter;
