import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Images/icon.png";
const Navbar = () => {
     const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }

  };
  window.addEventListener("scroll", changeBackground);
  

    return (
        <nav className={navbar ? "navbar act navbar-expand-lg navbar-light fixed-top" : "navbar navbar-expand-lg navbar-light fixed-top"}>
  <div className="container">   
  <NavLink to="/" className="navbar-brand"><img src={Logo} alt="mylogo"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link">Home</NavLink><span className="sr-only">(current)</span>
      </li>
      <li className="nav-item">
        <NavLink to="/About" className="nav-link">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Project" className="nav-link">Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Blog</NavLink>
      </li>
             
    </ul>
  </div>
  </div>
</nav>

        
    )
}

export default Navbar