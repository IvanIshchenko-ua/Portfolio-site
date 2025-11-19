import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Ivan Ishchenko</span>{" "}
            from <span className="purple">Cherkasy region, Ukraine</span>.
            <br />
            I'm a highly motivated and goal-oriented <span className="purple">Full Stack Developer</span> with proven success in programming competitions.
            <br />I'm currently a student at <span className="purple">Uman Lyceum No. 2</span> and completed the <span className="purple">"Web Middle" course</span> at <span className="purple">Robocode IT School</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Full Stack Web Applications 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> React & Node.js Development 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving and Competitive Programming �
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creating efficient and scalable web solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Ivan Ishchenko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
