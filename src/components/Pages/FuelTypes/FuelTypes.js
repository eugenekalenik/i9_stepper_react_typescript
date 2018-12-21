import React from 'react';
import Button from '../../Button';


const FuelTypes = ({ fuelType, fuelTypes, onChangeFuelType }) => {
  return <div className="card p-4">
    {fuelTypes.map(item =>
      <Button
        item={item}
        stepName={fuelType}
        changeMethod={onChangeFuelType}
      >
        {item}
      </Button>
    )}
  </div>
}

export default FuelTypes;