import { useEffect, useState } from "react";
import Button from "../components/Button";
import { User } from "../types/user";
import UserList from "./UserList";

const Home = () => {
  const [users, setUsers] = useState<User[]>();

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!users) return null;

  return (
    <>
      {users.map((kullanıcı) => (
        <UserList name={kullanıcı.name.first} id={kullanıcı.id.value} />
      ))}
      <Button
        // disabled={users[0].location.country === "France"}
        handleClick={fetchData}
      />
    </>
  );
};

export default Home;
