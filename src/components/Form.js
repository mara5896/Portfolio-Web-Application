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
      <div className="contact-me" style={{ 
      }}>
        {/* Contact Me */}
      </div> 
  <label htmlFor="name" style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            color: '#333'
          }}>
            Name:
          </label>
    <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ 
              padding: '1rem', 
              fontSize: '1.5rem', 
              border: '2px solid #ccc',
              borderRadius: '10px',
              width: '100%',
              boxSizing: 'border-box'
            }}
          />
          <label htmlFor="email" style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            color: '#333'
          }}>
            Email:
          </label>
 <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ 
              padding: '1rem', 
              fontSize: '1.5rem', 
              border: '2px solid #ccc',
              borderRadius: '10px',
              width: '100%',
              boxSizing: 'border-box'
            }}
          />
      <div>
          <label htmlFor="message" style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            color: '#333'
          }}>
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            rows="6"
            style={{ 
              padding: '1rem', 
              fontSize: '1.5rem', 
              border: '2px solid #ccc',
              borderRadius: '10px',
              width: '100%',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
        </div>
        
      <button>Send Message</button>

      {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Form