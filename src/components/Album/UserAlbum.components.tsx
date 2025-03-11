import { Album } from "../../constants/interface";

const UserAlbum = ({ albumDetails }: { albumDetails: Album }) => {
  const handleAlbumClick = () => {
    console.log(albumDetails.title);
  };

  return (
    <div className="post-card-wrapper">
      <div>{albumDetails.userId}</div>
      <div className="title">{albumDetails.title}</div>
      <div>{albumDetails.id}</div>

      <div>
        <button onClick={handleAlbumClick}>photos</button>
      </div>
    </div>
  );
};

export default UserAlbum;
