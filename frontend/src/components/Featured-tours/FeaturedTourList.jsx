import React from "react";
import Slider from "react-slick";
import TourCard from "../../shared/TourCard";
import useFetch from "./../../hooks/useFetch.js";
import "./featuredTourList.css";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`https://jai.marketomobile.com/api/user/tour`);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="featured-tour-slider">
      {loading && <h4>Loading......</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && (
        <Slider {...settings}>
          {featuredTours?.map((tour) => (
            <div key={tour._id} className="scroll-item">
              <TourCard tour={tour} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default FeaturedTourList;
