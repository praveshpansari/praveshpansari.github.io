import React from "react";
import { IllegalArgumentError } from "../terminal.model";

const clear = (args: string[], setPrompt: Function, setOutput: Function) => {
  if (args.length) throw new IllegalArgumentError();
  setOutput(<></>);
};

export default clear;
