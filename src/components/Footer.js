import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
      <>

<footer className="page-footer font-small pt-4">  
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
          <ul className="footer-social list-unstyled mt-3">					
				
				<li><span>
                    <a href="https://github.com/roshenfdo95" className="icon" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
                </a>
                    </span></li>
				<li><span>
                     <a href="https://www.linkedin.com/in/roshen-fernando-930197181/" className="icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
                </a>
                    </span></li>
				<li><span>
                     <a href="https://twitter.com/RoshenFdo1" className="icon" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
                </a>
                    </span></li>
		   </ul>
        
      </div>
      <hr className="clearfix w-100 d-md-none pb-3"></hr>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">I am available for hire at</h5>
        <ul className="list-unstyled">
          <li>
            <a href="https://latium.org/profile/roshenfdo" target="_blank" rel="noopener noreferrer">Latium Freelancing</a>
          </li>
          <li>
            <a href="#https://www.freelancer.com/u/roshenmadushanka" target="_blank" rel="noopener noreferrer">Freelancing</a>
          </li>
        </ul>
      </div>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Have a Questions?</h5>
        <ul className="list-unstyled">
          <li>
            <a className="email">roshenmadushanka@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-left py-3">
    <h5>Designed and Developed by Roshen Fernando</h5>
  </div>
  <div className="footer-copyright text-center py-3">© 2021 Copyright:
    <a> RM</a>
  </div>
</footer>
    </>
   
        
    )
}

export default Footer
