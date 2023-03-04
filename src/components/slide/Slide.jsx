import React from "react";
import "./slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../catCard/CatCard";
import {cards} from '../../data'

const Slide = ({children, slidesToShow, arrowScroll}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider dots slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
          {cards.map(card =>(
            <CatCard item={card} key={card.id}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
