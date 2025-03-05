import { User } from "../constants/interface";
import "./userCard.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";

const UserCard = ({ userDetails }: { userDetails: User }) => {
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
    </div>
  );
};

export default UserCard;
