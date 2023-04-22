import { useRecoilValueLoadable } from 'recoil';
import { fetchPostsWithParameter } from '../../atoms/postsAtoms';
import { useState } from 'react';

function PostListParameter() {
  const [postId, setPostId] = useState(Math.floor(Math.random() * 100) + 1);
  const postLoadable = useRecoilValueLoadable(fetchPostsWithParameter(postId));

  switch (postLoadable.state) {
    case 'hasValue':
      const post = postLoadable.contents;
      return (
        <div>
          <div>파라미터 : {postId} <button onClick={() => setPostId(Math.floor(Math.random() * 100) + 1)}>랜덤 값으로 바꾸기</button></div>
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
