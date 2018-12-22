import React, { MouseEvent } from "react";


interface IButtonProps {
  item?: string;
  step?: string;
  onClickAction?: (e: MouseEvent) => void;
}

const Button = (props: IButtonProps) => {
  const { item, step, onClickAction } = props;

  return (
    <button
      className={step === item ? "btn btn-warning mr-2 mb-2" : "btn btn-light mr-2 mb-2"}
      onClick={onClickAction}>
      {item}
    </button>
  );
};

export default Button;
