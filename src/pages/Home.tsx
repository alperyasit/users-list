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
  console.log("alper".split("").map((harf, sıra) => sıra));
  const sayilar = [1, 2, 3, 4, 5, 6, 7];
  let toplam = 0;
  sayilar.map((t) => {
    if (t % 2 === 1) {
      toplam += t;
    }
    return;
  });
  console.log(toplam);
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
