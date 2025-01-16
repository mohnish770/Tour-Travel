import React from "react";
import Slider from "react-slick";
// import ava01 from "../../assets/images/ava-1.jpg";
// import ava02 from "../../assets/images/ava-2.jpg";
// import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Went to leh trip with this company had the best experience, they
          provided us the best service there, had a great time.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          {/* <img src={ava01} className="w-25 h-25 rounded-2" alt="" /> */}
          <div>
            <h6 className="mb-0 mt-3">Kshitiz Ranta</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          I went to Jaipur with family last year, had a great experience, had a
          very comfortable journey and enjoyed a lot.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          {/* <img src={ava02} className="w-25 h-25 rounded-2" alt="" /> */}
          <div>
            <h6 className="mb-0 mt-3">Priyanshi Mehta</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Their Staff was very helpful, they helped us with everything
          throughout the tour like bus service to hotel rooms, did'nt had to
          worry about anything.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          {/* <img src={ava03} className="w-25 h-25 rounded-2" alt="" /> */}
          <div>
            <h6 className="mb-0 mt-3">Tanya Gupta</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          The pricing of the overall package was excellent, considering the
          value and services offered. It truly provided a great experience
          without compromising on quality.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          {/* <img src={ava01} className="w-25 h-25 rounded-2" alt="" /> */}
          <div>
            <h6 className="mb-0 mt-3">Piyush Chauhaan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Our trip was fantastic! Everything was well-organized, from hotels to
          transport. The guides were friendly and gave us so much useful
          information. It was a great experience, and I will definitely
          recommend this tour to others!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          {/* <img src={ava02} className="w-25 h-25 rounded-2" alt="" /> */}
          <div>
            <h6 className="mb-0 mt-3">Aryan Sharma</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          This was one of the best trips I’ve ever been on! The team made sure
          everything was smooth and comfortable. They showed us some amazing
          places we would have never found on our own. I can’t wait to plan my
          next trip with them!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          {/* <img src={ava03} className="w-25 h-25 rounded-2" alt="" /> */}
          <div>
            <h6 className="mb-0 mt-3">Arpita Dhyaan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
