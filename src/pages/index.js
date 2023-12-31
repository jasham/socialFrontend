// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/api/v1/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        console.log("Here is resp", res);
        if (res.data.user.roleId === 1) {
          router.push("/adminPage");
        } else {
          router.push("/feeds");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    // Perform validation or authentication here
    // For demonstration, just redirect to a different page on login
    // router.push("/dashboard"); // Replace '/dashboard' with the actual dashboard route
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
