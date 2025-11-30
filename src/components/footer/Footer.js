import React from 'react'
import { Link} from 'react-scroll'
import Logo from '../../images/logo.png'
import CtaSection from '../ctaSection/ctaSection'


const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <CtaSection/>
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className="site-logo" to="/"><img
                                        src={Logo} alt=""/>Anand</Link>
                                </div>
                                <p>Frontend Developer specializing in React.js, creating modern, responsive, and user-friendly web applications with clean code and innovative designs.</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="https://www.facebook.com/share/1F2xdXrHpK/" target="_blank" rel="noopener noreferrer"><i className="ti-facebook"></i></a></li>
                                        <li><a href="https://x.com/KorasikhaKumar?t=LdZz2EzGExvU2D5mqFoFrw&s=09" target="_blank" rel="noopener noreferrer"><i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/korasikha-anand-kumar-73200b248" target="_blank" rel="noopener noreferrer"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="https://github.com/anand-korasikha" target="_blank" rel="noopener noreferrer"><i className="ti-github"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigation</h3>
                                </div>
                                <ul>
                                    <li><Link to="about" spy={true} smooth={true}  duration={500}>About us</Link></li>
                                    <li><Link to="contact" spy={true} smooth={true}  duration={500}>Contact us</Link></li>
                                    <li><Link to="portfolio" spy={true} smooth={true}  duration={500}>Projects</Link></li>
                                    <li><Link to="blog" spy={true} smooth={true}  duration={500}>Recent Post</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>All Services</h3>
                                </div>
                                <ul>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>React Development</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Responsive Design</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>UI/UX Design</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Frontend Optimization</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>Stay updated with my latest projects, articles, and frontend development tips. Subscribe to get notifications!</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required/>
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="ti-email"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-shape">
                    <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2025 AnandKorasikha. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;