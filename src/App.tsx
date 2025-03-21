import { useEffect, useState } from "react";
import "./App.scss";

import { User } from "./types/user";
import Card from "./components/Card";
import Button from "./components/Button";

// İkonları library'e ekleyini

function App() {
  const [users, setUsers] = useState<User[]>();
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=2")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(users);
  if (!users) return;

  return (
    <div className="container">
      <Card profile={users[0]} />
      <Button
        disabled={users[0].location.country === "France"}
        handleClick={fetchData}
      />
    </div>
  );
}

export default App;
