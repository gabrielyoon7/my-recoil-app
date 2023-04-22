import { useRecoilValueLoadable } from 'recoil';
import { fetchPosts } from '../../atoms/postsAtoms';

function PostListBasic() {
  const postsLoadable = useRecoilValueLoadable(fetchPosts);

  switch (postsLoadable.state) {
    case 'hasValue':
      const posts = postsLoadable.contents;
      return (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      const error = postsLoadable.contents;
      return <div>Error: {error.message}</div>;
    default:
      return null;
  }
}
export default PostListBasic;
