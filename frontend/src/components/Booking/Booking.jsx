import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import axios from "axios";
const Booking = ({ tour, avgRating }) => {
  console.log("tours", tour);
  const { price, reviews, name, id } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    user_id: user && user.data.id,
    // userEmail: user && user.data.email,
    tour_name: name,
    name: "",
    email: "",
    phonenumber: "",
    city: "",
    pax: 1,
    tour_id: id,
    // bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 500;
  const totalAmount =
    Number(price) + Number(booking.totalPassengers) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(booking);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      const res = await axios.post(
        "https://www.jai.marketomobile.com/api/user/send-mail",
        booking,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: true,
        }
      );

      if (res.status !== 200) {
        return alert(res.data.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      {/* <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          <span>From </span>
          <br />
          {price} Rupees
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}(
          {reviews?.length})
        </span>
      </div> */}

      <div className="booking__form">
        <h5>Information </h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Mobile Number"
              id="phonenumber"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="City"
              id="city"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Total Passengers"
              id="totalPassengers"
              required
              onChange={handleChange}
              min="1"
            />
          </FormGroup>
          {/* <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Booking Date"
              id="bookAt"
              required
              onChange={handleChange}
            />
          </FormGroup> */}
        </Form>
      </div>

      <div className="booking__bottom">
        {/* <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              {price} Rupees <i className="ri-close-line"></i>{" "}
              {booking.totalPassengers} person
            </h5>
            <span>{price} Rupees</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>{serviceFee} Rupees</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>{totalAmount} Rupees</span>
          </ListGroupItem>
        </ListGroup> */}
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
