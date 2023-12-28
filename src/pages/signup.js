// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/api/v1/signup", {
        email: username,
        password: password,
      })
      .then((res) => {
        alert("SignUp successful");
        router.push("/");
      })
      .catch((err) => {
        alert("Issue in signUp try again");
      });
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
      <h1>SignUp</h1>
      <form onSubmit={handleSignUp}>
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
