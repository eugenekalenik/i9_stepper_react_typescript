import React, { MouseEvent } from "react";
import { IMake } from "../../../constants";
import { getIndexOfArrayElement } from "../../../helpers";
import Button from "../../Button";


interface IMakesProps {
  make: string;
  makes: IMake[];
  onChangeMake: (e: MouseEvent) => void;
}

const Makes = (props: IMakesProps) => {
  const { make, makes, onChangeMake } = props;

  return <div className="card p-4">
    {makes.map((item: IMake) =>
      <Button
        key={item.make}
        item={item.make}
        step={getIndexOfArrayElement(makes.map((m: IMake) => m.make), make)}
        onClickAction={onChangeMake}
      >
        {item.make}
      </Button>,
    )}
  </div>;
};

export default Makes;
