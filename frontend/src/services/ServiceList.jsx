import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Best Services",
    desc: "We will provide you services like cabs, busses and hotels. ",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "During the Trips we will provide you the best tour guides there is.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "You can also customize your plan anytime you want.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md='6' sm='12' className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
