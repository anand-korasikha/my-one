import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import simg1 from '../../images/project/line-1.png'
import simg2 from '../../images/project/line-2.png'
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import Cubes from '../Cubes/Cubes';

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
        }
    ]
};


const ProjectSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }
    return (
        <div className="wpo-project-area section-padding" id='portfolio'>
            <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                opacity: 0.35, 
                zIndex: 0,
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 20px rgba(255, 229, 0, 0.2))'
            }}>
                <Cubes 
                    gridSize={8}
                    maxAngle={75}
                    radius={5}
                    borderStyle="2px solid rgba(255, 229, 0, 0.7)"
                    faceColor="rgba(31, 30, 29, 0.85)"
                    rippleColor="rgba(255, 229, 0, 0.8)"
                    rippleSpeed={1.2}
                    autoAnimate={true}
                    rippleOnClick={true}
                    cellGap={12}
                />
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="wpo-section-title-s2">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="title">
                                <h2>Recent Work.</h2>
                                <p>Showcasing my latest frontend development projects with modern, responsive designs and user-focused solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-2">
                            <div className="sec-title-icon">
                                <i className="fi flaticon-self-growth"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-project-wrap wpo-project-slide">
                    <Slider {...settings}>
                        {Projects.map((project, pro) => (
                            <div className="wpo-project-item" key={pro}>
                                <div className="wpo-project-img">
                                    <img src={project.pImg} alt="" />
                                </div>
                                <div className="wpo-project-text">
                                    {project.link ? (
                                        <h2>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                {project.title}
                                            </a>
                                        </h2>
                                    ) : (
                                        <h2 onClick={() => handleClickOpen(project)}>{project.title}</h2>
                                    )}
                                    <span>{project.subTitle}</span>
                                    {project.description && (
                                        <p style={{ fontSize: '14px', marginTop: '10px', color: '#9ca3af' }}>{project.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="shape-p">
                <svg width="1325" height="1687" viewBox="0 0 1325 1687" fill="none">
                    <g filter="url(#filter0_f_39_4166)">
                        <circle cx="481.5" cy="843.5" r="343.5" fillOpacity="0.27" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4166" x="-362" y="0" width="1687" height="1687"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4166" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={simg1} alt="" />
            </div>
            <div className="line-shape-2">
                <img src={simg2} alt="" />
            </div>
            <ProjectSingle open={open} onClose={handleClose} title={state.title} pImg={state.ps1img} psub1img1={state.psub1img1} psub1img2={state.psub1img2} />
        </div>
    );
}

export default ProjectSection;