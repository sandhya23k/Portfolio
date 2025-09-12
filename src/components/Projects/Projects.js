import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import xv6 from "../../Assets/Projects/xv6.png";
import states from "../../Assets/Projects/states.jpeg";
import expenses from "../../Assets/Projects/Expenses.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import foon from "../../Assets/Projects/FOON.png";

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
              imgPath={expenses}
              isBlog={false}
              title="Expense Calculator"
              description="Expense Calculator to Add/Delete/Edit Expenses, to keep track of montly expenses of an Individual. Built using .Net MVC, Entity Framework."
              ghLink="https://github.com/sandhya23k/ExpenseCalculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={states}
              isBlog={false}
              title="State Object Recognition"
              description="This project focuses on fine-grained object state recognition, which is crucial for robotic cooking. Unlike object recognition, which identifies the type of object, state recognition classifies the state of the object (e.g., whole, sliced, chopped). The goal is to enable robots to perform manipulation tasks accurately by recognizing the state of cooking objects."
              ghLink="https://github.com/sandhya23k/Object-State-Recognition-for-Robotic-Cooking"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foon}
              isBlog={false}
              title="AI Knowledge Retreival"
              description="This project implements task planning for robotic cooking using a Functional Object-Oriented Network (FOON).  It generates sequences of actions (task trees) to achieve a cooking goal based on the current kitchen state."
              ghLink="https://github.com/sandhya23k/AI--Knowledge-Retrieval"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xv6}
              isBlog={false}
              title="OS Linux Commands on xv6 OS"
              description="Developed Linux Commands at Kernel Level and user level on xv6 and Implmented Scheduling Algorithms using Traditional C."
              ghLink="https://github.com/sandhya23k/OS-Linux-commands"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Graph Algorithms Implementation"
              description="Implementing Graph Algorithms on a huge IMDB dataset as a part of academic project"
              ghLink="https://github.com/sandhya23k/Graph-Algorithms"
                    // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
