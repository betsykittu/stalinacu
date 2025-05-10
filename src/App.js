import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const Home = lazy(() => import("../src/pages/home/home"));
const Services = lazy(() => import("../src/pages/services/services"));
const Blog = lazy(() => import("../src/pages/blog/blog"));
const About = lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="loader-container">
          <i className="bi bi-yin-yang spin-icon icon-style"></i>
        </div>
      }>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
