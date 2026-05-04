import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../config/supabaseClient"


const Form = () => {
  const navigate = useNavigate()
  const [name, setName]= useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState(null)

   const handleSubmit = async (e) => {
    e.preventDefault()

    if(!name || !email || !message){
      setFormError('Please fill in all the fields')
      return
    }
    
    const { data, error} = await supabase
        .from('blog')
        .insert([{ name, email, message}])
        .select()
      
    if(error){
        console.log(error)
        setFormError('Please fill in all the fields')
    }
    if(data){
    console.log(data)
    setFormError(null)
    navigate('/')
    }
   }

   

  return (
    <div className="page form">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">email:</label>
      <input
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea
      type="text"
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send Message</button>

      {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Form