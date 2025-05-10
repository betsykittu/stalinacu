import { useEffect } from 'react';
import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { practitioners, aboutContent } from '../../content/about';
import history from "../../images/history.png";
import philosophy from "../../images/philosophy.jpg";

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="about-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0" data-aos="fade-left">
                        <img src={philosophy} alt="philosophy" className="img-fluid rounded" />
                    </div>
                    <div className="col-lg-6" data-aos="fade-right">
                        <h2 className="text-black mb-4">Our Philosophy</h2>
                        <span className='content'>{aboutContent.philosophy.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                        <img src={history} alt="history" className="img-fluid rounded" />
                    </div>
                    <div className="col-lg-6 ml-auto" data-aos="fade-left">
                        <h2 className="text-black mb-4" >Our History</h2>
                        <span className='content'>{aboutContent.story.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}</span>
                    </div>
                </div>
            </div>

            <div className="site-about bg-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5 section-2-title">
                        <div className="col-md-6">
                            <h2 className="mb-4" style={{ fontSize: '50px' }}>Meet Our Team</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center align-items-stretch">
                            {practitioners.map((practitioner, index) => (
                                <div className="col-lg-4 col-md-6 mb-5" key={index}>
                                    <div className="post-entry-1 h-100 person-1">
                                        <img
                                            src={practitioner.image}
                                            alt={practitioner.image}
                                            className="img-fluid"
                                        />
                                        <div className="post-entry-1-contents">
                                            <span className="meta">{practitioner.title}</span>
                                            <h2>{practitioner.name}</h2>
                                            <p>{practitioner.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;