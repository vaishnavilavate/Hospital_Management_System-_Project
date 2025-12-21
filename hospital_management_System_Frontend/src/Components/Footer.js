import React from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="footer py-5" style={{ color: "black"}}>
      <div className="container1" style={{ padding: "2rem" }}>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mr-5">
            <h4 style={{color:"#076cea"}}>About Us</h4>
            <p>
            Welcome to NexaCare, your trusted companion in modern hospital and healthcare management! 
            NexaCare is designed to simplify and streamline every aspect of hospital operations from 
            patient registration and appointment scheduling to doctor coordination and medical record management. 
            With user-friendly interfaces, real-time data access, and secure digital workflows, NexaCare empowers hospitals,
            clinics, and medical professionals to deliver efficient, patient-centric care. 
            Whether you're managing outpatient visits, inpatient records, prescriptions, or billing, 
            NexaCare ensures a smooth, accurate, and seamless experience. Experience 24/7 support,
            role-based access, and data-driven decision-making—all in one powerful healthcare solution.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h4 style={{color:"#076cea"}}>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h4 style={{color:"#076cea"}}>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>City, State, 12345</li>
              <li>Email: info@example.com</li>
              <li>Phone: +123-456-7890</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="d-flex justify-content-center mt-4 mb-2">
          <a
            href="#!"
            className="btn btn-floating mx-2"
            style={{ backgroundColor: "#3b5998", color: "white" }}
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#!"
            className="btn btn-floating mx-2"
            style={{ backgroundColor: "#55acee", color: "white" }}
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#!"
            className="btn btn-floating mx-2"
            style={{ backgroundColor: "#dd4b39", color: "white" }}
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="#!"
            className="btn btn-floating mx-2"
            style={{ backgroundColor: "#ac2bac", color: "white" }}
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#!"
            className="btn btn-floating mx-2"
            style={{ backgroundColor: "#0082ca", color: "white" }}
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#!"
            className="btn btn-floating mx-2"
            style={{ backgroundColor: "#333333", color: "white" }}
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div
          className="text-center mt-3 "
          style={{ backgroundColor: "#076cea", padding: "10px" }}
        >
          © 2025 Copyright: NexaCare Hospital
        </div>
      </div>
    </footer>
  );
}

export default Footer;
