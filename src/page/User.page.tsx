import UserCard from "../components/UserCard.components";
import { User } from "../constants/interface";

const UserPage = ({ users }: { users: User[] }) => {
  return (
    <>
      <div className="parent">
        {users.map((user) => {
          return <UserCard userDetails={user} />;
        })}
      </div>
    </>
  );
};

export default UserPage;
