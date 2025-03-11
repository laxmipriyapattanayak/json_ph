import { Album } from "../../constants/interface";

const UserAlbum = ({ albumDetails }: { albumDetails: Album }) => {
  const handleAlbumClick = () => {
    console.log(albumDetails.title);
  };

  return (
    <div className="post-card-wrapper">
      <div className="title">{albumDetails.title}</div>
      <div>
        <button onClick={handleAlbumClick}>photos</button>
      </div>
    </div>
  );
};

export default UserAlbum;
