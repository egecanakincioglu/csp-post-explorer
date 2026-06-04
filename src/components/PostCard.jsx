function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "12px", borderRadius: "8px" }}>
      <p><strong>ID:</strong> {post.id}</p>
      <p><strong>User ID:</strong> {post.userId}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostCard;