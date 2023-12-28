// pages/feeds.js
import Link from "next/link";
import { useState, useEffect } from "react";
// Import functions for fetching data from your API

export default function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    // Fetch feeds from your API when the component mounts
    // Replace 'fetchFeeds' with your actual function to fetch user feeds
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href="/socialAuthPage">Link with Social accounts</Link>
      </div>
      <div>
        <h1>User Feeds</h1>
        {feeds.length > 0 ? (
          <ul>
            {feeds.map((feed) => (
              <li key={feed.id}>
                {/* Render feed item content */}
                <p>{feed.content}</p>
                {/* Display additional feed information */}
                <p>{feed.timestamp}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No feeds available</p>
        )}
      </div>
    </div>
  );
}
