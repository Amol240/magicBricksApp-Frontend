

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import img1 from "./images/sliderImages/img1.png";
import img2 from "./images/sliderImages/img2.png";
import img3 from "./images/sliderImages/img3.png";
import img4 from "./images/sliderImages/img4.png";

const items = [
  {
    id: 1,
    // altText: "Slide 1",
    // caption: "Caption 1",
    src: img1,
  },
  {
    id: 2,
    // altText: "Slide 2",
    // caption: "Caption 2",
    src: img2,
  },
  {
    id: 3,
    // altText: "Slide 3",
    // caption: "Caption 3",
    src: img3,
  },
  {
    id: 4,
    // altText: "Slide 4",
    // caption: "Caption 4",
    src: img4,
  },
];

const CustomCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} className="img-fluid"  />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
          className="carousel-caption"
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              width: 100%;
              height: 168px;
              background: black;
              border-radius: 10px;
            }
            .carousel-caption {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 10px;
              color: white;
            }`}
      </style>

      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
