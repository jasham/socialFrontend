import axios from "axios";
import Link from "next/link";

const SocialAuthService = () => {
  const click = (sType) => {
    switch (sType) {
      case "fb":
        axios.get(
          "https://www.facebook.com/v13.0/dialog/oauth?client_id=720243843501638&redirect_uri=http://localhost:3002/auth/facebook/callback&scope=user_posts,user_photos,user_likes,email"
        );
        break;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Link
        href={{
          pathname: `http://localhost:3002/auth/facebook`,
          query: {
            uId: "123345", // should be `title` not `id`
          },
        }}
      >
        Click me to link FB
      </Link>
      <button type="button" onClick={() => click("fb")}>
        Click me to link Twitter
      </button>
      <button type="button" onClick={() => click("fb")}>
        Click me to link Instagram
      </button>
    </div>
  );
};

export default SocialAuthService;
