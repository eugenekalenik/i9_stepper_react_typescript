import React, { Component } from 'react';
import Header from '../../components/Header';
import Pages from '../../components/Pages';
import Buttons from '../../components/Buttons';
import Table from '../../components/Table';
import { steps } from '../../data';


class App extends Component {
  state = {
    steps,
    step: 0,
    make: '',
    model: '',
    transmission: '',
    fuelType: '',
    cars: [],
  }

  back = () => {
    if (this.state.step === 1) {
      this.setState({ model: '' });
    }

    this.setState({ step: this.state.step - 1 });
  }

  continue = () => {
    this.setState({ step: this.state.step + 1 });
  }

  addCar = () => {
    this.setState({
      cars: [...this.state.cars, {
        make: this.state.make,
        model: this.state.model,
        transmission: this.state.transmission,
        fuelType: this.state.fuelType,
      }]
    });
    this.reset();
  }

  reset = () => {
    this.setState({
      step: 0,
      make: '',
      model: '',
      transmission: '',
      fuelType: '',
    });
  }

  changeMake = (e) => {
    this.setState({ make: e.target.innerText });
  }

  changeModel = (e) => {
    this.setState({ model: e.target.innerText });
  }

  changeTransmission = (e) => {
    this.setState({ transmission: e.target.innerText });
  }

  changeFuelType = (e) => {
    this.setState({ fuelType: e.target.innerText });
  }

  render() {
    const { step, steps, make, model, transmission, fuelType, cars } = this.state;

    console.log(this.state);

    return (
      <>
        <Header />
        <Pages
          step={step}
          steps={steps}
          make={make}
          model={model}
          transmission={transmission}
          fuelType={fuelType}
          onChangeMake={this.changeMake}
          onChangeModel={this.changeModel}
          onChangeTransmission={this.changeTransmission}
          onChangeFuelType={this.changeFuelType}
        />
        <Buttons
          step={step}
          steps={steps}
          make={make}
          model={model}
          transmission={transmission}
          fuelType={fuelType}
          onBack={this.back}
          onContinue={this.continue}
          onAdd={this.addCar}
          onReset={this.reset}
        />
        <Table cars={cars} />
      </>
    );
  }
}

export default App;