import React from "react";

function Section1() {
  return (
    <div
      className="mycontainer my-5"
      style={{margin: "5%" }}
    >
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6 col-12 mb-4 mb-md-0">
          <h2 className="mb-4 fw-bolder fs-1" style={{ color: "#076cea" }}>
          Nexcare Hospital
          </h2>
          <p className="mb-4 me-5 fs-5">
            About Nexcare Hospital Nexcare Hospital is committed to providing
            high-quality, patient-centered healthcare with a focus on innovation
            and excellence. Equipped with advanced medical technology and a team
            of experienced professionals, we offer comprehensive services,
            including consultations, diagnostics, surgeries, and emergency care.
            Our hospital application enhances patient convenience by enabling
            seamless appointment booking, digital medical records access, and
            telemedicine consultations. With a strong emphasis on compassionate
            care and modern healthcare solutions, Nexcare Hospital strives to
            ensure the well-being and satisfaction of every patient.
          </p>
        </div>

        <div className="col-lg-5 col-md-6 col-12">
          <div className="row g-2">
            <img
              src="./assests/img4.jpg"
              alt="Nexcare Hospital"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
