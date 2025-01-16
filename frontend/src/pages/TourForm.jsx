import React, { useState } from "react";
import "./tourForm.css";
import { Row, Col } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TourForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_id: 0,
    tour_name: "",
    name: "",
    phonenumber: "",
    email: "",
    city: "",
    pax: "",
    tour_id: 0,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data being sent:", formData);

    try {
      const res = await axios.post(
        "https://www.jai.marketomobile.com/api/user/send-mail",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status !== 200) {
        return alert(res.data.message);
      }

      // alert("Form submitted successfully!");
      navigate("/thank-you");
    } catch (err) {
      alert("something went wrong");
    }
  };

  return (
    <div className="tour-form-container">
      <form className="tour-form" onSubmit={handleSubmit}>
        <Row>
          <Col md="6" sm="12" className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md="6" sm="12" className="mb-3">
            <input
              type="text"
              name="tour_name"
              placeholder="Where you want to go"
              className="form-control"
              value={formData.tour_name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md="6" sm="12" className="mb-3">
            <input
              type="text"
              name="phonenumber"
              placeholder="Mobile"
              className="form-control"
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md="6" sm="12" className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md="6" sm="12" className="mb-3">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md="6" sm="12" className="mb-3">
            <input
              type="number"
              name="pax"
              placeholder="Total Passengers"
              className="form-control"
              value={formData.pax}
              onChange={handleChange}
              required
              min="1"
            />
          </Col>
          <Col md="6" sm="12" className="mb-3">
            {/* <textarea
              name="details"
              placeholder="Customized Tour Details"
              className="form-control"
              rows="3"
              value={formData.details}
              onChange={handleChange}
            ></textarea> */}
          </Col>
        </Row>
        <div className="btn-container">
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourForm;
