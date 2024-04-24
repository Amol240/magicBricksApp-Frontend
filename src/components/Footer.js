import { Container, Row, Col } from "reactstrap";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-light text-dark py-5  m-5">
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <h5>About Magicbricks</h5>
              <p>
                Magicbricks is a full stack service provider for all real estate
                need
              </p>
              <h5>More from our Network</h5>

              <span> Times of India     Economic Times      Navbharat times     India Times     Filmfare</span><br />
              <span> MensXp             iDiva               TimesJobs           Gadgets Now </span>

              <div className="mt-3">
                <span>
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                  <FaYoutube />
                  <FaInstagram />
                </span>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <h5>Properties in India</h5>
              <p>
                Property in New Delhi | Property in Mumbai | Property in Chennai
                | Property in Pune
              </p>
              <p>
                Property in Noida | Property in Gurgaon | Property in Bangalore
                | Property in Ahmedabad
              </p>

              <h5>New Projects in India</h5>
              <p>
                New Projects in New Delhi | New Projects in Mumbai | New
                Projects in Chennai
              </p>
              <p>
                New Projects in Pune | New Projects in Noida | New Projects in
                Gurgaon
              </p>
              <p>New Projects in Bangalore | New Projects in Ahmedabad</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-dark text-light py-1 ">
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
