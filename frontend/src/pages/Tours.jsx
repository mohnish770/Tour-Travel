import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "./../shared/TourCard";
import CategorySelector from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { category } = location.state || { category: "All" };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jai.marketomobile.com/api/user/tour_nam/${category}`
      );
      console.log(res.data.data);
      setTours(res.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [category]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <CategorySelector />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && Array.isArray(tours) && (
            <Row>
              {tours.map((tour) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Tours;
