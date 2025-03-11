import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllUserPosts } from "../api";
import { Post } from "../constants/interface";
import PostCard from "../components/post/PostCard.components";

const PostPage = () => {
  const { userId } = useParams();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (userId) fetchData();
  }, [userId]);

  const fetchData = async () => {
    if (!userId) return;
    try {
      const data = await fetchAllUserPosts(userId);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-wrapper">
      {posts.map((p) => {
        return <PostCard postDetails={p} />;
      })}
    </div>
  );
};

export default PostPage;
