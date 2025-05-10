import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("offcanvas-menu");
    } else {
      document.body.classList.remove("offcanvas-menu");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      <header className="site-navbar site-navbar-target sticky-header" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <div className="site-logo">
                <Link to="/">Mihi<span className="text-primary">AcuCare</span></Link>
              </div>
            </div>
            <div className="col-9 text-right">
              <span className="d-inline-block d-lg-none">
                <button
                  onClick={toggleMenu}
                  className="site-menu-toggle js-menu-toggle py-5 btn btn-link"
                >
                  <i className="bi bi-list h3 text-dark" style={{marginRight:"-600px",fontSize:"50px"}}></i>
                </button>
              </span>
              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className={location.pathname === "/services" ? "active" : ""}>
                    <Link to="/services" className="nav-link">Services</Link>
                  </li>
                  <li className={location.pathname === "/blog" ? "active" : ""}>
                    <Link to="/blog" className="nav-link">Blog</Link>
                  </li>
                  <li className={location.pathname === "/about" ? "active" : ""}>
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className={location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact" className="nav-link">Book an Appointment</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
      <div className={`site-mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <button onClick={toggleMenu}>
            <i className="bi bi-x-lg"></i></button>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
            </li>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <Link to="/blog" className="nav-link" onClick={toggleMenu}>Blog</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>Book an Appointment</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
