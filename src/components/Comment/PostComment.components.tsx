import { Comment } from "../../constants/interface";
import "./postComment.css";

const PostComment = ({ commentDetails }: { commentDetails: Comment }) => {
  return (
    <div className="post-card-wrapper">
      <div className="title">{commentDetails.name}</div>
      <div className="part"></div>
      <div>{commentDetails.body}</div>
      <div>{commentDetails.id}</div>
    </div>
  );
};
export default PostComment;
