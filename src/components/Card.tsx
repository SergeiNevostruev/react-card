import React, { useState, CSSProperties } from 'react';
import '../App.css';
import Button from './Button';
// import img from './assets/dress.jpg';
import ImageBox from './ImageBox';
import InfoProduct from './InfoProduct';
import serverData from '../data/serverData';

// const getViews = () => {
//   setViewimg(true);
//   console.log('Просмотр');
// };

const putBasket = () => {
  console.log('В корзину');
};

const Card = () => {
  const [viewimg, setViewimg] = useState(false);
  const imgStyle: CSSProperties = {
    position: 'absolute',
    width: 'auto',
    height: '100vh',
    right: '25%',
  };
  const getViews = () => {
    setViewimg(true);
  };
  const closeViews = () => {
    if (viewimg) setViewimg(false);
  };
  return (
    <div role="presentation" className="card" onClick={closeViews}>
      <ImageBox imageScr={serverData.img} imageBoxStyle="image-box" imageStyle="image">
        <Button buttonName="БЫСТРЫЙ ПРОСМОТР" buttonStyle="button" handler={getViews} />
        <Button buttonName="В КОРЗИНУ" buttonStyle="button" handler={putBasket} />
      </ImageBox>
      <InfoProduct />
      {viewimg && <img src={serverData.img} alt="Фотография товара" style={imgStyle} />}
    </div>
  );
};

export default Card;
