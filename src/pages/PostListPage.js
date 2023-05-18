import PostListBasic from "../components/post/PostListBasic";
import PostListParameter from "../components/post/PostListParameter";

function PostListPage() {
  return (
    <>
      <h1>데이터 단순 요청</h1>
      <PostListBasic />
      <hr />
      <h1>데이터 파라미터로 요청</h1>
      <PostListParameter />
    </>
  )
}

export default PostListPage;
