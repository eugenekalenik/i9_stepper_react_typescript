export const steps: string[] = ["Make", "Model", "Transmission", "Fuel type"];
export const transmissions: string[] = ["Manual gearbox", "Semi-automatic", "Automatic transmission"];
export const fuelTypes: string[] = ["Petrol", "Diesel", "Electric", "Vodka"];

export interface IMake {
  make: string;
  models: string[];
  transmissions: string[];
  fuelTypes: string[];
}

export interface IMakeFromState {
  make: string;
  model: string;
  transmission: string;
  fuelType: string;
}

export const makes: IMake[] = [
  {
    fuelTypes,
    make: "Alfa Romeo",
    models: ["Brera", "Giulia", "Spider"],
    transmissions,
  },
  {
    fuelTypes,
    make: "Bentley",
    models: ["Azure", "Continental", "Mulsanne"],
    transmissions,
  },
  {
    fuelTypes,
    make: "Cadillac",
    models: ["Allante", "Deville", "Eldorado"],
    transmissions,
  },
];
