import { useEffect } from 'react';
import './faq.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accordion from 'react-bootstrap/Accordion';


const Faq = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container my-5 faq-section">
      <div className="row align-items-start">
        <div className="col-md-6 faq-title" data-aos="fade-up">
          <h1 className="display-5 mb-4">Frequently Asked Questions</h1>
          <p className="lead">Curious about acupuncture? Here are answers to your most asked questions!</p> 
        </div>
        
        <div className="col-md-6 faq-accordion" data-aos="fade-down">
          <Accordion defaultActiveKey={null}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is acupuncture?</Accordion.Header>
              <Accordion.Body>
                Acupuncture is a traditional Chinese medicine technique that involves inserting thin needles into specific points on the body to balance energy and promote healing.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Does acupuncture hurt?</Accordion.Header>
              <Accordion.Body>
                Most people feel minimal discomfort. The needles are extremely thin, and many patients find the treatment relaxing.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>What conditions can acupuncture treat?</Accordion.Header>
              <Accordion.Body>
                It is commonly used for pain relief, stress, migraines, insomnia, fertility support, and digestive issues.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Is acupuncture safe?</Accordion.Header>
              <Accordion.Body>
                Yes, when performed by a licensed practitioner using sterile, single-use needles, it is very safe.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>How many sessions will I need?</Accordion.Header>
              <Accordion.Body>
                This depends on your condition. Acute issues may resolve in a few sessions, while chronic conditions may require ongoing care.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Are there any side effects?</Accordion.Header>
              <Accordion.Body>
                Side effects are rare but may include mild bruising, soreness, or light bleeding at the needle site.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Can I combine acupuncture with other treatments?</Accordion.Header>
              <Accordion.Body>
                Yes, acupuncture can safely be used alongside conventional medicine, physical therapy, and other holistic approaches.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Faq;
