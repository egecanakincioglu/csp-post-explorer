import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts.");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
        <h1>Post Explorer</h1>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "12px", borderRadius: "8px" }}>
            <p><strong>ID:</strong> {post.id}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
