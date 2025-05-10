import "./footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="site-footer py-5">
                <hr className="footer-divider" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center quick-contact-info">
                                <div className="mb-3 icon-wrap">
                                    <Link to="tel:18001234902">
                                        <i className="bi bi-telephone-fill icon"></i>
                                    </Link>
                                </div>
                                <span className="caption">
                                    <Link to="tel:+91 98765 43210">+91 98765 43210</Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center quick-contact-info">
                                <div className="mb-3 icon-wrap">
                                    <Link
                                        to="https://www.google.com/maps?q=2130+Fulton+Street+San+Diego,+CA+94117-1080+USA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-geo-alt-fill icon"></i>
                                    </Link>
                                </div>
                                <span className="caption">
                                    <Link
                                        to="https://www.google.com/maps?q=2130+Fulton+Street+San+Diego,+CA+94117-1080+USA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        3rd Floor, Harmony Wellness Complex
                                        Plot No. 22, Lakeview Road, Indira Nagar
                                        Bangalore, Karnataka – 560038
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center quick-contact-info">
                                <div className="mb-3 icon-wrap">
                                    <Link to="mailto:info@mydomain.com">
                                        <i className="bi bi-envelope-fill icon"></i>
                                    </Link>
                                </div>
                                <span className="caption">
                                    <Link to="mailto:info@mydomain.com">contact@mihiacucare.in</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5">
                        <div className="col-lg-6 text-start">
                            <p>
                                Copyright © All rights reserved | {new Date().getFullYear()}{" "}
                                <Link to="/" target="_blank">
                                    Mihi AcuCare
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-6 text-end">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon-circle me-2 icon">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon-circle me-2 icon">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon-circle me-2 icon">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon-circle me-2 icon">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
