import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserAlbums } from "../api";
import { Album } from "../constants/interface";
import UserAlbum from "../components/Album/UserAlbum.components";

const AlbumPage = () => {
  const { userId } = useParams();

  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    if (userId) fetchData();
  }, [userId]);

  const fetchData = async () => {
    if (!userId) return;
    try {
      const data = await fetchUserAlbums(userId);
      setAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-wrapper">
      {albums.map((a) => {
        return <UserAlbum albumDetails={a} />;
      })}
    </div>
  );
};

export default AlbumPage;
