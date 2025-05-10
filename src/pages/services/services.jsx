import "./services.css"
import { Link } from "react-router-dom";
import { service } from '../../content/service';

const Services = () => {
    return (
        <div className="site-wrap" id="home-section">
            <div className="site-section" >
                <div className="container">
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
    )
}

export default Services;