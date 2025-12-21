import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Slides() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <ToastContainer />

      {/* Background Image */}
      <img
        src="/assests/img6.jpg"
        alt="Banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "1",
        }}
      />

      {/* Overlay Image (Doctor Image) */}
      <img
        src="/assests/img15.png"
        alt="Doctor"
        style={{
          position: "absolute",
          top: "50%", // Centers vertically
          left: "70%", // Moves it to the right
          transform: "translateY(-50%)", // Ensures proper vertical centering
          width: "25%", // Adjust size as needed
          height: "auto",
          zIndex: "2",
        }}
      />

      {/* Text Overlay */}
      <div
        className="video-overlay"
        style={{
          position: "absolute",
          top: "30%", // Adjusted for better alignment
          left: "10%", // Moves it to the left
          color: "#fff",
          zIndex: "2",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "0",color:"#076cea" }}>Nexcare Hospital</h1>
        <h1 style={{ fontSize: "3rem", margin: "0", color: "#ffcc00" }}>Where Care Meets, Excellence</h1>
      </div>
    </div>
  );
}

export default Slides;
