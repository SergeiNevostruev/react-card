import React from 'react';
import '../App.css';
import serverData from '../data/serverData';

const InfoProduct = () => (
  <div className="info-product">
    <p>Рейтинг {serverData.rating}</p>
    <h2>{serverData.title}</h2>
    <p>
      {serverData.currency} {serverData.price}
    </p>
  </div>
);

export default InfoProduct;
