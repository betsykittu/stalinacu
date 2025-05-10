import "./header.css"

export default function header() {
  return (
    <div className="top-navbar bg-primary text-white py-2 fixed-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 d-flex justify-content-center">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-yin-yang yang-icon moveHorizontally"></i>
            </a>
          </div>
          <div className="col-lg-7 text-end text-white small">
            <span className="me-3">10 AM to 1 PM </span>
            <span className="me-3 hide-on-mobile">|</span>
            <span className="me-3">5 PM to 7.30 PM</span>
            <span className="me-3 hide-on-mobile">|</span>
            <span>For appointment Call us <a href="tel:+917708211515" className="text-white text-decoration-none">+91 98765 43210</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}
