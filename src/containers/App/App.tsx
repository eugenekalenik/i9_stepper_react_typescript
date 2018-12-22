import React, { Component } from "react";
import Buttons from "../../components/Buttons";
import Header from "../../components/Header";
import Pages from "../../components/Pages";
import Table from "../../components/Table";
import { IMakeFromState } from "../../constants";


interface IState {
  fuelType: string;
  make: string;
  makes: IMakeFromState[];
  model: string;
  step: number;
  transmission: string;
}

const initialState: IState = {
  fuelType: "",
  make: "",
  makes: [],
  model: "",
  step: 0,
  transmission: "",
};

class App extends Component<{}, IState> {
  public state = initialState;

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
    const { step, make, makes, model, transmission, fuelType } = this.state;

    return (
      <>
        <Header />
        <Pages
          step={step}
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
          make={make}
          model={model}
          transmission={transmission}
          fuelType={fuelType}
          onBack={this.back}
          onContinue={this.continue}
          onAdd={this.addCar}
          onReset={this.reset}
        />
        <Table
          makes={makes}
        />
        <div className="container text-right">
          <hr />
          <small>Updated 22.12.2018</small>
        </div>
      </>
    );
  }
}

export default App;
