import React from "react";
import { IMakeFromState } from "../../constants";


const Table = (props: { makes: IMakeFromState[] }) => {
  const { makes } = props;

  if (makes.length) {
    return (
      <div className="mt-4 container table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Make</th>
              <th>Model</th>
              <th>Transmission</th>
              <th>Fuel type</th>
            </tr>
          </thead>
          <tbody>
            {makes.map((make: IMakeFromState, index: number) => <tr key={index}>
              <td>{index + 1}</td>
              <td>{make.make}</td>
              <td>{make.model}</td>
              <td>{make.transmission}</td>
              <td>{make.fuelType}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default Table;
