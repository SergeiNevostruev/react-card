import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import '../App.css';
import serverData from '../data/serverData';

const InfoProduct = () => {
  const [rating, setRating] = useState(serverData.rating);
  const changeRating = (newRating: any) => {
    setRating(newRating);
  };
  return (
    <div className="info-product">
      <StarRatings
        starRatedColor="red"
        rating={rating}
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starSpacing="5px"
        starDimension="20px"
      />
      {/* <p>Рейтинг {serverData.rating}</p> */}
      <h2>{serverData.title}</h2>
      <p>
        {serverData.currency} {serverData.price}
      </p>
    </div>
  );
};

export default InfoProduct;
