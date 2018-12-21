import React from "react";
import { fuelTypes, IMake, makes, transmissions } from "../../data";
import FuelTypes from "./FuelTypes";
import Makes from "./Makes";
import Models from "./Models";
import Transmissions from "./Transmissions";


interface IPagesProps {
  model: string;
  step: number;
  steps: string[];
  make: IMake;
  transmission: string;
  fuelType: string;
  onChangeMake: () => void;
  onChangeModel: () => void;
  onChangeTransmission: () => void;
  onChangeFuelType: () => void;
}

const Pages = (props: IPagesProps) => {
  const {
    model,
    step,
    steps,
    make,
    transmission,
    fuelType,
    onChangeMake,
    onChangeModel,
    onChangeTransmission,
    onChangeFuelType,
  } = props;

  return <div className="container mt-4 mb-4">
    <h2 className="mt-4 mb-4">{step + 1}. {steps[step]}</h2>
    {step === 0 &&
      <Makes
        make={make}
        makes={makes}
        onChangeMake={onChangeMake}
      />}
    {step === 1 &&
      <Models
        model={model}
        make={make}
        makes={makes}
        onChangeModel={onChangeModel}
      />}
    {step === 2 &&
      <Transmissions
        transmission={transmission}
        transmissions={transmissions}
        onChangeTransmission={onChangeTransmission}
      />}
    {step === 3 && <FuelTypes fuelType={fuelType} fuelTypes={fuelTypes} onChangeFuelType={onChangeFuelType} />}
  </div>;
};

export default Pages;
