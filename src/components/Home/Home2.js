import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a <b className="purple">Full Stack AI Developer</b> who enjoys turning
              complex ideas into <b className="purple">scalable, production-ready SaaS products</b>.
              Over time, I’ve worked on real-world systems where performance, reliability,
              and clean architecture truly matter.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Python, Node.js, React.js, Next.js, and Django{" "}
                </b>
              </i>
              and I enjoy working across both <b className="purple">backend</b> and{" "}
              <b className="purple">frontend</b> stacks.
              <br />
              <br />
              My key areas of interest include building
              <i>
                <b className="purple">
                  {" "}
                  AI-powered web applications, LLM-based features, and intelligent automation
                  systems{" "}
                </b>
              </i>
              using modern AI frameworks and scalable system design.
              <br />
              <br />
              I have hands-on experience working with
              <i>
                <b className="purple">
                  {" "}
                  OpenAI APIs, LLMs, AI Agents, LangChain, Elasticsearch, Redis, and Microservices
                  Architecture{" "}
                </b>
              </i>
              to build high-performance and data-driven applications.
              <br />
              <br />
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
