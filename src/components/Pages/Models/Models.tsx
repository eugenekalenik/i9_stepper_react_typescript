import React from "react";
import { IMake } from "../../../data";
import Button from "../../Button";


interface IModelProps {
  model: string;
  make: IMake;
  makes: IMake[];
  onChangeModel: () => void;
}

const Models = (props: IModelProps) => {
  const { model, make, makes, onChangeModel } = props;

  makes.map((item: IMake, index: number) => {
    if (make.make === item.make) {
      return <div key={index} className="card p-4">
        {makes[index].models.map((model: string) =>
          <Button
            item={model}
            model={model}
            onChangeModel={onChangeModel}
          >
            {model}
          </Button>,
        )}
      </div>;
    }
  });
};

export default Models;
