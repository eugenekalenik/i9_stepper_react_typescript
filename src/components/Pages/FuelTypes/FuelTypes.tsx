import React from "react";
import Button from "../../Button";


interface IFuelTypesProps {
  fuelType: string;
  fuelTypes: string[];
  onChangeFuelType: () => void;
}

const FuelTypes = (props: IFuelTypesProps) => {
  const { fuelType, fuelTypes, onChangeFuelType } = props;

  return <div className="card p-4">
    {fuelTypes.map((item: string) =>
      <Button
        item={item}
        stepName={fuelType}
        changeMethod={onChangeFuelType}
      >
        {item}
      </Button>,
    )}
  </div>;
};

export default FuelTypes;
