import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


function Footer() {
  const EmailIcon = () => {
    const emailAddress = 'heather.k.tech@gmail.com'
    return(
      <a href={'malito:${emailAddress}'} > 
      <FiMaili />
      </a>
    )
  }
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
          <li className="email-icons">
              <a
                // href={'malito:${emailAddress}'}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/heather-tech"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Heather_k_tech"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/heather-kruszewski/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              </li>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
