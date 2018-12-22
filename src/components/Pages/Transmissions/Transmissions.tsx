import React, { MouseEvent } from "react";
import Button from "../../Button";


interface ITransmissionsProps {
  transmission: string;
  transmissions: string[];
  onChangeTransmission: (e: MouseEvent) => void;
}

const Transmissions = (props: ITransmissionsProps) => {
  const { transmission, transmissions, onChangeTransmission } = props;

  return <div className="card p-4">
    {transmissions.map((item: string) =>
      <Button
        key={item}
        item={item}
        step={transmission}
        onClickAction={onChangeTransmission}
      >
        {item}
      </Button>,
    )}
  </div>;
};

export default Transmissions;
