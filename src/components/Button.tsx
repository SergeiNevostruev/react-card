import React, { MouseEventHandler } from 'react';

type ButtonPropsType = {
  buttonName: string;
  buttonStyle: string;
  handler: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ buttonName, buttonStyle, handler }: ButtonPropsType) => (
  <button className={buttonStyle} type="button" onClick={handler}>
    {buttonName}
  </button>
);

export default Button;
