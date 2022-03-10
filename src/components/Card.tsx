import React from 'react';
import '../App.css';
import Button from './Button';
// import img from './assets/dress.jpg';
import ImageBox from './ImageBox';
import InfoProduct from './InfoProduct';
import serverData from '../data/serverData';

const getViews = () => {
  console.log('Просмотр');
};

const putBasket = () => {
  console.log('В корзину');
};

const Card = () => (
  <div className="card">
    <ImageBox imageScr={serverData.img} imageBoxStyle="image-box" imageStyle="image">
      <Button buttonName="БЫСТРЫЙ ПРОСМОТР" buttonStyle="button" handler={getViews} />
      <Button buttonName="В КОРЗИНУ" buttonStyle="button" handler={putBasket} />
    </ImageBox>
    <InfoProduct />
  </div>
);

export default Card;
