import React from "react";
import { IMake } from "../../../data";
import Button from "../../Button";


interface IMakesProps {
  make: IMake;
  makes: IMake[];
  onChangeMake: () => void;
}

const Makes = (props: IMakesProps) => {
  const { make, makes, onChangeMake } = props;

  return <div className="card p-4">
    {makes.map((car: IMake) =>
      <Button
        item={make.make}
        make={make.make}
        changeMethod={onChangeMake}
      >
        {car.make}
      </Button>,
    )}
  </div>;
};

export default Makes;
