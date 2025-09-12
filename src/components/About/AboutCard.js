import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandhya Koganti </span>
            a software engineer with a passion for building innovative applications in robotics, AI, and web development. I hold a Master’s in Computer Science from the University of South Florida, and I have 3+ years of professional experience developing full-stack solutions using C#, .NET, React.js, and Python.
          <span className="purple"> .</span>
          <br />
          <br />
          I enjoy turning complex problems into intuitive solutions, whether it’s designing automated trading systems, creating interactive web applications, or developing AI models . I thrive in collaborative environments and love learning new technologies to stay ahead in the ever-evolving tech landscape.
          <br />
          <br />
          When I’m not coding, I enjoy exploring emerging tech in robotics, AI, and software solutions, and sharing knowledge through personal projects and contributions to open-source communities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sandhya Koganti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
