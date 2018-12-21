import React from 'react';
import Button from '../../Button';


const Models = ({ model, make, makes, onChangeModel }) => {
  return makes.map((item, index) => {
    if (make === item.make) {
      return <div key={index} className="card p-4">
        {makes[index].models.map(item =>
          <Button
            item={item}
            stepName={model}
            changeMethod={onChangeModel}
          >
            {item}
          </Button>
        )}
      </div>
    }
  })
}

export default Models;