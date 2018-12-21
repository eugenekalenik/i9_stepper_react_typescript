import React, { Component } from "react";
import Buttons from "../../components/Buttons";
import Header from "../../components/Header";
import Pages from "../../components/Pages";
import Table from "../../components/Table";
import { IMake, steps } from "../../data";


interface IState {
  makes: IMake[];
  model: string;
  fuelType: string;
  make: string;
  step: number;
  steps: string[];
  transmission: string;
}

class App extends Component<{}, IState> {
  public state = {
    fuelType: "",
    make: "",
    makes: [],
    model: "",
    step: 0,
    steps,
    transmission: "",
  };

  public back = () => {
    if (this.state.step === 1) {
      this.setState({ model: "" });
    }

    this.setState({ step: this.state.step - 1 });
  }

  public continue = () => {
    this.setState({ step: this.state.step + 1 });
  }

  public addCar = () => {
    this.setState({
      makes: [...this.state.makes, {
        fuelType: this.state.fuelType,
        make: this.state.make,
        model: this.state.model,
        transmission: this.state.transmission,
      }],
    });
    this.reset();
  }

  public reset = () => {
    this.setState({
      fuelType: "",
      make: "",
      model: "",
      step: 0,
      transmission: "",
    });
  }

  public changeMake = (e: any) => {
    this.setState({ make: e.target.innerText });
  }

  public changeModel = (e: any) => {
    this.setState({ model: e.target.innerText });
  }

  public changeTransmission = (e: any) => {
    this.setState({ transmission: e.target.innerText });
  }

  public changeFuelType = (e: any) => {
    this.setState({ fuelType: e.target.innerText });
  }

  public render() {
    const { step, make, model, transmission, fuelType, makes } = this.state;

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
          currentMake={make}
          model={model}
          transmission={transmission}
          fuelType={fuelType}
          onBack={this.back}
          onContinue={this.continue}
          onAdd={this.addCar}
          onReset={this.reset}
        />
        <Table makes={makes} />
      </>
    );
  }
}

export default App;
