import "./therapies.css"
import { Link } from "react-router-dom";

const Therapies = () => {
    return (
            <div className="therapies">
                <div className="site-wrap" id="home-section">
                    <div className="site-therapies" id="contact-section" >
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-8 intro downward-heading text-center">
                                <h1 className="text-dark" style={{ fontSize: '50px' }}>Therapies we provide</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters align-items-stretch">
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="therapy">
                                <div className="icon-wrap">
                                    <span className="flaticon-therapy" />
                                     </div>
                                <h3>Therapy</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="therapy">
                                <div className="icon-wrap">
                                    <span className="flaticon-acupuncture" />
                                </div>
                                <h3>Healing</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="therapy">
                                <div className="icon-wrap">
                                    <span className="flaticon-acupuncture-1" />
                                </div>
                                <h3>Foot</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="therapy">
                                <div className="icon-wrap">
                                    <span className="flaticon-acupuncture-2" />
                                </div>
                                <h3>Acupuncture</h3>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md col-lg h-100">
                            <Link to="#" className="therapy">
                                <div className="icon-wrap">
                                    <span className="flaticon-herbal" />
                                </div>
                                <h3>Natural</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Therapies;