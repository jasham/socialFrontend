import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/posts") // Create an API route to fetch posts
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch user posts", error);
        router.push("/");
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={() => router.push("/logout")}>Logout</button>
      <div>
        <h2>User Posts:</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
