const BlogCard = ( { blog }) => {
    
return (
    <div className="blog-card">
        <h3>{blog.name}</h3>
        <p>{blog.email}</p>
        <div className="message">{blog.message}</div>
    </div>
)
}

export default BlogCard;