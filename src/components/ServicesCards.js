import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyServices from "../data/PropertyServices";

const ServicesCards = () => {
  const servicesIds = Object.keys(PropertyServices);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Container className="mt-5">
      <h3>Property Services</h3>
      <div className="mt-3">
        <Slider {...settings}>
          {servicesIds.map((id) => {
            const item = PropertyServices[id];
            return (
              <div key={id}>
                <Card
                  className="bg-image hover-zoom"
                  style={{ transition: "transform 0.3s", width: "18rem" }}
                >
                  <CardImg top width="100%"style={{height:"190px"}} src={item.image} />
                  <CardBody>
                    <CardTitle tag="h5">{item.service}</CardTitle>
                    <CardText>
                      {item.info}
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
};

export default ServicesCards;
