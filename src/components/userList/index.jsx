import React from "react";

export default function UserList({ users }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
