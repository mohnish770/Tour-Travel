import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import "./tour-card.css";
import calculateAvgRating from "../utils/avgRating";
import desc from "../pages/Desc";

/*
"id": 1,
            "name": "Heart of Himachal",
            "duration": "03 Nights / 04 Days Volvo Package",
            "path": "Delhi – Manali – Delhi",
            "disc": "Day 1: Arrival Manali + Local Sightseeing;\r\nDay 2: Manali - Full-day Trip to Solang Valley;\r\nDay 3: Manali (Full-day Trip to Kullu (45km) and Manikaran (80 km);\r\nDay 4: Manali – Delhi",
            "dis-price": "1000",
            "price": "1000",
            "rev": "5",
            "product_image": null,
            "main": "Himachal Pradesh",
            */

const TourCard = ({ tour }) => {
  const { id, name, product_image, price, featured, reviews, duration, main } =
    tour;
  console.log("hello", tour);

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  function click() {}

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img
            src={`https://jai.marketomobile.com/public/Images/Tour/${product_image}`}
            alt="tour-img"
          />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {main}
            </span>
            {/* <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span> */}
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{name}</Link>
          </h5>

          <div className="card__duration d-flex align-items-center gap-1">
            <FaClock className="clock-icon" />
            <span>{duration}</span>
            {/* <span>3 Days 2 Night</span> */}
          </div>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            {/* <h5>
              <span>From</span><br/>{price} Rupees 
            </h5> */}

            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
              {/* <Link to={`/desc/${id}`}>Go to desc</Link> */}
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
