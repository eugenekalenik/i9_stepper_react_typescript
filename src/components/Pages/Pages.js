import React from 'react';
import { makes, transmissions, fuelTypes } from '../../data';
import Makes from './Makes';
import Models from './Models';
import FuelTypes from './FuelTypes';
import Transmissions from './Transmissions';


const Pages = ({
  step,
  steps,
  make,
  model,
  transmission,
  fuelType,
  onChangeMake,
  onChangeModel,
  onChangeTransmission,
  onChangeFuelType
}) => (<div className="container mt-4 mb-4">
  <h2 className="mt-4 mb-4">{step + 1}. {steps[step]}</h2>
  {step === 0 && <Makes make={make} makes={makes} onChangeMake={onChangeMake} />}
  {step === 1 && <Models model={model} make={make} makes={makes} onChangeModel={onChangeModel} />}
  {step === 2 && <Transmissions transmission={transmission} transmissions={transmissions} onChangeTransmission={onChangeTransmission} />}
  {step === 3 && <FuelTypes fuelType={fuelType} fuelTypes={fuelTypes} onChangeFuelType={onChangeFuelType} />}
</div>);

export default Pages;