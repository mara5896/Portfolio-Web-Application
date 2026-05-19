import { Link } from "react-router-dom";
export default function CTA() {
  return (
   
    <section className="cta">
      <div className="text">
        <h1>Kai Washington</h1>
        <h2 className="jobtitle">SOFTWARE ENGINEER</h2>
 <Link to="/contact"> 
           <button>Contact Me</button>
           </Link>
        <nav className="social-icons">
          <ul>
            <li>
              <a
              href="https://linkedin.com/in/kai-wm" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }} 
    >
    <img src="/img/linkedin.png" alt="LinkedIn" />
    </a>
    </li>
    <li><img src="/img/instagram.png" alt="Instagram" /></li> 
     {/* <li><img src="/img/youtube.png" alt="YouTube" /></li> */}
    <li>
    <a 
    href="https://github.com/mara5896" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }} 
  >
    <img src="/img/github.png" alt="GitHub Profile" />
  </a>
</li>
           <li>
  <a href="mailto:kai.washington01@gmail.com" style={{ textDecoration: 'none' }}>
    <img src="img/gmail.png" alt="Email" />
  </a>
</li>
          </ul>
        </nav>
      </div>

      <div className="hero-image">
        <img src="/img/hero-image.png" alt="Hero" />
      </div>
    </section>
  );
}
