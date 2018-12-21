import React from "react";


interface IButtonProps {
  item: string;
  make: string;
  onChangeModel: () => void;
}

const Button = (props: IButtonProps) => {
  const { item, model, onChangeModel } = props;

  return (
    <button
      key={item}
      className={model === item ? "btn btn-warning mr-2 mb-2" : "btn btn-light mr-2 mb-2"}
      onClick={onChangeModel}>
      {item}
    </button>
  );
};

export default Button;
