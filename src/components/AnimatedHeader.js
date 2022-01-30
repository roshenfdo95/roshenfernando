import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import BgImg from "./Images/bubble.png";




function Home() {
  return (
      <>
      <div className="hero">
        <div className="content">
            <small>Welcome to My</small>
            <h1>Portfolio</h1>
             <Typewriter
                    options={{
                    strings: ['Designer ', 'Front-end Developer'],
                    autoStart: true,
                    loop: true,
                            }}
                />
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Take a tour</button>
        </div>
        <div className="side-bar">

            <div className="social-links">
                <span>
                    <a href="https://github.com/roshenfdo95" className="icon" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
                </a>
                    </span>
                <span>
                     <a href="https://www.linkedin.com/in/roshen-fernando-930197181/" className="icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
                </a>
                    </span>
                <span>
                     <a href="https://twitter.com/?lang=en" className="icon" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
                </a>
                    </span>
                    
            </div>
        </div>

        <div className="bubbles">
            <img src={BgImg} alt="bubble"/>
            <img src={BgImg} alt="bubble"/>
            <img src={BgImg} alt="bubble"/>
            <img src={BgImg} alt="bubble"/>
            <img src={BgImg} alt="bubble"/>
            <img src={BgImg} alt="bubble"/>
            <img src={BgImg} alt="bubble"/>
        </div>

    </div>
    <div className="custom-shape-divider-bottom-1643212232">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
    </svg>
    </div>
     </>
  );
}

export default Home;
