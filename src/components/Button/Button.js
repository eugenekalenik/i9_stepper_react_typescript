import React from 'react';


const Button = ({ item, stepName, changeMethod }) => {
  return (
    <button
      key={item}
      className={stepName === item ? 'btn btn-warning mr-2 mb-2' : 'btn btn-light mr-2 mb-2'}
      onClick={changeMethod}>
      {item}
    </button>
  )
}

export default Button;