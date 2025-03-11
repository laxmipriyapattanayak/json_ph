import { Post } from "../../constants/interface";
import "./postCard.css";

const PostCard = ({ postDetails }: { postDetails: Post }) => {
  const handlePostClick = () => {
    //https://jsonplaceholder.typicode.com/posts/1/comments
    window.location.href = `/post/${postDetails.id}/comments`;
    console.log(postDetails.id);
  };
  return (
    <div className="post-card-wrapper">
      <div className="title">{postDetails.title}</div>

      <div className="part"></div>
      <div className="small body">{postDetails.body}</div>
      <div>
        <button onClick={handlePostClick}>comments</button>
      </div>
    </div>
  );
};

export default PostCard;
