import React from 'react';


const Buttons = ({ step, steps, make, model, transmission, fuelType, onBack, onContinue, onAdd, onReset }) => {
  const isContinueButtonDesabled = () => {
    return (step === 0 && make === '') || (step === 1 && model === '') || (step === 2 && transmission === '') || (step === 3 && fuelType === '');
  }

  return (
    <div className="container">
      <div className="d-flex">
        {step > 0 && <button className="btn btn-light mr-2" onClick={onBack}>Back</button>}
        {step !== steps.length - 1 && <button className="btn btn-primary mr-2" onClick={onContinue} disabled={isContinueButtonDesabled()}>Continue</button>}
        {step === steps.length - 1 && <>
          <button className="btn btn-success mr-2" onClick={onAdd} disabled={isContinueButtonDesabled()}>Add</button>
          <button className="btn btn-danger" onClick={onReset}>Reset</button>
        </>}
      </div>
    </div>
  )
}

export default Buttons;