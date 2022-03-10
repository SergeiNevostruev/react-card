import React from 'react';

type ImageBoxPropsType = {
  imageScr: any;
  imageBoxStyle: string;
  imageStyle: string;
  children: React.ReactNode;
};

const ImageBox: React.FC<ImageBoxPropsType> = ({
  imageScr,
  imageBoxStyle,
  imageStyle,
  children,
}) => (
  <div className={imageBoxStyle}>
    <div className={imageStyle}>
      <img
        style={{
          height: 'auto',
          width: 'auto',
          maxHeight: '100%',
          maxWidth: '100%',
        }}
        src={imageScr}
        alt="Изображение товара"
      />
    </div>
    {children}
  </div>
);

export default ImageBox;
