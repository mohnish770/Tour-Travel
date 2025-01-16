import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
// import tourData from "../assets/data/tours";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
// import Newsletter from "../shared/Newsletter";
import { BASE_URL } from "./../utils/config";
import useFetch from "./../hooks/useFetch";
import { AuthContext } from "./../context/AuthContext";
// import { FaCircle } from "react-icons/fa";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(id);

  const {
    data: tour,
    loading,
    error,
  } = useFetch(`https://jai.marketomobile.com/api/user/tour/${id}`);
  // console.log("flag", tour);
  // "id": 1,
  //       "name": "Heart of Himachal",
  //       "duration": "03 Nights / 04 Days Volvo Package",
  //       "path": "Delhi – Manali – Delhi",
  //       "disc": "Day 1: Arrival Manali + Local Sightseeing;\r\nDay 2: Manali - Full-day Trip to Solang Valley;\r\nDay 3: Manali (Full-day Trip to Kullu (45km) and Manikaran (80 km);\r\nDay 4: Manali – Delhi",
  //       "dis_price": "1000",
  //       "price": "1000",
  //       "rev": "5",
  //       "product_image": null,
  //       "main": "Himachal Pradesh",
  //       "status": 1,

  const {
    product_image,
    name,
    disc,
    price,
    main,
    reviews,
    city,
    path,
    duration,
    rev,
  } = tour;
  const arr = disc?.split(";");
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit request to the server

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <i
          key={i}
          className="ri-star-fill"
          style={{ color: "var(--secondary-color)", marginRight: "2px" }}
        ></i>
      );
    }
    return stars;
  };

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img
                    src={`https://jai.marketomobile.com/public/Images/Tour/${product_image}`}
                    alt=""
                  />

                  <div className="tour__info">
                    <h2>{name}</h2>

                    <div className="d-flex align-items-center gap-5">
                      <div className="tour__rating d-flex align-items-center gap-1">
                        {renderStars(rev)} <span>({rev})</span>
                      </div>

                      <span>
                        <i class="ri-map-pin-user-fill"></i>
                        {main}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      {/* <span>
                        <i class="ri-map-pin-2-line"></i>
                        {city}
                      </span> */}
                      <span>
                        <i class="ri-money-dollar-circle-line"></i>
                        From {price} Rupees
                      </span>
                      <span>
                        <i class="ri-map-pin-time-line"></i>
                        {duration}
                      </span>

                      <span>
                        <i
                          className="ri-road-map-line"
                          style={{ marginRight: "8px" }}
                        ></i>
                        {path}
                      </span>
                    </div>
                    <h5>Description</h5>
                    {/* <p>{disc}</p> */}
                    <ol
                      style={{ listStyleType: "square" }}
                      className="custom-list"
                    >
                      {arr?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Tour Reviews Section */}
                  {/* <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5 <i class="ri-star-s-fill"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div> */}
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      {/* <Newsletter /> */}
    </>
  );
};

export default TourDetails;
