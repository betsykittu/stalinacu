import "./home.css"
import { Link } from "react-router-dom";
import { service } from '../../content/service';
import Carousel from "../../components/Carousel/carousel"
import Faq from "../../components/Faqs/faq"
import Therapies from "../../components/therapies/therapies";

function Home() {
    return (
        <div className="App">
            <div className="site-wrap">

                <div className="hero">
                    <div className="hero-carousel">
                        <Carousel />
                    </div>
                </div>

                {/* Therapies */}
                <Therapies />
                {/* Therapies */}

                {/* FAQs */}
                <Faq />
                {/* FAQs */}

                <div className="site-service">
                    <div className="container" >
                        <div className="site-wrap" >
                            <div className="site-therapies">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-8 intro downward-heading text-center">
                                            <h1 className="text-dark" style={{ fontSize: '50px' }}>Our Services</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {service.map((services, index) => (
                                <div className="col-lg-6 mb-4" key={index}>
                                    <Link to="#" className="d-flex service-2">
                                        <div className="icon-wrap">
                                            <span className={services.icon} />
                                        </div>
                                        <div className="contents">
                                            <h3>{services.title}</h3>
                                            <p>{services.description}!</p>
                                            <div className="d-flex justify-content-between">
                                                <span>Duration: {services.duration} </span>
                                                <span>{services.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
