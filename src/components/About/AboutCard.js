import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">VISHVAS HADIYAL</span>{" "}
            from <span className="purple">Bhubaneswar, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Juspay</span>.
            <br />I hold an Integrated M.Sc. (IMSc) in{" "}
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote> */}
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vishvas Hadiyal</span>{" "}
            from <span className="purple">Surendranagar, Gujarat, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software & AI Developer</span> at{" "}
            <span className="purple">Antoc AI</span>.
            <br />
            I hold a Bachelor’s degree in{" "}
            <span className="purple">Computer Engineering</span> from{" "}
            <span className="purple">Government Engineering College, Gandhinagar</span>.
            <br />
            <br />
            Alongside my professional work, I actively focus on strengthening my
            engineering and AI expertise through:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Deep-diving into <span className="purple">AI and LLM research</span> to stay updated with emerging models and techniques ⚙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Building <span className="purple">personal AI assistant🤖 </span> to Automate everything
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games  📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe real innovation begins where conventional thinking ends."
          </p>
          <footer className="blockquote-footer">Vishvas</footer>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
