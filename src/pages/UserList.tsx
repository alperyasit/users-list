import { Link } from "react-router-dom";
import "./UserList.scss";

interface UserListProps {
  name: string;
  id: number | string;
}

const UserList = ({ name, id }: UserListProps) => {
  return (
    <Link to={`/card/${id}`}>
      <h1>{name}</h1>
      <p>Gelen ID: {id ? id : ` not found ${name} ' id  `}</p>
    </Link>
  );
};

export default UserList;
