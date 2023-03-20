import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, [users]);
  return (
    <div className="App">
      {users.map((user) => (
        <div className="container">
          <h1>{user.title}</h1>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
