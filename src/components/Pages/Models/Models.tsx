import React, { MouseEvent } from "react";
import { IMake } from "../../../constants";
import { getIndexOfArrayElement } from "../../../helpers";
import Button from "../../Button";


interface IModelProps {
  model: string;
  make: string;
  makes: IMake[];
  onChangeModel: (e: MouseEvent) => void;
}

const Models = (props: IModelProps) => {
  const { model, make, makes, onChangeModel } = props;
  const models = makes.filter((m) => m.make === make)[0].models;

  return <div className="card p-4">
    {models.map((mdl: string) =>
      <Button
        key={mdl}
        item={mdl}
        step={getIndexOfArrayElement(models, model)}
        onClickAction={onChangeModel}
      >
        {mdl}
      </Button>,
    )}
  </div>;
};

export default Models;
