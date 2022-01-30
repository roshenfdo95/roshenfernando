import React, {useState} from "react";
// import clip from "./Images/about-us.png";




export const projectdata =
[
    {
        id: 0,
        title: 'Portfolio',
        tech: 'React, Bootstrap',
        image: '/Images/desktop-1.png', 
        descripton: 'Final Project',
        school: 'Front-End Web Development with React In Cousera',
        code:'https://github.com/roshenfdo95'


    },
    {
        id: 1,
        title: 'Blog Site',
        tech: 'React, Tailwind, Sanity CMS',
        image: '/Images/desktop-1.png', 
        descripton: 'I created this blog site during learning on react and tailwind',
        school: 'online course',
        code:'https://github.com/roshenfdo95'

    },
    {
        id: 3,
        title: 'Portfolio V1',
        tech: 'Html, Sass',
        image: '/Images/desktop-1.png', 
        descripton: 'I created this blog site during learning on sass',
        school: 'Online course',
        code:'https://github.com/roshenfdo95'

    },
    {
        id: 4,
        title: 'Online Library Website Template',
        tech: 'Html, Css, Bootstrap',
        image: '/Images/desktop-1.png', 
        descripton: 'I created this blog site during learning on sass',
        school: 'Online course',
        code:'https://github.com/roshenfdo95'

    }
]

export const designdata =
[
    {
        id: 0,
        title: 'Portfolio Website Design',
        category: 'Figma',
        image: '/Images/desktop-1.png'
        
        


    },
    {
        id: 1,
        title: 'Home Page For shop website',
        category: 'Figma',
        image: '/Images/background.png'
        

    },
    {
        id: 2,
        title: 'Portfolio',
        category: 'Figma',
        image: '/Images/desktop-1.png'

    }
   
]

const Projects = () => {

const [modalData, setModalData] = useState(null);

    return (
        <>
         <section className="project">
            <div className="container-fluid">
                <h1 className="text-center font-italic">Projects</h1>
                {projectdata.map((project) => 
                <div className="row pt-5" key={project.id}>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={project.image} alt="mylogo" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        
                        <div className="paragraph py-4 w-75">
                            <h3>
                                {project.title}
                            </h3>
                            
                            <p className="para">
                                {project.descripton}
                            </p>
                            <h6 className="text-uppercase">
                            {project.tech}                  
                            </h6>
                            <a className="btn btn-secondary btn-sm" href={project.code} role="button" target="_blank" rel="noopener noreferrer">Source Code</a>

                        </div>
                        
                    </div>
                </div>
                )}

                <h2 className="text-center font-italic pt-5">UI UX Designs</h2>
                <div className="container d-flex flex-column">

                    <div className="row border">

                        {designdata.map((design) =>
                        <div className="card col-12 col-md-5 ml-5 mt-5" key={design.id} >
                            <img className="card-img-top" alt="ux" data-toggle="modal" data-target=".bd-example-modal-lg" src={design.image} onClick={()=>{setModalData(design.image);}}/>
                            <div className="image__overlay" data-toggle="modal" data-target=".bd-example-modal-lg" src={design.image} alt="Card image cap" onClick={()=>{setModalData(design.image);}}>
                                <div className="image__title">Click to view</div>
        
                            </div>
                            <div className="card-body">
                                <h5 className="card-text">{design.title}</h5>
                                
                            </div>

                         </div>
                         
                       )}
                    </div>                        
                    
                </div>              
            </div>

        </section>    

        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
             <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <img className="card-img-top" src={modalData} alt="viewer"/>
                                        
                    </div>
            </div>
        </div>
        

        </>
    )
}

export default Projects
