import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git/GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Docker} alt="docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
