import { User } from "../../constants/interface";
import "./userCard.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import { useNavigate } from "react-router-dom";

const UserCard = ({ userDetails }: { userDetails: User }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/post/${userDetails.id}`);
  };
  const handleAlbumClick = () => {
    navigate(`/album/${userDetails.id}`);
  };

  return (
    <div className="user-card-wrapper">
      <div className="heading">{userDetails.name}</div>
      <div className="small aligned-icon">
        <MailOutlineIcon fontSize="small" />
        {userDetails.email}
      </div>
      <div className="small aligned-icon">
        <AlternateEmailIcon fontSize="small" />
        {userDetails.username}
      </div>
      <div className="small aligned-icon">
        <LocalPhoneIcon fontSize="small" />
        {userDetails.phone}
      </div>
      <div className="small aligned-icon">
        <BusinessIcon fontSize="small" />
        {userDetails.address.city}
      </div>
      <div className="actions">
        <button onClick={handleCardClick}>posts</button>
        <button onClick={handleAlbumClick}>Albums</button>
      </div>
    </div>
  );
};

export default UserCard;
