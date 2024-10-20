import React from "react";
import "./Styles/HomeStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Homepage() {
  return (
    <div className="home-Container">
        <div className="homepage1">
            <div className="home-header">
            <h2>
                {" "}
                Sell Your Excess Electricity and Contribute to a Greener Future
            </h2>
            </div>
            <div className="home-content">
            <p>
                {" "}
                Empower your community by turning your surplus energy into revenue.
                Join us in building a sustainable future and earn credits for the energy you generate!
            </p>
            </div>
            <div className="btn-group">
            <button className="home-btn" onClick={"/login"}>
                Get Started
            </button>
            </div>
        </div>

    </div>
  );
}
export default Homepage;
