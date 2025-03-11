import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmad Sayeb </span>
            from <span className="purple">Toronto, Canada.</span>
            <br />
            I am currently employed as a Senior Data Engineer (ML Oriented) at Payfare.
            <br />
            I have a Bachelor's degree in Electrical and Electronics Engineering from Orta Doğu Technical University 
            and a Post-graduate degree in Artificial Intelligence from Georgian College.
            <br />
            <br />
            My professional expertise includes:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building ML systems including LLM solutions with fine-tuning techniques
            </li>
            <li className="about-activity">
              <ImPointRight /> Architecting intelligent forecasting services and data pipelines
            </li>
            <li className="about-activity">
              <ImPointRight /> Deploying cloud infrastructure and ML workloads on Kubernetes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transform data into intelligence, intelligence into action!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;