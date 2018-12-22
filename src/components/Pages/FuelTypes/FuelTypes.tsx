import React, { MouseEvent } from "react";
import { getIndexOfArrayElement } from "../../../helpers";
import Button from "../../Button";


interface IFuelTypesProps {
  fuelType: string;
  fuelTypes: string[];
  onChangeFuelType: (e: MouseEvent) => void;
}

const FuelTypes = (props: IFuelTypesProps) => {
  const { fuelType, fuelTypes, onChangeFuelType } = props;

  return <div className="card p-4">
    {fuelTypes.map((item: string) =>
      <Button
        key={item}
        item={item}
        step={getIndexOfArrayElement(fuelTypes, fuelType)}
        onClickAction={onChangeFuelType}
      >
        {item}
      </Button>,
    )}
  </div>;
};

export default FuelTypes;
