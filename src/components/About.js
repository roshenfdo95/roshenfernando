import React from "react";
import Clip from "./Images/about-us.png";
//import ClipSe from "./Images/service-1.png";
//import ClipSe1 from "./Images/service-2.png";
//import ClipSe2 from "./Images/service-3.png";
import ProgressBar from "./ProgressBar";
import { RmFigma, RmReact, RmHtml, RmJavascript, RmJava, RmNode, RmCss, RmBoostrap, RmTailwind, RmPhp, RmWordpress, RmPhotoshop } from "./Icons/Icons";



const Skills = () => {
    return (
        <>
         <section className="about-area border">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={Clip} alt="mylogo" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5">
                            <span>Let me</span>
                            <span>introduce</span>
                            <span>myself</span>
                        </h2>
                        <div className="paragraph py-4 w-75 mb-5">
                            <p className="para">
                                Hi, I’m Roshen. Nice to meet you.I have a serious passion for UI effects, animations and dynamic user experiences
                            </p>
                            <p className="para">
                                I create successful responsive websites that are fast, easy to use and built with best
                                practices.The main area of my expertise is front-end development, HTML, CSS, JS, building
                                small and medium web apps, features, animations and coding interactive layouts.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1643210629">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                     <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
            </div> 
            
        </section> 

        <section className="skills py-5 bg-light">
            <div className="container py-5">
                <h1 className="text-center pb-5">My Current Skills</h1>
                <div className="row pb-3">
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle text-center py-3">
                                    <span><RmHtml/> </span>
                                </div> &nbsp; &nbsp;
                                <div className="circle text-center py-3">
                                    <span><RmCss/> </span>
                                </div>
                                <h4 className="font-weight-bold pb-2">HTML, CSS</h4>
                                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                <ProgressBar bgcolor={"#6a1b9a"} completed={70}/>
                            </div>
                        </div>

                        
                    </div>
                     <div className="col-sm-6 col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle text-center py-3">
                                    <span><RmJava/> </span>
                                </div>&nbsp; &nbsp;
                                <div className="circle text-center py-3">
                                    <span><RmJavascript/> </span>
                                </div>
                                <h4 className="font-weight-bold pb-2">Java, Javascript</h4>
                                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser</p>
                                <ProgressBar bgcolor={"#6a1b9a"} completed={50}/>
                            </div>
                        </div>

                        
                    </div>
                     <div className="col-sm-6 col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle text-center py-3">
                                    <span><RmReact/> </span>
                                </div>&nbsp; &nbsp;
                                <div className="circle text-center py-3">
                                    <span><RmNode/> </span>
                                </div>
                                <h4 className="font-weight-bold pb-2">React, Node</h4>
                                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser</p>
                                <ProgressBar bgcolor={"#6a1b9a"} completed={40}/>
                            </div>
                        </div>

                        
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle text-center py-3">
                                    <span><RmBoostrap/> </span>
                                </div>&nbsp; &nbsp;
                                <div className="circle text-center py-3">
                                    <span><RmTailwind/> </span>
                                </div>
                                <h4 className="font-weight-bold pb-2">Boostrap, Tailwind</h4>
                                <p> Produce responsive websites and web apps that suited to their device and browser.</p>
                                <ProgressBar bgcolor={"#6a1b9a"} completed={50}/>
                            </div>
                        </div>                       
                     </div>
                     <div className="col-sm-6 col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle text-center py-3">
                                    <span><RmWordpress/> </span>
                                </div>&nbsp; &nbsp;
                                <div className="circle text-center py-3">
                                    <span><RmPhp/> </span>
                                </div>
                                <h4 className="font-weight-bold pb-2">WordPress, PHP</h4>
                                <p>Wordpress CMS is a user-friendly administrative area allowing you to easily edit your website's content.</p>
                                <ProgressBar bgcolor={"#6a1b9a"} completed={30}/>
                            </div>
                        </div>

                        
                    </div>
                     <div className="col-sm-6 col-lg-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="circle text-center py-3">
                                    <span><RmFigma/> </span>
                                </div>&nbsp; &nbsp;
                                <div className="circle text-center py-3">
                                    <span><RmPhotoshop/> </span>
                                </div>
                                <h4 className="font-weight-bold pb-2">UI Design</h4>
                                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                                <ProgressBar bgcolor={"#6a1b9a"} completed={60}/>
                            </div>
                        </div>

                        
                    </div>
                     
                </div>

            </div>
        </section>


        </>
    )
}

export default Skills
