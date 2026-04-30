
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient"; 

const Create = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    if (!name || !email || !message) {
      setFormError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

  
    console.log('Form submitted:', { name, email, message });
  
const { error } = await supabase
    .from('Contacts')
    .insert([{ name, email, message }])

  if (error) {
    console.log(error)
    setFormError('Message failed to send')
    setIsSubmitting(false)
    return
  }

  alert('Message sent successfully!')

  setName('')
  setEmail('')
  setMessage('')
  setIsSubmitting(false)
  navigate('/')
}
// ==============

  return (
    <div className="page-create" style={{ 
      padding: '2rem', 
      maxWidth: '700px', 
      margin: '425px auto', 
      fontFamily: 'Catamaran', 
      fontSize: '50px', 
      fontWeight: "lighter" 
    }}>
      <h2 className="contact-me" style={{ 
        fontFamily: 'Catamaran', 
        color: 'black', 
        fontWeight: '400', 
        borderRadius: '25px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        Contact Me
      </h2> 
      {/* /////// */}
      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <div>
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
        </div>

        <div>
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
        </div>

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
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: '1rem 3rem', 
            fontSize: '1.8rem', 
            backgroundColor: isSubmitting ? '#ccc' : '#ed866bff',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            margin: '2rem auto 0',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            width: '100%',
            maxWidth: '400px',
            transition: 'background-color 0.3s ease',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#ff9c7d';
          }}
          onMouseOut={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#ed866bff';
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {formError && <p style={{ 
          color: 'red', 
          textAlign: 'center',
          fontSize: '1.5rem',
          marginTop: '1rem'
        }}>
          {formError}
        </p>}
      </form>
    </div>
  );
}

export default Create;

