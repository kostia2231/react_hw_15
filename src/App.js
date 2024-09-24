import "./App.css";
import React, { useState, useCallback, useMemo } from "react";
import UserList from "./components/userList";

function App() {
  const userList = useMemo(
    () => [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "David" },
      { id: 5, name: "Eve" },
    ],
    []
  );

  const [filter, setFilter] = useState("");
  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter((user) =>
        user.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
      );
    },
    [userList]
  );

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  return (
    <div>
      <input
        style={{ margin: "1rem", padding: "1rem" }}
        type="text"
        placeholder="Filter users..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
} 

export default App;
