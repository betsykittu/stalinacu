import "./blog.css";
import blogPosts from "../../content/blogPosts";

function Blog() {
  return (
    <div className="site-wrap" id="home-section">
      <div className="container">
        <div className="container-blog">
          {blogPosts.map((post) => (
            <div className="card" key={post.id}>
              <div className="card-header">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="card-body">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <div className="user">
                  <img src={post.person} alt="user" />
                  <div className="user-info">
                    <h5>Admin</h5>
                    <small>{post.time}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Blog;