import React from 'react'
import shape1 from '../../images/about/shape1.png'
import shape2 from '../../images/about/shape2.png'
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'
import MagnetLines from '../MagnetLines/MagnetLines'


const About = (props) => {
    return(
        <div className="wpo-about-area section-padding" id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-exprience-wrap">
                            <div className="wpo-about-exprience">
                                <h2>2</h2>
                                <span>Years of Experience</span>
                            </div>
                            <div className="client">
                                <h3><AnimatedCounter end={100} suffix="%" duration={2} /></h3>
                                <p>Clients Satisfections</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
                        <div className="wpo-about-content">
                            <div className="wpo-about-title">
                                <h2>My Advantage</h2>
                                <p>I build responsive, user-friendly interfaces using ReactJS, HTML, and CSS with clean, reusable code.

                                    Strong understanding of UI/UX principles, ensuring visually appealing and smooth user experiences.

                                    Ability to quickly learn, adapt, and implement modern frontend tools to deliver efficient, high-quality results.</p>
                            </div>
                            <div className="wpo-about-funfact">
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><AnimatedCounter end={98} suffix="%" duration={2.5} /></h3>
                                        <p>React JS</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><AnimatedCounter end={92} suffix="%" duration={2.5} /></h3>
                                        <p>HTML</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><AnimatedCounter end={88} suffix="%" duration={2.5} /></h3>
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><AnimatedCounter end={72} suffix="%" duration={2.5} /></h3>
                                        <p>Mongo DB</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><AnimatedCounter end={50} suffix="%" duration={2.5} /></h3>
                                        <p>JAVA</p>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="grid-inner">
                                        <h3><AnimatedCounter end={50} suffix="%" duration={2.5} /></h3>
                                        <p>Figma</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ 
                position: 'absolute', 
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.25, 
                zIndex: 1,
                pointerEvents: 'auto',
                filter: 'drop-shadow(0 0 15px rgba(255, 229, 0, 0.3))'
            }}>
                <MagnetLines
                    rows={18}
                    columns={18}
                    containerSize="100%"
                    lineColor="rgba(255, 229, 0, 0.8)"
                    lineWidth="0.5vmin"
                    lineHeight="4vmin"
                    baseAngle={0}
                    style={{ width: '100%', height: '100%', maxWidth: 'none', maxHeight: 'none' }}
                />
            </div>
            <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4267)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4267" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="ab-shape-s2">
                <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
                    <g opacity="0.15" filter="url(#filter0_f_39_4265)">
                        <circle cx="950" cy="950.004" r="450" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4265" x="-0.00012207" y="0.00402832" width="1900" height="1900"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={shape1} alt=""/>
            </div>
            <div className="line-shape-2">
                <img src={shape2} alt=""/>
            </div>
        </div>
    )
}

export default About;