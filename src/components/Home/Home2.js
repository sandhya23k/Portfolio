import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
 // AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             <p>Hi, I’m <b class="purple">Sandhya</b> 👋</p>

<p>
  I’m a software engineer passionate about building efficient, modern web applications 
  and exploring innovative tech solutions.
</p>

<p>
  I work with <b class="purple">C#, Java, Python, JavaScript</b>, and love creating projects 
  using <b class="purple">.NET Core, React.js, and Next.js</b>.
</p>

<p>
  I thrive on turning ideas into reality, whether it’s a sleek web app, an automated system, 
  or a robotics project.
</p>
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sandhya23k"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandhya-koganti-0b75a8189/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
