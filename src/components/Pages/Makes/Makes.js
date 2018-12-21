import React from 'react';
import Button from '../../Button';


const Makes = ({ make, makes, onChangeMake }) => {
  return <div className="card p-4">
    {makes.map(item =>
      <Button
        item={item.make}
        stepName={make}
        changeMethod={onChangeMake}
      >
        {item.make}
      </Button>
    )}
  </div>
}

export default Makes;