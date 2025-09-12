import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";

import ExpenseCalculator from "../../Assets/Projects/ExpenseCalculator.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseCalculator}
              isBlog={false}
              title="Expense Calculator"
              description="Expense Calculator to Add/Delete/Edit Expenses, to keep track of montly expenses of an Individual. Built using .Net MVC, Entity Framework."
              ghLink="https://github.com/sandhya23k/ExpenseCalculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="State Object Recognition"
              description="This project focuses on fine-grained object state recognition, which is crucial for robotic cooking. Unlike object recognition, which identifies the type of object, state recognition classifies the state of the object (e.g., whole, sliced, chopped). The goal is to enable robots to perform manipulation tasks accurately by recognizing the state of cooking objects."
              ghLink="https://github.com/sandhya23k/Object-State-Recognition-for-Robotic-Cooking"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI Knowledge Retreival"
              description="This project implements task planning for robotic cooking using a Functional Object-Oriented Network (FOON).  It generates sequences of actions (task trees) to achieve a cooking goal based on the current kitchen state."
              ghLink="https://github.com/sandhya23k/AI--Knowledge-Retrieval"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
