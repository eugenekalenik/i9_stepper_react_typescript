import React from 'react';
import Button from '../../Button';


const Transmissions = ({ transmission, transmissions, onChangeTransmission }) => {
  return <div className="card p-4">
    {transmissions.map(item =>
      <Button
        item={item}
        stepName={transmission}
        changeMethod={onChangeTransmission}
      >
        {item}
      </Button>
    )}
  </div>
}

export default Transmissions;