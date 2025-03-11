import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostComments } from "../api";
import { Comment } from "../constants/interface";
import PostComment from "../components/Comment/PostComment.components";

const CommentPage = () => {
  const { postId } = useParams();

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (postId) fetchData();
  }, [postId]);

  const fetchData = async () => {
    if (!postId) return;
    try {
      const data = await fetchPostComments(postId);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-wrapper">
      {comments.map((c) => {
        return <PostComment commentDetails={c} />;
      })}
    </div>
  );
};

export default CommentPage;
