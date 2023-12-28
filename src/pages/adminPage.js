// pages/feedPage.js
import axios from "axios";
import { useState, useEffect } from "react";

// Dummy data for demonstration purposes
const users = [
  { id: 1, name: "User 1", email: "user1@example.com" },
  { id: 2, name: "User 2", email: "user2@example.com" },
  // Add more users as needed
];

const userFeeds = {
  "user1@example.com": [
    { id: 1, content: "Feed 1 for User 1" },
    { id: 2, content: "Feed 2 for User 1" },
    // Feeds for User 1
  ],
  " user2@example.com": [
    { id: 1, content: "Feed 1 for User 2" },
    { id: 2, content: "Feed 2 for User 2" },
    // Feeds for User 2
  ],
  // Add more user feeds as needed
};

export default function FeedPage() {
  const [selectedUser, setSelectedUser] = useState("");
  const [feeds, setFeeds] = useState([]);

  const handleUserSelection = (email) => {
    axios.post("http://localhost:3002/api/v1/invitaion", {
      email: email,
    });
    setSelectedUser("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          margin: "5rem",
        }}
      >
        <div>
          <input
            type="email"
            placeholder="Enter user email"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          />
          <button onClick={() => handleUserSelection(selectedUser)}>
            Submit
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>
            <h2>Users List</h2>
            <ul>
              {users.map((user) => (
                <li
                  key={user.id}
                  onClick={() => handleUserSelection(user.email)}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 2 }}>
            <h2>User Feeds</h2>
            <div>
              {feeds.map((feed) => (
                <div key={feed.id}>
                  <p>{feed.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
