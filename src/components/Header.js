import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><img src="/img/bootstrap.png" alt="Bootstrap Icon" /></li>
          <li><img src="/img/html-5.png" alt="HTML Icon" /></li>
          <li><img src="/img/js.png" alt="JavaScript Icon" /></li>
          {/* <li><img src="/img/programing.png" alt="Programming Icon" /></li> */}
        <li>
  <img 
    src="/img/programing.png" 
    alt="Programming Icon" 
    className="programming-icon"
  />
</li>
        </ul>

        <ul className="header-links">
          <CustomLink to="/">Home</CustomLink>
         
          <CustomLink to="/portfolio">Portfolio</CustomLink>
           {/* <CustomLink to="/chat">Chat</CustomLink> */}
         <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({
    path: resolvedPath.pathname,
    end: true
  });

  
  if (isActive) return null;

  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
