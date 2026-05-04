import { supabase } from "../config/supabaseClient"
import { useEffect, useState} from 'react'
import BlogCard from "../components/BlogCard"


const Chat = () => {
  const [fetchError, setFetchError] = useState(null)
  const [blog, setBlog] = useState(null)

useEffect(() => {
 const fetchBlog = async () => {
  const { data, error} = await supabase
  .from('blog')
  .select()

  if(error) {
    setFetchError('Could not fetch the blog')
    setBlog(null)
    console.log(error); 
  }
  if(data){
    setBlog(data)
    setFetchError(null)
  }
 }
 fetchBlog()
  }, [])


  return (
    <div className="page chat">
      {fetchError && (<p>{fetchError}</p>)}
      {blog && (
        <div className="blog">
            <div className="blog-grid"> 
           {blog.map(blog => (

              <BlogCard key={blog.id} blog={blog} />    
           ))}
        </div>
         </div>
  )}
  </div>
  )
}

export default Chat