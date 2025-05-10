import './carousel.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import carousel_1 from "../../images/carousel_1.png";
import carousel_2 from "../../images/carousel_2.png";
import carousel_3 from "../../images/carousel_3.png";


const CarouselSlider = () => {
    return (
        <div className="carousel-wrapper position-relative">
            <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={5000}
                transitionTime={600}>
                <div>
                    <img src={carousel_1} alt="Slide 1" />
                </div>
                <div>
                    <img src={carousel_2} alt="Slide 2" />
                </div>
                <div>
                    <img src={carousel_3} alt="Slide 3" />
                </div>
            </Carousel>

            <div className="carousel-overlay">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8 intro text-center">
                            <h1 className="text-white">
                                Welcome to <strong className="text-primary"> Mihi Acu Care. </strong>
                            </h1>
                            <div className="desc text-white mb-4">
                                Experience the healing power of traditional acupuncture.
                            </div>
                            <div className="d-flex justify-content-center flex-wrap">
                                <Link to="/services" className="btn btn-primary custom-space me-3 mb-2">
                                    Our Services
                                </Link> &nbsp;&nbsp;&nbsp;
                                <Link to="/contact" className="btn btn-outline-light custom-space mb-2">
                                    Book an Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlider;
