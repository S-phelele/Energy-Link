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
                Join us in building a sustainable future by selling electricity to
                the government
            </p>
            </div>
            <div className="btn-group">
            <button className="home-btn" onClick={"/login"}>
                Apply Now
            </button>
            <button className="home-btn" onClick={"/Eligibility"}>
                Check Eligibility
            </button>
            </div>
        </div>

        <div className="homepage2">
            <div className="title2">
                <h1>How It Works</h1>
            </div>
            <div className="row-1">
                <div id="step"><h2>STEP 1</h2></div>
                <div id="step"><h2>STEP 2</h2></div>
                <div id="step"><h2>STEP 3</h2></div>
                <div id="step"><h2>STEP 4</h2></div>
            </div>
            <div className="row-2">
                <div id="stage"><h4>Register your account</h4></div>
                <div id="stage"><h4>Submit your details</h4></div>
                <div id="stage"><h4>Start Supplying</h4></div>
                <div id="stage"><h4>Get Paid</h4></div>
            </div>
        </div>

        <div className="homepage3">
            <div className="benefits-title">
                <h1>Benefits</h1>
            </div>
        </div>
    </div>
  );
}
export default Homepage;
